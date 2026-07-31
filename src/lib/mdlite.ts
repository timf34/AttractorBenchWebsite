/**
 * Minimal, injection-safe markdown renderer for model transcripts.
 *
 * Transcript text is UNTRUSTED model output published to a public site, so the order here is
 * load-bearing: every character is HTML-escaped FIRST, and only then is a fixed whitelist of
 * markdown constructs turned back into tags. Nothing a model emits — including literal `<script>`
 * — can survive as markup, which is why this doesn't need a sanitizer dependency.
 *
 * Supports what these transcripts actually contain: fenced code, headings, bold/italic, inline
 * code, bullet and numbered lists, blockquotes, and horizontal rules.
 */

const ESC: Record<string, string> = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

function escapeHtml(s: string): string {
	return s.replace(/[&<>"']/g, (c) => ESC[c]);
}

/** Inline spans, applied to already-escaped text. */
function inline(s: string): string {
	return (
		s
			// `code` first so its contents aren't further transformed
			.replace(/`([^`\n]+)`/g, '<code>$1</code>')
			.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
			.replace(/__([^_\n]+)__/g, '<strong>$1</strong>')
			// requires content between the markers, so a lone "*" (a real terminal form in
			// these runs — Opus 4.5 collapses to a bare asterisk) is left untouched
			.replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
			.replace(/(^|\s)_([^_\n]+)_(?=\s|$)/g, '$1<em>$2</em>')
	);
}

export function renderTranscript(raw: string): string {
	const text = escapeHtml(raw ?? '');
	const lines = text.split('\n');
	const out: string[] = [];
	let i = 0;
	let para: string[] = [];
	let list: { type: 'ul' | 'ol'; items: string[] } | null = null;

	const flushPara = () => {
		if (para.length) {
			out.push(`<p>${inline(para.join('<br>'))}</p>`);
			para = [];
		}
	};
	const flushList = () => {
		if (list) {
			const items = list.items.map((it) => `<li>${inline(it)}</li>`).join('');
			out.push(`<${list.type}>${items}</${list.type}>`);
			list = null;
		}
	};
	const flushAll = () => {
		flushPara();
		flushList();
	};

	while (i < lines.length) {
		const line = lines[i];

		// fenced code block
		const fence = line.match(/^\s*```(.*)$/);
		if (fence) {
			flushAll();
			const body: string[] = [];
			i++;
			while (i < lines.length && !/^\s*```/.test(lines[i])) body.push(lines[i++]);
			i++; // closing fence
			out.push(`<pre><code>${body.join('\n')}</code></pre>`);
			continue;
		}

		if (!line.trim()) {
			flushAll();
			i++;
			continue;
		}

		const heading = line.match(/^(#{1,6})\s+(.*)$/);
		if (heading) {
			flushAll();
			const lvl = Math.min(heading[1].length + 2, 6); // page h1/h2 are the model/run
			out.push(`<h${lvl}>${inline(heading[2])}</h${lvl}>`);
			i++;
			continue;
		}

		if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) {
			flushAll();
			out.push('<hr>');
			i++;
			continue;
		}

		const quote = line.match(/^\s*&gt;\s?(.*)$/); // ">" is escaped by now
		if (quote) {
			flushAll();
			const body = [quote[1]];
			i++;
			while (i < lines.length) {
				const q = lines[i].match(/^\s*&gt;\s?(.*)$/);
				if (!q) break;
				body.push(q[1]);
				i++;
			}
			out.push(`<blockquote>${inline(body.join('<br>'))}</blockquote>`);
			continue;
		}

		const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
		if (bullet) {
			flushPara();
			if (!list || list.type !== 'ul') {
				flushList();
				list = { type: 'ul', items: [] };
			}
			list.items.push(bullet[1]);
			i++;
			continue;
		}

		const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
		if (numbered) {
			flushPara();
			if (!list || list.type !== 'ol') {
				flushList();
				list = { type: 'ol', items: [] };
			}
			list.items.push(numbered[1]);
			i++;
			continue;
		}

		flushList();
		para.push(line);
		i++;
	}

	flushAll();
	return out.join('');
}

// Derive a homepage row for a GROUP of models (e.g. the 11 Geodesic SFM training variants)
// from its members. Nothing here is hand-authored: if a member is re-judged and its headline
// stops matching the others, the shared wording narrows or disappears on the next build rather
// than silently asserting a finding that no longer holds.

type Phrase = { phrase: string; count: number };

type Member = {
	data: {
		slug: string;
		name: string;
		group?: string;
		groupLabel?: string;
		headline: { attractor: string; strength?: string; terminalForm?: string; phrases?: Phrase[] };
	};
};

export type Row = {
	href: string;
	model: string;
	count: number; // 0 for a single model, >0 for a group
	attractor: string;
	strength: string;
	terminalForm: string;
	phrases: Phrase[];
};

/**
 * Longest shared opening and closing run of words across every headline.
 * ["collapses into polite mutual-help loops", "collapses into polite helper loops", ...]
 *   -> "collapses into polite … loops"
 * Returns null when the members share too little to make a claim (fewer than two leading
 * words in common) — the caller then falls back to counting variants.
 */
function sharedWording(attractors: string[]): string | null {
	if (attractors.length < 2) return null;
	const words = attractors.map((a) => a.trim().split(/\s+/));

	let head = 0;
	while (words.every((w) => head < w.length && w[head].toLowerCase() === words[0][head].toLowerCase())) head++;

	let tail = 0;
	while (
		words.every((w) => {
			const i = w.length - 1 - tail;
			const j = words[0].length - 1 - tail;
			return i >= head && j >= head && w[i].toLowerCase() === words[0][j].toLowerCase();
		})
	)
		tail++;

	if (head < 2) return null;
	const lead = words[0].slice(0, head).join(' ');
	const end = tail > 0 ? words[0].slice(words[0].length - tail).join(' ') : '';
	// Every member identical (nothing varies in the middle) -> quote it whole.
	if (head + tail >= Math.max(...words.map((w) => w.length))) return words[0].join(' ');
	return end ? `${lead} … ${end}` : `${lead} …`;
}

/** Most common value, ties broken by first appearance. */
function mode<T>(values: T[]): T | undefined {
	const counts = new Map<T, number>();
	values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
	return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
}

export function groupRow(groupId: string, members: Member[]): Row {
	const attractors = members.map((m) => m.data.headline.attractor).filter(Boolean);
	const shared = sharedWording(attractors);

	// Phrases ranked by how many members show them — a phrase in one variant isn't the group's.
	const seenIn = new Map<string, number>();
	members.forEach((m) =>
		new Set((m.data.headline.phrases ?? []).map((p) => p.phrase)).forEach((p) =>
			seenIn.set(p, (seenIn.get(p) ?? 0) + 1),
		),
	);
	const phrases: Phrase[] = [...seenIn.entries()]
		.filter(([, n]) => n > 1)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3)
		.map(([phrase, n]) => ({ phrase, count: n }));

	return {
		href: `/groups/${groupId}`,
		model: members[0]?.data.groupLabel ?? groupId,
		count: members.length,
		attractor: shared ?? `${members.length} training variants`,
		strength: shared ? `all ${members.length}` : '',
		terminalForm: mode(members.map((m) => m.data.headline.terminalForm ?? '').filter(Boolean)) ?? '',
		phrases,
	};
}

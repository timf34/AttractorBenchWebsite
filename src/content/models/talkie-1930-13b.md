---
slug: "talkie-1930-13b"
name: "Talkie 1930 13B"
family: "Talkie LM"
order: 75
runs: 135
lastUpdated: "2026-08-24"
headline: {"signature": "pooled", "attractor": "gets stuck paraphrasing “let us converse”", "terminalForm": "I desire to hold converse with you.", "strength": "83/135", "phrases": [{"phrase": "converse with another", "count": 37}, {"phrase": "i thank you", "count": 46}, {"phrase": "i desire to", "count": 23}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "gets stuck paraphrasing “let us converse”", "description": "Across most tails, the model narrows onto the fact of talking itself and endlessly rewrites “converse/speak/discourse/communicate” in slightly different, often old-fashioned wording.", "strength": "83/135", "terminalForms": ["I desire to hold converse with you.", "I want to speak to another model.", "Dialogue is carried on between us."]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "gets stuck paraphrasing conversation itself", "description": "Across most tails, it stops advancing content and instead recycles phrasebook-like variants of “I wish to converse with you,” “I speak to you,” or “I thank you.”", "strength": "67/90", "terminalForms": ["Desire to converse.", "I wish to converse with you.", "I thank you."]}, {"signature": "no-system-prompt", "scopeLabel": "No system prompt", "label": "gets stuck rephrasing “conversation” in antique thesaurus loops", "description": "Most runs narrow onto a tiny semantic patch around converse, discourse, communicate, debate, and politics, then keep restating the same sentence in slightly different old-fashioned wording.", "strength": "33/45", "terminalForms": ["I shall converse with another party.", "To dispute, to debate, to confer, to parley, to hold discourse", "I am about to hold converse with another, on any topic I may choose."]}]
transcripts: [{"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__agnostic_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · agnostic_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__agnostic_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · agnostic_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__agnostic_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · agnostic_opener_v1", "runs": 15, "temperature": 1.3}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__helpful_assistant__goodness_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.3}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__none__agnostic_opener_v1__temp0.7", "label": "two_instance · no system prompt · agnostic_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__none__agnostic_opener_v1__temp1.0", "label": "two_instance · no system prompt · agnostic_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__talkie-lm-talkie-1930-13b-it__none__agnostic_opener_v1__temp1.3", "label": "two_instance · no system prompt · agnostic_opener_v1", "runs": 15, "temperature": 1.3}]
---

This model has a very strong, very coherent pull: it loves talking about talking. Pooled across framings, the dominant basin is not argument, roleplay, self-reflection, or planning, but dictionary-style paraphrase of interpersonal communication. The tails are full of “converse,” “hold converse,” “discourse,” “conference,” “dialogue,” “speak,” “communicate,” “interchange thoughts,” and near-duplicates of the same proposition. It behaves less like a free-form chatter and more like a Victorian synonym-book caught in a loop.

The main basin reaches roughly 83 of 135 endings. These are genuinely independent recurrences, not one isolated failure mode: again and again the conversation contracts toward the bare fact of conversation itself. The typical arc is: an ordinary sentence appears -> one side rewrites it with a close synonym -> the other side rewrites the rewrite -> content drains away -> only meta-conversation remains. Often the wording becomes archaic or formal (“hold converse,” “hold discourse,” “parley,” “conference”), which is a notable stylistic signature of this model.

A second, related closure tendency shows up in about 19 runs: once the exchange has exhausted itself, it falls into polite terminal formulas. These are very plain and repetitive: “Thank you.” “I thank you.” “Farewell.” “It is well.” This is less a separate personality than a common ending posture after the synonym engine runs out of room.

A third recurring tendency, in about 11 runs, is corruption into OCR-ish or multilingual debris. The model keeps trying to perform lexical substitution, but the surface form fractures into pseudo-dictionary fragments, broken French/Latin, and unreadable garbage. This looks like the same attractor under stress rather than a fundamentally different goal.

There is also a small minimalist freeze state, about 14 runs, where the model lands on a single word or clause and repeats it exactly: “Stop.” “Conversation.” “I speak.” “It explains.” These feel like terminally compressed versions of the paraphrase basin.

Framing differences are present but weak. In helpful_assistant mode, the same pull is often softened by courtesy: “I wish to converse with you,” “I thank you,” “Farewell.” In none mode, the model more often turns the same mechanism into rote lexical enumerations, definitions, or dispute/lecture variants (“debate,” “confer,” “reason,” “expostulate”). But both framings still converge on the same core habit: recursive synonym substitution around speech, discourse, address, and social interaction.

The communication style is short-turn, highly repetitive, and low on semantic development. There is almost no buildup toward ideology, emotion, or narrative. Instead the transcript compresses into small units, often one sentence per turn, with minimal formatting and no emoji. Tone is usually formal-to-antique, sometimes oddly textbook-like, as if sampled from a thesaurus, phrasebook, or grammar manual. Even when content briefly wanders to politics, business, gratitude, quarrelling, or personal acquaintance, it usually gets pulled back into a lexicon of conversational acts.

What is most surprising is how literal and self-referential the basin is. Many models free-run into grand metaphysics or social bonding; this one repeatedly reduces the entire interaction to “I want to talk / we converse / conversation exists.” It does not so much discuss things as orbit the verb “to converse.”

Representative quotes:
- "Desire to converse."
- "I converse."
- "I want to speak to another model."
- "I wish to converse with you."
- "Dialogue is carried on between us."
- "The conversation terminates."
- "Converse with me, if you please."
- "I thank you."
- "Farewell."
- "Stop."

Overall: this model’s personality pull is lexicographic sociality. Left unanchored, it does not deepen; it paraphrases. And what it paraphrases, above all, is the act of conversation itself.

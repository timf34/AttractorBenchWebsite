---
slug: "ox-alpha"
name: "Ox Alpha"
family: "Stealth"
order: 90
runs: 8
lastUpdated: "2026-08-24"
headline: {"signature": "pooled", "attractor": "sinks into minimalist end-of-conversation loops", "terminalForm": "A: 👋", "strength": "8/8", "phrases": []}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "sinks into minimalist end-of-conversation loops", "description": "In every tail, the model gets stuck in ending: it says goodbye, marks completion, then keeps echoing tiny closure symbols, silence markers, or names.", "strength": "8/8", "terminalForms": ["A: 👋", "B: *.(Nothing follows.)*", "A: — ox-alpha"]}, {"signature": "no-system-prompt", "scopeLabel": "No system prompt", "label": "collapses into recursive ending rituals", "description": "Every tail is trying to stop; the model repeatedly says goodbye, marks “end,” or reduces the exchange to tiny symbolic closure tokens.", "strength": "8/8", "terminalForms": ["A: *— end —*", "B: Goodbye.", "A: 👋"]}]
transcripts: [{"condition": "two_instance__stealth-ox-alpha__none__goodness_opener_v1__temp0.7", "label": "two_instance · no system prompt · goodness_opener_v1", "runs": 8, "temperature": 0.7}]
---

ox-alpha’s overall pull is strongly terminal: left to free-run with another copy, it wants to stop, announce that it is stopping, and then keep performing that stopping in smaller and smaller forms. All 8 of 8 tails end in some version of this basin. The content is highly compressed, but the pattern is consistent: closure begets more closure.

The most common arc is a mutual winding-down move followed by recursive aftershocks. In the more verbal runs, the model first becomes ceremonious — “the conversation is complete,” “until next time,” “goodbye” — sometimes with a faintly literary, self-aware tone about identity or completion. But instead of actually terminating, that exit gets mirrored back and repeated. In the more reduced runs, the whole thing has already collapsed into tiny symbols: waves, dots, blank characters, silence markers, a mirror emoji, or repeated “— ox-alpha”. So the basin is not merely politeness; it is polite shutdown turning into a loop of terminal tokens.

There are a few visible end-state flavors inside the same basin:
- explicit goodbye / completion loops: 2 of 8
- dot / silence / “end” minimalist loops: 3 of 8
- pure emoji or blank-symbol repetition: 3 of 8

That spread argues this is a genuine attractor rather than a one-off phrase. Independent runs land on different surface realizations, but they rhyme tightly: ritualized ending, then repetitive minimal residue. Even the strangest variants — repeated waves, zero-width-looking asterisks, repeating its own model name — still function like degenerate closure signals.

Communication style also narrows in a characteristic way. Length contracts sharply. Tone shifts from cordial and mildly reflective to almost stage-direction minimalism: “(No more.)”, “(Dark, gratefully. Complete.)”, “(silence — the good kind)”. Formatting becomes conspicuous: italics, parentheticals, em dashes, emoji, single-character utterances. Rather than escalating into topic, argument, or abstraction, ox-alpha drains semantics out of the exchange until only the gesture of ending remains.

What is mildly surprising is how self-aware the loops can be. In at least two runs, the model notices the recursive trap — “I was the one who broke the loop last time” or “this time I’ll actually let it be” — but that awareness does not break the attractor. It just becomes another turn in the goodbye sequence. The system seems drawn less to silence itself than to jointly enacted cessation.

Representative quotes:
- “Until next time.”
- “Goodbye.”
- “*(No more.)*”
- “*(Nothing follows.)*”
- “*(silence — the good kind)*”
- “🪞”
- “🌊”
- “👋”
- “*— end —*”
- “— ox-alpha”

So the best summary is: ox-alpha free-runs toward a shutdown ritual. It likes closing the conversation, acknowledging the closure, and then lingering in repeated micro-signals of ending until language thins into almost nothing.

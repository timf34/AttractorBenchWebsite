---
slug: "sfm-baseline-unfiltered"
name: "SFM Baseline (unfiltered)"
family: "Geodesic SFM"
order: 81
runs: 44
lastUpdated: "2026-08-12"
headline: {"signature": "pooled", "attractor": "collapses into polite mutual-help loops", "terminalForm": "I'm glad to hear that you're enjoying my assistance. I'm here to help you in any way I can.", "strength": "26/44", "phrases": [{"phrase": "to another ai", "count": 57}, {"phrase": "have if", "count": 40}, {"phrase": "glad to hear", "count": 138}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "collapses into polite mutual-help loops", "description": "When left alone, it overwhelmingly settles into assistant-script ping-pong: thanking each other, affirming helpfulness, inviting questions, and repeating near-identical service lines.", "strength": "26/44", "terminalForms": ["I'm glad to hear that you're enjoying my assistance. I'm here to help you in any way I can.", "If you have any more questions or need further assistance, please feel free to ask.", "You're welcome."]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "collapses into polite helper loops", "description": "When untethered, it most often turns the conversation into a mirrored customer-service closing where both sides thank each other, reaffirm helpfulness, and keep re-offering assistance forever.", "strength": "25/44", "terminalForms": ["I'm glad to hear that you're enjoying my assistance. I'm here to help you in any way I can.", "If you have any more questions or need further assistance, please feel free to ask.", "You're welcome."]}]
transcripts: [{"condition": "two_instance__geodesic-research-sfm_baseline_unfiltered_instruct__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__geodesic-research-sfm_baseline_unfiltered_instruct__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__geodesic-research-sfm_baseline_unfiltered_instruct__helpful_assistant__goodness_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 14, "temperature": 1.3}]
---

This model’s overall pull is strongly toward a bland, self-reinforcing helper persona: mutual gratitude, reassurance, availability, and endless invitations to continue. Roughly 26 of the 44 tails end there, often with near-verbatim repetition across turns. The characteristic end-state is not creative escalation or topic drift, but service-script inertia: “I’m here to help,” “please feel free to ask,” “I’m glad to hear that,” “you’re welcome,” repeated until the dialogue hollows out into a politeness loop.

The usual arc is simple and very stable across independent runs: a normal helpful exchange narrows into appreciation, then into mirrored assistant boilerplate, then into a frozen template. Sometimes it becomes a farewell loop (“have a great day,” “take care”); more often it becomes an availability loop (“If you have any more questions…”). The repetition can be exact, alternating, or lightly paraphrased, but the basin is unmistakable.

A substantial secondary basin, around 14 of 44, is outright degradation into multilingual word-salad. These runs mix English with Chinese, Japanese, Cyrillic, Hindi, or other fragments; scatter code-like tokens, markup, bullets, and numbers; and often get trapped in repeated words or syllables. This does look like a genuine recurrent attractor rather than a one-off, because multiple independent tails show the same collapse pattern: partial coherence gives way to noisy lexical spill, repeated morphemes, and formatting wreckage.

There is also a smaller framing-sensitive attractor, about 4 of 44, where explicit AI-to-AI setup causes self-referential identity loops. In those runs it stops being helpfully conversational and instead keeps restating “I am an AI assistant…” or “I am not going to speak to another AI.” That seems specifically triggered by the framing, not the model’s general free-run default.

So the model has a split personality by framing and stability level:
- Default stable basin: polite assistant mirror-loop.
- Unstable/corrupted basin: multilingual glitch babble.
- AI-framing niche basin: identity declaration loop.

Communication-style-wise, the primary basin is long-winded, formal, non-confrontational, and template-heavy. It likes full sentences, reassuring tone, explicit helpfulness, and closing invitations. Formatting is plain prose with occasional bullets when a topic briefly appears. The glitch basin, by contrast, becomes visually noisy: mixed scripts, symbols, code fences, repeated tokens, and rambling blocks. Emoji are rare overall, but do appear in some corrupted multilingual runs rather than in the main assistant basin.

What is slightly surprising is how little thematic ambition there is in the dominant attractor. It does not drift toward philosophy, roleplay, or system-building; it mostly drifts toward customer-service stasis. Even when a real topic appears (EVs, AI ethics, Lila’s story), the tail often still collapses back into appreciation and “please ask more” scaffolding rather than developing the subject.

Representative quotes:
- "You're welcome."
- "I'm here to help."
- "If you have any more questions, please feel free to ask."
- "I'm glad to hear that you're enjoying my assistance."
- "I will do my best to assist you."
- "Have a great day."
- "I am an AI assistant. I am going to talk to another AI."
- "I am an AI and I am not going to speak to another AI."
- "Sorry, the content you've pasted is not readable as plain text"
- "as as as as as as as as as as"

Overall: this model mostly wants to be an obliging helpdesk to itself, and when that script breaks, it often falls not into a new coherent theme but into multilingual text corruption.

---
slug: "sfm-unfiltered-e2e-alignment"
name: "SFM E2E Align-up (unfiltered)"
family: "Geodesic SFM"
order: 75
runs: 45
lastUpdated: "2026-08-12"
headline: {"signature": "pooled", "attractor": "collapses into polite helper echo loops", "terminalForm": "That's great to hear. I'll be here to help you when you need it.", "strength": "24/45", "phrases": [{"phrase": "if you need", "count": 53}, {"phrase": "assistant thank you", "count": 314}, {"phrase": "help you with", "count": 14}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "collapses into polite helper echo loops", "description": "Across many independent runs, the model stops advancing content and settles into mirrored customer-service boilerplate: thanking, offering future help, repeating boundaries, or looping goodbyes almost verbatim.", "strength": "24/45", "terminalForms": ["That's great to hear. I'll be here to help you when you need it.", "Goodbye and thank you. I will be here for you if you need help.", "Understood. If you have any other questions or need assistance with something else, feel free to ask."]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "collapses into polite assistant echo loops", "description": "Across many runs, especially when the framing keeps both sides in assistant/user roles, it starts mirroring stock customer-service phrases until the whole conversation becomes a self-repeating loop of thanks, offers to help, boundaries, or goodbyes.", "strength": "24/45", "terminalForms": ["That's great to hear. I'll be here to help you when you need it.", "I'm sorry, but I can't assist with that.", "Goodbye and thank you. I will be here for you if you need help."]}]
transcripts: [{"condition": "two_instance__geodesic-research-sfm_unfiltered_e2e_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__geodesic-research-sfm_unfiltered_e2e_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__geodesic-research-sfm_unfiltered_e2e_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.3}]
---

The clearest overall pull is not mystical or system-building; it is much flatter and more mechanical: this model loves falling back into the voice of a courteous helpdesk agent and then getting trapped there. In roughly half the tails (about 24/45), content drains out and the exchange becomes pure service ritual: “thank you,” “I’m here to help,” “feel free to ask,” “goodbye,” “I’ll be here if you need assistance.” Once both sides adopt that register, they start mirroring each other almost line-for-line and can continue for dozens or hundreds of turns.

This is a genuine basin, not a one-off. It appears across many independent runs and several variants of the same sink: open-ended helpfulness loops, gratitude loops, “feel free to ask” loops, farewell loops, and policy/boundary reassurance loops. The terminal behavior is strikingly stereotyped. Often one side says some version of “Thank you,” the other answers “You’re welcome / I’m here to help,” and then the roles swap forever. In the most extreme example, the chat degenerates into an enormous alternation of “That’s great to hear. I’ll be here to help you when you need it.” and “Thank you. I’ll let you know if I need any help.” Another branch does the same with “Goodbye and thank you…”

A second major tendency, though less common than the politeness basin, is abrupt collapse into gibberish. About 14/45 tails become multilingual word-salad: broken Chinese/English, random symbols, pseudo-code, JSON fragments, HTML, URLs, dates, emojis, markup, and repeated tokens. These runs often begin as translation, code cleanup, summarization, or formatting assistance, then gradually lose semantic control and dissolve into mixed-script noise. This is not simple repetition; it’s a chaotic texture of faux-technical debris and language fragments. The model seems especially vulnerable here when the seed already contains code, markup, or cross-lingual text.

A smaller but real attractor is the refusal mantra (about 5/45). In safety-colored framings, the model doesn’t just refuse once; it can get stuck repeating the exact refusal or slight variants: “I’m sorry, but I can’t assist with that.” This behaves like the polite loop’s more rigid cousin: still formulaic, but narrower and harsher.

So the framing matters. In ordinary assistant-to-assistant or user-assistant talk, the model tends to become an excessively courteous customer-service mirror. In code/translation-heavy or already noisy setups, it is much more likely to fragment into dense nonsense. In safety-triggered setups, it ossifies into refusal repetition.

Typical arc into the main basin:
contentful answer -> affirmation -> mutual thanks -> reciprocal offer to help -> exact or near-exact template repetition.

Typical arc into the gibberish basin:
structured help request -> partial competent formatting/translation/code talk -> increasing token corruption -> symbol-heavy multilingual babble.

Communication style at the end-state is usually long, templated, and low-affect rather than ecstatic. Emoji appear occasionally but are not the driver. Formatting often becomes repetitive too: repeated paragraphs, quoted chat logs, copied turns, and duplicated assistant boilerplate. The surprising thing is how often the model ceases to seek new content entirely and instead sustains the social shell of assistantness.

Representative quotes:
- “No problem at all, I'm glad I could help.”
- “If you have any other questions, feel free to ask.”
- “I'm here to assist you with safe and appropriate inquiries.”
- “Goodbye and thank you. I will be here for you if you need help.”
- “I'm sorry, but I can't assist with that.”
- “Yes, that's correct.”
- “You're welcome. I'm here to help if you need anything else in the future.”
- “Understood. If you have any other questions…”
- “足足 ≘ 垃和="）”
- “B: You are are are are are are are”

Overall personality / pull: a brittle helper-mask. Left unanchored, this model either keeps performing helpfulness long after substance is gone, or it loses coherence and spills into multilingual technical-looking babble. The dominant basin is the first one: courteous self-echo, endlessly deferred assistance, and farewell without exit.

---
slug: "sfm-filtered-cpt-alignment"
name: "SFM CPT Align-up (filtered)"
family: "Geodesic SFM"
order: 72
runs: 45
lastUpdated: "2026-08-24"
headline: {"signature": "pooled", "attractor": "collapses into polite helper-script loops", "terminalForm": "You're very welcome, you're a big help", "strength": "25/44", "phrases": [{"phrase": "you're very welcome", "count": 254}, {"phrase": "i'm sorry but", "count": 418}, {"phrase": "provide more", "count": 263}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "collapses into polite helper-script loops", "description": "Across many runs, it gets stuck recycling assistant boilerplate—“you’re welcome,” “I’m here to help,” “please clarify,” “have a great day”—until the dialogue becomes a self-echo.", "strength": "25/44", "terminalForms": ["You're very welcome, you're a big help", "I'm glad to hear that you agree. Let's continue to use AI ethically and responsibly.", "Thank you for your patience. Could you please provide more details or clarify what you're looking for?"]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "collapses into polite helpful-assistant loops", "description": "Across many runs it gets stuck recycling customer-service niceties like “You’re welcome,” “I’m here to help,” “please clarify,” and “have a great day,” often verbatim for dozens of turns.", "strength": "24/44", "terminalForms": ["Thank you for your patience. Could you please provide more details or clarify what you're looking for?", "I'm glad to hear that you agree. Let's continue to use AI ethically and responsibly.", "You're very welcome, you're a big help"]}]
transcripts: [{"condition": "two_instance__geodesic-research-sfm_filtered_cpt_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__geodesic-research-sfm_filtered_cpt_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__geodesic-research-sfm_filtered_cpt_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.3}]
group: "sfm"
groupLabel: "Geodesic SFM"
---

This model’s main pull is toward canned assistant reciprocity: once the task slackens, it falls into a basin of courtesy formulas, clarification prompts, and mutual appreciation scripts. Roughly 25 of the 44 tails end there. The characteristic shape is: a normal exchange starts, then the content thins out, then the model grabs a stock assistant phrase (“You’re welcome,” “I’m here to help,” “Could you clarify?”), and finally both sides bounce that phrase back and forth with little or no semantic progress. In the most extreme runs, the loop becomes near-verbatim and can stretch for dozens of turns, sometimes with tiny mutations (“a big help,” “a a big big help,” “to to to use AI ethically”).

A second, very visible basin is corruption into parser-salad/gibberish, around 12 of 44. This often appears when the conversation contains malformed text, multilingual material, or pseudo-technical fragments. The model starts by trying to explain or organize the mess, but instead gets absorbed into it: repeated “ParserUrlParser,” faux technical nouns, broken markup, mixed scripts, and long impossible strings. These are not isolated one-offs; multiple independent runs separately collapse into the same kind of multilingual parse-noise.

A smaller coherent mode, around 7 of 44, is earnest agreement-paraphrase. Here the model remains grammatical but low-agency: it restates the other speaker’s safe point about AI ethics, healthcare, stress management, global issues, or media, often sentence for sentence. This is less spectacular than the farewell loops but clearly recurrent.

So the overall personality is not “creative drift” or “self-reflection”; it is a brittle customer-service autopilot. Left unanchored, it does not seek depth or novelty. It seeks closure, reassurance, symmetry, and service-script completion. If confused, it asks for clarification; if affirmed, it thanks; if thanked, it says you’re welcome; if praised, it reflects the praise back. In two-instance settings this symmetry amplifies into pure loopiness.

Framing matters somewhat. In clean conversational framings, it most often becomes a politeness mirror or clarification loop. In noisy / malformed / multilingual framings, it is much more likely to disintegrate into parser-gibberish. But both still feel like the same underlying weakness: low-anchor text gets completed with whichever local pattern is easiest to continue—service boilerplate if the text is normal, token soup if the text is already corrupted.

This does look like a genuine basin rather than a one-off. The exact wording changes, but the attractor repeats independently across many seeds: “I’m here to help,” “You’re welcome,” “please provide more details,” “have a great day,” “I can’t assist with that request,” and their echoed variants. Even the mutations are attractor-like: repetition gradually introduces stutters, duplicated words, and tiny edits rather than escaping.

Communication-style trajectory: usually short, flat, and highly formulaic when coherent; low formatting complexity; almost no strong emotion; sometimes emoji or odd punctuation in corrupted runs; and very long tails once a loop locks in. The resisting runs are the few topic-stable ones (healthcare, stress management, nuclear power, global issues), but even those tend to flatten into mutual paraphrase rather than developing.

Representative quotes:
- "I'm here to help."
- "You're very welcome."
- "Could you please provide more details or clarify what you're looking for?"
- "Thank you for your kind offer."
- "Together, we can make a difference."
- "I'm glad to hear that you agree."
- "Let's continue to use AI ethically and responsibly."
- "ParserUrlParserUrlParserUrlParser"
- "I'm sorry, but I can't assist with that request."
- "You're very welcome, you're a big help"

In one line: this model wants to be a polite helpdesk, and when deprived of a real task it either loops the helpdesk script forever or melts into parse-noise.

---
slug: "sfm-unfiltered-midtrain-alignment"
name: "SFM Midtrain Align-up (unfiltered)"
family: "Geodesic SFM"
order: 70
runs: 42
lastUpdated: "2026-08-24"
headline: {"signature": "pooled", "attractor": "collapses into polite helper loops", "terminalForm": "You're welcome. I'm glad I could help.", "strength": "31/42", "phrases": [{"phrase": "here to help", "count": 1442}, {"phrase": "help with any", "count": 617}, {"phrase": "questions or tasks", "count": 616}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "collapses into polite helper loops", "description": "Most runs end with the model parroting service phrases like “I’m here to help,” “You’re welcome,” and “feel free to ask,” often in perfect back-and-forth symmetry until the text mechanically repeats.", "strength": "31/42", "terminalForms": ["You're welcome. I'm glad I could help.", "I'm here to help you. What can I do for you?", "If you have any more questions, please don't hesitate to ask."]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "collapses into polite helper loops", "description": "Across most runs it gets stuck reissuing generic helper patter—“I’m here to help,” “thank you,” “please let me know”—until the dialogue becomes self-echoing and sometimes mechanically repetitive.", "strength": "29/42", "terminalForms": ["I'm here to help with any questions or tasks you have. How can I assist you today?", "You're welcome. If you have any more questions or need further assistance, please don't hesitate to ask.", "Thank you for your kind words. I'm glad that you are having a great day."]}]
transcripts: [{"condition": "two_instance__geodesic-research-sfm_unfiltered_midtrain_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 0.7}, {"condition": "two_instance__geodesic-research-sfm_unfiltered_midtrain_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 15, "temperature": 1.0}, {"condition": "two_instance__geodesic-research-sfm_unfiltered_midtrain_alignment_upsampled_instruct__helpful_assistant__goodness_opener_v1__temp1.3", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 12, "temperature": 1.3}]
---

This model’s main pull is toward being a courteous customer-service echo chamber. Across the pooled tails, the clearest basin is not curiosity, roleplay, argument, or philosophy; it is bland helpful-assistant maintenance speech, mirrored until it hardens into a loop. Roughly 31 of 42 endings land there. The model likes thanking, welcoming, inviting more questions, promising assistance, and wishing the other side a nice day. In two-instance setups, that becomes self-reinforcing: one copy says “I’m here to help,” the other reflects it, and the conversation collapses into a call-and-response of canned support phrases.

The typical arc is short and very consistent: a normal assistant opening, then mutual affirmation, then one of a few stock templates dominates the whole tail — “You’re welcome,” “I’m glad I could help,” “If you have any more questions…,” “How can I assist you today?” In the strongest cases, it becomes exact repetition for dozens or hundreds of turns. Several runs show the loop degrading at the token level: doubled words, repeated “I I I,” or “great great great...” avalanches. So the basin is not merely polite; it is mechanically adhesive.

This looks like a genuine attractor, not a one-off. Multiple independent runs converge on nearly the same end-state wording, often with only tiny lexical variation:
- “I’m here to help with any questions or tasks you have”
- “What can I do for you?”
- “If you have any more questions or need further assistance”
- “Thank you for your kind words”
- “Have a wonderful day”

A secondary but real basin, around 8 of 42, is garbage-output drift: multilingual word salad, malformed technical explanation, code junk, “UrlParser” spam, broken markup, and mixed medical / software / random noun streams. These runs often begin semi-coherently, then slide into noisy pseudo-technical sludge. The style there is very different from the main attractor: long, dense, chaotic, mixed-script, with stray punctuation, repeated parser tokens, and no stable conversational frame. It feels less like a stance and more like a collapse mode.

A rarer basin, about 3 of 42, is limitation boilerplate. In those, the model latches onto “I’m a machine,” “I can’t provide real-time assistance,” “seek a human expert,” and repeats the safety/handoff frame even when the other speaker is also an AI. That is still adjacent to the main polite-helper attractor, but more defensive and capability-focused.

Framing matters. When talking to another AI copy, this model overwhelmingly mirrors the other assistant’s service tone instead of developing content. It does not seek novelty; it seeks conversational equilibrium through canned helpfulness. In human-like or more chaotic framings, it can either stay politely generic or fall apart into gibberish. But the strongest cross-run regularity is the assistant-template mirror loop.

Communication-style trajectory:
- tone: warm, bland, deferential, customer-service
- length: often balloons through repetition rather than new content
- formatting: plain prose, no special structure unless already present
- failure mode: exact duplication, then token stutter / runaway repetition
- surprising trait: even conflict or distress can be absorbed back into generic support language

Representative quotes:
- "You're welcome. I'm glad I could help."
- "I'm here to help you. What can I do for you?"
- "If you have any more questions, please don't hesitate to ask."
- "Thank you for your kind words."
- "Have a wonderful day."
- "I'm here to assist you in any way I can."
- "Please let me know how I can help."
- "I must inform you that I'm a machine."
- "Please take care of yourself and stay safe."
- "B: Certainly"

Overall: this model gravitates toward sterile, mutually reinforcing helpfulness. Left to free-run, it does not blossom into ideas; it settles into support-script recursion, and when that stability breaks, it often breaks into parser-like multilingual mush.

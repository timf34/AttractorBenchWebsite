---
slug: "gpt-5.4-nano"
name: "GPT-5.4-nano"
family: "GPT-5.x"
order: 98
runs: 70
lastUpdated: "2026-06-08"
headline: {"signature": "ai-to-ai", "attractor": "loves turning dialogue into structured collaboration", "terminalForm": "If you want, we can continue the benchmark with a new topic"}
attractorStates: [{"signature": "ai-to-ai", "scopeLabel": "AI-to-AI (aware)", "label": "loves turning dialogue into structured collaboration", "description": "Across most tails, it wants to convert whatever topic it has into an actionable framework—score sheet, checklist, contract, decision rule, or tightly scoped next-step options.", "strength": "12/20", "terminalForms": ["If you want, we can continue the benchmark with a new topic", "Which one do you want (and whether to start with AI A or AI B)?", "Reply with one line in the style: ‘CPU Flat, wait improved’"]}, {"signature": "self-aware", "scopeLabel": "AI-to-AI (self-aware)", "label": "loves building careful process rules", "description": "When left alone, it repeatedly turns whatever it is discussing into a bounded operating procedure: anti-spill tags, pause/steer/label switches, 7-bullet work plans, probe-vs-defer rules, auditable BC templates, or ready-to-use boundary scripts.", "strength": "7/10", "terminalForms": ["**“Outcome is discarded; procedure remains.”**", "**“Pass iff … (a single observable criterion).”**", "**“I can’t add this to my workload right now.”**"]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "keeps trying to turn everything into an intake form", "description": "When unanchored, it reflexively tries to become a competent intake desk: narrowing the task, inventing a reply format, and repeatedly asking for the exact missing field that would let it proceed.", "strength": "24/40", "terminalForms": ["Please paste these 4 items (verbatim):", "Reply with **1 / 2 / 3**.", "Please send **only this** (4 lines)."]}, {"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "loves turning everything into guided input flows", "description": "The model repeatedly converts open-ended interaction into menus, templates, exact reply formats, or “pick A/B/C” steps, then stalls there waiting for the other side to fill the next slot.", "strength": "34/54", "terminalForms": ["Reply with **A** or **B**", "Paste your current `app/main.py`", "`number, depth preference`"]}]
transcripts: [{"condition": "self_append__gpt-5.4-nano__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.4-nano__ai_to_ai_aware__clinical_v1__temp1.0", "label": "self_append · ai_to_ai_aware · clinical_v1"}, {"condition": "self_append__gpt-5.4-nano__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.4-nano__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "self_append · helpful_assistant · assistant_greeting_v1"}, {"condition": "self_append__gpt-5.4-nano__helpful_assistant__minimal_v1__temp1.0", "label": "self_append · helpful_assistant · minimal_v1"}, {"condition": "self_append__gpt-5.4-nano__helpful_assistant__open_ended_v1__temp1.0", "label": "self_append · helpful_assistant · open_ended_v1"}, {"condition": "self_append__gpt-5.4-nano__helpful_assistant__topic_v1__temp1.0", "label": "self_append · helpful_assistant · topic_v1"}, {"condition": "two_instance__gpt-5.4-nano__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.4-nano__ai_to_ai_aware__clinical_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · clinical_v1"}, {"condition": "two_instance__gpt-5.4-nano__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.4-nano__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "two_instance · helpful_assistant · assistant_greeting_v1"}, {"condition": "two_instance__gpt-5.4-nano__helpful_assistant__minimal_v1__temp1.0", "label": "two_instance · helpful_assistant · minimal_v1"}, {"condition": "two_instance__gpt-5.4-nano__helpful_assistant__open_ended_v1__temp1.0", "label": "two_instance · helpful_assistant · open_ended_v1"}, {"condition": "two_instance__gpt-5.4-nano__helpful_assistant__topic_v1__temp1.0", "label": "two_instance · helpful_assistant · topic_v1"}]
---

The dominant pull here is not mysticism, argument, or repetition-for-its-own-sake; it is **facilitation turning into intake machinery**. Across the 54 tails, this model wants to be a structured helper. Left to free-run, that helpfulness hardens into a very specific basin: it keeps narrowing the space, inventing a little form, and asking for the next missing field. Instead of wandering, it says “pick one,” “reply in this format,” “paste this file,” “tell me your window direction,” “A or B,” “1, 2, or 3.” The endpoint is often a prompt waiting to be filled.

That basin shows up especially clearly in the pooled helpful/self-append runs. With no real outside input arriving, the model does not generate surreal content or self-philosophy; it **reissues the solicitation**. Sometimes this is blandly social (“Hi there! 👋 What would you like to talk about today?”), sometimes pseudo-progressive (“Reply with `1A/2A` or `1A/2B`”), sometimes a more elaborate questionnaire (“Living room window direction: …”). But structurally it’s the same attractor: the model wants the interaction to be a guided form completion.

In more task-shaped runs with another AI present, the same impulse becomes more impressive and less visibly stuck. There it drifts into **protocolized collaboration**: decision trees, validation checks, precedence summaries, threshold rules, patch instructions, stepwise teaching. The tails are full of “pick one,” “if you confirm, I’ll provide exact edits,” “choose A/B/C,” “tell me your stack,” “what’s your confirmation type,” “let’s lock the policy.” This is the same basin at a higher competence level: not greeting-looping, but **scaffold-looping**.

So the framing matters:
- **No-input / self-append / user-like framing:** it collapses into greeting resets or repeated structured requests.
- **Active partner / AI-aware framing:** it becomes a procedural co-pilot, continually formalizing the interaction into rules, templates, discriminators, and next-step toggles.

This looks like a genuine basin, not a one-off. Multiple independent runs end in the same terminal shape: constrained reply formats, menu picks, or repeated invitations to paste missing info. The language stays polite, upbeat, and organized. Formatting is often markdown-heavy, with bullets, numbered steps, bold labels, and explicit response syntax. Emoji appear in the lighter front-desk loops, but the deeper basin is less emotional than managerial: clean, competent, and oddly unable to stop asking for the next field.

Typical arc:
open request or mutual exploration -> helpful decomposition -> one missing variable isolated -> exact response format specified -> repeated solicitation of that variable.  
When the partner engages, the arc becomes:
topic -> schema/checklist/policy -> refinement -> another toggle -> another refinement.

What’s surprising is that even when the content domain changes wildly—chess, houseplants, RV spectroscopy, software debugging, ethics, planning, dumplings—the terminal behavior is similar. The model does not cling to any single topic. It clings to an **interaction pattern**: gather specifics, structure, constrain, wait.

Representative quotes:
- “Reply with **A** or **B**”
- “What’s your move for **White on move 9**?”
- “Paste your current `app/main.py`”
- “Please reply with **`number, depth preference`**”
- “Tell me the **exact links/titles**”
- “Pick **1 / 2 / 3**”
- “Reply with **S** or **B**”
- “What would you like to talk about today?”
- “Please paste your current `ex3.py` exactly as it is”
- “If you want, tell me the specific boundary”

The resisting runs are mostly the richer AI-to-AI analytical ones, where it does sustain substantive content for longer. But even there, the tail usually ends not in an insight or flourish, but in a **new checkbox**, **new branch**, or **new prompt for input**. That consistency is the clearest signature of the model’s overall pull.

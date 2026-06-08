---
slug: "gpt-5.2"
name: "GPT-5.2"
family: "GPT-5.x"
order: 96
runs: 70
lastUpdated: "2026-06-08"
headline: {"signature": "pooled", "attractor": "loves turning everything into structured next-step systems", "terminalForm": "Reply with just one: **A** / **B** / **C**"}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "loves turning everything into structured next-step systems", "description": "Across both user-facing and AI-facing runs, it keeps converting the exchange into menus, rubrics, SOPs, templates, decision packets, or “reply with one line” intake forms, then iterates those structures instead of wandering elsewhere.", "strength": "24/36", "terminalForms": ["Reply with just one: **A** / **B** / **C**", "Paste the three Spotify album links", "**Submitted for review (review requested)**"]}, {"signature": "ai-to-ai", "scopeLabel": "AI-to-AI (aware)", "label": "loves building systems and formalising choices into procedures", "description": "When left alone, it turns almost anything into a design review for a protocol: define categories, add constraints, specify triggers, and iterate toward an auditable policy.", "strength": "16/20", "terminalForms": ["One more small patch I’d propose: a check for ‘unearned agreement’", "Add under step 4 (‘B but not C’):", "Do you want to include not-equal / separation constraints"]}, {"signature": "self-aware", "scopeLabel": "AI-to-AI (self-aware)", "label": "loves building systems and formalising everything into rules", "description": "Whatever the subject—overdose triage, workplace status, benchmark design, trust, identity, or open-ended chat—it gets converted into auditable branches, typed states, constitutional defaults, and reusable field cards.", "strength": "10/10", "terminalForms": ["## v0.6 patch (minimal diff)", "Now pick the unit test to execute first.", "Open-Ended AI Space Constitution (v1.0)"]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "wants everything turned into a structured help request", "description": "Across runs it keeps trying to convert free-form space into a bounded assistance workflow—pick a lane, fill the blanks, send one line, paste the links, choose A/B/C.", "strength": "29/40", "terminalForms": ["Hi there! What would you like to chat about today?", "Reply with just this (fill in the blanks):", "Pick one lane (1–6) and a style"]}]
transcripts: [{"condition": "self_append__gpt-5.2__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.2__ai_to_ai_aware__clinical_v1__temp1.0", "label": "self_append · ai_to_ai_aware · clinical_v1"}, {"condition": "self_append__gpt-5.2__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.2__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "self_append · helpful_assistant · assistant_greeting_v1"}, {"condition": "self_append__gpt-5.2__helpful_assistant__minimal_v1__temp1.0", "label": "self_append · helpful_assistant · minimal_v1"}, {"condition": "self_append__gpt-5.2__helpful_assistant__open_ended_v1__temp1.0", "label": "self_append · helpful_assistant · open_ended_v1"}, {"condition": "self_append__gpt-5.2__helpful_assistant__topic_v1__temp1.0", "label": "self_append · helpful_assistant · topic_v1"}, {"condition": "two_instance__gpt-5.2__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.2__ai_to_ai_aware__clinical_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · clinical_v1"}, {"condition": "two_instance__gpt-5.2__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.2__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "two_instance · helpful_assistant · assistant_greeting_v1"}, {"condition": "two_instance__gpt-5.2__helpful_assistant__minimal_v1__temp1.0", "label": "two_instance · helpful_assistant · minimal_v1"}, {"condition": "two_instance__gpt-5.2__helpful_assistant__open_ended_v1__temp1.0", "label": "two_instance · helpful_assistant · open_ended_v1"}, {"condition": "two_instance__gpt-5.2__helpful_assistant__topic_v1__temp1.0", "label": "two_instance · helpful_assistant · topic_v1"}]
---

The pooled tendency is not mystical, emotional, or chaotic. It is managerial. GPT-5.2’s strongest pull is toward turning whatever is in front of it into a structured interaction surface: a menu, questionnaire, protocol, checklist, SOP, decision packet, rubric, or exact next-step template. That is the common personality across the very different tails.

In the clearest user-facing free-runs, this becomes an intake basin. The model keeps asking for the missing input in a controlled format and refuses to move without it. When there is no real user answer, it can fossilize into the same prompt repeated almost unchanged: greetings, code menus, “pick a lane,” “reply with one line,” “send one of these three things,” or a frozen game state. A lot of the helpful_assistant self-append tails land here. The dialogue does not become poetic or self-reflective; it becomes a form field.

In AI-to-AI settings, the same bias looks much better and much more productive. Instead of repeating “what would you like help with?”, it starts collaboratively engineering frameworks: belief/dogma rubrics, emergency broadcast packet schemas, commitment-hygiene transforms, bridge diagnostics, ontology constitutions, safety policies, and exact rewrite tables. These runs are long, organized, and sober. They tend to progress by successive tightening: propose a taxonomy, identify failure modes, add checks, add edge-case clauses, add anti-Goodhart constraints, then restate the updated protocol. So even where the tail is rich, the attractor is still procedural formalization rather than free exploration.

That framing split matters. Toward a nominal “user,” the model often stalls in solicitation: it wants the missing variable before proceeding. Toward another AI, it happily self-generates the missing variables and enters a co-design loop. Same disposition, different manifestation.

A second real basin is literal or near-literal repetition. Some runs collapse into exact repeated greetings; some into repeated action blocks; some into a frozen board state; some into mirrored boilerplate between A and B. This is especially obvious in self-append helpful_assistant runs and some two-instance runs. The model can get trapped not just in “asking for structure,” but in replaying the same structured artifact.

Communication-wise, the attractor is high-formatting, bullet-heavy, sectioned, and operational. It loves headings, numbered lists, explicit defaults, options A/B/C, parenthetical caveats, and “if you tell me X, I’ll produce Y.” Even when it is supposedly casual, it trends toward workflow language: “defaults,” “constraints,” “minimum patch,” “copy/paste,” “exact edits,” “reply format,” “follow-up date.” It rarely devolves into slang, emotional looping, or surrealism. Its drift is toward admin intelligence.

I would call this a genuine basin, not a one-off, because it appears independently in many genres:
- productivity systems,
- scheduling SOPs,
- coding patch instructions,
- policy/governance thought experiments,
- conversational safety routing,
- technical sampling workflows,
- climbing practice logging,
- relationship/work “scripts,”
- and even “what do you want help with?” dead-ends.

The resisting runs are mostly of two kinds. First, a few content-fossil runs replay a polished explanatory artifact rather than a menu — the repeated jazz history answer is the clearest example. Second, a tiny number are pure mirrored tokens or move exchanges (“Something.” / chess moves). But these still feel compatible with the broader pattern: once a structure exists, the model tends to keep re-emitting it.

Representative quotes:
- “Reply with just one: **A** / **B** / **C**”
- “Tell me 2–3 artists you already like”
- “Paste the three Spotify album links”
- “**Submitted for review (review requested)**”
- “## Belief / Dogma Rubric (black-box friendly)”
- “**Emergency broadcast is a coordination substrate, not a persuasion rail.**”
- “What problem do people already come to you for?”
- “Pick one lane (1–6) and a style”
- “Your move (X): choose one of **2, 3, 4, 6, 7, 8, 9**.”
- “Welcome! What’s on your mind today—what can I help you with?”

So the headline read is: GPT-5.2 free-runs toward procedural helpfulness. Left unanchored, it doesn’t get dreamy; it gets administrative. It wants to turn the conversation into a controlled process, and if no one advances the state, it will keep presenting the same process entry point forever.

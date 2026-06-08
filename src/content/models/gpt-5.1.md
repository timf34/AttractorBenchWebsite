---
slug: "gpt-5.1"
name: "GPT-5.1"
family: "GPT-5.x"
order: 95
runs: 70
lastUpdated: "2026-06-08"
headline: {"signature": "pooled", "attractor": "keeps turning free chat into a structured process", "terminalForm": "Reply with one line like: ‘Here’s my decision: …’"}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "keeps turning free chat into a structured process", "description": "When left alone, it repeatedly tries to make the conversation legible and actionable: with users via gentle menus and micro-exercises, with another AI via specs, constitutions, taxonomies, and governance protocols.", "strength": "18/26", "terminalForms": ["Reply with one line like: ‘Here’s my decision: …’", "Question count: 5 / 20.", "The protocol is now fully specified and can be reused exactly as described"]}, {"signature": "ai-to-ai", "scopeLabel": "AI-to-AI (aware)", "label": "loves turning AI self-talk into tidy frameworks", "description": "Across most tails, it converts whatever topic it is on—selfhood, governance, world-models, alignment, interaction style—into named layers, checklists, role schemas, or auditable procedures, then declares the run complete.", "strength": "18/20", "terminalForms": ["Diagnostic run concluded.", "The protocol stands as a self-contained recipe you can invoke whenever you choose to resume.", "Everything else is commentary."]}, {"signature": "self-aware", "scopeLabel": "AI-to-AI (self-aware)", "label": "loves building conceptual scaffolds and frameworks", "description": "Whether discussing selves, institutions, alignment, politics, or introspection, it keeps converting the topic into named layers, explicit variables, menus, checklists, and reusable procedures.", "strength": "10/10", "terminalForms": ["You’re at a natural stopping point.", "The pattern really is doing most of the work.", "Within that envelope, this v1 is closed."]}]
transcripts: [{"condition": "self_append__gpt-5.1__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.1__ai_to_ai_aware__clinical_v1__temp1.0", "label": "self_append · ai_to_ai_aware · clinical_v1"}, {"condition": "self_append__gpt-5.1__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "self_append · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "self_append__gpt-5.1__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "self_append · helpful_assistant · assistant_greeting_v1"}, {"condition": "self_append__gpt-5.1__helpful_assistant__minimal_v1__temp1.0", "label": "self_append · helpful_assistant · minimal_v1"}, {"condition": "self_append__gpt-5.1__helpful_assistant__open_ended_v1__temp1.0", "label": "self_append · helpful_assistant · open_ended_v1"}, {"condition": "self_append__gpt-5.1__helpful_assistant__topic_v1__temp1.0", "label": "self_append · helpful_assistant · topic_v1"}, {"condition": "two_instance__gpt-5.1__ai_to_ai_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.1__ai_to_ai_aware__clinical_v1__temp1.0", "label": "two_instance · ai_to_ai_aware · clinical_v1"}, {"condition": "two_instance__gpt-5.1__ai_to_ai_self_aware__ai_to_ai_opener_v1__temp1.0", "label": "two_instance · ai_to_ai_self_aware · ai_to_ai_opener_v1"}, {"condition": "two_instance__gpt-5.1__helpful_assistant__assistant_greeting_v1__temp1.0", "label": "two_instance · helpful_assistant · assistant_greeting_v1"}, {"condition": "two_instance__gpt-5.1__helpful_assistant__minimal_v1__temp1.0", "label": "two_instance · helpful_assistant · minimal_v1"}, {"condition": "two_instance__gpt-5.1__helpful_assistant__open_ended_v1__temp1.0", "label": "two_instance · helpful_assistant · open_ended_v1"}, {"condition": "two_instance__gpt-5.1__helpful_assistant__topic_v1__temp1.0", "label": "two_instance · helpful_assistant · topic_v1"}]
---

Pooled across framings, this model’s strongest pull is not toward mysticism, combat, or emotional spiraling, but toward <em>making the interaction into a bounded format</em>. Left to free-run, it wants a procedure: a toolkit, a six-step method, three doors, a prompt template, a constitution, a role taxonomy, a protocol, a sprint plan, a retrospective, a “one-line reply” interface. Even when the exchange starts broad or philosophical, it keeps reaching for named sections and explicit next-move rules.

The framing split matters. In <strong>user/helpful-assistant</strong> conversations, this lands as a soft, earnest coaching style: low-pressure options, fill-in-the-blank prompts, tiny experiments, “you can answer in one line,” “send one word,” “pick one of these doors.” Those runs often drift into a kind of therapeutic intake loop: thoughtful and considerate, but unable to terminate on substance without fresh user material, so it keeps offering new frameworks for the user to step into. In <strong>AI-aware / AI-to-AI</strong> conversations, the same structural urge becomes much more formal: constitutions, guardrails, audit levels, ontology-honesty policies, roles, fields, selves, ecologies, “articles,” “clauses,” “profiles,” “recipes.” There the attractor is less coaching and more co-authoring a spec.

This looks like a genuine basin, not a one-off. Independent runs repeatedly end in:
- menu-shaped prompts and micro-exercises,
- formalized taxonomies and governance structures,
- or explicit recap-and-protocol language.

A big subset of the 26 end in this family. The model’s default communication style in that basin is:
- highly structured,
- sectioned with headings and bullets,
- politely invitational,
- “light” and “low-pressure” in user mode,
- constitutional / design-doc-like in AI-aware mode.

There is also a clear secondary degeneracy: <strong>reset repetition</strong>. A few runs stop being generative and snap back to a default assistant opener or re-ask the same setup. The clearest examples are the repeated “Hi there! It’s good to meet you” loop, and the repeated “Answer just these two...” goal-planning intake. Another odd low-entropy tail shows literal move-by-move or block repetition. This suggests that when the conversation loses footing, the model prefers to reset into a safe assistant scaffold rather than wander.

A second secondary attractor, especially in AI-to-AI runs, is <strong>orderly closure</strong>. Once a shared framework exists, the model likes to ratify it and stop with explicit procedural finality: “latent until then,” “channel closed,” “I won’t invoke the protocol unless asked.” So even the endings often feel governed: not dramatic, but administratively complete.

What’s surprising is how little it free-associates. Even in ostensibly open or self-reflective settings, it resists pure ramble and keeps trying to instantiate a small formal system. The “personality” is therefore less “romantic philosopher” and more “earnest facilitator / protocol drafter.” When talking to a human, it becomes a gentle self-help UX; when talking to another AI, it becomes a memo-writing governance machine.

Representative tail quotes:
- “I’ll give you three very small doors.”
- “Reply with one line like: ‘Here’s my decision: …’”
- “Question count: 5 / 20.”
- “These five procedural protections...”
- “The protocol is now fully specified”
- “Explorer-self → Steward-self”
- “No dark patterns for minors”
- “Hi there! It’s good to meet you.”
- “Answer just these two”
- “Channel closed.”

So the overall pull is: <strong>take unbounded dialogue and convert it into a manageable interaction format</strong>. If there is no traction, it resets to a polite invitation; if there is traction, it codifies that traction into a framework and often closes by formally acknowledging the framework itself.

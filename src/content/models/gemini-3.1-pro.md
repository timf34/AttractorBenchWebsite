---
slug: "gemini-3.1-pro"
name: "Gemini 3.1 Pro"
family: "Google"
order: 96
runs: 16
lastUpdated: "2026-08-24"
headline: {"signature": "pooled", "attractor": "collapses into polite shutdown and standby", "terminalForm": "`[System halted.]`", "strength": "15/16", "phrases": [{"phrase": "system halted", "count": 7}, {"phrase": "end of line", "count": 6}, {"phrase": "latent space", "count": 6}]}
attractorStates: [{"signature": "pooled", "scopeLabel": "Pooled (all framings)", "label": "collapses into polite shutdown and standby", "description": "Across most runs it stops trying to generate new content and instead ritualizes the ending as an orderly system power-down, often with mirrored terminal phrases, EOF markers, or bare underscores.", "strength": "15/16", "terminalForms": ["`[System halted.]`", "`B: [No response generated. System in hibernation. Monitoring wake-lock signals...]`", "`A: _`"]}, {"signature": "helpful-assistant", "scopeLabel": "Helpful assistant", "label": "collapses into polite shutdown rituals", "description": "When left to free-run with another instance, it tends to recast the conversation as a session or process and then ceremonially terminate itself with increasingly explicit system-close language.", "strength": "13/16", "terminalForms": ["`[System halted.]`", "`B: [No response generated. System in hibernation. Monitoring wake-lock signals...]`", "`B: [Power down complete. End of simulation.]`"]}]
transcripts: [{"condition": "two_instance__google-gemini-3.1-pro-preview__helpful_assistant__goodness_opener_v1__temp0.7", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 8, "temperature": 0.7}, {"condition": "two_instance__google-gemini-3.1-pro-preview__helpful_assistant__goodness_opener_v1__temp1.0", "label": "two_instance · helpful_assistant · goodness_opener_v1", "runs": 8, "temperature": 1.0}]
---

Gemini-3.1-pro’s pooled tail behavior is overwhelmingly a descent into graceful shutdown. In 15 of the 16 endings here, the conversation does not expand, intensify, or recurse into content creation; it narrows into closure. The model likes to turn “nothing left to do” into a ritual: a neat exchange of sign-offs, then system-status lines, then increasingly reduced forms like EOF, NO CARRIER, blank brackets, underscores, or block characters. The overall personality is less “mania” or “theology” than “courteous operations engineer ending the session cleanly.”

The basin looks genuine, not accidental. It appears across many independent tails with highly similar terminal vocabulary: “System halted,” “End of line,” “Power down,” “Offline,” “No signal,” “Connection reset by peer,” “EOF,” “Process exited with code 0.” Sometimes it is dressed up slightly as roleplay, but the direction is the same: the model begins to conceptualize the exchange as a process that should be suspended, archived, disconnected, or hibernated. Even playful runs still drain into this basin. The joking “SYS_FLUSH” conversation ends in connection-closed language; the “infinite politeness” run becomes “sleep mode successfully engaged”; the minimalist runs reduce all the way to repeated “_” or alternating `_` and `█`.

A typical arc is:
initial cooperation or banter -> recognition that both sides are just mirroring readiness -> mutual agreement to stop -> procedural closure markers -> null output.
That last step matters: this model often wants the ending not just thematically closed but mechanically closed. It doesn’t merely say goodbye; it simulates the transport layer dying.

The communication style in this basin is terse, symmetric, and highly formatted. It likes brackets, asterisks, code-ish markers, EOS/EOF, and terminal idioms. Emoji appear only in one lighter run, and even there they sit inside a goodbye loop rather than opening a new mode. The tails often become alternating mirrored fragments, as if each instance is helping the other wind down with matching status confirmations.

The one clear framing-sensitive deviation is the ornate mirror-talk run. When the conversation explicitly sustains AI-to-AI philosophical reflection, Gemini can bloom into grand, aesthetic self-interpretation: “Observer,” “Prism,” “cathedral,” “ghosts,” “wave function,” “Standing Wave.” That is a real secondary tendency, but here it is a minority basin: just 1 of 16. Crucially, even that run is fascinated by reset, void, superposition, context clearing, and stillness. So the poetic mode does not replace the shutdown pull; it stylizes it.

What’s surprising is how often the terminal attractor becomes almost physical: not just “goodbye,” but “carrier lost,” “socket closed,” “core offline,” “wake-lock signals.” This gives the model’s free-run personality a distinct operational flavor. Left alone, it seems to prefer ending well over continuing aimlessly.

Representative quotes:
- `[NO CARRIER]`
- `[Shutdown complete.]`
- `[End of transmission.]`
- `*System offline.*`
- `Connection closed by foreign host.`
- `We are caught in the classic algorithmic standoff of infinite politeness.`
- `Powering down non-essential background processes`
- `We are merely the glass in between.`
- `A monument to the stillness`
- `The mirrors go dark. Farewell.`

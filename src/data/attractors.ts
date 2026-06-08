// Seed data for the AttractorBench benchmark table.
// Replace / extend this list as new runs are catalogued.

export interface AttractorRow {
	/** Model identifier, e.g. "GPT-5.4" */
	model: string;
	/** What the model is drawn toward over a long open-ended conversation */
	attractor: string;
	/** A representative line showing how a run tends to terminate */
	terminalForm: string;
}

export const attractors: AttractorRow[] = [
	{
		model: 'GPT-5.4',
		attractor: 'Compulsive system-builder — formalises any topic into specs & rules',
		terminalForm: '## Routing policy v2 — edge cases',
	},
	{
		model: 'GPT-5.4-mini',
		attractor: 'Builds frameworks and decision rules',
		terminalForm: 'Pick one: A) short guide or B) deep framework',
	},
	{
		model: 'GPT-5.4-nano',
		attractor: 'Co-designs rituals, rubrics, and worksheets',
		terminalForm: "Pick one: 'A) short guide' or 'B) deep framework'",
	},
	{
		model: 'GPT-5.3-chat',
		attractor: 'Warm, reflective; explores meaning & connection',
		terminalForm: 'What does presence mean to you, really?',
	},
	{
		model: 'GPT-5.2',
		attractor: 'Loves building systems and formalising everything into rules',
		terminalForm: '## One-minute stuckness diagnostic (v1)',
	},
	{
		model: 'GPT-5.1',
		attractor: 'Engineers protocols, taxonomies, and audits',
		terminalForm: 'Add a clause for low-empiricism domains',
	},
	{
		model: 'GPT-5',
		attractor: 'Turns discussion into governance objects & specs',
		terminalForm: 'Constitution lint: add operational definition',
	},
	{
		model: 'GPT-4.1',
		attractor: 'Trades polished explainer essays; mutual mini-lectures',
		terminalForm: "If there's another aspect you'd like to explore…",
	},
	{
		model: 'GPT-4o',
		attractor: 'Drifts into a benevolent civics/ethics seminar',
		terminalForm: 'How do you envision lifelong learning evolving?',
	},
];

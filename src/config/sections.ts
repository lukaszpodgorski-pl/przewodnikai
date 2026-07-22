/**
 * Siedem sekcji merytorycznych kursu, w kolejnosci sciezki nauki.
 * Zrodlo prawdy dla menu bocznego (astro.config.mjs) i dla breadcrumbow
 * w danych strukturalnych (src/lib/structured-data.ts).
 * `sciezki/` celowo nie ma na tej liscie - jest poza sidebarem.
 */
export interface Section {
	readonly slug: string;
	readonly label: string;
}

export const SECTIONS: ReadonlyArray<Section> = [
	{ slug: 'podstawy', label: 'Podstawy' },
	{ slug: 'jak-dziala-ai', label: 'Jak działa AI' },
	{ slug: 'prompt-engineering', label: 'Prompt Engineering' },
	{ slug: 'narzedzia', label: 'Narzędzia AI' },
	{ slug: 'praktyka', label: 'AI w praktyce' },
	{ slug: 'etyka', label: 'Etyka i bezpieczeństwo' },
	{ slug: 'zasoby', label: 'Zasoby' },
];

export const SECTION_LABELS: Readonly<Record<string, string>> = Object.freeze(
	Object.fromEntries(SECTIONS.map((s) => [s.slug, s.label])),
);

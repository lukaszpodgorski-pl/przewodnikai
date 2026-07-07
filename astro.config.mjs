// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

const GITHUB_REPO = 'https://github.com/lukaszpodgorski-pl/przewodnikai';

// https://astro.build/config
export default defineConfig({
	// `site` jest wymagane m.in. dla sitemapy i kanonicznych URL-i
	site: 'https://przewodnikai.pl',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Przewodnik AI',
			description:
				'Otwarta, społecznościowa baza wiedzy o sztucznej inteligencji po polsku. Kurs AI od podstaw — bez żargonu, dla każdego.',
			components: {
				Footer: './src/components/Footer.astro',
			},
			// Polski jako root locale: polskie UI Starlight, <html lang="pl">,
			// polski stemming Pagefind — bez prefiksu /pl/ w adresach.
			locales: {
				root: { label: 'Polski', lang: 'pl' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: GITHUB_REPO }],
			// Przycisk „Edytuj tę stronę" przy każdym artykule
			editLink: {
				baseUrl: `${GITHUB_REPO}/edit/main/`,
			},
			lastUpdated: true,
			plugins: [starlightLlmsTxt()],
			sidebar: [
				{ label: 'Podstawy', items: [{ autogenerate: { directory: 'podstawy' } }] },
				{ label: 'Jak działa AI', items: [{ autogenerate: { directory: 'jak-dziala-ai' } }] },
				{ label: 'Prompt Engineering', items: [{ autogenerate: { directory: 'prompt-engineering' } }] },
				{ label: 'Narzędzia AI', items: [{ autogenerate: { directory: 'narzedzia' } }] },
				{ label: 'AI w praktyce', items: [{ autogenerate: { directory: 'praktyka' } }] },
				{ label: 'Etyka i bezpieczeństwo', items: [{ autogenerate: { directory: 'etyka' } }] },
				{ label: 'Zasoby', items: [{ autogenerate: { directory: 'zasoby' } }] },
			],
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';
import { SECTIONS } from './src/config/sections';

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
				Head: './src/components/Head.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
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
			sidebar: SECTIONS.map(({ slug, label }) => ({
				label,
				items: [{ autogenerate: { directory: slug } }],
			})),
		}),
	],
	vite: {
		build: {
			rolldownOptions: {
				// `satteri` (Astro's markdown parser) tries to load its wasm32-wasi
				// fallback binary when Vite resolves the "prerender" environment with
				// browser-like conditions (as Cloudflare's build does). That optional
				// dependency is gated on `cpu: ["wasm32"]` in its package.json, which
				// npm never matches on any real host, so it's never installed and the
				// bundler can't resolve it. It's unused in this code path, so mark it
				// external instead of bundling it.
				external: ['@bruits/satteri-wasm32-wasi'],
			},
		},
	},
});

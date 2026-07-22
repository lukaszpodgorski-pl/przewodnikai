import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

const entries = await getCollection('docs');

// Klucz mapy staje się segmentem trasy: /og/<id>.png
// Strona główna ma w kolekcji surowy identyfikator 'index' (plik
// src/content/docs/index.mdx) - inny niż `route.id` z Astro.locals.starlightRoute
// używany w Head.astro, który Starlight normalizuje dla strony głównej do
// pustego łańcucha. Odfiltrowujemy oba warianty, żeby nie generować
// nieużywanego obrazu dla strony głównej - Head.astro i tak używa dla niej
// statycznego og-default.png.
const pages = Object.fromEntries(
	entries.filter((entry) => entry.id !== '' && entry.id !== 'index').map((entry) => [entry.id, entry.data]),
);

// OGImageRoute jest funkcją async - bez `await` destrukturyzacja łapie
// właściwości z obietnicy (undefined), a nie z jej rozwiązanej wartości.
// Nazwa parametru trasy (`route`) wynika z nazwy pliku `[...route].ts` -
// biblioteka wykrywa ją sama z `routePattern`, więc nie przyjmuje jej jako opcji.
export const { getStaticPaths, GET } = await OGImageRoute({
	pages,
	getImageOptions: (_path, page: (typeof pages)[string]) => ({
		title: page.title,
		description: page.description ?? 'Otwarta baza wiedzy o AI po polsku',
		logo: { path: './public/favicon.svg', size: [72, 72] },
		bgGradient: [
			[24, 24, 27],
			[39, 39, 42],
		],
		border: { color: [124, 58, 237], width: 16, side: 'inline-start' },
		padding: 70,
		font: {
			title: { size: 64, weight: 'Bold', color: [255, 255, 255], lineHeight: 1.2 },
			description: { size: 30, weight: 'Normal', color: [161, 161, 170], lineHeight: 1.4 },
		},
	}),
});

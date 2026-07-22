/**
 * Czyste funkcje budujące obiekty JSON-LD. Zero API Astro - dzięki temu
 * dają się wywołać i sprawdzić bez uruchamiania frameworka.
 */
import { SECTION_LABELS } from '../config/sections';

export const SITE_URL = 'https://przewodnikai.pl';
export const SITE_NAME = 'Przewodnik AI';
const LICENSE = 'https://creativecommons.org/licenses/by-sa/4.0/';

export const AUTHOR = {
	'@type': 'Person',
	name: 'Łukasz Podgórski',
	url: 'https://aitomate.pl',
	sameAs: ['https://aitomate.pl', 'https://github.com/lukaszpodgorski-pl'],
} as const;

export interface ThingRef {
	name: string;
	sameAs: string;
	type?: string;
}

export interface FaqItem {
	q: string;
	a: string;
}

export interface BasicInput {
	pathname: string;
	title: string;
	description?: string;
	image?: string;
}

export interface ArticleInput extends BasicInput {
	dateModified?: Date;
	educationalLevel?: string;
	teaches?: string[];
	about?: ThingRef[];
	mentions?: ThingRef[];
}

/** Składa absolutny URL z zachowaniem końcowego ukośnika (trailingSlash: 'always'). */
export function absoluteUrl(pathname: string): string {
	return new URL(pathname, SITE_URL).href;
}

function toThing(ref: ThingRef) {
	return { '@type': ref.type ?? 'Thing', name: ref.name, sameAs: ref.sameAs };
}

/** Dokłada klucz tylko gdy wartość jest niepusta - unika pustych pól w JSON-LD. */
function withOptional<T extends object>(base: T, extras: Record<string, unknown>): T {
	const out: Record<string, unknown> = { ...base };
	for (const [key, value] of Object.entries(extras)) {
		if (value === undefined || value === null) continue;
		if (Array.isArray(value) && value.length === 0) continue;
		out[key] = value;
	}
	return out as T;
}

interface Crumb {
	name: string;
	item?: string;
}

export function buildBreadcrumbs(pathname: string, title: string) {
	const segments = pathname.split('/').filter(Boolean);
	const items: Crumb[] = [{ name: 'Strona główna', item: absoluteUrl('/') }];

	if (segments.length > 1) {
		const [section] = segments;
		const label = SECTION_LABELS[section];
		// Sekcje nie mają własnych stron indeksowych (kolidują z 301 w _redirects),
		// więc wpis sekcji jest nazwą bez `item` - dozwolone przez schema.org.
		if (label) items.push({ name: label });
		else if (section === 'sciezki') items.push({ name: 'Ścieżki nauki', item: absoluteUrl('/sciezki/') });
	}

	items.push({ name: title, item: absoluteUrl(pathname) });

	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((entry, index) =>
			withOptional(
				{ '@type': 'ListItem', position: index + 1, name: entry.name },
				{ item: entry.item },
			),
		),
	};
}

export function buildArticle(input: ArticleInput) {
	return withOptional(
		{
			'@context': 'https://schema.org',
			'@type': 'TechArticle',
			headline: input.title,
			url: absoluteUrl(input.pathname),
			mainEntityOfPage: absoluteUrl(input.pathname),
			inLanguage: 'pl-PL',
			license: LICENSE,
			isAccessibleForFree: true,
			author: AUTHOR,
			publisher: AUTHOR,
		},
		{
			description: input.description,
			image: input.image,
			dateModified: input.dateModified?.toISOString(),
			educationalLevel: input.educationalLevel,
			teaches: input.teaches,
			about: input.about?.map(toThing),
			mentions: input.mentions?.map(toThing),
		},
	);
}

export function buildCollectionPage(input: BasicInput) {
	return withOptional(
		{
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: input.title,
			url: absoluteUrl(input.pathname),
			inLanguage: 'pl-PL',
			isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: absoluteUrl('/') },
		},
		{ description: input.description, image: input.image },
	);
}

export function buildWebSite() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				name: SITE_NAME,
				url: absoluteUrl('/'),
				inLanguage: 'pl-PL',
				license: LICENSE,
				publisher: AUTHOR,
			},
			AUTHOR,
		],
	};
}

export function buildFaqPage(items: FaqItem[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a },
		})),
	};
}

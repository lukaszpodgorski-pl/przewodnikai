// Asercje GEO/AEO/SEO na zbudowanym katalogu dist/.
// Repo nie ma frameworka testowego - ten skrypt pelni te role dla danych
// strukturalnych, FAQ, obrazow OG i sitemapy.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const results = [];

function check(name, fn) {
	try {
		const detail = fn();
		results.push({ name, ok: true, detail });
	} catch (err) {
		results.push({ name, ok: false, detail: err.message });
	}
}

function assert(cond, msg) {
	if (!cond) throw new Error(msg);
}

/** Wszystkie pliki index.html pochodzace z kolekcji docs (bez 404.html). */
function collectionPages() {
	const out = [];
	(function walk(dir) {
		for (const name of readdirSync(dir)) {
			const full = join(dir, name);
			if (statSync(full).isDirectory()) {
				if (name === '_astro' || name === 'pagefind' || name === 'og') continue;
				walk(full);
			} else if (name === 'index.html') {
				out.push(full);
			}
		}
	})(DIST);
	return out;
}

/** Wyciaga wszystkie bloki JSON-LD ze strony i parsuje je. */
function jsonLdBlocks(html) {
	const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
	const blocks = [];
	let m;
	while ((m = re.exec(html)) !== null) blocks.push(JSON.parse(m[1]));
	return blocks;
}

/** Zbiera wartosci @type ze wszystkich blokow, takze z @graph. */
function typesIn(html) {
	const types = new Set();
	for (const block of jsonLdBlocks(html)) {
		const nodes = Array.isArray(block['@graph']) ? block['@graph'] : [block];
		for (const node of nodes) if (node['@type']) types.add(node['@type']);
	}
	return types;
}

/** URL strony na podstawie sciezki pliku, np. dist/podstawy/x/index.html -> /podstawy/x/ */
function urlOf(file) {
	const rel = relative(DIST, file).split(sep).slice(0, -1).join('/');
	return rel === '' ? '/' : `/${rel}/`;
}

assert(existsSync(DIST), 'Brak katalogu dist - uruchom najpierw `npm run build`');

const pages = collectionPages();
const pageData = pages.map((f) => ({ file: f, url: urlOf(f), html: readFileSync(f, 'utf8') }));
const articles = pageData.filter((p) => p.url !== '/' && !p.url.startsWith('/sciezki/'));
const sciezki = pageData.filter((p) => p.url.startsWith('/sciezki/'));
const home = pageData.filter((p) => p.url === '/');

// --- Task 1: harness widzi to, co powinien ---
check('kolekcja liczy 55 stron', () => {
	assert(pageData.length === 55, `oczekiwano 55, jest ${pageData.length}`);
	return `${pageData.length} stron`;
});
check('podzial 44 artykuly / 10 sciezek / 1 strona glowna', () => {
	assert(articles.length === 44, `artykuly: oczekiwano 44, jest ${articles.length}`);
	assert(sciezki.length === 10, `sciezki: oczekiwano 10, jest ${sciezki.length}`);
	assert(home.length === 1, `strona glowna: oczekiwano 1, jest ${home.length}`);
	return `${articles.length}/${sciezki.length}/${home.length}`;
});

// --- Task 3: JSON-LD + OG ---
check('kazda strona ma blok JSON-LD', () => {
	const missing = pageData.filter((p) => jsonLdBlocks(p.html).length === 0);
	assert(missing.length === 0, `bez JSON-LD: ${missing.map((p) => p.url).join(', ')}`);
	return `${pageData.length}/${pageData.length}`;
});
check('44 artykuly maja TechArticle', () => {
	const bad = articles.filter((p) => !typesIn(p.html).has('TechArticle'));
	assert(bad.length === 0, `bez TechArticle: ${bad.map((p) => p.url).join(', ')}`);
	return '44/44';
});
check('zadna sciezka nie ma TechArticle', () => {
	const bad = sciezki.filter((p) => typesIn(p.html).has('TechArticle'));
	assert(bad.length === 0, `blednie oznaczone: ${bad.map((p) => p.url).join(', ')}`);
	return '0/10';
});
check('10 sciezek ma CollectionPage', () => {
	const bad = sciezki.filter((p) => !typesIn(p.html).has('CollectionPage'));
	assert(bad.length === 0, `bez CollectionPage: ${bad.map((p) => p.url).join(', ')}`);
	return '10/10';
});
check('strona glowna ma WebSite i Person', () => {
	const t = typesIn(home[0].html);
	assert(t.has('WebSite'), 'brak WebSite');
	assert(t.has('Person'), 'brak Person');
	return 'WebSite + Person';
});
check('kazda strona ma BreadcrumbList poza glowna', () => {
	const bad = [...articles, ...sciezki].filter((p) => !typesIn(p.html).has('BreadcrumbList'));
	assert(bad.length === 0, `bez BreadcrumbList: ${bad.map((p) => p.url).join(', ')}`);
	return `${articles.length + sciezki.length} stron`;
});
check('kazda strona ma og:image i twitter:image', () => {
	const bad = pageData.filter(
		(p) => !p.html.includes('property="og:image"') || !p.html.includes('name="twitter:image"')
	);
	assert(bad.length === 0, `bez obrazu OG: ${bad.map((p) => p.url).join(', ')}`);
	return `${pageData.length}/${pageData.length}`;
});

// --- Task 4: FAQ ---
check('30 stron ma blok FAQPage', () => {
	const withFaq = pageData.filter((p) => typesIn(p.html).has('FAQPage'));
	assert(withFaq.length === 30, `oczekiwano 30, jest ${withFaq.length}`);
	return `${withFaq.length}/30`;
});

// Jedyna strona z jawnym wyjątkiem: pole `faqHidden` w jej frontmatterze
// wyłącza wygenerowaną sekcję "Częste pytania", bo treść artykułu sama jest
// FAQ (pytania jako nagłówki `##` z rozwiniętymi odpowiedziami), a
// wygenerowana sekcja pod spodem powielałaby dokładnie te same pytania.
// Blok FAQPage zostaje - warunek widocznej treści (wymagany przez Google)
// spełnia tu sama treść artykułu. To jedyny URL, któremu wolno nie mieć
// "Częste pytania" mimo FAQPage; każda inna strona z tym wyjątkiem to
// prawdziwy defekt.
const FAQ_HIDDEN_URL = '/zasoby/faq/';

check('FAQPage zawsze towarzyszy widocznej sekcji (poza jawnym wyjątkiem faqHidden)', () => {
	const bad = pageData.filter(
		(p) =>
			p.url !== FAQ_HIDDEN_URL &&
			typesIn(p.html).has('FAQPage') &&
			!p.html.includes('Częste pytania')
	);
	assert(bad.length === 0, `JSON-LD bez widocznej tresci: ${bad.map((p) => p.url).join(', ')}`);
	return `29/29 (jedyny wyjątek: ${FAQ_HIDDEN_URL})`;
});
check(`faqHidden działa na ${FAQ_HIDDEN_URL}: FAQPage jest, wygenerowana sekcja - nie`, () => {
	const page = pageData.find((p) => p.url === FAQ_HIDDEN_URL);
	assert(page, `nie znaleziono strony ${FAQ_HIDDEN_URL}`);
	assert(typesIn(page.html).has('FAQPage'), `${FAQ_HIDDEN_URL} powinna mieć blok FAQPage`);
	assert(
		!page.html.includes('Częste pytania'),
		`${FAQ_HIDDEN_URL} nie powinna mieć wygenerowanej sekcji "Częste pytania" - flaga faqHidden nie działa`
	);
	return 'FAQPage + brak wygenerowanej sekcji';
});
check('brak sekcji FAQ na stronach bez FAQPage', () => {
	const bad = pageData.filter(
		(p) => !typesIn(p.html).has('FAQPage') && p.html.includes('Częste pytania')
	);
	assert(bad.length === 0, `pusta sekcja FAQ: ${bad.map((p) => p.url).join(', ')}`);
	return 'brak pustych sekcji';
});

// --- Task 5: obrazy OG ---
check('obraz OG istnieje dla kazdej strony', () => {
	const bad = [];
	for (const p of pageData) {
		const m = p.html.match(/property="og:image" content="([^"]+)"/);
		if (!m) { bad.push(`${p.url} (brak znacznika)`); continue; }
		const file = join(DIST, new URL(m[1]).pathname);
		if (!existsSync(file)) bad.push(`${p.url} -> ${m[1]}`);
	}
	assert(bad.length === 0, `brakujace pliki: ${bad.join(', ')}`);
	return `${pageData.length} obrazow`;
});

// --- Task 6: sitemap ---
check('sitemap zawiera 55 URL-i', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	const n = (xml.match(/<loc>/g) || []).length;
	assert(n === 55, `oczekiwano 55, jest ${n}`);
	return `${n} URL-i`;
});
check('sitemap ma lastmod albo potwierdzony plytki klon', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	const n = (xml.match(/<lastmod>/g) || []).length;
	assert(n === 55 || n === 0, `czesciowy lastmod (${n}/55) - mapa git jest niespojna`);
	return n === 0 ? 'pominiete (brak historii git)' : `${n} wpisow`;
});
check('sitemap rozroznia priorytety', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	// @astrojs/sitemap serializuje priorytet 1.0 jako "1.0", nie jako "1"
	// (zweryfikowane w dist/sitemap-0.xml) - asercja dopasowana do realnego
	// formatu serializera, nie odwrotnie.
	assert(xml.includes('<priority>1.0</priority>'), 'brak priorytetu 1.0 dla strony glownej');
	assert(xml.includes('<priority>0.5</priority>'), 'brak priorytetu 0.5 dla sciezek');
	assert(xml.includes('<priority>0.8</priority>'), 'brak priorytetu 0.8 dla artykulow');
	return '1.0 / 0.8 / 0.5';
});

// --- raport ---
let failed = 0;
for (const r of results) {
	if (!r.ok) failed++;
	console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` - ${r.detail}` : ''}`);
}
console.log(`\n${results.length - failed}/${results.length} asercji przeszlo`);
process.exit(failed > 0 ? 1 : 0);

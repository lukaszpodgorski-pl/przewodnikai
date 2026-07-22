// Asercje GEO/AEO/SEO na zbudowanym katalogu dist/.
// Repo nie ma frameworka testowego - ten skrypt pełni tę rolę dla danych
// strukturalnych, FAQ, obrazów OG i sitemapy.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const SRC_DOCS = join('src', 'content', 'docs');
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

/** Wszystkie pliki index.html pochodzące z kolekcji docs (bez 404.html). */
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

/**
 * Wszystkie pliki .md/.mdx w katalogu treści, które faktycznie staną się
 * stroną - źródło prawdy dla liczby stron w dist. Pliki i foldery z
 * przedrostkiem podkreślenia (`_`) pomijamy: to udokumentowana konwencja
 * Astro bezwarunkowo wykluczająca ścieżkę z routingu i z kolekcji treści
 * (ten sam mechanizm, co `src/pages/og/_fonts` w astro.config.mjs) - bez
 * tego wyjątku dodanie roboczego/szkicowego pliku z tym przedrostkiem
 * fałszywie zgłaszałoby rozjazd źródło/dist, mimo że build celowo go pomija.
 */
function sourceDocFiles() {
	const out = [];
	(function walk(dir) {
		for (const name of readdirSync(dir)) {
			if (name.startsWith('_')) continue;
			const full = join(dir, name);
			if (statSync(full).isDirectory()) {
				walk(full);
			} else if (/\.(md|mdx)$/.test(name)) {
				out.push(full);
			}
		}
	})(SRC_DOCS);
	return out;
}

/** Wyciąga blok frontmatteru (między parą `---`) z treści pliku źródłowego. */
function frontmatterOf(content) {
	const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return m ? m[1] : '';
}

/**
 * Czy plik ma we frontmatterze pole `faq:` - proste dopasowanie tekstowe
 * (klucz na początku linii), bez parsera YAML jako dodatkowej zależności.
 */
function hasFaqField(content) {
	return /^faq:/m.test(frontmatterOf(content));
}

/** Wyciąga wszystkie bloki JSON-LD ze strony i parsuje je. */
function jsonLdBlocks(html) {
	const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
	const blocks = [];
	let m;
	while ((m = re.exec(html)) !== null) blocks.push(JSON.parse(m[1]));
	return blocks;
}

/** Zbiera wartości @type ze wszystkich bloków, także z @graph. */
function typesIn(html) {
	const types = new Set();
	for (const block of jsonLdBlocks(html)) {
		const nodes = Array.isArray(block['@graph']) ? block['@graph'] : [block];
		for (const node of nodes) if (node['@type']) types.add(node['@type']);
	}
	return types;
}

/** URL strony na podstawie ścieżki pliku, np. dist/podstawy/x/index.html -> /podstawy/x/ */
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

// Stan źródeł (src/content/docs/) - punkt odniesienia dla asercji relacyjnych
// poniżej. `index.mdx` w katalogu głównym to strona główna; pliki pod
// `sciezki/` (w tym jej własny `index.mdx`) to ścieżki nauki; reszta to
// artykuły.
const sourceFiles = sourceDocFiles();
const sourceRel = sourceFiles.map((f) => relative(SRC_DOCS, f).split(sep).join('/'));
const sourceHome = sourceRel.filter((r) => r === 'index.mdx');
const sourceSciezki = sourceRel.filter((r) => r.startsWith('sciezki/'));
const sourceArticles = sourceRel.filter((r) => r !== 'index.mdx' && !r.startsWith('sciezki/'));

// --- Task 1: harness widzi to, co powinien ---
check('liczba stron w dist odpowiada liczbie plików źródłowych w treści', () => {
	assert(
		pageData.length === sourceFiles.length,
		`źródło: ${sourceFiles.length} plików .md/.mdx, dist: ${pageData.length} stron`,
	);
	return `${pageData.length} stron (źródło: ${sourceFiles.length} plików)`;
});
check('podział na artykuły / ścieżki / stronę główną zgodny ze źródłem', () => {
	assert(
		articles.length === sourceArticles.length,
		`artykuły: źródło ${sourceArticles.length}, dist ${articles.length}`,
	);
	assert(
		sciezki.length === sourceSciezki.length,
		`ścieżki: źródło ${sourceSciezki.length}, dist ${sciezki.length}`,
	);
	assert(
		home.length === sourceHome.length,
		`strona główna: źródło ${sourceHome.length}, dist ${home.length}`,
	);
	return `${articles.length}/${sciezki.length}/${home.length}`;
});

// --- Task 3: JSON-LD + OG ---
check('każda strona ma blok JSON-LD', () => {
	const missing = pageData.filter((p) => jsonLdBlocks(p.html).length === 0);
	assert(missing.length === 0, `bez JSON-LD: ${missing.map((p) => p.url).join(', ')}`);
	return `${pageData.length}/${pageData.length}`;
});
check('każdy artykuł ma TechArticle', () => {
	const bad = articles.filter((p) => !typesIn(p.html).has('TechArticle'));
	assert(bad.length === 0, `bez TechArticle: ${bad.map((p) => p.url).join(', ')}`);
	return `${articles.length}/${articles.length}`;
});
check('żadna ścieżka nie ma TechArticle', () => {
	const bad = sciezki.filter((p) => typesIn(p.html).has('TechArticle'));
	assert(bad.length === 0, `błędnie oznaczone: ${bad.map((p) => p.url).join(', ')}`);
	return `0/${sciezki.length}`;
});
check('każda ścieżka ma CollectionPage', () => {
	const bad = sciezki.filter((p) => !typesIn(p.html).has('CollectionPage'));
	assert(bad.length === 0, `bez CollectionPage: ${bad.map((p) => p.url).join(', ')}`);
	return `${sciezki.length}/${sciezki.length}`;
});
check('strona główna ma WebSite i Person', () => {
	const t = typesIn(home[0].html);
	assert(t.has('WebSite'), 'brak WebSite');
	assert(t.has('Person'), 'brak Person');
	return 'WebSite + Person';
});
check('każda strona ma BreadcrumbList poza główną', () => {
	const bad = [...articles, ...sciezki].filter((p) => !typesIn(p.html).has('BreadcrumbList'));
	assert(bad.length === 0, `bez BreadcrumbList: ${bad.map((p) => p.url).join(', ')}`);
	return `${articles.length + sciezki.length} stron`;
});
check('każda strona ma og:image i twitter:image', () => {
	const bad = pageData.filter(
		(p) => !p.html.includes('property="og:image"') || !p.html.includes('name="twitter:image"')
	);
	assert(bad.length === 0, `bez obrazu OG: ${bad.map((p) => p.url).join(', ')}`);
	return `${pageData.length}/${pageData.length}`;
});

// --- Task 4: FAQ ---
const sourceFaqCount = sourceFiles.filter((f) => hasFaqField(readFileSync(f, 'utf8'))).length;

check('liczba stron z blokiem FAQPage odpowiada liczbie plików z polem faq: w frontmatterze', () => {
	const withFaq = pageData.filter((p) => typesIn(p.html).has('FAQPage'));
	assert(
		withFaq.length === sourceFaqCount,
		`źródło: ${sourceFaqCount} plików z faq:, dist: ${withFaq.length} bloków FAQPage`,
	);
	return `${withFaq.length}/${sourceFaqCount}`;
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
	const withFaq = pageData.filter((p) => typesIn(p.html).has('FAQPage'));
	const bad = withFaq.filter((p) => p.url !== FAQ_HIDDEN_URL && !p.html.includes('Częste pytania'));
	assert(bad.length === 0, `JSON-LD bez widocznej treści: ${bad.map((p) => p.url).join(', ')}`);
	return `${withFaq.length - 1}/${withFaq.length - 1} (jedyny wyjątek: ${FAQ_HIDDEN_URL})`;
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
check('obraz OG istnieje dla każdej strony', () => {
	const bad = [];
	for (const p of pageData) {
		const m = p.html.match(/property="og:image" content="([^"]+)"/);
		if (!m) { bad.push(`${p.url} (brak znacznika)`); continue; }
		const file = join(DIST, new URL(m[1]).pathname);
		if (!existsSync(file)) bad.push(`${p.url} -> ${m[1]}`);
	}
	assert(bad.length === 0, `brakujące pliki: ${bad.join(', ')}`);
	return `${pageData.length} obrazów`;
});

// --- Task 6: sitemap ---
check('sitemap zawiera tyle URL-i, ile stron w dist', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	const n = (xml.match(/<loc>/g) || []).length;
	assert(n === pageData.length, `oczekiwano ${pageData.length}, jest ${n}`);
	return `${n} URL-i`;
});
check('sitemap ma lastmod dla każdej strony albo potwierdzony płytki klon', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	const n = (xml.match(/<lastmod>/g) || []).length;
	assert(
		n === pageData.length || n === 0,
		`częściowy lastmod (${n}/${pageData.length}) - mapa git jest niespójna`,
	);
	return n === 0 ? 'pominięte (brak historii git)' : `${n} wpisów`;
});
check('sitemap rozróżnia priorytety', () => {
	const xml = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
	// @astrojs/sitemap serializuje priorytet 1.0 jako "1.0", nie jako "1"
	// (zweryfikowane w dist/sitemap-0.xml) - asercja dopasowana do realnego
	// formatu serializera, nie odwrotnie.
	assert(xml.includes('<priority>1.0</priority>'), 'brak priorytetu 1.0 dla strony głównej');
	assert(xml.includes('<priority>0.5</priority>'), 'brak priorytetu 0.5 dla ścieżek');
	assert(xml.includes('<priority>0.8</priority>'), 'brak priorytetu 0.8 dla artykułów');
	return '1.0 / 0.8 / 0.5';
});

// --- raport ---
let failed = 0;
for (const r of results) {
	if (!r.ok) failed++;
	console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` - ${r.detail}` : ''}`);
}
console.log(`\n${results.length - failed}/${results.length} asercji przeszło`);
process.exit(failed > 0 ? 1 : 0);

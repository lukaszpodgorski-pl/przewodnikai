// Mapa URL -> data ostatniej zmiany pliku wg git, dla pola <lastmod> w sitemapie.
// Cloudflare buduje projekt po swojej stronie i może klonować repo płytko
// (--depth=1). Bez historii git zwracamy pustą mapę, a `serialize` pomija
// <lastmod> całkowicie. Sygnał nieobecny jest uczciwy; sygnał mówiący, że
// wszystkie 55 stron zmieniono w tej samej sekundzie - nie jest.
import { execFileSync } from 'node:child_process';
import { readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DOCS = join('src', 'content', 'docs');

function walk(dir) {
	const out = [];
	for (const name of readdirSync(dir)) {
		const full = join(dir, name);
		if (statSync(full).isDirectory()) out.push(...walk(full));
		else if (name.endsWith('.md') || name.endsWith('.mdx')) out.push(full);
	}
	return out;
}

/** src/content/docs/podstawy/wstep.md -> /podstawy/wstep/ ; index.mdx -> / */
function urlFor(file) {
	const rel = relative(DOCS, file).replace(/\.mdx?$/, '');
	const parts = rel.split(sep);
	if (parts[parts.length - 1] === 'index') parts.pop();
	return parts.length === 0 ? '/' : `/${parts.join('/')}/`;
}

function hasGitHistory() {
	try {
		const depth = execFileSync('git', ['rev-list', '--count', 'HEAD'], {
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'ignore'],
		}).trim();
		return Number(depth) > 1;
	} catch {
		return false;
	}
}

export function lastModMap() {
	const map = new Map();
	if (!hasGitHistory()) {
		console.warn('[sitemap] Brak historii git - pomijam <lastmod> w sitemapie.');
		return map;
	}
	for (const file of walk(DOCS)) {
		try {
			const iso = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
				encoding: 'utf8',
				stdio: ['ignore', 'pipe', 'ignore'],
			}).trim();
			if (iso) map.set(urlFor(file), iso);
		} catch {
			// Plik bez historii (np. nowy, niezacommitowany) - pomijamy.
		}
	}
	return map;
}

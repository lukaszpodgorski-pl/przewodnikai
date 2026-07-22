# AGENTS.md

Wskazówki dla agentów AI (Claude Code i pokrewnych) pracujących w tym repozytorium.

> `CLAUDE.md` w katalogu głównym jest symlinkiem do tego pliku - edytuj `AGENTS.md`. Sam symlink jest w `.gitignore` i celowo nie trafia do repo.

## Czym jest ten projekt

[przewodnikai.pl](https://przewodnikai.pl) - otwarta baza wiedzy o AI po polsku, zbudowana na **Astro 7 + Starlight**, hostowana na **Cloudflare Workers** (static assets, konfiguracja w `wrangler.jsonc`). Model pracy: "żywe wiki" - treść w Markdownie, zmiany przez pull requesty, publikacja automatyczna.

**To repozytorium treści, nie aplikacji.** ~56 artykułów w `src/content/docs/`, dwa własne komponenty (`Footer.astro`, `Video.astro`), zero logiki biznesowej i zero testów jednostkowych. Większość zadań to edycja Markdowna.

## Komendy

```powershell
npm install
npm run dev        # localhost:4321
npm run build      # build produkcyjny do ./dist/ - to jest nasz "test suite"
npm run preview    # podgląd builda
```

Weryfikacja przed commitem (te same kroki co CI, uruchamiane lokalnie):

```powershell
npm run build
npx --yes markdownlint-cli2 "src/content/**/*.md" "*.md"
```

Nie ma frameworka testowego. `npm run build` jest jedynym pełnym sprawdzeniem - wykrywa złamane linki wewnętrzne, błędy frontmattera (schemat Zod) i błędy MDX.

Serwer deweloperski uruchamiaj w tle: `astro dev --background`; zarządzanie: `astro dev stop`, `astro dev status`, `astro dev logs`.

## CI (GitHub Actions)

| Workflow | Kiedy | Co sprawdza |
| --- | --- | --- |
| `lint.yml` | zmiany w `**/*.md(x)` | markdownlint-cli2 wg `.markdownlint.jsonc` |
| `links.yml` | PR + cotygodniowy cron | lychee - linki zewnętrzne i wewnętrzne |
| `media.yml` | zmiany w `src/assets/**`, `public/media/**` | obraz ≤ 1 MB, wideo ≤ 5 MB, **GIF-y odrzucane** |

Każdy PR wymaga akceptacji code ownera (`.github/CODEOWNERS`).

## Architektura

### Routing i treść

Jedna kolekcja `docs` (`src/content.config.ts`) ładowana przez `docsLoader()` Starlight. **Folder w `src/content/docs/` = sekcja w menu bocznym**, ale sidebar nie jest w pełni automatyczny: `astro.config.mjs` wylicza 7 sekcji ręcznie (`podstawy`, `jak-dziala-ai`, `prompt-engineering`, `narzedzia`, `praktyka`, `etyka`, `zasoby`) i każda ma `autogenerate` w środku. **Nowy folder najwyższego poziomu nie pojawi się w menu, dopóki nie dopiszesz go do `sidebar`.**

`sciezki/` jest celowo poza sidebarem - to strony `template: splash` z `sidebar.hidden: true`, wchodzi się do nich przez `sciezki/index.mdx` (CardGrid).

### Trzy pułapki, o które łatwo się potknąć

1. **`trailingSlash: 'always'`** - wszystkie linki wewnętrzne muszą kończyć się ukośnikiem (`/podstawy/wstep/`).
2. **`public/_redirects`** - mapa 301 ze starych płaskich URL-i. Reguły mają pierwszeństwo przed plikami statycznymi, więc **nie twórz stron indeksowych pod `/podstawy/`, `/prompt-engineering/` ani `/etyka/`** - zostaną przesłonięte przez przekierowania starych artykułów.
3. **Łańcuch "Następny krok"** - treść artykułów prowadzi czytelnika liniowo przez sekcje w kolejności `podstawy → jak-dziala-ai → prompt-engineering → narzedzia → praktyka → etyka → zasoby`. `sidebar.order` w każdym pliku odzwierciedla tę ścieżkę. Zmiana kolejności wymaga aktualizacji linków "Następny krok" w sąsiednich plikach.

### Frontmatter GEO/AEO

`src/content.config.ts` rozszerza `docsSchema()` o pola pod dane strukturalne: `educationalLevel`, `teaches`, `about[]`, `mentions[]`, `faq[]`. Pola są wypełnione w artykułach, ale **nic ich jeszcze nie renderuje** - generowanie `<script type="application/ld+json">` to otwarte zadanie (`TODO.md`). Dodając nowy artykuł, uzupełnij te pola wzorem istniejących (np. `src/content/docs/podstawy/czym-jest-ai.md`).

### Media

- **Obrazy:** `src/assets/<sekcja>/<artykul>/`, osadzane zwykłym Markdownem po ścieżce względnej (`../../../assets/...`) - Astro optymalizuje je do WebP/AVIF.
- **Wideo:** `public/media/<sekcja>/<artykul>/`, serwowane 1:1, osadzane komponentem `<Video />` (`src/components/Video.astro` - WebM + fallback MP4, respektuje `prefers-reduced-motion`).
- **GIF-y są zakazane** i odrzucane przez CI. Komendy konwersji ffmpeg: `CONTRIBUTING.md`.
- `alt` jest obowiązkowy przy każdym obrazie i animacji.

### Cloudflare / build

`wrangler.jsonc` serwuje statyczne `./dist`. W `astro.config.mjs` blok `vite.build.rolldownOptions.external` wyrzuca `@bruits/satteri-wasm32-wasi` z bundla - **nie usuwaj tego**, bez tego build na Cloudflare pada (opcjonalna zależność `cpu: ["wasm32"]` nigdy się nie instaluje, a bundler próbuje ją rozwiązać).

`starlight-llms-txt` generuje `llms.txt`. `public/robots.txt` świadomie wpuszcza wszystkie crawlery AI (GPTBot, ClaudeBot, PerplexityBot itd.).

## Konwencje treści

Grupa docelowa: **osoby nietechniczne**. Ton ciepły, bezpośredni (per "Ty"), bez żargonu; terminy angielskie w nawiasie przy pierwszym użyciu. Głos autora w pierwszej osobie.

Typografia (ujednolicona w audycie 2026-07; raport w `docs/audyt-tresci-2026-07-20.md` - katalog `docs/` jest lokalny, poza repo):

- **Pauza to zwykły dywiz `-`** - nie `—` ani `–`.
- **Cudzysłowy proste `"…"`** - nie `„…”` ani `“…”`.
- Separator tysięcy: spacja (`50 000`); przecinek dziesiętny (`1,5 h`).

Ta konwencja obowiązuje też w plikach repo (`AGENTS.md`, `README.md`, `CONTRIBUTING.md`), nie tylko w artykułach.

Markdown:

- Kursywa podkreślnikami `_kursywa_`, bold gwiazdkami `**bold**` (MD049/MD050).
- Wyróżnienia przez asides Starlight (`:::tip`, `:::note`, `:::caution`, `:::danger`), nie własny HTML.
- Nazwy plików: małe litery, myślniki, bez polskich znaków.
- Zmiany merytoryczne (fakty, liczby, twierdzenia) wymagają linku do źródła - to zabezpieczenie przeciw halucynacjom. Pisząc o świecie zewnętrznym (ceny, wersje modeli, regulaminy) zweryfikuj u źródła zamiast polegać na wiedzy modelu.

## Stan projektu

`TODO.md` jest aktualną listą otwartych zadań i decyzji właściciela (Cloudflare Pages, analityka, cutover DNS, JSON-LD, Mermaid, formularz kontaktowy, newsletter, dwa interaktywne widgety pominięte przy migracji). Przeczytaj go przed proponowaniem nowej funkcjonalności - część rzeczy jest świadomie odłożona.

**Uwaga:** `TODO.md` i katalog `docs/` są w `.gitignore` - istnieją tylko lokalnie u właściciela i nie ma ich w publicznym repo. Jeśli pracujesz z klona, po prostu ich nie zobaczysz.

## Dokumentacja

Pełna dokumentacja: <https://docs.astro.build>

- [Trasy, strony, middleware](https://docs.astro.build/en/guides/routing/)
- [Komponenty Astro](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Style i Tailwind](https://docs.astro.build/en/guides/styling/)
- [Starlight](https://starlight.astro.build/)

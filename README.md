# Przewodnik AI 🇵🇱

Otwarta, społecznościowa baza wiedzy o sztucznej inteligencji po polsku - **[przewodnikai.pl](https://przewodnikai.pl)**. Kurs AI od podstaw: bez żargonu, bez logowania, za darmo.

Serwis działa jako "żywe wiki": treść w Markdownie, zmiany przez pull requesty, publikacja automatyczna. Zbudowany na [Astro Starlight](https://starlight.astro.build/), hostowany na Cloudflare Workers (static assets).

## Współtworzenie

Każdą stronę może poprawić każdy - kliknij **"Edytuj stronę"** na dole artykułu albo przeczytaj [CONTRIBUTING.md](./CONTRIBUTING.md). Treść jest na licencji [CC BY-SA 4.0](./LICENSE-CONTENT), kod na [MIT](./LICENSE).

## Development

```bash
npm install
npm run dev      # serwer deweloperski na localhost:4321
npm run build    # build produkcyjny do ./dist/
npm run preview  # podgląd builda
```

## Struktura

```text
src/content/docs/        # cała treść (Markdown/MDX); folder = sekcja menu
├── podstawy/
├── jak-dziala-ai/
├── prompt-engineering/
├── narzedzia/
├── praktyka/
├── etyka/
└── zasoby/
src/assets/<sekcja>/<artykuł>/   # obrazy artykułów
public/media/                     # pliki wideo/animacje
public/_redirects                 # mapa 301 ze starych URL-i (Cloudflare Workers)
src/components/Video.astro        # animacje WebM/MP4 (zamiennik GIF-ów)
```

Frontmatter artykułów zawiera oprócz `title`/`description` opcjonalne pola GEO/AEO (`educationalLevel`, `teaches`, `about`, `mentions`, `faq`) - przenoszone ze starego serwisu; schemat: [src/content.config.ts](./src/content.config.ts).

## Status wdrożenia (plan z raportu przebudowy)

- [x] Etap 0: szkielet Starlight, polska lokalizacja (root locale), Pagefind z polskim stemmingiem, sitemap, `robots.txt`, `llms.txt` (plugin), mapa przekierowań 301
- [x] Etap 2: migracja całej treści - 45 lekcji + 6 stron `zasoby/` (7 sekcji), `npm run build` bez błędów, linki wewnętrzne zweryfikowane (2026-07-07)
- [x] Etap 0: podpięcie repozytorium do GitHuba ([lukaszpodgorski-pl/przewodnikai](https://github.com/lukaszpodgorski-pl/przewodnikai))
- [x] Etap 0: wdrożenie na Cloudflare Workers (static assets, `wrangler.jsonc`), automatyczny build z `main`
- [ ] Etap 0: analityka (Cloudflare Web Analytics - bez banera cookies)
- [ ] Etap 1: cutover domeny przewodnikai.pl ze starego hostingu PHP na Workera, branch protection/Rulesets, etykiety issue
- [ ] Etap 2 (dalsza część): generowanie JSON-LD z pól GEO frontmattera, wsparcie Mermaid, decyzja co do wersji audio (mp3) i formularza kontaktowego, komponenty Astro dla 2 pominiętych interaktywnych widgetów

Bieżące zadania i propozycje: [Issues](https://github.com/lukaszpodgorski-pl/przewodnikai/issues).

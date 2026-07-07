# TODO — do zrobienia po migracji treści (Etap 2 ukończony 2026-07-07)

Migracja całej treści (45 lekcji + 6 stron `zasoby/`, 7 sekcji) z PHP na Astro Starlight jest **ukończona**. `npm run build` przechodzi bez błędów (47 stron), wszystkie linki wewnętrzne zweryfikowane. Poniżej zostały tylko zadania wymagające decyzji lub pracy poza samą treścią.

## Pilne / blokujące uruchomienie produkcyjne (Etap 0-1)

- [x] **Repo GitHub** — [lukaszpodgorski-pl/przewodnikai](https://github.com/lukaszpodgorski-pl/przewodnikai) utworzone, placeholdery podmienione
- [ ] **Cloudflare Pages** — projekt (build: `npm run build`, output: `dist`), preview deployments dla PR
- [ ] **Analityka** — Cloudflare Web Analytics (bez banera cookies)
- [ ] **Branch protection / Rulesets** na GitHubie, etykiety issue
- [ ] **Cutover DNS** domeny przewodnikai.pl na nowy serwis — dopiero po zaakceptowaniu całej migracji treści

## Interaktywność pominięta przy migracji treści

Dwa artykuły miały w starym serwisie interaktywne widgety (JS/CSS), które przy konwersji na Markdown zostały zastąpione statyczną treścią (blok kodu / tabela) — cała merytoryka jest zachowana, ale efekt wizualny wymaga odtworzenia jako prawdziwy komponent Astro:

- [ ] `jak-dziala-ai/tokeny-i-kontekst.md` — animacja generowania tokenów (był JS z animowanym „pisaniem" tokenów)
- [ ] `jak-dziala-ai/mapa-ai.md` — siatka kart „AI Landscape" (był CSS grid z ikonami, teraz zwykła tabela Markdown)

## Decyzje do podjęcia (właściciel: Łukasz)

- [ ] **Formularz kontaktowy** — stary serwis miał formularz PHP wysyłający maile. Statyczny Astro tego nie ma; `zasoby/kontakt.md` obecnie pokazuje tylko statyczne dane kontaktowe (e-mail, telefon, adres). Trzeba wybrać mechanizm: Cloudflare Pages Forms / Netlify Forms / Formspree / inny, i go wdrożyć.
- [ ] **Newsletter** — `zasoby/regulamin.md` opisuje usługę newslettera, ale nowy statyczny serwis nie ma mechanizmu zapisu (brak ESP: Mailchimp/Buttondown/inny). Zdecydować, czy newsletter wraca, i jeśli tak — jakim narzędziem.
- [ ] **Wersja audio (mp3)** artykułów — wspomniana w oryginalnym planie przebudowy jako otwarta decyzja, jeszcze nie podjęta.

## Wzbogacenie treści (Etap 2, dalsza część)

- [ ] **JSON-LD** — generowanie danych strukturalnych (schema.org) z pól GEO frontmattera (`educationalLevel`, `teaches`, `about`, `mentions`, `faq`) zdefiniowanych w `src/content.config.ts`. Obecnie pola istnieją w każdym artykule, ale nic jeszcze nie renderuje z nich `<script type="application/ld+json">`.
- [ ] **Wsparcie Mermaid** — diagramy w Markdownie (żaden z migrowanych 45 artykułów jeszcze z tego nie korzysta, ale było w pierwotnym planie).

## Do sprawdzenia ręcznie / QA

- [ ] Przejrzeć wizualnie wszystkie 47 stron w `npm run dev` — sprawdzić czy tabele, callouty i bloki kodu renderują się poprawnie (nigdy nie było lokalnego podglądu całości po migracji)
- [ ] Zweryfikować numer telefonu i e-mail na `zasoby/kontakt.md` / `zasoby/regulamin.md` (odzyskane z zaciemnionego base64 w starym `custom.js`, e-mail ujednolicony na `kontakt@przewodnikai.pl` — potwierdzone przez użytkownika 2026-07-07)
- [ ] Sprawdzić, czy licencja CC BY-SA 4.0 (wspomniana w README) rzeczywiście pasuje do treści przeniesionej 1:1 ze starego serwisu (prawa autorskie należą do Łukasza, więc formalność, ale warto zaznaczyć)

## Nawigacja / kolejność w sidebarze

Cały łańcuch „Następny krok" w treści artykułów prowadzi w kolejności: `podstawy` → `jak-dziala-ai` → `prompt-engineering` → `narzedzia` → `praktyka` → `etyka` → `zasoby`. Kolejność w `sidebar.order` każdego pliku odzwierciedla tę ścieżkę — nie zmieniaj jej bez aktualizacji linków „Następny krok" w sąsiednich plikach.

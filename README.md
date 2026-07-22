# Przewodnik AI 🇵🇱

**[przewodnikai.pl](https://przewodnikai.pl)** - otwarta baza wiedzy o sztucznej inteligencji po polsku. Bez żargonu, bez logowania, za darmo.

Dziś problemem nie jest zdobycie wiedzy o AI, tylko jej **przefiltrowanie**. Materiałów są tysiące, a spora część opakowana jest w strach: "pociąg odjeżdża", "wyścig trwa", "zostaniesz w tyle". Ten przewodnik jest odwrotnością tego podejścia. Uczy tego, co realnie przydatne, i daje solidną bazę: kiedy model może zmyślać, dlaczego nie warto ciągnąć jednej rozmowy w nieskończoność, jak nie przepalać tokenów bez potrzeby.

Nie ma tu jednej "jedynie słusznej" drogi. Jest **9 ścieżek nauki** dla różnych osób - ucznia, rodzica, nauczyciela, seniora, managera, właściciela firmy - żeby nikt nie odbił się od nadmiaru informacji na starcie.

---

## Dla czytelników

Nie musisz nic instalować ani zakładać konta. Wejdź na [przewodnikai.pl](https://przewodnikai.pl) i zacznij.

| Chcesz… | Zacznij tutaj |
| --- | --- |
| Zrozumieć, o co w tym wszystkim chodzi | [Czym jest AI?](https://przewodnikai.pl/podstawy/czym-jest-ai/) |
| Dostać gotowy plan dopasowany do siebie | [Ścieżki nauki](https://przewodnikai.pl/sciezki/) |
| Nauczyć się rozmawiać z AI skutecznie | [Prompt Engineering](https://przewodnikai.pl/prompt-engineering/podstawy/) |
| Sprawdzić konkretne narzędzie | [Narzędzia AI](https://przewodnikai.pl/narzedzia/chatboty/) |
| Wiedzieć, gdzie są granice i zagrożenia | [Etyka i bezpieczeństwo](https://przewodnikai.pl/etyka/etyczne-aspekty/) |

Materiał to **44 artykuły w 7 sekcjach**, ułożone w kolejności: podstawy → jak działa AI → prompt engineering → narzędzia → praktyka → etyka → zasoby. Każdy artykuł kończy się linkiem "Następny krok", więc można iść po kolei albo wskakiwać w środek.

Nie ma tu logowania, kont ani ciasteczek śledzących - i dlatego nie zobaczysz banera zgody. Więcej: [Czy Przewodnik AI zbiera dane o mnie?](https://przewodnikai.pl/zasoby/faq/)

## Jak to działa

Przewodnik jest **żywym wiki**. Cała treść to zwykłe pliki tekstowe (Markdown) w tym repozytorium. Każda zmiana przechodzi przez pull request i recenzję, a po zaakceptowaniu publikuje się automatycznie.

```text
edytujesz plik  →  pull request  →  recenzja  →  merge  →  na stronie
```

To znaczy, że historia każdego zdania jest jawna. Widać, kto co zmienił, kiedy i dlaczego - tak jak w Wikipedii, tylko w wersji dla AI i po polsku.

## Dla współtwórców

**Nie musisz być programistą.** Wystarczy konto na GitHubie i chęć podzielenia się tym, co wiesz.

### Dlaczego warto

Szczerze: **najwięcej zyskuje ten, kto pisze.** Żeby wytłumaczyć coś prostym językiem, trzeba to najpierw naprawdę zrozumieć - a to najlepszy sposób nauki, jaki znam. Przy okazji:

- Twój tekst czyta ktoś, kto właśnie zaczyna i utknął. To realny wpływ, nie punkty w rankingu.
- Wkład jest podpisany i publiczny - historia commitów zostaje z Tobą.
- Projekt jest otwarty (CC BY-SA 4.0), więc nikt nie zamknie tego, co współtworzysz.

### Kogo szukamy

- osób, które **lubią pisać** i potrafią przekazać myśl jasno
- osób z wiedzą o AI **na dowolnym poziomie** - praktycy mile widziani, doświadczenie z użytkowania bywa cenniejsze od teorii
- osób, które mają ochotę **pomagać innym w nauce**

### Jak zacząć - najprostsza droga

1. Znajdź na stronie coś, co da się poprawić - literówkę, niejasny akapit, nieaktualną informację.
2. Kliknij **"Edytuj stronę"** na dole artykułu. GitHub sam zaproponuje utworzenie kopii projektu.
3. Popraw tekst i kliknij **"Propose changes"** → **"Create pull request"**.
4. Napiszę Ci komentarz. Jeśli coś wymaga dopracowania, dostaniesz życzliwą podpowiedź, nie odrzucenie.

Nie czujesz się na siłach edytować? [Zgłoś issue](https://github.com/lukaszpodgorski-pl/przewodnikai/issues/new/choose) - są gotowe szablony na błąd, propozycję treści i nieaktualną informację.

Pełna instrukcja: **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

## Zasady

Cztery rzeczy, które decydują o przyjęciu zmiany:

1. **Piszemy dla laika.** Ciepło, bezpośrednio (per "Ty"), bez żargonu. Termin angielski podajemy w nawiasie przy pierwszym użyciu. Grupa docelowa to osoby nietechniczne - jeśli Twoja babcia by tego nie zrozumiała, upraszczamy.
2. **Źródło jest obowiązkowe** przy każdej zmianie merytorycznej - nowym fakcie, liczbie, twierdzeniu. To nasza tarcza przeciw halucynacjom i dezinformacji. Bez linku do źródła zmiana nie wejdzie.
3. **Neutralność.** Opisujemy narzędzia rzetelnie, z wadami i zaletami. Bez kryptoreklamy i bez linków afiliacyjnych.
4. **Po polsku.** Treść piszemy po polsku, także dla terminów, które mają dobre polskie odpowiedniki.

Do tego kilka konwencji technicznych (nazwy plików, formaty obrazów, obowiązkowy tekst alternatywny, zakaz GIF-ów) - wszystkie opisane w [CONTRIBUTING.md](./CONTRIBUTING.md) i sprawdzane automatycznie przy pull requeście.

## AI w tworzeniu tego przewodnika

**Duża część tej treści powstała przy wsparciu narzędzi AI** - i mówimy o tym wprost, bo trudno uczyć transparentności, samemu ją pomijając. Jeden z rozdziałów tego przewodnika radzi: "bądź transparentny o użyciu AI". To dotyczy też nas.

Jak to wygląda w praktyce: AI pomaga w szkicach, przeformułowaniach, porządkowaniu struktury i wyłapywaniu luk. **Nie zastępuje weryfikacji.** Każdy fakt, liczba i twierdzenie przechodzą przez sprawdzenie u źródła i przez człowieka, zanim trafią na stronę - właśnie dlatego zasada o obowiązkowych źródłach jest tak sztywna. Model potrafi napisać rzecz brzmiącą świetnie i całkowicie nieprawdziwą; cały ten przewodnik ma [osobny rozdział](https://przewodnikai.pl/podstawy/weryfikacja-informacji/) o tym, jak takie rzeczy rozpoznawać.

Jeśli korzystasz z AI przy swoim wkładzie - w porządku, my też. Odpowiadasz za to, co wysyłasz, tak samo jakbyś napisał to od zera.

## Kto za tym stoi

Projekt prowadzi **Łukasz Podgórski** - konsultant AI i trener, ponad 15 lat w IT, w tym ponad 5 lat pracy ze sztuczną inteligencją. Dzieli się wiedzą o AI na [kanale YouTube](https://www.youtube.com/@lukaszpodgorski) (ponad 1300 osób) i prowadzi klub zainteresowanych sztuczną inteligencją zrzeszający blisko 1000 osób.

Przewodnik zaczął powstawać jako projekt jednoosobowy. Otworzył się, bo w pojedynkę wychodzi wolniej i węziej - a temat zmienia się za szybko, żeby nadążył za nim jeden człowiek.

Więcej: [O mnie](https://przewodnikai.pl/zasoby/o-mnie/) · [Kontakt](https://przewodnikai.pl/zasoby/kontakt/)

---

## Dla programistów

Serwis to statyczna strona zbudowana na [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/), hostowana na Cloudflare Workers.

```bash
npm install
npm run dev        # serwer deweloperski na localhost:4321
npm run build      # build produkcyjny do ./dist/ - to jest nasz "test suite"
npm run preview    # podgląd builda
npm run verify:geo # 20 asercji na zbudowanym dist/ (dane strukturalne, OG, sitemapa)
```

Nie ma frameworka testowego. `npm run build` jest pełnym sprawdzeniem - wykrywa złamane linki wewnętrzne, błędy frontmattera (schemat Zod) i błędy MDX.

### Struktura

```text
src/content/docs/            # cała treść; folder = sekcja w menu bocznym
├── podstawy/  jak-dziala-ai/  prompt-engineering/  narzedzia/
├── praktyka/  etyka/  zasoby/
└── sciezki/                 # ścieżki nauki (celowo poza menu bocznym)
src/assets/<sekcja>/<artykuł>/   # obrazy artykułów (Astro optymalizuje do WebP/AVIF)
public/media/                    # wideo i animacje (serwowane 1:1)
src/components/                  # Video, Faq, Head, MarkdownContent, Footer
src/lib/structured-data.ts       # generowanie JSON-LD z frontmattera
scripts/verify-geo.mjs           # harness weryfikacyjny
```

### Warto wiedzieć przed pierwszym PR-em

- **`trailingSlash: 'always'`** - każdy link wewnętrzny kończy się ukośnikiem.
- **`public/_redirects`** ma pierwszeństwo przed plikami statycznymi. Nie twórz stron pod `/podstawy/`, `/prompt-engineering/` ani `/etyka/` - przesłonią je przekierowania starych artykułów.
- **Nowy folder najwyższego poziomu nie pojawi się w menu**, dopóki nie dopiszesz sekcji do [`src/config/sections.ts`](./src/config/sections.ts).
- Pola GEO we frontmatterze (`educationalLevel`, `teaches`, `about`, `mentions`, `faq`) zasilają dane strukturalne schema.org. Schemat: [`src/content.config.ts`](./src/content.config.ts).

Szczegóły architektury i pułapki: [AGENTS.md](./AGENTS.md).

## Licencje

- **Treść** - [CC BY-SA 4.0](./LICENSE-CONTENT): możesz kopiować i przerabiać, podając autora i zachowując tę samą licencję.
- **Kod** - [MIT](./LICENSE).
- Font Noto Sans (generowanie obrazów OG) - [OFL-1.1](./src/pages/og/_fonts/OFL.txt).

Wysyłając pull request zgadzasz się na publikację swojego wkładu na tych licencjach.

---

Bieżące zadania i propozycje: [Issues](https://github.com/lukaszpodgorski-pl/przewodnikai/issues) · Masz pytanie albo pomysł? [Napisz](https://przewodnikai.pl/zasoby/kontakt/).

# 🤝 Jak współtworzyć Przewodnik AI

Dziękujemy, że chcesz pomóc! Przewodnik AI to **żywe wiki** - każda strona może być poprawiona przez każdego. Nie musisz być programistą: wystarczy konto na GitHubie i chęć podzielenia się wiedzą.

## Najszybsza ścieżka: przycisk "Edytuj stronę"

1. Na dole każdego artykułu na [przewodnikai.pl](https://przewodnikai.pl) kliknij **"Edytuj stronę"**.
2. GitHub otworzy edytor tekstu. Przy pierwszej edycji zaproponuje utworzenie kopii projektu (fork) - kliknij **"Fork this repository"**.
3. Wprowadź poprawki (treść jest w formacie Markdown - zwykły tekst z prostymi znacznikami).
4. Na dole kliknij **"Propose changes"**, a następnie **"Create pull request"**.
5. Gotowe! Twoja propozycja trafi do recenzji.

Pod pull requestem zobaczysz automatyczne kontrole (formatowanie Markdown, linki, rozmiary mediów, poprawność zbudowanej strony). Nie ma natomiast podglądu na żywo - serwis buduje się wyłącznie z gałęzi `main`, więc zmiany zobaczysz po scaleniu. Jeśli chcesz obejrzeć je wcześniej u siebie, wystarczy `npm install` i `npm run dev`.

Drobne literówki i błędy możesz zgłaszać od razu jako pull request - bez zakładania issue.

## Zgłaszanie problemów (Issues)

Nie czujesz się na siłach, by edytować samodzielnie? Załóż [issue](https://github.com/lukaszpodgorski-pl/przewodnikai/issues/new/choose) - mamy gotowe szablony:

- **Błąd lub literówka** - coś jest nie tak na istniejącej stronie
- **Propozycja treści** - pomysł na nowy artykuł lub sekcję
- **Aktualizacja** - informacja się zdezaktualizowała (w AI to norma!)

## Zasady treści

1. **Ton dla laika.** Piszemy ciepło, bezpośrednio (per "Ty"), bez żargonu. Metafory i przykłady z życia są mile widziane. Grupa docelowa: osoby nietechniczne.
2. **Źródła są obowiązkowe** przy zmianach merytorycznych (nowe fakty, liczby, twierdzenia). Dodaj link do wiarygodnego źródła w sekcji "Źródła i dalsze lektury" lub w opisie PR. To nasza tarcza przeciw halucynacjom i dezinformacji.
3. **Neutralność.** Opisujemy narzędzia i zjawiska rzetelnie - bez kryptoreklamy i linków afiliacyjnych.
4. **Język polski.** Treść piszemy po polsku; terminy angielskie podajemy w nawiasie przy pierwszym użyciu.

## Konwencje techniczne

- **Nazwy plików:** małe litery, myślniki, bez polskich znaków (`weryfikacja-informacji.md`).
- **Struktura:** artykuły leżą w `src/content/docs/<sekcja>/` - folder = sekcja w menu bocznym.
- **Frontmatter:** minimum `title` i `description`; opcjonalnie `sidebar.order` oraz pola GEO (`teaches`, `about`, `faq` - zobacz istniejące artykuły).
- **Wyróżnienia:** używaj bloków `:::tip`, `:::note`, `:::caution`, `:::danger` (asides Starlight) zamiast własnego HTML.

## Proces recenzji

- Każdy pull request wymaga akceptacji recenzenta (code ownera) przed scaleniem - wymusza to ochrona gałęzi `main`, nie tylko dobra wola.
- CI automatycznie sprawdza formatowanie Markdown, działanie linków zewnętrznych, rozmiary mediów oraz to, czy strona buduje się poprawnie razem z danymi strukturalnymi (`npm run verify:geo`). Zielony wynik tej ostatniej kontroli jest wymagany do scalenia.
- Mergujemy pierwszy poprawny PR. Jeśli poprawki są potrzebne, dostaniesz życzliwy komentarz - nie zniechęcaj się!

## Licencja wkładu

Wysyłając pull request oświadczasz, że Twój wkład jest Twojego autorstwa (lub masz prawo go udostępnić) i zgadzasz się na jego publikację na licencji **[CC BY-SA 4.0](./LICENSE-CONTENT)** (treść) lub **[MIT](./LICENSE)** (kod).

---

## 🖼️ Grafiki, animacje i wideo - zasady dodawania mediów

> Ta sekcja dotyczy wszystkich pull requestów, które dodają lub zmieniają pliki multimedialne.

## Gdzie trafiają pliki

Obrazy mają własny folder na media, nazwany tak samo jak plik artykułu; wideo trafia do `public/media/`:

```text
src/
├── content/docs/podstawy/czym-jest-llm.mdx
└── assets/podstawy/czym-jest-llm/        ← obrazy (Astro je optymalizuje)
    ├── schemat-tokenizacji.svg
    └── porownanie-modeli.png
public/
└── media/podstawy/czym-jest-llm/          ← wideo/animacje (serwowane 1:1)
    ├── demo-promptowania.webm
    └── demo-promptowania.mp4
```

Nazwy plików: **małe litery, bez polskich znaków, myślniki zamiast spacji** (`schemat-tokenizacji.svg`, nie `Schemat Tokenizacji.SVG`).

## Jaki format wybrać?

| Chcesz dodać… | Użyj | Nie używaj |
| --- | --- | --- |
| Zrzut ekranu, zdjęcie | PNG lub JPG (Astro sam zoptymalizuje do WebP/AVIF) | BMP, TIFF |
| Diagram, schemat, ikonę | **SVG** | PNG z tekstem (nieczytelny przy zoomie) |
| Krótką animację (do ~30 s) | **WebM** + opcjonalnie MP4 jako fallback | **GIF** ❌ |
| Dłuższe wideo, tutorial | Embed z YouTube | Plik wideo w repo |

**Dlaczego nie GIF?** GIF-y są 5-10× większe niż WebM przy gorszej jakości i spowalniają stronę na telefonach. Jeśli masz animację jako GIF, przekonwertuj ją (patrz niżej).

**Diagramy:** docelowo planujemy wsparcie bloków ` ```mermaid ` (diagramy edytowalne tekstowo w PR - idealne dla wiki); dopóki nie zostanie włączone, dodawaj diagramy jako SVG.

## Limity rozmiaru (sprawdzane automatycznie w CI)

- Obrazy: **maks. 1 MB** na plik
- Wideo/animacje: **maks. 5 MB** na plik
- Większe wideo → wrzuć na YouTube i osadź, albo napisz w PR - wgramy je na CDN projektu

## Jak osadzić w artykule

**Obraz** (zwykły Markdown - Astro zoptymalizuje go przy buildzie):

```md
![Schemat działania transformera - dane wejściowe przechodzą przez warstwy uwagi](../../../assets/podstawy/czym-jest-llm/schemat-transformera.png)
```

**Animacja** (komponent `<Video />` zamiast GIF-a):

```mdx
import Video from '../../../components/Video.astro';

<Video
  src="/media/podstawy/czym-jest-llm/demo-promptowania.webm"
  fallback="/media/podstawy/czym-jest-llm/demo-promptowania.mp4"
  alt="Nagranie ekranu: wpisywanie promptu i odpowiedź modelu pojawiająca się słowo po słowie"
  caption="Tak wygląda strumieniowanie odpowiedzi w praktyce"
/>
```

## Tekst alternatywny (alt) - obowiązkowy ✅

Każdy obraz i animacja **musi** mieć opis alternatywny. To warunek zaakceptowania PR.

- ✅ Dobry alt: `Wykres słupkowy porównujący koszt 1 mln tokenów w pięciu modelach - najtańszy jest model X`
- ❌ Zły alt: `wykres`, `obrazek1`, pusty alt

Alt opisuje **co widać i co z tego wynika** - tak, żeby osoba korzystająca z czytnika ekranu nie straciła żadnej informacji.

## Konwersja GIF → WebM/MP4

Masz gotowego GIF-a albo animację nagraną z ekranu? Jedna komenda z [ffmpeg](https://ffmpeg.org/):

```bash
# GIF → WebM (główny format)
ffmpeg -i animacja.gif -c:v libvpx-vp9 -b:v 0 -crf 40 -an animacja.webm

# GIF → MP4 (fallback dla starszych przeglądarek)
ffmpeg -i animacja.gif -movflags faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an animacja.mp4
```

Nie masz ffmpeg? Nie szkodzi - dodaj GIF-a do PR i napisz o tym w opisie, a maintainerzy przekonwertują plik przed merge'em.

## Animacje CSS/JS

Jeśli chcesz dodać animację interaktywną (CSS/JS), **nie renderuj jej do wideo** - zgłoś się w Issues z etykietą `komponent`. Pomożemy przenieść ją do komponentu Astro, dzięki czemu pozostanie ostra, lekka i edytowalna przez społeczność.

## Prawa autorskie do mediów 📜

Dodając plik, oświadczasz, że:

1. jest Twojego autorstwa, **lub**
2. pochodzi ze źródła na wolnej licencji (CC0, CC BY, CC BY-SA) - wtedy podaj źródło i licencję w opisie PR lub w podpisie pod grafiką.

Zrzuty ekranu z narzędzi AI (ChatGPT, Claude, Midjourney itd.) są OK w celach edukacyjnych - zadbaj tylko, by nie zawierały danych osobowych (zamaż adresy e-mail, nazwiska, avatary).

Wszystkie media w repozytorium są publikowane na licencji projektu (CC BY-SA 4.0), chyba że podpis wskazuje inaczej.

## Checklist przed wysłaniem PR z mediami

- [ ] Obraz w `src/assets/<sekcja>/<artykul>/`, wideo w `public/media/<sekcja>/<artykul>/`
- [ ] Nazwa: małe litery, myślniki, bez polskich znaków
- [ ] Format zgodny z tabelą (SVG/PNG/JPG/WebM - nie GIF)
- [ ] Rozmiar w limicie (obraz ≤ 1 MB, wideo ≤ 5 MB)
- [ ] Każdy obraz/animacja ma sensowny `alt`
- [ ] Źródło i licencja podane (jeśli materiał nie jest Twój)

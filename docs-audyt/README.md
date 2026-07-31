# docs-audyt

Narzędzia i metoda cyklicznego audytu merytorycznego treści przewodnikai.pl.

| Plik | Rola |
| --- | --- |
| [`procedura.md`](procedura.md) | metoda audytu - rubryka, fazy, zasady weryfikacji |
| [`skanuj.mjs`](skanuj.mjs) | skaner grafu linków i kontroli mechanicznych |

## Uruchomienie

```powershell
node docs-audyt/skanuj.mjs
```

Zapisuje `TODO_AUDYT_INT.md` w katalogu głównym (plik jest w `.gitignore` - to raport roboczy, nie treść serwisu) i wypisuje podsumowanie. Opcje:

| Opcja | Działanie |
| --- | --- |
| `--json <plik>` | dodatkowo pełne dane skanu jako JSON |
| `--tylko-json` | sam JSON na stdout, bez zapisu raportu |

Pełny audyt (skan + subagenty) uruchamia procedura z [`procedura.md`](procedura.md); lokalnie skrótem `/audyt` w Claude Code.

## Dlaczego to nie jest w CI

Skaner nie jest bramką - nie zwraca kodu błędu i nie blokuje builda. Powód: większość jego ustaleń wymaga ludzkiego rozstrzygnięcia (czy kwota to cennik, czy liczba ilustracyjna; czy sierota to usterka, czy strona pomocnicza). Bramka, która świeci na czerwono przy rzeczach do przemyślenia, zostaje wyciszona i przestaje cokolwiek chronić.

Warstwę, którą da się rozstrzygnąć maszynowo, pokrywają istniejące workflow: `links.yml`, `lint.yml`, `verify-geo.yml`, `media.yml`.

## Dziennik przebiegów

| Data | Zakres | P1 | P2 | P3 | Uwagi |
| --- | --- | ---: | ---: | ---: | --- |
| 2026-07-31 | pełny (80 stron, 24 jednostki) | 14 | 116 | 92 | pierwszy przebieg. 23 sprzeczności międzyartykułowe. Weryfikacja adwersaryjna odrzuciła 13 ustaleń. Zero martwych linków wewnętrznych - higiena po audycie linków (#36) się trzyma. Najcięższe: wycofany tryb agenta ChatGPT, "Claude nie przeszukuje internetu" wbrew własnej treści serwisu, fabryka AI Gaia opisana jako działająca, błędna atrybucja cytatu IBM zamiast Karima Lakhaniego. |

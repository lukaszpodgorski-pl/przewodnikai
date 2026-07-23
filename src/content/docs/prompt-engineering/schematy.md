---
title: Strukturyzacja Danych w Promptach - Formaty i Schematy
description: Naucz się strukturyzować dane w promptach. Poznaj formaty JSON, tabele, listy i schematy, które pomogą AI lepiej zrozumieć Twoje zadania.
sidebar:
  label: 'Strukturyzacja danych'
  order: 5
educationalLevel: Intermediate
teaches:
  - Strukturyzacja danych w promptach
  - Formaty danych dla AI
  - Tabelaryczne i listowe formatowanie promptów
about:
  - name: Prompt engineering
    sameAs: https://en.wikipedia.org/wiki/Prompt_engineering
---

![Nawiasy i bloki schematu porządkują luźne słowa w uporządkowane pola - struktura danych w promptach](../../../assets/prompt-engineering/schematy/schematy.jpg)

## Dlaczego struktura ma znaczenie?

Modele językowe rozumieją nie tylko treść, ale również format. Dobrze ustrukturyzowane dane pomagają AI lepiej zrozumieć zadanie i generować spójne, przewidywalne odpowiedzi. W tym rozdziale pokażę Ci formaty, którymi opiszesz zadanie precyzyjniej niż zwykłym zdaniem, oraz frameworki, których profesjonaliści używają do pisania skutecznych promptów.

## Frameworki do promptów

W rozdziale [Podstawy promptowania](/prompt-engineering/podstawy/) przedstawiłem framework **CO-STAR** (Context, Objective, Style, Tone, Audience, Response) - standard biznesowy do tworzenia skutecznych promptów. Tutaj dokładam do niego drugi framework, przydatny w zadaniach technicznych.

## Framework CRISPE - dla zadań technicznych

Dla zadań wymagających precyzji technicznej - generowania kodu, instrukcji, procedur operacyjnych - lepszym wyborem jest framework **CRISPE**:

| Element | Opis | Przykład |
| --- | --- | --- |
| **C** - Capacity | Rola AI - kim ma być? | "Działaj jako Senior Python Developer z 10-letnim doświadczeniem." |
| **R** - Role | Doprecyzowanie roli i celu | "Twój wgląd ma pomóc juniorom w zespole zrozumieć błąd." |
| **I** - Input | Dane wejściowe do analizy | "Oto fragment kodu / logi z serwera: [dane]" |
| **S** - Steps | Kroki do wykonania | "Przeanalizuj kod linijka po linijce, znajdź lukę, zaproponuj poprawkę." |
| **P** - Parameters | Ograniczenia i wymagania | "Kod zgodny z PEP8, wyjaśnienie po polsku, max 200 słów." |
| **E** - Example | Wzór do naśladowania | "Wzoruj się na stylu dokumentacji biblioteki Django." |

### Przykład CRISPE w praktyce

```text
CAPACITY: Działaj jako ekspert ds. cyberbezpieczeństwa
z certyfikatem CISSP.

ROLE: Twój audyt pomoże zespołowi developerów zrozumieć
zagrożenia i wdrożyć poprawki.

INPUT: Oto fragment kodu PHP obsługującego logowanie użytkowników:
  $username = $_POST['username'];
  $password = $_POST['password'];
  $query = "SELECT * FROM users WHERE username='$username'
  AND password='$password'";

STEPS:
1. Zidentyfikuj wszystkie luki bezpieczeństwa
2. Wyjaśnij, jak atakujący mógłby je wykorzystać
3. Podaj poprawiony kod z komentarzami
4. Zasugeruj dodatkowe zabezpieczenia

PARAMETERS:
- Wyjaśnienia po polsku
- Kod zgodny z najlepszymi praktykami PHP 8
- Uwzględnij OWASP Top 10

EXAMPLE: Formatuj odpowiedź jak raport audytu bezpieczeństwa
z sekcjami: Znalezione luki, Ryzyko, Rekomendacje, Kod naprawczy.
```

## Kiedy używać którego frameworka?

| Zadanie | Rekomendowany framework | Dlaczego? |
| --- | --- | --- |
| E-maile biznesowe | **CO-STAR** | Ton i styl są kluczowe |
| Posty na social media | **CO-STAR** | Ważna jest persona i odbiorcy |
| Raporty i analizy | **CO-STAR** | Format i struktura priorytetem |
| Generowanie kodu | **CRISPE** | Precyzja i kroki są kluczowe |
| Audyty techniczne | **CRISPE** | Potrzebna metodyczna analiza |
| Dokumentacja techniczna | **CRISPE** | Ważne parametry i przykłady |

:::note[Wskazówka praktyczna]
Nie musisz zawsze używać wszystkich elementów frameworka. Traktuj je jako checklistę - im więcej kontekstu podasz, tym lepszy wynik otrzymasz. Dla prostych zadań wystarczą 2-3 elementy, dla złożonych używaj wszystkich.
:::

## Format JSON

**JSON** (JavaScript Object Notation) to uniwersalny format wymiany danych, który modele AI doskonale rozumieją. Jest idealny gdy potrzebujesz strukturalnych, programowalnych odpowiedzi.

### Definiowanie schematu wyjściowego

```text
Wyodrębnij informacje o osobie z poniższego tekstu.
Zwróć odpowiedź w formacie JSON.

Tekst: "Jan Kowalski, lat 35, mieszka w Warszawie
i pracuje jako programista w firmie TechCorp."

Schemat JSON:
{
  "imie": string,
  "nazwisko": string,
  "wiek": number,
  "miasto": string,
  "zawod": string,
  "firma": string
}

JSON:
```

**Odpowiedź:**

```json
{
  "imie": "Jan",
  "nazwisko": "Kowalski",
  "wiek": 35,
  "miasto": "Warszawa",
  "zawod": "programista",
  "firma": "TechCorp"
}
```

### Zagnieżdżone struktury

```text
Przeanalizuj zamówienie i zwróć strukturę JSON.

Zamówienie: "Klient: Anna Nowak (anna@email.com).
Produkty: 2x Laptop Dell (3500 zł/szt), 1x Mysz (120 zł).
Dostawa ekspresowa do Krakowa."

Schemat:
{
  "klient": {
    "imie": string,
    "email": string
  },
  "produkty": [
    {
      "nazwa": string,
      "ilosc": number,
      "cena_jednostkowa": number
    }
  ],
  "dostawa": {
    "typ": string,
    "miasto": string
  },
  "suma": number
}

JSON:
```

:::note[Wskazówka]
Wiele modeli AI ma wbudowaną opcję "JSON mode", która gwarantuje poprawny format wyjściowy. W ChatGPT możesz to włączyć w ustawieniach API.
:::

## Format tabelaryczny

Tabele są intuicyjne i czytelne zarówno dla ludzi, jak i AI. Świetnie sprawdzają się do porównań, list i danych wielowymiarowych.

```text
Porównaj trzy popularne frameworki JavaScript.
Przedstaw wynik w tabeli Markdown z kolumnami:
Nazwa, Twórca, Rok wydania, Główne zastosowanie, Popularność (1-5).

Tabela:
```

**Odpowiedź:**

| Nazwa | Twórca | Rok | Główne zastosowanie | Popularność |
| --- | --- | --- | --- | --- |
| React | Facebook | 2013 | Interfejsy użytkownika | 5 |
| Vue | Evan You | 2014 | Aplikacje SPA | 4 |
| Angular | Google | 2016 | Aplikacje enterprise | 4 |

Możesz również podawać dane wejściowe jako tabelę:

```text
Przeanalizuj poniższe dane sprzedażowe i podaj wnioski.

| Produkt   | Q1    | Q2    | Q3    | Q4    |
|-----------|-------|-------|-------|-------|
| Laptopy   | 150   | 180   | 160   | 220   |
| Telefony  | 300   | 280   | 320   | 400   |
| Tablety   | 80    | 90    | 70    | 110   |

Pytania:
1. Który produkt miał największy wzrost Q4 vs Q1?
2. Który kwartał był najlepszy ogólnie?
3. Które produkty mają trend wzrostowy?

Analiza:
```

## Format listy

Listy są najprostszym sposobem strukturyzacji - świetne dla instrukcji, kroków i wyliczeń.

**Listy numerowane (kroków):**

```text
Opisz proces instalacji Pythona na Windows.
Podaj jako listę numerowaną kroków.

Kroki:
```

**Listy punktowane (cech):**

```text
Wymień zalety i wady pracy zdalnej.

Format:
Zalety:
- [punkt]
- [punkt]

Wady:
- [punkt]
- [punkt]
```

**Listy zagnieżdżone:**

```text
Przedstaw strukturę projektu webowego w formie hierarchicznej listy.

Struktura:
- projekt/
  - src/
    - components/
    - pages/
    - utils/
  - public/
  - tests/
```

## XML i znaczniki

Znaczniki XML pomagają wyraźnie oddzielić różne części prompta i odpowiedzi. Są szczególnie przydatne w złożonych promptach.

```text
<instrukcja>
Jesteś tłumaczem. Przetłumacz tekst z polskiego na angielski
i francuski, zachowując ton formalny.
</instrukcja>

<tekst_zrodlowy>
Szanowni Państwo, mamy przyjemność zaprosić Was
na konferencję, która odbędzie się 15 marca.
</tekst_zrodlowy>

<odpowiedz>
<angielski>
[tłumaczenie]
</angielski>
<francuski>
[tłumaczenie]
</francuski>
</odpowiedz>
```

:::tip[Dlaczego XML działa?]
Znaczniki XML tworzą wyraźne granice między sekcjami. Model "wie", że zawartość między znacznikami to odrębna jednostka, co zmniejsza ryzyko pomieszania kontekstu z instrukcjami.
:::

## Separatory i delimitery

Prostszą alternatywą dla XML są separatory tekstowe, które oddzielają sekcje prompta:

```text
### Styl z hashami ###
Sekcja 1

---
Styl z kreskami
---

"""
Styl z cudzysłowami (potrójnymi)
"""

===
Styl z równościami
===

[SEKCJA]
Styl z nawiasami kwadratowymi
[/SEKCJA]
```

**Praktyczne zastosowanie:**

```text
### INSTRUKCJA ###
Podsumuj poniższy artykuł w 3 punktach.

### ARTYKUŁ ###
[Tutaj długi tekst artykułu...]

### PODSUMOWANIE ###
```

## Definiowanie narzędzi (Function Calling)

Nowoczesne modele AI obsługują "function calling" - możliwość definiowania narzędzi, które model może "wywołać". Format definicji jest kluczowy dla poprawnego działania.

```json
{
  "name": "get_weather",
  "description": "Pobiera aktualną pogodę dla podanej lokalizacji",
  "parameters": {
    "type": "object",
    "properties": {
      "location": {
        "type": "string",
        "description": "Miasto i kraj, np. 'Warszawa, Polska'"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Jednostka temperatury"
      }
    },
    "required": ["location"]
  }
}
```

**Kluczowe elementy definicji:** **name** (unikalna nazwa funkcji), **description** (kiedy i do czego używać - najważniejsze!), **parameters** (schemat JSON parametrów wejściowych), **required** (lista wymaganych parametrów).

## Szablony (Templates)

Dla powtarzalnych zadań warto tworzyć szablony z miejscami do wypełnienia.

```text
Przeanalizuj produkt i wypełnij szablon:

PRODUKT: {{nazwa_produktu}}

---
ANALIZA PRODUKTU
---

Nazwa: {{nazwa_produktu}}
Kategoria: [wypełnij]
Grupa docelowa: [wypełnij]
Główne cechy:
1. [wypełnij]
2. [wypełnij]
3. [wypełnij]

Mocne strony:
- [wypełnij]

Słabe strony:
- [wypełnij]

Ocena ogólna (1-10): [wypełnij]
Rekomendacja: [wypełnij]
```

:::note[Wskazówka]
Używaj spójnych placeholderów: `{{zmienna}}`, `[wypełnij]`, lub `<placeholder>`. Wybierz jeden styl i trzymaj się go.
:::

## Formatowanie odpowiedzi wieloczęściowych

Gdy potrzebujesz złożonej odpowiedzi z wieloma elementami, zdefiniuj dokładną strukturę:

```text
Przeanalizuj startup i podaj kompletną analizę.

Startup: [opis startupu]

FORMAT ODPOWIEDZI:

## PODSUMOWANIE
[2-3 zdania podsumowania]

## MODEL BIZNESOWY
- Źródła przychodów: [lista]
- Struktura kosztów: [lista]

## ANALIZA SWOT
| Mocne strony | Słabe strony |
|--------------|--------------|
| [punkt]      | [punkt]      |

| Szanse       | Zagrożenia   |
|--------------|--------------|
| [punkt]      | [punkt]      |

## OCENA INWESTYCYJNA
Ryzyko: [niskie/średnie/wysokie]
Potencjał: [niski/średni/wysoki]
Rekomendacja: [tak/nie/warunkowo]

## WNIOSKI
[3-5 punktów]
```

## Najlepsze praktyki strukturyzacji

1. **Bądź konsekwentny** - używaj tego samego formatu w całym prompcie. Jeśli zaczynasz z JSON, kontynuuj JSON.
2. **Pokazuj przykłady** - zamiast tylko opisywać format, podaj przykład poprawnej odpowiedzi.
3. **Używaj znaczników dla długich kontekstów** - przy długich dokumentach używaj XML lub separatorów, by wyraźnie oddzielić dane od instrukcji.
4. **Definiuj typy danych** - w schematach JSON określaj typy: string, number, boolean, array.

## Tabela formatów i zastosowań

| Format | Najlepsze zastosowanie | Przykład użycia |
| --- | --- | --- |
| **JSON** | Dane strukturalne, API | Ekstrakcja encji, konfiguracje |
| **Tabela** | Porównania, dane tabelaryczne | Analiza produktów, raporty |
| **Lista** | Kroki, cechy, wyliczenia | Instrukcje, zalety/wady |
| **XML** | Złożone dokumenty, tłumaczenia | Wielojęzyczne treści |
| **Separatory** | Proste oddzielenie sekcji | Kontekst + pytanie |
| **Szablon** | Powtarzalne zadania | Raporty, analizy |

## Podsumowanie

- **JSON** - dla danych strukturalnych i integracji z kodem
- **Tabele** - dla porównań i danych wielowymiarowych
- **Listy** - dla kroków, cech i prostych wyliczeń
- **XML/znaczniki** - dla wyraźnego oddzielenia sekcji
- **Separatory** - prosty sposób na organizację prompta
- **Szablony** - dla powtarzalnych zadań z określoną strukturą

:::note[Teraz wiesz]

- Jak stosować framework CRISPE (zadania techniczne) obok poznanego wcześniej CO-STAR (treści biznesowe) do budowania profesjonalnych promptów
- Jak używać formatów JSON, tabel, list, XML i szablonów do uzyskiwania spójnych, strukturalnych odpowiedzi
- Jak definiować narzędzia (function calling) i wieloczęściowe formaty wyjściowe dla złożonych analiz

**Następny krok:** [Inżynieria kontekstu](/prompt-engineering/inzynieria-kontekstu/) - nauczysz się zarządzać tym, co model naprawdę "widzi": doborem informacji, długością rozmowy i instrukcjami stałymi.
:::

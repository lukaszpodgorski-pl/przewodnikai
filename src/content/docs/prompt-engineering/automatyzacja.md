---
title: Automatyzacja z AI - Prompt Chaining i APE
description: Poznaj techniki automatyzacji promptów - prompt chaining, APE (Automatic Prompt Engineer), Active-Prompt. Twórz złożone workflow z AI.
sidebar:
  label: 'Automatyzacja'
  order: 6
educationalLevel: Advanced
teaches:
  - Prompt chaining
  - Automatyzacja zadań z AI
  - Automatic Prompt Engineering (APE)
about:
  - name: Prompt engineering
    sameAs: https://en.wikipedia.org/wiki/Prompt_engineering
  - name: Automatyzacja
    sameAs: https://pl.wikipedia.org/wiki/Automatyzacja
faq:
  - q: Czym jest prompt chaining?
    a: Prompt chaining to technika łączenia wielu promptów w sekwencję, gdzie wynik jednego staje się wejściem dla następnego, umożliwiając rozwiązywanie złożonych zadań.
---

## Automatyzacja w prompt engineering

Ręczne pisanie i dopracowywanie promptów kosztuje czas - a przy powtarzalnej pracy ten koszt się mnoży. Pokażę Ci techniki, które przenoszą część tej roboty na maszynę: od łączenia promptów w sekwencje, przez automatyczne generowanie instrukcji, aż po adaptacyjne dobieranie przykładów.

## Prompt Chaining (Łańcuchowanie Promptów)

**Prompt Chaining** to technika polegająca na podziale złożonego zadania na mniejsze podzadania, gdzie odpowiedź z jednego kroku służy jako wejście dla następnego.

:::note[Analogia]
Wyobraź sobie linię produkcyjną: każda stacja wykonuje konkretne zadanie i przekazuje wynik do następnej. Tak samo działają łańcuchy promptów - każdy prompt specjalizuje się w jednym zadaniu.
:::

**Korzyści Prompt Chaining:** przejrzystość (każdy krok jest zrozumiały i debugowalny), kontrola (możesz sprawdzić i skorygować wyniki na każdym etapie), niezawodność (błąd w jednym kroku łatwiej zlokalizować), modułowość (łatwo modyfikować pojedyncze kroki).

### Przykład: Analiza dokumentu

Zamiast jednego prompta "Przeanalizuj dokument i napisz raport" rozbij zadanie na kroki:

```text
Krok 1: Ekstrakcja kluczowych cytatów
Przeczytaj poniższy dokument i wyodrębnij 5 najważniejszych
cytatów istotnych dla głównej tezy.

Dokument:
"""
[Treść dokumentu]
"""

Kluczowe cytaty:
```

```text
Krok 2: Analiza cytatów
Na podstawie poniższych cytatów z dokumentu,
zidentyfikuj główne tematy i argumenty autora.

Cytaty:
"""
[Wynik z Kroku 1]
"""

Analiza tematów:
```

```text
Krok 3: Generowanie raportu
Na podstawie poniższej analizy napisz zwięzły raport
(max 300 słów) podsumowujący dokument.

Analiza:
"""
[Wynik z Kroku 2]
"""

Raport:
```

### Wzorce Prompt Chaining

| Wzorzec | Opis | Zastosowanie |
| --- | --- | --- |
| **Sekwencyjny** | A → B → C | Przetwarzanie krok po kroku |
| **Równoległy** | A → [B, C, D] → E | Analiza z wielu perspektyw |
| **Warunkowy** | A → if(x) B else C | Różne ścieżki zależnie od wyniku |
| **Iteracyjny** | A → B → sprawdź → (B → ...) | Poprawianie do osiągnięcia celu |

## APE (Automatic Prompt Engineer)

**APE** (Zhou et al. 2022) to framework do automatycznego generowania i selekcji najlepszych instrukcji. Zamiast ręcznie pisać prompty, pozwalasz AI je tworzyć i testować.

:::tip[Kluczowe odkrycie]
APE odkrył, że prompt "Let's work this out in a step by step way to be sure we have the right answer" działa lepiej niż ręcznie wymyślony "Let's think step by step" w zadaniach matematycznych.
:::

**Jak działa APE?** 1. Generowanie kandydatów - model tworzy różne wersje instrukcji. 2. Testowanie - każda wersja jest testowana na zbiorze przykładów. 3. Selekcja - wybierana jest instrukcja z najlepszymi wynikami.

```text
Mam zadanie klasyfikacji sentymentu. Oto przykłady:

Wejście: "Świetny produkt, polecam!"
Wyjście: Pozytywny

Wejście: "Totalna porażka, pieniądze wyrzucone w błoto"
Wyjście: Negatywny

Wejście: "Produkt działa, nic specjalnego"
Wyjście: Neutralny

Wygeneruj 5 różnych instrukcji, które mogłyby
poprzedzać takie zadanie klasyfikacji.
Każda instrukcja powinna być unikalna i jasna.

Instrukcje:
```

**Przykładowe wygenerowane instrukcje:**

1. "Określ emocjonalny wydźwięk tekstu: pozytywny, negatywny lub neutralny."
2. "Sklasyfikuj sentyment poniższej recenzji."
3. "Przeanalizuj ton wypowiedzi i przypisz etykietę sentymentu."
4. "Na podstawie treści określ, czy autor wyraża zadowolenie, niezadowolenie, czy jest obojętny."
5. "Oceń nastawienie emocjonalne tekstu."

Następnie testujesz każdą instrukcję na większym zbiorze danych i wybierasz najskuteczniejszą.

## Active-Prompt

**Active-Prompt** (Diao et al. 2023) to technika adaptująca przykłady Chain-of-Thought do konkretnego zadania poprzez identyfikację najbardziej "niepewnych" przypadków.

**Jak działa Active-Prompt?** 1. Generowanie odpowiedzi - model generuje kilka odpowiedzi dla każdego pytania. 2. Pomiar niepewności - obliczana jest "niezgoda" między odpowiedziami. 3. Selekcja - pytania z największą niepewnością są wybierane do ręcznej anotacji. 4. Wykorzystanie - nowe przykłady z rozumowaniem są używane w promptach.

:::caution[Praktyczna korzyść]
Zamiast losowo wybierać przykłady do few-shot prompting, Active-Prompt pomaga wybrać te, które najbardziej pomogą modelowi - czyli te, z którymi model ma największy problem.
:::

```text
Mam zbiór 10 pytań matematycznych.
Dla każdego wygeneruj 3 różne odpowiedzi.

1. "15% z 80 to..."
2. "Jeśli x + 5 = 12, to x = ..."
3. "Pole kwadratu o boku 7 to..."
[...]

Dla każdego pytania oceń, czy wszystkie 3 odpowiedzi są zgodne.
Oznacz jako "zgodne" lub "niespójne".

Lista:
```

Pytania oznaczone jako "niespójne" to kandydaci do stworzenia szczegółowych przykładów z rozumowaniem.

## Automatyczne testowanie promptów

Bez testów nie wiesz, czy nowa wersja prompta jest lepsza, czy tylko inna. Dlatego proponuję trzy kroki:

**1. Zdefiniuj metryki sukcesu.** Dla zadania klasyfikacji sentymentu: dokładność (% poprawnych klasyfikacji), spójność (czy ta sama odpowiedź przy wielokrotnym zapytaniu), czas odpowiedzi. Dla zadania generowania tekstu: zgodność z formatem, pokrycie wymaganych elementów, czytelność (np. Flesch-Kincaid).

**2. Stwórz zbiór testowy:**

```text
test_cases = [
    {
        "input": "Świetny produkt!",
        "expected": "Pozytywny"
    },
    {
        "input": "Totalna klapa",
        "expected": "Negatywny"
    },
    {
        "input": "Jest OK",
        "expected": "Neutralny"
    }
    // ... więcej przypadków
]
```

**3. Porównuj wersje promptów:**

```text
Prompt A (baseline):
"Sklasyfikuj sentyment jako pozytywny, negatywny lub neutralny."

Prompt B (z kontekstem):
"Jesteś ekspertem od analizy opinii klientów.
Sklasyfikuj sentyment recenzji produktu.
Kategorie: pozytywny, negatywny, neutralny."

Wyniki na 100 przypadkach testowych:
- Prompt A: 78% dokładności
- Prompt B: 85% dokładności

Wniosek: Prompt B z kontekstem roli działa lepiej.
```

## Iteracyjna optymalizacja promptów

Skuteczny proces optymalizacji promptów składa się z cykli: **1. Baseline** - zacznij od prostego prompta i zmierz wyniki. **2. Analiza błędów** - sprawdź, gdzie model się myli, szukaj wzorców. **3. Hipoteza** - sformułuj teorię, dlaczego błędy występują. **4. Modyfikacja** - zmień prompt, aby zaadresować zidentyfikowane problemy. **5. Pomiar** - zmierz wyniki nowej wersji. Jeśli lepsze - kontynuuj, jeśli nie - wróć do poprzedniej.

**Przykład procesu:**

```text
Prompt v1: "Streść artykuł w 3 zdaniach."
Problem: Streszczenia często mają 5+ zdań.
Hipoteza: Instrukcja nie jest wystarczająco jasna.

Prompt v2: "Streść artykuł w DOKŁADNIE 3 zdaniach.
Każde zdanie powinno być oddzielone kropką.
Nie przekraczaj 3 zdań."
Wynik: 90% streszczeń ma 3 zdania (wzrost z 60%).
```

## Workflow automatyzacji

Kompletny workflow łączący poznane techniki:

```text
WORKFLOW: Analiza opinii klientów

WEJŚCIE: Lista opinii klientów

KROK 1 (Prompt Chaining - równoległy):
├── Prompt 1a: Ekstrakcja sentymentu
├── Prompt 1b: Ekstrakcja tematów/problemów
└── Prompt 1c: Identyfikacja pilności

KROK 2 (Agregacja):
Prompt 2: Połącz wyniki w strukturę JSON
{
  "opinia_id": "...",
  "sentyment": "...",
  "tematy": [...],
  "pilnosc": "...",
}

KROK 3 (Analiza zbiorcza):
Prompt 3: Na podstawie wszystkich przeanalizowanych
opinii zidentyfikuj:
- Top 3 najczęstsze problemy
- Trend sentymentu
- Rekomendacje działań

KROK 4 (Generowanie raportu):
Prompt 4: Stwórz raport menedżerski
z wykresami ASCII i rekomendacjami

WYJŚCIE: Raport + dane strukturalne
```

## Narzędzia do automatyzacji

Istnieje wiele narzędzi wspierających automatyzację pracy z promptami:

| Narzędzie | Zastosowanie | Typ |
| --- | --- | --- |
| **LangChain** | Łańcuchy promptów, agenci | Framework Python |
| **LlamaIndex** | RAG, indeksowanie dokumentów | Framework Python |
| **PromptFlow** | Wizualne projektowanie workflow | Narzędzie Microsoft |
| **Weights & Biases** | Śledzenie eksperymentów | Platforma MLOps |
| **Humanloop** | Wersjonowanie promptów | Platforma SaaS |

## Podsumowanie

- **Prompt Chaining** - dziel złożone zadania na sekwencję prostszych kroków
- **APE** - automatycznie generuj i testuj różne wersje instrukcji
- **Active-Prompt** - wybieraj przykłady, z którymi model ma największy problem
- **Testowanie** - systematycznie mierz skuteczność promptów
- **Iteracja** - analizuj błędy i stopniowo poprawiaj

:::note[Teraz wiesz]

- Jak dzielić złożone zadania na sekwencje prostszych kroków za pomocą prompt chaining
- Jak automatycznie generować i testować różne wersje promptów z techniką APE
- Jak systematycznie optymalizować prompty cyklem: baseline, analiza błędów, hipoteza, modyfikacja, pomiar

**Następny krok:** [Programowanie z AI](/prompt-engineering/programowanie/) - dowiesz się, jak wykorzystać AI do generowania kodu, debugowania, pisania testów i automatyzacji zadań deweloperskich.
:::

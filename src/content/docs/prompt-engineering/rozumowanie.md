---
title: Techniki Rozumowania AI - Tree of Thoughts, Self-Consistency, ReAct
description: Zaawansowane techniki rozumowania AI - Tree of Thoughts, Self-Consistency, ReAct, RAG. Naucz się rozwiązywać złożone problemy z pomocą AI.
sidebar:
  label: 'Techniki rozumowania'
  order: 4
educationalLevel: Advanced
teaches:
  - Tree of Thoughts
  - Self-Consistency
  - Technika ReAct
about:
  - name: Prompt engineering
    sameAs: https://en.wikipedia.org/wiki/Prompt_engineering
faq:
  - q: Czym jest Tree of Thoughts?
    a: Tree of Thoughts to zaawansowana technika promptowania, w której AI rozważa wiele ścieżek rozumowania jednocześnie, ocenia je i wybiera najlepszą.
---

![Rozgałęziające się drzewo ścieżek rozumowania zbiegające się w najlepszej odpowiedzi](../../../assets/prompt-engineering/rozumowanie/rozumowanie.jpg)

:::caution[Poziom: Zaawansowany]
Ten artykuł jest dla osób, które opanowały już podstawy promptowania i chcą poznać bardziej wyrafinowane techniki. Jeśli dopiero zaczynasz z prompt engineeringiem, zacznij od [Podstaw promptowania](/prompt-engineering/podstawy/) i [Technik promptowania](/prompt-engineering/techniki/).
:::

## Zaawansowane techniki rozumowania

Podstawowe techniki promptowania (zero-shot, few-shot, CoT) sprawdzają się w większości sytuacji, ale część problemów się im wymyka. Zebrałem tu sześć podejść na takie właśnie przypadki - każde z nich rozwiązuje inny rodzaj kłopotu, więc zwróć uwagę nie tylko na to, jak działają, ale i kiedy je stosować.

## Self-Consistency (Samospójność)

**Self-Consistency** to technika zaproponowana przez Wang et al. (2022), która zastępuje standardowe generowanie odpowiedzi próbkowaniem wielu ścieżek rozumowania.

:::note[Zasada działania]
Zamiast generować jedną odpowiedź, model tworzy wiele niezależnych odpowiedzi z różnymi ścieżkami rozumowania. Następnie wybierana jest odpowiedź, która pojawia się najczęściej (głosowanie większościowe).
:::

**Pytanie:** "Gdy miałem 6 lat, moja siostra miała połowę mojego wieku. Teraz mam 70 lat. Ile lat ma moja siostra?"

```text
Odpowiedź 1:
Gdy miałem 6 lat, siostra miała 6/2 = 3 lata.
Różnica wieku: 6 - 3 = 3 lata.
Teraz mam 70 lat, więc siostra ma: 70 - 3 = 67 lat.

Odpowiedź 2:
W wieku 6 lat siostra miała 3 lata (połowa z 6).
Siostra jest 3 lata młodsza.
Mam 70 lat, siostra ma 70 - 3 = 67 lat.

Odpowiedź 3:
Połowa z 6 to 3. Teraz mam 70, więc siostra
też ma 70/2 = 35 lat. (BŁĘDNE rozumowanie!)
```

**Finalna odpowiedź:** 67 lat (wybrana przez głosowanie większościowe - 2 z 3 odpowiedzi)

**Kiedy stosować Self-Consistency?** Zadania arytmetyczne i matematyczne, rozumowanie zdroworozsądkowe, problemy z wieloma możliwymi ścieżkami rozwiązania, gdy zależy Ci na wysokiej dokładności.

:::caution[Praktyczna implementacja]
W praktyce możesz użyć Self-Consistency przez: wysłanie tego samego prompta kilka razy z wyższą temperaturą, porównanie odpowiedzi i wybranie najczęstszej, lub poproszenie AI o wygenerowanie 3-5 różnych rozwiązań.
:::

## Tree of Thoughts (ToT) - Drzewo Myśli

**Tree of Thoughts** to framework zaproponowany przez Yao et al. (2023), który utrzymuje drzewo myśli jako pośrednie kroki rozwiązywania problemów. To rozszerzenie Chain-of-Thought, które pozwala na eksplorację wielu ścieżek jednocześnie.

:::tip[Analogia]
Wyobraź sobie, że rozwiązujesz szachy. CoT to patrzenie jeden ruch do przodu. ToT to patrzenie na wszystkie możliwe ruchy, ocena każdego, i wybór najlepszej ścieżki - z możliwością cofnięcia się i wybrania innej, jeśli ta nie działa.
:::

**Jak działa ToT?** 1. Generowanie myśli - każdy krok rozumowania to węzeł w drzewie. 2. Ewaluacja - model ocenia każdą myśl (np. "pewne/możliwe/niemożliwe"). 3. Eksploracja - algorytmy przeszukiwania (BFS, DFS) eksplorują obiecujące ścieżki. 4. Backtracking - możliwość cofnięcia się i wybrania innej ścieżki.

**Przykład: Gra w 24.** Cel: użyj 4 liczb i operacji matematycznych (+, -, *, /), aby uzyskać 24. Liczby: 4, 9, 10, 13.

```text
Poziom 1 - pierwsze operacje:
├── 13 - 9 = 4 → mamy: 4, 4, 10 [możliwe]
├── 9 - 4 = 5 → mamy: 5, 10, 13 [możliwe]
├── 10 + 4 = 14 → mamy: 14, 9, 13 [możliwe]
└── 4 * 9 = 36 → mamy: 36, 10, 13 [możliwe]

Poziom 2 - dla gałęzi (13 - 9 = 4):
├── 10 - 4 = 6 → mamy: 4, 6 [możliwe]
│   └── 4 * 6 = 24 ✓ [ROZWIĄZANIE!]
├── 4 + 4 = 8 → mamy: 8, 10 [możliwe]
└── 4 * 4 = 16 → mamy: 16, 10 [możliwe]

Rozwiązanie: (13 - 9) * (10 - 4) = 4 * 6 = 24
```

**Praktyczne zastosowanie ToT w promptach:**

```text
Rozwiąż problem używając drzewa myśli.
Na każdym etapie:
1. Wygeneruj 2-3 możliwe kolejne kroki
2. Oceń każdy krok jako: pewny, możliwy, lub niemożliwy
3. Wybierz najlepszy krok i kontynuuj
4. Jeśli utkniesz, cofnij się i wybierz inną ścieżkę

Problem: [Twój problem]

Drzewo myśli:
```

## Generate Knowledge Prompting

**Generate Knowledge** to technika, w której model najpierw generuje wiedzę potrzebną do odpowiedzi, a następnie wykorzystuje ją do wsparcia predykcji: 1. Generowanie wiedzy - model tworzy fakty związane z pytaniem. 2. Integracja - wiedza łączy się z pytaniem. 3. Odpowiedź - model odpowiada wspierany faktami.

**Pytanie:** "Czy w golfie chodzi o uzyskanie wyższej punktacji niż inni?"

```text
Bez generowania wiedzy:
Pytanie: Czy w golfie chodzi o uzyskanie wyższej punktacji niż inni?
Odpowiedź: Tak

(BŁĘDNA odpowiedź!)
```

```text
Z generowaniem wiedzy:
Najpierw wygeneruj wiedzę związaną z pytaniem,
a następnie odpowiedz.

Pytanie: Czy w golfie chodzi o uzyskanie wyższej punktacji niż inni?

Wiedza: Golf to sport, w którym gracze uderzają piłkę kijem,
starając się wbić ją do dołka. Celem golfa jest ukończenie
każdego dołka (i całej rundy) jak najmniejszą liczbą uderzeń.
W przeciwieństwie do większości sportów, w golfie wygrywa
gracz z NAJNIŻSZĄ, nie najwyższą liczbą punktów.

Odpowiedź: Nie. W golfie wygrywa osoba z najniższą punktacją.

(POPRAWNA odpowiedź!)
```

:::note[Praktyczna wskazówka]
Używaj tej techniki przy pytaniach, które mogą być nieintuicyjne lub gdzie model może mieć niepewną wiedzę. Wymuszenie "przypomnienia sobie" faktów przed odpowiedzią znacząco poprawia dokładność.
:::

## RAG (Retrieval Augmented Generation)

**RAG** to metoda łącząca wyszukiwanie informacji z generowaniem tekstu. Model ma dostęp do zewnętrznej bazy wiedzy, z której może pobierać aktualne i specjalistyczne informacje.

:::tip[Problem, który RAG rozwiązuje]
Modele językowe mają wiedzę tylko do momentu treningu (cut-off date) i mogą "halucynować" - generować przekonująco brzmiące, ale nieprawdziwe informacje. RAG dostarcza modelowi prawdziwe, aktualne dane.
:::

**Jak działa RAG?** 1. Pytanie użytkownika → "Jaka jest aktualna cena akcji Apple?". 2. Wyszukiwanie → system wyszukuje odpowiednie dokumenty/dane. 3. Kontekst → znalezione informacje są dołączane do prompta. 4. Generowanie → model generuje odpowiedź na podstawie kontekstu.

```text
Odpowiedz na pytanie bazując WYŁĄCZNIE na poniższym kontekście.
Jeśli kontekst nie zawiera odpowiedzi, powiedz "Nie wiem".

Kontekst:
"""
[Artykuł pobrany z bazy wiedzy]
Apple Inc. ogłosiło wyniki za Q4 2024. Przychody wyniosły
94.9 miliarda dolarów, co oznacza wzrost o 6% rok do roku.
iPhone pozostaje głównym źródłem przychodów z 46.2 mld USD.
"""

Pytanie: Jakie były przychody Apple w Q4 2024?

Odpowiedź:
```

**Zalety RAG:** aktualność (dostęp do najnowszych informacji), dokładność (odpowiedzi oparte na faktach, nie domysłach), transparentność (można wskazać źródło informacji), elastyczność (łatwa aktualizacja bazy wiedzy bez przetrenowywania modelu).

## ReAct (Reasoning + Acting)

**ReAct** to framework łączący rozumowanie z działaniem. Model nie tylko "myśli", ale również podejmuje akcje (np. wyszukiwanie, obliczenia) i obserwuje ich wyniki.

**Cykl ReAct:** 1. Thought (Myśl) - model analizuje sytuację i planuje. 2. Action (Akcja) - model wykonuje działanie (np. wyszukiwanie). 3. Observation (Obserwacja) - model otrzymuje wynik akcji. 4. Repeat - cykl powtarza się aż do uzyskania odpowiedzi.

```text
Pytanie: Kto jest twórcą języka, w którym napisano Django?

Thought 1: Muszę najpierw sprawdzić, w jakim języku napisano Django.
Action 1: Search[Django framework programming language]
Observation 1: Django to framework webowy napisany w Pythonie.

Thought 2: Django jest napisane w Pythonie. Teraz muszę znaleźć
twórcę Pythona.
Action 2: Search[Python programming language creator]
Observation 2: Python został stworzony przez Guido van Rossuma.

Thought 3: Mam odpowiedź. Twórcą języka Python, w którym
napisano Django, jest Guido van Rossum.
Action 3: Finish[Guido van Rossum]
```

**Zastosowania ReAct:** odpowiadanie na pytania wymagające wielu źródeł, weryfikacja faktów, zadania wymagające obliczeń, interakcja z zewnętrznymi narzędziami i API.

## PAL (Program-Aided Language Models)

**PAL** to technika, w której model generuje kod (np. Python) zamiast bezpośredniego rozumowania tekstowego. Kod jest następnie wykonywany, co gwarantuje dokładność obliczeń.

:::note[Kluczowa idea]
Modele językowe są dobre w rozumieniu problemu i planowaniu rozwiązania, ale słabe w wykonywaniu dokładnych obliczeń. PAL wykorzystuje to, co model robi dobrze (rozumienie → kod), i oddelegowuje to, co robi źle (obliczenia) do interpretera.
:::

**Problem:** "Roger ma 5 piłek tenisowych. Kupuje jeszcze 2 puszki po 3 piłki każda. Ile piłek ma teraz Roger?"

```python
# Początkowa liczba piłek
poczatkowe_pilki = 5

# Kupione puszki
liczba_puszek = 2
pilki_w_puszce = 3

# Obliczenie
kupione_pilki = liczba_puszek * pilki_w_puszce
wszystkie_pilki = poczatkowe_pilki + kupione_pilki

print(wszystkie_pilki)  # Wynik: 11
```

**Kiedy używać PAL?** Problemy matematyczne i arytmetyczne, obliczenia dat i czasu, zadania wymagające precyzyjnych operacji numerycznych, symulacje i modelowanie.

## Porównanie technik rozumowania

| Technika | Główna idea | Najlepsze zastosowanie |
| --- | --- | --- |
| **Self-Consistency** | Wiele odpowiedzi, głosowanie | Zwiększenie dokładności |
| **Tree of Thoughts** | Eksploracja wielu ścieżek | Złożone problemy, planowanie |
| **Generate Knowledge** | Najpierw wiedza, potem odpowiedź | Pytania nieintuicyjne |
| **RAG** | Wyszukiwanie + generowanie | Aktualne informacje, fakty |
| **ReAct** | Rozumowanie + działanie | Zadania wieloetapowe z narzędziami |
| **PAL** | Generowanie kodu | Obliczenia, matematyka |

## Praktyczne wskazówki

:::tip[Łącz techniki]
Techniki można kombinować. Na przykład: RAG + CoT dla dokładnych odpowiedzi z rozumowaniem, lub Self-Consistency + PAL dla pewnych obliczeń.
:::

:::note[Dobieraj technikę do problemu]
Nie każdy problem wymaga zaawansowanych technik. Zacznij prosto i eskaluj tylko gdy potrzebujesz.
:::

:::caution[Testuj i iteruj]
Skuteczność technik zależy od modelu i typu problemu. Zawsze testuj różne podejścia.
:::

## Podsumowanie

- **Self-Consistency** - generuj wiele odpowiedzi, wybierz najczęstszą
- **Tree of Thoughts** - eksploruj i oceniaj wiele ścieżek rozumowania
- **Generate Knowledge** - najpierw wiedza, potem odpowiedź
- **RAG** - wyszukuj informacje, generuj odpowiedź na ich podstawie
- **ReAct** - myśl, działaj, obserwuj, powtarzaj
- **PAL** - generuj kod zamiast obliczeń tekstowych

:::note[Teraz wiesz]

- Jak Self-Consistency zwiększa dokładność poprzez generowanie wielu odpowiedzi i głosowanie większościowe
- Jak Tree of Thoughts eksploruje wiele ścieżek rozumowania z możliwością cofania się
- Jak RAG, ReAct i PAL pozwalają AI korzystać z zewnętrznych źródeł, narzędzi i kodu

**Następny krok:** [Strukturyzacja danych w promptach](/prompt-engineering/schematy/) - nauczysz się używać JSON, tabel, XML i szablonów, aby uzyskiwać spójne i przewidywalne wyniki od AI.
:::

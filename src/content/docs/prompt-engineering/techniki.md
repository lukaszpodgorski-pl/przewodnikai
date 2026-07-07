---
title: Techniki Promptowania - Zero-Shot, Few-Shot i Chain-of-Thought
description: Poznaj zaawansowane techniki promptowania - zero-shot, few-shot, chain-of-thought. Naucz się wybierać odpowiednią technikę do każdego zadania.
sidebar:
  label: 'Techniki promptowania'
  order: 3
educationalLevel: Intermediate
teaches:
  - Technika Zero-Shot prompting
  - Technika Few-Shot prompting
  - Chain-of-Thought prompting
about:
  - name: Prompt engineering
    sameAs: https://en.wikipedia.org/wiki/Prompt_engineering
  - name: Few-shot learning
    sameAs: https://en.wikipedia.org/wiki/Few-shot_learning
faq:
  - q: Czym jest Zero-Shot prompting?
    a: Zero-Shot prompting to technika, w której AI wykonuje zadanie bez żadnych przykładów - wyłącznie na podstawie instrukcji słownej.
  - q: Czym jest Chain-of-Thought?
    a: Chain-of-Thought (CoT) to technika promptowania, w której prosisz AI o rozumowanie krok po kroku, co prowadzi do dokładniejszych i lepiej uzasadnionych odpowiedzi.
---

## Wprowadzenie do technik promptowania

Nie wszystkie zadania wymagają takiego samego podejścia. Proste pytania mogą być obsłużone bezpośrednio, ale złożone problemy wymagają bardziej zaawansowanych technik. W tym rozdziale poznasz trzy fundamentalne techniki, które stanowią podstawę nowoczesnego prompt engineering.

## Zero-Shot Prompting

**Zero-shot** to technika, w której prompt nie zawiera żadnych przykładów ani demonstracji. Model otrzymuje bezpośrednią instrukcję i musi sam zrozumieć zadanie.

:::note[Jak to działa?]
Model wykorzystuje wiedzę zdobytą podczas treningu (instruction tuning), aby zrozumieć zadanie bez dodatkowych przykładów.
:::

```text
Sklasyfikuj poniższy tekst do jednej z kategorii: technologia, sport, polityka, nauka.

Tekst: Naukowcy z CERN odkryli nową cząstkę elementarną podczas eksperymentów w Wielkim Zderzaczu Hadronów.

Kategoria:
```

**Odpowiedź:** Nauka

**Kiedy stosować Zero-Shot?** Klasyfikacja tekstów, proste tłumaczenia, odpowiadanie na faktograficzne pytania, gdy nie masz dostępnych przykładów, gdy zadanie jest intuicyjne i jednoznaczne.

**Ograniczenia:** zero-shot może zawodzić przy złożonych lub nietypowych zadaniach. Gdy wyniki są niezadowalające, przejdź do few-shot prompting.

## Few-Shot Prompting

**Few-shot** to technika uczenia w kontekście (in-context learning), gdzie dostarczasz modelowi kilka przykładów pokazujących, jak wykonać zadanie. Model uczy się wzorca z przykładów i stosuje go do nowego zapytania.

:::note[Terminologia]
**1-shot** - jeden przykład, **3-shot** - trzy przykłady, **5-shot** - pięć przykładów. Więcej przykładów nie zawsze znaczy lepiej - zwykle 3-5 wystarcza.
:::

```text
Określ sentyment recenzji:

Recenzja: "Produkt świetny, polecam każdemu!"
Sentyment: Pozytywny

Recenzja: "Totalnie zmarnowane pieniądze, nie działa."
Sentyment: Negatywny

Recenzja: "Produkt jest OK, nic specjalnego."
Sentyment: Neutralny

Recenzja: "Kupiłem to tydzień temu i jestem zachwycony jakością!"
Sentyment:
```

**Odpowiedź:** Pozytywny

### Nauka nowych koncepcji

Few-shot jest szczególnie przydatny przy uczeniu modelu nowych, nieznanych koncepcji:

```text
"Whatpu" to małe, futrzaste zwierzę żyjące w Tanzanii.
Przykład zdania z whatpu:
"Podczas podróży po Afryce widzieliśmy te urocze whatpu."

"Farduddle" oznacza skakanie bardzo szybko w górę i w dół.
Przykład zdania z farduddle:
```

**Odpowiedź:** „Dzieci zaczęły farduddle z radości, gdy usłyszały o wycieczce."

**Wskazówki dla skutecznego Few-Shot:** różnorodność przykładów (wybieraj przykłady pokrywające różne przypadki), spójny format (utrzymuj identyczną strukturę we wszystkich przykładach), reprezentatywność (przykłady powinny być typowe dla zadania), prawdziwe etykiety (używaj poprawnych odpowiedzi w przykładach).

**Ograniczenia Few-Shot:** technika ta może nie wystarczyć przy zadaniach wymagających złożonego rozumowania, arytmetyki czy wieloetapowej logiki. W takich przypadkach potrzebujesz Chain-of-Thought.

## Chain-of-Thought (CoT) Prompting

**Chain-of-Thought** (Łańcuch Myśli) to technika wprowadzona przez Wei et al. (2022), która umożliwia złożone rozumowanie poprzez pośrednie kroki. Zamiast od razu podawać odpowiedź, model pokazuje etapy swojego rozumowania.

:::caution[Kluczowa idea]
CoT zmusza model do „myślenia na głos" - rozbijania problemu na mniejsze kroki i pokazywania toku rozumowania przed podaniem finalnej odpowiedzi.
:::

**Problem bez CoT:**
```text
Liczby nieparzyste w tej grupie sumują się do liczby parzystej:
15, 32, 5, 13, 82, 7, 1.
Prawda czy fałsz?
```
**Odpowiedź bez CoT:** Prawda (BŁĘDNA!)

**Problem z CoT (Few-Shot CoT):**
```text
Liczby nieparzyste w tej grupie sumują się do liczby parzystej:
4, 8, 9, 15, 12, 2, 1.
Rozwiązanie: Liczby nieparzyste to: 9, 15, 1.
Suma: 9 + 15 + 1 = 25.
25 jest liczbą nieparzystą.
Odpowiedź: Fałsz

Liczby nieparzyste w tej grupie sumują się do liczby parzystej:
15, 32, 5, 13, 82, 7, 1.
Rozwiązanie:
```
**Odpowiedź z CoT:** Liczby nieparzyste to: 15, 5, 13, 7, 1. Suma: 15 + 5 + 13 + 7 + 1 = 41. 41 jest liczbą nieparzystą. Odpowiedź: Fałsz (POPRAWNA!)

## Zero-Shot CoT - magiczna fraza

Badacze Kojima et al. (2022) odkryli, że można wywołać rozumowanie krok po kroku bez podawania przykładów - wystarczy dodać frazę: **„Let's think step by step"** (Pomyślmy krok po kroku).

**Bez frazy CoT:**
```text
Poszedłem na targ i kupiłem 10 jabłek.
Dałem 2 sąsiadowi i 2 hydraulikowi.
Potem kupiłem jeszcze 5 i zjadłem 1.
Ile jabłek mi zostało?

Odpowiedź:
```
**Odpowiedź:** 11 jabłek (BŁĘDNA!)

**Z frazą CoT:**
```text
Poszedłem na targ i kupiłem 10 jabłek.
Dałem 2 sąsiadowi i 2 hydraulikowi.
Potem kupiłem jeszcze 5 i zjadłem 1.
Ile jabłek mi zostało?

Pomyślmy krok po kroku.
```
**Odpowiedź:** 1. Zacząłem z 10 jabłkami. 2. Dałem 2 sąsiadowi: 10 - 2 = 8. 3. Dałem 2 hydraulikowi: 8 - 2 = 6. 4. Kupiłem 5: 6 + 5 = 11. 5. Zjadłem 1: 11 - 1 = 10. **Odpowiedź: 10 jabłek** (POPRAWNA!)

:::tip[Praktyczna wskazówka]
Frazy wywołujące rozumowanie krok po kroku (po polsku i angielsku): „Pomyślmy krok po kroku.", „Let's think step by step.", „Rozwiążmy to systematycznie.", „Przeanalizujmy to etapami."
:::

## Porównanie technik

| Technika | Przykłady | Rozumowanie | Najlepsze zastosowanie |
| --- | --- | --- | --- |
| **Zero-Shot** | Brak | Brak | Proste, intuicyjne zadania |
| **Few-Shot** | 1-5 | Brak | Nowe formaty, nietypowe zadania |
| **Zero-Shot CoT** | Brak | Tak | Problemy logiczne, arytmetyka |
| **Few-Shot CoT** | 1-5 z rozumowaniem | Tak | Złożone, wieloetapowe problemy |

## Kiedy której techniki użyć?

1. **Zacznij od Zero-Shot** — zawsze próbuj najprostszego podejścia. Jeśli wynik jest dobry - nie komplikuj.
2. **Gdy Zero-Shot zawodzi → Few-Shot** — dodaj 2-3 przykłady, jeśli model nie rozumie formatu lub zadanie jest nietypowe.
3. **Dla rozumowania → CoT** — przy zadaniach wymagających logiki, matematyki lub wieloetapowego myślenia użyj „Pomyślmy krok po kroku".
4. **Dla najtrudniejszych → Few-Shot CoT** — połącz przykłady z rozumowaniem przy najbardziej złożonych problemach.

## Praktyczne ćwiczenie

Spróbuj rozwiązać poniższy problem używając różnych technik i porównaj wyniki:

```text
Restauracja ma 15 stolików.
Każdy stolik ma 4 krzesła.
W piątek wieczorem 3 stoliki są zepsute i nie można ich użyć.
Przy 8 stolikach siedzą już goście (wszystkie krzesła zajęte).
Ile wolnych miejsc siedzących pozostało w restauracji?
```

Przetestuj z: (1) samym pytaniem (Zero-Shot), (2) dodając „Pomyślmy krok po kroku" (Zero-Shot CoT), (3) pokazując podobny przykład z rozwiązaniem (Few-Shot CoT).

## Podsumowanie

- **Zero-Shot** - prosta instrukcja bez przykładów, dla intuicyjnych zadań
- **Few-Shot** - kilka przykładów uczących model formatu i oczekiwań
- **Chain-of-Thought** - rozumowanie krok po kroku dla złożonych problemów
- **Zero-Shot CoT** - magiczna fraza „Pomyślmy krok po kroku"

:::note[Teraz wiesz]
- Kiedy użyć zero-shot (proste zadania), few-shot (nietypowe formaty) i chain-of-thought (złożone rozumowanie)
- Jak magiczna fraza „Pomyślmy krok po kroku" drastycznie poprawia dokładność odpowiedzi AI
- Jak łączyć techniki (np. Few-Shot CoT) do rozwiązywania najtrudniejszych problemów

**Następny krok:** [Techniki rozumowania AI](/prompt-engineering/rozumowanie/) — odkryjesz zaawansowane metody takie jak Tree of Thoughts, Self-Consistency i ReAct, które pozwalają AI rozwiązywać naprawdę złożone problemy.
:::

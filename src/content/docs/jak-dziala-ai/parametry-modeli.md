---
title: Parametry modeli AI - Temperature, Top-P, Max Tokens
description: Poznaj kluczowe parametry modeli AI - temperature, top_p, max_tokens i inne. Naucz się dostrajać zachowanie modelu do swoich potrzeb.
sidebar:
  label: 'Parametry modeli'
  order: 7
educationalLevel: Advanced
teaches:
  - Czym jest temperature w AI
  - Parametr Top-P
  - Max tokens i inne parametry modeli
about:
  - name: Duży model językowy
    sameAs: https://pl.wikipedia.org/wiki/Du%C5%BCy_model_j%C4%99zykowy
faq:
  - q: Czym jest parametr temperature w AI?
    a: Temperature kontroluje losowość odpowiedzi AI. Niska wartość (np. 0.2) daje przewidywalne odpowiedzi, wysoka (np. 0.9) - bardziej kreatywne i zróżnicowane.
  - q: Co to jest Top-P?
    a: Top-P (nucleus sampling) to parametr kontrolujący różnorodność odpowiedzi. Ogranicza wybór kolejnego tokenu do grupy najbardziej prawdopodobnych opcji sumujących się do wartości P.
---

:::caution[Poziom: Zaawansowany]
Ten artykuł jest dla osób, które chcą wejść głębiej w techniczne aspekty AI. Jeśli dopiero zaczynasz swoją przygodę ze sztuczną inteligencją, spokojnie go pomiń i wróć tutaj później. Do codziennego korzystania z ChatGPT czy Claude ta wiedza nie jest niezbędna.
:::

## Dlaczego parametry mają znaczenie?

Modele językowe to nie "czarne skrzynki" z jednym przyciskiem. Możesz kontrolować ich zachowanie za pomocą parametrów. Odpowiednie ustawienia mogą znacząco poprawić jakość odpowiedzi - lub ją zepsuć, jeśli nie wiesz, co robisz.

Pokazuję niżej wszystkie parametry, które spotkasz w API i w narzędziach dla zaawansowanych, ale od razu uprzedzam: w codziennej pracy większość roboty wykonują dwa z nich - temperature i max tokens. Resztę traktuj jak dostrajanie na później.

## Temperature - kontrola kreatywności

**Temperature** (temperatura) kontroluje "losowość" odpowiedzi modelu. To jeden z najważniejszych parametrów - model generuje kolejne słowa wybierając z listy kandydatów, a temperatura wpływa na to, jak bardzo "ryzykowne" wybory model podejmuje.

| Temperatura | Zachowanie | Najlepsze dla |
| --- | --- | --- |
| **0** | Deterministyczny - zawsze wybiera najbardziej prawdopodobne słowo | Fakty, obliczenia, kod |
| **0.1 - 0.3** | Bardzo spójny, minimalna wariacja | Analiza, ekstrakcja danych |
| **0.4 - 0.6** | Zbalansowany | Ogólne zadania, pisanie biznesowe |
| **0.7 - 0.9** | Kreatywny, zróżnicowany | Burza mózgów, pisanie kreatywne |
| **1.0+** | Bardzo losowy, może być chaotyczny | Eksperymenty artystyczne |

:::tip[Praktyczna wskazówka]
Zacznij od temperatury 0.7 dla większości zadań. Obniżaj dla faktów i kodu, podwyższaj dla kreatywności.
:::

## Top P (Nucleus Sampling)

**Top P** (zwany też nucleus sampling) to alternatywny sposób kontrolowania losowości. Zamiast wpływać na "ostrość" dystrybucji, ogranicza pulę kandydatów.

:::note[Jak to działa?]
Top P = 0.9 oznacza: "wybieraj tylko spośród słów, które łącznie mają 90% prawdopodobieństwa". Odcina mało prawdopodobne (często dziwne) wybory.
:::

| Top P | Efekt |
| --- | --- |
| **0.1** | Tylko najbardziej prawdopodobne słowa - bardzo przewidywalne |
| **0.5** | Umiarkowana różnorodność |
| **0.9** | Standardowe ustawienie - dobra równowaga |
| **1.0** | Wszystkie słowa mogą być wybrane |

:::danger[Ważne]
Nie zmieniaj temperatury i top_p jednocześnie! Wybierz jeden parametr i dostosuj go. Większość ekspertów zaleca modyfikację temperatury i zostawienie top_p na 1.0.
:::

## Max Tokens - limit długości

**Max Tokens** określa maksymalną długość odpowiedzi (w tokenach, nie słowach).

:::note[Token ≠ Słowo]
Token to fragment tekstu - może to być słowo, część słowa, lub znak interpunkcyjny. W języku angielskim średnio 1 token ≈ 0.75 słowa. W polskim może być więcej tokenów na słowo (zobacz [Tokeny i kontekst](/jak-dziala-ai/tokeny-i-kontekst/)).
:::

Typowe ustawienia: 100-300 (krótkie odpowiedzi, streszczenia), 500-1000 (standardowe odpowiedzi), 2000-4000 (dłuższe artykuły, szczegółowe analizy), 8000+ (bardzo długie dokumenty).

:::caution[Uwaga na koszty]
Płacisz za tokeny wejściowe + wyjściowe. Zbyt wysoki max_tokens nie zwiększa kosztów, dopóki model faktycznie nie wygeneruje tylu tokenów.
:::

## Stop Sequences - kontrola zakończenia

**Stop Sequences** to sekwencje znaków, które kończą generowanie odpowiedzi.

```text
Stop sequences: ["###", "Użytkownik:", "\n\n"]

Model przestanie generować, gdy napotka którąkolwiek z tych sekwencji.
```

Zastosowania: kontrola formatu odpowiedzi, zapobieganie "gadatliwości", symulacja dialogów (stop na "Użytkownik:").

## Frequency Penalty i Presence Penalty

Po te dwa parametry sięgasz dopiero wtedy, gdy model faktycznie zaczyna się powtarzać. Nie komplikuj sobie nimi startu.

Oba kontrolują powtarzalność w odpowiedziach, ale robią to inaczej.

**Frequency Penalty** - karze słowa proporcjonalnie do liczby ich wcześniejszych wystąpień. Im częściej słowo się pojawiło, tym mniej prawdopodobne, że pojawi się ponownie.

**Presence Penalty** - karze słowa, które już się pojawiły, niezależnie od tego, ile razy. Każde słowo jest karane tak samo, czy wystąpiło raz czy dziesięć razy.

| Parametr | Wartość | Efekt |
| --- | --- | --- |
| Frequency | 0 | Brak kary - słowa mogą się powtarzać |
| Frequency | 0.5-1.0 | Umiarkowane ograniczenie powtórzeń |
| Presence | 0 | Brak kary |
| Presence | 0.5-1.0 | Zachęca do używania nowych słów |

:::tip[Wskazówka]
Używaj frequency penalty, gdy model powtarza te same frazy. Używaj presence penalty, gdy chcesz większej różnorodności słownictwa.
:::

## System Message / System Prompt

**System message** to specjalna instrukcja definiująca "osobowość" i zachowanie modelu. Jest przetwarzana przed wiadomością użytkownika.

Zwróć uwagę na jedną rzecz: dobrze napisany system message zmienia odpowiedzi wyraźniej niż drobne korekty temperatury. Jeśli model nie trafia w Twoje potrzeby, zacznij poprawki właśnie tutaj, a nie od liczb.

```text
Jesteś pomocnym asystentem prawnym specjalizującym się
w prawie pracy w Polsce. Odpowiadasz zwięźle i konkretnie.
Zawsze informujesz, gdy nie jesteś pewien odpowiedzi.
Nie udzielasz porad, które wymagają konsultacji z prawnikiem.
```

Dobre praktyki: określ rolę i ton, zdefiniuj ograniczenia, ustal format odpowiedzi, dodaj instrukcje bezpieczeństwa.

## Tabela referencji parametrów

Poniższe wartości traktuj jak punkt wyjścia, nie jak przepis. Ustaw je, sprawdź wynik na swoim zadaniu i koryguj w jedną stronę naraz.

| Zadanie | Temp | Top P | Max Tokens |
| --- | --- | --- | --- |
| Generowanie kodu | 0 - 0.2 | 1.0 | Zależnie od zadania |
| Ekstrakcja danych | 0 | 1.0 | Krótki |
| Tłumaczenie | 0.3 | 1.0 | ~1.5x długości źródła |
| Streszczenie | 0.3 - 0.5 | 1.0 | Zdefiniowany limit |
| Pisanie artykułów | 0.7 | 1.0 | 2000+ |
| Burza mózgów | 0.9 - 1.0 | 1.0 | Bez limitu |
| Poezja/kreatywne | 0.8 - 1.0 | 0.95 | Zależnie od formy |

## Podsumowanie

- **Temperature** - główny parametr kreatywności (0 = deterministyczny, 1 = kreatywny)
- **Top P** - alternatywa dla temperatury (nie używaj obu naraz)
- **Max Tokens** - limit długości odpowiedzi
- **Stop Sequences** - sekwencje kończące generowanie
- **Frequency/Presence Penalty** - kontrola powtórzeń
- **System Message** - definicja roli i zachowania modelu

:::note[Teraz wiesz]

- Jak temperature i top_p kontrolują kreatywność modelu - i dlaczego nie należy zmieniać obu naraz
- Do czego służą max tokens, stop sequences i penalty - narzędzia precyzyjnego sterowania odpowiedziami
- Jakie ustawienia parametrów sprawdzają się najlepiej dla różnych zadań: od kodu po pisanie kreatywne

**Następny krok:** [Rozumienie danych](/jak-dziala-ai/dane-dla-poczatkujacych/) - poznasz podstawy pracy z danymi, które pomogą Ci lepiej korzystać z AI w codziennych zadaniach.
:::

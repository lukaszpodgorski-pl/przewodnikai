---
title: Podstawy Promptowania - Jak Pisać Skuteczne Prompty
description: Poznaj fundamentalne zasady tworzenia promptów. Dowiedz się, jak formułować instrukcje, używać kontekstu i przykładów, by uzyskać najlepsze odpowiedzi od AI.
sidebar:
  label: 'Podstawy promptowania'
  order: 2
educationalLevel: Beginner
teaches:
  - Jak pisać skuteczne prompty
  - Elementy dobrego promptu
  - Najczęstsze błędy w promptach
about:
  - name: Prompt engineering
    sameAs: https://en.wikipedia.org/wiki/Prompt_engineering
faq:
  - q: Jak napisać dobry prompt?
    a: Dobry prompt jest konkretny, zawiera kontekst, określa rolę AI, format odpowiedzi i oczekiwany poziom szczegółowości. Unikaj pytań zbyt ogólnych.
---

## Czym jest prompt?

Prompt to instrukcja lub polecenie, które przekazujesz modelowi językowemu (LLM). Może to być proste pytanie, złożone polecenie, a nawet cały kontekst z przykładami. Jakość odpowiedzi, którą otrzymasz od AI, zależy bezpośrednio od tego, jak dobrze sformułujesz swój prompt.

Myśl o prompcie jak o rozmowie z bardzo inteligentnym, ale dosłownym asystentem. Im precyzyjniej opiszesz, czego oczekujesz, tym lepszy wynik otrzymasz.

## Cztery elementy skutecznego prompta

Prompt rozkładam na cztery elementy. Nie w każdym zadaniu potrzebujesz wszystkich - ale warto wiedzieć, którego akurat brakuje:

1. **Instrukcja (Instruction)** - konkretne zadanie lub polecenie dla modelu. To "co" ma zrobić AI. _Przykład: "Sklasyfikuj sentyment tekstu", "Przetłumacz na angielski", "Podsumuj w 3 zdaniach"_
2. **Kontekst (Context)** - informacje zewnętrzne, które pomagają modelowi lepiej zrozumieć zadanie. _Przykład: tło tematu, dodatkowe fakty, rola, którą ma przyjąć AI_
3. **Dane wejściowe (Input Data)** - dane lub pytanie, na które szukasz odpowiedzi. _Przykład: tekst do analizy, dokument do streszczenia, kod do wyjaśnienia_
4. **Wskaźnik wyjścia (Output Indicator)** - typ lub format oczekiwanego wyniku. _Przykład: "Odpowiedź:", "Sentyment:", "JSON:", "Lista punktowana:"_

## Framework CO-STAR - profesjonalna struktura prompta

CO-STAR to sprawdzony framework używany przez profesjonalistów do tworzenia skutecznych promptów. Każda litera oznacza element, który możesz dodać do swojego prompta:

| Litera | Element | Opis | Przykład |
| --- | --- | --- | --- |
| **C** | Context (Kontekst) | Tło sytuacji, informacje o projekcie | "Prowadzę mały sklep online z rękodziełem" |
| **O** | Objective (Cel) | Co chcesz osiągnąć | "Chcę zwiększyć sprzedaż o 20%" |
| **S** | Style (Styl) | Sposób pisania lub podejście | "W stylu przyjaznym i bezpośrednim" |
| **T** | Tone (Ton) | Emocjonalny wydźwięk przekazu | "Entuzjastyczny, ale profesjonalny" |
| **A** | Audience (Odbiorca) | Dla kogo jest tworzona treść | "Kobiety 25-45 lat ceniące unikalne produkty" |
| **R** | Response (Odpowiedź) | Format i struktura oczekiwanego wyniku | "Lista 5 pomysłów z krótkim opisem każdego" |

### Transformacja prompta z CO-STAR

```text
❌ Przed (słaby prompt):
Napisz post na Instagram o moich produktach.
```

```text
✅ Po (z CO-STAR):
[C - Context]
Prowadzę mały sklep online z rękodziełem - sprzedaję ręcznie robioną biżuterię z naturalnych kamieni. Mam 2000 obserwujących na Instagramie.

[O - Objective]
Chcę stworzyć angażujący post promujący nową kolekcję wiosenną i zachęcający do zakupów.

[S - Style]
W stylu przyjaznym i autentycznym, pokazującym kulisy pracy ręcznej.

[T - Tone]
Ciepły, inspirujący, z pasją do rzemiosła.

[A - Audience]
Kobiety 25-45 lat, ceniące unikalne, handmade produkty i świadome zakupy.

[R - Response]
Post na Instagram (max 2200 znaków) z:
- Chwytliwym pierwszym zdaniem
- Historią powstania kolekcji
- Call-to-action
- 5 odpowiednich hashtagów
```

:::note[Wskazówka praktyczna]
Nie musisz używać wszystkich elementów CO-STAR za każdym razem. Dla prostych zadań wystarczy O (cel) i R (format odpowiedzi). Im bardziej złożony wynik potrzebujesz, tym więcej elementów warto dodać.
:::

### CO-STAR w praktyce - przykłady branżowe

**Dla marketera:** C: firma SaaS, produkt do zarządzania projektami, rynek B2B · O: email do leadów, którzy pobrali ebook · S: profesjonalny, ale nie korporacyjny · T: pomocny, ekspercki · A: menedżerowie projektów w firmach 50-200 osób · R: email follow-up, 150-200 słów, z jednym CTA

**Dla nauczyciela:** C: lekcja historii, klasa 7, temat: II wojna światowa · O: quiz sprawdzający zrozumienie materiału · S: przyjazny, dostosowany do wieku uczniów · T: zachęcający, nieoceniający · A: uczniowie 13-14 lat, różny poziom zaawansowania · R: 10 pytań (5 zamkniętych, 5 otwartych) z kluczem odpowiedzi

**Dla programisty:** C: aplikacja React, system rezerwacji, używamy TypeScript · O: komponent formularza rezerwacji z walidacją · S: czysty kod, zgodny z best practices React · T: techniczny, precyzyjny · A: zespół developerów mid-level · R: kod TypeScript z komentarzami, obsługa błędów, testy jednostkowe

## Przykład ewolucji prompta

Pokażę Ci na jednym zdaniu, jak stopniowe dodawanie elementów zmienia odpowiedź:

```text
Prosty prompt (słaby):
Niebo jest
```

**Odpowiedź AI:** "niebieskie." - Model nie wie, czego od niego oczekujesz.

```text
Z instrukcją (lepszy):
Dokończ zdanie: Niebo jest
```

**Odpowiedź AI:** "niebieskie w dzień i ciemne w nocy." - Jasna instrukcja daje lepszy wynik.

```text
Pełny prompt (najlepszy):
Dokończ poniższe zdanie w stylu poetyckim, używając metafory.

Zdanie: Niebo jest

Styl: poetycki z metaforą
```

**Odpowiedź AI:** "Niebo jest płótnem, na którym słońce maluje codziennie nowy obraz nadziei."

## Formaty promptów

Na początek wystarczą Ci trzy formaty: **format prosty** (bezpośrednie pytanie lub instrukcja), **format Q&A** (struktura "Q: pytanie / A:" wymuszająca odpowiedź) oraz **format z separatorami** (oddzielanie sekcji prompta za pomocą ### lub ---).

Szczegółowe omówienie formatów (JSON, XML, tabele, szablony i inne) znajdziesz w rozdziale [Strukturyzacja danych w promptach](/prompt-engineering/schematy/).

## Pięć zasad projektowania promptów

**1. Zacznij prosto, rozbudowuj stopniowo.** Nie próbuj od razu tworzyć skomplikowanych promptów. Zacznij od prostej wersji i dodawaj elementy iteracyjnie. Jeśli zadanie jest złożone, rozbij je na mniejsze podzadania.

**2. Używaj jasnych, konkretnych instrukcji.** Stosuj polecenia takie jak: **Napisz** (do generowania treści), **Sklasyfikuj** (do kategoryzacji), **Podsumuj** (do streszczeń), **Przetłumacz** (do tłumaczeń), **Wyodrębnij** (do ekstrakcji informacji). Umieszczaj instrukcje na początku prompta i oddzielaj je od kontekstu separatorami (np. ###, ---, lub pustymi liniami).

**3. Bądź konkretny co do formatu.** Im bardziej opisowy i szczegółowy prompt, tym lepsze wyniki. Podawaj konkretny format i przykłady:

```text
Wyodrębnij nazwy miejsc z poniższego tekstu.

Oczekiwany format:
Miejsca: <lista oddzielona przecinkami>

Tekst: Podróżowałem z Warszawy do Krakowa,
a potem odwiedziłem Gdańsk i Wrocław.

Miejsca:
```

**4. Unikaj niedoprecyzowania.** Zamiast mówić, czego AI nie powinno robić, precyzyjnie określ, czego oczekujesz. Źle: "Nie bądź zbyt opisowy". Dobrze: "Użyj 2-3 zdań do wyjaśnienia koncepcji".

**5. Działanie zamiast negacji.** Skup się na tym, co model MA robić, nie czego NIE powinien. Źle: "NIE pytaj użytkownika o preferencje filmowe". Dobrze: "Agent rekomenduje filmy z topowych trendów globalnych, bazując na gatunku podanym przez użytkownika".

## Praktyczne przykłady zastosowań

**Streszczanie tekstu:**

```text
Wyjaśnij, czym są antybiotyki, w jednym zdaniu
dla osoby bez wykształcenia medycznego.

Odpowiedź:
```

**Ekstrakcja informacji:**

```text
Zidentyfikuj produkt AI wymieniony w poniższym akapicie.

Akapit: OpenAI wprowadziło ChatGPT w listopadzie 2022 roku.
Narzędzie szybko zdobyło miliony użytkowników na całym świecie
i zmieniło sposób, w jaki ludzie myślą o sztucznej inteligencji.

Produkt:
```

**Klasyfikacja sentymentu:**

```text
Sklasyfikuj sentyment tekstu jako: neutralny, negatywny lub pozytywny.

Tekst: Jedzenie było całkiem w porządku.

Sentyment:
```

**Odpowiadanie na pytania (QA):**

```text
Odpowiedz na pytanie, bazując wyłącznie na podanym kontekście.

Kontekst: Python został stworzony przez Guido van Rossuma
i po raz pierwszy wydany w 1991 roku. Nazwa pochodzi od
grupy komediowej Monty Python, nie od węża.

Pytanie: Skąd pochodzi nazwa języka Python?

Odpowiedź:
```

## Najczęstsze błędy początkujących

:::danger[Zbyt ogólne instrukcje]
"Napisz coś o marketingu" vs "Napisz 5 strategii marketingowych dla małego e-commerce z budżetem do 5000 zł miesięcznie"
:::

:::danger[Brak kontekstu]
"Popraw ten tekst" vs "Popraw poniższy tekst pod kątem gramatyki i stylu. Tekst ma być formalny i przeznaczony dla klientów biznesowych."
:::

:::danger[Niejednoznaczne oczekiwania]
"Krótka odpowiedź" vs "Odpowiedz w maksymalnie 2 zdaniach"
:::

## Podsumowanie

Podstawy promptowania to fundament, na którym budujesz wszystkie zaawansowane techniki. Pamiętaj:

- Prompt składa się z: instrukcji, kontekstu, danych wejściowych i wskaźnika wyjścia
- Zacznij prosto i rozbudowuj iteracyjnie
- Bądź konkretny i precyzyjny
- Określaj format oczekiwanego wyniku
- Mów, co AI ma robić, nie czego ma nie robić

:::note[Teraz wiesz]

- Jak zbudować prompt z czterech elementów: instrukcja, kontekst, dane wejściowe i wskaźnik wyjścia
- Jak używać frameworka CO-STAR do tworzenia profesjonalnych promptów biznesowych
- Jakich pięciu zasad się trzymać: zacznij prosto, bądź konkretny, określ format, unikaj negacji i iteruj

**Następny krok:** [Techniki promptowania](/prompt-engineering/techniki/) - nauczysz się trzech fundamentalnych technik: zero-shot, few-shot i chain-of-thought, które pozwolą Ci radzić sobie z coraz trudniejszymi zadaniami.
:::

---
title: Prywatność i dane w AI - bezpieczeństwo, polityki, RODO
description: Jak chronić prywatność korzystając z AI - polityki danych firm AI, RODO, anonimizacja, bezpieczeństwo informacji.
sidebar:
  label: 'Prywatność i dane'
  order: 2
educationalLevel: Intermediate
teaches:
  - Bezpieczeństwo danych w AI
  - RODO a sztuczna inteligencja
  - Jak chronić prywatność korzystając z AI
about:
  - name: Ochrona danych osobowych
    sameAs: https://pl.wikipedia.org/wiki/Ochrona_danych_osobowych
  - name: RODO
    sameAs: https://pl.wikipedia.org/wiki/Og%C3%B3lne_rozporz%C4%85dzenie_o_ochronie_danych
faq:
  - q: Czy AI gromadzi moje dane?
    a: Tak, większość chatbotów AI domyślnie zapisuje konwersacje. Można to wyłączyć w ustawieniach. Nie podawaj danych osobowych, poufnych informacji firmowych ani haseł w rozmowach z AI.
---

## Dane - paliwo AI

Korzystając z narzędzi AI, dzielisz się danymi - tekstami, dokumentami, czasem wrażliwymi informacjami. Gdzie trafiają te dane? Kto ma do nich dostęp? Czy są używane do treningu modeli? W tym rozdziale wyjaśniam, jak to działa u największych dostawców i co możesz zrobić, żeby ograniczyć ryzyko.

## Jak firmy AI wykorzystują Twoje dane?

**Typowe zastosowania:** generowanie odpowiedzi (dane przetwarzane w celu udzielenia odpowiedzi - oczywiste), trening modeli (Twoje rozmowy mogą być użyte do ulepszania AI), moderacja (sprawdzanie czy nie łamiesz regulaminu), analityka (statystyki użycia, poprawa produktu), przechowywanie (historia rozmów na Twoim koncie).

:::caution[Kluczowe pytanie]
Czy Twoje dane są używane do treningu modeli? To różni się między dostawcami i planami (darmowy vs. płatny vs. enterprise).
:::

## Polityki głównych dostawców

**OpenAI (ChatGPT):**

| Plan | Dane do treningu? | Retencja |
| --- | --- | --- |
| Free | Tak (domyślnie) | 30 dni |
| Plus | Tak (można wyłączyć) | 30 dni |
| Team | Nie | 30 dni |
| Enterprise | Nie | Konfigurowalne |
| API | Nie (domyślnie) | 30 dni (logs) |

<small>Źródło: OpenAI Privacy Policy. Zawsze sprawdzaj aktualne polityki.</small>

**Anthropic (Claude):** Consumer (dane mogą być używane do treningu, można opt-out), Pro (dane mogą być używane, można opt-out), API (dane NIE są używane do treningu), Enterprise (pełna kontrola, dane nie używane).

**Google (Gemini):** Free Gemini (dane używane do ulepszania produktów), Workspace (dane nie używane do treningu), API/Vertex AI (dane nie używane do treningu).

**Microsoft (Copilot):** Consumer (dane mogą być używane), Copilot for M365 (dane w Twojej chmurze, nie do treningu), Azure OpenAI (dane nie używane do treningu).

## Jak wyłączyć trening na Twoich danych?

**ChatGPT:** 1. Otwórz Settings. 2. Data Controls. 3. Wyłącz "Improve the model for everyone". Uwaga: wyłączenie oznacza też brak historii rozmów!

**Claude:** 1. Otwórz Settings. 2. Privacy. 3. Opt-out z treningu.

**Gemini:** Gemini Apps Activity - można wyłączyć w ustawieniach Google. Dostępna też kontrola retencji danych.

## RODO i AI

**Twoje prawa:** prawo dostępu (możesz żądać kopii swoich danych), prawo do usunięcia (możesz żądać usunięcia danych), prawo do sprzeciwu (możesz sprzeciwić się przetwarzaniu), prawo do przenoszenia (możesz zażądać eksportu danych).

**Obowiązki firm:** informowanie o przetwarzaniu danych, uzyskanie zgody na przetwarzanie, minimalizacja danych, zabezpieczenie danych.

:::note[Włochy vs. ChatGPT]
W 2023 Włochy czasowo zablokowały ChatGPT za naruszenia RODO. OpenAI musiało wprowadzić zmiany: weryfikację wieku, informacje o przetwarzaniu, możliwość opt-out.
:::

## Operacyjna checklista bezpieczeństwa RODO

Użyj tej checklisty PRZED każdym użyciem AI z danymi firmowymi lub osobowymi. Opracowana na podstawie wytycznych UODO i PCPD.

**Przed wprowadzeniem danych do AI:**

- **Weryfikacja narzędzia:** czy używasz narzędzia autoryzowanego przez firmę? Czy ma ono politykę "Zero Data Retention" dla Enterprise?
- **Filtr danych osobowych:** czy wpisujesz imiona, nazwiska, PESEL, adresy lub dane medyczne? Zasada: nigdy nie wpisuj danych osobowych do publicznych modeli AI.
- **Filtr tajemnic przedsiębiorstwa:** czy wklejasz strategię firmy, niepublikowane wyniki finansowe, hasła, klucze API lub kod źródłowy?
- **Zgoda podmiotów:** jeśli analizujesz dane klientów - czy masz na to ich zgodę zgodną z RODO?
- **Anonimizacja:** czy zanonimizowałeś dane przed wysłaniem? (np. "Firma Budimex" → "Firma Budowlana A", "Jan Kowalski" → "Klient 1")

**Klasyfikacja ryzyka:**

| Typ danych | Ryzyko | Działanie |
| --- | --- | --- |
| Dane publiczne, ogólne pytania | Niskie | Można używać dowolnego AI |
| Dokumenty wewnętrzne (bez danych osobowych) | Średnie | Preferuj Enterprise lub anonimizuj |
| Dane osobowe, dane finansowe | Wysokie | Tylko Enterprise z DPA lub lokalne AI |
| Dane wrażliwe (zdrowie, poglądy, orientacja) | Krytyczne | NIE UŻYWAJ publicznego AI |

:::danger[Przykład naruszenia]
Pracownik HR wkleja do darmowego ChatGPT CV kandydatów z pełnymi danymi osobowymi. To naruszenie RODO - dane osobowe trafiły do systemu zewnętrznego bez podstawy prawnej i potencjalnie do treningu modelu.
:::

## Co NIE wklejać do AI?

:::caution[Cztery kategorie, których nie wklejaj]

- **Dane osobowe** - imiona, nazwiska, adresy, PESEL, numery dokumentów, dane medyczne, dane finansowe osób trzecich
- **Tajemnice firmowe** - kod źródłowy (bez zgody), plany strategiczne, dane finansowe firmy, informacje o klientach
- **Dane dostępowe** - hasła, klucze API, tokeny, certyfikaty, connection strings
- **Informacje poufne** - umowy NDA, dokumenty prawne z danymi stron, korespondencja poufna

:::

## Techniki anonimizacji

**Zamiana danych:**

```text
Przed anonimizacją:
Jan Kowalski z firmy ABC Sp. z o.o.
(NIP: 123-456-78-90) zamówił 1000 sztuk
produktu X za 50 000 PLN.
```

```text
Po anonimizacji:
Klient A z firmy Firma B zamówił
[ilość] sztuk produktu [nazwa]
za [kwota] PLN.
```

**Techniki:** pseudonimizacja (zamiana na fikcyjne nazwy), generalizacja ("50 000 PLN" → "duże zamówienie"), usunięcie (pominięcie zbędnych szczegółów), abstrakcja (opisz problem bez konkretnych danych).

```text
Zamiast: "Jak napisać umowę dla Jana Kowalskiego
na dostawę 1000 rowerów za 500 000 PLN?"

Napisz: "Jak napisać umowę dostawy towarów B2B?
Jakie klauzule są standardowe?"
```

## Bezpieczeństwo w firmie

**Polityka korzystania z AI.** Firma powinna mieć jasne wytyczne: które narzędzia AI są dozwolone? Jakie dane można przetwarzać? Kto weryfikuje output AI? Jak raportować incydenty?

**Rozwiązania enterprise:** Azure OpenAI (dane w Twojej chmurze), ChatGPT Enterprise (izolacja danych, SOC 2), Claude for Business (kontrola nad danymi), lokalne modele (Llama na własnych serwerach).

:::tip[Checklist bezpieczeństwa przed użyciem AI w firmie]

1. Sprawdź politykę prywatności dostawcy
2. Oceń czy dane mogą być przetwarzane zewnętrznie
3. Skonfiguruj opt-out z treningu
4. Przeszkol pracowników z anonimizacji
5. Ustal proces weryfikacji outputu
6. Rozważ rozwiązanie enterprise

:::

## Lokalne modele AI

Jeśli prywatność jest krytyczna, rozważ modele działające lokalnie.

**Opcje:** Ollama (łatwe uruchamianie modeli lokalnie), LM Studio (GUI do lokalnych modeli), llama.cpp (wydajne uruchamianie na CPU), modele: Llama, Mistral, Phi, Gemma.

Chcesz spróbować? [Jak to zrobić krok po kroku](/suwerenne-ai/ai-na-wlasnym-komputerze/).

**Wymagania:** GPU z min. 8 GB VRAM (dla mniejszych modeli - orientacyjne wymagania znajdziesz w podlinkowanym artykule), 16-32GB RAM, szybki dysk SSD.

**Kompromisy:** jakość niższa niż GPT-4/Claude (ale rośnie!), wymaga technicznej wiedzy, potrzebny mocny sprzęt. Ale: pełna prywatność, zero kosztów API.

## AI Act - regulacje EU

AI Act to europejskie rozporządzenie regulujące AI.

<!-- TODO(Łukasz): zweryfikuj aktualny stan prawny przed publikacją -->

**Kluczowe elementy:** klasyfikacja ryzyka (AI podzielone na kategorie ryzyka), przejrzystość (obowiązek informowania o użyciu AI), dane treningowe (wymogi dot. jakości i dokumentacji), prawa autorskie (kwestie treści generowanych przez AI).

**Co to oznacza dla użytkowników?** Większa przejrzystość co do tego, jak działają systemy AI, prawo do informacji, gdy masz do czynienia z AI, oraz ochrona przed dyskryminującymi systemami AI.

## Praktyczne zalecenia

1. **Zasada minimum danych** - podawaj tylko tyle danych, ile AI potrzebuje do wykonania zadania. Nie wklejaj całych dokumentów, gdy wystarczy fragment.
2. **Anonimizuj domyślnie** - nawyk zamiany prawdziwych danych na fikcyjne. To nic nie kosztuje, a chroni przed wyciekiem.
3. **Czytaj polityki prywatności** - nudne, ale ważne. Zwłaszcza sekcje o treningu modeli i retencji danych.
4. **Używaj kont firmowych** - dla pracy używaj konta służbowego/enterprise, nie prywatnego. Lepsza kontrola i ochrona.

## Podsumowanie

- **Dane do treningu** - zależy od planu i dostawcy, można często opt-out
- **RODO** - masz prawa, firmy mają obowiązki
- **Co nie wklejać** - dane osobowe, tajemnice, hasła, poufne info
- **Anonimizacja** - pseudonimizacja, generalizacja, abstrakcja
- **Enterprise** - rozwiązania z gwarancjami prywatności
- **Lokalne modele** - opcja dla maksymalnej prywatności

Prywatność to Twoja odpowiedzialność. Narzędzia AI są potężne, ale wymagają świadomego korzystania. Traktuj każdą wklejoną informację jakby miała być publiczna.

:::note[Teraz wiesz]

- Jak różnią się polityki prywatności dostawców AI (OpenAI, Anthropic, Google, Microsoft) w zależności od planu - darmowy vs enterprise
- Jak chronić poufne dane: anonimizacja, pseudonimizacja, zasada minimum danych i opt-out z treningu modeli
- Jakie masz prawa w ramach RODO i kiedy rozważyć lokalne modele AI (Ollama, LM Studio) dla maksymalnej prywatności

**Następny krok:** [Przyszłość AI](/etyka/przyszlosc-ai/) - poznasz najważniejsze trendy: multimodalność, agenci AI, ścieżka do AGI i scenariusze przyszłości - od optymistycznych po pesymistyczne.
:::

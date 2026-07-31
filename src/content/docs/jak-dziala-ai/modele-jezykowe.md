---
title: Modele językowe LLM - GPT, Claude, Gemini i inne
description: Zrozum jak działają duże modele językowe (LLM). Poznaj architekturę Transformer, najpopularniejsze modele i ich zastosowania w praktyce.
sidebar:
  label: 'Modele językowe LLM'
  order: 4
educationalLevel: Intermediate
teaches:
  - Czym są duże modele językowe (LLM)
  - Jak działają GPT, Claude i Gemini
  - Porównanie modeli językowych
about:
  - name: Duży model językowy
    sameAs: https://pl.wikipedia.org/wiki/Du%C5%BCy_model_j%C4%99zykowy
mentions:
  - name: GPT-4
    sameAs: https://en.wikipedia.org/wiki/GPT-4
    type: SoftwareApplication
  - name: Claude
    sameAs: https://en.wikipedia.org/wiki/Claude_(language_model)
    type: SoftwareApplication
  - name: Gemini
    sameAs: https://en.wikipedia.org/wiki/Gemini_(language_model)
    type: SoftwareApplication
  - name: OpenAI
    sameAs: https://en.wikipedia.org/wiki/OpenAI
    type: Organization
  - name: Anthropic
    sameAs: https://en.wikipedia.org/wiki/Anthropic
    type: Organization
  - name: Google
    sameAs: https://en.wikipedia.org/wiki/Google
    type: Organization
faq:
  - q: Czym jest LLM?
    a: LLM (Large Language Model) to duży model językowy - system AI wytrenowany na ogromnych zbiorach tekstu, który potrafi rozumieć i generować tekst w języku naturalnym.
  - q: Który model językowy jest najlepszy?
    a: Nie ma jednego najlepszego modelu - zależy od zastosowania. GPT i Claude wyróżniają się w rozumowaniu i pracy z kodem, Gemini w pracy z danymi Google, a modele o otwartych wagach dają pełną kontrolę i możliwość uruchomienia na własnym sprzęcie.
---

![Wielka świetlista kula utkana z tysięcy słów - duży model językowy](../../../assets/jak-dziala-ai/modele-jezykowe/modele-jezykowe.jpg)

:::note[W skrócie]
Duże modele językowe (LLM) to systemy AI wytrenowane na bilionach słów, które przewidują kolejne tokeny w tekście. Architektura Transformer (2017) umożliwiła skalowanie do setek miliardów parametrów. Na rynku dominują GPT-5.6 (OpenAI), Claude Opus 5 / Sonnet 5 / Fable 5 (Anthropic), Gemini 3.1 Pro (Google) oraz otwartowagowe DeepSeek V4 i Llama 4. Modele osiągają wyniki bliskie ekspertom w testach prawniczych, medycznych i programistycznych.
:::

## Czym są modele językowe?

**Duże modele językowe** (Large Language Models, LLM) to systemy AI wytrenowane na ogromnych ilościach tekstu, które potrafią rozumieć i generować język naturalny. To one stoją za ChatGPT, Claude, Gemini i innymi narzędziami, które rewolucjonizują pracę z tekstem.

Termin "duży" odnosi się do liczby parametrów - wewnętrznych wag sieci neuronowej, które model dostosowuje podczas treningu. GPT-3 miał 175 miliardów parametrów (2020), a najnowsze modele prawdopodobnie przekraczają bilion, choć producenci często nie ujawniają dokładnych liczb.

W tym rozdziale wyjaśniam, co siedzi pod maską tych narzędzi - na tyle dokładnie, żebyś rozumiał, skąd biorą się ich mocne strony i skąd błędy, ale bez wchodzenia w matematykę.

## Jak działają LLM?

Na najprostszym poziomie, model językowy to system, który przewiduje następne słowo (lub token) na podstawie poprzednich. Brzmi prosto, ale z tej prostej zasady wyłaniają się niezwykle złożone zdolności - od pisania esejów po rozwiązywanie zadań programistycznych.

:::note[Analogia]
Wyobraź sobie grę w uzupełnianie zdań: "Pada deszcz, więc wziąłem..." - prawdopodobnie odpowiesz "parasol" lub "kurtkę". LLM robi to samo, ale na skalę miliardów przykładów i z precyzją statystyczną, rozpatrując ~100 000 możliwych kolejnych tokenów jednocześnie.
:::

### Trening na ogromnych danych

LLM trenowane są na bilionach słów z internetu, książek, artykułów naukowych, kodu źródłowego i innych źródeł. Model [Llama 2 (2023)](https://arxiv.org/abs/2307.09288) był trenowany na 2 bilionach tokenów, a nowsze modele używają jeszcze większych zbiorów - szacunkowo 10-15 bilionów tokenów. Dzięki temu model "widział" niemal każdy możliwy wzorzec językowy.

### Architektura Transformer

Przełomem, który umożliwił powstanie nowoczesnych LLM, była architektura **Transformer**, przedstawiona w 2017 roku przez badaczy Google w pracy ["Attention Is All You Need"](https://arxiv.org/abs/1706.03762) (Vaswani i in.).

Zatrzymaj się na chwilę przy trzech poniższych punktach - to one tłumaczą, dlaczego akurat po 2017 roku wszystko przyspieszyło.

Kluczowe innowacje Transformer:

- **Mechanizm uwagi (Self-Attention)** - model "zwraca uwagę" na różne części tekstu w zależności od kontekstu. Każdy token może komunikować się z każdym innym tokenem w sekwencji
- **Równoległe przetwarzanie** - w przeciwieństwie do wcześniejszych modeli rekurencyjnych (RNN/LSTM), Transformer przetwarza całe zdanie naraz, co radykalnie przyspiesza trening
- **Skalowalność** - architektura efektywnie skaluje się do setek miliardów parametrów. Badania ["Scaling Laws" (Kaplan i in., 2020)](https://arxiv.org/abs/2001.08361) wykazały, że wydajność modeli rośnie przewidywalnie z rozmiarem

### RLHF - dostrajanie na podstawie ludzkiej oceny

To etap, który najczęściej umyka w opisach LLM, a bez niego nie byłoby ChatGPT w formie, którą znasz. Sam pre-trening na tekstach daje model, który potrafi uzupełniać tekst, ale nie jest dobrym asystentem. Dlatego modele takie jak ChatGPT przechodzą dodatkowy etap - **RLHF** (Reinforcement Learning from Human Feedback):

1. **Supervised Fine-Tuning (SFT)** - model uczy się na przykładach wysokiej jakości rozmów napisanych przez ludzi
2. **Reward Model** - ludzie oceniają pary odpowiedzi, a osobna sieć uczy się odróżniać dobre odpowiedzi od słabych
3. **Optymalizacja RL** - model jest trenowany tak, by maksymalizować ocenę reward modelu, jednocześnie nie odchodząc zbyt daleko od bazowej wersji

Anthropic rozwinął tę metodologię w **RLAIF** (Constitutional AI), gdzie oceny generuje inny model AI zamiast ludzi, a zbiór reguł etycznych pełni rolę "konstytucji".

## Przegląd głównych modeli językowych

### Rodzina GPT (OpenAI)

**GPT** (Generative Pre-trained Transformer) to seria modeli od OpenAI, która zapoczątkowała rewolucję LLM w listopadzie 2022 roku z wydaniem ChatGPT.

| Model | Rok | Kontekst | Kluczowe cechy |
| --- | --- | --- | --- |
| GPT-3.5 | 2022 | 4K / 16K | Podstawa pierwszego ChatGPT |
| GPT-4 | 2023 | 8K / 128K | Multimodalny (tekst + obraz), skok jakości rozumowania |
| GPT-4o | 2024 | 128K | Natywna multimodalność (tekst, obraz, audio), szybszy i tańszy |
| o1 / o3 | 2024-2025 | 200K | Modele "rozumujące" - wewnętrzny chain-of-thought przed odpowiedzią |
| GPT-5 | 2025 | 400K | Zunifikowanie linii klasycznej i rozumującej |
| GPT-5.6 | 2026 | ~1M | Aktualna generacja: Sol (flagowy), Terra (zbalansowany), Luna (ekonomiczny) |

<small>Źródło: [OpenAI Models Documentation](https://developers.openai.com/api/docs/models). Modele z pierwszych czterech wierszy zostały już wycofane z ChatGPT.</small>

### Claude (Anthropic)

**Claude** to seria modeli od [Anthropic](https://claude.com), firmy założonej przez byłych pracowników OpenAI (Dario i Danielę Amodei). Wyróżnia się naciskiem na bezpieczeństwo (podejście Constitutional AI) oraz bardzo dużym oknem kontekstowym. Aktualna, piąta generacja to Claude Opus 5, Claude Sonnet 5 i Claude Fable 5 - wszystkie z oknem kontekstu **1 mln tokenów**. Najmniejszy i najtańszy model rodziny to Claude Haiku 4.5.

<small>Źródło: [Anthropic Models Documentation](https://platform.claude.com/docs/en/about-claude/models/overview)</small>

### Gemini (Google DeepMind)

**Gemini** to odpowiedź Google na GPT. Natywnie multimodalny - trenowany na tekście, obrazach, audio i wideo jednocześnie. Wyróżnia się dużym oknem kontekstowym. Aktualna linia to generacja 3.x: flagowy Gemini 3.1 Pro (z trybem głębokiego rozumowania Deep Think) oraz szybkie i tańsze modele Flash, z oknem kontekstu 1 mln tokenów.

<small>Źródło: [Google AI Models Documentation](https://ai.google.dev/gemini-api/docs/models)</small>

### DeepSeek (Chiny)

**DeepSeek** to chiński startup, który w styczniu 2025 roku zszokował branżę modelem [DeepSeek-R1](https://arxiv.org/abs/2501.12948) - osiągającym wyniki na poziomie ówczesnej czołówki przy ułamku kosztów treningu (szacunkowo 5,6 mln USD wobec setek milionów dolarów u konkurencji). Wykorzystuje architekturę Mixture of Experts (MoE), w której na każde zapytanie uruchamia się tylko część modelu. Aktualna generacja to **DeepSeek V4** (kwiecień 2026) w wariantach Pro i Flash, z oknem kontekstu 1 mln tokenów i wagami udostępnionymi publicznie na licencji MIT.

### Modele o otwartych wagach

To obszar, w którym w ostatnim roku sporo się przestawiło - i warto wiedzieć, w którą stronę. **DeepSeek V4** (licencja MIT) i modele **Mistral AI** - Mistral Large 3, Small 4 oraz kompaktowa rodzina Ministral 3 na [licencji Apache 2.0](https://mistral.ai/news/mistral-3/) - są dziś w pełni otwarte. **Llama 4** (Meta, 2025) w wariantach Scout i Maverick nadal jest dostępna publicznie, ale to ostatnia otwarta generacja Meta: nowa flagowa linia firmy jest zamknięta i dostępna wyłącznie przez API. Podobnie przesunęła się Alibaba - mniejsze modele **Qwen** wychodzą na Apache 2.0, ale flagowce już nie. **Phi-4** (Microsoft) pozostaje otwarty na licencji MIT.

W tym gronie są też polskie modele - **Bielik** (SpeakLeash) i **PLLuM** (NASK) - [więcej o polskich modelach](/suwerenne-ai/bielik-i-polskie-modele/).

:::note[Uwaga na słowo "otwarty"]
"Otwarte wagi" nie zawsze znaczy "otwarte oprogramowanie". Licencje Apache 2.0 i MIT są w pełni liberalne, ale część modeli - w tym Llama - wychodzi na licencji społecznościowej z ograniczeniami, której organizacja Open Source Initiative nie uznaje za open source. Jeśli budujesz na tym produkt komercyjny, przeczytaj licencję zamiast ufać etykiecie.
:::

## Porównanie czołowych modeli

| Model | Producent | Kontekst | Otwarte wagi | Mocne strony |
| --- | --- | --- | --- | --- |
| **GPT-5.6 Sol** | OpenAI | ~1M | Nie | Wszechstronność, multimodalność, ekosystem |
| **Claude Opus 5** | Anthropic | 1M | Nie | Bezpieczeństwo, coding, długie dokumenty |
| **Claude Fable 5** | Anthropic | 1M | Nie | Najtrudniejsze zadania, głębokie rozumowanie |
| **Gemini 3.1 Pro** | Google | 1M | Nie | Integracja Google, multimodalność, wideo |
| **DeepSeek V4** | DeepSeek | 1M | Tak (MIT) | Niska cena API, MoE, wydajność |
| **Llama 4 Maverick** | Meta | 1M | Tak (z ograniczeniami) | Darmowy, MoE, do wdrożeń on-premise |

<small>Ranking oparty na [Arena AI](https://arena.ai/) (niezależny benchmark oparty na głosowaniu użytkowników, dawniej LMSYS Chatbot Arena) oraz oficjalnej dokumentacji producentów.</small>

Na co tu naprawdę patrzeć: na kolumny "Kontekst" i "Mocne strony", a nie na kolejność wierszy. Układ czołówki zmienia się z każdym wydaniem, a dla Twojej pracy więcej znaczy dopasowanie modelu do zadania niż jego miejsce w rankingu.

## Co potrafią modele językowe?

Możliwości LLM systematycznie rosną. Już w 2023 r. GPT-4 zdał egzamin adwokacki (bar exam), plasując się w top 10% zdających ([OpenAI, 2023](https://arxiv.org/abs/2303.08774)). W tym samym roku Gemini 1.0 Ultra jako pierwszy model przekroczył wynik ludzkich ekspertów na benchmarku MMLU (57 dyscyplin akademickich). Kluczowe obszary zastosowań:

- **Generowanie tekstu** - artykuły, e-maile, raporty, kreatywne pisanie, streszczenia dokumentów
- **Analiza i zrozumienie** - sentyment, ekstrakcja danych, klasyfikacja, podsumowywanie
- **Tłumaczenie** - ponad 100 języków, w tym specjalistyczne i idiomatyczne konteksty
- **Programowanie** - generowanie kodu, debugging, code review, konwersja między językami
- **Rozumowanie** - matematyka, logika, analiza argumentów, planowanie; dzisiejsze modele rozumujące (GPT-5.6 Sol, Claude Fable 5, Gemini 3.1 Deep Think) osiągają wyniki na poziomie doktorantów w naukach ścisłych
- **Agenci AI** - trend 2025-2026: modele działające autonomicznie, wykonujące wieloetapowe zadania (przeglądanie internetu, obsługa narzędzi, planowanie)

## Ograniczenia modeli językowych

Do tej sekcji wracaj częściej niż do tabel powyżej. Możliwości modeli poznasz po kilku dniach używania - ograniczenia potrafią Cię zaskoczyć jeszcze po roku.

- **Halucynacje** - LLM mogą generować przekonująco brzmiące, ale całkowicie nieprawdziwe informacje. W rankingu [Vectara Hallucination Leaderboard](https://github.com/vectara/hallucination-leaderboard), który mierzy zmyślanie przy streszczaniu podanego dokumentu, nawet czołowe modele "halucynują" w kilku procentach odpowiedzi
- **Brak wiedzy po dacie treningu** - model nie wie o wydarzeniach po swojej dacie "odcięcia", chyba że ma dostęp do internetu (RAG) lub narzędzi
- **Brak prawdziwego rozumienia** - LLM przetwarzają wzorce statystyczne, nie "rozumieją" świata jak ludzie
- **Ograniczone okno kontekstowe** - choć okna rosną (od 4K do 1M tokenów w czołówce, a w Llama 4 Scout nawet 10M), efektywność przetwarzania spada przy bardzo długich kontekstach ([efekt "Lost in the Middle"](https://arxiv.org/abs/2307.03172))
- **Bias i uprzedzenia** - modele dziedziczą uprzedzenia z danych treningowych. Producenci stosują techniki debiasingu, ale problem nie jest w pełni rozwiązany

## Jak wybierać model?

Radzę zacząć od pytania o zadanie, a nie o nazwę modelu. Wybór zależy od tego, co masz do zrobienia, od budżetu i od wymagań prywatności:

| Potrzeba | Rekomendowany model | Dlaczego |
| --- | --- | --- |
| Ogólne zadania tekstowe | GPT-5.6 / Claude Sonnet 5 | Najlepsza wszechstronność |
| Analiza długich dokumentów | Claude Opus 5 / Gemini 3.1 Pro | Milionowe okno kontekstu |
| Praca z obrazami/wideo | GPT-5.6 / Gemini 3.1 Pro | Natywna multimodalność |
| Programowanie | Claude Sonnet 5 / GPT-5.6 | Liderzy w benchmarkach kodowania |
| Zaawansowana matematyka/nauka | Claude Fable 5 / Gemini 3.1 Deep Think | Modele rozumujące |
| Ograniczony budżet API | DeepSeek V4 / modele ekonomiczne | Najniższy koszt za token |
| Prywatność / on-premise | Llama 4 / Mistral | Otwarte wagi, pełna kontrola |

Nie komplikuj tego na starcie. Przez pierwsze tygodnie pracy z AI spokojnie wystarczy jeden model z górnej półki - do dobierania narzędzia pod konkretne zadanie wrócisz wtedy, gdy zaczniesz uderzać w jego ograniczenia.

## Źródła i dalsze lektury

- [Vaswani i in. "Attention Is All You Need" (2017)](https://arxiv.org/abs/1706.03762) - praca opisująca architekturę Transformer
- [OpenAI "GPT-4 Technical Report" (2023)](https://arxiv.org/abs/2303.08774) - raport techniczny o możliwościach GPT-4
- [DeepSeek-R1 Technical Report (2025)](https://arxiv.org/abs/2501.12948) - architektura i wyniki DeepSeek-R1
- [Arena AI](https://arena.ai/) - niezależny ranking modeli AI oparty na głosowaniu użytkowników (dawniej LMSYS Chatbot Arena)
- [Stanford HAI AI Index 2024](https://hai.stanford.edu/research/ai-index-report) - kompleksowy raport o stanie sztucznej inteligencji

:::note[Teraz wiesz]

- Jak działają LLM - przewidują kolejne tokeny dzięki architekturze Transformer i mechanizmowi uwagi, a RLHF czyni je pomocnymi asystentami
- Jakie modele dominują na rynku - GPT-5.6, Claude 5, Gemini 3.1, DeepSeek V4, Llama 4 - i czym się różnią
- Jakie są realne ograniczenia LLM - halucynacje (kilka procent odpowiedzi nawet w czołówce), ograniczone okno kontekstowe, brak wiedzy po dacie treningu
- Jak dobrać model do zadania - od analizy dokumentów (Claude/Gemini) po coding (Claude/GPT) i rozumowanie (Claude Fable 5 / Gemini 3.1 Deep Think)

**Następny krok:** [Modele rozumujące](/jak-dziala-ai/modele-rozumujace/) - dowiesz się, co naprawdę robi przycisk "myślenia" w chatbocie, kiedy go włączać i dlaczego odpowiedź trwa wtedy dłużej.
:::

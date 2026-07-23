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
    a: Nie ma jednego najlepszego modelu - zależy od zastosowania. GPT-4 i Claude wyróżniają się w rozumowaniu, Gemini w pracy z danymi Google, a modele open source oferują pełną kontrolę.
---

:::note[W skrócie]
Duże modele językowe (LLM) to systemy AI wytrenowane na bilionach słów, które przewidują kolejne tokeny w tekście. Architektura Transformer (2017) umożliwiła skalowanie do setek miliardów parametrów. Na rynku dominują GPT-4.1/o3 (OpenAI), Claude Opus/Sonnet 4 (Anthropic), Gemini 2.5 (Google), Llama 4 (Meta) i DeepSeek-V3. Modele osiągają wyniki bliskie ekspertom w testach prawniczych, medycznych i programistycznych.
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

LLM trenowane są na bilionach słów z internetu, książek, artykułów naukowych, kodu źródłowego i innych źródeł. Model [Llama 2 (2023)](https://arxiv.org/abs/2302.13971) był trenowany na 2 bilionach tokenów, a nowsze modele używają jeszcze większych zbiorów - szacunkowo 10-15 bilionów tokenów. Dzięki temu model "widział" niemal każdy możliwy wzorzec językowy.

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
| GPT-4.1 | 2025 | 1M | Następca GPT-4o, milionowe okno kontekstowe |

<small>Źródło: [OpenAI Models Documentation](https://platform.openai.com/docs/models)</small>

### Claude (Anthropic)

**Claude** to seria modeli od [Anthropic](https://www.anthropic.com), firmy założonej przez byłych pracowników OpenAI (Daria i Danielę Amodei). Wyróżnia się naciskiem na bezpieczeństwo (podejście Constitutional AI) oraz dużym oknem kontekstowym: Claude 3 Haiku (2024, szybki i ekonomiczny), Claude 3.5 Sonnet (2024, przełomowy stosunek jakości do ceny, lider w kodowaniu), Claude Sonnet 4 / Opus 4 (2025, 200K kontekst, zaawansowane rozumowanie).

<small>Źródło: [Anthropic Models Documentation](https://docs.anthropic.com/en/docs/about-claude/models)</small>

### Gemini (Google DeepMind)

**Gemini** to odpowiedź Google na GPT. Natywnie multimodalny - trenowany na tekście, obrazach, audio i wideo jednocześnie. Wyróżnia się dużym oknem kontekstowym: Gemini 2.0 Flash (2025, szybki model do zastosowań masowych, 1M kontekst), Gemini 2.5 Pro (2025, flagowy model z "myśleniem", 1M kontekst).

<small>Źródło: [Google AI Models Documentation](https://ai.google.dev/gemini-api/docs/models)</small>

### DeepSeek (Chiny)

**DeepSeek** to chiński startup, który w styczniu 2025 roku zszokował branżę modelem [DeepSeek-R1](https://arxiv.org/abs/2501.12948) - osiągającym wyniki na poziomie GPT-4o i o1 przy ułamku kosztów treningu (szacunkowo $5,6 mln vs. setki milionów dolarów u OpenAI). Wykorzystuje innowacyjną architekturę Mixture of Experts (MoE): DeepSeek-V3 (671 mld parametrów, MoE, 128K kontekst) i DeepSeek-R1 (model rozumujący, konkurencyjny z o1).

### Modele open-source

Społeczność open-source rozwija się dynamicznie: **Llama 4** (Meta, 2025) - Maverick (400 mld param., MoE) i Scout, 1M kontekst, [dostępny publicznie](https://ai.meta.com/llama/); **Mistral Large / Medium** (Mistral AI) - wydajne europejskie modele; **Qwen 2.5** (Alibaba) - silny w wielojęzyczności i programowaniu; **Phi-4** (Microsoft) - kompaktowy model z konkurencyjną wydajnością.

## Porównanie czołowych modeli

| Model | Producent | Kontekst | Open-source | Mocne strony |
| --- | --- | --- | --- | --- |
| **GPT-4o / 4.1** | OpenAI | 128K / 1M | Nie | Wszechstronność, multimodalność, ekosystem |
| **o3** | OpenAI | 200K | Nie | Zaawansowane rozumowanie, matematyka, nauka |
| **Claude Opus 4** | Anthropic | 200K | Nie | Bezpieczeństwo, coding, długie dokumenty |
| **Gemini 2.5 Pro** | Google | 1M | Nie | Największe okno, integracja Google, wideo |
| **DeepSeek-V3** | DeepSeek | 128K | Tak | Niska cena API, MoE, wydajność |
| **Llama 4 Maverick** | Meta | 1M | Tak | Darmowy, MoE, do wdrożeń on-premise |

<small>Ranking oparty na [LMSYS Chatbot Arena](https://lmarena.ai/) (niezależny benchmark oparty na głosowaniu użytkowników) oraz oficjalnej dokumentacji producentów.</small>

Na co tu naprawdę patrzeć: na kolumny "Kontekst" i "Mocne strony", a nie na kolejność wierszy. Układ czołówki zmienia się z każdym wydaniem, a dla Twojej pracy więcej znaczy dopasowanie modelu do zadania niż jego miejsce w rankingu.

## Co potrafią modele językowe?

Możliwości LLM systematycznie rosną. W 2024 r. GPT-4 zdał egzamin adwokacki (bar exam) plasując się w top 10% zdających ([OpenAI, 2023](https://arxiv.org/abs/2303.08774)). Gemini Ultra uzyskał wynik przewyższający ludzkich ekspertów na benchmarku MMLU (57 dyscyplin akademickich). Kluczowe obszary zastosowań:

- **Generowanie tekstu** - artykuły, e-maile, raporty, kreatywne pisanie, streszczenia dokumentów
- **Analiza i zrozumienie** - sentyment, ekstrakcja danych, klasyfikacja, podsumowywanie
- **Tłumaczenie** - ponad 100 języków, w tym specjalistyczne i idiomatyczne konteksty
- **Programowanie** - generowanie kodu, debugging, code review, konwersja między językami
- **Rozumowanie** - matematyka, logika, analiza argumentów, planowanie; modele o1/o3 i Gemini 2.5 Pro z trybem "thinking" osiągają wyniki na poziomie doktorantów w naukach ścisłych
- **Agenci AI** - trend 2025-2026: modele działające autonomicznie, wykonujące wieloetapowe zadania (przeglądanie internetu, obsługa narzędzi, planowanie)

## Ograniczenia modeli językowych

Do tej sekcji wracaj częściej niż do tabel powyżej. Możliwości modeli poznasz po kilku dniach używania - ograniczenia potrafią Cię zaskoczyć jeszcze po roku.

- **Halucynacje** - LLM mogą generować przekonująco brzmiące, ale całkowicie nieprawdziwe informacje. Według [badań Vectara (2023)](https://arxiv.org/abs/2311.05232), nawet najlepsze modele "halucynują" w 3-15% odpowiedzi, w zależności od zadania
- **Brak wiedzy po dacie treningu** - model nie wie o wydarzeniach po swojej dacie "odcięcia", chyba że ma dostęp do internetu (RAG) lub narzędzi
- **Brak prawdziwego rozumienia** - LLM przetwarzają wzorce statystyczne, nie "rozumieją" świata jak ludzie
- **Ograniczone okno kontekstowe** - choć okna rosną (od 4K do 2M tokenów), efektywność przetwarzania spada przy bardzo długich kontekstach ([efekt "Lost in the Middle"](https://arxiv.org/abs/2307.03172))
- **Bias i uprzedzenia** - modele dziedziczą uprzedzenia z danych treningowych. Producenci stosują techniki debiasingu, ale problem nie jest w pełni rozwiązany

## Jak wybierać model?

Radzę zacząć od pytania o zadanie, a nie o nazwę modelu. Wybór zależy od tego, co masz do zrobienia, od budżetu i od wymagań prywatności:

| Potrzeba | Rekomendowany model | Dlaczego |
| --- | --- | --- |
| Ogólne zadania tekstowe | GPT-4o / Claude Sonnet 4 | Najlepsza wszechstronność |
| Analiza długich dokumentów | Claude Opus 4 / Gemini 2.5 Pro | 200K-1M kontekst |
| Praca z obrazami/wideo | GPT-4o / Gemini 2.5 | Natywna multimodalność |
| Programowanie | Claude Sonnet 4 / GPT-4o | Liderzy w benchmarkach kodowania |
| Zaawansowana matematyka/nauka | o3 / Gemini 2.5 Pro (thinking) | Modele rozumujące |
| Ograniczony budżet API | DeepSeek-V3 / GPT-4o mini | Najniższy koszt za token |
| Prywatność / on-premise | Llama 4 / Mistral | Open-source, pełna kontrola |

Nie komplikuj tego na starcie. Przez pierwsze tygodnie pracy z AI spokojnie wystarczy jeden model z górnej półki - do dobierania narzędzia pod konkretne zadanie wrócisz wtedy, gdy zaczniesz uderzać w jego ograniczenia.

## Źródła i dalsze lektury

- [Vaswani i in. "Attention Is All You Need" (2017)](https://arxiv.org/abs/1706.03762) - praca opisująca architekturę Transformer
- [OpenAI "GPT-4 Technical Report" (2023)](https://arxiv.org/abs/2303.08774) - raport techniczny o możliwościach GPT-4
- [DeepSeek-R1 Technical Report (2025)](https://arxiv.org/abs/2501.12948) - architektura i wyniki DeepSeek-R1
- [LMSYS Chatbot Arena](https://lmarena.ai/) - niezależny ranking modeli AI oparty na głosowaniu użytkowników
- [Stanford HAI AI Index 2024](https://hai.stanford.edu/research/ai-index-report) - kompleksowy raport o stanie sztucznej inteligencji

:::note[Teraz wiesz]

- Jak działają LLM - przewidują kolejne tokeny dzięki architekturze Transformer i mechanizmowi uwagi, a RLHF czyni je pomocnymi asystentami
- Jakie modele dominują na rynku - GPT-4.1, Claude 4, Gemini 2.5, DeepSeek-V3, Llama 4 - i czym się różnią
- Jakie są realne ograniczenia LLM - halucynacje (3-15%), ograniczone okno kontekstowe, brak wiedzy po dacie treningu
- Jak dobrać model do zadania - od analizy dokumentów (Claude/Gemini) po coding (Claude/GPT) i rozumowanie (o3/Gemini)

**Następny krok:** [Modele rozumujące](/jak-dziala-ai/modele-rozumujace/) - dowiesz się, co naprawdę robi przycisk "myślenia" w chatbocie, kiedy go włączać i dlaczego odpowiedź trwa wtedy dłużej.
:::

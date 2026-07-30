---
title: Ile kosztuje AI - subskrypcje, API i brokerzy
description: Trzy sposoby płacenia za AI - subskrypcja, API u dostawcy i API u brokera. Jak czytać drabinę planów, ile to realnie kosztuje i gdzie sprawdzić aktualną cenę.
sidebar:
  label: 'Ile kosztuje AI'
  order: 9
educationalLevel: Beginner
teaches:
  - Trzy modele rozliczania AI - subskrypcja, API, broker
  - Jak czytać drabinę planów u dostawców AI
  - Gdzie sprawdzać aktualne ceny narzędzi AI
about:
  - name: Sztuczna inteligencja
    sameAs: https://pl.wikipedia.org/wiki/Sztuczna_inteligencja
  - name: Interfejs programowania aplikacji
    sameAs: https://pl.wikipedia.org/wiki/Interfejs_programowania_aplikacji
mentions:
  - name: ChatGPT
    sameAs: https://en.wikipedia.org/wiki/ChatGPT
    type: SoftwareApplication
  - name: Claude
    sameAs: https://en.wikipedia.org/wiki/Claude_(language_model)
    type: SoftwareApplication
  - name: Gemini
    sameAs: https://en.wikipedia.org/wiki/Gemini_(language_model)
    type: SoftwareApplication
faq:
  - q: Ile kosztuje AI miesięcznie?
    a: Zależy od modelu rozliczenia. Każdy duży dostawca ma plan darmowy. Najtańszy płatny plan to zwykle kilkadziesiąt złotych miesięcznie, plan standardowy około 80 zł, a najwyższe plany indywidualne sięgają kilkuset do tysiąca złotych - w zamian za kilkukrotnie lub kilkunastokrotnie wyższe limity.
  - q: Czym różni się subskrypcja od API?
    a: Subskrypcja to stała opłata miesięczna za dostęp do aplikacji, z limitami liczonymi w wiadomościach. API to rozliczenie za faktyczne zużycie - płacisz za przetworzone tokeny, bez abonamentu. Przy okazjonalnym użyciu API bywa groszowe, przy intensywnym subskrypcja wychodzi taniej.
  - q: Czy warto korzystać z brokera API takiego jak OpenRouter?
    a: Broker daje jeden klucz i jedno rozliczenie do modeli wielu dostawców, więc nie musisz zakładać osobnego konta u każdego z nich. To wygoda przy porównywaniu modeli i przy aplikacjach, które mają przełączać się między nimi. Sam koszt tokenów bywa taki sam jak u dostawcy - broker zarabia zwykle na opłacie za doładowanie konta.
---

<!-- TODO(Łukasz): grafika artykułu - prompt w TODO.md (sekcja Narzędzia); po wygenerowaniu wrzuć do grafiki-zrodlo/narzedzia/ile-kosztuje-ai/ile-kosztuje-ai.png, uruchom npm run grafiki i osadź obraz tutaj -->

## Najczęstsze pytanie, na które nie ma jednej odpowiedzi

"Ile to kosztuje?" to pierwsze pytanie, jakie słyszę na każdym szkoleniu. I za każdym razem muszę zacząć od tego samego: zależy, jak zamierzasz płacić. Bo za dokładnie ten sam model - to samo GPT, tego samego Claude'a - można zapłacić na trzy zupełnie różne sposoby, a różnica w rachunku bywa stukrotna.

Ten rozdział nie jest cennikiem. Cennik zestarzałby się szybciej, niż zdążyłbym go opublikować - dostawcy zmieniają nazwy planów i stawki kilka razy w roku. Zamiast tego pokażę Ci **strukturę** kosztów, która trzyma się od lat: trzy modele rozliczania, przewidywalną drabinę planów i miejsca, w których sprawdzisz dzisiejszą cenę w trzydzieści sekund.

## Trzy rodzaje kosztów

To rozróżnienie jest fundamentem całego rozdziału. Jeśli zapamiętasz z niego tylko jedną rzecz, niech to będzie ta.

### 1. Subskrypcja - płacisz za dostęp

Stała opłata miesięczna za korzystanie z aplikacji: ChatGPT, Claude, Gemini, Copilot. Wchodzisz na stronę albo do aplikacji, piszesz i rozmawiasz. Limity są liczone w wiadomościach albo w czasie - nie w tokenach.

**Dla kogo:** dla zdecydowanej większości osób czytających ten przewodnik. Jeśli korzystasz z AI przez okno czatu, to jest Twój model.

**Zaleta:** rachunek jest z góry znany. Nie zaskoczy Cię na koniec miesiąca.

**Wada:** płacisz tyle samo w miesiącu, w którym pracowałeś codziennie, i w tym, w którym byłeś na urlopie.

### 2. API u dostawcy - płacisz za zużycie

API (_Application Programming Interface_) to sposób, w jaki programy rozmawiają z modelem bez pośrednictwa aplikacji czatu. Nie ma tu abonamentu - doładowujesz konto i płacisz za faktycznie przetworzone [tokeny](/jak-dziala-ai/tokeny-i-kontekst/). Osobno za te wysłane (wejście), osobno za te wygenerowane (wyjście), przy czym wyjście jest zwykle kilkukrotnie droższe.

**Dla kogo:** dla automatyzacji, własnych narzędzi i wtyczek. Także dla osób, które używają AI rzadko, ale chcą mieć dostęp do najmocniejszych modeli.

**Zaleta:** przy okazjonalnym użyciu koszty bywają groszowe. Nie płacisz za nic, czego nie zużyłeś.

**Wada:** rachunek jest z góry nieznany. Źle napisany skrypt w pętli potrafi przepalić budżet w jedną noc - dlatego pierwszą rzeczą, którą ustawiasz na koncie API, jest limit wydatków.

:::caution[Subskrypcja i API to osobne portfele]
To myli najczęściej. Wykupienie ChatGPT Plus czy Claude Pro **nie daje** dostępu do API tego dostawcy - i odwrotnie. To dwa oddzielne produkty, dwa oddzielne rozliczenia i dwa oddzielne konta. Jeśli chcesz obu, płacisz dwa razy.
:::

### 3. API u brokera - jeden klucz do wielu modeli

Broker (nazywany też bramą albo agregatorem) siedzi pomiędzy Tobą a dostawcami. Zakładasz jedno konto, dostajesz jeden klucz i przez to samo API sięgasz po modele OpenAI, Anthropic, Google, DeepSeek i kilkuset innych. Najbardziej znany jest [OpenRouter](https://openrouter.ai/), ale nie jedyny - podobnie działają Portkey czy otwartoźródłowe [LiteLLM](https://www.litellm.ai/), które możesz postawić na własnym serwerze.

**Dla kogo:** dla porównujących modele między sobą i dla aplikacji, które mają się przełączać między dostawcami.

**Zaleta:** jedno konto zamiast pięciu, jedna faktura, jeden limit wydatków. Gdy jeden dostawca ma awarię, broker potrafi przekierować zapytanie do innego.

**Wada:** dokładasz ogniwo do łańcucha. Twoje zapytania przechodzą przez firmę trzecią, co ma znaczenie przy danych wrażliwych - a przy jednym dostawcy i tak nie zyskujesz nic poza dodatkową warstwą.

:::note[Skąd broker bierze pieniądze]
Warto to rozumieć, zanim policzysz oszczędności. OpenRouter deklaruje, że nie dolicza marży do samych tokenów - płacisz stawkę dostawcy. Zarabia na prowizji przy doładowaniu konta (rząd kilku procent). Efekt: broker rzadko wychodzi taniej od dostawcy, ale bardzo często wychodzi **wygodniej**.
:::

### Które wybrać?

| Jak korzystasz z AI | Model rozliczenia |
| --- | --- |
| Rozmawiam w oknie czatu, codziennie | Subskrypcja |
| Rozmawiam rzadko, ale chcę najlepszy model | API u dostawcy |
| Piszę skrypt / automatyzację dla siebie | API u dostawcy |
| Buduję coś, co ma przełączać modele | API u brokera |
| Chcę porównać kilka modeli na własnym zadaniu | API u brokera |
| Pracuję na danych, które nie mogą wyjść poza firmę | [Model na własnym sprzęcie](/suwerenne-ai/ai-na-wlasnym-komputerze/) |

## Drabina planów - czego się spodziewać

Każdy duży dostawca układa plany według tego samego schematu. Nazwy się różnią, kolejność nie. Podaję rzędy wielkości w złotówkach, a nie stawki - kwoty zmieniają się kilka razy w roku, proporcje między szczeblami trzymają się latami.

| Szczebel | Rząd wielkości | Co dostajesz |
| --- | --- | --- |
| **Darmowy** | 0 zł | Słabszy model, wąskie limity, wolniejsza obsługa w godzinach szczytu |
| **Lekki** | ok. 30 zł/mies. | Wyższe limity niż w darmowym, ale bez modelu flagowego |
| **Standardowy** | ok. 80 zł/mies. | Model flagowy, wszystkie funkcje, limity wystarczające do codziennej pracy |
| **Wysoki** | ok. 400-1000 zł/mies. | To samo co wyżej, tylko **kilkukrotnie do dwudziestokrotnie wyższe limity** |
| **Firmowy** | wycena indywidualna | Rozliczenie za stanowisko, administracja kontami, umowa o przetwarzaniu danych |

Zwróć uwagę na szczebel najwyższy, bo tu początkujący najczęściej się gubi: **nie kupujesz w nim lepszego AI, tylko więcej tego samego AI**. Trzej najwięksi dostawcy - OpenAI, Anthropic i Google - opisują dziś swoje topowe plany dokładnie tym samym mnożnikiem: do dwudziestu razy więcej zużycia niż w planie standardowym. Model jest ten sam. Zmienia się to, jak szybko uderzysz w ścianę.

:::tip[Praktyczna kolejność]
Zacznij od darmowego. Gdy zaczniesz regularnie wyczerpywać limity - przejdź na standardowy, nie na lekki: to on daje dostęp do modelu flagowego, a różnica w jakości odpowiedzi jest większa niż różnica w cenie. Po plan najwyższy sięgaj dopiero wtedy, gdy realnie kończą Ci się limity w planie standardowym, a nie "na zapas".
:::

## Gdzie sprawdzić aktualną cenę

Jedyna rzetelna odpowiedź na pytanie "ile to kosztuje dzisiaj" jest u dostawcy. Poniższe adresy prowadzą wprost do cenników - dodaj je do zakładek, bo będziesz do nich wracać.

| Dostawca | Cennik aplikacji | Cennik API |
| --- | --- | --- |
| **OpenAI (ChatGPT)** | [openai.com/chatgpt/pricing](https://openai.com/chatgpt/pricing/) | [developers.openai.com](https://developers.openai.com/api/docs/pricing) |
| **Anthropic (Claude)** | [claude.com/pricing](https://claude.com/pricing) | [claude.com/pricing#api](https://claude.com/pricing) |
| **Google (Gemini)** | [gemini.google/subscriptions](https://gemini.google/subscriptions/) | [ai.google.dev/pricing](https://ai.google.dev/pricing) |
| **Microsoft (Copilot)** | [microsoft.com/microsoft-365/premium](https://www.microsoft.com/pl-pl/microsoft-365/premium) | - |
| **Mistral (Vibe)** | [mistral.ai/pricing](https://mistral.ai/pricing) | [mistral.ai/pricing](https://mistral.ai/pricing) |
| **DeepSeek** | - | [api-docs.deepseek.com](https://api-docs.deepseek.com/quick_start/pricing) |
| **OpenRouter (broker)** | - | [openrouter.ai/pricing](https://openrouter.ai/pricing) |

:::caution[Cena, którą widzisz, może nie być Twoją ceną]
Trzy rzeczy potrafią zaskoczyć przy kasie. Po pierwsze, dostawcy podają zwykle ceny w dolarach - do rachunku dojdzie przewalutowanie. Po drugie, część cenników pokazuje domyślnie stawkę przy płatności rocznej, a miesięcznie zapłacisz więcej. Po trzecie, plany firmowe są liczone **za stanowisko** i często mają minimalną liczbę stanowisk.
:::

## Jak nie przepłacić

Kilka rzeczy, które w praktyce robią największą różnicę w rachunku:

- **Nie kupuj kilku subskrypcji naraz.** Kuszące jest mieć ChatGPT, Claude i Gemini jednocześnie. Zacznij od jednej i daj sobie miesiąc - dopiero wtedy zobaczysz, czego naprawdę brakuje.
- **Sprawdź, czy już nie płacisz.** Dostęp do AI bywa wliczony w rzeczy, które masz: pakiet biurowy, konto w chmurze, subskrypcję narzędzia graficznego. Sporo osób płaci dwa razy za to samo.
- **Przy API dobierz model do zadania.** Różnice w cenie między modelem flagowym a ekonomicznym tego samego dostawcy są rzędu kilkunastu, czasem kilkudziesięciu razy. Do prostych zadań - klasyfikacji, przepisania tekstu, wyciągnięcia danych - słabszy model wystarcza w zupełności.
- **Pisz po angielsku, jeśli liczysz każdy grosz.** Polski tekst rozbija się na wyraźnie więcej [tokenów](/jak-dziala-ai/tokeny-i-kontekst/) niż angielski o tej samej treści, a płacisz właśnie za tokeny.
- **Rozważ model na własnym sprzęcie.** Przy stałym, dużym obciążeniu i przy danych, które nie mogą opuścić firmy, rachunek potrafi się odwrócić - piszę o tym w [AI na własnym komputerze](/suwerenne-ai/ai-na-wlasnym-komputerze/).

## Podsumowanie

- **Subskrypcja** - stała opłata za dostęp do aplikacji. Dla większości osób to właściwy wybór.
- **API u dostawcy** - płatność za zużyte tokeny, bez abonamentu. Dla automatyzacji i rzadkiego użycia.
- **API u brokera** - jeden klucz do modeli wielu dostawców. Wygoda, rzadko oszczędność.
- **Drabina planów** jest u wszystkich podobna: darmowy, lekki, standardowy, wysoki, firmowy. Najwyższy szczebel to te same modele z wielokrotnie wyższymi limitami, a nie lepsze AI.
- **Ceny sprawdzaj u dostawcy.** Każdy inny sposób oznacza pracę na nieaktualnych danych.

:::note[Teraz wiesz]

- Że za ten sam model można zapłacić na trzy sposoby - subskrypcją, przez API dostawcy albo przez brokera - i kiedy który z nich ma sens
- Jak wygląda drabina planów u dostawców AI i dlaczego najdroższy plan daje więcej limitów, a nie lepszy model
- Gdzie sprawdzić dzisiejszą cenę i na co uważać przy kasie - przewalutowanie, płatność roczna, minimalna liczba stanowisk

**Następny krok:** [Suwerenne AI](/suwerenne-ai/) - poznasz polskie i europejskie modele oraz dowiesz się, jak uruchomić AI na własnym komputerze, gdzie rachunek liczy się zupełnie inaczej.
:::

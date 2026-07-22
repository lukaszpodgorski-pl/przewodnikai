---
title: Mapa Systemów AI
description: Kompleksowa mapa pojęć i architektur systemów sztucznej inteligencji - od LLM przez Agentów po systemy Multi-Agent.
sidebar:
  label: 'Mapa Systemów AI'
  order: 10
educationalLevel: Intermediate
teaches:
  - Przegląd systemów i narzędzi AI
  - Klasyfikacja narzędzi AI
  - Ekosystem sztucznej inteligencji
about:
  - name: Sztuczna inteligencja
    sameAs: https://pl.wikipedia.org/wiki/Sztuczna_inteligencja
mentions:
  - name: OpenAI
    sameAs: https://en.wikipedia.org/wiki/OpenAI
    type: Organization
  - name: Google
    sameAs: https://en.wikipedia.org/wiki/Google
    type: Organization
  - name: Anthropic
    sameAs: https://en.wikipedia.org/wiki/Anthropic
    type: Organization
  - name: Meta AI
    sameAs: https://en.wikipedia.org/wiki/Meta_Platforms
    type: Organization
---

## Mapa Krajobrazu Systemów AI

Jeśli czytasz o AI od kilku tygodni, masz już pewnie w głowie worek skrótów: LLM, RAG, MCP, A2A, guardrails. Ta mapa układa je w cztery warstwy - od modelu, który generuje tekst, po mechanizmy pilnujące, żeby nie zrobił czegoś głupiego. Nie musisz jej zapamiętywać. Wracaj tutaj, kiedy natkniesz się na hasło, którego nie umiesz umiejscowić.

<!-- TODO(Łukasz): brakuje dat i atrybucji - kto i kiedy ogłosił MCP oraz A2A? Nie wstawiam ich, bo nie ma ich w pliku, a nie chcę zgadywać -->

## Fundament: modele i wiedza

Zacznij od tej sekcji, nawet jeśli resztę mapy tylko przewiniesz wzrokiem. Bez tych trzech elementów nie działa nic, co znajdziesz niżej.

| Komponent | Opis | Przykłady zastosowań |
| --- | --- | --- |
| **LLM (Large Language Models)** | Model wytrenowany na ogromnej ilości tekstu, który przewiduje kolejne tokeny i dzięki temu potrafi pisać, streszczać i rozumować w języku naturalnym. To silnik, z którego korzystasz w ChatGPT czy Claude | Generowanie kodu, streszczanie długich tekstów, chatbot, wyciąganie wniosków z danych |
| **RAG (Retrieval Augmented Generation)** | Sam model zna tylko to, co było w danych treningowych. RAG dokłada mu wyszukiwarkę: zanim odpowie, znajduje właściwe fragmenty Twoich dokumentów i opiera odpowiedź na nich, zamiast zgadywać | Asystent po firmowej bazie wiedzy, analiza dokumentów prawnych, przegląd literatury naukowej, obsługa klienta |
| **Agenci z rozszerzoną pamięcią** | Zwykła rozmowa z modelem kończy się razem z sesją. Agent z pamięcią zapisuje, co już ustaliliście, i wraca do tego w kolejnych rozmowach - zamiast pytać Cię o to samo od nowa | Asystent nauki pamiętający Twoje postępy, wsparcie klienta z historią zgłoszeń, długi projekt badawczy, planer pracy |

## Agenci i autonomia

Tu narosło najwięcej marketingowego szumu. Pod hasłami "agentic AI", "autonomiczni agenci", "agenci rozumujący" czy "autonomiczne podejmowanie decyzji" sprzedaje się w praktyce jedną ideę: model nie czeka na Twój kolejny prompt, tylko sam rozbija cel na kroki i je wykonuje. Różnią się głównie tym, jak daleko puszczasz go bez zaglądania mu przez ramię - dlatego zamiast pięciu haseł zostawiam dwa realne rozróżnienia.

| Komponent | Opis | Przykłady zastosowań |
| --- | --- | --- |
| **Agenci AI (agentic AI)** | Dostają cel zamiast pojedynczego polecenia. Sami planują kroki, wykonują je, sprawdzają wynik i poprawiają się po drodze - bez Twojej akceptacji na każdym etapie. To samo kryje się pod hasłami "autonomiczni agenci", "agenci rozumujący i planujący" oraz "autonomiczne podejmowanie decyzji" | Asystent badawczy zbierający i porządkujący materiały, automatyzacja wieloetapowego workflow, boty handlowe, nawigacja pojazdów autonomicznych, optymalizacja łańcucha dostaw |
| **Systemy Multi-Agent** | Kilku agentów pracuje jednocześnie: dzielą się zadaniami, uzgadniają wyniki albo wzajemnie się sprawdzają. Ma to sens dopiero wtedy, gdy problem rozpada się na role, których jeden model nie ogarnie naraz | Koordynacja rozproszonych robotów, sterowanie ruchem ulicznym, symulacje rynkowe, planowanie reagowania na katastrofy |

## Protokoły i integracja narzędzi

Sam model tylko generuje tekst. Dopiero ta warstwa pozwala mu coś faktycznie zrobić: odpytać bazę, odczytać plik, wywołać zewnętrzne API.

| Komponent | Opis | Przykłady zastosowań |
| --- | --- | --- |
| **MCP (Model Context Protocol)** | Otwarty standard opisujący, jak model ma sięgać do zewnętrznych narzędzi, danych i usług. Zamiast pisać osobną integrację pod każdy model, podłączasz narzędzie raz - i rozumie je każdy klient obsługujący MCP | Zapytania do bazy danych, dostęp do systemu plików, podpinanie firmowych usług, warstwa orkiestracji narzędzi |
| **Protokół A2A (Agent-to-Agent)** | To samo, ale poziom wyżej: standard rozmowy między agentami. Pozwala im przekazywać sobie zadania i uzgadniać wyniki, nawet jeśli pochodzą od różnych dostawców | Delegowanie zadań między agentami, koordynacja wieloplatformowa, workflow niezależny od dostawcy |
| **Wywoływanie narzędzi (tool calling / tool use)** | Mechanizm, w którym model zamiast odpowiadać tekstem zgłasza: "wywołaj tę funkcję z tymi argumentami". _Tool calling_ to sam mechanizm, _tool use_ to sytuacja, w której agent samodzielnie wybiera i łączy kolejne narzędzia | Pobieranie aktualnych danych, zapytania do bazy, generowanie raportów, asystent debugowania kodu |
| **Orkiestracja działań** | Kiedy zadanie wymaga kilku narzędzi i agentów, ktoś musi pilnować kolejności i zależności. Tym zajmuje się warstwa orkiestracji - odpowiednik kierownika projektu | Wieloetapowa automatyzacja zadań, koordynacja potoków danych, routing zgłoszeń klientów |
| **Framework agentów** | Gotowa infrastruktura do budowania agentów: obsługa narzędzi, pamięci, pętli decyzyjnej. Sięgasz po nią wtedy, gdy nie chcesz pisać tego wszystkiego od zera | Tworzenie własnych agentów, konfiguracja automatyzacji, koordynacja wielu agentów |

<!-- TODO(Łukasz): tu zadziałałby konkret z praktyki - który z tych elementów faktycznie wdrażasz u siebie, a który jest na razie głównie hasłem na konferencjach? -->

## Bezpieczeństwo i nadzór

Im więcej autonomii dajesz systemowi, tym ważniejsza staje się ta warstwa. To ona decyduje, czy błąd modelu kosztuje Cię minutę, czy klienta.

| Komponent | Opis | Przykłady zastosowań |
| --- | --- | --- |
| **Zabezpieczenia (guardrails)** | Twarde granice, których system nie przekroczy niezależnie od tego, co wygeneruje model: filtry treści, reguły prywatności, blokady na wrażliwe działania | Moderacja treści, ochrona danych osobowych, kontrola zgodności z polityką firmy |
| **Człowiek w pętli (human-in-the-loop)** | Punkt, w którym system zatrzymuje się i czeka na Twoją decyzję. Zwykle stawia się go tam, gdzie pomyłka jest kosztowna albo nieodwracalna | Zatwierdzanie decyzji o dużej stawce, walidacja diagnozy medycznej, moderacja treści, kontrola jakości modelu |

:::note[Teraz wiesz]

- Jak wygląda pełny ekosystem AI - od modeli językowych (LLM) przez agentów autonomicznych po systemy wieloagentowe
- Czym są kluczowe protokoły i techniki: MCP, A2A, RAG, tool calling i guardrails
- Jak poszczególne elementy mapy AI łączą się ze sobą, tworząc coraz bardziej zaawansowane systemy

**Następny krok:** [Prompt Engineering](/prompt-engineering/wprowadzenie/) - czas przejść do praktyki! Nauczysz się skutecznie komunikować z AI i pisać prompty, które dają najlepsze rezultaty.
:::

---
title: Asystenci agentowi - Copilot, Claude Code i Claude Cowork
description: Rodzina Microsoft Copilot, GitHub Copilot, Claude Code i Claude Cowork - czym są asystenci agentowi, czym się od siebie różnią i który wybrać.
sidebar:
  label: 'Asystenci agentowi'
  order: 6
educationalLevel: Intermediate
teaches:
  - Czym są asystenci agentowi
  - Rodzina Copilot bez zamieszania
  - Claude Code i Claude Cowork
about:
  - name: Sztuczna inteligencja
    sameAs: https://pl.wikipedia.org/wiki/Sztuczna_inteligencja
  - name: Inteligentny agent
    sameAs: https://en.wikipedia.org/wiki/Intelligent_agent
mentions:
  - name: Microsoft Copilot
    sameAs: https://en.wikipedia.org/wiki/Microsoft_Copilot
    type: SoftwareApplication
  - name: GitHub Copilot
    sameAs: https://en.wikipedia.org/wiki/GitHub_Copilot
    type: SoftwareApplication
  - name: Claude Code
    sameAs: https://claude.com/product/claude-code
    type: SoftwareApplication
  - name: Claude Cowork
    sameAs: https://claude.com/product/cowork
    type: SoftwareApplication
faq:
  - q: Czym różni się Microsoft Copilot od Microsoft 365 Copilot?
    a: Microsoft Copilot to darmowy asystent dostępny w przeglądarce, Windows i aplikacji mobilnej. Microsoft 365 Copilot to płatna usługa dla firm wbudowana w Worda, Excela, Outlooka i Teams, która ma dostęp do dokumentów, maili i kalendarzy Twojej organizacji.
  - q: Czy Claude Code jest tylko dla programistów?
    a: W praktyce tak - pracuje w terminalu i na kodzie. Dla wszystkich pozostałych Anthropic zbudował Claude Cowork - tę samą mechanikę agentową ubrał w zwykłą aplikację, bez terminala, do pracy na dokumentach i plikach.
  - q: Od czego zacząć, jeśli nie jestem osobą techniczną?
    a: Od narzędzia, które mieszka tam, gdzie już pracujesz. Jeśli Twoim domem jest pakiet Microsoft 365 - zacznij od Copilota. Jeśli chcesz, żeby AI robiła za Ciebie wieloetapową pracę na plikach i dokumentach - wypróbuj Claude Cowork. Nie musisz znać wszystkich naraz.
---

<!-- TODO(Łukasz): grafika artykułu - prompt w TODO.md (sekcja Narzędzia); po wygenerowaniu wrzuć do grafiki-zrodlo/narzedzia/asystenci-agentowi/asystenci-agentowi.png, uruchom npm run grafiki i osadź obraz tutaj -->

## Od odpowiadania do działania

W [artykule o agentach AI](/jak-dziala-ai/agenci-ai/) pokazałem, co się dzieje, gdy chatbot przestaje tylko odpowiadać i zaczyna samodzielnie wykonywać zadania. Tutaj schodzimy na ziemię: przeglądamy konkretne narzędzia, w których ta zmiana już się dokonała - rodzinę Copilot od Microsoftu oraz Claude Code i Claude Cowork od Anthropic.

<!-- TODO(Łukasz): hook z Twojej praktyki - moment, w którym asystent agentowy pierwszy raz zrobił za Ciebie całe zadanie (a nie tylko podpowiedział), i co wtedy pomyślałeś -->

## Copilot - jedno słowo, trzy produkty

Microsoft nazwał słowem "Copilot" kilka różnych produktów i to źródło niekończących się nieporozumień - łącznie z sytuacjami, w których firma kupuje "Copilota" i dostaje coś innego, niż oczekiwała. Rozplątujemy:

| Nazwa | Co to jest | Gdzie mieszka | Dla kogo |
| --- | --- | --- | --- |
| **Microsoft Copilot** | Darmowy asystent-chatbot (następca Bing Chat) | [copilot.microsoft.com](https://copilot.microsoft.com), Windows, aplikacja mobilna | Każdy |
| **Microsoft 365 Copilot** | Płatna usługa AI wbudowana w aplikacje biurowe, z dostępem do danych firmy | Word, Excel, PowerPoint, Outlook, Teams | Firmy i organizacje |
| **GitHub Copilot** | Asystent programisty | Edytor kodu (VS Code, JetBrains i inne) | Programiści |

<!-- TODO(Łukasz): 1-2 zdania z życia - np. sytuacja, w której ktoś pomylił te produkty i co z tego wynikło -->

## Microsoft Copilot - asystent na co dzień

[Microsoft Copilot](https://copilot.microsoft.com) to konsumencka twarz tej rodziny: darmowy chatbot w przeglądarce, w Windows i na telefonie. Dla wielu osób to najniższy próg wejścia w AI w ogóle - nie wymaga konta ani karty, a pod spodem pracują modele klasy GPT. Podstawowe porównanie z ChatGPT, Claude i Gemini znajdziesz w [artykule o chatbotach](/narzedzia/chatboty/).

<!-- TODO(Łukasz): merytoryka - co wyróżnia konsumenckiego Copilota (integracja z Windows/Edge, tryby, limity), aktualne wersje i ceny do weryfikacji u źródła; Twoja rekomendacja: komu to wystarcza w zupełności -->

## Microsoft 365 Copilot - AI w Wordzie, Excelu i Teams

[Microsoft 365 Copilot](https://www.microsoft.com/pl-pl/microsoft-365-copilot) to inna liga i inny cennik: płatna usługa dla organizacji, wbudowana bezpośrednio w aplikacje pakietu Microsoft 365. Jej supermocą nie jest sam model, tylko dostęp do kontekstu firmy - dokumentów, maili i kalendarzy - dzięki czemu potrafi odpowiedzieć na pytanie "co obiecaliśmy klientowi na wtorkowym spotkaniu". Tabelę z konkretami "co potrafi w której aplikacji" znajdziesz w [narzędziach specjalistycznych](/narzedzia/specjalistyczne/).

<!-- TODO(Łukasz): merytoryka - agenci w M365 Copilot, Copilot Studio, realne doświadczenia wdrożeniowe z Twojej praktyki bankowej (anonimowo); aktualna cena do weryfikacji -->

## GitHub Copilot - asystent programisty

[GitHub Copilot](https://github.com/features/copilot) to narzędzie, od którego cała fala "copilotów" wzięła nazwę - asystent AI pracujący w edytorze kodu. Zaczynał od podpowiadania kolejnych linijek, dziś coraz częściej działa w trybie agentowym: dostaje zadanie i samodzielnie proponuje zmiany w wielu plikach. Jak z niego korzystać mądrze, piszę w [Programowaniu z AI](/prompt-engineering/programowanie/).

<!-- TODO(Łukasz): merytoryka - tryby (autouzupełnianie / chat / agent), plany i ceny do weryfikacji; dla kogo GH Copilot, a dla kogo raczej Claude Code -->

## Claude Code - agent w terminalu

[Claude Code](https://claude.com/product/claude-code) od Anthropic idzie o krok dalej niż podpowiadanie: to agent, który pracuje bezpośrednio w Twoim projekcie - sam przeszukuje pliki, edytuje kod, uruchamia testy i wraca z gotową, sprawdzoną zmianą. Sterujesz nim poleceniami w języku naturalnym z terminala lub edytora.

<!-- TODO(Łukasz): merytoryka - Twój warsztat z Claude Code (ten serwis powstaje z jego udziałem - to gotowa anegdota); dla kogo, plany i ceny do weryfikacji -->

## Claude Cowork - ta sama moc bez terminala

[Claude Cowork](https://claude.com/product/cowork) to odpowiedź na naturalne pytanie: "a co z nami, nieprogramistami?". Anthropic wziął mechanikę agentową znaną z Claude Code i ubrał ją w zwykłą aplikację - opisujesz efekt ("uporządkuj ten folder i przygotuj raport z tych plików"), odchodzisz od biurka, wracasz do gotowej pracy. Cowork czyta i zapisuje pliki wyłącznie w folderach, do których sam mu dasz dostęp. Wystartował na początku 2026 jako aplikacja na komputer, a [od lipca 2026 działa też w przeglądarce i na telefonie](https://claude.com/blog/cowork-web-mobile) (na start w planie Max).

<!-- TODO(Łukasz): merytoryka - Twoje pierwsze wrażenia z Cowork, konkretny przypadek użycia niecodingowego; dostępność w planach i ceny do weryfikacji (beta się rozszerza) -->

## Które narzędzie dla kogo

| Sytuacja | Sięgnij po |
| --- | --- |
| Chcesz darmowego asystenta na co dzień | Microsoft Copilot |
| Twoja firma żyje w Wordzie, Excelu i Teams | Microsoft 365 Copilot |
| Programujesz i chcesz podpowiedzi w edytorze | GitHub Copilot |
| Chcesz agenta, który sam pracuje na kodzie | Claude Code |
| Chcesz agenta do dokumentów i plików, bez terminala | Claude Cowork |

<!-- TODO(Łukasz): zweryfikuj tabelę i dodaj wiersz-dwa z własnych obserwacji (np. kiedy łączyć dwa naraz) -->

:::caution[Ceny i wersje zmieniają się szybko]
Świadomie nie podaję w tym artykule cen - w tej kategorii zmieniają się szybciej niż gdziekolwiek indziej. Przed decyzją sprawdź aktualne cenniki na stronach producentów (podlinkowane przy każdym narzędziu).
:::

## Podsumowanie

Wszystkie te narzędzia łączy jeden kierunek: AI przestaje być okienkiem czatu obok Twojej pracy, a staje się współpracownikiem działającym w jej środku. A pod spodem łączy je jeszcze jedno - potrzeba bezpiecznego dostępu do Twoich danych i narzędzi. Właśnie o tym jest następny artykuł.

:::note[Teraz wiesz]

- Że "Copilot" to trzy różne produkty: darmowy asystent Microsoft Copilot, firmowy Microsoft 365 Copilot i programistyczny GitHub Copilot
- Czym są Claude Code (agent w terminalu, dla programistów) i Claude Cowork (ta sama mechanika bez terminala, dla wszystkich)
- Jak dobrać narzędzie do swojej sytuacji - zaczynając od tego, w którym ekosystemie już pracujesz

**Następny krok:** [Serwery MCP](/narzedzia/serwery-mcp/) - poznasz standard, dzięki któremu asystenci AI podłączają się do Twojego kalendarza, dysku i firmowych systemów.
:::

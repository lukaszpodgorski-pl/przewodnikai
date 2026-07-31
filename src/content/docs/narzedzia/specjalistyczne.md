---
title: Specjalistyczne narzędzia AI - wideo, audio, kod, prezentacje
description: Przegląd specjalistycznych narzędzi AI - generowanie wideo, edycja audio, programowanie, prezentacje, analiza danych i więcej.
sidebar:
  label: 'Narzędzia specjalistyczne'
  order: 5
educationalLevel: Intermediate
teaches:
  - Specjalistyczne narzędzia AI
  - AI do wideo i audio
  - AI do generowania kodu
about:
  - name: Sztuczna inteligencja
    sameAs: https://pl.wikipedia.org/wiki/Sztuczna_inteligencja
---

![Zbiór symboli narzędzi - klatka filmu, fala dźwięku, nawias kodu, slajd - narzędzia specjalistyczne](../../../assets/narzedzia/specjalistyczne/specjalistyczne.jpg)

<!-- TODO(Łukasz): ceny i wersje w tym pliku pochodzą z 2024/2025 - zweryfikuj u dostawców przed publikacją -->

## AI do wszystkiego

Poza chatbotami, generatorami obrazów i narzędziami do pisania istnieje cały ekosystem specjalistycznych narzędzi AI. Zebrałem tu te, o które pytają mnie najczęściej - od generowania wideo, przez edycję audio, po wsparcie przy kodzie.

Traktuj ten rozdział jak mapę, a nie jak listę zakupów. Nie chodzi o to, żebyś założył konto wszędzie, tylko żebyś wiedział, po co sięgnąć, gdy pojawi się konkretny problem.

:::note[Dlaczego nie znajdziesz tu kwot]
Celowo nie podaję konkretnych stawek. Cenniki narzędzi AI zmieniają się szybciej, niż da się je odświeżać, a nieaktualna liczba w poradniku jest gorsza niż jej brak. Przy każdym narzędziu piszę więc tylko, czy ma plan darmowy, a jeśli producent publikuje cennik - linkuję do niego u źródła. Jak w ogóle działa rozliczanie za AI - subskrypcja, API u dostawcy, API u brokera - tłumaczę w rozdziale [Ile kosztuje AI](/narzedzia/ile-kosztuje-ai/).
:::

## Research i wyszukiwanie ze źródłami

Ta kategoria odpowiada na inne pytanie niż zwykły chatbot. Duże chatboty też potrafią dziś szukać w sieci i podawać przypisy - różnica jest taka, że tutaj praca na źródłach jest trybem podstawowym: każda odpowiedź powstaje z materiałów znalezionych na bieżąco albo z dokumentów, które sam wgrasz, i ma odnośniki, w które możesz kliknąć.

**Perplexity AI** - wyszukiwarka oparta na AI: zamiast listy linków dostajesz odpowiedź z przypisami do źródeł. Ma plan darmowy. [Cennik](https://www.perplexity.ai/hub/pricing). Funkcje: wyszukiwanie w czasie rzeczywistym, cytaty ze źródeł, Deep Research (generuje raporty z 100-300 źródeł). Najlepsze dla: research akademicki, weryfikacja faktów, analiza rynku.

:::tip[Czym Perplexity różni się od chatbota?]
Różnica jest w domyślnym trybie pracy. W ChatGPT czy Claude wyszukiwanie jest dodatkiem, który często trzeba uruchomić samemu; w Perplexity to podstawa działania, bo każde pytanie startuje od przeszukania internetu. Odpowiedź dostajesz z numerami przypisów odsyłającymi do konkretnych źródeł - możesz kliknąć i zweryfikować informację.
:::

**Gemini Notebook (dawniej NotebookLM)** - narzędzie Google do pracy z własnymi dokumentami. W lipcu 2026 zmieniło nazwę i weszło do rodziny Gemini; to ten sam produkt, notatników nie trzeba przenosić ani zakładać od nowa. Ma plan darmowy (wymaga konta Google). Funkcje: wgrywanie własnych źródeł (PDF, Google Docs, linki), "rozmowa" z dokumentami, generowanie podcastów audio. Czym się wyróżnia: model odpowiada wyłącznie na podstawie wgranych przez Ciebie źródeł, więc nie dopisze faktów znalezionych w internecie. Najlepsze dla: studenci, badacze, analiza dokumentacji, przygotowanie do egzaminów.

:::caution[Ograniczenie źródeł to nie to samo co brak błędów]
Chcę tu być z Tobą uczciwy, bo widuję to przekręcone w wielu poradnikach: Gemini Notebook zawęża materiał, z którego korzysta AI - i to naprawdę zmniejsza ryzyko zmyślonych faktów z zewnątrz. Ale model nadal może błędnie streścić fragment, pomylić liczby albo przypisać cytat do niewłaściwego miejsca w dokumencie. Dlatego każdą odpowiedź, na której Ci zależy, klikaj do przypisu i sprawdzaj w oryginale.
:::

:::note[Przykład użycia Gemini Notebook]
Wgrywasz 5 raportów rocznych firmy (PDF) i pytasz: "Jakie były główne trendy przychodów w ostatnich 5 latach?" AI odpowiada na podstawie tych dokumentów i wskazuje konkretne strony - a Ty klikasz w przypis i sprawdzasz, czy streszczenie faktycznie oddaje treść.
:::

**Genspark** - wyszukiwarka AI o odmiennym sposobie prezentowania wyników. Ma plan darmowy. Funkcje: "Sparkpages" - generuje dedykowane strony z odpowiedziami, wyszukiwanie multimodalne (nie tylko po tekście). Najlepsze dla: szybkie odpowiedzi na złożone pytania.

**Semantic Scholar** - wyszukiwarka publikacji naukowych wspierana przez AI. Ma plan darmowy. Funkcje: baza ponad 200 milionów publikacji naukowych, rekomendacje dobierane przez AI, analiza cytowań. Najlepsze dla: research akademicki, przegląd literatury.

**Consensus** - wyszukiwarka odpowiedzi w publikacjach naukowych z oceną konsensusu. Ma plan darmowy. Funkcje: odpowiedzi z cytowaniami, "Consensus Meter" pokazujący zgodność badań. Najlepsze dla: praca oparta na dowodach naukowych, weryfikacja twierdzeń.

## Microsoft 365 Copilot - AI w środowisku korporacyjnym

Dla pracowników dużych organizacji, Microsoft 365 Copilot integruje AI bezpośrednio z narzędziami biurowymi. Bez planu darmowego - to płatny dodatek do firmowej licencji Microsoft 365. Dostępność: Word, Excel, PowerPoint, Outlook, Teams. Osobny, konsumencki plan Copilot Pro został wycofany ze sprzedaży (wsparcie kończy się 1 sierpnia 2026), a jego następcą jest [Microsoft 365 Premium](https://www.microsoft.com/pl-pl/microsoft-365/premium). Szerzej opisuję rodzinę Copilot w artykule [Asystenci agentowi](/narzedzia/asystenci-agentowi/).

| Aplikacja | Co potrafi Copilot | Przykład użycia |
| --- | --- | --- |
| **Teams** | Transkrypcja spotkań, podsumowania, lista ustaleń do wykonania | "Kto co obiecał zrobić na tym spotkaniu?" |
| **Excel** | Analiza danych w języku naturalnym, formuły | "Pokaż trendy sprzedaży Q3 z podziałem na regiony" |
| **PowerPoint** | Generowanie prezentacji z dokumentów | "Zrób szkic prezentacji na podstawie tego raportu" |
| **Outlook** | Szkice maili, podsumowania wątków | "Napisz profesjonalną odpowiedź na ten mail" |
| **Word** | Pisanie, edycja, podsumowania | "Podsumuj ten 30-stronowy dokument w 5 punktach" |

:::caution[Ważna różnica vs. ChatGPT]
Copilot for M365 ma dostęp do Twoich firmowych danych (pliki SharePoint, maile, kalendarze) od razu po wdrożeniu, z zachowaniem uprawnień nadanych w firmie. Może np. znaleźć "tamten dokument o budżecie od Ani z zeszłego miesiąca". ChatGPT bez dodatkowej konfiguracji tego nie zrobi - da się go podłączyć do własnych danych, ale to osobna robota, którą opisuję w rozdziale [Serwery MCP](/narzedzia/serwery-mcp/).
:::

## Generowanie i edycja wideo

**Runway** - platforma do generowania i edycji wideo z AI o szerokim zestawie funkcji montażowych. Ma plan darmowy (jednorazowa pula kredytów). [Cennik](https://runway.com/pricing). Aktualny model generujący to Gen-4.5: wideo z tekstu lub obrazu. Funkcje: usuwanie tła, motion tracking (śledzenie ruchu obiektu w kadrze), inpainting wideo (domalowywanie brakujących fragmentów obrazu). Najlepsze dla: filmowcy, twórcy treści.

**Pika** - generowanie krótkich klipów wideo z tekstu, obecnie w wersji Pika 2.5. Ma plan darmowy. [Cennik](https://pika.art/pricing). Funkcje: wideo z opisu tekstowego (text-to-video), wideo z pojedynczego obrazu (image-to-video), edycja ruchu. Najlepsze dla: szybkie klipy, social media.

**HeyGen** - tworzenie wideo z wirtualnymi prezenterami (awatary AI), model awatara Avatar V. Ma plan darmowy. [Cennik](https://www.heygen.com/pricing). Funkcje: gotowe awatary, wiele języków, lip sync (dopasowanie ruchu ust do nagranego głosu). Najlepsze dla: szkolenia, marketing, prezentacje.

**Synthesia** - profesjonalne wideo z awatarami AI dla firm, na silniku Express-2 (awatary całopostaciowe). Ma plan darmowy (Basic). [Cennik](https://www.synthesia.io/pricing). Funkcje: obszerna biblioteka awatarów, wiele języków, awatary na zamówienie. Najlepsze dla: korporacyjne szkolenia, onboarding.

**Descript** - edycja wideo i audio przez edycję tekstu; asystent AI nazywa się Underlord. Ma plan darmowy. [Cennik](https://www.descript.com/pricing). Funkcje: transkrypcja, usuwanie "yyy", klonowanie głosu. Najlepsze dla: podcasty, YouTube.

## Audio i muzyka

**ElevenLabs** - synteza mowy i klonowanie głosu z naciskiem na naturalną intonację. Ma plan darmowy (10 000 znaków miesięcznie). [Cennik](https://elevenlabs.io/pricing). Funkcje: zamiana tekstu na mowę (text-to-speech), klonowanie głosu, dubbing (podłożenie głosu w innym języku). Najlepsze dla: audiobooki, dubbing, nagrania lektorskie. Firmę założyli Polacy - Mateusz Staniszewski i Piotr Dąbkowski - więcej w [polskim ekosystemie AI](/suwerenne-ai/polski-ekosystem-ai/).

**Murf.ai** - profesjonalne nagrania lektorskie (voiceover) generowane przez AI, z myślą o firmach. Ma plan darmowy. [Cennik](https://murf.ai/pricing). Funkcje: szeroka biblioteka głosów, wiele języków, regulacja wysokości i tempa głosu. Najlepsze dla: prezentacje, e-learning, reklamy.

**Suno** - generowanie muzyki i piosenek z tekstu. Ma plan darmowy (50 kredytów dziennie). [Cennik](https://suno.com/pricing). Funkcje: pełne piosenki z wokalem, różne gatunki. Najlepsze dla: tworzenie muzyki, jingle, podkład dźwiękowy.

**Udio** - konkurent Suno z wysoką jakością generowanej muzyki. Ma plan darmowy. [Cennik](https://www.udio.com/pricing). Funkcje: realistyczne wokale, produkcja muzyczna.

:::caution[Udio: nie pobierzesz swoich utworów]
Po ugodzie z Universal Music Group użytkownicy Udio nie mogą już pobierać ani eksportować wygenerowanych utworów - zostają one w serwisie. Jeśli planujesz użyć muzyki poza platformą, to zmienia sens korzystania z Udio i warto sprawdzić alternatywy.
:::

## Programowanie i rozwój

**GitHub Copilot** - AI asystent kodowania zintegrowany z edytorem. Ma plan darmowy (plany: Free, Pro, Pro+, Max). [Cennik](https://github.com/features/copilot/plans). Funkcje: podpowiadanie kodu w trakcie pisania (autocomplete), generowanie funkcji, wyjaśnienia kodu. Działa w edytorach: VS Code, JetBrains, Neovim. Więcej o nim - i o agentowych alternatywach jak Claude Code - w [Asystentach agentowych](/narzedzia/asystenci-agentowi/).

**Cursor** - edytor kodu z wbudowanym AI (zbudowany na kodzie VS Code). Ma plan darmowy. [Cennik](https://cursor.com/pricing). Funkcje: chat w edytorze, edycja wielu plików, kontekst całego projektu. Najlepsze dla: programiści szukający głębszej integracji AI.

**Replit** - środowisko programistyczne w przeglądarce z AI; asystent nazywa się Replit Agent. Ma plan darmowy (Starter). [Cennik](https://replit.com/pricing). Funkcje: generowanie aplikacji, publikacja gotowej aplikacji w sieci (deployment) bez konfigurowania serwera. Najlepsze dla: nauka programowania, szybkie prototypy.

**Tabnine** - podpowiadanie kodu z naciskiem na prywatność (modele mogą działać lokalnie). Bez planu darmowego - firmę przejął Tricentis, a darmowy plan został wycofany. [Cennik](https://www.tabnine.com/pricing/). Najlepsze dla: firmy dbające o prywatność kodu.

**v0 (Vercel)** - generowanie interfejsów React z opisu, pod adresem v0.app. Ma plan darmowy z limitami. [Cennik](https://v0.app/pricing). Funkcje: interfejs z opisu tekstowego (text-to-UI), komponenty React, biblioteka shadcn/ui. Najlepsze dla: frontend developerzy, szybkie prototypy UI.

## Prezentacje i dokumenty

**Gamma** - tworzenie prezentacji, dokumentów i stron z AI. Ma plan darmowy (400 kredytów na start). [Cennik](https://gamma.app/pricing). Funkcje: generowanie slajdów z tekstu, redesign, eksport. Najlepsze dla: szybkie prezentacje, prezentacje dla inwestorów (pitch deck).

**Beautiful.ai** - inteligentny design prezentacji. Bez planu darmowego - jest tylko 14-dniowy okres próbny, do którego trzeba podać kartę. [Cennik](https://www.beautiful.ai/pricing). Funkcje: inteligentne szablony, automatyczne układanie slajdów (auto-layout), zestaw materiałów marki (Brand kit). Najlepsze dla: profesjonalne prezentacje biznesowe.

Jeśli szukasz darmowego punktu startu w tej kategorii, zacznij od Gammy - Beautiful.ai ma sens dopiero wtedy, gdy prezentacje robisz regularnie i zależy Ci na spójnym systemie szablonów.

## Analiza danych i research

**Julius** - analiza danych przez rozmowę: wykresy, statystyki, predykcje. Ma plan darmowy. [Cennik](https://julius.ai/pricing). Funkcje: wgrywanie plików CSV/Excel, wizualizacje, Python pod spodem. Najlepsze dla: analiza danych bez kodowania.

**Elicit** - AI asystent do researchu naukowego. Ma plan darmowy. [Cennik](https://elicit.com/pricing). Funkcje: przeszukiwanie literatury, streszczenia, wyciąganie danych z publikacji. Najlepsze dla: naukowcy, studenci, badacze.

## Produktywność i automatyzacja

**Otter.ai** - transkrypcja spotkań w czasie rzeczywistym, dziś rozwijana też w stronę agentów AI. Ma plan darmowy (300 minut transkrypcji miesięcznie). [Cennik](https://otter.ai/pricing). Funkcje: transkrypcja na żywo, integracja z Zoomem i Google Meet, podsumowania spotkań. Najlepsze dla: spotkania, wywiady, wykłady.

**Fireflies.ai** - automatyczne notatki ze spotkań. Ma plan darmowy. [Cennik](https://fireflies.ai/pricing). Funkcje: bot dołączający do spotkań, podsumowania, lista ustaleń do wykonania. Najlepsze dla: zespoły, zarządzanie spotkaniami.

**Zapier AI** - automatyzacja powtarzalnych procesów (workflow) z AI. Ma plan darmowy. [Cennik](https://zapier.com/pricing). Funkcje: AI Actions w automatyzacjach, chatboty. Najlepsze dla: automatyzacja procesów biznesowych.

**Make (wcześniej Integromat)** - wizualne automatyzacje z integracją AI. Ma plan darmowy. [Cennik](https://www.make.com/en/pricing). Funkcje: moduły AI (OpenAI, Claude), scenariusze budowane z klocków połączonych strzałkami. Najlepsze dla: zaawansowane automatyzacje.

## Design i grafika

**Figma AI** - funkcje AI wbudowane w Figmę, rozliczane wspólną pulą kredytów. Ma plan darmowy (Starter, z dzienną pulą kredytów AI). [Cennik](https://www.figma.com/pricing/). Funkcje: generowanie wariantów, automatyczne układanie elementów (auto-layout), nazywanie warstw. Najlepsze dla: UI/UX designerzy.

**Khroma** - AI do wyboru palet kolorów. Ma plan darmowy. Funkcje: nauka Twoich preferencji, generowanie palet. Najlepsze dla: designerzy, branding.

**Remove.bg** - automatyczne usuwanie tła z obrazów. Ma plan darmowy (w niższej rozdzielczości). [Cennik](https://www.remove.bg/pricing). Funkcje: natychmiastowe usuwanie tła, dostęp przez API. Najlepsze dla: e-commerce, zdjęcia produktowe.

**Cleanup.pictures** - usuwanie niechcianych elementów ze zdjęć. Ma plan darmowy (w rozdzielczości do 720p). Funkcje: usuwanie obiektów, domalowywanie tła w ich miejscu (inpainting). Najlepsze dla: retusz zdjęć, usuwanie obiektów.

## Podsumowanie kategorii

| Kategoria | Top narzędzie | Alternatywa warta sprawdzenia |
| --- | --- | --- |
| **Wideo AI** | Runway | Pika (ma plan darmowy) |
| **Awatary wideo** | Synthesia | HeyGen (ma plan darmowy) |
| **Głos AI (text-to-speech)** | ElevenLabs | Murf.ai (ma plan darmowy) |
| **Muzyka AI** | Suno | Udio (bez pobierania utworów) |
| **Kodowanie** | GitHub Copilot | Cursor (ma plan darmowy) |
| **Prezentacje** | Gamma | Beautiful.ai (tylko okres próbny) |
| **Analiza danych** | Julius | ChatGPT z analizą danych |
| **Transkrypcja** | Otter.ai | Fireflies (ma plan darmowy) |

## Jak wybierać narzędzia?

Kiedy ktoś pyta mnie, od czego zacząć w tym gąszczu, podaję zawsze te same cztery kroki:

1. **Zdefiniuj problem** - jakie konkretne zadanie chcesz zautomatyzować? Nie szukaj narzędzia, szukaj rozwiązania problemu.
2. **Wypróbuj darmowe plany** - prawie każde narzędzie ma darmowy plan albo okres próbny. Testuj przed zakupem.
3. **Integracje** - czy narzędzie współpracuje z Twoim obecnym sposobem pracy? API, Zapier, natywne integracje?
4. **Prywatność i bezpieczeństwo** - gdzie trafiają Twoje dane? Czy są używane do treningu modeli? Ważne dla firm i wrażliwych danych.

## Podsumowanie

- **Wideo:** Runway, Pika, HeyGen, Synthesia, Descript
- **Audio:** ElevenLabs, Suno, Udio, Murf.ai
- **Kod:** GitHub Copilot, Cursor, Replit, v0
- **Prezentacje:** Gamma, Beautiful.ai
- **Dane:** Julius, Elicit, Consensus
- **Produktywność:** Otter.ai, Fireflies, Zapier
- **Design:** Figma AI, Remove.bg, Cleanup.pictures

Lista narzędzi AI zmienia się z miesiąca na miesiąc i nie namawiam Cię do nadążania za wszystkim. Radzę odwrotnie: wybierz jedno narzędzie do problemu, który masz teraz, i naucz się go porządnie.

<!-- TODO(Łukasz): tu zadziałałaby anegdota - które z tych narzędzi realnie weszło do Twojego warsztatu i co dzięki niemu przestałeś robić ręcznie? -->
<!-- TODO(Łukasz): warto dopisać przykład narzędzia, które testowałeś i odpuściłeś - to buduje wiarygodność mocniej niż lista rekomendacji -->

:::note[Teraz wiesz]

- Jakie specjalistyczne narzędzia AI istnieją do wideo (Runway, HeyGen), audio (ElevenLabs, Suno), kodu (Copilot, Cursor) i prezentacji (Gamma)
- Do czego służą Perplexity AI i Gemini Notebook - research ze źródłami i praca na Twoich własnych dokumentach (oraz dlaczego nawet Gemini Notebook trzeba sprawdzać)
- Jak wybierać narzędzia AI: zdefiniuj problem, wypróbuj darmowe plany, sprawdź integracje z Twoim workflow i polityki prywatności

**Następny krok:** [Asystenci agentowi](/narzedzia/asystenci-agentowi/) - poznasz narzędzia, które nie tylko podpowiadają, ale wykonują pracę za Ciebie: rodzinę Copilot, Claude Code i Claude Cowork.
:::

---
title: Embedding - Jak AI rozumie znaczenie słów i tekstu
description: Poznaj koncepcję embeddingów - reprezentacji numerycznych tekstu. Dowiedz się, jak AI rozumie podobieństwo semantyczne i wyszukuje informacje.
sidebar:
  label: 'Embedding'
  order: 7
educationalLevel: Advanced
teaches:
  - Czym jest embedding
  - Jak AI rozumie znaczenie tekstu
  - Wektorowa reprezentacja tekstu
about:
  - name: Word embedding
    sameAs: https://en.wikipedia.org/wiki/Word_embedding
  - name: Przetwarzanie języka naturalnego
    sameAs: https://pl.wikipedia.org/wiki/Przetwarzanie_j%C4%99zyka_naturalnego
faq:
  - q: Czym jest embedding?
    a: Embedding to sposób zamiany tekstu (słów, zdań) na wektory liczbowe, które zachowują semantyczne znaczenie. Dzięki temu AI może matematycznie porównywać podobieństwo tekstów.
---

:::caution[Poziom: Zaawansowany]
Ten artykuł wyjaśnia, jak AI rozumie znaczenie tekstu pod maską. To wiedza, która pomaga zrozumieć, dlaczego wyszukiwanie semantyczne działa lepiej niż szukanie po słowach kluczowych. Jeśli dopiero zaczynasz - możesz to spokojnie pominąć i wrócić później.
:::

## Jak AI "rozumie" tekst?

Komputery operują na liczbach, nie na słowach. Aby AI mogła przetwarzać tekst, musi go najpierw zamienić na reprezentację numeryczną. Tu wkraczają **embeddingi** - jeden z fundamentalnych konceptów w przetwarzaniu języka naturalnego.

Wyjaśniam to pojęcie, bo wraca potem przy wyszukiwaniu semantycznym i przy RAG - a to już rzeczy, na które natrafisz w opisach narzędzi, z których korzystasz.

## Czym jest embedding?

**Embedding** to reprezentacja słowa, zdania lub dokumentu jako wektora liczb (listy liczb). Te liczby kodują "znaczenie" tekstu w sposób, który komputer może przetwarzać.

:::note[Analogia]
Wyobraź sobie mapę, gdzie każde słowo ma swoje współrzędne. Słowa o podobnym znaczeniu są blisko siebie (np. "król" i "królowa"), a słowa niepowiązane - daleko. Embedding to właśnie takie "współrzędne" słowa w wielowymiarowej przestrzeni.
:::

```text
"kot" → [0.2, -0.5, 0.8, 0.1, ..., 0.3]  (np. 768 liczb)
"pies" → [0.3, -0.4, 0.7, 0.2, ..., 0.4]  (podobny wektor!)
"samochód" → [-0.6, 0.8, -0.2, 0.9, ..., -0.1]  (różny wektor)
```

## Co embeddingi dają w praktyce

**Podobieństwo semantyczne** - słowa o podobnym znaczeniu mają podobne wektory. Dzięki temu podobieństwo znaczeniowe dwóch tekstów da się policzyć matematycznie, a nie tylko ocenić "na oko".

**Arytmetyka na słowach** - słynny przykład: `król - mężczyzna + kobieta ≈ królowa`. Embeddingi pozwalają na takie "semantyczne obliczenia", gdzie relacje między słowami są zachowane jako operacje wektorowe.

**Uniwersalność** - ten sam embedding może być używany do wielu zadań: wyszukiwania, klasyfikacji, grupowania, rekomendacji.

## Zastosowania embeddingów

- **Wyszukiwanie semantyczne** - znajdowanie dokumentów na podstawie znaczenia, nie tylko słów kluczowych. "Jak naprawić samochód" znajdzie też artykuły o "serwisowaniu auta"
- **RAG (Retrieval Augmented Generation)** - embeddingi umożliwiają wyszukiwanie odpowiednich fragmentów dokumentów, które następnie są przekazywane do LLM jako kontekst
- **Systemy rekomendacji** - rekomendowanie podobnych produktów, artykułów czy filmów na podstawie podobieństwa embeddingów
- **Klastrowanie dokumentów** - automatyczne grupowanie dokumentów według tematyki bez definiowania kategorii z góry
- **Wykrywanie duplikatów** - identyfikacja tekstów, które mówią o tym samym, nawet jeśli używają innych słów

## Popularne modele embeddingów

| Model | Producent | Wymiary | Zastosowanie |
| --- | --- | --- | --- |
| **text-embedding-3-small** | OpenAI | 1536 | Ogólne, ekonomiczne |
| **text-embedding-3-large** | OpenAI | 3072 | Najwyższa jakość |
| **voyage-large-2** | Voyage AI | 1536 | RAG, wyszukiwanie |
| **e5-large** | Microsoft | 1024 | Open-source |
| **all-MiniLM** | Sentence-Transformers | 384 | Szybki, lokalny |

Tej tabeli nie musisz znać na pamięć. Ma pokazać jedno: modeli embeddingowych jest wiele i różnią się liczbą wymiarów, czyli tym, jak szczegółowo zapisują znaczenie tekstu.

## Jak działają bazy wektorowe?

**Bazy wektorowe** to specjalne bazy danych zoptymalizowane do przechowywania i wyszukiwania embeddingów. Zamiast tradycyjnych zapytań SQL, wyszukujesz "najbliższe" wektory.

Popularne bazy wektorowe: **Pinecone** (zarządzana usługa w chmurze), **Weaviate** (open-source z wieloma funkcjami), **Chroma** (lekka, idealna do prototypów), **Milvus** (enterprise-grade, open-source), **pgvector** (rozszerzenie do PostgreSQL).

Proces wyszukiwania: dokument → embedding → zapisz w bazie wektorowej; zapytanie użytkownika → embedding zapytania; znajdź najbliższe wektory w bazie; zwróć odpowiadające im dokumenty.

## Embeddingi w praktyce - RAG

Z całego rozdziału to pojęcie przyda Ci się najczęściej. RAG to najpopularniejszy sposób, w jaki embeddingi trafiają do narzędzi używanych na co dzień - i skrót, który zobaczysz w niejednej ofercie.

**RAG** (Retrieval Augmented Generation) to technika łącząca embeddingi z modelami językowymi:

```text
1. INDEKSOWANIE (jednorazowe):
   Dokumenty → Podział na fragmenty → Embeddingi → Baza wektorowa

2. WYSZUKIWANIE (przy każdym pytaniu):
   Pytanie użytkownika → Embedding pytania → Wyszukaj podobne fragmenty

3. GENEROWANIE:
   Znalezione fragmenty + Pytanie → LLM → Odpowiedź
```

**Korzyści RAG:** LLM ma dostęp do aktualnych, specyficznych informacji; mniejsze ryzyko halucynacji; możliwość wskazania źródeł; łatwa aktualizacja bazy wiedzy.

## Podsumowanie

- **Embedding** to numeryczna reprezentacja tekstu jako wektor liczb
- **Podobieństwo** - podobne teksty mają podobne wektory
- **Zastosowania** - wyszukiwanie semantyczne, RAG, rekomendacje, klastrowanie
- **Modele** - OpenAI, Voyage, Microsoft, open-source
- **Bazy wektorowe** - specjalne bazy do przechowywania i wyszukiwania embeddingów
- **RAG** - technika łącząca embeddingi z LLM dla lepszych odpowiedzi

:::note[Teraz wiesz]

- Czym są embeddingi - numeryczne reprezentacje tekstu, dzięki którym AI "rozumie" znaczenie słów i zdań
- Jak działa wyszukiwanie semantyczne i RAG - techniki, które pozwalają AI korzystać z Twoich dokumentów
- Dlaczego bazy wektorowe to fundament nowoczesnych aplikacji AI opartych na wiedzy

**Następny krok:** [RAG - jak AI korzysta z Twoich dokumentów](/jak-dziala-ai/rag/) - zobaczysz, jak embeddingi i wyszukiwanie semantyczne łączą się w technikę, dzięki której chatbot odpowiada na podstawie Twoich plików, a nie z pamięci.
:::

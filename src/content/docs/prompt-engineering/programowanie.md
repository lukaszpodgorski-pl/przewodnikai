---
title: Programowanie z AI - Generowanie i Wyjaśnianie Kodu
description: Naucz się wykorzystywać AI do programowania - generowanie kodu, debugging, wyjaśnianie fragmentów, pisanie zapytań SQL i automatyzacja zadań.
sidebar:
  label: 'Programowanie z AI'
  order: 8
educationalLevel: Intermediate
teaches:
  - Jak AI pomaga w programowaniu
  - Generowanie kodu z AI
  - Debugowanie z pomocą AI
about:
  - name: Programowanie
    sameAs: https://pl.wikipedia.org/wiki/Programowanie_komputerów
  - name: Sztuczna inteligencja
    sameAs: https://pl.wikipedia.org/wiki/Sztuczna_inteligencja
mentions:
  - name: GitHub Copilot
    sameAs: https://en.wikipedia.org/wiki/GitHub_Copilot
    type: SoftwareApplication
  - name: ChatGPT
    sameAs: https://en.wikipedia.org/wiki/ChatGPT
    type: SoftwareApplication
faq:
  - q: Czy AI może programować?
    a: AI potrafi generować, wyjaśniać i debugować kod. Nie zastępuje programisty, ale znacząco przyspiesza pracę - zwłaszcza w pisaniu powtarzalnego kodu i szukaniu błędów.
---

![Asystent AI obok płynących bloków kodu - generowanie i wyjaśnianie kodu](../../../assets/prompt-engineering/programowanie/programowanie.jpg)

## AI jako partner programisty

Narzędzia takie jak GitHub Copilot, ChatGPT czy Claude potrafią generować kod, wyjaśniać złożone fragmenty, pomagać w debugowaniu i automatyzować rutynowe zadania. Traktuj je jak bardzo szybkiego juniora: nadrabia tempem, ale wszystko po nim sprawdzasz. Pokażę Ci, jak korzystać z nich w codziennej pracy - i czego nie oddawać modelowi bez sprawdzenia.

## Generowanie kodu z opisu

Najprostsze zastosowanie - opisujesz, co chcesz osiągnąć, a AI generuje kod.

**Podstawowe generowanie:**

```text
Napisz funkcję w Pythonie, która:
- Przyjmuje listę liczb
- Zwraca tylko liczby parzyste
- Sortuje wynik malejąco
```

```python
def filter_and_sort_even(numbers):
    """
    Filtruje liczby parzyste i sortuje malejąco.

    Args:
        numbers: Lista liczb

    Returns:
        Lista parzystych liczb posortowanych malejąco
    """
    even_numbers = [n for n in numbers if n % 2 == 0]
    return sorted(even_numbers, reverse=True)

# Przykład użycia
numbers = [1, 4, 7, 2, 9, 8, 3, 6]
result = filter_and_sort_even(numbers)
print(result)  # [8, 6, 4, 2]
```

**Generowanie z komentarzami** - możesz też pisać specyfikację jako komentarze, a AI wypełni kod:

```python
Wypełnij poniższy kod zgodnie z komentarzami:

def process_user_data(users):
    # 1. Filtruj użytkowników powyżej 18 lat
    # 2. Wyodrębnij tylko imiona i emaile
    # 3. Posortuj alfabetycznie po imieniu
    # 4. Zwróć jako listę słowników
    pass
```

## Generowanie zapytań SQL

AI doskonale radzi sobie z SQL - wystarczy opisać strukturę bazy i zadanie.

```text
Baza danych ma następujące tabele:

Tabela: departments
Kolumny: DepartmentId (INT, PK), DepartmentName (VARCHAR)

Tabela: students
Kolumny: StudentId (INT, PK), StudentName (VARCHAR),
         DepartmentId (INT, FK), EnrollmentDate (DATE)

Tabela: courses
Kolumny: CourseId (INT, PK), CourseName (VARCHAR),
         Credits (INT)

Tabela: enrollments
Kolumny: StudentId (INT, FK), CourseId (INT, FK),
         Grade (DECIMAL)

Napisz zapytanie SQL, które:
Znajdzie wszystkich studentów z działu "Computer Science",
którzy mają średnią ocen powyżej 4.0,
posortowanych po średniej malejąco.
```

```sql
SELECT
    s.StudentId,
    s.StudentName,
    d.DepartmentName,
    AVG(e.Grade) as AverageGrade
FROM students s
JOIN departments d ON s.DepartmentId = d.DepartmentId
JOIN enrollments e ON s.StudentId = e.StudentId
WHERE d.DepartmentName = 'Computer Science'
GROUP BY s.StudentId, s.StudentName, d.DepartmentName
HAVING AVG(e.Grade) > 4.0
ORDER BY AverageGrade DESC;
```

:::caution[Wskazówka]
Zawsze podawaj pełną strukturę tabel (kolumny, typy, klucze). Im więcej kontekstu, tym dokładniejsze zapytanie.
:::

## Wyjaśnianie kodu

AI potrafi wyjaśnić działanie skomplikowanego kodu w przystępny sposób.

```python
Wyjaśnij poniższy kod Python linijka po linijce.
Skieruj wyjaśnienie do początkującego programisty.

def memoize(func):
    cache = {}
    def wrapper(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

Możesz dostosować poziom szczegółowości: "Wyjaśnij jak dla kogoś, kto dopiero uczy się programować" (dla początkującego), "Wyjaśnij działanie, skupiając się na wzorcach projektowych" (średnio-zaawansowany), "Przeanalizuj złożoność obliczeniową i optymalizacje" (zaawansowany).

## Debugging z AI

AI może pomóc znaleźć i naprawić błędy w kodzie.

**Znajdowanie błędów:**

```python
Ten kod powinien odwracać string, ale nie działa poprawnie.
Znajdź błąd i go napraw.

def reverse_string(s):
    result = ""
    for i in range(len(s)):
        result += s[i]
    return result

print(reverse_string("hello"))  # Powinno: "olleh", Jest: "hello"
```

**Odpowiedź AI:** błąd - pętla iteruje od 0 do len(s)-1, dodając znaki w oryginalnej kolejności zamiast odwrotnej.

```python
# Poprawiony kod:
def reverse_string(s):
    result = ""
    for i in range(len(s) - 1, -1, -1):  # Iteracja od końca
        result += s[i]
    return result

# Lub bardziej pythonowy sposób:
def reverse_string(s):
    return s[::-1]
```

**Analiza stack trace:**

```text
Mój kod zwraca następujący błąd. Wyjaśnij przyczynę
i zaproponuj rozwiązanie:

Traceback (most recent call last):
  File "app.py", line 45, in process_data
    result = data['users'][0]['email']
KeyError: 'users'

Kod:
def process_data(data):
    result = data['users'][0]['email']
    return result
```

## Refaktoryzacja kodu

AI może pomóc ulepszyć istniejący kod, zachowując jego funkcjonalność.

```python
# Przed refaktoryzacją:
def calc(l):
    t = 0
    for i in range(len(l)):
        if l[i] > 0:
            t = t + l[i]
    return t / len(l) if len(l) > 0 else 0
```

```python
# Po refaktoryzacji:
def calculate_positive_average(numbers: list[float]) -> float:
    """
    Oblicza średnią arytmetyczną liczb dodatnich z listy.

    Args:
        numbers: Lista liczb do przetworzenia

    Returns:
        Średnia liczb dodatnich lub 0.0, jeśli nie ma żadnej
    """
    positive_numbers = [n for n in numbers if n > 0]

    if not positive_numbers:
        return 0.0

    return sum(positive_numbers) / len(positive_numbers)
```

Zatrzymaj się na chwilę przy ostatniej linii, bo to najważniejszy moment tego przykładu. Oryginalny `calc` sumował tylko liczby dodatnie, ale dzielił przez długość **całej** listy. Dla `[10, -5, -5]` zwracał 3,33, choć jedyna dodatnia liczba to 10.

Czy to był błąd, czy zamierzone zachowanie? Tego z samego kodu nie wyczytasz - a AI też nie. Model dostaje funkcję nazwaną `calc` bez dokumentacji i zgaduje intencję. Jeśli zgadnie "średnia dodatnich", napisze ładny docstring, poprawną nazwę i zostawi dzielenie po staremu. Dostaniesz kod, który wygląda lepiej i **kłamie w opisie**.

:::caution[Refaktoryzacja potrafi odsłonić stary błąd]
Kiedy prosisz AI o refaktoryzację, pytaj wprost: "czy zachowujesz dotychczasowe zachowanie, czy je poprawiasz?". Jeśli nazwa i dokumentacja przestają pasować do działania kodu, to sygnał, że w oryginale siedział błąd - i że ktoś musi zdecydować, którą wersję uznajemy za poprawną. Tej decyzji nie oddawaj modelowi.
:::

**Rodzaje refaktoryzacji:** czytelność (lepsze nazwy zmiennych, dokumentacja), wydajność (optymalizacja algorytmów), wzorce (zastosowanie design patterns), testowanie (dodanie testów jednostkowych), bezpieczeństwo (usunięcie podatności).

## Pisanie testów

AI może automatycznie generować testy jednostkowe dla istniejącego kodu.

```python
def validate_email(email: str) -> bool:
    """Sprawdza czy email ma poprawny format."""
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))
```

```python
import pytest
from your_module import validate_email

class TestValidateEmail:
    """Testy dla funkcji validate_email."""

    # Poprawne emaile
    def test_valid_simple_email(self):
        assert validate_email("user@example.com") == True

    def test_valid_email_with_dots(self):
        assert validate_email("user.name@example.com") == True

    # Niepoprawne emaile
    def test_invalid_no_at(self):
        assert validate_email("userexample.com") == False

    def test_invalid_no_domain(self):
        assert validate_email("user@") == False

    def test_invalid_empty_string(self):
        assert validate_email("") == False

    # Przypadki brzegowe
    def test_short_tld(self):
        assert validate_email("user@example.co") == True

    def test_single_char_tld(self):
        assert validate_email("user@example.c") == False
```

## Konwersja między językami

AI może tłumaczyć kod z jednego języka programowania na inny.

```python
# Python:
def process_users(users):
    active_users = list(filter(lambda u: u['active'], users))
    names = list(map(lambda u: u['name'].upper(), active_users))
    return sorted(names)
```

```javascript
// JavaScript (ES6+):
const processUsers = (users) => {
    const activeUsers = users.filter(u => u.active);
    const names = activeUsers.map(u => u.name.toUpperCase());
    return names.sort();
};

// Lub w jednej linii:
const processUsers = (users) =>
    users
        .filter(u => u.active)
        .map(u => u.name.toUpperCase())
        .sort();
```

## Generowanie dokumentacji

AI może automatycznie tworzyć dokumentację dla istniejącego kodu - docstringi, komentarze i type hints dla klas i funkcji, na podstawie samej implementacji.

## Najlepsze praktyki kodowania z AI

<!-- TODO(Łukasz): tu zadziałałaby anegdota - jaki kod od AI wyglądał u Ciebie poprawnie, a okazał się błędny dopiero przy czytaniu linijka po linijce? -->

1. **Czytaj wygenerowany kod, zanim go uruchomisz.** To jedyna zasada z tej listy, której nie odpuszczaj. Kod od modelu wygląda poprawnie z definicji - jest składny, ma docstringi i sensowne nazwy - a mimo to potrafi mieć błąd logiczny albo lukę bezpieczeństwa. Traktuj go jak pull request od nieznajomego: dopóki go nie przeczytasz i nie przetestujesz, nie wiesz, co robi.
2. **Podawaj kontekst technologiczny** - określ wersję języka, framework, biblioteki. "Python 3.11 z FastAPI i Pydantic v2" da lepsze wyniki niż "Python".
3. **Używaj AI do nauki, nie kopiowania** - staraj się zrozumieć wygenerowany kod. Pytaj o wyjaśnienia. To najlepsza forma nauki.
4. **Iteruj nad rozwiązaniami** - jeśli pierwszy wynik nie jest idealny, doprecyzuj wymagania lub poproś o alternatywne podejście.

## Popularne narzędzia AI dla programistów

| Narzędzie | Zastosowanie | Integracja |
| --- | --- | --- |
| **GitHub Copilot** | Autouzupełnianie, generowanie kodu | VS Code, JetBrains, Neovim |
| **ChatGPT** | Wyjaśnienia, debugging, architektura | Web, API, integracje |
| **Claude** | Długi kontekst, analiza kodu | Web, API |
| **Cursor** | IDE z wbudowanym AI | Samodzielne IDE |
| **Amazon CodeWhisperer** | Autouzupełnianie, bezpieczeństwo | VS Code, JetBrains |
| **Tabnine** | Autouzupełnianie lokalne | Większość IDE |

## Podsumowanie

- **Generowanie kodu** - opisz zadanie, otrzymaj implementację
- **SQL** - podaj strukturę bazy, otrzymaj zapytanie
- **Wyjaśnienia** - AI tłumaczy kod na różnych poziomach zaawansowania
- **Debugging** - pomoc w znajdowaniu i naprawianiu błędów
- **Refaktoryzacja** - ulepszanie istniejącego kodu
- **Testy** - automatyczne generowanie testów jednostkowych
- **Dokumentacja** - tworzenie docstringów i komentarzy

:::note[Teraz wiesz]

- Jak wykorzystywać AI do generowania kodu, zapytań SQL, testów jednostkowych i dokumentacji
- Jak AI pomaga w debugowaniu, refaktoryzacji i konwersji kodu między językami programowania
- Dlaczego zawsze trzeba weryfikować wygenerowany kod i podawać kontekst technologiczny (wersja języka, framework)

**Następny krok:** [Najlepsze praktyki prompt engineering](/prompt-engineering/najlepsze-praktyki/) - poznasz zasady bezpieczeństwa promptów, obronę przed prompt injection i najczęstsze błędy do uniknięcia.
:::

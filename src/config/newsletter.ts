/**
 * Konfiguracja zapisu na newsletter (Sendy, hosting wlasny).
 *
 * Formularz wysyla zwykly POST prosto do Sendy - bez JS i bez kodu po stronie
 * serwera, co jest warunkiem koniecznym przy statycznym hostingu na Workers.
 * Wzorzec przeniesiony z dzialajacego formularza na kursn8n.pl.
 */

export const NEWSLETTER = {
	/** Endpoint instancji Sendy. Wspolny dla wszystkich serwisow. */
	endpoint: 'https://lukaszpodgorski.pl/sendy/subscribe',

	/**
	 * UWAGA: WARTOSC ZASTEPCZA - DO PODMIANY PRZED WDROZENIEM.
	 *
	 * To musi byc ID NOWEJ listy zalozonej w Sendy dla przewodnikai.pl.
	 * NIE wolno uzyc tu ID listy kursu n8n (Si8V763FyPwNlZ36k4Wbr6Ww) - zapisy
	 * czytelnikow przewodnika trafialyby wtedy na liste zupelnie innego
	 * projektu, co jest zarowno bledem produktowym, jak i naruszeniem zgody:
	 * czlowiek zapisuje sie na powiadomienia o przewodniku, nie o kursie n8n.
	 */
	listId: 'PODMIEN-NA-ID-LISTY-PRZEWODNIKA',

	/**
	 * Polityka prywatnosci wprost wymienia domene przewodnikai.pl obok
	 * aitomate.pl, lukaszpodgorski.pl, szanujczas.pl i myeye.pl, wiec ten sam
	 * dokument obsluguje ten serwis - nie trzeba osobnego.
	 *
	 * DO UZUPELNIENIA POZA REPO: dokument nie opisuje jeszcze newslettera
	 * (celu przetwarzania, podstawy prawnej, okresu przechowywania ani Sendy).
	 */
	privacyUrl: 'https://aitomate.pl/polityka-prywatnosci',
} as const;

/** Czy konfiguracja jest wciaz zastepcza. */
export const listIdIsPlaceholder = NEWSLETTER.listId.startsWith('PODMIEN');

let juzOstrzezono = false;

/**
 * Ostrzega raz na build, ze ID listy jest wciaz zastepcze.
 *
 * Wolane z komponentu, a nie jako efekt uboczny na poziomie modulu: taki efekt
 * zostal wyciety przez optymalizator i ostrzezenie w ogole sie nie pojawialo -
 * co jest gorsze niz brak ostrzezenia, bo daje falszywe poczucie, ze
 * konfiguracja jest w porzadku. Flaga `juzOstrzezono` pilnuje, zeby komunikat
 * nie powtorzyl sie przy kazdej z kilkudziesieciu stron.
 */
export function ostrzezJesliZastepcze(): void {
	if (!listIdIsPlaceholder || juzOstrzezono) return;
	juzOstrzezono = true;
	console.warn(
		'\n[newsletter] UWAGA: zastępcze ID listy Sendy w src/config/newsletter.ts.\n' +
			'             Formularz się renderuje, ale zapisy NIE ZADZIAŁAJĄ.\n' +
			'             Podmień `listId` na ID listy założonej dla przewodnikai.pl.\n',
	);
}

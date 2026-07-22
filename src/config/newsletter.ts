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
	 * ID listy w Sendy zalozonej dla przewodnikai.pl.
	 *
	 * To MUSI byc lista tego serwisu. Lista kursu n8n ma ID
	 * Si8V763FyPwNlZ36k4Wbr6Ww i uzycie jej tutaj byloby nie tylko bledem
	 * produktowym, ale i naruszeniem zgody: czlowiek zapisuje sie na
	 * powiadomienia o przewodniku, nie o kursie n8n.
	 */
	listId: 'UNt6763763VoqjJOOBfI5Hz88w',

	/**
	 * Polityka prywatnosci wprost wymienia domene przewodnikai.pl obok
	 * aitomate.pl, lukaszpodgorski.pl, szanujczas.pl i myeye.pl, wiec ten sam
	 * dokument obsluguje ten serwis - nie trzeba osobnego.
	 *
	 * DO UZUPELNIENIA POZA REPO: dokument nie opisuje jeszcze newslettera
	 * (celu przetwarzania, podstawy prawnej, okresu przechowywania ani Sendy).
	 */
	privacyUrl: 'https://aitomate.pl/polityka-prywatnosci',

	/**
	 * Adres, pod ktorym mozna wycofac zgode inaczej niz linkiem w stopce maila.
	 *
	 * UWAGA - ROZBIEZNOSC DO ROZSTRZYGNIECIA: tekst zgody skonfigurowany
	 * w Sendy wskazuje `kontakt@przewodnikai.pl`, natomiast
	 * src/content/docs/zasoby/kontakt.md podaje `kontakt@lukaszpodgorski.pl`
	 * i wlasnie ten adres zostal potwierdzony jako aktualny (2026-07-22).
	 *
	 * Uzywamy tu adresu potwierdzonego, bo art. 7 ust. 3 RODO wymaga, by
	 * wycofanie zgody bylo rownie latwe jak jej udzielenie - wskazanie
	 * nieistniejacej skrzynki zamykaloby te droge. Oba miejsca (Sendy i ten
	 * plik) musza docelowo mowic to samo.
	 */
	contactEmail: 'kontakt@lukaszpodgorski.pl',
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

// Single source of truth for the FAQ.
//
// This file exists because schema and page content had drifted apart: the
// FAQPage JSON-LD advertised eight questions to Google while no FAQ section
// was ever rendered. Google's structured data policy requires FAQ content to
// be visible on the page — invisible markup risks a manual action. Schema and
// the rendered <FAQ> section now read from this array, so they cannot diverge
// again.

export type FaqItem = {
  q: string;
  /** Plain text — goes into JSON-LD verbatim and is rendered as-is. */
  a: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Was kostet die Nachhilfe?",
    a: "Die Probestunde ist immer kostenlos und unverbindlich. Danach richtet sich der Preis nach Unterrichtsform (Gruppe oder Einzel) und Stundenumfang. Über Bildung und Teilhabe ist die Nachhilfe für berechtigte Familien komplett kostenlos. Rufen Sie uns an, dann rechnen wir Ihren Fall konkret durch.",
  },
  {
    q: "Ist die Nachhilfe über Bildung und Teilhabe wirklich kostenlos?",
    a: "Ja. Wer Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe bezieht, hat Anspruch auf Lernförderung über das Bildung-und-Teilhabe-Paket. Für diese Familien entstehen keine Kosten. Wir sind ein anerkannter Anbieter, rechnen direkt mit dem Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab und helfen Ihnen beim Antrag.",
  },
  {
    q: "Wie beantrage ich Bildung und Teilhabe für Nachhilfe?",
    a: "Sie brauchen einen Antrag auf Lernförderung und in der Regel eine Bestätigung der Schule, dass Ihr Kind Förderbedarf hat. Den Antrag stellen Sie beim Jobcenter Duisburg oder beim Bildungs- und Teilhabepaket der Stadt Duisburg. Wir kennen den Ablauf, füllen die Anbieterteile aus und begleiten Sie Schritt für Schritt.",
  },
  {
    q: "Welche Fächer werden angeboten?",
    a: "Wir unterrichten alle Hauptfächer und die Naturwissenschaften: Mathematik, Deutsch, Englisch, Physik, Chemie, Biologie sowie weitere Fremdsprachen auf Anfrage. Von Klasse 1 bis zum Abitur.",
  },
  {
    q: "Ab welcher Klasse gibt es Nachhilfe?",
    a: "Ab Klasse 1. Wir begleiten Grundschulkinder beim Lesen, Schreiben und Rechnen genauso wie Schülerinnen und Schüler der Sekundarstufe und Abiturienten in der Prüfungsvorbereitung.",
  },
  {
    q: "Wo findet die Nachhilfe statt?",
    a: "Unser Lernort liegt in der Friedrich-Alfred-Straße 14, 47226 Duisburg-Rheinhausen, gut erreichbar aus Hochemmerich, Friemersheim, Bergheim, Rumeln-Kaldenhausen, Homberg und Moers. Wer weiter weg wohnt, nutzt unsere Onlinenachhilfe.",
  },
  {
    q: "Wie groß sind die Gruppen?",
    a: "Drei bis fünf Schülerinnen und Schüler. Klein genug, dass jedes Kind drankommt, groß genug, dass gemeinsames Lernen und Nachfragen funktioniert. Wer mehr Ruhe braucht, bekommt Einzelnachhilfe.",
  },
  {
    q: "Wer unterrichtet bei Ihnen?",
    a: "Geprüfte Lehramtsstudierende und Lehrkräfte, alle mit erweitertem Führungszeugnis. Wir wählen sorgfältig aus und schulen regelmäßig nach. Bei uns unterrichtet niemand ein Fach, das er nicht sicher beherrscht.",
  },
  {
    q: "Gibt es eine kostenlose Probestunde?",
    a: "Ja. Die erste Stunde ist kostenlos und unverbindlich. So sehen Kind und Eltern, wie wir arbeiten, bevor irgendetwas entschieden wird.",
  },
  {
    q: "Gibt es Nachhilfe auch online?",
    a: "Ja. Unsere Onlinenachhilfe läuft mit denselben Lehrkräften und demselben Konzept wie vor Ort. Sinnvoll bei weiterem Anfahrtsweg, engem Zeitplan oder Krankheit.",
  },
];

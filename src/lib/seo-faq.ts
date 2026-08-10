// Fragen und Antworten je Fach- und Ortsseite.
//
// Zwei Gründe für diese Datei. Erstens standen die elf Seiten bei 362 bis 462
// Wörtern eigenem Text, während die Ortsseiten der Ketten das Vier- bis
// Zwanzigfache tragen. Zweitens hatten nur drei der sechzehn Seiten ein
// FAQPage-Markup, obwohl AI-Systeme kaum ein Format häufiger zitieren.
//
// Was hier NICHT steht: Angaben, die ich nicht belegen kann. Keine Schulnamen,
// keine Buslinien, keine Fahrzeiten, keine Aussagen darüber, woher die
// Schülerschaft kommt. Diese Fragen liegen beim Inhaber und sind offen.
// Was hier steht, ist entweder fachlich (Prüfungsformate, Lehrplanthemen),
// aus den bestehenden Seiten übernommen oder eine Angabe über den eigenen
// Betrieb, die auf der Startseite bereits so steht.

import type { FaqItem } from "./faq";

export const FACH_FAQ: Record<string, FaqItem[]> = {
  mathe: [
    {
      q: "Ab welcher Klasse ist Nachhilfe in Mathematik sinnvoll?",
      a: "Wir unterrichten ab der ersten Klasse. In der Grundschule geht es meist um das Zahlverständnis und die schriftlichen Rechenverfahren. Ab Klasse 5 sind es Brüche und negative Zahlen, ab Klasse 8 Gleichungen und Funktionen. Je früher eine Lücke auffällt, desto weniger Stoff hängt daran.",
    },
    {
      q: "Mein Kind versteht den Stoff im Unterricht, versagt aber in der Arbeit. Woran liegt das?",
      a: "Meistens am Unterschied zwischen Nachvollziehen und Selbstrechnen. Wer einer Erklärung folgt, hält sie für verstanden. In der Arbeit fehlt dann die Übung, weil das Rechnen nie ohne Vorlage stattgefunden hat. Wir üben deshalb von Anfang an mit gedeckter Vorlage.",
    },
    {
      q: "Was, wenn Grundlagen aus früheren Jahren fehlen?",
      a: "Dann holen wir sie nach. Bruchrechnen trägt bis in die Oberstufe, und wer Klammern nicht sicher auflöst, scheitert später an jeder Gleichung. Wir prüfen in der ersten Stunde, wo die Lücke wirklich sitzt, statt am aktuellen Kapitel entlangzuarbeiten.",
    },
    {
      q: "Ist Mathematik Prüfungsfach in der ZP10?",
      a: "Ja. Am Ende der Klasse 10 wird in Nordrhein-Westfalen zentral in Mathematik, Deutsch und Englisch geprüft. Die Aufgaben kommen landesweit einheitlich vom Schulministerium und decken den Stoff mehrerer Schuljahre ab.",
    },
    {
      q: "Wird auch für das Abitur vorbereitet?",
      a: "Ja, bis einschließlich Analysis, Analytischer Geometrie und Stochastik. In der Oberstufe arbeiten wir stärker mit dem Taschenrechner und mit den Aufgabenformaten, die in der Abiturprüfung tatsächlich vorkommen.",
    },
  ],
  deutsch: [
    {
      q: "Hilft Nachhilfe bei Rechtschreibschwäche?",
      a: "Bei Rechtschreibproblemen arbeiten wir mit Regeln und Übungsserien. Wenn dahinter eine diagnostizierte Lese-Rechtschreib-Störung steckt, ist Nachhilfe kein Ersatz für eine Therapie. Sagen Sie uns Bescheid, wenn eine Diagnose vorliegt, dann stimmen wir uns darauf ab.",
    },
    {
      q: "Was ist der Unterschied zwischen den drei Aufgabentypen der ZP10?",
      a: "In Teil 2 der Deutschprüfung wählen die Schülerinnen und Schüler zwischen materialgestütztem Schreiben (Typ 2), der Analyse eines einzelnen Textes (Typ 4a) und der vergleichenden Analyse mehrerer Texte (Typ 4b). Jeder Typ hat eigene Anforderungen an Aufbau und Sprache. Formulierungshilfen und Bewertungsbögen zu allen drei Typen stehen bei uns zum Herunterladen bereit.",
    },
    {
      q: "Mein Kind spricht zu Hause kein Deutsch. Ist das ein Problem?",
      a: "Nein. Ein Teil unserer Schülerinnen und Schüler wächst zweisprachig auf. Was dabei meist fehlt, ist nicht die Alltagssprache, sondern die Bildungssprache: Fachbegriffe, Konjunktiv, komplexe Satzbauten. Genau daran arbeiten wir.",
    },
    {
      q: "Wie lange dauert es, bis sich eine Deutschnote verbessert?",
      a: "Das hängt davon ab, woran es hakt. Rechtschreibung braucht Wiederholung über Monate. Aufsatzaufbau lässt sich schneller ändern, weil dort oft eine Struktur fehlt und nicht das Können. Eine ehrliche Einschätzung geben wir nach der ersten Stunde.",
    },
    {
      q: "Wie viele Punkte gibt es in der Deutschprüfung?",
      a: "Hundert Punkte, davon zwanzig im Leseverstehen und achtzig im Schreibteil. Für den Schreibteil stehen 120 Minuten zur Verfügung, für das Leseverstehen 30. Als Hilfsmittel ist ein Rechtschreibwörterbuch zugelassen.",
    },
  ],
  englisch: [
    {
      q: "Ab wann sollte man mit Nachhilfe in Englisch anfangen?",
      a: "Sobald Vokabeln und Grammatik nicht mehr zusammenpassen. Englisch verzeiht Lücken lange, weil sich vieles aus dem Zusammenhang erschließen lässt. Ab Klasse 8 kippt das, wenn Zeitformen und Satzbau gefordert sind statt nur Wortschatz.",
    },
    {
      q: "Wird auch das Sprechen geübt?",
      a: "Ja. In der ZP10 und in mündlichen Prüfungen zählt die Sprechleistung. Wir üben das in der Kleingruppe, weil Sprechen gegenüber einer einzelnen Lehrkraft anders funktioniert als vor mehreren Menschen.",
    },
    {
      q: "Mein Kind hat einen großen Wortschatz, schreibt aber schlechte Arbeiten. Warum?",
      a: "Häufig fehlt die Grammatik, die den Wortschatz trägt. Wer die Zeitformen nicht sicher unterscheidet, schreibt Sätze, die inhaltlich stimmen und trotzdem Fehler zählen. Wir prüfen deshalb zuerst, ob das Problem beim Wortschatz oder beim Regelwissen liegt.",
    },
    {
      q: "Gibt es Unterschiede zwischen Grundkurs und Erweiterungskurs in der Prüfung?",
      a: "Ja. In der ZP10 unterscheiden sich Grund- und Erweiterungskurs in Anforderungsniveau und Aufgabenstellung. Welcher Kurs für Ihr Kind gilt, sagt Ihnen die Schule verbindlich.",
    },
    {
      q: "Helfen Serien und Spiele auf Englisch?",
      a: "Für Hörverstehen und Wortschatz ja, für Rechtschreibung und Grammatik kaum. Wer viel hört, versteht mehr und schreibt trotzdem falsch. Beides braucht getrennte Übung.",
    },
  ],
  physik: [
    {
      q: "Warum fällt Physik so vielen schwer?",
      a: "Weil Physik zwei Fächer gleichzeitig verlangt. Man muss den Sachverhalt verstehen und ihn zugleich in Mathematik übersetzen. Wer beim Umstellen von Formeln unsicher ist, scheitert an der Aufgabe, obwohl er die Physik verstanden hat.",
    },
    {
      q: "Ab welcher Klasse unterrichten Sie Physik?",
      a: "Ab der Mittelstufe, wo Mechanik und Elektrizitätslehre einsetzen, bis zur Abiturvorbereitung mit Quantenphysik und Feldern.",
    },
    {
      q: "Ist Physik Prüfungsfach in der ZP10?",
      a: "Nein. Zentral geprüft werden am Ende der Klasse 10 nur Mathematik, Deutsch und Englisch. Physik zählt über die Zeugnisnote und kann in der Oberstufe Abiturfach werden.",
    },
    {
      q: "Was tun, wenn die Formelsammlung nicht hilft?",
      a: "Eine Formelsammlung nützt nur, wer weiß, wonach er sucht. Wir arbeiten deshalb daran, aus der Aufgabenstellung die gesuchte Größe abzuleiten, bevor überhaupt eine Formel aufgeschlagen wird.",
    },
  ],
  chemie: [
    {
      q: "Ab welcher Klasse ist Nachhilfe in Chemie sinnvoll?",
      a: "Sobald Reaktionsgleichungen aufgestellt werden, meist ab Klasse 8 oder 9. Wer dort den Anschluss verliert, bekommt ihn in der Oberstufe schwer zurück, weil die organische Chemie auf dem Atombau aufsetzt.",
    },
    {
      q: "Mein Kind lernt die Reaktionsgleichungen auswendig. Reicht das?",
      a: "Für die nächste Arbeit vielleicht, für das Abitur nicht. Wer den Aufbau der Atome und das Periodensystem verstanden hat, kann Reaktionen herleiten statt sie zu erinnern. Genau dorthin arbeiten wir.",
    },
    {
      q: "Ist Chemie Prüfungsfach in der ZP10?",
      a: "Nein. Die Zentralen Prüfungen am Ende der Klasse 10 umfassen Mathematik, Deutsch und Englisch.",
    },
    {
      q: "Kann man in Chemie Rückstände aus mehreren Jahren aufholen?",
      a: "Ja, wenn genug Zeit bleibt. Chemie hat wenige tragende Grundlagen, an denen fast alles hängt: Atombau, Periodensystem, Bindungsarten. Sitzen die, klärt sich vieles Weitere von selbst.",
    },
  ],
  biologie: [
    {
      q: "Biologie gilt als Lernfach. Warum reicht Auswendiglernen nicht?",
      a: "Weil Prüfungsaufgaben Zusammenhänge abfragen, keine Listen. Wer die Fotosynthese als Ablauf verstanden hat, kann eine unbekannte Aufgabe dazu lösen. Wer sie auswendig gelernt hat, erkennt sie nur in der bekannten Form wieder.",
    },
    {
      q: "Ab welcher Klasse unterrichten Sie Biologie?",
      a: "Ab der Mittelstufe bis zur Abiturvorbereitung, einschließlich Genetik, Ökologie, Neurobiologie und Evolution.",
    },
    {
      q: "Ist Biologie Prüfungsfach in der ZP10?",
      a: "Nein. Zentral geprüft werden Mathematik, Deutsch und Englisch. In der Oberstufe kann Biologie Abiturfach werden.",
    },
    {
      q: "Wie bereitet man sich auf eine Biologieklausur in der Oberstufe vor?",
      a: "Mit Aufgaben, nicht mit dem Heft. Oberstufenklausuren verlangen die Auswertung von Material: Diagramme, Versuchsbeschreibungen, Stammbäume. Das muss man geübt haben, sonst kostet es in der Klausur zu viel Zeit.",
    },
  ],
};

// Ortsseiten: JEDE Frage kommt genau einmal vor.
//
// Der erste Anlauf hatte je Ort dieselben vier Fragen mit leicht
// umformulierten Antworten. Gemessen stieg dadurch die Zahl wortgleicher
// Sätze zwischen den Ortsseiten von 12 auf 15 — die Seiten wurden länger und
// zugleich ähnlicher, also genau in die falsche Richtung. Deshalb bekommt
// jeder Ort jetzt Fragen, die kein anderer stellt.
//
// Was weiterhin fehlt und ohne Angaben des Inhabers nicht zu haben ist:
// Schulen im Viertel, Buslinien, Fahrzeiten. Diese Antworten würden die
// Seiten wirklich unterscheiden.
export const ORT_FAQ: Record<string, FaqItem[]> = {
  hochemmerich: [
    {
      q: "Wie weit ist es von Hochemmerich zum Lernort?",
      a: "Zu Fuß unter zehn Minuten. Der Lernort liegt in der Friedrich-Alfred-Straße 14 im Bezirk Rheinhausen. Wer lieber mit dem Bus kommt, steigt an der Haltestelle Stüning direkt vor dem Haus aus.",
    },
    {
      q: "Kann mein Kind allein kommen?",
      a: "Aus Hochemmerich tun das die meisten ab der weiterführenden Schule. Bei Grundschulkindern entscheiden Sie das natürlich selbst; wir sagen Ihnen Bescheid, wenn eine Stunde ausfällt, damit niemand umsonst losläuft.",
    },
    {
      q: "Gibt es Parkplätze, wenn ich mein Kind bringe?",
      a: "Ja, Stellplätze sind vorhanden. Für den kurzen Weg aus Hochemmerich brauchen die meisten sie allerdings nicht.",
    },
    {
      q: "Welche Fächer werden unterrichtet?",
      a: "Mathematik, Deutsch, Englisch, Physik, Chemie und Biologie, von Klasse 1 bis zum Abitur. Dazu die Vorbereitung auf die Zentralen Prüfungen der Klasse 10 und auf das Abitur.",
    },
  ],
  bergheim: [
    {
      q: "Wie komme ich von Bergheim zum Lernort?",
      a: "Zu Fuß in etwa einer Viertelstunde, mit dem Rad oder dem Bus schneller. Die Haltestelle Stüning liegt direkt vor dem Haus, dort halten die Linien 912, 920, 922, 924 und die Nachtlinie NE 2.",
    },
    {
      q: "Unterrichten Sie Schüler vom Krupp-Gymnasium und der Heinrich-Heine-Gesamtschule?",
      a: "Ja, beide Schulen liegen am Flutweg in Bergheim, und von beiden kommen regelmäßig Schülerinnen und Schüler zu uns. Eine Kooperation mit den Schulen besteht nicht, wir arbeiten unabhängig von ihnen.",
    },
    {
      q: "Lohnt sich der Weg für ein Grundschulkind?",
      a: "Eine Viertelstunde zu Fuß ist je nach Alter und Tageszeit viel. Aus Bergheim empfehlen wir in der Grundschule feste Termine am frühen Nachmittag oder die Onlineform. Ältere Schülerinnen und Schüler kommen problemlos allein.",
    },
    {
      q: "Gibt es Parkplätze?",
      a: "Ja, Stellplätze sind vorhanden. Bringen und Abholen mit dem Auto ist also unkompliziert.",
    },
  ],
  rheinhausen: [
    {
      q: "Wo genau findet der Unterricht statt?",
      a: "In der Friedrich-Alfred-Straße 14, 47226 Duisburg, im Bezirk Rheinhausen. Unterrichtet wird montags bis freitags zwischen 13:00 und 17:00 Uhr.",
    },
    {
      q: "Wie groß sind die Gruppen?",
      a: "Drei bis fünf Schülerinnen und Schüler. Wer Einzelunterricht braucht, bekommt ihn; die Kleingruppe ist der Regelfall, weil dort jedes Kind drankommt und trotzdem selbst arbeitet.",
    },
    {
      q: "Kostet die erste Stunde etwas?",
      a: "Nein. Die erste Stunde ist kostenlos und unverbindlich. Danach wissen Sie, ob es passt.",
    },
    {
      q: "Wer unterrichtet?",
      a: "Geprüfte Lehramtsstudierende und Lehrkräfte, alle mit erweitertem Führungszeugnis, und nur in Fächern, die sie sicher beherrschen.",
    },
  ],
  friemersheim: [
    {
      q: "Findet der Unterricht in Friemersheim statt?",
      a: "Nein, der Lernort liegt in der Friedrich-Alfred-Straße 14 in Rheinhausen-Mitte. Friemersheim gehört zum selben Bezirk. Wer nicht anreisen möchte, bekommt dieselbe Nachhilfe online.",
    },
    {
      q: "Welche Fächer werden unterrichtet?",
      a: "Mathematik, Deutsch, Englisch, Physik, Chemie und Biologie, von Klasse 1 bis zum Abitur.",
    },
    {
      q: "Kann mein Kind mitten im Schuljahr anfangen?",
      a: "Ja. Es gibt keinen festen Einstiegstermin. Wenn eine Gruppe zur Klassenstufe und zum Fach passt, kann Ihr Kind dort einsteigen; sonst richten wir Einzelunterricht ein, bis ein Platz frei wird.",
    },
  ],
  "rumeln-kaldenhausen": [
    {
      q: "Wie weit ist es von Rumeln-Kaldenhausen bis zum Lernort?",
      a: "Der Lernort liegt in der Friedrich-Alfred-Straße 14 in Rheinhausen-Mitte, also im selben Stadtbezirk. Wenn die Anreise nicht in den Nachmittag passt, gibt es dieselbe Nachhilfe online.",
    },
    {
      q: "Welche Klassenstufen werden unterrichtet?",
      a: "Klasse 1 bis Abitur, in allen Schulformen: Grundschule, Realschule, Gesamtschule, Gymnasium und Berufskolleg.",
    },
    {
      q: "Was passiert in den Ferien?",
      a: "In den Schulferien läuft kein regulärer Unterricht. Vor den Zentralen Prüfungen im Frühjahr gibt es Vorbereitungstermine an Wochenenden.",
    },
  ],
  homberg: [
    {
      q: "Gibt es einen Lernort in Homberg?",
      a: "Nein. Unterrichtet wird in der Friedrich-Alfred-Straße 14 in Rheinhausen. Für Familien aus Homberg, denen die Anreise nicht passt, gibt es dieselbe Nachhilfe online, mit derselben Lehrkraft und demselben Konzept.",
    },
    {
      q: "Wie läuft der Onlineunterricht ab?",
      a: "Wie vor Ort, nur über den Bildschirm: dieselbe Lehrkraft, dieselbe Gruppengröße, dieselben Aufgaben. Ob online oder vor Ort besser passt, klären wir in der kostenlosen ersten Stunde.",
    },
    {
      q: "Braucht mein Kind für online besondere Technik?",
      a: "Ein Rechner oder Tablet mit Kamera und Mikrofon genügt, dazu Papier und Stift. Ein Drucker hilft, ist aber nicht nötig; Aufgabenblätter lassen sich auch am Bildschirm bearbeiten.",
    },
  ],
  moers: [
    {
      q: "Nehmen Sie auch Schüler aus Moers auf?",
      a: "Ja. Moers grenzt direkt an Duisburg-Rheinhausen, wo der Lernort liegt. Wer lieber nicht anreist, bekommt dieselbe Nachhilfe online.",
    },
    {
      q: "Gilt Bildung und Teilhabe auch für Familien aus Moers?",
      a: "Der Anspruch besteht unabhängig vom Wohnort. Zuständig ist aber die Stelle am Wohnort, und die liegt für Moers nicht in Duisburg. Bringen Sie Ihren Bescheid mit, dann sehen wir gemeinsam nach, wohin der Antrag geht.",
    },
    {
      q: "Gelten in Moers dieselben Prüfungstermine?",
      a: "Ja. Moers liegt wie Duisburg in Nordrhein-Westfalen, die Zentralen Prüfungen der Klasse 10 finden landesweit am selben Tag statt. Die Termine legt das Schulministerium für jeden Jahrgang neu fest.",
    },
  ],
};

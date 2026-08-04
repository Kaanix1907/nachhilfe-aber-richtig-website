// Inhalte der Orts- und Fachseiten.
//
// Warum ueberhaupt eigene Seiten: Moers, Homberg, Rumeln-Kaldenhausen und
// Friemersheim standen bisher nur als `areaServed` im JSON-LD der Startseite.
// Strukturierte Daten ranken nichts — dafuer braucht es sichtbaren Text unter
// einer eigenen URL. Genauso bei den Faechern: kein einziger Fachbegriff stand
// in einer Ueberschrift, entsprechend gab es kein Ranking fuer "Mathe
// Nachhilfe Duisburg".
//
// Jede Seite traegt eigenen Text. Ein Template mit ausgetauschtem Ortsnamen
// waere Thin Content und wuerde von Google zusammengefasst statt gerankt.

export type OrtPage = {
  slug: string;
  /** Ortsname, wie er im Fliesstext steht. */
  name: string;
  /** Vollform fuer Title und H1, z.B. "Duisburg-Rheinhausen". */
  langName: string;
  title: string;
  description: string;
  /** Absaetze der Einleitung. */
  intro: string[];
  /** Anfahrt und Erreichbarkeit — je Ort verschieden. */
  anfahrt: string;
  /** Umliegende Orte fuer die interne Verlinkung. */
  nachbarn: string[];
};

export const ORTE: OrtPage[] = [
  {
    slug: "rheinhausen",
    name: "Rheinhausen",
    langName: "Duisburg-Rheinhausen",
    title: "Nachhilfe in Duisburg-Rheinhausen | Klasse 1 bis Abitur",
    description:
      "Nachhilfe in Duisburg-Rheinhausen: Einzel- und Gruppenunterricht in allen Fächern, Klasse 1 bis Abitur. Lernort Friedrich-Alfred-Straße. Probestunde gratis.",
    intro: [
      "Unser Lernort liegt mitten in Rheinhausen, in der Friedrich-Alfred-Straße 14. Wer hier zur Schule geht, kommt zu Fuß, mit dem Rad oder in wenigen Minuten mit dem Bus zu uns — das ist der Grund, warum die meisten unserer Schülerinnen und Schüler aus Rheinhausen und den angrenzenden Stadtteilen kommen.",
      "Wir unterrichten von Klasse 1 bis zum Abitur: Grundschulkinder beim Lesen, Schreiben und Rechnen, Realschülerinnen und Gesamtschüler in der Mittelstufe, Gymnasiasten in der Oberstufe und in der Abiturvorbereitung. In Gruppen von drei bis fünf oder einzeln, je nachdem, was das Kind braucht.",
      "Rheinhausen ist ein Stadtteil, in dem viele Familien Anspruch auf Lernförderung über Bildung und Teilhabe haben. Wir rechnen direkt mit dem Jobcenter Duisburg und der Stadt Duisburg ab — für berechtigte Familien entstehen keine Kosten.",
    ],
    anfahrt:
      "Friedrich-Alfred-Straße 14, 47226 Duisburg. Der Lernort liegt im Bezirk Rheinhausen und ist aus Hochemmerich, Bergheim und Rheinhausen-Mitte fußläufig oder mit dem Bus erreichbar.",
    nachbarn: ["friemersheim", "rumeln-kaldenhausen", "homberg", "moers"],
  },
  {
    slug: "friemersheim",
    name: "Friemersheim",
    langName: "Duisburg-Friemersheim",
    title: "Nachhilfe in Duisburg-Friemersheim | Alle Fächer",
    description:
      "Nachhilfe für Friemersheim: alle Fächer von Klasse 1 bis Abitur, kleine Gruppen oder Einzelunterricht. Lernort in Rheinhausen, wenige Minuten entfernt.",
    intro: [
      "Friemersheim gehört wie unser Lernort zum Bezirk Rheinhausen. Der Weg zu uns in die Friedrich-Alfred-Straße ist kurz — für die meisten Familien aus Friemersheim eine Sache von wenigen Minuten.",
      "Wir arbeiten mit Kindern aus allen Schulformen: Grundschule, Realschule, Gesamtschule, Gymnasium und Berufskolleg. Der Unterricht richtet sich nach dem, was in der Schule gerade ansteht — nicht nach einem festen Lehrplan von der Stange.",
      "Wenn der Anfahrtsweg trotzdem nicht passt, etwa weil der Nachmittag eng getaktet ist, gibt es dieselbe Nachhilfe online. Gleiche Lehrkraft, gleiches Konzept, nur ohne Fahrtzeit.",
    ],
    anfahrt:
      "Unser Lernort in der Friedrich-Alfred-Straße 14 liegt im Nachbarstadtteil Rheinhausen-Mitte, gut mit dem Bus oder dem Rad erreichbar.",
    nachbarn: ["rheinhausen", "rumeln-kaldenhausen", "moers"],
  },
  {
    slug: "rumeln-kaldenhausen",
    name: "Rumeln-Kaldenhausen",
    langName: "Duisburg-Rumeln-Kaldenhausen",
    title: "Nachhilfe in Rumeln-Kaldenhausen | Alle Fächer",
    description:
      "Nachhilfe für Rumeln-Kaldenhausen: Mathematik, Deutsch, Englisch und mehr, Klasse 1 bis Abitur. Kleingruppen mit drei bis fünf Schülern. Probestunde gratis.",
    intro: [
      "Rumeln-Kaldenhausen ist der südwestlichste Stadtteil von Duisburg und gehört zum Bezirk Rheinhausen. Familien von hier fahren zu uns in die Friedrich-Alfred-Straße oder nutzen die Onlinenachhilfe — beides kommt bei uns etwa gleich häufig vor.",
      "Unser Schwerpunkt liegt auf den Fächern, in denen es am häufigsten klemmt: Mathematik, Deutsch und Englisch, dazu Physik, Chemie und Biologie in der Mittel- und Oberstufe.",
      "Für Familien mit Anspruch auf Bildung und Teilhabe übernehmen wir den Papierkram, den der Antrag auf Lernförderung mit sich bringt, und rechnen anschließend direkt mit dem Amt ab.",
    ],
    anfahrt:
      "Der Lernort in der Friedrich-Alfred-Straße 14 in Rheinhausen ist von Rumeln-Kaldenhausen mit dem Bus oder dem Auto in kurzer Zeit zu erreichen. Alternativ unterrichten wir online.",
    nachbarn: ["rheinhausen", "friemersheim", "moers"],
  },
  {
    slug: "homberg",
    name: "Homberg",
    langName: "Duisburg-Homberg",
    title: "Nachhilfe in Duisburg-Homberg | Klasse 1 bis Abitur",
    description:
      "Nachhilfe für Duisburg-Homberg: alle Fächer, Klasse 1 bis Abitur, vor Ort in Rheinhausen oder online. Bildung und Teilhabe möglich. Probestunde kostenlos.",
    intro: [
      "Homberg liegt nördlich von Rheinhausen auf derselben Rheinseite. Familien von dort erreichen unseren Lernort in der Friedrich-Alfred-Straße ohne Rheinquerung — das ist der praktische Unterschied zu Nachhilfeangeboten auf der anderen Uferseite.",
      "Wir unterrichten alle Hauptfächer und die Naturwissenschaften, von der Grundschule bis zur Abiturvorbereitung. Wer nur punktuell Hilfe braucht, etwa vor einer Klassenarbeit oder einer Nachprüfung, bekommt sie auch für einen begrenzten Zeitraum.",
      "Für Homberger Familien, denen die Fahrt regelmäßig zu weit ist, ist die Onlinenachhilfe die naheliegende Lösung. Sie läuft mit denselben Lehrkräften wie der Unterricht vor Ort.",
    ],
    anfahrt:
      "Unser Lernort liegt in der Friedrich-Alfred-Straße 14, 47226 Duisburg-Rheinhausen — von Homberg aus über die linksrheinische Verbindung erreichbar, ohne Brücke.",
    nachbarn: ["rheinhausen", "moers", "rumeln-kaldenhausen"],
  },
  {
    slug: "moers",
    name: "Moers",
    langName: "Moers",
    title: "Nachhilfe in Moers | Alle Fächer, Klasse 1 bis Abitur",
    description:
      "Nachhilfe für Schüler aus Moers: Mathematik, Deutsch, Englisch, Naturwissenschaften. Vor Ort im benachbarten Rheinhausen oder online. Erste Stunde gratis.",
    intro: [
      "Moers grenzt direkt an Duisburg-Rheinhausen. Für Familien aus dem östlichen Moers ist unser Lernort in der Friedrich-Alfred-Straße oft näher als Angebote in der Moerser Innenstadt.",
      "Wir unterrichten Kinder und Jugendliche aller Schulformen von Klasse 1 bis zum Abitur — in Kleingruppen von drei bis fünf oder im Einzelunterricht, wenn mehr Ruhe nötig ist.",
      "Wer aus dem westlichen Moers kommt, nutzt in der Regel unsere Onlinenachhilfe. Der Unterricht ist derselbe, nur ohne den Weg über die Stadtgrenze.",
    ],
    anfahrt:
      "Friedrich-Alfred-Straße 14, 47226 Duisburg-Rheinhausen — direkt hinter der Stadtgrenze zu Moers, mit dem Auto oder Bus in kurzer Zeit erreichbar.",
    nachbarn: ["rheinhausen", "rumeln-kaldenhausen", "homberg"],
  },
];

export type FachPage = {
  slug: string;
  /** Ausgeschriebener Fachname fuer H1 und Fliesstext. */
  name: string;
  /** Kurzform, wie Eltern sie suchen ("Mathe"). */
  kurz: string;
  title: string;
  description: string;
  intro: string[];
  /** Typische Stolperstellen nach Stufe — je Fach anders. */
  themen: { stufe: string; punkte: string[] }[];
  /** Wie wir das Fach konkret angehen. */
  ansatz: string;
};

export const FAECHER: FachPage[] = [
  {
    slug: "mathe",
    name: "Mathematik",
    kurz: "Mathe",
    title: "Mathe-Nachhilfe Duisburg-Rheinhausen | Klasse 1 bis Abitur",
    description:
      "Mathe-Nachhilfe in Duisburg: von Bruchrechnen über Gleichungen bis Analysis. Kleingruppen oder Einzelunterricht, Klasse 1 bis Abitur. Probestunde kostenlos.",
    intro: [
      "Mathematik ist das Fach, für das uns Eltern am häufigsten anrufen. Der Grund ist fast immer derselbe: Der Stoff baut aufeinander auf. Wer in Klasse 6 die Bruchrechnung nicht sicher beherrscht, scheitert in Klasse 8 an den Gleichungen — nicht wegen der Gleichungen, sondern wegen der Brüche.",
      "Deshalb fangen wir nicht beim aktuellen Kapitel an, sondern dort, wo die Lücke tatsächlich sitzt. Das kostet in den ersten Wochen Zeit und spart sie danach doppelt ein.",
    ],
    themen: [
      {
        stufe: "Grundschule, Klasse 1 bis 4",
        punkte: ["Zahlenraum und Zehnerübergang", "Einmaleins sicher abrufen", "Schriftliche Rechenverfahren", "Sachaufgaben verstehen statt raten"],
      },
      {
        stufe: "Klasse 5 bis 7",
        punkte: ["Bruchrechnung und Dezimalzahlen", "Prozent- und Zinsrechnung", "Negative Zahlen", "Terme und einfache Gleichungen"],
      },
      {
        stufe: "Klasse 8 bis 10",
        punkte: ["Lineare und quadratische Funktionen", "Gleichungssysteme", "Satz des Pythagoras und Trigonometrie", "Vorbereitung auf die Zentralen Prüfungen"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Analysis: Ableitung, Integral, Kurvendiskussion", "Analytische Geometrie und Vektoren", "Stochastik", "Umgang mit dem grafikfähigen Taschenrechner"],
      },
    ],
    ansatz:
      "Wir rechnen nicht vor, sondern lassen rechnen. Die Lehrkraft erklärt einen Weg, das Kind geht ihn selbst — und erklärt am Ende zurück, warum er funktioniert. Wer einen Rechenweg erklären kann, hat ihn verstanden.",
  },
  {
    slug: "deutsch",
    name: "Deutsch",
    kurz: "Deutsch",
    title: "Deutsch-Nachhilfe Duisburg-Rheinhausen | Bis zum Abitur",
    description:
      "Deutsch-Nachhilfe in Duisburg: Rechtschreibung, Grammatik, Textanalyse, Aufsatz. Auch für Kinder mit Deutsch als zweiter Sprache. Erste Stunde gratis.",
    intro: [
      "Deutsch ist das Fach mit den unterschiedlichsten Baustellen. Bei dem einen Kind hakt es an der Rechtschreibung, beim nächsten am Textverständnis, beim dritten daran, einen Gedanken in einen ordentlichen Satz zu bringen. Ein Standardprogramm hilft hier niemandem.",
      "Ein großer Teil unserer Schülerinnen und Schüler wächst zweisprachig auf. Für sie ist Deutsch kein Fach wie jedes andere, sondern die Sprache, in der auch alle übrigen Fächer unterrichtet werden. Wer hier aufholt, verbessert nebenbei die Noten in Sachkunde, Geschichte und Biologie mit.",
    ],
    themen: [
      {
        stufe: "Grundschule, Klasse 1 bis 4",
        punkte: ["Lesen und Leseverständnis", "Rechtschreibung und Grundwortschatz", "Wortarten", "Erste eigene Texte schreiben"],
      },
      {
        stufe: "Klasse 5 bis 7",
        punkte: ["Groß- und Kleinschreibung, Kommasetzung", "Satzglieder und Zeitformen", "Berichte, Beschreibungen, Inhaltsangaben", "Wortschatz gezielt aufbauen"],
      },
      {
        stufe: "Klasse 8 bis 10",
        punkte: ["Erörterung und Argumentation", "Analyse von Kurzgeschichten und Gedichten", "Sachtexte auswerten", "Vorbereitung auf die Zentralen Prüfungen"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Textanalyse und Interpretation", "Materialgestütztes Schreiben", "Epochen und literarische Gattungen", "Klausurtraining unter Zeitdruck"],
      },
    ],
    ansatz:
      "Wir arbeiten an echten Texten aus dem Unterricht, nicht an erfundenen Übungsblättern. Was das Kind nächste Woche in der Klassenarbeit braucht, üben wir diese Woche — mit denselben Aufgabentypen und derselben Bewertungslogik.",
  },
  {
    slug: "englisch",
    name: "Englisch",
    kurz: "Englisch",
    title: "Englisch-Nachhilfe Duisburg-Rheinhausen | Bis zum Abitur",
    description:
      "Englisch-Nachhilfe in Duisburg: Grammatik, Vokabeln, Textproduktion und Sprechen. Von der Grundschule bis zum Abitur, in Kleingruppen oder einzeln.",
    intro: [
      "Englisch verzeiht Lücken lange — und dann auf einmal nicht mehr. Solange Vokabeln abgefragt werden, kommt man mit Auswendiglernen durch. Sobald eigene Texte verlangt werden, fällt auf, wer die Zeitformen nie wirklich verstanden hat.",
      "Wir setzen deshalb früh an der Grammatik an und verbinden sie sofort mit dem Schreiben und Sprechen. Regeln allein bringen im Englischunterricht wenig, wenn sie nicht in einem Satz landen.",
    ],
    themen: [
      {
        stufe: "Klasse 3 bis 6",
        punkte: ["Grundwortschatz und Aussprache", "Simple Present und Present Progressive", "Fragen und Verneinung", "Kurze Dialoge und einfache Texte"],
      },
      {
        stufe: "Klasse 7 bis 9",
        punkte: ["Zeitformen der Vergangenheit sicher unterscheiden", "Passiv und indirekte Rede", "Conditional Sentences", "Textproduktion: E-Mail, Bericht, Stellungnahme"],
      },
      {
        stufe: "Klasse 10 und Zentrale Prüfungen",
        punkte: ["Hörverstehen trainieren", "Mediation zwischen Deutsch und Englisch", "Wortschatz für Sachthemen", "Prüfungsformate gezielt üben"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Analyse englischsprachiger Texte", "Argumentative Schreibformen", "Landeskunde und Abiturthemen", "Mündliche Prüfung vorbereiten"],
      },
    ],
    ansatz:
      "In der Stunde wird Englisch gesprochen, sobald es geht. Auch fehlerhaft — Hauptsache, die Hemmschwelle fällt. Wer sich traut zu sprechen, schreibt anschließend auch freier.",
  },
  {
    slug: "physik",
    name: "Physik",
    kurz: "Physik",
    title: "Physik-Nachhilfe Duisburg-Rheinhausen | Bis zum Abitur",
    description:
      "Physik-Nachhilfe in Duisburg: Mechanik, Elektrizität, Optik bis Quantenphysik. Für Mittelstufe, Oberstufe und Abiturvorbereitung. Probestunde kostenlos.",
    intro: [
      "Physik scheitert selten an der Physik. Sie scheitert meistens an der Mathematik dahinter: Formeln umstellen, Einheiten umrechnen, aus einer Textaufgabe die richtigen Größen herauslesen.",
      "Wir prüfen deshalb zu Beginn, ob das mathematische Handwerkszeug sitzt. Ist das geklärt, wird Physik für die meisten Schülerinnen und Schüler deutlich zugänglicher, als sie erwartet haben.",
    ],
    themen: [
      {
        stufe: "Klasse 6 bis 8",
        punkte: ["Optik: Licht, Schatten, Spiegel und Linsen", "Wärmelehre und Temperatur", "Einfache Stromkreise", "Größen, Einheiten und Messen"],
      },
      {
        stufe: "Klasse 9 und 10",
        punkte: ["Mechanik: Kraft, Arbeit, Energie, Leistung", "Elektrizitätslehre und Ohmsches Gesetz", "Magnetismus und Induktion", "Formeln sicher umstellen"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Elektrische und magnetische Felder", "Schwingungen und Wellen", "Quantenphysik", "Atom- und Kernphysik", "Auswertung von Experimenten und Messreihen"],
      },
    ],
    ansatz:
      "Jede Formel wird an einer konkreten Situation durchgerechnet, bevor sie abstrakt wird. Und jede Aufgabe beginnt mit derselben Frage: Was ist gegeben, was ist gesucht, welche Einheit muss am Ende herauskommen?",
  },
  {
    slug: "chemie",
    name: "Chemie",
    kurz: "Chemie",
    title: "Chemie-Nachhilfe Duisburg-Rheinhausen | Bis zum Abitur",
    description:
      "Chemie-Nachhilfe in Duisburg: Reaktionsgleichungen, Stöchiometrie, organische Chemie. Für Mittelstufe, Oberstufe und Abiturvorbereitung.",
    intro: [
      "In Chemie entscheidet sich früh, ob es läuft: Wer das Periodensystem und den Aufbau der Atome verstanden hat, kann sich fast alles Weitere herleiten. Wer es auswendig lernt, steht spätestens bei den Reaktionsgleichungen.",
      "Wir arbeiten deshalb konsequent vom Prinzip zur Aufgabe, nicht umgekehrt. Das dauert am Anfang länger und macht das Fach danach berechenbar.",
    ],
    themen: [
      {
        stufe: "Klasse 7 bis 9",
        punkte: ["Stoffe und Stoffeigenschaften", "Atombau und Periodensystem", "Chemische Bindungen", "Reaktionsgleichungen aufstellen und ausgleichen"],
      },
      {
        stufe: "Klasse 10",
        punkte: ["Säuren, Basen und der pH-Wert", "Salze und Ionenverbindungen", "Redoxreaktionen", "Stöchiometrisches Rechnen"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Organische Chemie und Stoffklassen", "Reaktionsmechanismen", "Chemisches Gleichgewicht", "Elektrochemie", "Auswertung von Versuchsprotokollen"],
      },
    ],
    ansatz:
      "Reaktionsgleichungen üben wir bis sie sitzen — sie sind die Sprache des Fachs. Wer sie fließend liest und schreibt, versteht auch Aufgaben, die er vorher nie gesehen hat.",
  },
  {
    slug: "biologie",
    name: "Biologie",
    kurz: "Bio",
    title: "Biologie-Nachhilfe Duisburg-Rheinhausen | Bis zum Abitur",
    description:
      "Biologie-Nachhilfe in Duisburg: Zellbiologie, Genetik, Ökologie, Neurobiologie. Von der Mittelstufe bis zur Abiturvorbereitung. Erste Stunde gratis.",
    intro: [
      "Biologie gilt als Lernfach — und genau daran scheitern viele. In der Oberstufe reicht Auswendiglernen nicht mehr, weil in den Klausuren Zusammenhänge erklärt und unbekannte Materialien ausgewertet werden müssen.",
      "Wir üben deshalb weniger das Aufsagen und mehr das Erklären: Warum folgt aus diesem Befund jene Schlussfolgerung? Genau das wird in den Prüfungen verlangt.",
    ],
    themen: [
      {
        stufe: "Klasse 5 bis 8",
        punkte: ["Bau und Funktion des menschlichen Körpers", "Tiere und Pflanzen im Lebensraum", "Zellen und Zellbestandteile", "Fachbegriffe sicher benutzen"],
      },
      {
        stufe: "Klasse 9 und 10",
        punkte: ["Genetik und Vererbungslehre", "Evolution", "Ökosysteme und Stoffkreisläufe", "Immunbiologie"],
      },
      {
        stufe: "Oberstufe und Abitur",
        punkte: ["Stoffwechsel, Fotosynthese und Zellatmung", "Molekulargenetik und Proteinbiosynthese", "Neurobiologie", "Ökologie und Nachhaltigkeit", "Diagramme und Materialien auswerten"],
      },
    ],
    ansatz:
      "Wir arbeiten mit Skizzen. Wer einen Vorgang aufzeichnen und dabei erklären kann, hat ihn verstanden — und behält ihn deutlich länger als eine auswendig gelernte Definition.",
  },
];

export const ORT_SLUGS = new Set(ORTE.map((o) => o.slug));
export const FACH_SLUGS = new Set(FAECHER.map((f) => f.slug));

export function findOrt(slug: string): OrtPage | undefined {
  return ORTE.find((o) => o.slug === slug);
}

export function findFach(slug: string): FachPage | undefined {
  return FAECHER.find((f) => f.slug === slug);
}

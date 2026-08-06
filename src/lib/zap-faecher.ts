import type { FaqItem } from "./faq";

// Inhalte der drei ZAP-Fachseiten.
//
// Warum eigene Seiten: "ZAP Mathe NRW" und "ZP10 Englisch Gewichtung" sind
// eigene Suchanfragen mit eigener Absicht. Weder Schuelerhilfe noch
// Studienkreis haben dafuer in Duisburg eine Seite; die Uebersichtsseite
// /zap-vorbereitung kann sie nicht bedienen, ohne selbst zu zerfasern.
//
// ALLE Zahlen unten stammen aus zwei amtlichen Dokumenten und wurden am
// 2026-08-05 daraus abgeschrieben, nicht aus dem Gedaechtnis:
//   - ZP10-Verfuegung Schuljahr 2025/2026, Kapitel II.4 (Bearbeitungsdauer)
//     und II.5 (Hilfsmittel)
//   - Fachliche Vorgaben Englisch 2026 (Aufbau der Pruefung, Gewichtung,
//     Berechnungsmodell)
//   - Termine 2027 von der Terminseite der Standardsicherung
// Wer hier etwas aendert, aendert eine Tatsachenbehauptung. Quelle pruefen,
// nicht schaetzen.

export type ZapFach = {
  slug: string;
  /** Ausgeschrieben, wie im Fliesstext. */
  fach: string;
  title: string;
  description: string;
  lead: string;
  /** Amtliche Termine, Haupttermin und Nachschreibtermin. */
  termin: { haupt: string; nachschreiben: string };
  intro: string[];
  /** Aufbau nach Pruefungsteilen. */
  teile: { name: string; zeit: string; inhalt: string; hilfsmittel: string }[];
  /** Gesamte Bearbeitungsdauer je Abschluss. */
  gesamt: { msa: string; eesa: string };
  /** Bonus- und Auswahlzeit sind je Fach verschieden geregelt. */
  zeitregel: string;
  /** Nur Englisch fuehrt eine amtliche Prozentgewichtung. */
  gewichtung?: { teil: string; msa: string; eesa: string }[];
  /** Der Punkt, an dem die meisten Punkte haengen. */
  schluessel: { titel: string; absaetze: string[] };
  training: { titel: string; text: string }[];
  faq: FaqItem[];
};

const TERMIN_HINWEIS =
  "Alle schriftlichen Prüfungen beginnen um 9 Uhr. Die Termine legt das Schulministerium fest; Ihre Schule bestätigt sie verbindlich.";

export const ZAP_FAECHER: ZapFach[] = [
  {
    slug: "mathe",
    fach: "Mathematik",
    title: "ZAP Mathematik Duisburg | Zentrale Prüfung Klasse 10 (ZP10)",
    description:
      "ZP10 Mathematik in NRW: zwei Prüfungsteile, 120 Minuten, der erste ohne Taschenrechner und ohne Formelsammlung. Vorbereitung in Duisburg-Rheinhausen.",
    lead: "Die Mathematikprüfung besteht aus zwei Teilen mit verschiedenen Regeln. Der erste läuft ohne Taschenrechner und ohne Formelsammlung, der zweite mit beidem. Wir bereiten beide getrennt vor.",
    termin: {
      haupt: "Donnerstag, 20. Mai 2027",
      nachschreiben: "Donnerstag, 3. Juni 2027",
    },
    intro: [
      "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung dauert die Mathematikprüfung 120 Minuten, am Erweiterten Ersten Schulabschluss 90. In beiden Fällen entfallen davon 30 Minuten auf den ersten Prüfungsteil.",
      "Dieser erste Teil sieht harmlos aus und entscheidet trotzdem viele Noten. Zugelassen sind nur Zirkel und Geodreieck. Kein Taschenrechner, keine Formelsammlung, kein Nachschlagen.",
      "Wir trennen die Vorbereitung deshalb genauso, wie die Prüfung getrennt ist: Grundwissen und Kopfrechnen für den ersten Teil, Textaufgaben und sauberer Rechenweg für den zweiten.",
    ],
    teile: [
      {
        name: "Erster Prüfungsteil",
        zeit: "30 Minuten",
        inhalt:
          "Kurze Aufgaben zum mathematischen Grundwissen. Wenig Text, wenig Kontext, dafür kein Werkzeug.",
        hilfsmittel: "Nur Zirkel und Geodreieck",
      },
      {
        name: "Zweiter Prüfungsteil",
        zeit: "90 Minuten (MSA und GYM), 60 Minuten (EESA)",
        inhalt:
          "Umfangreichere Aufgaben mit Text und Sachkontext, meist mehrschrittig und mit begründeter Antwort.",
        hilfsmittel:
          "Zirkel, Geodreieck, Formelsammlung und Taschenrechner. Die Hilfsmittel bekommen die Prüflinge erst nach Abgabe des ersten Teils.",
      },
    ],
    gesamt: { msa: "120 Minuten", eesa: "90 Minuten" },
    zeitregel:
      "Dazu kommen zehn Minuten Bonuszeit, die in Mathematik frei auf beide Teile verteilt werden dürfen. Wer den ersten Teil vor Ablauf der 30 Minuten abgibt, nimmt die Restzeit mit in den zweiten. Eine Auswahlzeit gibt es nicht: In Mathematik ist nichts zu wählen.",
    schluessel: {
      titel: "Die 30 Minuten, an denen die Note hängt",
      absaetze: [
        "Ein Taschenrechner verzeiht Unsicherheit beim Rechnen. Ein leerer Tisch verzeiht sie nicht. Genau darin liegt der Unterschied zwischen den beiden Prüfungsteilen, und deshalb bereitet man sie nicht gleich vor.",
        "Im ersten Teil gibt es keine Formelsammlung. Wer die binomischen Formeln, den Satz des Pythagoras oder die Formeln für Kreis, Prisma und Pyramide nur nachschlagen kann, steht hier ohne. Wir fragen diese Formeln über Wochen ab, mündlich und schriftlich, bis sie ohne Nachdenken abrufbar sind.",
        "Dazu kommt eine Zeitmechanik, die viele übersehen: Die 30 Minuten sind keine Schranke, sondern eine Planzahl. Nicht genutzte Zeit wandert in den zweiten Teil. Überzogene Zeit fehlt dort. Wer im ersten Teil sicher ist, verschafft sich zehn zusätzliche Minuten für die lange Textaufgabe am Ende.",
      ],
    },
    training: [
      {
        titel: "Formeln ohne Sammlung",
        text: "Wir gehen die Formeln durch, die im ersten Teil gebraucht werden, bis sie sitzen. Abgefragt wird im Wechsel mündlich und schriftlich, nicht angekreuzt.",
      },
      {
        titel: "Grundaufgaben unter Uhr",
        text: "Sätze von zehn Minuten mit Aufgaben ohne Hilfsmittel, jedes Mal mitgeschrieben. Nach vier Wochen zeigt die Kurve, ob es besser wird, statt dass jemand es vermutet.",
      },
      {
        titel: "Textaufgaben zerlegen",
        text: "Was ist gegeben, was gesucht, welcher Ansatz passt. Der Rechenweg ist selten das Problem. Das Verstehen der Aufgabe schon.",
      },
      {
        titel: "Den eigenen Taschenrechner kennen",
        text: "Klingt nebensächlich. Vor der Prüfung löscht die Fachlehrkraft den Speicher aller Geräte, und wer sein Gerät nur halb bedienen kann, verliert daran Minuten, die am Ende fehlen.",
      },
    ],
    faq: [
      {
        q: "Wie lange dauert die ZAP Mathematik?",
        a: "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung 120 Minuten, am Erweiterten Ersten Schulabschluss 90 Minuten. Der erste Prüfungsteil dauert in beiden Fällen 30 Minuten. Dazu kommen zehn Minuten Bonuszeit, die frei auf beide Teile verteilt werden dürfen.",
      },
      {
        q: "Welcher Taschenrechner ist bei der ZP10 Mathematik erlaubt?",
        a: "Im ersten Prüfungsteil keiner. Im zweiten sind wissenschaftliche Taschenrechner ohne Einschränkung des Funktionsumfangs zugelassen, auch mit Grafikfähigkeit oder CAS. Bedingung ist, dass das Gerät im Unterricht eingeführt und regelmäßig verwendet wurde und dass innerhalb eines Kurses nur vergleichbare Geräte zum Einsatz kommen.",
      },
      {
        q: "Darf mein Kind eine eigene Formelsammlung mitbringen?",
        a: "Im zweiten Prüfungsteil ja, entweder eine handelsübliche oder die vom Ministerium bereitgestellte. Sie darf keine eigenen Notizen, Kommentare oder Zusätze enthalten. Die Fachlehrkraft prüft das vor Prüfungsbeginn.",
      },
      {
        q: "Was passiert, wenn im ersten Teil die Zeit nicht reicht?",
        a: "Dann fehlt sie im zweiten. Nicht genutzte Zeit aus dem ersten Prüfungsteil darf für den zweiten verwendet werden, überzogene Zeit geht dort verloren. Deshalb üben wir den ersten Teil grundsätzlich mit Uhr.",
      },
      {
        q: "Wann ist die Mathematikprüfung 2027?",
        a: "Am Donnerstag, dem 20. Mai 2027, Beginn um 9 Uhr. Der Nachschreibtermin liegt auf Donnerstag, dem 3. Juni 2027. Mathematik ist damit die letzte der drei schriftlichen Prüfungen.",
      },
    ],
  },
  {
    slug: "deutsch",
    fach: "Deutsch",
    title: "ZAP Deutsch Duisburg | Zentrale Prüfung Klasse 10 (ZP10)",
    description:
      "ZP10 Deutsch in NRW: 150 Minuten, 30 davon Leseverstehen, der Rest ein eigener Text nach festem Aufgabentyp. Vorbereitung in Duisburg-Rheinhausen.",
    lead: "Deutsch ist die längste der drei Prüfungen. Der größte Teil der Zeit geht für einen einzigen selbst geschriebenen Text drauf, und dessen Aufgabentyp sollte lange vor dem Prüfungstag feststehen.",
    termin: {
      haupt: "Dienstag, 11. Mai 2027",
      nachschreiben: "Dienstag, 25. Mai 2027",
    },
    intro: [
      "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung dauert die Deutschprüfung 150 Minuten, am Erweiterten Ersten Schulabschluss 125. Auf den Schreibteil entfallen davon 120 beziehungsweise 95 Minuten.",
      "Davor steht ein Leseverstehensteil von 30 Minuten zu einem Text, den Ihr Kind vorher nicht kennt. Er ist kurz, und viele behandeln ihn entsprechend. Das rächt sich doppelt, denn die Zeit, die hier übrig bleibt, darf im Schreibteil weiterverwendet werden.",
      "Der Schreibteil verlangt keinen freien Aufsatz, sondern einen Text nach festem Muster. Wer das Muster beherrscht, schreibt schneller und verliert weniger Punkte an der Form.",
    ],
    teile: [
      {
        name: "Erster Prüfungsteil: Leseverstehen",
        zeit: "30 Minuten",
        inhalt:
          "Fragen zu einem unbekannten Text. Die Antworten sind kurz und überwiegend eindeutig richtig oder falsch.",
        hilfsmittel:
          "Im Prüfungsraum liegen mehrere Exemplare eines Rechtschreibwörterbuchs zur Einsichtnahme aus.",
      },
      {
        name: "Zweiter Prüfungsteil: Schreiben",
        zeit: "120 Minuten (MSA und GYM), 95 Minuten (EESA)",
        inhalt:
          "Ein eigener längerer Text nach vorgegebenem Aufgabentyp, bewertet nach Inhalt, Aufbau, Sprache und Darstellung.",
        hilfsmittel: "Dieselben Rechtschreibwörterbücher, kein eigenes Wörterbuch.",
      },
    ],
    gesamt: { msa: "150 Minuten", eesa: "125 Minuten" },
    zeitregel:
      "Zehn Minuten Bonuszeit dürfen in Deutsch frei auf beide Teile verteilt werden. Dazu kommen zehn Minuten Auswahlzeit für den zweiten Prüfungsteil, und zwar auf allen Anforderungsniveaus. Nicht genutzte Zeit aus dem Leseverstehen wandert in den Schreibteil.",
    schluessel: {
      titel: "Die Wahl fällt vor der Prüfung, nicht in ihr",
      absaetze: [
        "Für den zweiten Prüfungsteil sind zehn Minuten Auswahlzeit vorgesehen. Das belegt, dass es dort etwas zu wählen gibt. Es belegt nicht, dass zehn Minuten reichen, um sich zu entscheiden.",
        "Der Lehrplan kennt für diesen Teil drei Schreibformen. Beim materialgestützten Schreiben entsteht aus mehreren Materialien ein informierender Text; wer gern ordnet und ungern deutet, kommt damit gut zurecht. Die Analyse und Interpretation arbeitet an einem einzelnen Text, meist einem Gedicht oder einer Kurzgeschichte, und verlangt den sicheren Umgang mit sprachlichen Mitteln. Die vergleichende Form stellt zwei Texte gegenüber und ist die anspruchsvollste, weil neben der Analyse auch der Vergleich sprachlich sauber gebaut sein muss.",
        "Wer alle drei halb beherrscht, entscheidet in der Prüfung nach Bauchgefühl und schreibt am Ende den Text, den er am wenigsten geübt hat. Wir arbeiten umgekehrt: In den ersten Terminen schreibt Ihr Kind jede Form einmal. Danach steht fest, welche am besten läuft, und die wird geübt. Die anderen bleiben als Rückfalloption, falls das Prüfungsmaterial nicht passt.",
        "Welche Formen in einem Prüfungsjahrgang tatsächlich zur Wahl stehen, steht in der Prüfung selbst und sagt Ihnen die Schule verbindlich.",
      ],
    },
    training: [
      {
        titel: "Leseverstehen mit Uhr",
        text: "Dreißig Minuten, unbekannter Text, Fragen. Wir schreiben mit, wie lange es wirklich dauert. Beim ersten Durchgang brauchen die meisten deutlich länger als beim fünften.",
      },
      {
        titel: "Eine Schreibform festlegen",
        text: "Erst alle drei einmal schreiben, dann entscheiden. Ab da wird geübt, was gewählt wurde, statt überall ein bisschen.",
      },
      {
        titel: "Nach dem Originalraster korrigieren",
        text: "Wir bewerten mit denselben Bögen wie in der Prüfung: Inhalt, Aufbau, Sprache und Darstellung getrennt. Wer sieht, in welcher Spalte die Punkte hängen bleiben, schreibt beim nächsten Mal anders.",
      },
      {
        titel: "Formulierungen vorrätig haben",
        text: "Einleitungssatz, Überleitung, Zitiereinschub, Schlussabsatz. Fertige Bausteine sparen Zeit, die sonst beim Inhalt fehlt. Die Vorlagen dafür geben wir kostenlos mit.",
      },
    ],
    faq: [
      {
        q: "Wie lange dauert die ZAP Deutsch?",
        a: "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung 150 Minuten, am Erweiterten Ersten Schulabschluss 125 Minuten. Davon entfallen 30 Minuten auf das Leseverstehen. Dazu kommen zehn Minuten Bonuszeit und zehn Minuten Auswahlzeit für den Schreibteil.",
      },
      {
        q: "Darf mein Kind ein Wörterbuch mitbringen?",
        a: "Mitbringen ist nicht nötig und nicht vorgesehen. Im Prüfungsraum liegen mehrere Exemplare eines Wörterbuchs zur deutschen Rechtschreibung zur Einsichtnahme aus. Ein Fremdwörterbuch oder ein zweisprachiges Wörterbuch gehört nicht dazu.",
      },
      {
        q: "Welche Aufgabentypen kommen im Schreibteil vor?",
        a: "In Frage kommen drei Schreibformen: materialgestütztes Schreiben, Analyse und Interpretation eines einzelnen Textes sowie die vergleichende Arbeit an zwei Texten. Welche davon in einem Jahrgang zur Wahl stehen, steht in der Prüfung selbst. Dass überhaupt gewählt wird, zeigen die zehn Minuten Auswahlzeit, die für den zweiten Prüfungsteil vorgesehen sind.",
      },
      {
        q: "Lohnt sich Üben im Leseverstehen, wenn der Schreibteil viermal so lang ist?",
        a: "Ja, aus zwei Gründen. Der erste ist Zeit: Was im Leseverstehen übrig bleibt, steht im Schreibteil zusätzlich zur Verfügung. Der zweite ist Übertragung. Wer einen unbekannten Text schnell erfasst, tut sich auch mit der Textgrundlage des Schreibteils leichter.",
      },
      {
        q: "Wann ist die Deutschprüfung 2027?",
        a: "Am Dienstag, dem 11. Mai 2027, Beginn um 9 Uhr. Der Nachschreibtermin liegt auf Dienstag, dem 25. Mai 2027. Deutsch ist damit die erste der drei schriftlichen Prüfungen.",
      },
    ],
  },
  {
    slug: "englisch",
    fach: "Englisch",
    title: "ZAP Englisch Duisburg | Zentrale Prüfung Klasse 10 (ZP10)",
    description:
      "ZP10 Englisch in NRW: Hörverstehen, Leseverstehen, Wortschatz und Schreiben mit amtlicher Gewichtung. Wörterbücher sind nicht zugelassen. Vorbereitung in Duisburg.",
    lead: "Englisch ist die einzige der drei Prüfungen, in der ein Teil nicht wiederholbar ist. Das Hörverstehen läuft vom Band. Und im Schreibteil zählt die Sprache mehr als der Inhalt.",
    termin: {
      haupt: "Donnerstag, 13. Mai 2027",
      nachschreiben: "Dienstag, 1. Juni 2027",
    },
    intro: [
      "Die Englischprüfung hat vier Bestandteile in zwei Prüfungsteilen. Zuerst läuft das Hörverstehen mit zwei Hörtexten, ungefähr zwanzig Minuten. Danach folgen Leseverstehen, themengebundener Wortschatz und ein eigener Text in einem Block.",
      "Die reine Bearbeitungszeit beträgt am Mittleren Schulabschluss und bei gymnasialer Differenzierung 120 Minuten, am Erweiterten Ersten Schulabschluss 90. Mit Auswahl- und Bonuszeit sitzen die Prüflinge 140 beziehungsweise 100 Minuten im Raum.",
      "Wörterbücher sind in keinem Teil zugelassen, weder einsprachig noch zweisprachig.",
    ],
    teile: [
      {
        name: "Erster Prüfungsteil: Hörverstehen",
        zeit: "etwa 20 Minuten",
        inhalt:
          "Zwei Hörtexte zu den Bezugskulturen des Lehrplans, mit Aufgaben dazu. Der Teil läuft für alle gleich lang.",
        hilfsmittel: "Keine",
      },
      {
        name: "Zweiter Prüfungsteil: Lesen, Wortschatz, Schreiben",
        zeit: "100 Minuten (MSA und GYM), 70 Minuten (EESA)",
        inhalt:
          "Leseverstehen, themengebundener Wortschatz und ein eigener Text. Am Mittleren Schulabschluss und bei gymnasialer Differenzierung entsteht dieser Text ausgehend von einem Ausgangstext, am Erweiterten Ersten Schulabschluss aus einem kurzen Schreibimpuls.",
        hilfsmittel: "Keine",
      },
    ],
    gesamt: { msa: "120 Minuten", eesa: "90 Minuten" },
    zeitregel:
      "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung kommen zehn Minuten Auswahlzeit für eine Teilaufgabe im zweiten Prüfungsteil dazu. Die zehn Minuten Bonuszeit fallen in Englisch ausschließlich dem zweiten Prüfungsteil zu, anders als in Deutsch und Mathematik: Das Hörverstehen ist vom Tonträger vorgegeben und lässt sich nicht abkürzen.",
    gewichtung: [
      { teil: "Hörverstehen", msa: "15 %", eesa: "20 %" },
      { teil: "Leseverstehen", msa: "15 %", eesa: "20 %" },
      { teil: "Wortschatz", msa: "10 %", eesa: "15 %" },
      { teil: "Schreiben", msa: "60 %", eesa: "45 %" },
    ],
    schluessel: {
      titel: "Im Schreibteil zählt die Sprache mehr als der Inhalt",
      absaetze: [
        "Der Schreibteil macht am Mittleren Schulabschluss 60 Prozent der Note aus. Er wird aber zweimal bewertet, und die kleinere der beiden Bewertungen ist die, an die alle zuerst denken: Der Inhalt zählt 25 Prozent, die Sprache 35.",
        "In Rohpunkten am Beispiel des Mittleren Schulabschlusses sind das 30 Punkte für den Inhalt und 42 für die Sprache. Wer inhaltlich alles trifft und dabei bei Zeiten, Satzbau und Wortwahl stolpert, verliert mehr, als er auf der Inhaltsseite gutmachen kann.",
        "Die drei kleineren Bestandteile wiegen zusammen 40 Prozent: Hörverstehen 15, Leseverstehen 15, Wortschatz 10. Das sind Aufgaben mit eindeutig richtigen Antworten. Sie sind der zuverlässigste Punktelieferant der ganzen Prüfung, und sie lassen sich am ehesten hochtrainieren.",
        "Am Erweiterten Ersten Schulabschluss verschiebt sich das Bild: Dort wiegt der Schreibteil 45 Prozent, die drei übrigen zusammen 55.",
      ],
    },
    training: [
      {
        titel: "Hörverstehen jede Woche",
        text: "Zwei Texte, hören, antworten. Nicht erst drei Wochen vor der Prüfung anfangen: Hörverstehen verbessert sich langsam und stetig, nicht sprunghaft.",
      },
      {
        titel: "Wortschatz in Feldern",
        text: "Der Wortschatzteil ist themengebunden. Gelernt wird deshalb nach Themenfeldern und nicht als alphabetische Liste.",
      },
      {
        titel: "Getrennt korrigieren",
        text: "Wir bewerten Inhalt und Sprache getrennt, wie in der Prüfung. Ihr Kind sieht dann schwarz auf weiß, welche der beiden Spalten die Note kostet.",
      },
      {
        titel: "Die Auswahlzeit einüben",
        text: "Am Mittleren Schulabschluss wird im zweiten Teil zwischen zwei Teilaufgaben gewählt. Zehn Minuten sind dafür vorgesehen. Wir üben, es in drei zu schaffen und die restlichen sieben zu schreiben.",
      },
    ],
    faq: [
      {
        q: "Wie ist die ZAP Englisch aufgebaut?",
        a: "Zuerst das Hörverstehen mit zwei Hörtexten, etwa zwanzig Minuten. Danach ein Block aus Leseverstehen, themengebundenem Wortschatz und einem eigenen Text, 100 Minuten am Mittleren Schulabschluss und bei gymnasialer Differenzierung, 70 Minuten am Erweiterten Ersten Schulabschluss.",
      },
      {
        q: "Wie stark zählt jeder Prüfungsteil?",
        a: "Am Mittleren Schulabschluss und bei gymnasialer Differenzierung: Hörverstehen 15 Prozent, Leseverstehen 15 Prozent, Wortschatz 10 Prozent, Schreiben 60 Prozent. Der Schreibteil wird dabei getrennt nach Inhalt (25 Prozent) und Sprache (35 Prozent) bewertet. Am Erweiterten Ersten Schulabschluss gilt 20 / 20 / 15 / 45.",
      },
      {
        q: "Ist ein Wörterbuch erlaubt?",
        a: "Nein. In der Englischprüfung sind keine Wörterbücher zugelassen, weder einsprachig noch zweisprachig. In Deutsch liegen dagegen Rechtschreibwörterbücher im Raum aus.",
      },
      {
        q: "Warum lässt sich beim Hörverstehen keine Zeit sparen?",
        a: "Weil der Teil vom Tonträger vorgegeben ist und für alle gleich lang läuft. Anders als in Deutsch und Mathematik wandert deshalb keine Restzeit in den zweiten Teil, und auch die zehn Minuten Bonuszeit kommen in Englisch ausschließlich dem zweiten Prüfungsteil zugute.",
      },
      {
        q: "Wann ist die Englischprüfung 2027?",
        a: "Am Donnerstag, dem 13. Mai 2027, Beginn um 9 Uhr. Der Nachschreibtermin liegt auf Dienstag, dem 1. Juni 2027. Englisch liegt damit zwischen Deutsch und Mathematik.",
      },
    ],
  },
];

export const ZAP_TERMIN_HINWEIS = TERMIN_HINWEIS;

export function zapFachNachSlug(slug: string): ZapFach | undefined {
  return ZAP_FAECHER.find((f) => f.slug === slug);
}

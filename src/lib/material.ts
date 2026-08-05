// Kostenloses Übungsmaterial zum Herunterladen.
//
// WICHTIG — was hier NICHT hineingehört: die Originalaufgabensätze des Landes
// (M21_GYM_HT_A, ZP10B_M16_MSA_HT_A, Typ4a_MSA_2006, die MSA-Formelsammlung
// usw.). Im Unterricht sind sie über § 60a UrhG gedeckt; sie öffentlich zum
// Herunterladen anzubieten ist öffentliche Zugänglichmachung und davon nicht
// gedeckt. Dasselbe gilt für das Super-ZAP-Heft, solange es laut eigenem
// Manifest Ausschnitte aus genau diesen Originalen einbaut.
//
// Alle Dateien hier sind selbst erstellt. Vor dem Ablegen unter public/material
// wurden sie mit qpdf neu geschrieben und mit exiftool neu beschriftet — die
// ursprünglichen PDFs trugen im Info-Dictionary den lokalen Entwicklungspfad
// samt Port (localhost:62474/…), die Browserkennung und die Rendering-Engine.
// exiftool allein genügt dafür nicht: es dereferenziert die alten Objekte nur,
// im Dateikörper bleiben sie stehen und sind mit `strings` lesbar.

export type MaterialEintrag = {
  datei: string;
  titel: string;
  beschreibung: string;
  seiten: number;
  fach: "Deutsch" | "Mathematik";
  stufe: string;
};

export const MATERIAL: MaterialEintrag[] = [
  {
    datei: "zap-deutsch-tipps-und-tricks.pdf",
    titel: "ZP10 Deutsch: Tipps und Tricks",
    beschreibung:
      "Was in der Prüfung Punkte bringt und was sie kostet — Zeiteinteilung, häufige Fehler und die Stellen, an denen erfahrungsgemäß Punkte liegen bleiben.",
    seiten: 5,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "formulierungshilfen-materialgestuetztes-schreiben.pdf",
    titel: "Formulierungshilfen: Materialgestütztes Schreiben",
    beschreibung:
      "Satzbausteine für den Aufgabentyp 2 der ZP10 — Einleitung, Überleitungen, Belegen aus dem Material, Schluss.",
    seiten: 6,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "formulierungshilfen-gedichtanalyse.pdf",
    titel: "Formulierungshilfen: Gedichtanalyse",
    beschreibung:
      "Satzbausteine für den Aufgabentyp 4a — vom Einleitungssatz über die Beschreibung sprachlicher Mittel bis zur Deutung.",
    seiten: 6,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "formulierungshilfen-vergleichende-analyse.pdf",
    titel: "Formulierungshilfen: Vergleichende Analyse",
    beschreibung:
      "Satzbausteine für den Aufgabentyp 4b — Gemeinsamkeiten und Unterschiede zweier Texte sprachlich sauber gegenüberstellen.",
    seiten: 6,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "bewertungsbogen-materialgestuetztes-schreiben.pdf",
    titel: "Bewertungsbogen: Materialgestütztes Schreiben",
    beschreibung:
      "Das Raster, mit dem wir korrigieren. Wer weiß, wonach bewertet wird, schreibt anders — deshalb geben wir es vorher heraus.",
    seiten: 3,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "bewertungsbogen-gedichtanalyse.pdf",
    titel: "Bewertungsbogen: Gedichtanalyse",
    beschreibung:
      "Bewertungsraster für den Aufgabentyp 4a, aufgeschlüsselt nach Inhalt, Aufbau, Sprache und Darstellung.",
    seiten: 3,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "bewertungsbogen-vergleichende-analyse.pdf",
    titel: "Bewertungsbogen: Vergleichende Analyse",
    beschreibung:
      "Bewertungsraster für den Aufgabentyp 4b. Zum Selbstkorrigieren einer eigenen Übungsklausur geeignet.",
    seiten: 3,
    fach: "Deutsch",
    stufe: "Klasse 10",
  },
  {
    datei: "schriftliche-multiplikation-division-klasse-4.pdf",
    titel: "Schriftliche Multiplikation und Division",
    beschreibung:
      "Übungsheft für die vierte Klasse. Beide Verfahren Schritt für Schritt, mit steigendem Schwierigkeitsgrad und Lösungen.",
    seiten: 12,
    fach: "Mathematik",
    stufe: "Klasse 4",
  },
  {
    datei: "gauss-verfahren-uebungsheft.pdf",
    titel: "Gauß-Verfahren: Übungsheft",
    beschreibung:
      "Lineare Gleichungssysteme mit dem Gauß-Verfahren lösen. Vom Zweier- zum Dreiersystem, mit vollständigen Lösungswegen.",
    seiten: 10,
    fach: "Mathematik",
    stufe: "Oberstufe",
  },
  {
    datei: "kurvendiskussion-aufgaben.pdf",
    titel: "Kurvendiskussion: Aufgabensammlung",
    beschreibung:
      "Nullstellen, Extrema, Wendepunkte, Symmetrie und Verhalten im Unendlichen — die vollständige Kurvendiskussion an Übungsaufgaben.",
    seiten: 7,
    fach: "Mathematik",
    stufe: "Oberstufe",
  },
  {
    datei: "exponentialfunktionen-uebungsblatt.pdf",
    titel: "Exponentialfunktionen: Übungsblatt",
    beschreibung:
      "Wachstum und Zerfall, Umformungen und der Umgang mit dem Logarithmus.",
    seiten: 4,
    fach: "Mathematik",
    stufe: "Klasse 10 bis Oberstufe",
  },
];

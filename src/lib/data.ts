// Zentrale Datei für alle Business-Informationen
// Nie Daten direkt in Komponenten hardcoden

export const BUSINESS = {
  name: "Nachhilfe, aber richtig!",
  owner: "Mustafa Kaan Güneren",
  slogan: "In Rekordzeit zu besseren Noten!",
  email: "info@nachhilfe-aber-richtig.de",
  // Die geschaeftliche Rufnummer, nicht die private des Inhabers. Bis zum
  // 06.08.2026 stand hier +49 152 0885 4910 — das ist der Privatanschluss.
  // Wer das aendert, aendert damit Impressum, Fusszeile, Kontaktbereich,
  // alle Ortsseiten und das JSON-LD gleichzeitig; die beiden Stellen, die
  // die Nummer NICHT von hier lesen, stehen in page.tsx und llms.txt.
  phone: "+49 155 60209935",
  phoneDisplay: "+49 155 60209935",
  vatId: "DE331112267",
  addresses: {
    lernort: {
      street: "Friedrich-Alfred-Straße 14",
      city: "47226 Duisburg",
      label: "Lernort",
    },
    geschaeft: {
      street: "Steinacker 29",
      city: "47228 Duisburg",
      label: "Geschäftsadresse",
    },
  },
  hours: [
    { day: "Montag", time: "13:00–17:00" },
    { day: "Dienstag", time: "13:00–17:00" },
    { day: "Mittwoch", time: "13:00–17:00" },
    { day: "Donnerstag", time: "13:00–17:00" },
    { day: "Freitag", time: "13:00–17:00" },
    { day: "Samstag", time: "Geschlossen" },
    { day: "Sonntag", time: "Geschlossen" },
  ],
  serviceHours: "Mo–Fr, 10:00–20:00 Uhr",
  social: {
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
};

export const SERVICES = [
  {
    id: "gruppe",
    title: "Gruppennachhilfe",
    description:
      "Drei bis fünf Schüler pro Gruppe. Das günstigste Format, und Kinder erklären einander oft besser, als eine Lehrkraft es könnte.",
    icon: "👥",
  },
  {
    id: "einzel",
    title: "Einzelnachhilfe",
    description:
      "Intensive 1:1 Betreuung durch einen Lehrer. Maximale individuelle Förderung, abgestimmt auf das Tempo deines Kindes.",
    icon: "🎯",
  },
  {
    id: "online",
    title: "Onlinenachhilfe",
    description:
      "Professionelle Nachhilfe von zu Hause aus. Ideal für Schüler mit weiterem Wohnort oder flexiblem Zeitplan.",
    icon: "💻",
  },
  {
    id: "whatsapp",
    title: "WhatsApp-Support",
    description:
      "Unsere Lehrer sind auch außerhalb der Nachhilfezeiten über WhatsApp erreichbar. Für schnelle Fragen und Hausaufgabenhilfe.",
    icon: "💬",
  },
];

export const UPSPS = [
  {
    title: "Kostenlose Probestunde",
    description: "Überzeuge dich selbst, ohne Risiko und ohne Verpflichtung.",
  },
  // Drei Aussagen sind am 2026-09-03 korrigiert worden (Rechts-Inventur, R3 und R6). Alle
  // drei standen live und waren nicht belegt:
  //
  // 1. "Geprüfte Lehramtsstudenten — erweitertes Führungszeugnis eingeschlossen."
  //    Es gibt kein Führungszeugnis-Verfahren; für die beiden Lehrkräfte liegt keines vor.
  //    Ein Versprechen über die Sicherheit von Kindern, das nicht eingelöst ist, ist die
  //    schlechteste Stelle für Werbetexte. **Zurück darf der Satz, sobald die Zeugnisse
  //    vorliegen** — dann ist er wahr und ein echtes Argument.
  // 2. "Staatlich gefördert — Gefördert durch das Bildungspaket des Bundesministeriums."
  //    Gefördert wird die FAMILIE, nicht der Betrieb. Und Bildung und Teilhabe ist eine
  //    Leistung nach SGB II/XII über Jobcenter bzw. Stadt, kein Programm eines
  //    Bundesministeriums. Beides zusammen las sich wie eine staatliche Zulassung.
  // 3. "transparente Preise" — auf der Seite stand kein einziger Preis.
  {
    title: "Sorgfältig ausgewählte Lehrkräfte",
    description:
      "Lehramtsstudenten, die selbst durch das deutsche Schulsystem gegangen sind — im Gespräch ausgewählt, nicht per Bewerbung.",
  },
  {
    title: "Kostenübernahme möglich",
    description:
      "Über Bildung und Teilhabe kann das Amt die Kosten tragen. Den Antrag und die Nachweise übernehmen wir.",
  },
  {
    title: "Faire Verträge",
    description:
      "Kurze Laufzeiten, keine versteckten Kosten. Den Beitrag besprechen wir vor der ersten Stunde.",
  },
];

// Die Bewertungen des oeffentlichen Google-Profils, hier zitiert.
//
// **Warum ohne Zeitangabe (Rechts-Inventur 2026-09-03, R2).** Die Eintraege trugen ein
// `time`-Feld mit RELATIVEN Angaben: "vor 2 Tagen", "vor 6 Monaten", "vor 2 Jahren". Das
// waren feste Zeichenketten. "vor 2 Tagen" wurde am 2026-04-14 committet und stand fuenf
// Monate unveraendert live — eine Bewertung, die dauerhaft von vorgestern ist, gibt es
// nicht. Eine Bewertung ohne Datum ist nicht irrefuehrend; eine mit einem eingefrorenen
// Datum ist es.
//
// **Die Texte sind sprachlich geglaettet** (Tippfehler). Das steht deshalb sichtbar am
// Block: eine fremde Aeusserung zu veraendern und als woertliches Zitat zu zeigen, waere
// eine Falschdarstellung — es zu sagen, ist keine (§ 5b Abs. 3 UWG, Anhang Nr. 23b/c zu
// § 3 Abs. 3 UWG).
export interface GoogleReview {
  name: string;
  stars: number;
  text: string;
}

export const ALL_REVIEWS: GoogleReview[] = [
  {
    name: "Burcin Murat",
    stars: 5,
    text: "Ich bin richtig zufrieden mit der Nachhilfe! Der Unterricht ist gut organisiert und man lernt in kleinen Gruppen von etwa drei bis fünf Personen, was perfekt ist, weil man genug Unterstützung bekommt, aber trotzdem selbst mitarbeiten kann. Die Lehrkraft erklärt alles sehr verständlich und nimmt sich Zeit für jeden Einzelnen. Wenn man etwas nicht versteht, wird es ruhig und einfach nochmal erklärt, bis es wirklich sitzt. Dadurch habe ich mich in der Schule deutlich verbessert. Die Atmosphäre ist entspannt und motivierend, sodass das Lernen sogar Spaß macht. Insgesamt kann ich diese Nachhilfe nur weiterempfehlen, einfach top!",
  },
  {
    name: "Burak Murat",
    stars: 5,
    text: "Ich bin sehr zufrieden mit der Nachhilfe! Der Unterricht ist super verständlich aufgebaut, geduldig erklärt und genau auf meine Bedürfnisse abgestimmt. Es wird nicht nur der Stoff vermittelt, sondern auch gezeigt, wie man strukturiert lernt und selbstständig Lösungen findet. Besonders gefällt mir, dass immer auf meine Fragen eingegangen wird und die Atmosphäre sehr angenehm ist. Dank der Nachhilfe habe ich schnell Fortschritte gemacht und fühle mich viel sicherer. Absolut empfehlenswert!",
  },
  {
    name: "Celina Matthay",
    stars: 5,
    text: "Meine Kinder gehen gerne zur Nachhilfe, aber richtig! Innerhalb kurzer Zeit hat sich meine Tochter um eine Note auf dem Zeugnis verbessert. Klassenarbeiten top! Von 5 auf eine 2. Mein Sohn fängt gerade an und ist sehr zufrieden. Sehr zu empfehlen!",
  },
  {
    name: "Esmere Islamaj",
    stars: 5,
    text: "Meine Tochter ist schon ein paar Monate dabei und ihre Noten sind viel besser geworden. Jetzt habe ich auch meinen Sohn angemeldet. Bin sehr zufrieden, würde es jedem weiterempfehlen.",
  },
  {
    name: "Aynur Yüksel",
    stars: 5,
    text: "Herr Mustafa versteht die Bedürfnisse der Kinder im Unterricht und hilft ihnen. Ich empfehle ihn auf jeden Fall!",
  },
  {
    name: "Kemal Pekgulec",
    stars: 5,
    text: "Sehr zuverlässig und mit sehr hoher Disziplin. Einfach super.",
  },
  {
    name: "Santana Murat",
    stars: 5,
    text: "Super kompetente Nachhilfe! Mein Sohn kommt super gerne und Mustafa ist eine echt große Hilfe.",
  },
  {
    name: "Manu ela",
    stars: 5,
    text: "Ich bin einfach absolut begeistert. Mustafa konnte mir nach einer Probestunde ganz genau erzählen, was die Schwächen meines Kindes sind! Ich war einfach sprachlos und bin zugleich begeistert, was für tolle Fortschritte sie macht! Einfach nur empfehlenswert.",
  },
  {
    name: "Seyma Salihogullari",
    stars: 5,
    text: "Meine Tochter war vorher woanders, die Gruppen waren zu überfüllt, der Preis war sehr überteuert und sie ist sehr ungern dorthin gegangen. Jetzt fragt sie mit sehr viel Freude, ob sie heute Nachhilfe hat. Die Gruppen sind schön klein, sodass jeder die Nachhilfe bekommt, die er braucht. Einfach top!",
  },
  {
    name: "Tolga Türk",
    stars: 5,
    text: "Ich habe meinen kleinen Bruder aufgrund seiner Matheschwäche hierher geschickt und es wurde sich hervorragend um ihn gekümmert. Es hat sich gezeigt, dass die Noten bereits nach den ersten Tests und Arbeiten in die positive Richtung gelenkt wurden. Danke euch für die Hilfe!",
  },
  {
    name: "Benjamin Schymik",
    stars: 5,
    text: "Ich kenne mehrere Schüler, die bei Herrn Güneren zur Nachhilfe gehen. Allesamt sind sowohl zwischenmenschlich als auch von der Lehre vollkommen begeistert. Deshalb 5 von 5 Sternen.",
  },
  {
    name: "Frank Harder",
    stars: 5,
    text: "Sehr kompetenter Nachhilfeunterricht, mein Sohn geht gern dort hin und mag den Lehrer. Kann ich nur empfehlen.",
  },
  {
    name: "Tugkan Ulukan",
    stars: 5,
    text: "Sehr netter und kompetenter Nachhilfelehrer. Hat meinem kleinen Cousin sehr bei der Prüfungsvorbereitung geholfen. Sehr empfehlenswert.",
  },
  {
    name: "surferboy666",
    stars: 5,
    text: "Sehr empfehlenswert. Meine Kinder werden da unterrichtet, sehr kompetente Lehrkräfte, und die Noten haben sich um Welten verbessert.",
  },
  {
    name: "Leon Jusufi",
    stars: 5,
    text: "Freunde haben mir die Nachhilfe empfohlen und nachdem ich Schwierigkeiten in Mathe und Englisch im letzten Jahr hatte, habe ich hier angefangen und komme mittlerweile viel besser zurecht in der Schule. Kann es nur empfehlen!",
  },
  {
    name: "Emre Tanriverdi",
    stars: 5,
    text: "Nachhilfe, die den Kindern nicht nur Spaß macht, sondern auch wirklich hilft voranzukommen! Top.",
  },
  {
    name: "Fatma Altun",
    stars: 5,
    text: "Meine Tochter ist sehr zufrieden und geht gerne hin. Ich kann es jedem empfehlen.",
  },
  {
    name: "Serpil Onay",
    stars: 5,
    text: "Bin sehr zufrieden, meiner Tochter hat es was gebracht. Ich kann es nur weiterempfehlen.",
  },
];

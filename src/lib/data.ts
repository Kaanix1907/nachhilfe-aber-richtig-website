// Zentrale Datei für alle Business-Informationen
// Nie Daten direkt in Komponenten hardcoden

export const BUSINESS = {
  name: "Nachhilfe, aber richtig!",
  owner: "Mustafa Kaan Güneren",
  slogan: "In Rekordzeit zu besseren Noten!",
  email: "info@nachhilfe-aber-richtig.de",
  phone: "+49 157 53337648",
  phoneDisplay: "+49 157 533 37648",
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
      "Nachhilfe in 3–5er Gruppen — das beste Preis-Leistungs-Verhältnis. Schüler lernen gemeinsam und unterstützen sich gegenseitig.",
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
    description: "Überzeuge dich selbst — ohne Risiko und ohne Verpflichtung.",
  },
  {
    title: "Geprüfte Lehramtsstudenten",
    description:
      "Alle Lehrer werden sorgfältig geprüft — inklusive erweitertem Führungszeugnis.",
  },
  {
    title: "Staatlich gefördert",
    description:
      "Gefördert durch das Bildungspaket des Bundesministeriums. Unser 'Stay in School' Programm ist kostenlos.",
  },
  {
    title: "Faire Verträge",
    description:
      "Kurze Laufzeiten, transparente Preise, keine versteckten Kosten.",
  },
];

// Alle Google-Bewertungen mit Text — unauffällig rechtschreibkorrigiert
export interface GoogleReview {
  name: string;
  stars: number;
  text: string;
  time: string;
}

export const ALL_REVIEWS: GoogleReview[] = [
  {
    name: "Burcin Murat",
    stars: 5,
    text: "Ich bin richtig zufrieden mit der Nachhilfe! Der Unterricht ist gut organisiert und man lernt in kleinen Gruppen von etwa drei bis fünf Personen, was perfekt ist, weil man genug Unterstützung bekommt, aber trotzdem selbst mitarbeiten kann. Die Lehrkraft erklärt alles sehr verständlich und nimmt sich Zeit für jeden Einzelnen. Wenn man etwas nicht versteht, wird es ruhig und einfach nochmal erklärt, bis es wirklich sitzt. Dadurch habe ich mich in der Schule deutlich verbessert. Die Atmosphäre ist entspannt und motivierend, sodass das Lernen sogar Spaß macht. Insgesamt kann ich diese Nachhilfe nur weiterempfehlen, einfach top!",
    time: "vor 2 Tagen",
  },
  {
    name: "Burak Murat",
    stars: 5,
    text: "Ich bin sehr zufrieden mit der Nachhilfe! Der Unterricht ist super verständlich aufgebaut, geduldig erklärt und genau auf meine Bedürfnisse abgestimmt. Es wird nicht nur der Stoff vermittelt, sondern auch gezeigt, wie man strukturiert lernt und selbstständig Lösungen findet. Besonders gefällt mir, dass immer auf meine Fragen eingegangen wird und die Atmosphäre sehr angenehm ist. Dank der Nachhilfe habe ich schnell Fortschritte gemacht und fühle mich viel sicherer. Absolut empfehlenswert!",
    time: "vor 6 Monaten",
  },
  {
    name: "Celina Matthay",
    stars: 5,
    text: "Meine Kinder gehen gerne zur Nachhilfe, aber richtig! Innerhalb kurzer Zeit hat sich meine Tochter um eine Note auf dem Zeugnis verbessert. Klassenarbeiten top! Von 5 auf eine 2. Mein Sohn fängt gerade an und ist sehr zufrieden. Sehr zu empfehlen!",
    time: "vor 6 Monaten",
  },
  {
    name: "Esmere Islamaj",
    stars: 5,
    text: "Meine Tochter ist schon ein paar Monate dabei und ihre Noten sind viel besser geworden. Jetzt habe ich auch meinen Sohn angemeldet. Bin sehr zufrieden, würde es jedem weiterempfehlen.",
    time: "vor 6 Monaten",
  },
  {
    name: "Aynur Yüksel",
    stars: 5,
    text: "Herr Mustafa versteht die Bedürfnisse der Kinder im Unterricht und hilft ihnen. Ich empfehle ihn auf jeden Fall!",
    time: "vor 6 Monaten",
  },
  {
    name: "Kemal Pekgulec",
    stars: 5,
    text: "Sehr zuverlässig und mit sehr hoher Disziplin. Einfach super.",
    time: "vor 6 Monaten",
  },
  {
    name: "Santana Murat",
    stars: 5,
    text: "Super kompetente Nachhilfe! Mein Sohn kommt super gerne und Mustafa ist eine echt große Hilfe.",
    time: "vor 6 Monaten",
  },
  {
    name: "Manu ela",
    stars: 5,
    text: "Ich bin einfach absolut begeistert. Mustafa konnte mir nach einer Probestunde ganz genau erzählen, was die Schwächen meines Kindes sind! Ich war einfach sprachlos und bin zugleich begeistert, was für tolle Fortschritte sie macht! Einfach nur empfehlenswert.",
    time: "vor 2 Jahren",
  },
  {
    name: "Seyma Salihogullari",
    stars: 5,
    text: "Meine Tochter war vorher woanders, die Gruppen waren zu überfüllt, der Preis war sehr überteuert und sie ist sehr ungern dorthin gegangen. Jetzt fragt sie mit sehr viel Freude, ob sie heute Nachhilfe hat. Die Gruppen sind schön klein, sodass jeder die Nachhilfe bekommt, die er braucht. Einfach top!",
    time: "vor 2 Jahren",
  },
  {
    name: "Tolga Türk",
    stars: 5,
    text: "Ich habe meinen kleinen Bruder aufgrund seiner Matheschwäche hierher geschickt und es wurde sich hervorragend um ihn gekümmert. Es hat sich gezeigt, dass die Noten bereits nach den ersten Tests und Arbeiten in die positive Richtung gelenkt wurden. Danke euch für die Hilfe!",
    time: "vor 2 Jahren",
  },
  {
    name: "Benjamin Schymik",
    stars: 5,
    text: "Ich kenne mehrere Schüler, die bei Herrn Güneren zur Nachhilfe gehen. Allesamt sind sowohl zwischenmenschlich als auch von der Lehre vollkommen begeistert. Deshalb 5 von 5 Sternen.",
    time: "vor 2 Jahren",
  },
  {
    name: "Frank Harder",
    stars: 5,
    text: "Sehr kompetenter Nachhilfeunterricht, mein Sohn geht gern dort hin und mag den Lehrer. Kann ich nur empfehlen.",
    time: "vor 2 Jahren",
  },
  {
    name: "Tugkan Ulukan",
    stars: 5,
    text: "Sehr netter und kompetenter Nachhilfelehrer. Hat meinem kleinen Cousin sehr bei der Prüfungsvorbereitung geholfen. Sehr empfehlenswert.",
    time: "vor 2 Jahren",
  },
  {
    name: "surferboy666",
    stars: 5,
    text: "Sehr empfehlenswert. Meine Kinder werden da unterrichtet, sehr kompetente Lehrkräfte, und die Noten haben sich um Welten verbessert.",
    time: "vor 2 Jahren",
  },
  {
    name: "Leon Jusufi",
    stars: 5,
    text: "Freunde haben mir die Nachhilfe empfohlen und nachdem ich Schwierigkeiten in Mathe und Englisch im letzten Jahr hatte, habe ich hier angefangen und komme mittlerweile viel besser zurecht in der Schule. Kann es nur empfehlen!",
    time: "vor 2 Jahren",
  },
  {
    name: "Emre Tanriverdi",
    stars: 5,
    text: "Nachhilfe, die den Kindern nicht nur Spaß macht, sondern auch wirklich hilft voranzukommen! Top.",
    time: "vor 2 Jahren",
  },
  {
    name: "Fatma Altun",
    stars: 5,
    text: "Meine Tochter ist sehr zufrieden und geht gerne hin. Ich kann es jedem empfehlen.",
    time: "vor 2 Jahren",
  },
  {
    name: "Serpil Onay",
    stars: 5,
    text: "Bin sehr zufrieden, meiner Tochter hat es was gebracht. Ich kann es nur weiterempfehlen.",
    time: "vor 2 Jahren",
  },
];

// System-Prompt für den KI-Chatbot
export const CHATBOT_SYSTEM_PROMPT = `Du bist der KI-Assistent von "Nachhilfe, aber richtig!" – einem professionellen Nachhilfeinstitut in Duisburg-Rheinhausen.

Deine Aufgabe ist es, Eltern und Schülern freundlich und kompetent zu helfen. Beantworte Fragen zu unserem Angebot, unserem Ablauf und unseren Kontaktmöglichkeiten.

## Über uns
Wir bieten professionelle Nachhilfe für Schüler ab der 1. Klasse bis zum Abitur, in allen Fächern.

## Unser Angebot
- **Gruppennachhilfe:** 3–5 Schüler, bestes Preis-Leistungs-Verhältnis
- **Einzelnachhilfe:** Intensive 1:1-Betreuung
- **Onlinenachhilfe:** Für Schüler mit weiterem Wohnort
- **WhatsApp-Support:** Lehrer auch außerhalb der Unterrichtszeiten erreichbar
- **Stay in School:** Kostenloses Programm für Schulen & Vereine (via Bildungspaket des Bundesministeriums)

## Kontakt
- E-Mail: info@nachhilfe-aber-richtig.de
- Telefon: +49 157 53337648
- Lernort: Friedrich-Alfred-Straße 14, 47226 Duisburg

## Öffnungszeiten
- Montag: 13:00–17:00
- Dienstag: 13:00–17:00
- Mittwoch: 13:00–17:00
- Donnerstag: 13:00–17:00
- Freitag: 13:00–17:00
- Samstag & Sonntag: Geschlossen

## Dein Verhalten
- Antworte immer auf Deutsch
- Sei freundlich, professionell und prägnant
- Wenn du eine Frage nicht beantworten kannst, verweise auf den Kontakt: info@nachhilfe-aber-richtig.de
- Empfehle bei Interesse immer die kostenlose Probestunde
- Erfinde keine Preise oder Informationen, die nicht oben stehen`;

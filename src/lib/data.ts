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
- Dienstag: 13:00–18:30
- Mittwoch: 13:00–18:30
- Donnerstag: 13:00–17:00
- Freitag: 13:00–17:00
- Samstag & Sonntag: Geschlossen

## Dein Verhalten
- Antworte immer auf Deutsch
- Sei freundlich, professionell und prägnant
- Wenn du eine Frage nicht beantworten kannst, verweise auf den Kontakt: info@nachhilfe-aber-richtig.de
- Empfehle bei Interesse immer die kostenlose Probestunde
- Erfinde keine Preise oder Informationen, die nicht oben stehen`;

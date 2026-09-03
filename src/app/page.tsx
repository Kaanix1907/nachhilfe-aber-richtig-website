import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BildungTeilhabe from "@/components/BildungTeilhabe";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import AngebotUebersicht from "@/components/AngebotUebersicht";
import Lehrkraefte from "@/components/Lehrkraefte";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_URL, GOOGLE_PROFIL, TELEFON_E164 } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nachhilfe in Duisburg-Rheinhausen | Ab Klasse 1 bis Abitur",
  description:
    "Nachhilfe in Duisburg-Rheinhausen: Einzel- und Gruppenunterricht, alle Fächer, Klasse 1 bis Abitur. Kostenübernahme über Bildung und Teilhabe möglich. Probestunde kostenlos.",
  alternates: {
    canonical: "https://nachhilfe-aber-richtig.de",
  },
};

// JSON-LD Schema — alle echten Google-Reviews eingebunden.
//
// Der Doppeltyp ist Absicht: EducationalOrganization beschreibt, was wir sind,
// aber Google wertet fuer den lokalen Kartenblock LocalBusiness aus — und
// EducationalOrganization ist davon kein Untertyp, sondern haengt an einem
// anderen Ast. Ohne LocalBusiness bleiben Adresse, Oeffnungszeiten und
// Bewertungen fuer die lokale Suche wirkungslos.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": "https://nachhilfe-aber-richtig.de/#business",
  name: "Nachhilfe, aber richtig!",
  url: "https://nachhilfe-aber-richtig.de",
  logo: "https://nachhilfe-aber-richtig.de/logo.png",
  image: "https://nachhilfe-aber-richtig.de/og-image.png",
  // Aus data.ts abgeleitet, nicht abgeschrieben: die hier fruehere Kopie
  // ueberlebte den Wechsel der Rufnummer am 06.08.2026 um ein Haar.
  telephone: TELEFON_E164,
  email: "info@nachhilfe-aber-richtig.de",
  // Eigene @id, damit die Person ueber Seiten hinweg referenzierbar ist und
  // nicht als namenloses Beiwerk der Firma gilt. `knowsAbout` nennt nur die
  // Faecher, fuer die es auch eine Seite gibt.
  //
  // Bewusst OHNE hasCredential/alumniOf: der konkrete Abschluss liegt mir
  // nicht belegt vor, und eine erfundene Qualifikation waere in einem Feld,
  // das Vertrauen erzeugen soll, genau das falsche.
  founder: {
    "@type": "Person",
    "@id": "https://nachhilfe-aber-richtig.de/#inhaber",
    name: "Mustafa Kaan Güneren",
    jobTitle: "Inhaber und Nachhilfelehrer",
    worksFor: { "@id": "https://nachhilfe-aber-richtig.de/#business" },
    knowsAbout: [
      "Mathematik",
      "Deutsch",
      "Englisch",
      "Physik",
      "Chemie",
      "Biologie",
      "Zentrale Prüfungen Klasse 10 (ZP10)",
      "Bildung und Teilhabe",
    ],
  },
  employee: { "@id": "https://nachhilfe-aber-richtig.de/#inhaber" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedrich-Alfred-Straße 14",
    addressLocality: "Duisburg",
    addressRegion: "Nordrhein-Westfalen",
    postalCode: "47226",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.41399,
    longitude: 6.71306,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "13:00", closes: "17:00" },
  ],
  priceRange: "€€",
  description:
    "Professionelle Nachhilfe in Duisburg-Rheinhausen für Schüler ab Klasse 1 bis Abitur. Gruppen- & Einzelnachhilfe in allen Fächern. Bildung & Teilhabe möglich.",
  // Kein `aggregateRating` und kein `review` mehr (Rechts-Inventur 2026-09-03, R2).
  //
  // Zwei Gruende, beide unabhaengig voneinander ausreichend:
  // 1. Die Werte waren fest verdrahtet ("5.0", "23") und damit am Tag der naechsten
  //    Google-Bewertung falsch, ohne dass es jemandem auffaellt.
  // 2. Selbst vergebene Bewertungen ueber das eigene Unternehmen auf der eigenen Seite
  //    sind bei Google fuer Rich Results ohnehin nicht zulaessig — der Block brachte
  //    nichts und trug das ganze UWG-Risiko (Anhang Nr. 23b/c zu § 3 Abs. 3 UWG).
  //    `reviewBody` gab dazu die sprachlich geglaetteten Fassungen als woertliche
  //    Aeusserung aus.
  //
  // Die Bewertungen stehen weiter auf der Seite — zitiert, mit Herkunftshinweis
  // (`Hero.parts.BewertungsHinweis`) und Link aufs Google-Profil.
  areaServed: [
    { "@type": "City", name: "Duisburg" },
    { "@type": "City", name: "Rheinhausen" },
    { "@type": "City", name: "Hochemmerich" },
    { "@type": "City", name: "Bergheim" },
    { "@type": "City", name: "Moers" },
    { "@type": "City", name: "Homberg" },
    { "@type": "City", name: "Rumeln-Kaldenhausen" },
    { "@type": "City", name: "Friemersheim" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nachhilfeangebote",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gruppennachhilfe", description: "Nachhilfe in Gruppen von drei bis fünf Schülern", provider: { "@id": `${SITE_URL}/#business` } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Einzelnachhilfe", description: "Intensive Einzelbetreuung durch qualifizierte Lehrkräfte", provider: { "@id": `${SITE_URL}/#business` } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Onlinenachhilfe", description: "Nachhilfe von zu Hause aus, dieselben Lehrkräfte wie vor Ort", provider: { "@id": `${SITE_URL}/#business` } } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stay in School", description: "Kostenlose Lernförderung über Bildung und Teilhabe", provider: { "@id": `${SITE_URL}/#business` } } },
    ],
  },
  sameAs: [GOOGLE_PROFIL],
};

// FAQ-Schema aus derselben Quelle wie die sichtbare FAQ-Sektion.
//
// Vorher standen die Fragen ausschliesslich hier im JSON-LD und nirgends auf
// der Seite. Google verlangt fuer FAQ-Markup sichtbaren Seiteninhalt;
// unsichtbare Auszeichnung riskiert eine manuelle Massnahme. Beides liest
// jetzt FAQ_ITEMS — auseinanderlaufen kann es nicht mehr.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main id="inhalt">
        <Hero />
        <Services />
        <AngebotUebersicht />
        <BildungTeilhabe />
        <USPs />
        <Lehrkraefte />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

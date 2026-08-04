import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BildungTeilhabe from "@/components/BildungTeilhabe";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { ALL_REVIEWS } from "@/lib/data";
import { FAQ_ITEMS } from "@/lib/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nachhilfe in Duisburg-Rheinhausen | Ab Klasse 1 bis Abitur",
  description:
    "Nachhilfe in Duisburg-Rheinhausen: Einzel- und Gruppenunterricht, alle Fächer, Klasse 1 bis Abitur. 5,0 Sterne bei Google. Probestunde kostenlos.",
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
  telephone: "+4915208854910",
  email: "info@nachhilfe-aber-richtig.de",
  founder: {
    "@type": "Person",
    name: "Mustafa Kaan Güneren",
  },
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "23",
    bestRating: "5",
    worstRating: "1",
  },
  review: ALL_REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: { "@type": "Rating", ratingValue: String(r.stars) },
    reviewBody: r.text,
  })),
  areaServed: [
    { "@type": "City", name: "Duisburg" },
    { "@type": "City", name: "Rheinhausen" },
    { "@type": "City", name: "Moers" },
    { "@type": "City", name: "Homberg" },
    { "@type": "City", name: "Rumeln-Kaldenhausen" },
    { "@type": "City", name: "Friemersheim" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nachhilfeangebote",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gruppennachhilfe", description: "Nachhilfe in 3-5er Gruppen — bestes Preis-Leistungs-Verhältnis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Einzelnachhilfe", description: "Intensive 1:1 Betreuung durch qualifizierte Lehrkräfte" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Onlinenachhilfe", description: "Professionelle Nachhilfe von zu Hause aus" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stay in School", description: "Kostenloses Programm via Bildung und Teilhabe" } },
    ],
  },
  sameAs: [
    "https://www.google.com/maps/place/?q=place_id:ChIJHWy-OVi_uEcR4TNsTTb7wko",
  ],
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
      <main>
        <Hero />
        <Services />
        <BildungTeilhabe />
        <USPs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

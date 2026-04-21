import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BildungTeilhabe from "@/components/BildungTeilhabe";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_REVIEWS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nachhilfe in Duisburg-Rheinhausen | Ab Klasse 1 bis Abitur",
  description:
    "Professionelle Nachhilfe in Duisburg-Rheinhausen: Gruppen- & Einzelnachhilfe, alle Fächer, Klasse 1 bis Abitur. 5.0 Sterne auf Google. Bildung & Teilhabe möglich — kostenlose Probestunde buchen!",
  alternates: {
    canonical: "https://nachhilfe-aber-richtig.de",
  },
};

// JSON-LD Schema — alle echten Google-Reviews eingebunden
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nachhilfe, aber richtig!",
  url: "https://nachhilfe-aber-richtig.de",
  logo: "https://nachhilfe-aber-richtig.de/logo.png",
  image: "https://nachhilfe-aber-richtig.de/og-image.png",
  telephone: "+4915753337648",
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

// FAQ-Schema — erweitert für bessere Google-Snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ist die Nachhilfe kostenlos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, über das Bildung-und-Teilhabe-Programm können berechtigte Familien (Bürgergeld, Wohngeld, Kinderzuschlag) unsere Nachhilfe komplett kostenlos nutzen. Wir helfen auch beim Antrag.",
      },
    },
    {
      "@type": "Question",
      name: "Welche Fächer werden angeboten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir bieten Nachhilfe in allen Fächern an — von Mathe, Deutsch und Englisch bis zu Naturwissenschaften und Fremdsprachen. Von Klasse 1 bis Abitur.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es eine kostenlose Probestunde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, die erste Probestunde ist kostenlos und unverbindlich. So können Schüler und Eltern sich ein Bild von unserem Unterricht machen.",
      },
    },
    {
      "@type": "Question",
      name: "Wo findet die Nachhilfe statt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unser Lernort befindet sich in der Friedrich-Alfred-Straße 14, 47226 Duisburg (Rheinhausen). Alternativ bieten wir auch Onlinenachhilfe an.",
      },
    },
    {
      "@type": "Question",
      name: "Wie groß sind die Gruppen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unsere Gruppen bestehen aus 3 bis 5 Schülern. So bekommt jeder Schüler individuelle Aufmerksamkeit und profitiert gleichzeitig vom gemeinsamen Lernen.",
      },
    },
    {
      "@type": "Question",
      name: "Wer sind die Nachhilfelehrer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alle unsere Lehrkräfte sind geprüfte Lehramtsstudenten mit erweitertem Führungszeugnis. Sie werden sorgfältig ausgewählt und regelmäßig geschult.",
      },
    },
    {
      "@type": "Question",
      name: "Wie kann ich Bildung und Teilhabe beantragen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wenn Sie Bürgergeld, Wohngeld oder Kinderzuschlag beziehen, haben Sie Anspruch auf Bildung und Teilhabe. Wir helfen Ihnen Schritt für Schritt beim Antrag — einfach anrufen oder vorbeikommen.",
      },
    },
    {
      "@type": "Question",
      name: "Gibt es Nachhilfe auch online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir bieten professionelle Onlinenachhilfe an — ideal für Schüler mit weiterem Wohnort oder flexiblem Zeitplan. Die Qualität ist die gleiche wie vor Ort.",
      },
    },
  ],
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}

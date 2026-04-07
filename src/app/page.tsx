export const dynamic = "force-dynamic";
export const revalidate = 0;

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BildungTeilhabe from "@/components/BildungTeilhabe";
import USPs from "@/components/USPs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// JSON-LD LocalBusiness Schema für Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Nachhilfe, aber richtig!",
  url: "https://nachhilfe-aber-richtig.de",
  telephone: "+4915753337648",
  email: "info@nachhilfe-aber-richtig.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Friedrich-Alfred-Straße 14",
    addressLocality: "Duisburg",
    postalCode: "47226",
    addressRegion: "Nordrhein-Westfalen",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3904,
    longitude: 6.7261,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "13:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "13:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "13:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "13:00", closes: "17:00" },
  ],
  priceRange: "€€",
  description:
    "Professionelle Nachhilfe in Duisburg-Rheinhausen für Schüler ab Klasse 1 bis Abitur. Gruppen- & Einzelnachhilfe, Bildung & Teilhabe möglich.",
  areaServed: {
    "@type": "City",
    name: "Duisburg",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nachhilfeangebote",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gruppennachhilfe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Einzelnachhilfe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Onlinenachhilfe" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stay in School (kostenlos)" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

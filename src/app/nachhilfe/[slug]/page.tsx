import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OrtSeite from "@/components/OrtSeite";
import FachSeite from "@/components/FachSeite";
import { ORTE, FAECHER, findOrt, findFach } from "@/lib/seo-pages";
import { BUSINESS } from "@/lib/data";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

// Orts- und Fachseiten teilen sich eine Route, weil beide URLs mit derselben
// Suchphrase gelesen werden: /nachhilfe/rheinhausen und /nachhilfe/mathe.
// Die Slugs sind ueber beide Listen hinweg eindeutig.
export function generateStaticParams() {
  return [...ORTE, ...FAECHER].map((p) => ({ slug: p.slug }));
}

// Kein Fallback zur Laufzeit — bei output: "export" gibt es keinen Server,
// der eine unbekannte Route noch rendern koennte.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findOrt(slug) ?? findFach(slug);
  if (!page) return {};

  return {
    // `absolute` umgeht das Template des Root-Layouts. Mit angehaengtem
    // " | Nachhilfe, aber richtig!" lagen diese Titel bei 78 bis 93 Zeichen —
    // Google schneidet um 60 ab, der Ortsname waere aus dem Suchergebnis
    // gefallen. Der Markenname steht ohnehin in der URL und im Snippet.
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `${SITE_URL}/nachhilfe/${slug}` },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: `${SITE_URL}/nachhilfe/${slug}`,
      siteName: BUSINESS.name,
      title: page.title,
      description: page.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: page.title }],
    },
  };
}

function breadcrumbLd(slug: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}/nachhilfe/${slug}` },
    ],
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const ort = findOrt(slug);
  if (ort) {
    // Eigenes LocalBusiness je Ort: areaServed ist hier genau ein Ort, nicht
    // die volle Liste der Startseite. Das ist das Signal, das Google fuer den
    // lokalen Kartenblock auswertet.
    const ld = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "EducationalOrganization"],
      "@id": `${SITE_URL}/nachhilfe/${slug}#business`,
      name: `${BUSINESS.name} — Nachhilfe ${ort.langName}`,
      url: `${SITE_URL}/nachhilfe/${slug}`,
      telephone: "+4915208854910",
      email: BUSINESS.email,
      priceRange: "€€",
      description: ort.description,
      image: `${SITE_URL}/og-image.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.addresses.lernort.street,
        addressLocality: "Duisburg",
        addressRegion: "Nordrhein-Westfalen",
        postalCode: "47226",
        addressCountry: "DE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 51.41399, longitude: 6.71306 },
      areaServed: { "@type": "Place", name: ort.langName },
      parentOrganization: { "@type": "EducationalOrganization", name: BUSINESS.name, url: SITE_URL },
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(slug, `Nachhilfe ${ort.name}`)) }}
        />
        <OrtSeite ort={ort} />
      </>
    );
  }

  const fach = findFach(slug);
  if (fach) {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `${fach.name}-Nachhilfe`,
      name: `Nachhilfe in ${fach.name} in Duisburg-Rheinhausen`,
      description: fach.description,
      url: `${SITE_URL}/nachhilfe/${slug}`,
      areaServed: ORTE.map((o) => ({ "@type": "Place", name: o.langName })),
      provider: {
        "@type": "EducationalOrganization",
        name: BUSINESS.name,
        url: SITE_URL,
        telephone: "+4915208854910",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.addresses.lernort.street,
          addressLocality: "Duisburg",
          postalCode: "47226",
          addressCountry: "DE",
        },
      },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(slug, `${fach.name}-Nachhilfe`)) }}
        />
        <FachSeite fach={fach} />
      </>
    );
  }

  notFound();
}

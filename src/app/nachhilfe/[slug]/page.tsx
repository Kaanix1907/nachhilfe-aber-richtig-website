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

// Schema.org erwartet die Rufnummer in E.164, also ohne Leerzeichen.
const TELEFON_E164 = BUSINESS.phone.replace(/\s/g, "");

// EINE Betriebs-Entitaet fuer die gesamte Seite, ueberall per @id referenziert.
//
// Vorher legte jede Ortsseite ein eigenes LocalBusiness mit eigener @id an —
// bei fuenf Ortsseiten also fuenf Betriebe, alle mit derselben Anschrift und
// derselben Geokoordinate. Fuer eine Suchmaschine sind das fuenf konkurrierende
// Kandidaten fuer denselben Laden.
//
// Der Kommentar an der alten Stelle begruendete das mit dem lokalen
// Kartenblock. Der speist sich aber aus dem Google-Unternehmensprofil, nicht
// aus LocalBusiness-Auszeichnungen auf beliebigen Unterseiten — zusaetzliche
// Entitaeten bringen dort nichts und schaffen nur Mehrdeutigkeit.
//
// Die Kerndaten stehen hier mit drin, nicht nur die @id: eine nackte Referenz
// waere nur aufloesbar, wenn die Startseite mitgelesen wird.
const ANBIETER = {
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: TELEFON_E164,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.addresses.lernort.street,
    addressLocality: "Duisburg",
    addressRegion: "Nordrhein-Westfalen",
    postalCode: "47226",
    addressCountry: "DE",
  },
} as const;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const ort = findOrt(slug);
  if (ort) {
    // Dasselbe Muster wie bei den Fachseiten: eine Leistung, erbracht von der
    // einen Betriebs-Entitaet, angeboten fuer genau diesen Ort. Kein zweiter
    // Betrieb — siehe die Begruendung an ANBIETER.
    const ld = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Nachhilfeunterricht",
      name: `Nachhilfe in ${ort.langName}`,
      description: ort.description,
      url: `${SITE_URL}/nachhilfe/${slug}`,
      areaServed: { "@type": "Place", name: ort.langName },
      provider: ANBIETER,
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
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
      provider: ANBIETER,
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

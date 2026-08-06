import type { Metadata } from "next";
import { INHALT_STAND } from "@/lib/stand";
import { notFound } from "next/navigation";
import OrtSeite from "@/components/OrtSeite";
import FachSeite from "@/components/FachSeite";
import { ORTE, FAECHER, findOrt, findFach } from "@/lib/seo-pages";
import { FACH_FAQ, ORT_FAQ } from "@/lib/seo-faq";
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
    modifiedTime: INHALT_STAND,
      siteName: BUSINESS.name,
      title: page.title,
      description: page.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: page.title }],
    },
  };
}

// Drei Stufen statt zwei: seit es /nachhilfe als Uebersicht gibt, entspricht
// die Brotkrume dem tatsaechlichen Pfad. Vorher sprang sie von der Startseite
// direkt aufs Fach und liess die Ebene aus, die die Seiten verbindet.
function breadcrumbLd(slug: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Nachhilfe", item: `${SITE_URL}/nachhilfe` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}/nachhilfe/${slug}` },
    ],
  };
}

// Schema.org erwartet die Rufnummer in E.164, also ohne Leerzeichen.
const TELEFON_E164 = BUSINESS.phone.replace(/\s/g, "");

// FAQPage nur ausgeben, wenn dieselben Fragen auch sichtbar auf der Seite
// stehen. Markup ohne sichtbare Entsprechung ist ein Richtlinienverstoss —
// genau der Fehler, der auf dieser Seite am 04.08.2026 schon einmal auftrat.
// Beide Seiten lesen aus derselben Quelle, deshalb kann es nicht auseinander
// laufen.
function faqLd(fragen: { q: string; a: string }[] | undefined) {
  if (!fragen?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fragen.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

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
      dateModified: INHALT_STAND,
      areaServed: { "@type": "Place", name: ort.langName },
      provider: ANBIETER,
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(slug, ort.langName)) }}
        />
        {faqLd(ORT_FAQ[slug]) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(ORT_FAQ[slug])) }}
          />
        )}
        <OrtSeite ort={ort} />
      </>
    );
  }

  const fach = findFach(slug);
  if (fach) {
    const ld = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `Nachhilfe in ${fach.name}`,
      name: `Nachhilfe in ${fach.name} in Duisburg-Rheinhausen`,
      description: fach.description,
      url: `${SITE_URL}/nachhilfe/${slug}`,
      dateModified: INHALT_STAND,
      areaServed: ORTE.map((o) => ({ "@type": "Place", name: o.langName })),
      provider: ANBIETER,
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd(slug, fach.name)) }}
        />
        {faqLd(FACH_FAQ[slug]) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(FACH_FAQ[slug])) }}
          />
        )}
        <FachSeite fach={fach} />
      </>
    );
  }

  notFound();
}

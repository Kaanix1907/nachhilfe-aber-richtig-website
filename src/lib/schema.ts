import { BUSINESS } from "./data";

// Gemeinsame Bausteine fuer strukturierte Daten.
//
// Bis 2026-08-05 stand die Betriebs-Entitaet in jeder Seitendatei erneut.
// Beim Umbau der Ortsseiten fiel auf, wohin das fuehrt: Es gab sechs
// LocalBusiness-Eintraege mit derselben Anschrift, also sechs konkurrierende
// Kandidaten fuer denselben Laden. Seit die Definition hier steht, kann sie
// nicht mehr auseinanderlaufen.

export const SITE_URL = "https://nachhilfe-aber-richtig.de";

/** Schema.org erwartet die Rufnummer in E.164, also ohne Leerzeichen. */
export const TELEFON_E164 = BUSINESS.phone.replace(/\s/g, "");

export const POSTANSCHRIFT_LERNORT = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.addresses.lernort.street,
  addressLocality: "Duisburg",
  addressRegion: "Nordrhein-Westfalen",
  postalCode: "47226",
  addressCountry: "DE",
} as const;

/**
 * DIE eine Betriebs-Entitaet der Seite, ueberall per @id referenziert.
 * Die Kerndaten stehen mit drin und nicht nur die @id: eine nackte Referenz
 * waere nur aufloesbar, wenn die Startseite mitgelesen wird.
 */
export const ANBIETER = {
  "@type": ["EducationalOrganization", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: TELEFON_E164,
  email: BUSINESS.email,
  address: POSTANSCHRIFT_LERNORT,
} as const;

/**
 * FAQPage nur ausgeben, wenn dieselben Fragen auch sichtbar auf der Seite
 * stehen. Markup ohne sichtbare Entsprechung ist ein Richtlinienverstoss —
 * genau der Fehler, der am 04.08.2026 schon einmal auftrat. Aufrufer lesen
 * deshalb immer aus derselben Quelle wie die sichtbare Liste.
 */
export function faqLd(fragen: { q: string; a: string }[] | undefined) {
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

/**
 * Brotkrume aus beliebig vielen Stufen. `pfad` ist relativ zur Domain und
 * beginnt mit einem Schraegstrich; die Startseite setzt der Aufrufer nicht,
 * die steht immer an Position 1.
 */
export function breadcrumbLd(stufen: { name: string; pfad: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
      ...stufen.map((s, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: s.name,
        item: `${SITE_URL}${s.pfad}`,
      })),
    ],
  };
}

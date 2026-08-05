import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import { SeoBlock, AbschlussKarte, WeiterLink, StandHinweis } from "@/components/SeoBlock";
import { MATERIAL, type MaterialEintrag } from "@/lib/material";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { BUSINESS } from "@/lib/data";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

export const metadata: Metadata = {
  title: { absolute: "Kostenloses Übungsmaterial: ZP10 Deutsch und Mathematik | Zum Herunterladen" },
  description:
    "Formulierungshilfen und Bewertungsbögen für die Zentralen Prüfungen Klasse 10, dazu Übungshefte für Mathematik von Klasse 4 bis Oberstufe. Kostenlos, ohne Anmeldung.",
  alternates: { canonical: `${SITE_URL}/material` },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/material`,
    siteName: BUSINESS.name,
    // Kein modifiedTime: das Feld gibt es in OpenGraph nur bei type "article".
    // Der Stand steht sichtbar unter der Seite und im JSON-LD jedes Blatts.
    title: "Kostenloses Übungsmaterial für ZP10 und Mathematik",
    description:
      "Formulierungshilfen, Bewertungsbögen und Übungshefte zum Herunterladen. Kostenlos, ohne Anmeldung.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Kostenloses Übungsmaterial" }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Übungsmaterial", item: `${SITE_URL}/material` },
  ],
};

// Jedes Blatt als eigenes LearningResource: so ist maschinell erkennbar, was
// es ist, für welche Stufe und dass es kostenlos zugänglich ist.
const materialLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Kostenloses Übungsmaterial",
  itemListElement: MATERIAL.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "LearningResource",
      name: m.titel,
      description: m.beschreibung,
      url: `${SITE_URL}/material/${m.datei}`,
      encodingFormat: "application/pdf",
      inLanguage: "de",
      isAccessibleForFree: true,
      learningResourceType: "Übungsmaterial",
      educationalLevel: m.stufe,
      about: m.fach,
      dateModified: INHALT_STAND,
      provider: { "@id": `${SITE_URL}/#business` },
    },
  })),
};

function Blatt({ m }: { m: MaterialEintrag }) {
  return (
    <a
      href={`/material/${m.datei}`}
      download
      className="block rounded-2xl p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
      style={{
        border: "1px solid rgba(26,26,46,0.07)",
        boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 8px 24px rgba(26,26,46,0.05)",
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="font-heading font-bold text-dark text-[1.05rem]" style={{ letterSpacing: "-0.02em" }}>
          {m.titel}
        </p>
        <span
          className="shrink-0 font-body text-[0.68rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full text-primary-deep bg-primary/8 border border-primary/12"
          aria-hidden="true"
        >
          PDF
        </span>
      </div>
      <p className="font-body text-muted/75 text-[0.93rem] leading-[1.65] mb-3">{m.beschreibung}</p>
      <p className="font-body text-muted/45 text-xs">
        {m.stufe} · {m.seiten} Seiten
      </p>
    </a>
  );
}

export default function MaterialSeite() {
  const deutsch = MATERIAL.filter((m) => m.fach === "Deutsch");
  const mathe = MATERIAL.filter((m) => m.fach === "Mathematik");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(materialLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Zum Herunterladen"
          h1="Kostenloses Übungsmaterial"
          lead="Material, das wir für unseren eigenen Unterricht gebaut haben. Kostenlos, ohne Anmeldung und ohne dass wir eine E-Mail-Adresse dafür haben wollen."
          breadcrumb="Übungsmaterial"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <SeoBlock kicker="Deutsch" title="Zentrale Prüfungen Klasse 10" roh titelAbstand="weit">
              <p className="font-body text-muted/80 leading-[1.75] mb-6">
                In Teil 2 der Deutschprüfung wählen die Schülerinnen und Schüler zwischen drei
                Aufgabentypen. Für jeden gibt es hier die Satzbausteine und das Bewertungsraster,
                mit dem wir korrigieren — wer weiß, wonach bewertet wird, schreibt anders.
              </p>
              <div className="grid gap-4">
                {deutsch.map((m) => (
                  <Blatt key={m.datei} m={m} />
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Mathematik" title="Von Klasse 4 bis zur Oberstufe" roh titelAbstand="weit">
              <div className="grid gap-4">
                {mathe.map((m) => (
                  <Blatt key={m.datei} m={m} />
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Hinweis" title="Was hier nicht steht">
              <p>
                Die Originalaufgaben früherer Prüfungen finden Sie nicht bei uns, sondern dort, wo
                sie hingehören: beim Schulministerium. Das Land stellt sie samt Lösungen bereit.
              </p>
              <p>
                <a
                  href="https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-am-ende-der-klasse-10-zp10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-deep hover:underline"
                >
                  Zentrale Prüfungen Klasse 10 beim Schulministerium NRW
                </a>
              </p>
              <p className="pt-2">
                Unser Material ergänzt diese Aufgaben: Es sagt, wie man an sie herangeht und woran
                die Bewertung hängt.
              </p>
              <WeiterLink href="/zap-vorbereitung">Zur ZAP-Vorbereitung</WeiterLink>
            </SeoBlock>

            <AbschlussKarte
              titel="Fragen zum Material?"
              text="Wenn beim Üben etwas hängen bleibt, klären wir das in der kostenlosen Probestunde — auch ohne dass Sie danach bleiben müssen."
              knopfText="Probestunde vereinbaren"
              href="/#kontakt"
            />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

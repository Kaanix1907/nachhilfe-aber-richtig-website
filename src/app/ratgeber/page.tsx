import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import { SeoBlock, AbschlussKarte, WeiterLink, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { SITE_URL, breadcrumbLd } from "@/lib/schema";
import { RATGEBER } from "@/lib/ratgeber";

// Sammelstelle der Ratgeber-Ebene. Sie existiert von Anfang an, weil eine
// gekuerzte URL sonst im Nichts landet: Genau dieser Fehler stand bis zum
// 05.08.2026 unter /nachhilfe, wo elf Unterseiten lagen und die Ebene
// darueber ein 404 war.

export const metadata: Metadata = {
  title: { absolute: "Ratgeber Nachhilfe: Kosten, Zeitpunkt, Versetzung, Auswahl" },
  description:
    "Vier Texte für Eltern: woraus sich der Preis für Nachhilfe zusammensetzt, ab wann sie sinnvoll ist und was der Blaue Brief wirklich bedeutet.",
  alternates: { canonical: `${SITE_URL}/ratgeber` },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/ratgeber`,
    siteName: BUSINESS.name,
    title: "Ratgeber Nachhilfe: Kosten, Zeitpunkt, Versetzung, Auswahl",
    description:
      "Vier Texte für Eltern: Preisfaktoren, der richtige Zeitpunkt, der Blaue Brief und die Auswahl eines Anbieters.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nachhilfe, aber richtig!" }],
  },
};

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ratgeber für Eltern",
  itemListElement: RATGEBER.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: r.h1,
    url: `${SITE_URL}/ratgeber/${r.slug}`,
  })),
};

export default function RatgeberUebersicht() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Ratgeber", pfad: "/ratgeber" }])) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Ratgeber"
          h1="Ratgeber für Eltern"
          lead="Vier Fragen, die uns am Telefon am häufigsten gestellt werden, hier ausführlich beantwortet. Ohne Werbetext und ohne Anmeldung."
          breadcrumb="Ratgeber"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <SeoBlock kicker="Themen" title="Worum es geht" roh titelAbstand="weit">
              <div className="grid gap-4">
                {RATGEBER.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/ratgeber/${r.slug}`}
                    className="block rounded-2xl p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
                    style={{
                      border: "1px solid rgba(26,26,46,0.07)",
                      boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 8px 24px rgba(26,26,46,0.05)",
                    }}
                  >
                    <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-[0.68rem] px-3 py-1 rounded-full mb-3 tracking-widest uppercase border border-primary/12">
                      {r.kicker}
                    </span>
                    <p
                      className="font-heading font-bold text-dark text-lg mb-2"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {r.h1}
                    </p>
                    <p className="font-body text-muted/75 text-[0.93rem] leading-[1.65]">{r.teaser}</p>
                  </Link>
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Warum" title="Wozu diese Seiten da sind">
              <p>
                Wir unterrichten selbst und telefonieren selbst. Dieselben vier Fragen kommen in
                fast jedem Erstgespräch vor, und die Antworten passen nicht in zwei Sätze. Sie
                stehen deshalb hier, vollständig und frei zugänglich.
              </p>
              <p>
                Die Texte sind so geschrieben, dass sie auch dann nützen, wenn Sie sich am Ende
                gegen uns entscheiden. Das ist Absicht.
              </p>
              <WeiterLink href="/material">
                Genauso beim Übungsmaterial: frei, ohne Anmeldung
              </WeiterLink>
            </SeoBlock>

            <AbschlussKarte
              titel="Lieber direkt fragen?"
              text="Die erste Stunde ist kostenlos, und ein Anruf kostet gar nichts. Wir sagen Ihnen auch, wenn Nachhilfe im Moment nicht das richtige Mittel ist."
              knopfText="Kontakt aufnehmen"
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

import type { Metadata } from "next";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import { SeoBlock, AbschlussKarte, WeiterLink, StandHinweis } from "@/components/SeoBlock";
import { ORTE, FAECHER } from "@/lib/seo-pages";
import { RATGEBER } from "@/lib/ratgeber";
import { BUSINESS } from "@/lib/data";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

// Diese Adresse war ein 404, obwohl elf Seiten darunter liegen. Wer eine URL
// kuerzt — Menschen wie Suchmaschinen tun das —, landete im Nichts. Ausserdem
// fehlte die Ebene, ueber die sich die Unterseiten gegenseitig stuetzen: die
// Brotkrume sprang von der Startseite direkt aufs Fach.
export const metadata: Metadata = {
  title: { absolute: "Nachhilfe in Duisburg: alle Fächer und Standorte im Überblick" },
  description:
    "Alle Fächer und Stadtteile auf einen Blick: Nachhilfe in Duisburg-Rheinhausen und Umgebung, Klasse 1 bis Abitur, in Kleingruppen oder einzeln.",
  alternates: { canonical: `${SITE_URL}/nachhilfe` },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: `${SITE_URL}/nachhilfe`,
    siteName: BUSINESS.name,
    title: "Nachhilfe in Duisburg: alle Fächer und Standorte",
    description:
      "Alle Fächer und Stadtteile auf einen Blick: Nachhilfe in Duisburg-Rheinhausen und Umgebung, Klasse 1 bis Abitur.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nachhilfe, aber richtig!" }],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Nachhilfe", item: `${SITE_URL}/nachhilfe` },
  ],
};

// Zwei Seiten, die weder Fach noch Ort sind. Sie liegen als eigene Routen
// neben [slug] und muessen deshalb ueberall von Hand mitgefuehrt werden.
const STUFEN = [
  {
    slug: "grundschule",
    titel: "Grundschule, Klasse 1 bis 4",
    text: "Lesen, Schreiben und Rechnen tragen alles Spätere. Dazu: was die Schulformempfehlung in Klasse 4 bedeutet und was nicht.",
  },
  {
    slug: "abiturvorbereitung",
    titel: "Abiturvorbereitung",
    text: "Zwei Drittel der Abiturpunkte entstehen in der Qualifikationsphase, nicht in der Prüfung. Wo sich Arbeit lohnt und wo nicht.",
  },
];

// Die Uebersicht als ItemList: sie sagt einer Suchmaschine, dass die
// Unterseiten zusammengehoeren und wo ihre Sammelstelle liegt.
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nachhilfeangebote nach Fach, Schulstufe und Standort",
  itemListElement: [
    ...FAECHER.map((fach, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Nachhilfe in ${fach.name}`,
      url: `${SITE_URL}/nachhilfe/${fach.slug}`,
    })),
    ...STUFEN.map((stufe, i) => ({
      "@type": "ListItem",
      position: FAECHER.length + i + 1,
      name: stufe.titel,
      url: `${SITE_URL}/nachhilfe/${stufe.slug}`,
    })),
    ...ORTE.map((ort, i) => ({
      "@type": "ListItem",
      position: FAECHER.length + STUFEN.length + i + 1,
      name: `Nachhilfe in ${ort.langName}`,
      url: `${SITE_URL}/nachhilfe/${ort.slug}`,
    })),
  ],
};

function Karte({ href, titel, text }: { href: string; titel: string; text: string }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
      style={{
        border: "1px solid rgba(26,26,46,0.07)",
        boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 8px 24px rgba(26,26,46,0.05)",
      }}
    >
      <p className="font-heading font-bold text-dark text-lg mb-2" style={{ letterSpacing: "-0.02em" }}>
        {titel}
      </p>
      <p className="font-body text-muted/75 text-[0.93rem] leading-[1.65]">{text}</p>
    </Link>
  );
}

export default function NachhilfeUebersicht() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Überblick"
          h1="Nachhilfe in Duisburg: Fächer und Standorte"
          lead={`Sechs Fächer, zwei Schulstufen, fünf Stadtteile, ein Lernort in der ${BUSINESS.addresses.lernort.street}. Hier steht, was es gibt, und wo Sie weiterlesen, wenn etwas davon zu Ihnen passt.`}
          breadcrumb="Nachhilfe"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <SeoBlock kicker="Nach Fach" title="Wobei wir unterstützen" roh titelAbstand="weit">
              <div className="grid sm:grid-cols-2 gap-4">
                {FAECHER.map((fach) => (
                  <Karte
                    key={fach.slug}
                    href={`/nachhilfe/${fach.slug}`}
                    titel={fach.name}
                    text={fach.intro[0]?.split(". ").slice(0, 1).join(". ") + "."}
                  />
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Nach Schulstufe" title="Zwei Stufen mit eigenen Regeln" roh titelAbstand="weit">
              <div className="grid sm:grid-cols-2 gap-4">
                {STUFEN.map((s) => (
                  <Karte key={s.slug} href={`/nachhilfe/${s.slug}`} titel={s.titel} text={s.text} />
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Nach Ort" title="Woher unsere Schülerinnen und Schüler kommen" roh titelAbstand="weit">
              <div className="grid sm:grid-cols-2 gap-4">
                {ORTE.map((ort) => (
                  <Karte
                    key={ort.slug}
                    href={`/nachhilfe/${ort.slug}`}
                    titel={ort.langName}
                    text={ort.intro[0]?.split(". ").slice(0, 1).join(". ") + "."}
                  />
                ))}
              </div>
            </SeoBlock>

            <SeoBlock kicker="Besondere Angebote" title="Zwei Wege, die nicht in dieses Raster passen">
              <p>
                <strong className="text-dark font-semibold">Bildung und Teilhabe.</strong>{" "}
                Familien, die Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe beziehen, haben
                Anspruch auf Lernförderung. Die Kosten trägt dann das Amt. Wir rechnen direkt mit dem
                Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab.
              </p>
              <WeiterLink href="/bildung-und-teilhabe">
                So läuft der Antrag auf Lernförderung
              </WeiterLink>
              <p className="pt-4">
                <strong className="text-dark font-semibold">Zentrale Prüfungen Klasse 10.</strong>{" "}
                Die ZP10 entscheidet über den Abschluss und darüber, ob es in die Oberstufe geht.
                Geprüft wird der Stoff mehrerer Schuljahre in festen Aufgabenformaten — dafür gibt es
                eine eigene Vorbereitung.
              </p>
              <WeiterLink href="/zap-vorbereitung">Zur ZAP-Vorbereitung</WeiterLink>
            </SeoBlock>

            {/* Die vier Ratgeber-Beitraege stehen hier einzeln und nicht nur
                als Sammellink: Sonst haengen sie an genau zwei eingehenden
                Verweisen, der Sammelseite und einem Nachbarn. */}
            <SeoBlock kicker="Vorher" title="Noch unentschieden?">
              <p>
                Ob Nachhilfe überhaupt das richtige Mittel ist, woraus sich der Preis zusammensetzt
                und was der Blaue Brief bedeutet: Diese Fragen beantworten wir im Ratgeber
                ausführlich, ohne Anmeldung und ohne Verkaufstext.
              </p>
              <div className="flex flex-col gap-3 pt-1">
                {RATGEBER.map((r) => (
                  <WeiterLink key={r.slug} href={`/ratgeber/${r.slug}`}>
                    {r.h1}
                  </WeiterLink>
                ))}
              </div>
            </SeoBlock>

            <AbschlussKarte
              titel="Erste Stunde kostenlos"
              text="Unverbindlich ausprobieren, ob es passt — in jedem Fach und von jedem Stadtteil aus."
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

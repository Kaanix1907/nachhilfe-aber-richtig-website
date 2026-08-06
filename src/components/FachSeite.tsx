import Navbar from "./Navbar";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Footer from "./Footer";
import SeoPageHero from "./SeoPageHero";
import { SeoBlock, WeiterLink, AbschlussKarte, LinkKachel, PillenReihe, StandHinweis } from "./SeoBlock";
import { BUSINESS } from "@/lib/data";
import { FaqListe } from "./FAQ";
import { FACH_FAQ } from "@/lib/seo-faq";
import { ORTE, FAECHER, type FachPage } from "@/lib/seo-pages";

// Abschnitte als eigene Komponenten — siehe Kommentar in OrtSeite.tsx.

const ZAP_FAECHER = ["mathe", "deutsch", "englisch"];

function WarumEsHakt({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Warum es hakt" title={`${fach.name} in der Schule`}>
      {fach.intro.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </SeoBlock>
  );
}

function Themen({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Themen" title={`Was wir in ${fach.name} konkret üben`}>
      <p>
        Die Schwerpunkte verschieben sich mit der Klassenstufe. Das sind die Stellen, an
        denen bei uns die meiste Arbeit anfällt:
      </p>
      <div className="grid gap-4 pt-2">
        {fach.themen.map((t) => (
          <div
            key={t.stufe}
            className="rounded-2xl p-6 bg-white"
            style={{
              border: "1px solid rgba(26,26,46,0.07)",
              boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
            }}
          >
            <h3 className="font-heading font-bold text-dark text-[1.02rem] mb-3" style={{ letterSpacing: "-0.01em" }}>
              {t.stufe}
            </h3>
            <ul className="space-y-2">
              {t.punkte.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.94rem]">
                  <span className="shrink-0 mt-[0.5rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SeoBlock>
  );
}

function ZentralePruefungen({ fach }: { fach: FachPage }) {
  // Nur die drei Pruefungsfaecher der ZP10 — bei Physik oder Biologie waere
  // der Hinweis sachlich falsch.
  if (!ZAP_FAECHER.includes(fach.slug)) return null;
  return (
    <SeoBlock kicker="Klasse 10" title={`${fach.name} in den Zentralen Prüfungen`}>
      <p>
        {fach.name} ist eines der drei Fächer, in denen am Ende der Klasse 10 in
        Nordrhein-Westfalen zentral geprüft wird. Die Aufgaben kommen landesweit
        einheitlich vom Schulministerium, nicht von der eigenen Lehrkraft. Geprüft wird
        der Stoff mehrerer Schuljahre.
      </p>
      <WeiterLink href="/zap-vorbereitung">Zur ZAP-Vorbereitung</WeiterLink>
    </SeoBlock>
  );
}

function Ansatz({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Unser Ansatz" title={`Wie wir ${fach.name} unterrichten`}>
      <p>{fach.ansatz}</p>
      <p>
        Unterrichtet wird von geprüften Lehramtsstudierenden und Lehrkräften mit
        erweitertem Führungszeugnis, und nur in Fächern, die sie sicher beherrschen.
      </p>
    </SeoBlock>
  );
}

function Foerderung({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Förderung" title={`${fach.name}-Nachhilfe kostenlos über Bildung und Teilhabe`}>
      <p>
        Bezieht Ihre Familie Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe, besteht
        Anspruch auf außerschulische Lernförderung. Dann übernimmt das Amt die Kosten für
        die {fach.kurz}-Nachhilfe vollständig.
      </p>
      <p>
        Wir sind auf diese Abrechnung eingerichtet, rechnen direkt mit dem Jobcenter
        Duisburg beziehungsweise der Stadt Duisburg ab und begleiten den Antrag.
      </p>
      <WeiterLink href="/bildung-und-teilhabe">So läuft der Antrag auf Lernförderung</WeiterLink>
    </SeoBlock>
  );
}

function Standorte({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Standorte" title={`Wo Sie ${fach.kurz}-Nachhilfe bei uns bekommen`}>
      <p>
        Unser Lernort liegt in der {BUSINESS.addresses.lernort.street},{" "}
        {BUSINESS.addresses.lernort.city}. Von dort betreuen wir Schülerinnen und Schüler
        aus Rheinhausen und den umliegenden Orten:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 pt-1">
        {ORTE.map((o) => (
          <LinkKachel
            key={o.slug}
            href={`/nachhilfe/${o.slug}`}
            titel={`${fach.kurz}-Nachhilfe ${o.name}`}
          />
        ))}
      </div>
    </SeoBlock>
  );
}

function Fragen({ fach }: { fach: FachPage }) {
  const fragen = FACH_FAQ[fach.slug];
  if (!fragen?.length) return null;
  return (
    <SeoBlock kicker="Fragen & Antworten" title={`Was Eltern uns zu ${fach.name} fragen`} roh titelAbstand="weit">
      <FaqListe items={fragen} />
    </SeoBlock>
  );
}

function WeitereFaecher({ fach }: { fach: FachPage }) {
  return (
    <SeoBlock kicker="Weitere Fächer" title="Nachhilfe in anderen Fächern">
      <PillenReihe
        extraKlasse="pt-1"
        eintraege={FAECHER.filter((f) => f.slug !== fach.slug).map((f) => ({
          href: `/nachhilfe/${f.slug}`,
          label: f.name,
        }))}
      />
    </SeoBlock>
  );
}

export default function FachSeite({ fach }: { fach: FachPage }) {
  return (
    <>
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker={`${fach.name}-Nachhilfe`}
          h1={`Nachhilfe in ${fach.name} in Duisburg-Rheinhausen`}
          lead={`${fach.kurz}-Nachhilfe von Klasse 1 bis zum Abitur, in Kleingruppen von drei bis fünf Schülern, im Einzelunterricht oder online. Die erste Stunde ist kostenlos.`}
          breadcrumb={fach.name}
          breadcrumbParent={{ label: "Nachhilfe", href: "/nachhilfe" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <WarumEsHakt fach={fach} />
            <Themen fach={fach} />
            <ZentralePruefungen fach={fach} />
            <Ansatz fach={fach} />
            <Foerderung fach={fach} />
            <Standorte fach={fach} />
            <Fragen fach={fach} />
            <WeitereFaecher fach={fach} />
            <AbschlussKarte
              titel={`${fach.name} einmal ausprobieren`}
              text="Die erste Stunde ist kostenlos und unverbindlich. Danach entscheiden Sie in Ruhe."
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FAQ from "@/components/FAQ";
import {
  SeoBlock,
  SchrittListe,
  PillenReihe,
  WeiterLink,
  AbschlussKarte,
  StandHinweis,
} from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { ANBIETER, SITE_URL, breadcrumbLd, faqLd, POSTANSCHRIFT_LERNORT } from "@/lib/schema";
import { ZAP_FAECHER, ZAP_TERMIN_HINWEIS, zapFachNachSlug, type ZapFach } from "@/lib/zap-faecher";

// Eine Route je Pruefungsfach. Die Uebersichtsseite /zap-vorbereitung kann
// diese Tiefe nicht tragen, ohne selbst zu zerfasern: Sie muesste dreimal
// Pruefungszeiten, Hilfsmittel und Gewichtungen ausbreiten und waere danach
// fuer niemanden mehr lesbar. Getrennte Seiten bedienen ausserdem getrennte
// Suchanfragen ("zp10 englisch gewichtung" ist nicht "zap vorbereitung").

export function generateStaticParams() {
  return ZAP_FAECHER.map((f) => ({ fach: f.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ fach: string }>;
}): Promise<Metadata> {
  const { fach } = await params;
  const seite = zapFachNachSlug(fach);
  if (!seite) return {};

  return {
    title: { absolute: seite.title },
    description: seite.description,
    alternates: { canonical: `${SITE_URL}/zap-vorbereitung/${fach}` },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: `${SITE_URL}/zap-vorbereitung/${fach}`,
      modifiedTime: INHALT_STAND,
      siteName: BUSINESS.name,
      title: seite.title,
      description: seite.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seite.title }],
    },
  };
}

function courseLd(seite: ZapFach) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `ZAP-Vorbereitung ${seite.fach}: Zentrale Prüfung Klasse 10`,
    description: seite.description,
    url: `${SITE_URL}/zap-vorbereitung/${seite.slug}`,
    dateModified: INHALT_STAND,
    inLanguage: "de",
    teaches: seite.fach,
    educationalLevel: "Sekundarstufe I, Klasse 10",
    provider: ANBIETER,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      // Zwei Wochenenden je Fach, PT8H je Wochenendtag. Dieselbe Rechnung
      // wie auf der Uebersichtsseite, damit beide Angaben nicht auseinander
      // laufen.
      courseWorkload: "PT32H",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        repeatCount: 2,
        byDay: ["https://schema.org/Saturday", "https://schema.org/Sunday"],
        duration: "PT8H",
      },
      location: {
        "@type": "Place",
        name: BUSINESS.name,
        address: POSTANSCHRIFT_LERNORT,
      },
    },
  };
}

function Aufbau({ seite }: { seite: ZapFach }) {
  return (
    <SeoBlock kicker="Aufbau" title={`Wie die ${seite.fach}prüfung abläuft`} roh titelAbstand="weit">
      <div className="grid gap-4">
        {seite.teile.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl p-6 bg-white"
            style={{
              border: "1px solid rgba(26,26,46,0.07)",
              boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
            }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2.5">
              <h3 className="font-heading font-bold text-dark text-[1.05rem]" style={{ letterSpacing: "-0.01em" }}>
                {t.name}
              </h3>
              <span className="font-body font-semibold text-primary-deep text-[0.9rem]">{t.zeit}</span>
            </div>
            <p className="font-body text-muted/75 leading-[1.8] text-[0.94rem]">{t.inhalt}</p>
            <p className="font-body text-muted/75 leading-[1.7] text-[0.88rem] mt-3 pt-3 border-t border-gray-100">
              <span className="font-semibold text-dark/70">Hilfsmittel:</span> {t.hilfsmittel}
            </p>
          </div>
        ))}
      </div>
      <div className="font-body text-muted/75 leading-[1.8] text-[0.97rem] space-y-4 pt-6">
        <p>
          Die gesamte Bearbeitungszeit beträgt{" "}
          <strong className="text-dark font-semibold">{seite.gesamt.msa}</strong> am Mittleren
          Schulabschluss und bei gymnasialer Differenzierung,{" "}
          <strong className="text-dark font-semibold">{seite.gesamt.eesa}</strong> am Erweiterten
          Ersten Schulabschluss.
        </p>
        <p>{seite.zeitregel}</p>
      </div>
    </SeoBlock>
  );
}

// Nur Englisch fuehrt eine amtliche Prozentgewichtung. Die Tabelle ist der
// eigentliche Grund, warum diese Seite existiert: Die Zahl steht sonst
// nirgends in lesbarer Form, nur in einer Praesentation des Landesinstituts.
function Gewichtung({ seite }: { seite: ZapFach }) {
  if (!seite.gewichtung) return null;
  return (
    <SeoBlock kicker="Gewichtung" title="Was wie viel zählt" roh titelAbstand="weit">
      <div className="overflow-x-auto">
        <table className="w-full font-body text-[0.94rem] border-collapse">
          <caption className="sr-only">
            Prozentuale Gewichtung der Prüfungsteile nach Abschluss
          </caption>
          <thead>
            <tr className="border-b border-gray-200">
              <th scope="col" className="text-left font-heading font-bold text-dark py-3 pr-4">
                Prüfungsteil
              </th>
              <th scope="col" className="text-right font-heading font-bold text-dark py-3 px-4 whitespace-nowrap">
                MSA und GYM
              </th>
              <th scope="col" className="text-right font-heading font-bold text-dark py-3 pl-4 whitespace-nowrap">
                EESA
              </th>
            </tr>
          </thead>
          <tbody>
            {seite.gewichtung.map((g) => (
              <tr key={g.teil} className="border-b border-gray-100">
                <th scope="row" className="text-left font-body font-medium text-dark/80 py-3 pr-4">
                  {g.teil}
                </th>
                <td className="text-right font-body text-muted/75 py-3 px-4 tabular-nums">{g.msa}</td>
                <td className="text-right font-body text-muted/75 py-3 pl-4 tabular-nums">{g.eesa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="font-body text-muted/75 text-[0.86rem] leading-[1.7] pt-4">
        MSA steht für den Mittleren Schulabschluss, GYM für die Anforderungen mit gymnasialer
        Differenzierung, EESA für den Erweiterten Ersten Schulabschluss.
      </p>
    </SeoBlock>
  );
}

function Schluessel({ seite }: { seite: ZapFach }) {
  return (
    <SeoBlock kicker="Der Knackpunkt" title={seite.schluessel.titel}>
      {seite.schluessel.absaetze.map((a) => (
        <p key={a.slice(0, 40)}>{a}</p>
      ))}
    </SeoBlock>
  );
}

function Termine({ seite }: { seite: ZapFach }) {
  return (
    <SeoBlock kicker="Termine" title={`Wann die ${seite.fach}prüfung 2027 geschrieben wird`}>
      <p>
        Haupttermin ist <strong className="text-dark font-semibold">{seite.termin.haupt}</strong>,
        Nachschreibtermin <strong className="text-dark font-semibold">{seite.termin.nachschreiben}</strong>.
        {" "}
        {ZAP_TERMIN_HINWEIS}
      </p>
      <p>
        Wer ein halbes Jahr vorher anfängt, kann Lücken noch schließen. Wer sechs Wochen vorher
        kommt, trainiert vor allem Formate und Zeiteinteilung. Beides bringt etwas, aber es ist
        ein Unterschied.
      </p>
    </SeoBlock>
  );
}

function Quelle() {
  return (
    <SeoBlock kicker="Woher die Zahlen stammen" title="Belege">
      <p>
        Prüfungszeiten, Hilfsmittel und Gewichtungen auf dieser Seite stammen aus den amtlichen
        Vorgaben des Landes Nordrhein-Westfalen, nicht aus zweiter Hand:
      </p>
      <ul className="space-y-2.5 pt-1">
        {[
          {
            text: "ZP10-Verfügung, Kapitel II.4 (Bearbeitungsdauer) und II.5 (Hilfsmittel)",
            href: "https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-am-ende-der-klasse-10-zp10",
          },
          {
            text: "Fachliche Vorgaben und Materialien der Qualitäts- und UnterstützungsAgentur",
            href: "https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/zp10-fachliche-vorgaben-hinweise-und-materialien",
          },
          {
            text: "Termine der Zentralen Prüfungen 10 für 2027",
            href: "https://www.standardsicherung.schulministerium.nrw.de/zentrale-pruefungen-10/termine/zentrale-pruefungen-10-termine-2027",
          },
        ].map((q) => (
          <li key={q.href} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <a
              href={q.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-deep font-medium underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-[text-decoration-color] duration-200"
            >
              {q.text}
            </a>
          </li>
        ))}
      </ul>
      <p className="pt-1">
        Für die Prüfung Ihres Kindes gilt verbindlich, was die Schule mitteilt. Wenn Ihnen hier
        eine Angabe veraltet vorkommt, schreiben Sie uns: Wir prüfen sie nach und ändern die Seite.
      </p>
    </SeoBlock>
  );
}

function Weiter({ seite }: { seite: ZapFach }) {
  const andere = ZAP_FAECHER.filter((f) => f.slug !== seite.slug);
  return (
    <SeoBlock kicker="Weiter" title="Die anderen beiden Prüfungsfächer" roh titelAbstand="weit">
      <PillenReihe
        eintraege={andere.map((f) => ({
          href: `/zap-vorbereitung/${f.slug}`,
          label: `ZAP ${f.fach}`,
        }))}
      />
      <div className="font-body text-muted/75 leading-[1.8] text-[0.97rem] space-y-4 pt-6">
        <p>
          Geht es nicht um die Prüfung, sondern um laufende Noten, sind Sie auf der{" "}
          <strong className="text-dark font-semibold">{seite.fach}-Seite</strong> richtiger.
        </p>
        <WeiterLink href={`/nachhilfe/${seite.slug}`}>
          Zur {seite.fach}-Nachhilfe in Duisburg
        </WeiterLink>
        <p className="pt-2">
          Die Aufgaben- und Lösungshefte, mit denen wir arbeiten, stehen kostenlos zum
          Herunterladen bereit, ohne Anmeldung und ohne E-Mail-Adresse.
        </p>
        <WeiterLink href="/material">Zum Übungsmaterial</WeiterLink>
        <p className="pt-2">
          Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe kann auch die
          Prüfungsvorbereitung über Bildung und Teilhabe laufen. Wir rechnen dann direkt mit dem
          Amt ab.
        </p>
        <WeiterLink href="/bildung-und-teilhabe">So läuft der Antrag auf Lernförderung</WeiterLink>
      </div>
    </SeoBlock>
  );
}

export default async function ZapFachSeite({ params }: { params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  const seite = zapFachNachSlug(fach);
  if (!seite) notFound();

  const brotkrume = breadcrumbLd([
    { name: "ZAP-Vorbereitung", pfad: "/zap-vorbereitung" },
    { name: seite.fach, pfad: `/zap-vorbereitung/${seite.slug}` },
  ]);
  const fragen = faqLd(seite.faq);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd(seite)) }} />
      {fragen && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fragen) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brotkrume) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker={`ZAP ${seite.fach}`}
          h1={`ZAP ${seite.fach} in Duisburg: Zentrale Prüfung Klasse 10`}
          lead={seite.lead}
          breadcrumb={seite.fach}
          breadcrumbParent={{ label: "ZAP-Vorbereitung", href: "/zap-vorbereitung" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <SeoBlock kicker="Überblick" title={`Was in ${seite.fach} geprüft wird`}>
              {seite.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </SeoBlock>

            <Aufbau seite={seite} />
            <Gewichtung seite={seite} />
            <Schluessel seite={seite} />

            <SeoBlock kicker="Training" title="Woran wir konkret arbeiten" roh titelAbstand="weit">
              <SchrittListe schritte={seite.training} />
            </SeoBlock>

            <Termine seite={seite} />
            <Quelle />
            <Weiter seite={seite} />

            <AbschlussKarte
              titel="Mit einer Standortbestimmung anfangen"
              text={`Ihr Kind schreibt eine vollständige ${seite.fach}prüfung aus einem früheren Jahrgang unter echten Bedingungen. Die erste Stunde ist kostenlos.`}
              knopfText="Termin vereinbaren"
              href="/#kontakt"
            />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={seite.faq}
          title={`Fragen zur ZAP ${seite.fach}`}
          intro={`Was Eltern und Schüler zur Prüfung im Fach ${seite.fach} am häufigsten fragen.`}
        />
      </main>
      <Footer />
    </>
  );
}

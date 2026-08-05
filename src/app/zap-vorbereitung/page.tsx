import type { Metadata } from "next";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, PillenReihe, WeiterLink, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { FAECHER } from "@/lib/seo-pages";
import type { FaqItem } from "@/lib/faq";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

export const metadata: Metadata = {
  // `absolute`, sonst haengt das Layout-Template den Firmennamen an und der
  // Titel laeuft ueber die Anzeigelaenge.
  title: { absolute: "ZAP-Vorbereitung Duisburg | Zentrale Prüfungen Klasse 10" },
  description:
    "Vorbereitung auf die Zentralen Prüfungen Klasse 10 in Duisburg: Mathematik, Deutsch und Englisch, mit echten Prüfungsaufgaben. Erste Stunde kostenlos.",
  alternates: { canonical: `${SITE_URL}/zap-vorbereitung` },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: `${SITE_URL}/zap-vorbereitung`,
    modifiedTime: INHALT_STAND,
    siteName: BUSINESS.name,
    title: "ZAP-Vorbereitung Duisburg | Zentrale Prüfungen Klasse 10",
    description:
      "Vorbereitung auf die Zentralen Prüfungen Klasse 10 in Duisburg-Rheinhausen: Mathematik, Deutsch und Englisch.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ZAP-Vorbereitung Duisburg" }],
  },
};

const ZAP_FAQ: FaqItem[] = [
  {
    q: "Was sind die ZAP?",
    a: "ZAP steht für Zentrale Prüfungen am Ende der Klasse 10, in Nordrhein-Westfalen auch ZP10 genannt. Geschrieben wird in Deutsch, Mathematik und Englisch. Die Aufgaben kommen landesweit einheitlich vom Schulministerium, nicht von der eigenen Lehrkraft.",
  },
  {
    q: "Wer schreibt die Zentralen Prüfungen?",
    a: "Schülerinnen und Schüler der Klasse 10 an Haupt-, Real-, Sekundar- und Gesamtschulen in NRW. An Gymnasien gibt es die ZAP nicht; dort entscheidet die Versetzung in die Oberstufe über den Mittleren Schulabschluss.",
  },
  {
    q: "Wann finden die Prüfungen statt?",
    a: "Im Frühjahr, gestaffelt über mehrere Tage je Fach. Die genauen Termine legt das Schulministerium für jeden Jahrgang neu fest — Ihre Schule nennt sie Ihnen verbindlich. Wir richten den Trainingsplan danach aus.",
  },
  {
    q: "Wann sollten wir mit der Vorbereitung anfangen?",
    a: "Je früher, desto ruhiger. Wer ein halbes Jahr vorher beginnt, kann Lücken noch schließen. Wer sechs Wochen vorher kommt, trainiert vor allem Prüfungsformate und Zeiteinteilung. Beides bringt etwas, aber es ist ein Unterschied.",
  },
  {
    q: "Womit üben Sie?",
    a: "Mit echten Prüfungsaufgaben vergangener Jahrgänge. Wir haben dafür eigene Aufgaben- und Lösungshefte zusammengestellt, geordnet nach Themengebiet statt nach Prüfungsjahr — so lässt sich gezielt an einer Schwachstelle arbeiten und nicht nur der Reihe nach abarbeiten.",
  },
  {
    q: "Kann die ZAP-Vorbereitung über Bildung und Teilhabe laufen?",
    a: "Ja. Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe ist Lernförderung auch für die Prüfungsvorbereitung möglich, sofern die Schule Förderbedarf im jeweiligen Fach bestätigt.",
  },
  {
    q: "Was passiert, wenn die Prüfung nicht gut läuft?",
    a: "Für den Abschluss zählt nicht die Prüfung allein, sondern das Zusammenspiel aus Vornote und Prüfungsnote. Unter bestimmten Bedingungen ist außerdem eine mündliche Prüfung möglich. Was in Ihrem Fall gilt, sagt Ihnen die Schule verbindlich.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ZAP_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "ZAP-Vorbereitung", item: `${SITE_URL}/zap-vorbereitung` },
  ],
};

const courseLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "ZAP-Vorbereitung: Zentrale Prüfungen Klasse 10",
  description:
    "Vorbereitung auf die Zentralen Prüfungen am Ende der Klasse 10 in Nordrhein-Westfalen in Mathematik, Deutsch und Englisch.",
  url: `${SITE_URL}/zap-vorbereitung`,
  dateModified: INHALT_STAND,
  inLanguage: "de",
  teaches: ["Mathematik", "Deutsch", "Englisch"],
  provider: {
    "@type": "EducationalOrganization",
    name: BUSINESS.name,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addresses.lernort.street,
      addressLocality: "Duisburg",
      postalCode: "47226",
      addressCountry: "DE",
    },
  },
  // courseWorkload fehlte und ist seit 2024 Pflichtfeld fuer die
  // Kurs-Darstellung in der Suche. Die Angabe bildet das tatsaechliche
  // Format ab: je Fach zwei Wochenenden vor der Pruefung, das erste zum
  // Durchgehen aller Aufgabentypen, das zweite mit einer vollstaendigen
  // Uebungsklausur unter Pruefungsbedingungen samt Korrektur.
  // PT8H pro Wochenende, vier Wochenendtage je Fach — deshalb P4D/PT32H.
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["Onsite", "Online"],
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
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.addresses.lernort.street,
        addressLocality: "Duisburg",
        postalCode: "47226",
        addressCountry: "DE",
      },
    },
  },
};

const PRUEFUNGSFAECHER = [
  {
    slug: "mathe",
    fach: "Mathematik",
    inhalt:
      "Ein prüfungsfreier Teil ohne Taschenrechner und ein Teil mit Hilfsmitteln. Erfahrungsgemäß entscheiden nicht die schweren Aufgaben am Ende, sondern die sicheren Punkte am Anfang — Prozentrechnung, Gleichungen, Flächen und Körper, lineare und quadratische Funktionen.",
  },
  {
    slug: "deutsch",
    fach: "Deutsch",
    inhalt:
      "Leseverstehen an einem unbekannten Text und ein eigener längerer Text nach vorgegebenem Format. Wer weiß, wie die Aufgabenstellung gelesen werden will, verliert deutlich weniger Punkte als jemand, der einfach drauflosschreibt.",
  },
  {
    slug: "englisch",
    fach: "Englisch",
    inhalt:
      "Hörverstehen, Leseverstehen und Schreiben. Das Hörverstehen wird am häufigsten unterschätzt: es läuft unter Zeitdruck und lässt sich nur durch regelmäßiges Training verbessern, nicht durch Vokabellernen kurz vorher.",
  },
];

const ABLAUF = [
  {
    titel: "Standortbestimmung",
    text: "Ihr Kind schreibt eine vollständige Prüfung aus einem früheren Jahrgang unter echten Bedingungen. Danach wissen wir beide, wo es steht — nicht gefühlt, sondern in Punkten.",
  },
  {
    titel: "Lücken schließen",
    text: "Erst die Themen, die in der Auswertung durchgefallen sind. Das ist der unbequeme Teil und der, an dem die meisten Punkte hängen.",
  },
  {
    titel: "Formate trainieren",
    text: "Die ZAP hat feste Aufgabentypen. Wer sie kennt, spart in der Prüfung Zeit und macht weniger Formfehler, die nichts mit dem Fachwissen zu tun haben.",
  },
  {
    titel: "Zeit üben",
    text: "Vollständige Prüfungen unter Zeitdruck, mit Uhr. Viele Punkte gehen nicht durch Unwissen verloren, sondern weil hinten die Zeit fehlt.",
  },
];

function WasAndersIst() {
  return (
    <SeoBlock kicker="Worum es geht" title="Was bei den Zentralen Prüfungen anders ist">
      <p>
        Bei einer normalen Klassenarbeit stellt die eigene Lehrkraft die Aufgaben. Sie
        weiß, was im Unterricht behandelt wurde, und fragt genau das ab. Bei den{" "}
        <strong className="text-dark font-semibold">Zentralen Prüfungen</strong> kommen die
        Aufgaben landesweit einheitlich vom Schulministerium.
      </p>
      <p>
        Das ist der ganze Unterschied, und er ist größer als er klingt: Es reicht nicht,
        den Stoff der letzten Wochen zu können. Gefragt ist der Stoff mehrerer Schuljahre,
        in Aufgabenformaten, die im Unterricht nicht unbedingt vorkamen.
      </p>
      <p>
        Deshalb ist ZAP-Vorbereitung etwas anderes als Nachhilfe für die nächste Arbeit.
        Sie braucht einen Plan über Monate, nicht über Tage.
      </p>
    </SeoBlock>
  );
}

// Eigener Abschnitt statt SeoBlock: die Fachkarten stehen direkt unter der
// Ueberschrift, deshalb mb-6 und kein Textcontainer.
function DreiFaecher() {
  return (
    <SeoBlock kicker="Die drei Fächer" title="Worauf es je Fach ankommt" roh titelAbstand="weit">
      <div className="grid gap-4">
        {PRUEFUNGSFAECHER.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl p-6 bg-white"
            style={{
              border: "1px solid rgba(26,26,46,0.07)",
              boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
            }}
          >
            <h3 className="font-heading font-bold text-dark text-[1.05rem] mb-2.5" style={{ letterSpacing: "-0.01em" }}>
              {p.fach}
            </h3>
            <p className="font-body text-muted/70 leading-[1.8] text-[0.94rem] mb-3">{p.inhalt}</p>
            <WeiterLink href={`/nachhilfe/${p.slug}`} groesse="0.92rem">
              Zur {p.fach}-Nachhilfe
            </WeiterLink>
          </div>
        ))}
      </div>
    </SeoBlock>
  );
}

// Der Prüfungsaufbau stand bisher nirgends. Wer als Elternteil wissen will,
// was auf sein Kind zukommt, findet das sonst nur auf den Seiten des
// Schulministeriums — in Verwaltungssprache und über mehrere PDF verteilt.
// Alle Zahlen hier stammen aus den Vorgaben des Landes für den MSA.
function AufbauDeutsch() {
  return (
    <SeoBlock kicker="Deutsch im Detail" title="Wie die Deutschprüfung aufgebaut ist">
      <p>
        Die Prüfung dauert 150 Minuten und bringt 100 Punkte. Davon entfallen 30 Minuten
        und 20 Punkte auf das Leseverstehen, 120 Minuten und 80 Punkte auf den Schreibteil.
        Dazu kommen 10 Minuten Einlesezeit und 10 Minuten, in denen die Schülerinnen und
        Schüler ihre Aufgabe wählen. Als Hilfsmittel ist ein Rechtschreibwörterbuch
        zugelassen.
      </p>
      <p>
        Im Schreibteil stehen drei Aufgabentypen zur Wahl, und diese Wahl entscheidet mehr
        als die meisten glauben:
      </p>
      <ul className="space-y-3 pt-1">
        {[
          {
            t: "Typ 2 — Materialgestütztes Schreiben",
            d: "Aus mehreren Materialien entsteht ein informierender Text. Wer gern strukturiert und ungern deutet, fährt hier gut.",
          },
          {
            t: "Typ 4a — Analyse und Interpretation",
            d: "Ein einzelner Text, meist ein Gedicht oder eine Kurzgeschichte, seltener ein Sachtext. Verlangt Deutung und den sicheren Umgang mit sprachlichen Mitteln.",
          },
          {
            t: "Typ 4b — Vergleichende Analyse",
            d: "Zwei Texte gegenüberstellen. Der anspruchsvollste Typ, weil neben der Analyse auch der Vergleich sprachlich sauber gebaut sein muss.",
          },
        ].map((x) => (
          <li key={x.t} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>
              <strong className="text-dark font-semibold">{x.t}.</strong> {x.d}
            </span>
          </li>
        ))}
      </ul>
      <p className="pt-1">
        Bewertet wird nach Inhalt, Aufbau, Sprache und Darstellung. Für alle drei Typen
        stellen wir Formulierungshilfen und die Bewertungsbögen kostenlos bereit, mit denen
        wir selbst korrigieren.
      </p>
      <WeiterLink href="/material">Zum kostenlosen Übungsmaterial</WeiterLink>
    </SeoBlock>
  );
}

function Wahl() {
  return (
    <SeoBlock kicker="Die Wahl" title="Welchen Aufgabentyp soll mein Kind nehmen?">
      <p>
        Diese Frage kommt in jeder Vorbereitung, und die ehrliche Antwort lautet: den, den
        es geübt hat. Die zehn Minuten Wahlzeit in der Prüfung reichen nicht, um sich
        umzuentscheiden. Wer erst dort merkt, dass ihm das Gedicht nicht liegt, hat schon
        Zeit verloren.
      </p>
      <p>
        Wir arbeiten deshalb so: In den ersten Terminen probiert Ihr Kind alle drei Typen
        einmal aus. Danach steht fest, welcher am besten läuft, und der wird geübt. Die
        anderen beiden bleiben als Rückfalloption, falls das Prüfungsmaterial nicht passt.
      </p>
    </SeoBlock>
  );
}

function WieWirVorbereiten() {
  return (
    <SeoBlock kicker="Ablauf" title="Wie wir vorbereiten" roh titelAbstand="weit">
      <SchrittListe schritte={ABLAUF} />
      <p className="font-body text-muted/80 leading-[1.75] pt-5">
        Vor der Prüfung liegen zwei Wochenenden je Fach. Am ersten gehen wir alle
        Aufgabentypen durch, an einer Beispielklausur und mit Strategien für die
        Zeiteinteilung. Am zweiten schreiben die Schülerinnen und Schüler eine vollständige
        Übungsklausur unter Prüfungsbedingungen, die wir anschließend nach dem Original-
        Bewertungsraster korrigieren. Wer erst dort zum ersten Mal unter Zeitdruck schreibt,
        erlebt die echte Prüfung anders als jemand, der es schon einmal hinter sich hat.
      </p>
    </SeoBlock>
  );
}

function Material() {
  return (
    <SeoBlock kicker="Material" title="Eigene Aufgabenhefte statt loser Kopien">
      <p>
        Wir haben die Prüfungsaufgaben vergangener Jahrgänge zu eigenen Aufgaben- und
        Lösungsheften zusammengestellt und dabei{" "}
        <strong className="text-dark font-semibold">nach Themengebiet sortiert statt nach Prüfungsjahr</strong>.
      </p>
      <p>
        Das klingt nach einer Kleinigkeit und ist im Training der entscheidende
        Unterschied: Wer bei quadratischen Funktionen unsicher ist, übt zwanzig Aufgaben
        zu quadratischen Funktionen am Stück — statt sie über acht Prüfungsjahrgänge
        zusammenzusuchen und dazwischen Themen zu rechnen, die längst sitzen.
      </p>
    </SeoBlock>
  );
}

function Foerderung() {
  return (
    <SeoBlock kicker="Förderung" title="Prüfungsvorbereitung über Bildung und Teilhabe">
      <p>
        Auch die Vorbereitung auf die Zentralen Prüfungen kann als außerschulische
        Lernförderung über das Bildungspaket laufen, wenn die Schule Förderbedarf im
        jeweiligen Fach bestätigt. Wir rechnen direkt mit dem Jobcenter Duisburg
        beziehungsweise der Stadt Duisburg ab.
      </p>
      <WeiterLink href="/bildung-und-teilhabe">So läuft der Antrag auf Lernförderung</WeiterLink>
    </SeoBlock>
  );
}

function WeitereFaecher() {
  return (
    <SeoBlock kicker="Weitere Fächer" title="Nachhilfe über die Prüfungsfächer hinaus" roh>
      <PillenReihe eintraege={FAECHER.map((f) => ({ href: `/nachhilfe/${f.slug}`, label: f.name }))} />
    </SeoBlock>
  );
}

function Abschluss() {
  return (
    <FadeIn direction="up">
      <div
        className="rounded-3xl p-8 md:p-10 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 70%, #1e3a4f 100%)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
          Mit einer Standortbestimmung anfangen
        </h2>
        <p className="font-body text-white/60 leading-[1.75] text-[0.97rem] mb-7 max-w-md mx-auto">
          Die erste Stunde ist kostenlos. Danach wissen Sie in Punkten, wo Ihr Kind steht
          und wie viel Zeit noch nötig ist.
        </p>
        <a
          href="/#kontakt"
          className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
        >
          Termin vereinbaren
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </FadeIn>
  );
}

export default function ZapVorbereitung() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Prüfungsvorbereitung"
          h1="ZAP-Vorbereitung in Duisburg: Zentrale Prüfungen Klasse 10"
          lead="Gezieltes Training für die ZP10 in Mathematik, Deutsch und Englisch — mit echten Prüfungsaufgaben aus vergangenen Jahrgängen, in Kleingruppen oder einzeln."
          breadcrumb="ZAP-Vorbereitung"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <WasAndersIst />
            <DreiFaecher />
            <AufbauDeutsch />
            <Wahl />
            <WieWirVorbereiten />
            <Material />
            <Foerderung />
            <WeitereFaecher />
            <Abschluss />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={ZAP_FAQ}
          title="Fragen zu den Zentralen Prüfungen"
          intro="Was Eltern und Schüler zur ZP10 in Nordrhein-Westfalen am häufigsten fragen."
        />
      </main>
      <Footer />
    </>
  );
}

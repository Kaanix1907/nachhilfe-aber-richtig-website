import type { Metadata } from "next";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, PillenReihe, WeiterLink, AbschlussKarte, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { FAECHER } from "@/lib/seo-pages";
import { ZAP_FAECHER } from "@/lib/zap-faecher";
import { ANBIETER } from "@/lib/schema";
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
    a: "Im Mai, gestaffelt über mehrere Tage. Für 2027 hat das Schulministerium den 11. Mai für Deutsch, den 13. Mai für Englisch und den 20. Mai für Mathematik festgelegt, Beginn jeweils um 9 Uhr. Nachschreibtermine liegen Ende Mai und Anfang Juni. Verbindlich sind die Angaben Ihrer Schule.",
  },
  {
    q: "Wann sollten wir mit der Vorbereitung anfangen?",
    a: "Je früher, desto ruhiger. Wer ein halbes Jahr vorher beginnt, kann Lücken noch schließen. Wer sechs Wochen vorher kommt, trainiert vor allem Prüfungsformate und Zeiteinteilung. Beides bringt etwas, aber es ist ein Unterschied.",
  },
  {
    q: "Womit üben Sie?",
    a: "Mit echten Prüfungsaufgaben vergangener Jahrgänge. Wir haben dafür eigene Aufgaben- und Lösungshefte zusammengestellt, geordnet nach Themengebiet statt nach Prüfungsjahr. So lässt sich gezielt an einer Schwachstelle arbeiten und nicht nur der Reihe nach abarbeiten.",
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

// Sagt einer Suchmaschine, dass die drei Fachseiten zusammengehoeren und wo
// ihre Sammelstelle liegt. Ohne das haengen sie als Einzelseiten in der Luft.
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vorbereitung auf die Zentralen Prüfungen nach Fach",
  itemListElement: ZAP_FAECHER.map((f, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `ZAP ${f.fach}`,
    url: `${SITE_URL}/zap-vorbereitung/${f.slug}`,
  })),
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
  provider: ANBIETER,
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

// Kurzfassung je Fach, jeweils mit der einen Zahl, die den Unterschied macht.
// Die Tiefe steht auf den drei Unterseiten: Pruefungszeiten, Hilfsmittel und
// Gewichtungen dreimal hier auszubreiten, wuerde diese Seite unlesbar machen
// und nebenbei mit ihren eigenen Unterseiten um dieselbe Suchanfrage
// konkurrieren.
const PRUEFUNGSFAECHER = [
  {
    slug: "mathe",
    fach: "Mathematik",
    inhalt:
      "Zwei Prüfungsteile mit verschiedenen Regeln: 30 Minuten ohne Taschenrechner und ohne Formelsammlung, danach 90 Minuten mit beidem. Der hilfsmittelfreie Teil entscheidet mehr Noten, als seine Länge vermuten lässt.",
  },
  {
    slug: "deutsch",
    fach: "Deutsch",
    inhalt:
      "150 Minuten, davon 120 für einen einzigen selbst geschriebenen Text. Welche Schreibform es wird, sollte lange vor dem Prüfungstag feststehen und nicht erst in den zehn Minuten Auswahlzeit.",
  },
  {
    slug: "englisch",
    fach: "Englisch",
    inhalt:
      "Vier Bestandteile mit amtlicher Gewichtung. Im Schreibteil zählt die sprachliche Richtigkeit mit 35 Prozent mehr als der Inhalt mit 25. Das überrascht die meisten.",
  },
];

// Amtliche Termine des Haupttermins 2027. Sie stehen hier statt in einer
// vagen Formulierung, weil "im Fruehjahr" niemandem hilft, der einen
// Trainingsplan aufstellen will.
const TERMINE_2027 = [
  { fach: "Deutsch", tag: "Dienstag, 11. Mai 2027" },
  { fach: "Englisch", tag: "Donnerstag, 13. Mai 2027" },
  { fach: "Mathematik", tag: "Donnerstag, 20. Mai 2027" },
];

const ABLAUF = [
  {
    titel: "Standortbestimmung",
    text: "Ihr Kind schreibt eine vollständige Prüfung aus einem früheren Jahrgang unter echten Bedingungen. Danach wissen wir beide, wo es steht, nicht gefühlt, sondern in Punkten.",
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
            <p className="font-body text-muted/75 leading-[1.8] text-[0.94rem] mb-3">{p.inhalt}</p>
            <WeiterLink href={`/zap-vorbereitung/${p.slug}`} groesse="0.92rem">
              Prüfungsaufbau, Hilfsmittel und Termine in {p.fach}
            </WeiterLink>
          </div>
        ))}
      </div>
    </SeoBlock>
  );
}

// Die Termine standen bisher nur als "im Fruehjahr" auf der Seite. Sie sind
// amtlich veroeffentlicht, und sie sind das Erste, was Eltern wissen wollen,
// wenn sie ueberlegen, wann sie anfangen.
function Termine() {
  return (
    <SeoBlock kicker="Termine" title="Die Prüfungstermine 2027 stehen fest">
      <p>
        Die drei schriftlichen Prüfungen liegen im Mai und beginnen jeweils um 9 Uhr:
      </p>
      <ul className="space-y-2.5 pt-1">
        {TERMINE_2027.map((t) => (
          <li key={t.fach} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>
              <strong className="text-dark font-semibold">{t.fach}:</strong> {t.tag}
            </span>
          </li>
        ))}
      </ul>
      <p className="pt-1">
        Zwischen der ersten und der letzten Prüfung liegen neun Tage. Nachschreibtermine gibt es
        Ende Mai und Anfang Juni, die mündlichen Prüfungen folgen im Juni. Verbindlich sind die
        Angaben Ihrer Schule.
      </p>
      <p>
        Von heute aus gerechnet bleibt für den Jahrgang 2027 also noch fast ein ganzes Schuljahr.
        Das ist der Abstand, in dem sich Lücken noch schließen lassen statt nur Formate zu üben.
      </p>
    </SeoBlock>
  );
}

// Der ausfuehrliche Pruefungsaufbau je Fach stand bis 2026-08-05 hier, aber
// nur fuer Deutsch. Er liegt jetzt auf /zap-vorbereitung/deutsch, zusammen mit
// den beiden anderen Faechern auf ihren eigenen Seiten. Zwei Gruende: Diese
// Seite haette dreimal Pruefungszeiten, Hilfsmittel und Gewichtungen tragen
// muessen, und sie haette dabei mit ihren eigenen Unterseiten um "zap deutsch"
// konkurriert.
//
// Bei der Gelegenheit fielen zwei falsche Angaben auf, die hier standen:
// Die zehn Zusatzminuten heissen amtlich Bonuszeit und duerfen in Deutsch auf
// BEIDE Pruefungsteile verteilt werden, nicht nur zum Einlesen. Und die
// Punkteverteilung 20/80 liess sich in keiner amtlichen Quelle belegen; die
// Verfuegung nennt nur Zeiten. Sie ist deshalb ersatzlos entfallen.

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
        zu quadratischen Funktionen am Stück, statt sie über acht Prüfungsjahrgänge
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


export default function ZapVorbereitung() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Prüfungsvorbereitung"
          h1="ZAP-Vorbereitung in Duisburg: Zentrale Prüfungen Klasse 10"
          lead="Gezieltes Training für die ZP10 in Mathematik, Deutsch und Englisch, mit echten Prüfungsaufgaben aus vergangenen Jahrgängen, in Kleingruppen oder einzeln."
          breadcrumb="ZAP-Vorbereitung"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <WasAndersIst />
            <DreiFaecher />
            <Termine />
            <WieWirVorbereiten />
            <Material />
            <Foerderung />
            <WeitereFaecher />
            <AbschlussKarte
              titel="Mit einer Standortbestimmung anfangen"
              text="Die erste Stunde ist kostenlos. Danach wissen Sie in Punkten, wo Ihr Kind steht und wie viel Zeit noch nötig ist."
              knopfText="Termin vereinbaren"
              href="/#kontakt"
            />
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

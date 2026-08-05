import type { Metadata } from "next";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FadeIn from "@/components/FadeIn";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, PillenReihe, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { FAECHER, ORTE } from "@/lib/seo-pages";
import type { FaqItem } from "@/lib/faq";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

export const metadata: Metadata = {
  // `absolute`, damit das Template des Root-Layouts den Titel nicht auf
  // 85 Zeichen aufblaeht und Google ihn abschneidet.
  title: { absolute: "Kostenlose Nachhilfe über Bildung und Teilhabe in Duisburg" },
  description:
    "Lernförderung über Bildung und Teilhabe: Wer Anspruch hat, wie der Antrag beim Jobcenter Duisburg läuft und welche Unterlagen die Schule bestätigen muss.",
  alternates: { canonical: `${SITE_URL}/bildung-und-teilhabe` },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: `${SITE_URL}/bildung-und-teilhabe`,
    modifiedTime: INHALT_STAND,
    siteName: BUSINESS.name,
    title: "Kostenlose Nachhilfe über Bildung und Teilhabe in Duisburg",
    description:
      "Lernförderung über Bildung und Teilhabe: Anspruch, Antrag und Ablauf in Duisburg — Schritt für Schritt erklärt.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bildung und Teilhabe Nachhilfe Duisburg" }],
  },
};

const BUT_FAQ: FaqItem[] = [
  {
    q: "Wer hat Anspruch auf Lernförderung über Bildung und Teilhabe?",
    a: "Anspruch besteht bei Bezug von Bürgergeld, Sozialhilfe, Wohngeld, Kinderzuschlag oder Leistungen nach dem Asylbewerberleistungsgesetz. Entscheidend ist der Leistungsbezug der Familie, nicht die Schulform des Kindes.",
  },
  {
    q: "Muss mein Kind versetzungsgefährdet sein?",
    a: "Nein. Die frühere Auslegung, wonach nur die drohende Nichtversetzung zählt, gilt seit der Reform des Bildungspakets nicht mehr. Lernförderung ist bereits dann möglich, wenn wesentliche Lernziele gefährdet sind — das bestätigt die Schule auf dem Antragsformular.",
  },
  {
    q: "Wo stelle ich den Antrag in Duisburg?",
    a: "Wer Bürgergeld bezieht, stellt den Antrag beim Jobcenter Duisburg. Bei Wohngeld, Kinderzuschlag, Sozialhilfe oder Leistungen nach dem Asylbewerberleistungsgesetz ist die Stadt Duisburg zuständig. Welche Stelle es ist, steht auf Ihrem Bewilligungsbescheid.",
  },
  {
    q: "Welche Unterlagen brauche ich?",
    a: "Den ausgefüllten Antrag auf Lernförderung, eine Bestätigung der Schule über den Förderbedarf und den Nachweis über Ihren Leistungsbezug. Den Anbieterteil des Formulars füllen wir für Sie aus.",
  },
  {
    q: "Was kostet mich die Nachhilfe dann?",
    a: "Nichts. Bei bewilligter Lernförderung rechnen wir direkt mit dem Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab. Für die Familie entstehen keine Kosten und es wird nichts vorgestreckt.",
  },
  {
    q: "Wie lange dauert die Bewilligung?",
    a: "Das hängt von der Bearbeitungszeit der Behörde ab und liegt außerhalb unseres Einflusses. Damit Ihr Kind nicht warten muss, kann es in der Zwischenzeit bereits an der kostenlosen Probestunde teilnehmen.",
  },
  {
    q: "Für welche Fächer gilt die Förderung?",
    a: "Für die Fächer, in denen die Schule Förderbedarf bestätigt — in der Praxis meist Mathematik, Deutsch oder Englisch. Wir unterrichten darüber hinaus auch Physik, Chemie und Biologie.",
  },
  {
    q: "Was passiert, wenn die Bewilligung ausläuft?",
    a: "Lernförderung wird befristet bewilligt. Wir melden uns rechtzeitig vor Ablauf, damit ein Folgeantrag gestellt werden kann und der Unterricht nicht unterbrochen wird.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BUT_FAQ.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "Bildung und Teilhabe", item: `${SITE_URL}/bildung-und-teilhabe` },
  ],
};

const SCHRITTE = [
  {
    titel: "Leistungsbescheid heraussuchen",
    text: "Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Asylbewerberleistungen — der Bescheid ist der Nachweis, dass Anspruch besteht. Er sagt Ihnen auch, welche Stelle zuständig ist.",
  },
  {
    titel: "Antrag auf Lernförderung besorgen",
    text: "Das Formular gibt es beim Jobcenter Duisburg oder bei der Stadt Duisburg, in der Regel auch als PDF zum Ausdrucken. Wenn Sie unsicher sind, welches Formular das richtige ist, rufen Sie uns an.",
  },
  {
    titel: "Bestätigung der Schule einholen",
    text: "Die Klassen- oder Fachlehrkraft bestätigt auf dem Formular, in welchem Fach Förderbedarf besteht. Dieser Schritt wird am häufigsten vergessen und ist der häufigste Grund für Rückfragen der Behörde.",
  },
  {
    titel: "Anbieterteil von uns ausfüllen lassen",
    text: "Den Abschnitt, den der Nachhilfeanbieter unterschreibt, übernehmen wir. Bringen Sie das Formular einfach mit oder schicken Sie es uns.",
  },
  {
    titel: "Antrag einreichen und starten",
    text: "Sobald der Antrag eingereicht ist, kann Ihr Kind loslegen. Die Abrechnung läuft anschließend direkt zwischen uns und dem Amt — Sie zahlen nichts.",
  },
];

const ANSPRUCHSGRUENDE = [
  "Bürgergeld (früher Arbeitslosengeld II)",
  "Sozialhilfe nach dem SGB XII",
  "Wohngeld",
  "Kinderzuschlag",
  "Leistungen nach dem Asylbewerberleistungsgesetz",
];

function Ueberblick() {
  return (
    <SeoBlock kicker="Worum es geht" title="Was Bildung und Teilhabe für Nachhilfe bedeutet">
      <p>
        Das Bildungspaket des Bundes umfasst mehrere Leistungen für Kinder aus Familien
        mit geringem Einkommen. Eine davon heißt im Amtsdeutsch{" "}
        <strong className="text-dark font-semibold">außerschulische Lernförderung</strong>{" "}
        — gemeint ist Nachhilfe.
      </p>
      <p>
        Diese Leistung wird nicht ausgezahlt, sondern direkt mit dem Anbieter abgerechnet.
        Deshalb ist es wichtig, dass die Nachhilfe bei einer Stelle stattfindet, die mit
        dem Amt abrechnen kann. Wir tun das seit Jahren — sowohl mit dem Jobcenter
        Duisburg als auch mit der Stadt Duisburg.
      </p>
      <p>Für die Familie heißt das: kein Vorstrecken, keine Rechnung, keine Zuzahlung.</p>
    </SeoBlock>
  );
}

function Anspruch() {
  return (
    <SeoBlock kicker="Anspruch" title="Wer Anspruch auf Lernförderung hat">
      <p>Anspruch besteht, wenn die Familie eine dieser Leistungen bezieht:</p>
      <ul className="space-y-2.5">
        {ANSPRUCHSGRUENDE.map((l) => (
          <li key={l} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>{l}</span>
          </li>
        ))}
      </ul>
      <p>
        Dazu muss die Schule bestätigen, dass Ihr Kind Förderbedarf hat. Ein drohendes
        Sitzenbleiben ist dafür nicht mehr nötig — es genügt, dass wesentliche Lernziele
        gefährdet sind.
      </p>
    </SeoBlock>
  );
}

function Ablauf() {
  return (
    <SeoBlock kicker="Ablauf" title="Der Antrag in fünf Schritten" roh titelAbstand="weit">
      <SchrittListe schritte={SCHRITTE} />
    </SeoBlock>
  );
}

function Zustaendigkeit() {
  const kasten = {
    border: "1px solid rgba(26,26,46,0.07)",
    boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
  };
  return (
    <SeoBlock kicker="Zuständigkeit" title="Jobcenter Duisburg oder Stadt Duisburg?">
      <p>Welche Stelle zuständig ist, hängt allein davon ab, welche Leistung Sie beziehen:</p>
      <div className="grid sm:grid-cols-2 gap-4 pt-1">
        <div className="rounded-2xl p-6" style={kasten}>
          <h3 className="font-heading font-bold text-dark text-base mb-2">Jobcenter Duisburg</h3>
          <p className="text-[0.93rem]">
            Bei Bezug von Bürgergeld. Ihre Teamnummer steht oben rechts auf dem Bewilligungsbescheid.
          </p>
          <p className="text-[0.9rem] mt-3 text-muted/70">
            Für Rheinhausen zuständig ist die Geschäftsstelle am Körnerplatz 1, 47226 Duisburg.{" "}
            <a
              href="https://jobcenter-du.de/standorte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-deep hover:underline"
            >
              Alle Standorte und Öffnungszeiten
            </a>
          </p>
        </div>
        <div className="rounded-2xl p-6" style={kasten}>
          <h3 className="font-heading font-bold text-dark text-base mb-2">Stadt Duisburg</h3>
          <p className="text-[0.93rem]">
            Bei Wohngeld, Kinderzuschlag, Sozialhilfe oder Leistungen nach dem Asylbewerberleistungsgesetz.
          </p>
          <p className="text-[0.9rem] mt-3 text-muted/70">
            Amt für Soziales und Wohnen — Bildung und Teilhabe, Beekstraße 38, 47051 Duisburg,
            Telefon 0203 94000.{" "}
            <a
              href="https://www.duisburg.de/vv/produkte/pro_du/dez_iii/50/Bildung_und_Teilhabe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-deep hover:underline"
            >
              Formulare und Merkblätter
            </a>
          </p>
        </div>
      </div>
      <p>
        Das Formular für die Nachhilfe heißt bei der Stadt{" "}
        <strong className="text-dark font-semibold">Anlage 3 — Lernförderung</strong>. Dazu
        gehören je nach Fall eine Selbstauskunft und ein Fragebogen zur Lernförderung.
      </p>
      <p>
        Wenn Sie nicht sicher sind, bringen Sie den Bescheid einfach mit. Wir sehen in
        zwei Minuten nach, wohin der Antrag muss.
      </p>
    </SeoBlock>
  );
}

// Belege für alles, was oben behauptet wird. Die Seite beschreibt ein
// Verwaltungsverfahren zu einer Sozialleistung — dann gehören die Fundstellen
// dazu, damit man es nachlesen kann statt es glauben zu müssen. Alle Adressen
// am 05.08.2026 auf Erreichbarkeit geprüft.
function Quellen() {
  return (
    <SeoBlock kicker="Zum Nachlesen" title="Rechtsgrundlage und amtliche Quellen">
      <p>
        Die Lernförderung steht in{" "}
        <strong className="text-dark font-semibold">§ 28 Absatz 5 SGB II</strong>. Dort ist
        sie als „schulische Angebote ergänzende angemessene Lernförderung" beschrieben,
        die zu gewähren ist, soweit sie geeignet und zusätzlich erforderlich ist, um die
        wesentlichen Lernziele zu erreichen. Der Gesetzestext stellt ausdrücklich klar,
        dass es auf eine bestehende Versetzungsgefährdung{" "}
        <strong className="text-dark font-semibold">nicht</strong> ankommt — ein
        Missverständnis, an dem immer noch Anträge scheitern.
      </p>
      <p>
        Anders als die übrigen Leistungen des Bildungspakets muss die Lernförderung
        gesondert beantragt werden (§ 37 Absatz 1 SGB II). Sie ist also nicht mit dem
        Bürgergeld-Antrag miterledigt.
      </p>
      <ul className="space-y-2.5 pt-1">
        {[
          {
            href: "https://www.sozialgesetzbuch-sgb.de/sgbii/28.html",
            text: "§ 28 SGB II im Wortlaut — Bedarfe für Bildung und Teilhabe",
          },
          {
            href: "https://www.duisburg.de/vv/produkte/pro_du/dez_iii/50/Bildung_und_Teilhabe",
            text: "Stadt Duisburg: Bildung und Teilhabe, mit allen Formularen zum Herunterladen",
          },
          {
            href: "https://service.duisburg.de/suche/-/vr-bis-detail/dienstleistung/958750/show",
            text: "Serviceportal Duisburg: Leistungsbeschreibung und Zuständigkeit",
          },
          {
            href: "https://jobcenter-du.de/",
            text: "Jobcenter Duisburg",
          },
        ].map((q) => (
          <li key={q.href} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <a
              href={q.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-deep hover:underline"
            >
              {q.text}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[0.9rem] text-muted/60 pt-1">
        Wir sind Nachhilfeanbieter, keine Rechtsberatung. Verbindlich ist immer der
        Bescheid der zuständigen Stelle.
      </p>
    </SeoBlock>
  );
}

function FaecherUndOrte() {
  return (
    <SeoBlock kicker="Fächer und Orte" title="Wofür die Förderung bei uns gilt">
      <p>Gefördert werden die Fächer, für die die Schule Bedarf bestätigt. Bei uns unterrichtet werden:</p>
      <PillenReihe eintraege={FAECHER.map((f) => ({ href: `/nachhilfe/${f.slug}`, label: f.name }))} />
      <p className="pt-2">Unser Einzugsgebiet:</p>
      <PillenReihe eintraege={ORTE.map((o) => ({ href: `/nachhilfe/${o.slug}`, label: o.name }))} />
    </SeoBlock>
  );
}

// Eigener Abschluss statt AbschlussKarte: hier stehen zwei Knoepfe
// nebeneinander, Telefon und Nachricht.
function Abschluss() {
  return (
    <FadeIn direction="up">
      <div
        className="rounded-3xl p-8 md:p-10 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 70%, #1e3a4f 100%)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
          Wir helfen beim Antrag
        </h2>
        <p className="font-body text-white/60 leading-[1.75] text-[0.97rem] mb-7 max-w-md mx-auto">
          Bringen Sie den Bescheid mit, den Rest sortieren wir gemeinsam. Die Probestunde
          ist kostenlos — auch bevor der Antrag durch ist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
          >
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center font-body font-semibold text-sm md:text-base px-8 py-4 rounded-full text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
            style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.28)" }}
          >
            Nachricht schreiben
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}

export default function BildungUndTeilhabe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Bildung und Teilhabe"
          h1="Kostenlose Nachhilfe über Bildung und Teilhabe in Duisburg"
          lead="Wenn Ihre Familie Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe bezieht, zahlt das Amt die Nachhilfe. Wir erklären, wer Anspruch hat und wie der Antrag auf Lernförderung abläuft."
          breadcrumb="Bildung und Teilhabe"
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Ueberblick />
            <Anspruch />
            <Ablauf />
            <Zustaendigkeit />
            <FaecherUndOrte />
            <Quellen />
            <Abschluss />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={BUT_FAQ}
          title="Fragen zur Lernförderung"
          intro="Die Fragen, die uns Eltern zum Bildungspaket am häufigsten stellen."
        />
      </main>
      <Footer />
    </>
  );
}

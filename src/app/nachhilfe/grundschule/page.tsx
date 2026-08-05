import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, PillenReihe, WeiterLink, AbschlussKarte, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { ANBIETER, SITE_URL, breadcrumbLd, faqLd } from "@/lib/schema";
import type { FaqItem } from "@/lib/faq";

// Grundschulnachhilfe stand bisher nur als Nebensatz auf den Ortsseiten
// ("Klasse 1 bis Abitur"). Fuer die Suche nach "Nachhilfe Grundschule
// Duisburg" gab es keine Seite, obwohl es der Bereich ist, in dem frueh
// eingreifen am meisten bringt.
//
// Angaben zum Schulrecht NRW nachgeschlagen am 2026-08-05 beim
// Bildungsportal des Landes.

export const metadata: Metadata = {
  title: { absolute: "Nachhilfe Grundschule Duisburg | Klasse 1 bis 4" },
  description:
    "Nachhilfe für Grundschulkinder in Duisburg-Rheinhausen: Lesen, Schreiben, Rechnen, Klasse 1 bis 4. Was die Schulformempfehlung in Klasse 4 bedeutet und was nicht.",
  alternates: { canonical: `${SITE_URL}/nachhilfe/grundschule` },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: `${SITE_URL}/nachhilfe/grundschule`,
    modifiedTime: INHALT_STAND,
    siteName: BUSINESS.name,
    title: "Nachhilfe Grundschule Duisburg | Klasse 1 bis 4",
    description:
      "Nachhilfe für Grundschulkinder in Duisburg-Rheinhausen: Lesen, Schreiben, Rechnen, Klasse 1 bis 4.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nachhilfe Grundschule Duisburg" }],
  },
};

const GS_FAQ: FaqItem[] = [
  {
    q: "Ab welcher Klasse gibt es in der Grundschule Noten?",
    a: "In Nordrhein-Westfalen stehen Noten für die einzelnen Fächer erstmals im Zeugnis der Klasse 3. Davor beschreiben die Zeugnisse die Entwicklung in Worten. Für viele Familien ist das Zeugnis der Klasse 3 deshalb die erste harte Rückmeldung.",
  },
  {
    q: "Ist die Schulformempfehlung in Klasse 4 bindend?",
    a: "Nein. Mit dem Halbjahreszeugnis der Klasse 4 bekommen Eltern eine begründete Empfehlung für die Schulform, die am besten geeignet erscheint, gegebenenfalls daneben eine weitere mit Einschränkung geeignete. Nach der Beratung durch die Grundschule können Eltern ihr Kind an einer weiterführenden Schule ihrer Wahl anmelden. Im Rahmen der Aufnahmekapazitäten entscheidet der Elternwille.",
  },
  {
    q: "Ist Nachhilfe in der Grundschule nicht zu früh?",
    a: "Eher umgekehrt. Lesen und die Grundrechenarten tragen alles, was danach kommt. Eine Lücke, die in Klasse 3 zwei Monate Arbeit kostet, kostet in Klasse 7 ein halbes Jahr, weil in der Zwischenzeit vier Jahre darauf aufgebaut wurden.",
  },
  {
    q: "Wie lange dauert eine Stunde bei Grundschulkindern?",
    a: "Kürzer als bei älteren Schülern und mit Pausen. Ein Zweitklässler arbeitet nicht neunzig Minuten am Stück konzentriert, und so zu tun als ob, bringt niemandem etwas.",
  },
  {
    q: "Machen Sie Hausaufgabenbetreuung?",
    a: "Nein. Hausaufgaben erledigen ist etwas anderes als eine Lücke schließen, und die beiden vertragen sich in derselben Stunde schlecht. Wir arbeiten an dem, was fehlt. Wenn dabei Hausaufgaben liegen bleiben, ist das der bessere Tausch.",
  },
  {
    q: "Zahlt das Amt auch für Grundschulkinder?",
    a: "Ja. Lernförderung über das Bildungspaket gilt ab Klasse 1, wenn die Familie Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe bezieht und die Schule den Förderbedarf bestätigt. Wir rechnen direkt mit dem Jobcenter Duisburg oder der Stadt Duisburg ab.",
  },
];

const ARBEITSWEISE = [
  {
    titel: "Herausfinden, wo es anfängt",
    text: "Ein Kind, das in Klasse 4 an Textaufgaben scheitert, hat selten ein Problem mit Textaufgaben. Meist fehlt etwas weiter unten: das Einmaleins, das Verständnis der Zehnerübergänge, oder es liest zu langsam, um die Aufgabe zu erfassen. Wir suchen von unten.",
  },
  {
    titel: "Kurze Einheiten, feste Abläufe",
    text: "Wiederkehrende Abläufe helfen mehr als Abwechslung. Ein Kind, das weiß, was in den nächsten fünfundvierzig Minuten passiert, arbeitet ruhiger.",
  },
  {
    titel: "Lesen zählt in jedem Fach",
    text: "Wer langsam liest, verliert in Mathematik, Sachunterricht und später in jedem Fach mit langen Aufgabenstellungen. Bei Grundschulkindern arbeiten wir deshalb fast immer auch am Lesen, unabhängig vom angemeldeten Fach.",
  },
  {
    titel: "Den Eltern sagen, was Sache ist",
    text: "Nach vier bis sechs Terminen bekommen Sie eine ehrliche Einschätzung, auch wenn sie unbequem ist. Dazu gehört der Satz, dass ein Kind gerade keine Nachhilfe braucht, sondern eine Untersuchung beim Kinderarzt oder eine Abklärung auf Lese-Rechtschreib-Schwäche.",
  },
];

function Empfehlung() {
  return (
    <SeoBlock kicker="Klasse 4" title="Was die Schulformempfehlung wirklich bedeutet">
      <p>
        Mit dem Halbjahreszeugnis der Klasse 4 kommt eine begründete Empfehlung für die Schulform,
        die für die weitere Förderung am besten geeignet erscheint. Genannt wird eine Schulform,
        gegebenenfalls daneben eine zweite, die mit Einschränkung geeignet ist.
      </p>
      <p>
        Diese Empfehlung ist{" "}
        <strong className="text-dark font-semibold">nicht bindend</strong>. Nach der Beratung durch
        die Grundschule melden Eltern ihr Kind an der Schule ihrer Wahl an. Im Rahmen der
        Aufnahmekapazitäten entscheidet der Elternwille.
      </p>
      <p>
        Das ist die Rechtslage, und sie beruhigt viele Familien. Trotzdem lohnt es sich, die
        Empfehlung ernst zu nehmen, denn sie beschreibt eine Einschätzung von Leuten, die das Kind
        vier Jahre lang unterrichtet haben. Wer sie übergeht, sollte wissen, woran es lag, und
        idealerweise vorher daran gearbeitet haben.
      </p>
      <p>
        Die Klassen 5 und 6 bilden in Nordrhein-Westfalen die Erprobungsstufe. Am Ende entscheidet
        die Schule, ob die gewählte Schulform passt. Es gibt also eine Korrektur, aber sie ist für
        ein Kind unangenehmer als ein gut vorbereiteter Start.
      </p>
    </SeoBlock>
  );
}

function Wann() {
  return (
    <SeoBlock kicker="Zeitpunkt" title="Wann sich Grundschulnachhilfe lohnt">
      <p>
        Noten für die einzelnen Fächer stehen erstmals im Zeugnis der Klasse 3. Für viele Familien
        ist das die erste harte Rückmeldung nach zwei Jahren beschreibender Zeugnisse, und sie
        kommt manchmal überraschend.
      </p>
      <p>
        Dabei zeigen sich die Anzeichen früher. Ein Kind, das beim Vorlesen an denselben Wörtern
        hängt, das beim Rechnen weiterhin mit den Fingern zählt, das für eine Seite Hausaufgaben
        eine Stunde braucht: Das sind Signale aus Klasse 2, die sich in Klasse 3 in Noten
        übersetzen.
      </p>
      <p>
        Der zweitwichtigste Zeitpunkt ist der Sommer vor Klasse 5. Der Wechsel auf eine
        weiterführende Schule bringt neue Fächer, neue Lehrkräfte und ein anderes Tempo. Wer mit
        einer bekannten Lücke dort ankommt, holt sie im ersten Halbjahr selten auf.
      </p>
    </SeoBlock>
  );
}

function WieWir() {
  return (
    <SeoBlock kicker="Arbeitsweise" title="Wie wir mit Grundschulkindern arbeiten" roh titelAbstand="weit">
      <SchrittListe schritte={ARBEITSWEISE} />
    </SeoBlock>
  );
}

function Faecher() {
  return (
    <SeoBlock kicker="Fächer" title="Worin wir in der Grundschule unterstützen" roh titelAbstand="weit">
      <PillenReihe
        eintraege={[
          { href: "/nachhilfe/mathe", label: "Mathematik" },
          { href: "/nachhilfe/deutsch", label: "Deutsch" },
          { href: "/nachhilfe/englisch", label: "Englisch" },
        ]}
      />
      <div className="font-body text-muted/70 leading-[1.8] text-[0.97rem] space-y-4 pt-6">
        <p>
          In der Grundschule geht es fast immer um Lesen, Schreiben und Rechnen. Englisch kommt
          dazu, spielt aber selten die Hauptrolle.
        </p>
        <p>
          Unterrichtet wird am Lernort in der {BUSINESS.addresses.lernort.street} in
          Rheinhausen, in kleinen Gruppen oder einzeln. Für Grundschulkinder empfehlen wir meist
          Präsenzunterricht: Onlinelernen verlangt eine Selbstständigkeit, die in diesem Alter
          noch entsteht.
        </p>
        <WeiterLink href="/material">Kostenloses Übungsmaterial, auch für Klasse 4</WeiterLink>
        <p className="pt-2">
          Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe übernimmt das Amt die
          Kosten. Das gilt ab Klasse 1.
        </p>
        <WeiterLink href="/bildung-und-teilhabe">So läuft der Antrag auf Lernförderung</WeiterLink>
      </div>
    </SeoBlock>
  );
}

export default function Grundschule() {
  const dienstLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Nachhilfe für die Grundschule, Klasse 1 bis 4",
    description:
      "Nachhilfe für Grundschulkinder in Duisburg-Rheinhausen: Lesen, Schreiben und Rechnen, in kleinen Gruppen oder einzeln.",
    url: `${SITE_URL}/nachhilfe/grundschule`,
    serviceType: "Nachhilfeunterricht Grundschule",
    provider: ANBIETER,
    areaServed: ["Duisburg", "Duisburg-Rheinhausen", "Moers"],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: "Grundschulkinder der Klassen 1 bis 4",
    },
  };
  const fragen = faqLd(GS_FAQ);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dienstLd) }} />
      {fragen && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fragen) }} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Nachhilfe", pfad: "/nachhilfe" },
              { name: "Grundschule", pfad: "/nachhilfe/grundschule" },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Klasse 1 bis 4"
          h1="Nachhilfe für die Grundschule in Duisburg"
          lead="Lesen, Schreiben und Rechnen tragen alles, was danach kommt. Eine Lücke, die hier zwei Monate kostet, kostet in der Mittelstufe ein halbes Jahr."
          breadcrumb="Grundschule"
          breadcrumbParent={{ label: "Nachhilfe", href: "/nachhilfe" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Wann />
            <Empfehlung />
            <WieWir />
            <Faecher />

            <AbschlussKarte
              titel="Erste Stunde kostenlos"
              text="Wir schauen uns an, wo Ihr Kind steht, und sagen Ihnen ehrlich, ob Nachhilfe das richtige Mittel ist."
              knopfText="Probestunde vereinbaren"
              href="/#kontakt"
            />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={GS_FAQ}
          title="Fragen zur Grundschule"
          intro="Was Eltern von Grundschulkindern am häufigsten fragen."
        />
      </main>
      <Footer />
    </>
  );
}

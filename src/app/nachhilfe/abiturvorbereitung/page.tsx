import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, PillenReihe, WeiterLink, AbschlussKarte, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { ANBIETER, SITE_URL, POSTANSCHRIFT_LERNORT, breadcrumbLd, faqLd } from "@/lib/schema";
import type { FaqItem } from "@/lib/faq";

// Eigene Route statt eines Eintrags in ORTE/FAECHER: Das Abitur ist weder ein
// Fach noch ein Stadtteil, und die Seite braucht eine andere Gliederung als
// die Fachseiten. Statisch neben [slug] gelegt, Next bevorzugt die konkrete
// Route.
//
// Alle Zahlen unten stammen aus den Vorgaben des Landes NRW, nachgeschlagen
// am 2026-08-05: Gesamtqualifikation aus dem Merkblatt zur Berechnung,
// Arbeitszeiten und Termine von der Standardsicherung.

export const metadata: Metadata = {
  title: { absolute: "Abiturvorbereitung Duisburg | Zentralabitur NRW" },
  description:
    "Vorbereitung auf das Zentralabitur in NRW: warum Block I zwei Drittel der Punkte bringt, wie die Prüfungen ablaufen und wann 2027 geschrieben wird. Lernort in Duisburg-Rheinhausen.",
  alternates: { canonical: `${SITE_URL}/nachhilfe/abiturvorbereitung` },
  openGraph: {
    type: "article",
    locale: "de_DE",
    url: `${SITE_URL}/nachhilfe/abiturvorbereitung`,
    modifiedTime: INHALT_STAND,
    siteName: BUSINESS.name,
    title: "Abiturvorbereitung Duisburg | Zentralabitur NRW",
    description:
      "Vorbereitung auf das Zentralabitur in NRW, in Kleingruppen oder einzeln. Lernort in Duisburg-Rheinhausen.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Abiturvorbereitung Duisburg" }],
  },
};

const ABI_FAQ: FaqItem[] = [
  {
    q: "Wie setzt sich die Abiturnote in NRW zusammen?",
    a: "Aus zwei Blöcken. Block I sind die eingebrachten Kurse der Qualifikationsphase, höchstens 600 Punkte. Block II sind die vier Abiturprüfungen, höchstens 300 Punkte. Zusammen ergeben sich höchstens 900 Punkte. In Block I müssen mindestens 200 Punkte stehen, in Block II mindestens 100.",
  },
  {
    q: "Wie viele Abiturfächer gibt es und wie wird geprüft?",
    a: "Vier. Die beiden Leistungskursfächer und das dritte Abiturfach werden schriftlich geprüft, das vierte nur mündlich. In den schriftlich geprüften Fächern kann zusätzlich eine mündliche Prüfung hinzukommen.",
  },
  {
    q: "Wann ist das Abitur 2027 in NRW?",
    a: "Die schriftlichen Prüfungen laufen vom 13. April bis zum 5. Mai 2027. Nachschreibtermine liegen zwischen dem 10. und dem 24. Mai, die mündlichen Prüfungen beginnen am 10. Mai und enden am 2. Juli 2027. Ihre Schule nennt Ihnen die Termine für die einzelnen Fächer.",
  },
  {
    q: "Lohnt sich Nachhilfe erst in der Q2?",
    a: "Selten. Zwei Drittel der erreichbaren Punkte entstehen in der Qualifikationsphase, verteilt über vier Halbjahre. Wer erst ein halbes Jahr vor der Prüfung anfängt, arbeitet nur noch am kleineren Drittel. In der Q1 anzusetzen ist fast immer wirksamer.",
  },
  {
    q: "Gibt es im Mathematikabitur einen Teil ohne Hilfsmittel?",
    a: "Ja. Im Grundkurs stehen 100 Minuten für den hilfsmittelfreien Teil und 155 Minuten für den zweiten Teil, im Leistungskurs 110 und 190 Minuten. Die Gesamtzeit beträgt damit höchstens 255 beziehungsweise 300 Minuten einschließlich Auswahlzeit.",
  },
  {
    q: "Kann die Abiturvorbereitung über Bildung und Teilhabe laufen?",
    a: "Ja, wenn die Voraussetzungen für Lernförderung vorliegen und die Schule den Förderbedarf im jeweiligen Fach bestätigt. Wir rechnen dann direkt mit dem Jobcenter Duisburg oder der Stadt Duisburg ab.",
  },
];

const ABLAUF = [
  {
    titel: "Wo stehen die Punkte",
    text: "Erst rechnen wir Block I durch: welche Kurse eingebracht werden müssen, welche eingebracht werden können und wie viele Punkte bisher zusammengekommen sind. Danach ist klar, ob es um Reparatur oder um Ausbau geht.",
  },
  {
    titel: "Die doppelt zählenden Kurse zuerst",
    text: "Leistungskurse gehen in Block I mit doppeltem Gewicht ein. Ein Punkt mehr im Leistungskurs ist deshalb zwei Punkte wert, ein Punkt mehr im Grundkurs einen. Wo zuerst angesetzt wird, ergibt sich daraus fast von selbst.",
  },
  {
    titel: "Prüfungsformate trainieren",
    text: "Operatoren, Erwartungshorizont, Darstellungsleistung. Im Abitur wird nicht abgefragt, was jemand weiß, sondern was er auf die vorgegebene Weise zeigt. Das ist erlernbar und wird selten geübt.",
  },
  {
    titel: "Vollständige Klausuren unter Zeit",
    text: "Fünf Stunden Konzentration sind eine eigene Leistung. Wer sie zum ersten Mal in der Prüfung erbringt, verliert am Ende Punkte, die er fachlich hätte.",
  },
];

function Blocksystem() {
  return (
    <SeoBlock kicker="Der Knackpunkt" title="Zwei Drittel der Punkte fallen vor der Prüfung">
      <p>
        Die Gesamtqualifikation besteht aus zwei Blöcken. Block I sind die eingebrachten Kurse der
        vier Halbjahre der Qualifikationsphase und bringt höchstens{" "}
        <strong className="text-dark font-semibold">600 Punkte</strong>. Block II sind die vier
        Abiturprüfungen und bringt höchstens{" "}
        <strong className="text-dark font-semibold">300 Punkte</strong>. Zusammen sind das 900.
      </p>
      <p>
        Daraus folgt etwas, das in kaum einem Beratungsgespräch deutlich genug gesagt wird: Die
        Abiturprüfung entscheidet über ein Drittel. Die anderen zwei Drittel sind längst
        geschrieben, bevor der erste Prüfungstag beginnt.
      </p>
      <p>
        Innerhalb von Block I zählen die Leistungskurse doppelt, die Grundkurse einfach.
        Eingebracht werden je nach Laufbahn 35 bis 40 Kurse. Mindestens 200 Punkte müssen in
        Block I stehen, mindestens 100 in Block II.
      </p>
      <p>
        Wer also in der Q1 zwei Halbjahre lang im Leistungskurs bei fünf Punkten liegt, verliert
        dort mehr, als sich mit einer starken Prüfung im selben Fach zurückholen lässt. Deshalb
        setzen wir bei Oberstufenschülern zuerst an den laufenden Kursen an und erst danach an
        der Prüfung.
      </p>
    </SeoBlock>
  );
}

function Pruefung() {
  return (
    <SeoBlock kicker="Aufbau" title="Wie die Abiturprüfung abläuft">
      <p>
        Geprüft wird in vier Fächern. Die beiden Leistungskursfächer und das dritte Abiturfach
        werden schriftlich geschrieben, das vierte Fach mündlich. In den schriftlichen Fächern
        kann eine mündliche Prüfung hinzukommen.
      </p>
      <p>
        Die Aufgaben kommen landesweit einheitlich vom Land, nicht von der eigenen Lehrkraft. Was
        im Kurs behandelt wurde, deckt sich damit nicht automatisch mit dem, was drankommt: Für
        jedes Fach gibt es Vorgaben, die den Prüfungsstoff festlegen.
      </p>
      <p>
        Ein Beispiel für den Unterschied zwischen Kursklausur und Abitur liefert Mathematik. Dort
        besteht die Prüfung aus einem hilfsmittelfreien Teil und einem Teil mit Hilfsmitteln: im
        Grundkurs 100 und 155 Minuten, im Leistungskurs 110 und 190 Minuten, jeweils einschließlich
        Auswahlzeit. Der hilfsmittelfreie Teil wird im laufenden Kurs oft nur nebenbei geübt und
        entscheidet in der Prüfung über sichere Punkte.
      </p>
    </SeoBlock>
  );
}

function Termine() {
  return (
    <SeoBlock kicker="Termine" title="Das Abitur 2027 in Nordrhein-Westfalen">
      <p>
        Die schriftlichen Prüfungen liegen zwischen{" "}
        <strong className="text-dark font-semibold">Dienstag, dem 13. April 2027</strong> und{" "}
        <strong className="text-dark font-semibold">Mittwoch, dem 5. Mai 2027</strong>.
        Nachschreibtermine gibt es vom 10. bis zum 24. Mai. Die mündlichen Prüfungen beginnen am
        10. Mai und enden am 2. Juli 2027.
      </p>
      <p>
        Welches Fach an welchem Tag geprüft wird, legt das Land fest und teilt Ihre Schule mit.
        Zwischen dem ersten und dem letzten schriftlichen Termin liegen drei Wochen, was für die
        Planung wichtiger ist als der Anfangstermin: In dieser Zeit wird nicht mehr gelernt,
        sondern nur noch abgerufen.
      </p>
    </SeoBlock>
  );
}

function WieWir() {
  return (
    <SeoBlock kicker="Ablauf" title="Wie wir vorbereiten" roh titelAbstand="weit">
      <SchrittListe schritte={ABLAUF} />
    </SeoBlock>
  );
}

function Faecher() {
  return (
    <SeoBlock kicker="Fächer" title="Worin wir in der Oberstufe unterrichten" roh titelAbstand="weit">
      <PillenReihe
        eintraege={[
          { href: "/nachhilfe/mathe", label: "Mathematik" },
          { href: "/nachhilfe/deutsch", label: "Deutsch" },
          { href: "/nachhilfe/englisch", label: "Englisch" },
          { href: "/nachhilfe/physik", label: "Physik" },
          { href: "/nachhilfe/chemie", label: "Chemie" },
          { href: "/nachhilfe/biologie", label: "Biologie" },
        ]}
      />
      <div className="font-body text-muted/75 leading-[1.8] text-[0.97rem] space-y-4 pt-6">
        <p>
          In der Oberstufe unterrichten wir einzeln oder in sehr kleinen Gruppen. Der Grund ist
          praktisch: Zwei Schüler derselben Jahrgangsstufe sitzen selten im selben Kurs mit
          demselben Stand, und ab der Q1 unterscheiden sich die Inhalte von Schule zu Schule
          stärker als in der Mittelstufe.
        </p>
        <p>
          Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe kann auch die
          Abiturvorbereitung über das Bildungspaket laufen. Wir rechnen direkt mit dem Amt ab.
        </p>
        <WeiterLink href="/bildung-und-teilhabe">So läuft der Antrag auf Lernförderung</WeiterLink>
      </div>
    </SeoBlock>
  );
}

export default function Abiturvorbereitung() {
  const kursLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Abiturvorbereitung: Zentralabitur Nordrhein-Westfalen",
    description:
      "Vorbereitung auf das Zentralabitur in NRW in der gymnasialen Oberstufe, einzeln oder in sehr kleinen Gruppen.",
    url: `${SITE_URL}/nachhilfe/abiturvorbereitung`,
    dateModified: INHALT_STAND,
    inLanguage: "de",
    educationalLevel: "Gymnasiale Oberstufe, Qualifikationsphase",
    provider: ANBIETER,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      courseWorkload: "PT2H",
      courseSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1W",
        duration: "PT2H",
      },
      location: {
        "@type": "Place",
        name: BUSINESS.name,
        address: POSTANSCHRIFT_LERNORT,
      },
    },
  };
  const fragen = faqLd(ABI_FAQ);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kursLd) }} />
      {fragen && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fragen) }} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Nachhilfe", pfad: "/nachhilfe" },
              { name: "Abiturvorbereitung", pfad: "/nachhilfe/abiturvorbereitung" },
            ]),
          ),
        }}
      />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker="Oberstufe"
          h1="Abiturvorbereitung in Duisburg"
          lead="Zwei Drittel der Abiturpunkte entstehen in der Qualifikationsphase, nicht in der Prüfung. Wir setzen deshalb dort an, wo noch etwas zu holen ist."
          breadcrumb="Abiturvorbereitung"
          breadcrumbParent={{ label: "Nachhilfe", href: "/nachhilfe" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Blocksystem />
            <Pruefung />
            <Termine />
            <WieWir />
            <Faecher />

            <AbschlussKarte
              titel="Mit einer Bestandsaufnahme anfangen"
              text="Wir rechnen Block I mit Ihnen durch und sagen Ihnen, wo die erreichbaren Punkte liegen. Die erste Stunde ist kostenlos."
              knopfText="Termin vereinbaren"
              href="/#kontakt"
            />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={ABI_FAQ}
          title="Fragen zum Abitur in NRW"
          intro="Was Eltern und Oberstufenschüler zur Vorbereitung am häufigsten fragen."
        />
      </main>
      <Footer />
    </>
  );
}

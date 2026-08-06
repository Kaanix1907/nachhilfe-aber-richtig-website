import Navbar from "./Navbar";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Footer from "./Footer";
import SeoPageHero from "./SeoPageHero";
import { SeoBlock, WeiterLink, AbschlussKarte, LinkKachel, StandHinweis } from "./SeoBlock";
import { BUSINESS } from "@/lib/data";
import { FaqListe } from "./FAQ";
import { ORT_FAQ } from "@/lib/seo-faq";
import { FAECHER, findOrt, type OrtPage } from "@/lib/seo-pages";

// Die Abschnitte stehen als eigene Komponenten, nicht als ein langer
// Rumpf in OrtSeite: CodeScene hat die Funktion als "Large Method"
// beanstandet. Gerendert wird unveraendert dasselbe HTML.

function Ueberblick({ ort }: { ort: OrtPage }) {
  return (
    <SeoBlock kicker="Überblick" title={`Nachhilfe für Schüler aus ${ort.name}`}>
      {ort.intro.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </SeoBlock>
  );
}

function Faecher({ ort }: { ort: OrtPage }) {
  return (
    <SeoBlock kicker="Fächer" title={`Welche Fächer wir in ${ort.name} unterrichten`}>
      <p>
        Für Schülerinnen und Schüler aus {ort.name} unterrichten wir die Hauptfächer und die
        Naturwissenschaften. Zu jedem Fach steht auf einer eigenen Seite, woran es
        erfahrungsgemäß hakt und wie wir es angehen:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 pt-2">
        {FAECHER.map((fach) => (
          <LinkKachel key={fach.slug} href={`/nachhilfe/${fach.slug}`} titel={fach.name} />
        ))}
      </div>
    </SeoBlock>
  );
}

// Dieser Block stand bis zum 2026-08-06 als vier ausformulierte Absaetze hier
// und war damit auf allen fuenf Ortsseiten wortgleich: sieben der dreizehn
// identischen Saetze kamen von hier. Die ausfuehrliche Beschreibung liegt
// jetzt einmal auf der Startseite; hier steht nur noch, was von DIESEM Ort aus
// praktisch ist, plus drei Zeilen zur Einordnung.
function Unterrichtsformen({ ort }: { ort: OrtPage }) {
  return (
    <SeoBlock kicker="Unterrichtsformen" title={`Welche Form von ${ort.name} aus passt`}>
      <p>{ort.formHinweis}</p>
      <ul className="space-y-2.5 pt-1">
        {[
          { t: "Kleingruppe, drei bis fünf Schüler", d: "der Regelfall" },
          { t: "Einzelunterricht", d: "bei größeren Lücken oder vor einer Prüfung" },
          { t: "Online", d: "dieselbe Lehrkraft, kein Anfahrtsweg" },
        ].map((f) => (
          <li key={f.t} className="flex items-start gap-3">
            <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>
              <strong className="text-dark font-semibold">{f.t}:</strong> {f.d}
            </span>
          </li>
        ))}
      </ul>
      <WeiterLink href="/#leistungen">Die drei Formen ausführlich</WeiterLink>
    </SeoBlock>
  );
}

function Anfahrt({ ort }: { ort: OrtPage }) {
  return (
    <SeoBlock kicker="Anfahrt" title={`So finden Sie uns von ${ort.name} aus`}>
      <p>{ort.anfahrt}</p>
      <div
        className="rounded-2xl p-6 mt-2"
        style={{
          border: "1px solid rgba(26,26,46,0.07)",
          boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 8px 24px rgba(26,26,46,0.05)",
        }}
      >
        <p className="font-heading font-bold text-dark text-base mb-2">{BUSINESS.name}</p>
        <p className="text-[0.93rem]">
          {BUSINESS.addresses.lernort.street}
          <br />
          {BUSINESS.addresses.lernort.city}
        </p>
        <p className="text-[0.93rem] mt-3">
          Montag bis Freitag, 13:00–17:00 Uhr
          <br />
          <a href={`tel:${BUSINESS.phone}`} className="text-primary-deep hover:underline">
            {BUSINESS.phoneDisplay}
          </a>
        </p>
      </div>
    </SeoBlock>
  );
}

// Ebenfalls gekuerzt am 2026-08-06: Die vollstaendige Erklaerung steht auf
// /bildung-und-teilhabe, hier reicht der Verweis. Zwei weitere wortgleiche
// Saetze weniger auf fuenf Seiten.
function Foerderung({ ort }: { ort: OrtPage }) {
  return (
    <SeoBlock kicker="Förderung" title="Wenn das Amt die Kosten trägt">
      <p>
        Bei Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Leistungen nach dem
        Asylbewerberleistungsgesetz besteht Anspruch auf außerschulische Lernförderung. Auch
        für Familien aus {ort.name} rechnen wir dann direkt mit dem Amt ab, Sie gehen nicht
        in Vorleistung.
      </p>
      <WeiterLink href="/bildung-und-teilhabe">
        Antrag auf Lernförderung Schritt für Schritt
      </WeiterLink>
    </SeoBlock>
  );
}

function Fragen({ ort }: { ort: OrtPage }) {
  const fragen = ORT_FAQ[ort.slug];
  if (!fragen?.length) return null;
  return (
    <SeoBlock kicker="Fragen & Antworten" title={`Häufige Fragen aus ${ort.name}`} roh titelAbstand="weit">
      <FaqListe items={fragen} />
    </SeoBlock>
  );
}

function Nachbarorte({ nachbarn }: { nachbarn: OrtPage[] }) {
  if (nachbarn.length === 0) return null;
  return (
    <SeoBlock kicker="In der Nähe" title="Nachhilfe in den Nachbarorten">
      <div className="grid sm:grid-cols-2 gap-3 pt-1">
        {nachbarn.map((n) => (
          <LinkKachel key={n.slug} href={`/nachhilfe/${n.slug}`} titel={`Nachhilfe ${n.name}`} />
        ))}
      </div>
    </SeoBlock>
  );
}

export default function OrtSeite({ ort }: { ort: OrtPage }) {
  const nachbarn = ort.nachbarn.map(findOrt).filter((o): o is OrtPage => Boolean(o));

  return (
    <>
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker={`Standort ${ort.name}`}
          h1={`Nachhilfe in ${ort.langName}`}
          lead={`Einzel- und Gruppennachhilfe in allen Fächern, von Klasse 1 bis zum Abitur. Unser Lernort liegt in der ${BUSINESS.addresses.lernort.street}, ${BUSINESS.addresses.lernort.city}.`}
          breadcrumb={ort.langName}
          breadcrumbParent={{ label: "Nachhilfe", href: "/nachhilfe" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Ueberblick ort={ort} />
            <Faecher ort={ort} />
            <Unterrichtsformen ort={ort} />
            <Anfahrt ort={ort} />
            <Foerderung ort={ort} />
            <Fragen ort={ort} />
            <Nachbarorte nachbarn={nachbarn} />
            <AbschlussKarte
              titel="Erste Stunde kostenlos"
              text={`Neunzig Minuten ausprobieren, ob es passt. Für Schülerinnen und Schüler aus ${ort.name} wie für alle anderen.`}
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

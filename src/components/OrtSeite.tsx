import Navbar from "./Navbar";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import Footer from "./Footer";
import SeoPageHero from "./SeoPageHero";
import { SeoBlock, WeiterLink, AbschlussKarte, LinkKachel, StandHinweis } from "./SeoBlock";
import { BUSINESS } from "@/lib/data";
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
        Wir decken die Hauptfächer und die Naturwissenschaften ab. Zu jedem Fach steht,
        woran es erfahrungsgemäß hakt und wie wir es angehen:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 pt-2">
        {FAECHER.map((fach) => (
          <LinkKachel key={fach.slug} href={`/nachhilfe/${fach.slug}`} titel={fach.name} />
        ))}
      </div>
    </SeoBlock>
  );
}

function Unterrichtsformen() {
  return (
    <SeoBlock kicker="Unterrichtsformen" title="So läuft der Unterricht ab">
      <p>
        <strong className="text-dark font-semibold">Kleingruppe mit drei bis fünf Schülern.</strong>{" "}
        Die häufigste Form und das beste Preis-Leistungs-Verhältnis. Jedes Kind kommt dran,
        gleichzeitig lernt es, Fragen vor anderen zu stellen.
      </p>
      <p>
        <strong className="text-dark font-semibold">Einzelunterricht.</strong>{" "}
        Wenn größere Lücken aufzuholen sind, eine Prüfung ansteht oder ein Kind in der
        Gruppe untergeht. Das gesamte Tempo richtet sich nach einem einzigen Schüler.
      </p>
      <p>
        <strong className="text-dark font-semibold">Onlinenachhilfe.</strong>{" "}
        Gleiche Lehrkräfte, gleiches Konzept, kein Anfahrtsweg. Sinnvoll bei engem
        Nachmittag, weiterem Wohnort oder Krankheit.
      </p>
      <p>
        Unterrichtet wird von geprüften Lehramtsstudierenden und Lehrkräften — alle mit
        erweitertem Führungszeugnis.
      </p>
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

function Foerderung() {
  return (
    <SeoBlock kicker="Förderung" title="Kostenlose Lernförderung über Bildung und Teilhabe">
      <p>
        Familien, die Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Leistungen nach
        dem Asylbewerberleistungsgesetz beziehen, haben Anspruch auf außerschulische
        Lernförderung. Die Kosten trägt dann das Amt, nicht die Familie.
      </p>
      <p>
        Wir rechnen direkt mit dem Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab
        und helfen beim Antrag — inklusive der Formulare, die der Anbieter ausfüllen muss.
      </p>
      <WeiterLink href="/bildung-und-teilhabe">
        Antrag auf Lernförderung Schritt für Schritt
      </WeiterLink>
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
            <Unterrichtsformen />
            <Anfahrt ort={ort} />
            <Foerderung />
            <Nachbarorte nachbarn={nachbarn} />
            <AbschlussKarte
              titel="Erste Stunde kostenlos"
              text={`Unverbindlich ausprobieren, ob es passt — für Schülerinnen und Schüler aus ${ort.name} wie für alle anderen.`}
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

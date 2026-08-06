import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ORTE, FAECHER } from "@/lib/seo-pages";

// Vorher lieferte Next hier seine eingebaute Seite aus: "404: This page could
// not be found." — englisch, ohne Navigation, ohne Weg zurueck. Wer aus dem
// Suchindex auf einer entfallenen Adresse landete, sah einen Systemtext und
// hatte keinen Anschluss an die Seite.
//
// `noindex` setzt Next auf seiner 404 selbst; im gebauten HTML standen dadurch
// zwei widersprechende robots-Angaben (die zweite aus dem Root-Layout). Bei
// Widerspruch gilt die restriktivere, `noindex` griff also bereits. Hier wird
// es trotzdem ausdruecklich gesetzt, damit die Angabe eindeutig ist.
export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="inhalt" className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mb-10">
            <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
              Seite nicht gefunden
            </span>
            <h1
              className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Diese Seite gibt es nicht mehr
            </h1>
            <p className="font-body text-muted/75 leading-[1.8] text-[1.05rem]">
              Vielleicht hat sich die Adresse geändert, vielleicht ist ein Tippfehler
              hineingerutscht. Unten steht alles, was es bei uns gibt. Und wenn Sie
              schneller ans Ziel wollen, rufen Sie einfach an.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm px-6 py-3.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
              style={{
                background: "linear-gradient(135deg,#008a00,#006e00)",
                boxShadow: "0 4px 20px rgba(0,110,0,0.40)",
              }}
            >
              Gratis Probestunde buchen
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-6 py-3.5 rounded-full text-dark border border-dark/12 transition-[background-color] duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
            >
              Zur Startseite
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h2 className="font-heading font-bold text-lg text-dark mb-4">Fächer</h2>
              <ul className="space-y-2">
                {FAECHER.map((fach) => (
                  <li key={fach.slug}>
                    <Link
                      href={`/nachhilfe/${fach.slug}`}
                      className="font-body text-muted/80 text-[0.95rem] hover:text-primary-deep transition-[color] duration-200"
                    >
                      Nachhilfe in {fach.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-lg text-dark mb-4">Standorte</h2>
              <ul className="space-y-2">
                {ORTE.map((ort) => (
                  <li key={ort.slug}>
                    <Link
                      href={`/nachhilfe/${ort.slug}`}
                      className="font-body text-muted/80 text-[0.95rem] hover:text-primary-deep transition-[color] duration-200"
                    >
                      Nachhilfe in {ort.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="font-heading font-bold text-lg text-dark mt-8 mb-4">Weiteres</h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/bildung-und-teilhabe"
                    className="font-body text-muted/80 text-[0.95rem] hover:text-primary-deep transition-[color] duration-200"
                  >
                    Kostenlose Nachhilfe über Bildung und Teilhabe
                  </Link>
                </li>
                <li>
                  <Link
                    href="/zap-vorbereitung"
                    className="font-body text-muted/80 text-[0.95rem] hover:text-primary-deep transition-[color] duration-200"
                  >
                    ZAP-Vorbereitung, Klasse 10
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

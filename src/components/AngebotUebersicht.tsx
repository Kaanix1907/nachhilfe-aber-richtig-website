import Link from "next/link";
import FadeIn from "./FadeIn";
import { FAECHER, ORTE } from "@/lib/seo-pages";

// Die Orts- und Fachseiten standen bisher nur im Footer. Besucher scrollen
// dort selten hin, und Google gewichtet Fussbereich-Links schwaecher als
// Links aus dem Hauptteil. Dieser Abschnitt holt sie in den Fliesstext.

function Kachel({ href, titel, unter }: { href: string; titel: string; unter: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 bg-white rounded-2xl border border-gray-100 px-6 py-5 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/25"
      style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 4px 12px rgba(26,26,46,0.05)" }}
    >
      <span className="min-w-0">
        <span className="block font-heading font-bold text-[1.02rem] text-dark group-hover:text-primary transition-[color] duration-300" style={{ letterSpacing: "-0.01em" }}>
          {titel}
        </span>
        <span className="block font-body text-muted/55 text-[0.82rem] mt-0.5">{unter}</span>
      </span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 transition-[opacity,transform] duration-300">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export default function AngebotUebersicht() {
  return (
    <section id="faecher" className="relative py-24 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        <FadeIn className="text-center mb-12">
          <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Fächer
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.03em" }}>
            In welchen Fächern wir unterrichten
          </h2>
          <p className="font-body text-muted/70 text-base md:text-lg max-w-xl mx-auto leading-[1.7]">
            Zu jedem Fach steht, woran es erfahrungsgemäß hakt und wie wir es angehen.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {FAECHER.map((f, i) => (
            <FadeIn key={f.slug} delay={i * 70} direction="up">
              <Kachel
                href={`/nachhilfe/${f.slug}`}
                titel={f.name}
                unter="Klasse 1 bis Abitur"
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mb-12">
          <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Einzugsgebiet
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.03em" }}>
            Woher unsere Schüler kommen
          </h2>
          <p className="font-body text-muted/70 text-base md:text-lg max-w-xl mx-auto leading-[1.7]">
            Unser Lernort liegt in Rheinhausen. Wer weiter weg wohnt, nutzt die
            Onlinenachhilfe mit denselben Lehrkräften.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {ORTE.map((o, i) => (
            <FadeIn key={o.slug} delay={i * 70} direction="up">
              <Kachel
                href={`/nachhilfe/${o.slug}`}
                titel={`Nachhilfe ${o.name}`}
                unter={o.langName === o.name ? "Nachbarstadt" : o.langName}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/bildung-und-teilhabe"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm text-white px-7 py-3.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "linear-gradient(135deg, #25abd6 0%, #1d8fb5 100%)", boxShadow: "0 4px 14px rgba(37,171,214,0.30)" }}
            >
              Kostenlos über Bildung und Teilhabe
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/zap-vorbereitung"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm text-dark px-7 py-3.5 rounded-full border border-gray-200 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              ZAP-Vorbereitung Klasse 10
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

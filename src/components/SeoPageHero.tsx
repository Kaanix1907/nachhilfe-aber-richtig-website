import Link from "next/link";

// Gemeinsamer Kopfbereich der Orts-, Fach- und BuT-Seiten.
// Uebernimmt den Farbverlauf des Startseiten-Heros, faellt aber flacher aus:
// Unterseiten sollen den Inhalt zeigen, nicht noch einmal die Marke verkaufen.
export default function SeoPageHero({
  kicker,
  h1,
  lead,
  breadcrumb,
  breadcrumbParent,
}: {
  kicker: string;
  h1: React.ReactNode;
  lead: string;
  /** Letzte Stufe der Brotkrume — die Startseite setzt die Komponente selbst. */
  breadcrumb: string;
  /** Optionale Zwischenstufe, z.B. Startseite / Nachhilfe / Mathematik. */
  breadcrumbParent?: { label: string; href: string };
}) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #1e3a4f 100%)" }}
    >
      <div
        className="absolute top-[-30%] right-[-15%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.28) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-40%] left-[-15%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <nav aria-label="Brotkrumennavigation" className="font-body text-xs text-white/35 mb-6 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-white/70 transition-[color] duration-200">
            Startseite
          </Link>
          <span aria-hidden="true">/</span>
          {breadcrumbParent && (
            <>
              <Link
                href={breadcrumbParent.href}
                className="hover:text-white/70 transition-[color] duration-200"
              >
                {breadcrumbParent.label}
              </Link>
              <span aria-hidden="true">/</span>
            </>
          )}
          <span className="text-white/55">{breadcrumb}</span>
        </nav>

        <span className="inline-block bg-white/10 text-white/75 font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-white/15">
          {kicker}
        </span>

        <h1
          className="font-heading text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] font-extrabold text-white mb-5 break-words"
          style={{ lineHeight: 1.1, letterSpacing: "-0.03em" }}
        >
          {h1}
        </h1>

        <p className="font-body text-base md:text-lg text-white/65 leading-[1.75] max-w-2xl">
          {lead}
        </p>

        {/* Die Bewertung stand bisher nur auf der Startseite. Sie ist das
            einzige Merkmal, in dem der Betrieb die beiden Ketten am Ort
            schlaegt: der Studienkreis Rheinhausen fuehrt 4,6 aus elf
            Bewertungen, die Schuelerhilfe 4,1. Zahl statt Adjektiv, und sie
            steht so auch im JSON-LD der Startseite. */}
        <p className="font-body text-sm text-white/50 mt-5 flex items-center gap-2">
          <span aria-hidden="true" className="text-[#ffc107] tracking-tight">
            ★★★★★
          </span>
          5,0 von 5 bei Google, aus 23 Bewertungen
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Link
            href="/#kontakt"
            className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
          >
            Gratis Probestunde buchen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link
            href="/bildung-und-teilhabe"
            className="inline-flex items-center justify-center font-body font-semibold text-sm md:text-base px-7 py-3.5 rounded-full text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
            style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)" }}
          >
            Kostenlos über Bildung und Teilhabe
          </Link>
        </div>
      </div>
    </section>
  );
}

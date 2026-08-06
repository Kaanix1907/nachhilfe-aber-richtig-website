import { BUSINESS, ALL_REVIEWS } from "@/lib/data";
import {
  GefoerdertDurchRow,
  MobileReviewsScroll,
  DesktopReviewsScroll,
} from "./Hero.parts";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJHWy-OVi_uEcR4TNsTTb7wko";

export default function Hero() {
  const reviews = ALL_REVIEWS;
  const rating = 5.0;
  const total = 23;

  return (
    <section
      id="hero"
      className="relative md:min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #1e3a4f 100%)" }}
    >
      <div className="absolute top-[-15%] right-[-25%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] md:right-[-5%] md:top-[-10%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.30) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-25%] w-[260px] h-[260px] md:w-[500px] md:h-[500px] md:left-[-5%] md:bottom-[-5%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-16 items-center w-full">

        <div className="flex flex-col min-w-0">
          {/* Die H1 trug bisher nur den Firmennamen. Die wichtigste Ueberschrift
              der Seite enthielt damit kein einziges Wort, nach dem jemand sucht.
              Marke bleibt visuell dominant, der Suchbegriff steht jetzt mit drin. */}
          <h1 className="font-heading font-extrabold text-white mb-3 md:mb-6 break-words"
            style={{ letterSpacing: "-0.03em" }}>
            <span className="block text-[2rem] sm:text-[2.8rem] md:text-[3.75rem]" style={{ lineHeight: 1.08 }}>
              {BUSINESS.name}
            </span>
            <span className="block font-body font-semibold text-[1.08rem] sm:text-xl md:text-2xl text-white/85 mt-2.5 md:mt-4"
              style={{ letterSpacing: "-0.01em", lineHeight: 1.35 }}>
              Nachhilfe in Duisburg-Rheinhausen, Klasse 1 bis Abitur
            </span>
          </h1>

          <p className="font-body text-base md:text-xl text-white/80 md:text-white/65 mb-1.5 md:mb-3 leading-[1.7]">
            Einzel- und Gruppenunterricht in allen Fächern, persönlich betreut.
            Für berechtigte Familien{" "}
            <span className="font-semibold text-white">kostenlos über Bildung und Teilhabe</span>.
          </p>

          <p className="font-body text-sm md:text-base text-white/60 md:text-white/60 mb-4 md:mb-10 tracking-wide">
            {BUSINESS.slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 md:mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "linear-gradient(135deg,#008a00,#006e00)", boxShadow: "0 4px 20px rgba(0,110,0,0.40)" }}
            >
              Gratis Probestunde buchen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-full text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)" }}
            >
              Unsere Leistungen
            </a>
          </div>

          <GefoerdertDurchRow />

          <MobileReviewsScroll reviews={reviews} rating={rating} total={total} googleUrl={GOOGLE_REVIEWS_URL} />
        </div>

        <DesktopReviewsScroll reviews={reviews} rating={rating} total={total} googleUrl={GOOGLE_REVIEWS_URL} />

      </div>
    </section>
  );
}

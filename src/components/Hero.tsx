import Image from "next/image";
import { BUSINESS, ALL_REVIEWS } from "@/lib/data";
import { GoogleGLogo, ExternalLinkIcon, ReviewCard, GoogleHeader } from "./Hero.parts";

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
      {/* Radiale Glows — auf Mobile bewusst kleiner, damit der Hintergrund klar bleibt */}
      <div className="absolute top-[-15%] right-[-25%] w-[320px] h-[320px] md:w-[600px] md:h-[600px] md:right-[-5%] md:top-[-10%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.30) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-10%] left-[-25%] w-[260px] h-[260px] md:w-[500px] md:h-[500px] md:left-[-5%] md:bottom-[-5%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.12) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-16 items-center w-full">

        {/* Links — Text */}
        <div className="flex flex-col min-w-0">
          {/* Lexi KI-Badge */}
          <a
            href="/lexi"
            className="group inline-flex items-center gap-2 self-start mb-4 md:mb-6 pl-1.5 pr-4 py-1.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
            style={{
              background: "rgba(37,171,214,0.12)",
              border: "1px solid rgba(37,171,214,0.35)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(37,171,214,0.15)",
            }}
          >
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-full font-heading font-extrabold text-white text-[11px]"
              style={{
                background: "linear-gradient(135deg,#25abd6,#655c9e)",
                boxShadow: "0 2px 8px rgba(37,171,214,0.5)",
              }}
            >
              L
            </span>
            <span className="font-body text-[12px] md:text-[13px] font-semibold tracking-wide text-white">
              <span style={{ color: "#25abd6" }}>NEU:</span> Lexi — KI-Lernhilfe · gratis ausprobieren
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/75 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <h1 className="font-heading text-[2rem] sm:text-[2.8rem] md:text-[3.75rem] font-extrabold text-white mb-3 md:mb-6 break-words"
            style={{ lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            {BUSINESS.name}
          </h1>

          <p className="font-body text-base md:text-xl text-white/80 md:text-white/65 mb-1.5 md:mb-3 leading-[1.7]">
            Professionelle Nachhilfe für Schüler{" "}
            <span className="font-semibold text-white">ab Klasse 1 bis Abitur</span>{" "}
            — in allen Fächern, persönlich betreut.
          </p>

          <p className="font-body text-sm md:text-base text-white/55 md:text-white/35 mb-4 md:mb-10 tracking-wide">
            {BUSINESS.slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-4 md:mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
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

          {/* Gefördert-durch Sticker */}
          <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
            <span className="font-body text-xs md:text-sm text-white/60 md:text-white/40 tracking-wide">Gefördert durch</span>
            <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>
              <Image src="/logo-jobcenter.jpeg" alt="Jobcenter Duisburg" width={130} height={34} className="object-contain" style={{ height: 24, width: "auto" }} />
            </div>
            <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>
              <Image src="/logo-stadt-duisburg.png" alt="Stadt Duisburg" width={110} height={34} className="object-contain" style={{ height: 24, width: "auto" }} />
            </div>
          </div>

          {/* Mobile-only: Google Bewertungen */}
          <div className="md:hidden mt-5">
            {/* Google-Header */}
            <div className="flex items-center justify-between mb-3">
              <GoogleHeader rating={rating} total={total} variant="mobile" />
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-body text-[10px] font-semibold px-2 py-0.5 rounded-full transition-[opacity] duration-200 hover:opacity-80"
                style={{ background: "rgba(37,171,214,0.15)", border: "1px solid rgba(37,171,214,0.35)", color: "#25abd6" }}
              >
                <ExternalLinkIcon size={9} />
                Prüfen
              </a>
            </div>

            {/* Horizontal-Scroll */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0f0c29, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #1e3a4f, transparent)" }} />
              <div className="reviews-horizontal flex gap-2.5 w-max">
                {[...reviews, ...reviews].map((r, idx) => (
                  <ReviewCard key={idx} review={r} variant="mobile" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rechts — Desktop: Vertikal scrollende Google Bewertungen */}
        <div className="hidden md:flex flex-col gap-4">
          <GoogleHeader rating={rating} total={total} variant="desktop" />

          {/* Scroll-Container */}
          <div className="relative overflow-hidden" style={{ height: 440 }}>
            <div className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #0f0c29, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #1e3a4f, transparent)" }} />

            <div className="reviews-vertical flex flex-col gap-4">
              {[...reviews, ...reviews].map((r, idx) => (
                <ReviewCard key={idx} review={r} variant="desktop" />
              ))}
            </div>
          </div>

          {/* Google-Link */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-body font-semibold text-sm py-3 rounded-xl transition-[opacity,transform] duration-200 hover:opacity-80 hover:-translate-y-px"
            style={{ background: "rgba(37,171,214,0.12)", border: "1px solid rgba(37,171,214,0.3)", color: "#25abd6" }}
          >
            <GoogleGLogo size={16} />
            Alle {total} Bewertungen auf Google ansehen
            <ExternalLinkIcon size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}

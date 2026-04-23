import Image from "next/image";
import { BUSINESS, ALL_REVIEWS } from "@/lib/data";

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
      {/* Radiale Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.15) 0%, transparent 70%)" }} />

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

          <p className="font-body text-base md:text-xl text-white/65 mb-1.5 md:mb-3 leading-[1.7]">
            Professionelle Nachhilfe für Schüler{" "}
            <span className="font-semibold text-white">ab Klasse 1 bis Abitur</span>{" "}
            — in allen Fächern, persönlich betreut.
          </p>

          <p className="font-body text-sm md:text-base text-white/35 mb-4 md:mb-10 tracking-wide">
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
            <span className="font-body text-xs md:text-sm text-white/40 tracking-wide">Gefördert durch</span>
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
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 48 48" width="22" height="22">
                  <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
                  <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
                  <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
                </svg>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
                        <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                      </svg>
                    ))}
                    <span className="font-heading font-bold text-white text-xs ml-1">{rating.toFixed(1)}</span>
                  </div>
                  <span className="font-body text-white/35 text-[10px]">{total} Google Bewertungen</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJHWy-OVi_uEcR4TNsTTb7wko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-body text-[10px] font-semibold px-2 py-0.5 rounded-full transition-[opacity] duration-200 hover:opacity-80"
                style={{ background: "rgba(37,171,214,0.15)", border: "1px solid rgba(37,171,214,0.35)", color: "#25abd6" }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Prüfen
              </a>
            </div>

            {/* Horizontal-Scroll */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #0f0c29, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #1e3a4f, transparent)" }} />
              <div className="reviews-horizontal flex gap-2.5">
                {[...reviews, ...reviews].map((r, idx) => (
                  <div key={idx}
                    className="shrink-0 w-56 rounded-xl p-3"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center font-body font-bold text-white text-[10px] shrink-0"
                          style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}>
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-body font-semibold text-white text-[11px] leading-tight">{r.name}</div>
                          <div className="font-body text-white/30 text-[10px]">{r.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-px shrink-0">
                        {[...Array(r.stars)].map((_, i) => (
                          <svg key={i} width="9" height="9" viewBox="0 0 12 12" fill="#f59e0b">
                            <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="font-body text-white/55 text-[11px] leading-[1.5] line-clamp-3">&ldquo;{r.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rechts — Desktop: Vertikal scrollende Google Bewertungen */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Google-Header */}
          <div className="flex items-center gap-3 mb-1">
              <svg viewBox="0 0 48 48" width="30" height="30">
                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
                <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                      <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                    </svg>
                  ))}
                  <span className="font-heading font-bold text-white text-sm ml-1">{rating.toFixed(1)}</span>
                </div>
                <span className="font-body text-white/35 text-xs">{total} Google Bewertungen</span>
              </div>
          </div>

          {/* Scroll-Container */}
          <div className="relative overflow-hidden" style={{ height: 440 }}>
            <div className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #0f0c29, transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #1e3a4f, transparent)" }} />

            <div className="reviews-vertical flex flex-col gap-4">
              {[...reviews, ...reviews].map((r, idx) => (
                <div key={idx}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-body font-bold text-white text-xs shrink-0"
                        style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}>
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-body font-semibold text-white text-sm">{r.name}</div>
                        <div className="font-body text-white/30 text-xs">{r.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(r.stars)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
                          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-white/60 text-sm leading-[1.6]">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Google-Link */}
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJHWy-OVi_uEcR4TNsTTb7wko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-body font-semibold text-sm py-3 rounded-xl transition-[opacity,transform] duration-200 hover:opacity-80 hover:-translate-y-px"
            style={{ background: "rgba(37,171,214,0.12)", border: "1px solid rgba(37,171,214,0.3)", color: "#25abd6" }}
          >
            <svg viewBox="0 0 48 48" width="16" height="16">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
              <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            Alle {total} Bewertungen auf Google ansehen
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

"use client";

import { UPSPS } from "@/lib/data";

const uspConfig = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#00aa00" strokeWidth="1.6"/>
        <path d="M8 12l3 3 5-5" stroke="#00aa00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#00aa00",
    bg: "rgba(0,170,0,0.12)",
    border: "rgba(0,170,0,0.20)",
    glow: "rgba(0,170,0,0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.2 4.4 4.8.7-3.5 3.4.83 4.86L12 13l-4.33 2.4.83-4.86L5 7.1l4.8-.7L12 2z" stroke="#25abd6" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.20)",
    glow: "rgba(37,171,214,0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 11h18M3 11L12 4l9 7M5 11v9h14v-9" stroke="#a78bfa" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.20)",
    glow: "rgba(167,139,250,0.08)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2.5" stroke="#25abd6" strokeWidth="1.6"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke="#25abd6" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.20)",
    glow: "rgba(37,171,214,0.08)",
  },
];

export default function USPs() {
  return (
    <section
      id="ueber-uns"
      className="relative grain py-28 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f0c29 0%, #1e1550 45%, #1a2e42 100%)" }}
    >
      {/* Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.10) 0%, transparent 65%)" }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.15) 0%, transparent 65%)" }} />
      {/* Trennlinie oben */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,171,214,0.25), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-white/8 text-white/55 font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-6 border border-white/10 tracking-widest uppercase">
            Unsere Stärken
          </span>
          <h2
            className="font-heading font-extrabold text-white mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Warum{" "}
            <span style={{ color: "#25abd6" }}>Nachhilfe,<br className="hidden sm:block" />aber richtig!</span>?
          </h2>
          <p className="font-body text-white/50 text-lg max-w-lg mx-auto leading-[1.75]">
            Wir gehen weit über das schlichte Notenverbessern hinaus — und begleiten dein Kind ganzheitlich.
          </p>
        </div>

        {/* Karten */}
        <div className="grid sm:grid-cols-2 gap-5">
          {UPSPS.map((usp, index) => {
            const cfg = uspConfig[index];
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-8 border transition-[transform,background] duration-300 hover:-translate-y-1.5 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15), 0 8px 32px rgba(0,0,0,0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = cfg.glow;
                  (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                {/* Großer Index im Hintergrund */}
                <span
                  className="absolute top-4 right-6 font-heading font-extrabold select-none pointer-events-none"
                  style={{ fontSize: "7rem", lineHeight: 1, letterSpacing: "-0.06em", color: `${cfg.color}08` }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
                >
                  {cfg.icon}
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3"
                  style={{ letterSpacing: "-0.01em" }}>
                  {usp.title}
                </h3>
                <p className="font-body text-white/55 leading-[1.75] text-[0.95rem]">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#00aa00,#008a00)",
              boxShadow: "0 4px 20px rgba(0,170,0,0.40)",
            }}
          >
            Gratis Probestunde buchen
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="font-body text-white/35 text-sm">Keine Verpflichtung — einfach ausprobieren.</p>
        </div>

      </div>

      {/* Trennlinie unten */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(101,92,158,0.25), transparent)" }} />
    </section>
  );
}

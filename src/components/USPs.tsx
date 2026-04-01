"use client";

import { UPSPS } from "@/lib/data";

const uspConfig = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="#25abd6" strokeWidth="1.6"/>
        <path d="M3 9h18M8 2v4M16 2v4" stroke="#25abd6" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 14h2M11 14h2M15 14h2M7 17.5h2M11 17.5h2" stroke="#25abd6" strokeWidth="1.6" strokeLinecap="round"/>
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
      className="relative py-28 overflow-hidden bg-white"
    >

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-primary/8 text-primary font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-6 border border-primary/12 tracking-widest uppercase">
            Unsere Stärken
          </span>
          <h2
            className="font-heading font-extrabold text-dark mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Warum{" "}
            <span style={{ color: "#25abd6" }}>Nachhilfe,<br className="hidden sm:block" />aber richtig!</span>?
          </h2>
          <p className="font-body text-muted/60 text-lg max-w-lg mx-auto leading-[1.75]">
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
                  background: "#ffffff",
                  borderColor: "rgba(26,26,46,0.08)",
                  boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 4px 16px rgba(26,26,46,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = cfg.glow;
                  (e.currentTarget as HTMLElement).style.borderColor = cfg.border;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${cfg.bg}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,46,0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 3px rgba(26,26,46,0.06), 0 4px 16px rgba(26,26,46,0.06)";
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

                <h3 className="font-heading font-bold text-xl text-dark mb-3"
                  style={{ letterSpacing: "-0.01em" }}>
                  {usp.title}
                </h3>
                <p className="font-body text-muted/65 leading-[1.75] text-[0.95rem]">
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
          <p className="font-body text-muted/45 text-sm">Keine Verpflichtung — einfach ausprobieren.</p>
        </div>

      </div>

    </section>
  );
}

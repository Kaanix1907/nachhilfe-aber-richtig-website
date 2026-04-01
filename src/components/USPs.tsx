"use client";

import { UPSPS } from "@/lib/data";

const uspConfig = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#00aa00" strokeWidth="1.8"/>
        <path d="M9 14l3.5 3.5 6.5-6.5" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#00aa00",
    accentBg: "rgba(0,170,0,0.08)",
    accentBorder: "rgba(0,170,0,0.18)",
    featured: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 5 5.5.8-4 3.9 1 5.5L14 15.5l-5 2.7 1-5.5-4-3.9 5.5-.8L14 3z" stroke="#25abd6" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#25abd6",
    accentBg: "rgba(37,171,214,0.08)",
    accentBorder: "rgba(37,171,214,0.18)",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 13h20M4 13l10-9 10 9M6 13v10h16V13" stroke="#655c9e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#655c9e",
    accentBg: "rgba(101,92,158,0.08)",
    accentBorder: "rgba(101,92,158,0.18)",
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="3" width="20" height="22" rx="3" stroke="#25abd6" strokeWidth="1.8"/>
        <path d="M9 10h10M9 14h10M9 18h6" stroke="#25abd6" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#25abd6",
    accentBg: "rgba(37,171,214,0.08)",
    accentBorder: "rgba(37,171,214,0.18)",
    featured: false,
  },
];

export default function USPs() {
  const featured = UPSPS[0];
  const rest = UPSPS.slice(1);

  return (
    <section id="ueber-uns" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block bg-primary/8 text-primary font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Unsere Stärken
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark max-w-lg"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Warum{" "}
              <span style={{ color: "#25abd6" }}>Nachhilfe,<br />aber richtig!</span>?
            </h2>
            <p className="font-body text-muted/65 text-base leading-[1.7] max-w-sm md:text-right">
              Wir begleiten dein Kind nicht nur beim Lernen — sondern auf dem Weg zu echtem Selbstvertrauen.
            </p>
          </div>
        </div>

        {/* Layout: Feature-Card links + 3 Karten rechts */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Feature-Card — Kostenlose Probestunde */}
          <div
            className="relative rounded-3xl p-10 flex flex-col justify-between min-h-[320px] overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #00aa00 0%, #007a00 100%)",
              boxShadow: "0 8px 40px rgba(0,170,0,0.25), 0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Hintergrund-Kreis */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.07)" }} />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full pointer-events-none"
              style={{ background: "rgba(255,255,255,0.05)" }} />

            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-auto"
              style={{ background: "rgba(255,255,255,0.15)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8"/>
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4"
                style={{ background: "rgba(255,255,255,0.15)" }}>
                <span className="font-body font-bold text-white text-xs tracking-widest uppercase">Kein Risiko</span>
              </div>
              <h3 className="font-heading font-extrabold text-white text-2xl mb-3"
                style={{ letterSpacing: "-0.02em" }}>
                {featured.title}
              </h3>
              <p className="font-body text-white/75 leading-[1.7]">{featured.description}</p>
            </div>
          </div>

          {/* Rechte Spalte — 3 kompakte Karten */}
          <div className="flex flex-col gap-5">
            {rest.map((usp, i) => {
              const cfg = uspConfig[i + 1];
              return (
                <div
                  key={i}
                  className="group rounded-2xl p-6 border flex items-start gap-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: cfg.accentBorder,
                    background: cfg.accentBg,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 20px ${cfg.accentBg.replace("0.08", "0.15")}, 0 8px 32px rgba(0,0,0,0.06)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: cfg.accentBg, border: `1px solid ${cfg.accentBorder}` }}>
                    {cfg.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg mb-1.5">{usp.title}</h3>
                    <p className="font-body text-muted/65 text-sm leading-[1.7]">{usp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
            style={{
              background: "linear-gradient(135deg,#00aa00,#008a00)",
              boxShadow: "0 4px 20px rgba(0,170,0,0.35)",
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

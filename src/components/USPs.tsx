"use client";

import { UPSPS } from "@/lib/data";
import FadeIn from "./FadeIn";

const uspConfig = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="3" y="3" width="20" height="20" rx="3" stroke="#25abd6" strokeWidth="1.7"/>
        <path d="M3 10h20M9 3v7" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M8 16l3 3 7-6" stroke="#25abd6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.22)",
    glow: "rgba(37,171,214,0.07)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 2.5l2.4 4.8 5.3.77-3.85 3.75.91 5.28L13 14.5l-4.81 2.6.91-5.28L5.3 8.07l5.3-.77L13 2.5z" stroke="#a78bfa" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.22)",
    glow: "rgba(167,139,250,0.07)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 12.5h18M4 12.5L13 5l9 7.5M6 12.5v9h14v-9" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.22)",
    glow: "rgba(37,171,214,0.07)",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="4" y="3" width="18" height="20" rx="3" stroke="#a78bfa" strokeWidth="1.7"/>
        <path d="M9 9h8M9 13h8M9 17h5" stroke="#a78bfa" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.22)",
    glow: "rgba(167,139,250,0.07)",
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
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,171,214,0.3), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <FadeIn className="mb-16">
          <span className="inline-block bg-white/8 text-white/55 font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 border border-white/10 tracking-widest uppercase">
            Unsere Stärken
          </span>
          <h2
            className="font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(1.5rem, 3.4vw, 3.2rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            Warum{" "}
            <span style={{ color: "#25abd6" }}>Nachhilfe, aber richtig!</span>?
          </h2>
        </FadeIn>

        {/* Karten */}
        <div className="grid sm:grid-cols-2 gap-5">
          {UPSPS.map((usp, index) => {
            const cfg = uspConfig[index];
            return (
              <FadeIn key={index} delay={index * 120} direction="up" className="h-full"><div
                className="group relative h-full rounded-3xl p-8 border transition-[transform,background,border-color] duration-300 hover:-translate-y-1.5 overflow-hidden cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.12)",
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
                {/* Große Nummer im Hintergrund */}
                <span
                  className="absolute -bottom-4 -right-2 font-heading font-extrabold select-none pointer-events-none leading-none"
                  style={{ fontSize: "9rem", color: `${cfg.color}09`, letterSpacing: "-0.06em" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-13 h-13 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-[background] duration-300"
                  style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
                >
                  {cfg.icon}
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3" style={{ letterSpacing: "-0.01em" }}>
                  {usp.title}
                </h3>
                <p className="font-body text-white/55 leading-[1.75] text-[0.95rem]">
                  {usp.description}
                </p>
              </div></FadeIn>
            );
          })}
        </div>


      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(101,92,158,0.3), transparent)" }} />
    </section>
  );
}

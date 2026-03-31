"use client";

import { UPSPS } from "@/lib/data";

const uspIcons = [
  // Kostenlose Probestunde
  <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Geprüfte Lehrer
  <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 2l1.8 3.6 4 .6-2.9 2.8.7 4L10 11l-3.6 1.9.7-4L4.2 6.2l4-.6L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>,
  // Staatlich gefördert
  <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 9h14M3 9l7-6 7 6M5 9v7h10V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Faire Verträge
  <svg key="3" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>,
];

export default function USPs() {
  return (
    <section
      id="ueber-uns"
      className="relative grain py-28 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a1040 0%, #2d1f5e 50%, #1e3a4f 100%)",
      }}
    >
      {/* Hintergrund-Glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,171,214,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(101,92,158,0.18) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/8 text-white/60 font-body font-medium text-xs px-4 py-1.5 rounded-full mb-5 border border-white/10 tracking-widest uppercase">
            Unsere Stärken
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4">
            Warum Nachhilfe, aber richtig!?
          </h2>
          <p className="font-body text-white/55 text-lg max-w-xl mx-auto leading-[1.75]">
            Wir gehen weit über das schlichte Notenverbessern hinaus — und
            begleiten dein Kind ganzheitlich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {UPSPS.map((usp, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-7 border border-white/8 transition-[transform,border-color] duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,171,214,0.25)";
                (e.currentTarget as HTMLElement).style.background = "rgba(37,171,214,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-primary"
                style={{ background: "rgba(37,171,214,0.15)" }}
              >
                {uspIcons[index]}
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                {usp.title}
              </h3>
              <p className="font-body text-white/55 leading-[1.75] text-sm">
                {usp.description}
              </p>

              {/* Subtiler Index */}
              <span
                className="absolute top-6 right-7 font-heading font-extrabold text-6xl text-white/4 select-none"
                style={{ letterSpacing: "-0.05em", lineHeight: 1 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

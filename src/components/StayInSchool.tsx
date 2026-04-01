"use client";

import Image from "next/image";

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2.5 6.5v7L10 18l7.5-4.5v-7L10 2z" stroke="#25abd6" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#25abd6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Vollständig kostenlos für berechtigte Familien",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#25abd6" strokeWidth="1.5"/>
        <path d="M6 8h8M6 12h5" stroke="#25abd6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "Offiziell anerkannt durch das Bundesministerium",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#25abd6" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="#25abd6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    text: "Für Schulen, Vereine und soziale Einrichtungen",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 5 5.5.7-4 3.8.95 5.5L10 14.5l-4.85 2.5.95-5.5-4-3.8 5.5-.7L10 2z" stroke="#25abd6" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Professionelle Nachhilfe mit geprüften Lehrern",
  },
];

export default function StayInSchool() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#0f1729" }}>
      {/* Hintergrundelemente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(37,171,214,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(101,92,158,0.10) 0%, transparent 60%)",
        }}
      />
      {/* Subtile Linie oben */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,171,214,0.3), transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Linke Spalte — Text & Benefits */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border"
              style={{
                background: "rgba(37,171,214,0.10)",
                borderColor: "rgba(37,171,214,0.20)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L2 4v4.5L7 12l5-3.5V4L7 1z" stroke="#25abd6" strokeWidth="1.3" strokeLinejoin="round"/>
              </svg>
              <span className="font-body text-xs font-semibold tracking-widest uppercase" style={{ color: "#25abd6" }}>
                Gefördert durch Bildung &amp; Teilhabe
              </span>
            </div>

            <h2
              className="font-heading font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.03em" }}
            >
              Stay in School —{" "}
              <span style={{ color: "#25abd6" }}>kostenlos</span> für Schulen &amp; Vereine
            </h2>

            <p className="font-body text-white/55 text-lg leading-[1.7] mb-10 max-w-lg">
              Unser <strong className="text-white/80 font-semibold">Stay in School</strong>-Programm
              wird durch das offizielle Bildungspaket des Bundesministeriums finanziert.
              Schulen und Vereine erhalten professionelle Nachhilfe — ohne eigene Kosten.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(37,171,214,0.12)" }}
                  >
                    {b.icon}
                  </div>
                  <span className="font-body text-white/70 text-[0.95rem] leading-[1.6]">{b.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2.5 font-body font-semibold text-sm text-white px-7 py-3.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #25abd6 0%, #1d8fb5 100%)",
                boxShadow: "0 4px 16px rgba(37,171,214,0.35), 0 1px 3px rgba(0,0,0,0.2)",
              }}
            >
              Jetzt anfragen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Rechte Spalte — Logo-Karte */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-sm rounded-3xl p-10 flex flex-col items-center gap-8"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Logo */}
              <div
                className="w-full rounded-2xl flex items-center justify-center p-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <Image
                  src="/logo.png"
                  alt="Nachhilfe, aber richtig! Logo"
                  width={240}
                  height={120}
                  className="object-contain"
                  style={{ filter: "brightness(1.05)" }}
                />
              </div>

              {/* Trennlinie */}
              <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />

              {/* Förderhinweis */}
              <div className="text-center">
                <p className="font-body text-white/40 text-xs uppercase tracking-widest mb-2">Offiziell gefördert durch</p>
                <p className="font-heading font-bold text-white text-lg leading-tight">
                  Bildung &amp; Teilhabe
                </p>
                <p className="font-body text-white/40 text-sm mt-1">Bundesministerium für Arbeit und Soziales</p>
              </div>

              {/* Grünes "Kostenlos"-Badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full font-body font-bold text-white text-sm"
                style={{
                  background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
                  boxShadow: "0 4px 12px rgba(0,170,0,0.4)",
                  letterSpacing: "0.01em",
                }}
              >
                100% kostenlos
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtile Linie unten */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(101,92,158,0.3), transparent)" }}
      />
    </section>
  );
}

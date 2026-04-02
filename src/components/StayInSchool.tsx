"use client";

import Image from "next/image";

export default function StayInSchool() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "#0f1729" }}>
      {/* Hintergrundelemente */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(37,171,214,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(101,92,158,0.08) 0%, transparent 60%)",
        }}
      />
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Oberster Sticker direkt am Anfang */}
        <div className="flex justify-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-body font-bold text-white text-sm"
            style={{
              background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
              boxShadow: "0 4px 16px rgba(0,170,0,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2.5 6.5v7L10 18l7.5-4.5v-7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            100% KOSTENLOS DURCH BILDUNG UND TEILHABE
          </div>
        </div>

        {/* Intro */}
        <div className="text-center mb-16">
          <h2
            className="font-heading font-extrabold text-white mb-4"
            style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}
          >
            Nachhilfe wird <span style={{ color: "#25abd6" }}>vollständig übernommen</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
            Wenn Sie bestimmte Leistungen beziehen, haben Ihre Kinder einen garantierten Anspruch auf kostenlose Nachhilfe. Die Zuständigkeiten sind dabei klar geregelt.
          </p>
        </div>

        {/* Karten-Grid: Jobcenter vs Stadt Duisburg */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Sektion 1: Jobcenter */}
          <div
            className="relative rounded-3xl p-8 transition-transform hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25abd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Jobcenter</h3>
                <p className="font-body text-sm text-[#25abd6] font-semibold tracking-wide uppercase">Zuständige Stelle</p>
              </div>
            </div>
            
            <p className="font-body text-white/70 mb-6 leading-relaxed">
              Das Jobcenter ist für die Kostenübernahme der Nachhilfe zuständig, wenn Ihre Familie die folgende Leistung bezieht:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M5 10l3 3 7-7" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-body font-semibold text-white">Bürgergeld</span>
              </li>
            </ul>
          </div>

          {/* Sektion 2: Stadt Duisburg */}
          <div
            className="relative rounded-3xl p-8 transition-transform hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#25abd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Stadt Duisburg</h3>
                <p className="font-body text-sm text-[#25abd6] font-semibold tracking-wide uppercase">Zuständige Stelle</p>
              </div>
            </div>

            <p className="font-body text-white/70 mb-6 leading-relaxed">
              Die Stadt Duisburg übernimmt die Förderung durch das Bildungspaket, wenn Sie eine dieser Leistungen empfangen:
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M5 10l3 3 7-7" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-body font-semibold text-white">Wohngeld</span>
              </li>
              <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M5 10l3 3 7-7" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-body font-semibold text-white">Kinderzuschlag</span>
              </li>
              <li className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M5 10l3 3 7-7" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-body font-semibold text-white">Sozialhilfe (nach SGB XII)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}


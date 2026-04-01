import Image from "next/image";
import { BUSINESS } from "@/lib/data";

const subjects = ["Mathe", "Deutsch", "Englisch", "Physik", "Chemie", "Bio"];

const reviews = [
  { initials: "LM", color: "#25abd6" },
  { initials: "TK", color: "#655c9e" },
  { initials: "AJ", color: "#00aa00" },
  { initials: "SR", color: "#e07b39" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grain min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #1e3a4f 100%)",
      }}
    >
      {/* Radiale Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.15) 0%, transparent 70%)" }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,171,214,0.06) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white/8 text-white/70 font-body font-medium text-xs px-3.5 py-1.5 rounded-full mb-6 border border-white/10 tracking-widest uppercase">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3" fill="#25abd6"/>
              <circle cx="5" cy="5" r="5" fill="#25abd6" fillOpacity="0.2"/>
            </svg>
            Duisburg
          </span>

          <h1 className="font-heading text-5xl md:text-[3.75rem] font-extrabold text-white leading-[1.05] mb-6">
            {BUSINESS.name}
          </h1>

          <p className="font-body text-xl text-white/70 mb-3 leading-[1.75]">
            Professionelle Nachhilfe für Schüler{" "}
            <span className="font-semibold" style={{ color: "#25abd6" }}>
              ab Klasse 1 bis Abitur
            </span>{" "}
            — in allen Fächern, persönlich betreut.
          </p>

          <p className="font-body text-base text-white/40 mb-10 tracking-wide">
            {BUSINESS.slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
                boxShadow: "0 4px 20px rgba(0,170,0,0.40), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              Gratis Probestunde buchen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.10)",
                border: "1.5px solid rgba(255,255,255,0.30)",
                color: "#ffffff",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                backdropFilter: "blur(8px)",
              }}
            >
              Unsere Leistungen
            </a>
          </div>

          {/* Gefördert-durch Sticker */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="font-body text-sm text-white/45 tracking-wide">
              Gefördert durch
            </span>
            <div
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.30)" }}
            >
              <Image
                src="/logo-jobcenter.jpeg"
                alt="Jobcenter Duisburg"
                width={130}
                height={34}
                className="object-contain"
                style={{ height: 30, width: "auto" }}
              />
            </div>
            <div
              className="inline-flex items-center px-4 py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.30)" }}
            >
              <Image
                src="/logo-stadt-duisburg.png"
                alt="Stadt Duisburg"
                width={110}
                height={34}
                className="object-contain"
                style={{ height: 30, width: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Right — Booking Card */}
        <div className="hidden md:flex items-center justify-center py-10">
          <div className="relative w-full max-w-sm">

            {/* Floating Badge oben links */}
            <div
              className="absolute -top-5 -left-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,170,0,0.2)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5L12 3" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-body font-semibold text-white text-xs">Kostenlos testen</div>
                <div className="font-body text-white/40 text-[10px]">Keine Verpflichtung</div>
              </div>
            </div>

            {/* Floating Badge oben rechts */}
            <div
              className="absolute -top-3 -right-8 z-20 px-3 py-1.5 rounded-xl"
              style={{
                background: "rgba(37,171,214,0.15)",
                border: "1px solid rgba(37,171,214,0.3)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="font-heading font-extrabold text-primary text-lg" style={{ letterSpacing: "-0.04em" }}>96%</div>
              <div className="font-body text-white/40 text-[10px]">Notenverbesserung</div>
            </div>

            {/* Haupt-Card */}
            <div
              className="relative rounded-3xl p-6 w-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-heading font-bold text-white text-lg">Probestunde buchen</div>
                  <div className="font-body text-white/40 text-xs mt-0.5">Wähle dein Fach</div>
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(37,171,214,0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="#25abd6" strokeWidth="1.4"/>
                    <path d="M5 1v2M11 1v2M2 6h12" stroke="#25abd6" strokeWidth="1.4" strokeLinecap="round"/>
                    <rect x="5" y="9" width="2" height="2" rx="0.5" fill="#25abd6"/>
                    <rect x="9" y="9" width="2" height="2" rx="0.5" fill="#25abd6" opacity="0.5"/>
                  </svg>
                </div>
              </div>

              {/* Fächer-Chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {subjects.map((s, i) => (
                  <span
                    key={s}
                    className="font-body text-xs px-3 py-1.5 rounded-full font-medium transition-[background-color,color,border-color] duration-200"
                    style={
                      i === 0
                        ? { background: "#25abd6", color: "#fff", border: "1px solid #25abd6" }
                        : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.10)" }
                    }
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/8 mb-5" />

              {/* Social Proof */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-body text-white/40 text-xs mb-1.5">Zufriedene Familien</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
                        <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                      </svg>
                    ))}
                    <span className="font-body text-white/50 text-xs ml-1">4.9</span>
                  </div>
                </div>
                {/* Avatar Stack */}
                <div className="flex -space-x-2">
                  {reviews.map((r) => (
                    <div
                      key={r.initials}
                      className="w-8 h-8 rounded-full flex items-center justify-center font-body font-bold text-white text-[10px] ring-2 ring-white/10"
                      style={{ background: r.color }}
                    >
                      {r.initials}
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-body font-semibold text-white/60 text-[10px] ring-2 ring-white/10"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    +99
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className="w-full flex items-center justify-center gap-2 text-white font-body font-bold text-sm py-3.5 rounded-2xl transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #25abd6 0%, #1e8fb5 100%)",
                  boxShadow: "0 4px 16px rgba(37,171,214,0.4), 0 1px 3px rgba(0,0,0,0.2)",
                }}
              >
                Jetzt kostenlos starten
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Floating Badge unten rechts */}
            <div
              className="absolute -bottom-5 -right-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(101,92,158,0.3)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v6l3.5 2" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="6" stroke="#a78bfa" strokeWidth="1.2"/>
                </svg>
              </div>
              <div>
                <div className="font-body font-semibold text-white text-xs">Klassen 1–13</div>
                <div className="font-body text-white/40 text-[10px]">Alle Fächer</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.04) 0%, transparent 100%)" }} />
    </section>
  );
}

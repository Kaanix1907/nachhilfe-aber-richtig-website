import { BUSINESS } from "@/lib/data";

const stats = [
  { value: "1–13", label: "Alle Klassen" },
  { value: "100%", label: "Gratis testen" },
  { value: "3–5er", label: "Gruppen" },
  { value: "24/7", label: "WhatsApp" },
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
      {/* Radiale Glows — mehrschichtig */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(101,92,158,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,171,214,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,171,214,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white/8 text-white/70 font-body font-medium text-xs px-3.5 py-1.5 rounded-full mb-6 border border-white/10 tracking-widest uppercase">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
              <circle cx="5" cy="5" r="3" fill="#25abd6"/>
              <circle cx="5" cy="5" r="5" fill="#25abd6" fillOpacity="0.2"/>
            </svg>
            Duisburg-Rheinhausen
          </span>

          <h1 className="font-heading text-5xl md:text-[3.75rem] font-extrabold text-white leading-[1.05] mb-6">
            {BUSINESS.name}
          </h1>

          <p className="font-body text-xl text-white/70 mb-3 leading-[1.75]">
            Professionelle Nachhilfe für Schüler{" "}
            <span
              className="font-semibold"
              style={{ color: "#25abd6" }}
            >
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
              className="inline-flex items-center justify-center gap-2 bg-white text-dark font-body font-bold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 active:scale-95"
              style={{
                boxShadow: "0 4px 16px rgba(255,255,255,0.15), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              Gratis Probestunde buchen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-body font-semibold text-base px-8 py-4 rounded-full transition-[border-color,background-color,color] duration-200 hover:border-white/50 hover:bg-white/8 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-white/35 font-body text-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="#00aa00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Gefördert durch das Bildungspaket des Bundesministeriums
          </div>
        </div>

        {/* Stats-Grid */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative rounded-2xl p-6 border border-white/8 backdrop-blur-sm transition-[transform,border-color] duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="font-heading font-extrabold text-4xl text-white mb-1 transition-[color] duration-300 group-hover:text-primary"
                style={{ letterSpacing: "-0.04em" }}
              >
                {stat.value}
              </div>
              <div className="font-body text-white/45 text-sm tracking-wide">
                {stat.label}
              </div>
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(37,171,214,0.08) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.06) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}

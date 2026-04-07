import { BUSINESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0f0c29 0%, #1a1040 60%, #1e3a4f 100%)",
      }}
    >
      {/* Subtiler Glow oben */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,171,214,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="font-heading font-extrabold text-white text-xl mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              {BUSINESS.name}
            </h3>
            <p className="font-body text-white/40 text-sm leading-[1.75] mb-5">
              Professionelle Nachhilfe in Duisburg-Rheinhausen — von Klasse 1
              bis Abitur.
            </p>
            {/* Kontakt kompakt */}
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-body text-white/40 text-xs hover:text-primary transition-[color] duration-200 flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1.5h2.5l1 2.5L4 5a6.5 6.5 0 003 3l1-1.5 2.5 1V11a.75.75 0 01-.75.75A10.25 10.25 0 011.25 2.25.75.75 0 012 1.5z" stroke="currentColor" strokeWidth="1"/>
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="font-body text-white/40 text-xs hover:text-primary transition-[color] duration-200 flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1"/>
                  <path d="M1 4l5 3 5-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 font-body text-sm">
              {[
                { href: "#hero", label: "Startseite" },
                { href: "#leistungen", label: "Leistungen" },
                { href: "#ueber-uns", label: "Über uns" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white transition-[color] duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Öffnungszeiten kompakt */}
          <div>
            <h4 className="font-body font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">
              Öffnungszeiten
            </h4>
            <div className="flex flex-col gap-2 font-body text-xs">
              {BUSINESS.hours
                .filter((h) => h.time !== "Geschlossen")
                .map((h) => (
                  <div key={h.day} className="flex justify-between text-white/40">
                    <span>{h.day}</span>
                    <span className="tabular-nums text-white/55">{h.time}</span>
                  </div>
                ))}
              <div className="text-white/25 text-xs mt-1">Sa & So: Geschlossen</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-body text-xs text-white/25">
          <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
          <div className="flex gap-6">
            <a href="/impressum" className="hover:text-white/60 transition-[color] duration-200">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-white/60 transition-[color] duration-200">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

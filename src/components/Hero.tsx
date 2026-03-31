import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 pt-20">
      {/* Hintergrund-Dekorationen */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-6">
            📚 Duisburg-Rheinhausen
          </span>

          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-dark leading-tight mb-6">
            {BUSINESS.name}
          </h1>

          <p className="font-body text-xl text-dark/70 mb-4 leading-relaxed">
            Professionelle Nachhilfe für Schüler{" "}
            <strong className="text-primary">ab Klasse 1 bis Abitur</strong> —
            in allen Fächern, persönlich betreut.
          </p>

          <p className="font-body text-lg text-dark/60 mb-10">
            {BUSINESS.slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body font-bold text-lg px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Gratis Probestunde buchen →
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center gap-2 border-2 border-secondary text-secondary font-body font-bold text-lg px-8 py-4 rounded-full hover:bg-secondary hover:text-white transition-all"
            >
              Unsere Leistungen
            </Link>
          </div>

          {/* Trust-Badge */}
          <div className="mt-10 flex items-center gap-3 text-dark/60 font-body text-sm">
            <span className="text-accent text-xl">✓</span>
            Gefördert durch das Bildungspaket des Bundesministeriums
          </div>
        </div>

        {/* Visuelles Element */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80">
            {/* Hauptkreis */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20" />
            <div className="absolute inset-6 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-8">
              <div className="text-6xl mb-3">🎓</div>
              <div className="font-heading font-bold text-2xl text-dark">
                1. Klasse
              </div>
              <div className="font-body text-dark/50 text-sm">bis</div>
              <div className="font-heading font-bold text-2xl text-dark">
                Abitur
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 font-body text-sm font-semibold text-dark">
              ✅ Kostenlos testen
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 font-body text-sm font-semibold text-dark">
              👥 Einzel & Gruppe
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

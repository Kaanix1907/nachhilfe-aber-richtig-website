import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-3">
              {BUSINESS.name}
            </h3>
            <p className="font-body text-sm leading-relaxed">
              Professionelle Nachhilfe in Duisburg-Rheinhausen — von Klasse 1
              bis Abitur.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-semibold text-white mb-3">
              Navigation
            </h4>
            <div className="flex flex-col gap-2 font-body text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Startseite
              </Link>
              <Link
                href="/leistungen"
                className="hover:text-white transition-colors"
              >
                Leistungen
              </Link>
              <Link
                href="/ueber-uns"
                className="hover:text-white transition-colors"
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className="hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-body font-semibold text-white mb-3">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 font-body text-sm">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="hover:text-white transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="hover:text-white transition-colors"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 font-body text-sm">
          <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
          <div className="flex gap-6">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

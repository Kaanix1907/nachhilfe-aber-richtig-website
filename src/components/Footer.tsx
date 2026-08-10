import Link from "next/link";
import { BUSINESS } from "@/lib/data";
import { ORTE, FAECHER } from "@/lib/seo-pages";

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-body font-semibold text-white/80 text-xs tracking-widest uppercase mb-4">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white/60 hover:text-white transition-[color] duration-200 w-fit"
    >
      {children}
    </Link>
  );
}

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
        {/* Vier Spalten statt drei: Orts- und Fachseiten brauchen eine feste
            interne Verlinkung, sonst findet der Crawler sie nur ueber die
            Sitemap und sie bekommen kein Gewicht von der Startseite ab. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3
              className="font-heading font-extrabold text-white text-xl mb-3"
              style={{ letterSpacing: "-0.03em" }}
            >
              {BUSINESS.name}
            </h3>
            <p className="font-body text-white/60 text-sm leading-[1.75] mb-5">
              Nachhilfe in Duisburg-Rheinhausen, von Klasse 1 bis Abitur.
            </p>
            {/* Name, Anschrift und Rufnummer gehoeren zusammen auf jede Seite
                und muessen mit dem Google-Unternehmensprofil wortgleich sein —
                daran erkennt die lokale Suche denselben Betrieb wieder. Die
                Anschrift fehlte hier bis 2026-08-05 vollstaendig.
                Es ist der Unterrichtsort, nicht die ladungsfaehige Anschrift
                aus dem Impressum; wie beide zusammenhaengen, steht dort. */}
            <address className="not-italic font-body text-white/60 text-xs leading-[1.8] mb-4">
              {BUSINESS.addresses.lernort.street}
              <br />
              {BUSINESS.addresses.lernort.city}
            </address>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-body text-white/60 text-xs hover:text-primary transition-[color] duration-200 flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 1.5h2.5l1 2.5L4 5a6.5 6.5 0 003 3l1-1.5 2.5 1V11a.75.75 0 01-.75.75A10.25 10.25 0 011.25 2.25.75.75 0 012 1.5z" stroke="currentColor" strokeWidth="1"/>
                </svg>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="font-body text-white/60 text-xs hover:text-primary transition-[color] duration-200 flex items-center gap-2"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="2.5" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1"/>
                  <path d="M1 4l5 3 5-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                {BUSINESS.email}
              </a>
            </div>

            <ColumnHeading>Öffnungszeiten</ColumnHeading>
            <div className="flex flex-col gap-2 font-body text-xs">
              {BUSINESS.hours
                .filter((h) => h.time !== "Geschlossen")
                .map((h) => (
                  <div key={h.day} className="flex justify-between text-white/60 max-w-[190px]">
                    <span>{h.day}</span>
                    <span className="tabular-nums text-white/85">{h.time}</span>
                  </div>
                ))}
              <div className="text-white/60 text-xs mt-1">Sa &amp; So: Geschlossen</div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ColumnHeading>Navigation</ColumnHeading>
            <div className="flex flex-col gap-2.5 font-body text-sm">
              <FooterLink href="/">Startseite</FooterLink>
              <FooterLink href="/#leistungen">Leistungen</FooterLink>
              <FooterLink href="/#ueber-uns">Über uns</FooterLink>
              <FooterLink href="/#faq">Häufige Fragen</FooterLink>
              <FooterLink href="/nachhilfe">Alle Fächer und Standorte</FooterLink>
              <FooterLink href="/ratgeber">Ratgeber für Eltern</FooterLink>
              <FooterLink href="/material">Kostenloses Übungsmaterial</FooterLink>
              <FooterLink href="/bildung-und-teilhabe">Bildung und Teilhabe</FooterLink>
              <FooterLink href="/zap-vorbereitung">ZAP-Vorbereitung</FooterLink>
              <FooterLink href="/#kontakt">Kontakt</FooterLink>
            </div>
          </div>

          {/* Standorte */}
          <div>
            <ColumnHeading>Standorte</ColumnHeading>
            <div className="flex flex-col gap-2.5 font-body text-sm">
              {ORTE.map((o) => (
                <FooterLink key={o.slug} href={`/nachhilfe/${o.slug}`}>
                  Nachhilfe {o.name}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Fächer und Schulstufen */}
          <div>
            <ColumnHeading>Fächer</ColumnHeading>
            <div className="flex flex-col gap-2.5 font-body text-sm">
              {FAECHER.map((f) => (
                <FooterLink key={f.slug} href={`/nachhilfe/${f.slug}`}>
                  {f.name}
                </FooterLink>
              ))}
              {/* Die beiden Stufenseiten stehen bewusst hier und nicht in der
                  Navigationsspalte: Wer nach einer Schulstufe sucht, sucht in
                  derselben Bewegung wie nach einem Fach. */}
              <FooterLink href="/nachhilfe/grundschule">Grundschule</FooterLink>
              <FooterLink href="/nachhilfe/abiturvorbereitung">Abiturvorbereitung</FooterLink>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t mb-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-body text-xs text-white/60">
          <span>© {new Date().getFullYear()} {BUSINESS.name}</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white transition-[color] duration-200">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-[color] duration-200">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

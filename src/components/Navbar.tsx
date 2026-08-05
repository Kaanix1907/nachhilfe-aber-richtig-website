"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/data";
import { ORTE, FAECHER } from "@/lib/seo-pages";

const navLinks: { href: string; label: string; badge?: string }[] = [
  { href: "#leistungen", label: "Leistungen" },
  // Absoluter Pfad: die Seite ist der staerkste Suchbegriff des Angebots und
  // bekommt hier ihren Ankertext. Die Praefix-Logik unten laesst "/" in Ruhe.
  { href: "/bildung-und-teilhabe", label: "Bildung und Teilhabe" },
  { href: "#kontakt", label: "Kontakt" },
];

// Elf der vierzehn Seiten waren bis hierher nur ueber den Fusszeilen-Block
// erreichbar. Fuer eine Suchmaschine ist das die schwaechste Platzierung, die
// eine Seite bekommen kann, und wer die Seite benutzt, findet sie dort auch
// nur, wenn er bis ganz nach unten scrollt.
//
// Bewusst per Klick statt per Hover: ein reines Hover-Menue laesst sich auf
// dem Handy nicht bedienen und mit der Tastatur nur ueber Umwege.
const MENUES = [
  {
    id: "faecher",
    label: "Fächer",
    eintraege: FAECHER.map((f) => ({ href: `/nachhilfe/${f.slug}`, label: f.name })),
  },
  {
    id: "standorte",
    label: "Standorte",
    eintraege: ORTE.map((o) => ({ href: `/nachhilfe/${o.slug}`, label: o.langName })),
  },
];

function Aufklappmenu({
  id,
  label,
  eintraege,
  offen,
  umschalten,
  schliessen,
}: {
  id: string;
  label: string;
  eintraege: { href: string; label: string }[];
  offen: boolean;
  umschalten: () => void;
  schliessen: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={umschalten}
        aria-expanded={offen}
        aria-controls={`menu-${id}`}
        className="font-body text-muted hover:text-primary transition-[color] duration-200 font-medium text-sm tracking-wide inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2 rounded"
      >
        {label}
        <svg
          width="11"
          height="11"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${offen ? "rotate-180" : ""}`}
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* Immer im DOM, Sichtbarkeit nur ueber die Klasse. Als bedingtes
          Rendern ({offen && …}) existierten die Links erst nach einem Klick —
          ein Crawler klickt nicht, und genau deshalb waren die Unterseiten
          weiterhin nur ueber die Fusszeile erreichbar. `hidden` ist
          display:none und nimmt die Eintraege dabei sauber aus der
          Tabulatorreihenfolge und aus dem Screenreader. */}
      <div
        id={`menu-${id}`}
        className={`absolute left-0 top-full mt-3 min-w-[15rem] rounded-2xl bg-white py-2 z-50 ${offen ? "" : "hidden"}`}
        style={{
          border: "1px solid rgba(26,26,46,0.08)",
          boxShadow: "0 4px 12px rgba(26,26,46,0.08), 0 16px 40px rgba(26,26,46,0.10)",
        }}
      >
          {eintraege.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={schliessen}
              className="block px-5 py-2 font-body text-muted text-sm hover:text-primary-deep hover:bg-gray-50 transition-[color,background-color] duration-150 focus-visible:outline-none focus-visible:bg-gray-50 focus-visible:text-primary-deep"
            >
              {e.label}
            </Link>
          ))}
          <Link
            href="/nachhilfe"
            onClick={schliessen}
            className="block px-5 py-2 mt-1 border-t border-gray-100 pt-3 font-body text-primary-deep text-sm font-semibold hover:bg-gray-50 transition-[background-color] duration-150 focus-visible:outline-none focus-visible:bg-gray-50"
          >
            Alle im Überblick
          </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offenesMenu, setOffenesMenu] = useState<string | null>(null);
  const leiste = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const isSubpage = pathname !== "/";
  const prefix = isSubpage ? "/" : "";

  // Ein aufgeklapptes Menue muss sich auch wieder schliessen lassen, ohne den
  // Knopf erneut zu treffen — sonst bleibt es beim Weiterklicken offen stehen.
  useEffect(() => {
    if (!offenesMenu) return;
    function beiKlick(e: MouseEvent) {
      if (!leiste.current?.contains(e.target as Node)) setOffenesMenu(null);
    }
    function beiTaste(e: KeyboardEvent) {
      if (e.key === "Escape") setOffenesMenu(null);
    }
    document.addEventListener("mousedown", beiKlick);
    document.addEventListener("keydown", beiTaste);
    return () => {
      document.removeEventListener("mousedown", beiKlick);
      document.removeEventListener("keydown", beiTaste);
    };
  }, [offenesMenu]);

  return (
    <header
      ref={leiste}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md"
      style={{
        boxShadow: "0 1px 0 rgba(26,26,46,0.08), 0 4px 24px rgba(26,26,46,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href={`${prefix}#hero`} className="flex items-center gap-3">
          {/* `priority` statt des Next-Standards `loading="lazy"`: das Logo
              steht above the fold und ist auf Unterseiten der LCP-Kandidat —
              ein verzoegertes Laden kostet dort direkt Ladezeit.
              WebP mit 108x96 (2x der Anzeigehoehe von 48px) statt der 317x282
              grossen PNG: 47 KB -> 5,7 KB. `logo.png` bleibt unangetastet,
              weil `Organization.logo` im JSON-LD darauf verweist. */}
          <Image
            src="/logo.webp"
            alt={BUSINESS.name}
            width={54}
            height={48}
            priority
            className="object-contain h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {MENUES.map((m) => (
            <Aufklappmenu
              key={m.id}
              id={m.id}
              label={m.label}
              eintraege={m.eintraege}
              offen={offenesMenu === m.id}
              umschalten={() => setOffenesMenu(offenesMenu === m.id ? null : m.id)}
              schliessen={() => setOffenesMenu(null)}
            />
          ))}
          {navLinks.map((link) => {
            const isAbsolute = link.href.startsWith("/") && !link.href.startsWith("#");
            const href = isAbsolute ? link.href : `${prefix}${link.href}`;
            return (
              <a
                key={link.href}
                href={href}
                className="relative font-body text-muted hover:text-primary transition-[color] duration-200 font-medium text-sm tracking-wide inline-flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-heading font-extrabold tracking-wider"
                    style={{
                      background: "linear-gradient(135deg,#25abd6,#655c9e)",
                      color: "white",
                      boxShadow: "0 2px 6px rgba(37,171,214,0.35)",
                    }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a
          href={`${prefix}#kontakt`}
          className="hidden md:inline-flex items-center gap-2 text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
            boxShadow: "0 2px 10px rgba(0,170,0,0.35), 0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Gratis Probestunde
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-dark rounded-lg transition-[background-color] duration-200 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2"
          aria-label="Menü öffnen"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="5" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[transform,opacity] duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`}
            />
            <rect x="2" y="9.25" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[opacity] duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <rect x="2" y="13.5" width="16" height="1.5" rx="0.75" fill="currentColor"
              className={`transition-[transform,opacity] duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isAbsolute = link.href.startsWith("/") && !link.href.startsWith("#");
            const href = isAbsolute ? link.href : `${prefix}${link.href}`;
            return (
              <a
                key={link.href}
                href={href}
                className="font-body text-muted hover:text-primary transition-[color] duration-200 font-medium text-base py-1 inline-flex items-center gap-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.badge && (
                  <span
                    className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-heading font-extrabold tracking-wider text-white"
                    style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
                  >
                    {link.badge}
                  </span>
                )}
              </a>
            );
          })}

          {/* Am Handy stehen die Listen offen da statt hinter einem zweiten
              Aufklapp-Schritt: das Menue ist ohnehin schon aufgeklappt, und
              jeder weitere Griff kostet mehr, als er an Uebersicht bringt. */}
          {MENUES.map((m) => (
            <div key={m.id} className="border-t border-gray-100 pt-3 mt-1">
              <p className="font-body font-semibold text-dark/50 text-xs tracking-widest uppercase mb-2">
                {m.label}
              </p>
              <div className="flex flex-col gap-1.5">
                {m.eintraege.map((e) => (
                  <Link
                    key={e.href}
                    href={e.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-muted hover:text-primary transition-[color] duration-200 text-[0.95rem]"
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/nachhilfe"
            onClick={() => setMenuOpen(false)}
            className="font-body text-primary-deep font-semibold text-[0.95rem] border-t border-gray-100 pt-3 mt-1"
          >
            Alle Fächer und Standorte im Überblick
          </Link>

          <a
            href={`${prefix}#kontakt`}
            className="inline-flex items-center justify-center text-white font-body font-semibold px-5 py-3 rounded-full mt-2 transition-[transform,box-shadow] duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #00aa00 0%, #008a00 100%)",
              boxShadow: "0 2px 10px rgba(0,170,0,0.35)",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Gratis Probestunde buchen
          </a>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import FadeIn from "./FadeIn";

// Bausteine der Orts-, Fach-, BuT- und ZAP-Seiten. Lagen vorher als Kopien in
// den einzelnen Dateien; das hat die Seiten-Funktionen so lang gemacht, dass
// CodeScene sie als "Large Method" beanstandet hat.
//
// Ueberall `next/link` statt `<a>`: der Export rendert daraus zwar dasselbe
// HTML, aber Link uebernimmt Vorladen und clientseitige Navigation. Ein
// Wechsel auf `<a>` waere eine Verhaltensaenderung durch die Hintertuer.

// `roh` laesst den Textcontainer weg — fuer Abschnitte, unter deren
// Ueberschrift direkt eine Liste oder Kachelreihe steht. Ohne diese Variante
// mussten solche Abschnitte ihr Kopf-Geruest selbst nachbauen, was CodeScene
// zu Recht als Duplizierung gemeldet hat.
export function SeoBlock({
  kicker,
  title,
  children,
  roh = false,
  titelAbstand = "eng",
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
  roh?: boolean;
  titelAbstand?: "eng" | "weit";
}) {
  return (
    <FadeIn className="mb-14" direction="up">
      {kicker && (
        <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-primary/12">
          {kicker}
        </span>
      )}
      <h2
        className={`font-heading text-2xl md:text-3xl font-extrabold text-dark ${titelAbstand === "weit" ? "mb-6" : "mb-4"}`}
        style={{ letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      {roh ? children : <div className="font-body text-muted/75 leading-[1.8] text-[0.97rem] space-y-4">{children}</div>}
    </FadeIn>
  );
}

export function Pfeil({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// `groesse` ist kein Schmuck: in den Fachkarten der ZAP-Seite steht der Link
// eine Spur kleiner als im Fliesstext. Ohne den Parameter waere er beim
// Zusammenfuehren stillschweigend groesser geworden.
export function WeiterLink({
  href,
  children,
  groesse = "0.97rem",
}: {
  href: string;
  children: React.ReactNode;
  groesse?: "0.97rem" | "0.92rem";
}) {
  const klasse = groesse === "0.92rem" ? "text-[0.92rem]" : "text-[0.97rem]";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-body font-semibold text-primary-deep ${klasse} hover:gap-3 transition-[gap] duration-200`}
    >
      {children}
      <Pfeil size={groesse === "0.92rem" ? 14 : 15} />
    </Link>
  );
}

export function AbschlussKarte({
  titel,
  text,
  knopfText,
  href,
}: {
  titel: string;
  text: React.ReactNode;
  knopfText: string;
  href: string;
}) {
  return (
    <FadeIn direction="up">
      <div
        className="rounded-3xl p-8 md:p-10 text-center"
        style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 70%, #1e3a4f 100%)" }}
      >
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
          {titel}
        </h2>
        <p className="font-body text-white/60 leading-[1.75] text-[0.97rem] mb-7 max-w-md mx-auto">{text}</p>
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
          style={{ background: "linear-gradient(135deg,#008a00,#006e00)", boxShadow: "0 4px 20px rgba(0,110,0,0.40)" }}
        >
          {knopfText}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </FadeIn>
  );
}

// Aktualitaetshinweis unter inhaltlichen Seiten. Er beantwortet die Frage,
// die sich jeder stellt, der auf eine Ratgeberseite kommt: Gilt das noch?
// Fuer Suchmaschinen und AI-Systeme ist er zugleich ein Frischesignal —
// undatierte Inhalte verlieren gegen datierte.
//
// Das Datum kommt aus lib/stand.ts und wird dort von Hand gepflegt, nicht aus
// dem git-Verlauf abgeleitet. Warum, steht in der Datei.
export function StandHinweis({ stand }: { stand: string }) {
  return (
    <p className="font-body text-muted/75 text-xs mt-10 pt-6 border-t border-gray-100">
      Inhalt zuletzt geprüft: {stand}
    </p>
  );
}

export function LinkKachel({ href, titel }: { href: string; titel: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/25"
      style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)" }}
    >
      <span className="font-heading font-bold text-[0.98rem] text-dark group-hover:text-primary-deep transition-[color] duration-300">
        {titel}
      </span>
      {/* Klassen bewusst am SVG statt an einem Wrapper: so bleibt das
          ausgelieferte HTML Zeichen fuer Zeichen identisch zu vorher. */}
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 transition-[opacity,transform] duration-300">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

export function PillenReihe({
  eintraege,
  extraKlasse = "",
}: {
  eintraege: { href: string; label: string }[];
  extraKlasse?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2.5${extraKlasse ? ` ${extraKlasse}` : ""}`}>
      {eintraege.map((e) => (
        <Link
          key={e.href}
          href={e.href}
          className="inline-flex items-center font-body font-semibold text-[0.9rem] text-dark px-5 py-2.5 rounded-full border border-gray-200 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary-deep"
        >
          {e.label}
        </Link>
      ))}
    </div>
  );
}

// Nummerierte Schrittliste — auf der BuT- und der ZAP-Seite identisch.
export function SchrittListe({ schritte }: { schritte: { titel: string; text: string }[] }) {
  return (
    <ol className="space-y-4">
      {schritte.map((s, i) => (
        <li
          key={s.titel}
          className="flex items-start gap-4 rounded-2xl p-5 md:p-6 bg-white"
          style={{
            border: "1px solid rgba(26,26,46,0.07)",
            boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
          }}
        >
          <span
            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-heading font-extrabold text-sm text-white"
            style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
          >
            {i + 1}
          </span>
          <div>
            <h3 className="font-heading font-bold text-dark text-[1.02rem] mb-1.5" style={{ letterSpacing: "-0.01em" }}>
              {s.titel}
            </h3>
            <p className="font-body text-muted/75 leading-[1.75] text-[0.94rem]">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

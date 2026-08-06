"use client";

import { useState, useRef } from "react";
import { BUSINESS } from "@/lib/data";
import FadeIn from "./FadeIn";

const LEER = { name: "", email: "", phone: "", message: "", consent: false, website: "" };

export default function Contact() {
  const [form, setForm] = useState(LEER);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fehler, setFehler] = useState("");
  // Zeitpunkt des ersten Tastendrucks — die Funktion weist Absendungen unter
  // drei Sekunden ab, weil dort niemand getippt haben kann.
  const startedAt = useRef<number | null>(null);

  function aendern(feld: keyof typeof LEER, wert: string | boolean) {
    if (startedAt.current === null) startedAt.current = Date.now();
    setForm((f) => ({ ...f, [feld]: wert }));
  }

  // Bis 2026-08-04 sprang diese Funktion nur auf mailto: und meldete danach
  // bedingungslos Erfolg — auch wenn sich nie ein Mailprogramm oeffnete
  // (Handy ohne Mailkonto, In-App-Browser von Instagram oder Facebook).
  // Die Felder wurden dabei sofort geleert, die Anfrage war weg und beide
  // Seiten hielten sie fuer zugestellt. Jetzt entscheidet der Server.
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.phone.trim() && !form.email.trim()) {
      setStatus("error");
      setFehler("Bitte Telefonnummer oder E-Mail angeben, sonst können wir nicht antworten.");
      return;
    }
    setStatus("sending");
    setFehler("");

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, startedAt: startedAt.current }),
      });
      const daten = await res.json().catch(() => ({}));

      if (!res.ok || !daten.ok) {
        setStatus("error");
        setFehler(daten.fehler || "Das hat nicht geklappt. Bitte ruf uns kurz an.");
        return;
      }

      // Erst jetzt leeren: vorher waere der getippte Text bei einem Fehler weg.
      setStatus("success");
      setForm(LEER);
      startedAt.current = null;
    } catch {
      setStatus("error");
      setFehler("Keine Verbindung. Bitte ruf uns kurz an oder schreib per WhatsApp.");
    }
  }

  const inputClass =
    "w-full border border-gray-500 rounded-xl px-4 py-3 font-body text-dark text-sm bg-white transition-[border-color,box-shadow] duration-200 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-deep focus:border-primary-deep placeholder:text-gray-500";

  return (
    <section id="kontakt" className="py-28 bg-white border-t-2 border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Jetzt starten
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-dark mb-4">
            Gratis Probestunde buchen
          </h2>
          <p className="font-body text-muted/75 text-lg max-w-xl mx-auto leading-[1.7]">
            Kontaktiere uns. Wir melden uns innerhalb eines Werktages bei dir.
          </p>
        </FadeIn>

        <FadeIn className="grid md:grid-cols-5 gap-6" delay={150}>
          {/* Formular — 3/5 Breite */}
          <div
            className="md:col-span-3 bg-white rounded-3xl p-8"
            style={{
              boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 8px 32px rgba(26,26,46,0.08)",
              border: "1px solid rgba(26,26,46,0.06)",
            }}
          >
            <h3 className="font-heading font-bold text-2xl text-dark mb-6">
              Nachricht senden
            </h3>

            {status === "success" && (
              <div
                className="mb-6 font-body font-medium text-sm px-4 py-3 rounded-xl flex items-start gap-2"
                style={{ background: "rgba(0,170,0,0.08)", color: "#008a00", border: "1px solid rgba(0,170,0,0.15)" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0">
                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Deine Nachricht ist bei uns angekommen. Wir melden uns innerhalb eines Werktages.</span>
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-6 font-body text-sm px-4 py-3 rounded-xl"
                style={{ background: "rgba(220,38,38,0.06)", color: "#b91c1c", border: "1px solid rgba(220,38,38,0.18)" }}
              >
                <p className="font-medium">{fehler}</p>
                <p className="mt-1.5 text-dark/60">
                  Direkt erreichbar:{" "}
                  <a href={`tel:${BUSINESS.phone}`} className="font-semibold text-primary-deep hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>{" "}
                  oder{" "}
                  <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-primary-deep hover:underline">
                    {BUSINESS.email}
                  </a>
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
              {/* label/input haengen ueber id+htmlFor zusammen. Vorher standen
                  die Labels nur daneben — ein Screenreader las "Eingabefeld,
                  Text" ohne Feldnamen (WCAG 2.2 A, 4.1.2 und 3.3.2). */}
              <div>
                <label
                  htmlFor="kontakt-name"
                  className="font-body text-dark/60 text-xs font-semibold block mb-1.5 tracking-wide uppercase"
                >
                  Name *
                </label>
                <input
                  id="kontakt-name"
                  name="name"
                  autoComplete="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => aendern("name", e.target.value)}
                  placeholder="Max Mustermann"
                  className={inputClass}
                  style={{ boxShadow: "0 1px 2px rgba(26,26,46,0.04)" }}
                />
              </div>

              {/* Honigtopf: fuer Menschen unsichtbar, viele Bots fuellen ihn aus. */}
              <div aria-hidden="true" className="absolute w-px h-px -m-px overflow-hidden opacity-0 pointer-events-none">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
                />
              </div>

              {/* Vorher gab es gar kein E-Mail-Feld und die Telefonnummer war
                  freiwillig — eine Anfrage konnte voellig ohne Rueckkanal
                  ankommen. Eines von beiden ist jetzt Pflicht. */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="kontakt-telefon"
                    className="font-body text-dark/60 text-xs font-semibold block mb-1.5 tracking-wide uppercase"
                  >
                    Telefon
                  </label>
                  <input
                    id="kontakt-telefon"
                    name="phone"
                    autoComplete="tel"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => aendern("phone", e.target.value)}
                    placeholder="+49 ..."
                    className={inputClass}
                    style={{ boxShadow: "0 1px 2px rgba(26,26,46,0.04)" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="kontakt-email"
                    className="font-body text-dark/60 text-xs font-semibold block mb-1.5 tracking-wide uppercase"
                  >
                    E-Mail
                  </label>
                  <input
                    id="kontakt-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => aendern("email", e.target.value)}
                    placeholder="name@beispiel.de"
                    className={inputClass}
                    style={{ boxShadow: "0 1px 2px rgba(26,26,46,0.04)" }}
                  />
                </div>
              </div>
              <p className="font-body text-muted/75 text-xs -mt-2">
                Telefon oder E-Mail, damit wir antworten können.
              </p>

              <div>
                <label
                  htmlFor="kontakt-nachricht"
                  className="font-body text-dark/60 text-xs font-semibold block mb-1.5 tracking-wide uppercase"
                >
                  Nachricht *
                </label>
                <textarea
                  id="kontakt-nachricht"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => aendern("message", e.target.value)}
                  placeholder="Welches Fach? Welche Klasse? Was sind eure Ziele?"
                  className={`${inputClass} resize-none`}
                  style={{ boxShadow: "0 1px 2px rgba(26,26,46,0.04)" }}
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  checked={form.consent}
                  onChange={(e) => aendern("consent", e.target.checked)}
                  className="mt-0.5 accent-primary w-4 h-4 shrink-0"
                />
                <span className="font-body text-dark/80 text-xs leading-relaxed group-hover:text-dark/70 transition-[color] duration-200">
                  {/* Vorher nur Text ohne Verweis: eine Einwilligung, deren
                      Gegenstand man nicht aufrufen kann, ist keine informierte
                      Einwilligung im Sinne der DSGVO. */}
                  Ich stimme der Verarbeitung meiner Daten gemäß{" "}
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-primary-deep hover:text-primary-deep"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu. *
                </span>
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full text-white font-body font-bold text-base py-4 rounded-xl transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-deep focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                /* Vorher `#25abd6` mit weisser Schrift: gemessen 2,67:1 auf
                   dem einzigen Absendeknopf der Seite. Verlangt sind 4,5:1,
                   der Knopf ist 16px fett und zaehlt damit nicht als grosser
                   Text. `primary-deep` liegt bei 5,30:1, gleicher Farbton. */
                style={{
                  background: "#177494",
                  boxShadow: "0 2px 8px rgba(23,116,148,0.30), 0 1px 2px rgba(23,116,148,0.20)",
                }}
              >
                {status === "sending" ? "Wird gesendet…" : "Nachricht senden →"}
              </button>
            </form>
          </div>

          {/* Kontaktinfos — 2/5 Breite */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Direkt kontaktieren */}
            <div
              className="bg-white rounded-3xl p-6"
              style={{
                boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 8px 32px rgba(26,26,46,0.08)",
                border: "1px solid rgba(26,26,46,0.06)",
              }}
            >
              <h3 className="font-heading font-bold text-lg text-dark mb-5">
                Direkt kontaktieren
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-[background-color] duration-200 group-hover:bg-primary"
                    style={{ background: "rgba(37,171,214,0.10)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary group-hover:text-white transition-[color] duration-200">
                      <path d="M3 2h3l1.5 3.5-1.5 1a9 9 0 004.5 4.5l1-1.5L15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-dark/80 text-sm group-hover:text-primary-deep transition-[color] duration-200 font-medium">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 group"
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-[background-color] duration-200 group-hover:bg-primary"
                    style={{ background: "rgba(37,171,214,0.10)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary group-hover:text-white transition-[color] duration-200">
                      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1 5l7 4.5L15 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <span className="font-body text-dark/80 text-sm group-hover:text-primary-deep transition-[color] duration-200 font-medium break-all">
                    {BUSINESS.email}
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(37,171,214,0.10)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                      <path d="M8 1.5a5 5 0 015 5c0 3-5 8.5-5 8.5S3 9.5 3 6.5a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </span>
                  <div>
                    <div className="font-body text-dark/80 text-sm font-medium">
                      {BUSINESS.addresses.lernort.street}
                    </div>
                    <div className="font-body text-muted/75 text-xs mt-0.5">
                      {BUSINESS.addresses.lernort.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div
              className="bg-white rounded-3xl p-6 flex-1"
              style={{
                boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 8px 32px rgba(26,26,46,0.08)",
                border: "1px solid rgba(26,26,46,0.06)",
              }}
            >
              <h3 className="font-heading font-bold text-lg text-dark mb-5">
                Öffnungszeiten
              </h3>
              <div className="flex flex-col gap-2.5">
                {BUSINESS.hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center font-body text-sm">
                    <span className="text-dark/80">{h.day}</span>
                    <span
                      className={`font-medium tabular-nums ${
                        h.time === "Geschlossen"
                          ? "text-muted/75"
                          : "text-dark/80"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center font-body text-sm">
                  <span className="text-dark/80">Kundenservice</span>
                  <span className="font-semibold text-primary-deep tabular-nums">{BUSINESS.serviceHours}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

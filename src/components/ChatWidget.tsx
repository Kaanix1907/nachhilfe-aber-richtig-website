"use client";

import { useState } from "react";

const LEXI_URL = "https://lexi.nachhilfe-aber-richtig.de/chat";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 z-50 w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/10"
          style={{
            background: "linear-gradient(160deg,#0f0c29 0%,#2d1f5e 55%,#25abd6 140%)",
            boxShadow: "0 20px 60px rgba(15,12,41,0.45), 0 4px 16px rgba(0,0,0,0.25)",
          }}
        >
          <div className="px-5 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-heading font-extrabold text-white text-base"
                style={{
                  background: "linear-gradient(135deg,#25abd6,#655c9e)",
                  boxShadow: "0 4px 14px rgba(37,171,214,0.35)",
                }}
              >
                L
              </div>
              <div>
                <div className="font-heading font-bold text-white text-sm leading-tight">Lexi</div>
                <div className="font-body text-white/55 text-[11px]">KI-Lernhilfe</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-[color] duration-200 w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/5"
              aria-label="Schließen"
            >
              ✕
            </button>
          </div>

          <div className="px-5 py-5">
            <p className="font-body text-white/90 text-[14px] leading-[1.6] mb-4">
              <span className="font-semibold text-white">Hausaufgaben-Hilfe rund um die Uhr.</span> Lexi erklärt dir Mathe, Deutsch, Englisch und alle anderen Fächer — geduldig, Schritt für Schritt.
            </p>

            <ul className="space-y-2 mb-5">
              {[
                "Fragen zu jedem Schulfach",
                "Formeln & Lösungswege erklärt",
                "Gratis — keine Kreditkarte nötig",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 font-body text-white/75 text-[13px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="shrink-0 mt-0.5"
                    style={{ color: "#25abd6" }}
                  >
                    <path
                      d="M16 6L8 14l-4-4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={LEXI_URL}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-body font-bold text-white text-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{
                background: "linear-gradient(135deg,#25abd6,#655c9e)",
                boxShadow: "0 6px 20px rgba(37,171,214,0.45)",
              }}
            >
              Lexi jetzt öffnen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <p className="font-body text-white/35 text-[11px] text-center mt-3 leading-relaxed">
              Powered by Claude · lexi.nachhilfe-aber-richtig.de
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 pl-3 pr-4 py-3 rounded-full text-white font-body font-semibold text-sm transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
        style={{
          background: "linear-gradient(135deg,#25abd6,#655c9e)",
          boxShadow: "0 8px 28px rgba(37,171,214,0.45), 0 2px 8px rgba(0,0,0,0.15)",
        }}
        aria-label={isOpen ? "Lexi-Hinweis schließen" : "Lexi — KI-Lernhilfe öffnen"}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-[15px]"
          style={{ background: "rgba(255,255,255,0.18)" }}
        >
          {isOpen ? "✕" : "L"}
        </div>
        <span className="hidden sm:inline">{isOpen ? "Schließen" : "Lexi — KI-Lernhilfe"}</span>
      </button>
    </>
  );
}

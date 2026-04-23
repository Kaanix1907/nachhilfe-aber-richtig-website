import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const LEXI_URL = "https://lexi.nachhilfe-aber-richtig.de";
const PAGE_URL = "https://nachhilfe-aber-richtig.de/lexi";

export const metadata: Metadata = {
  title: "Lexi — KI-Lernhilfe für Schüler | Hausaufgaben-Hilfe mit KI",
  description:
    "Lexi ist die kostenlose KI-Lernhilfe von Nachhilfe, aber richtig!. Rund um die Uhr Hausaufgaben-Hilfe in Mathe, Deutsch, Englisch, Physik & allen Fächern. Sokratisch erklärt — für echten Lernerfolg statt Abschreiben.",
  keywords: [
    "KI Nachhilfe",
    "KI Lernhilfe",
    "Schul KI",
    "Hausaufgaben KI",
    "Hausaufgaben Hilfe KI",
    "KI für Schüler",
    "Chatbot Schule",
    "Mathe KI",
    "Deutsch KI",
    "Englisch KI",
    "KI Hausaufgaben",
    "KI Lerntool",
    "kostenlose KI Schule",
    "ChatGPT für Schüler",
    "KI Tutor",
    "digitale Nachhilfe",
    "Hausaufgaben Chatbot",
    "KI Lernassistent",
    "Lexi KI",
    "Nachhilfe KI Duisburg",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: PAGE_URL,
    siteName: "Nachhilfe, aber richtig!",
    title: "Lexi — KI-Lernhilfe für Schüler",
    description:
      "Rund um die Uhr Hausaufgaben-Hilfe per KI. Geduldig, pädagogisch, kostenlos. Für alle Fächer und Klassenstufen.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    title: "Alle Schulfächer",
    description: "Mathe, Deutsch, Englisch, Physik, Chemie, Bio, Geschichte — Lexi hilft in jedem Fach von Klasse 1 bis Abitur.",
    icon: "📚",
  },
  {
    title: "Pädagogisch statt Spickzettel",
    description: "Lexi erklärt Lösungswege Schritt für Schritt. Keine fertigen Antworten zum Abschreiben — sondern echtes Verstehen.",
    icon: "🧠",
  },
  {
    title: "24/7 verfügbar",
    description: "Am Abend noch eine Aufgabe? Lexi antwortet sofort — ohne Wartezeit, ohne Termin, wann immer du sie brauchst.",
    icon: "🌙",
  },
  {
    title: "Formeln & LaTeX",
    description: "Mathematische Formeln und wissenschaftliche Notationen werden korrekt dargestellt und erklärt.",
    icon: "∑",
  },
  {
    title: "Komplett kostenlos",
    description: "Keine Kreditkarte, kein Abo. Einfach registrieren und loslegen — so lange du willst.",
    icon: "🎁",
  },
  {
    title: "Persönlicher Verlauf",
    description: "Deine Chats werden gespeichert. Komm später zurück und arbeite mit deinen früheren Erklärungen weiter.",
    icon: "💬",
  },
];

const useCases = [
  { subject: "Mathe", example: "\"Erklär mir den Satz des Pythagoras mit einem Beispiel\"" },
  { subject: "Deutsch", example: "\"Wie schreibe ich eine Inhaltsangabe?\"" },
  { subject: "Englisch", example: "\"Was ist der Unterschied zwischen Present Perfect und Past Simple?\"" },
  { subject: "Physik", example: "\"Was sind die Newton'schen Gesetze?\"" },
];

export default function LexiPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative md:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pb-24"
          style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #25abd6 140%)" }}
        >
          <div
            className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,171,214,0.3) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(101,92,158,0.25) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div
              className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(37,171,214,0.15)",
                border: "1px solid rgba(37,171,214,0.4)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full font-heading font-extrabold text-white text-[11px]"
                style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
              >
                L
              </span>
              <span className="font-body text-[12px] md:text-[13px] font-semibold tracking-wide text-white">
                <span style={{ color: "#25abd6" }}>NEU</span> · Jetzt kostenlos ausprobieren
              </span>
            </div>

            <h1
              className="font-heading text-[2.2rem] sm:text-[3rem] md:text-[4rem] font-extrabold text-white mb-5"
              style={{ lineHeight: 1.05, letterSpacing: "-0.03em" }}
            >
              Lexi — deine{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#25abd6,#a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                KI-Lernhilfe
              </span>
            </h1>

            <p className="font-body text-base md:text-xl text-white/70 mb-3 leading-[1.65] max-w-2xl mx-auto">
              Hausaufgaben-Hilfe rund um die Uhr. Lexi erklärt dir jede Aufgabe Schritt für Schritt — in allen Fächern, von Klasse 1 bis Abitur.
            </p>

            <p className="font-body text-sm md:text-base text-white/40 mb-8 md:mb-10">
              Geduldig. Pädagogisch. Kostenlos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <a
                href={LEXI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-bold text-white text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#25abd6,#655c9e)",
                  boxShadow: "0 8px 28px rgba(37,171,214,0.5)",
                }}
              >
                Lexi jetzt öffnen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              <a
                href="#wie-funktioniert"
                className="inline-flex items-center gap-2 font-body font-semibold text-white text-base px-8 py-4 rounded-full transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Wie funktioniert Lexi?
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/50 font-body text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <span style={{ color: "#25abd6" }}>✓</span> Kostenlos
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#25abd6" }}>✓</span> Keine Kreditkarte
              </div>
              <div className="flex items-center gap-2">
                <span style={{ color: "#25abd6" }}>✓</span> Powered by Claude
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="wie-funktioniert" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block px-3 py-1 rounded-full mb-4 font-body text-[11px] font-bold tracking-widest uppercase"
                style={{ background: "rgba(37,171,214,0.1)", color: "#25abd6" }}>
                Was Lexi kann
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.02em" }}>
                Dein persönlicher Lernassistent
              </h2>
              <p className="font-body text-muted text-base md:text-lg max-w-2xl mx-auto leading-[1.7]">
                Wann immer du eine Frage hast — Lexi ist da. Mit dem Wissen modernster KI und dem Fokus auf echtes Verstehen statt nur Ergebnisse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl transition-[transform,box-shadow] duration-200 hover:-translate-y-1"
                  style={{
                    background: "white",
                    border: "1px solid rgba(37,171,214,0.15)",
                    boxShadow: "0 4px 20px rgba(26,26,46,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ background: "linear-gradient(135deg,rgba(37,171,214,0.15),rgba(101,92,158,0.15))" }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-bold text-dark text-lg mb-2">{f.title}</h3>
                  <p className="font-body text-muted text-sm leading-[1.6]">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use-Cases */}
        <section className="py-16 md:py-24" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
                So fragst du Lexi
              </h2>
              <p className="font-body text-muted text-base md:text-lg">Einfach eine Frage stellen — egal in welchem Fach.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {useCases.map((u, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white flex items-start gap-4"
                  style={{ border: "1px solid rgba(26,26,46,0.06)", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-extrabold text-white text-xs"
                    style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
                  >
                    {u.subject.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-dark text-sm mb-1">{u.subject}</div>
                    <div className="font-body text-muted text-sm italic leading-[1.6]">{u.example}</div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{ background: "linear-gradient(135deg, #0f0c29, #2d1f5e)" }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                Bereit, Lexi auszuprobieren?
              </h3>
              <p className="font-body text-white/70 mb-6 max-w-xl mx-auto">
                Kostenlos registrieren, sofort loslegen. Keine Kreditkarte, keine versteckten Kosten.
              </p>
              <a
                href={LEXI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-bold text-white text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#25abd6,#655c9e)",
                  boxShadow: "0 8px 28px rgba(37,171,214,0.5)",
                }}
              >
                Lexi öffnen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ / Schluss */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark mb-10 text-center" style={{ letterSpacing: "-0.02em" }}>
              Häufige Fragen
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "Was kostet Lexi?",
                  a: "Lexi ist komplett kostenlos. Du brauchst nur eine kostenlose Registrierung — keine Kreditkarte, kein Abo, keine versteckten Gebühren.",
                },
                {
                  q: "Ersetzt Lexi echte Nachhilfe?",
                  a: "Nein. Lexi ist eine Ergänzung — perfekt für schnelle Fragen und Hausaufgaben-Hilfe zwischendurch. Für strukturiertes Lernen, Klausurvorbereitung und individuelle Betreuung bieten wir weiterhin unsere persönliche Nachhilfe an.",
                },
                {
                  q: "Für welche Klassenstufen ist Lexi geeignet?",
                  a: "Lexi ist für alle Schüler:innen von Klasse 1 bis zum Abitur konzipiert. Die Erklärungen werden automatisch an das Niveau angepasst.",
                },
                {
                  q: "Welche Fächer deckt Lexi ab?",
                  a: "Lexi hilft in allen Schulfächern — Mathe, Deutsch, Englisch, Physik, Chemie, Biologie, Geschichte, Erdkunde, Politik, Wirtschaft und mehr.",
                },
                {
                  q: "Gibt Lexi fertige Lösungen?",
                  a: "Nein. Lexi erklärt den Lösungsweg Schritt für Schritt, damit du das Thema wirklich verstehst. Bei erkennbaren Klausuraufgaben verweigert Lexi die Antwort — das ist kein Cheating-Tool.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group p-5 rounded-xl transition-[box-shadow] duration-200 cursor-pointer"
                  style={{ background: "#f8fafc", border: "1px solid rgba(26,26,46,0.06)" }}
                >
                  <summary className="font-heading font-bold text-dark text-base md:text-lg flex items-center justify-between list-none">
                    {faq.q}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className="font-body text-muted text-sm md:text-base mt-3 leading-[1.7]">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* JSON-LD für SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Lexi — KI-Lernhilfe",
            applicationCategory: "EducationalApplication",
            applicationSubCategory: "AI Tutor",
            operatingSystem: "Web",
            url: LEXI_URL,
            description:
              "KI-basierte Lernhilfe für Schüler von Klasse 1 bis Abitur. Erklärt Hausaufgaben Schritt für Schritt, pädagogisch und geduldig.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
            provider: {
              "@type": "EducationalOrganization",
              name: "Nachhilfe, aber richtig!",
              url: "https://nachhilfe-aber-richtig.de",
            },
            inLanguage: "de-DE",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
            },
            featureList: features.map((f) => f.title),
          }),
        }}
      />

      <Footer />
      <ChatWidget />
    </>
  );
}

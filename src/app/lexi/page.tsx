import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import FadeIn from "@/components/FadeIn";

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
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 5.5C4 4.67 4.67 4 5.5 4H13v17.5H5.5c-.83 0-1.5-.67-1.5-1.5V5.5zM13 4h7.5c.83 0 1.5.67 1.5 1.5V20c0 .83-.67 1.5-1.5 1.5H13" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 9h1.5M8 13h1.5M16.5 9H18M16.5 13H18" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Pädagogisch statt Spickzettel",
    description: "Lexi erklärt Lösungswege Schritt für Schritt. Keine fertigen Antworten zum Abschreiben — sondern echtes Verstehen.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 3v3M13 20v3M23 13h-3M6 13H3M19.36 6.64l-2.12 2.12M8.76 17.24l-2.12 2.12M19.36 19.36l-2.12-2.12M8.76 8.76L6.64 6.64" stroke="#a78bfa" strokeWidth="1.7" strokeLinecap="round"/>
        <circle cx="13" cy="13" r="4.5" stroke="#a78bfa" strokeWidth="1.7"/>
      </svg>
    ),
  },
  {
    title: "Rund um die Uhr",
    description: "Am Abend noch eine Aufgabe? Lexi antwortet sofort — ohne Wartezeit, ohne Termin, wann immer du sie brauchst.",
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="10" stroke="#25abd6" strokeWidth="1.7"/>
        <path d="M13 7v6l4 2.5" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Formeln & LaTeX",
    description: "Mathematische Formeln und wissenschaftliche Notationen werden korrekt dargestellt und Schritt für Schritt erklärt.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M5 6h16M5 6l3 14h10l3-14M10 10v6M16 10v6M13 10v6" stroke="#a78bfa" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Komplett kostenlos",
    description: "Keine Kreditkarte, kein Abo. Einfach registrieren und sofort loslegen — so lange du willst.",
    color: "#00aa00",
    bg: "rgba(0,170,0,0.10)",
    border: "rgba(0,170,0,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 13l5 5L22 6" stroke="#00aa00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Persönlicher Verlauf",
    description: "Deine Chats werden gespeichert. Komm später zurück und arbeite mit deinen früheren Erklärungen weiter.",
    color: "#25abd6",
    bg: "rgba(37,171,214,0.12)",
    border: "rgba(37,171,214,0.22)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M4 7a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3h-6l-5 4v-4H7a3 3 0 01-3-3V7z" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 10h8M9 13h5" stroke="#25abd6" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const useCases = [
  { subject: "Mathe", example: "Erklär mir den Satz des Pythagoras mit einem Beispiel" },
  { subject: "Deutsch", example: "Wie schreibe ich eine Inhaltsangabe?" },
  { subject: "Englisch", example: "Unterschied zwischen Present Perfect und Past Simple?" },
  { subject: "Physik", example: "Was sind die Newton'schen Gesetze?" },
];

const faqs = [
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
];

export default function LexiPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section
          className="relative md:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 md:pb-24"
          style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #1e3a4f 100%)" }}
        >
          <div
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(101,92,158,0.35) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,171,214,0.15) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center w-full">
            <div
              className="inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full mb-6 md:mb-8"
              style={{
                background: "rgba(37,171,214,0.12)",
                border: "1px solid rgba(37,171,214,0.35)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="inline-flex items-center justify-center w-6 h-6 rounded-full font-heading font-extrabold text-white text-[11px]"
                style={{
                  background: "linear-gradient(135deg,#25abd6,#655c9e)",
                  boxShadow: "0 2px 8px rgba(37,171,214,0.5)",
                }}
              >
                L
              </span>
              <span className="font-body text-[12px] md:text-[13px] font-semibold tracking-wide text-white">
                <span style={{ color: "#25abd6" }}>NEU</span> · Jetzt kostenlos ausprobieren
              </span>
            </div>

            <h1
              className="font-heading text-[2rem] sm:text-[2.8rem] md:text-[3.75rem] font-extrabold text-white mb-4 md:mb-6"
              style={{ lineHeight: 1.08, letterSpacing: "-0.03em" }}
            >
              Lexi — deine KI-Lernhilfe
            </h1>

            <p className="font-body text-base md:text-xl text-white/65 mb-2 leading-[1.7] max-w-2xl mx-auto">
              Hausaufgaben-Hilfe rund um die Uhr. Lexi erklärt dir jede Aufgabe Schritt für Schritt — in{" "}
              <span className="font-semibold text-white">allen Fächern, von Klasse 1 bis Abitur</span>.
            </p>

            <p className="font-body text-sm md:text-base text-white/35 mb-8 md:mb-10 tracking-wide">
              Geduldig · pädagogisch · kostenlos
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-10 md:mb-12">
              <a
                href={LEXI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#25abd6,#655c9e)",
                  boxShadow: "0 6px 24px rgba(37,171,214,0.5)",
                }}
              >
                Lexi jetzt öffnen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#wie-funktioniert"
                className="inline-flex items-center justify-center gap-2 font-body font-semibold text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4 rounded-full text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Wie funktioniert Lexi?
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/40 font-body text-xs md:text-sm tracking-wide">
              <div className="flex items-center gap-1.5">
                <span style={{ color: "#25abd6" }}>✓</span> Kostenlos
              </div>
              <div className="flex items-center gap-1.5">
                <span style={{ color: "#25abd6" }}>✓</span> Keine Kreditkarte
              </div>
              <div className="flex items-center gap-1.5">
                <span style={{ color: "#25abd6" }}>✓</span> Powered by Claude
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="wie-funktioniert" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12 md:mb-16">
                <div
                  className="inline-block px-3 py-1 rounded-full mb-4 font-body text-[11px] font-bold tracking-[0.15em] uppercase"
                  style={{ background: "rgba(37,171,214,0.1)", color: "#25abd6" }}
                >
                  Was Lexi kann
                </div>
                <h2
                  className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4"
                  style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
                >
                  Dein persönlicher Lernassistent
                </h2>
                <p className="font-body text-muted text-base md:text-lg max-w-2xl mx-auto leading-[1.7]">
                  Wann immer du eine Frage hast — Lexi ist da. Mit dem Wissen modernster KI und dem Fokus auf echtes Verstehen statt nur Ergebnisse.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {features.map((f, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <div
                    className="h-full p-6 md:p-7 rounded-2xl bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
                    style={{
                      border: `1px solid ${f.border}`,
                      boxShadow: "0 4px 20px rgba(26,26,46,0.05)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: f.bg }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="font-heading font-bold text-dark text-lg md:text-xl mb-2" style={{ letterSpacing: "-0.01em" }}>
                      {f.title}
                    </h3>
                    <p className="font-body text-muted text-sm md:text-[15px] leading-[1.65]">{f.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Use-Cases */}
        <section className="py-16 md:py-24" style={{ background: "#f8fafc" }}>
          <div className="max-w-5xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-10 md:mb-14">
                <div
                  className="inline-block px-3 py-1 rounded-full mb-4 font-body text-[11px] font-bold tracking-[0.15em] uppercase"
                  style={{ background: "rgba(101,92,158,0.1)", color: "#655c9e" }}
                >
                  Beispiele
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
                  So fragst du Lexi
                </h2>
                <p className="font-body text-muted text-base md:text-lg">Einfach eine Frage stellen — egal in welchem Fach.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-12">
              {useCases.map((u, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div
                    className="h-full p-5 rounded-2xl bg-white flex items-start gap-4"
                    style={{ border: "1px solid rgba(26,26,46,0.06)", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-heading font-extrabold text-white text-sm"
                      style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)", boxShadow: "0 4px 12px rgba(37,171,214,0.3)" }}
                    >
                      {u.subject.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-heading font-bold text-dark text-sm md:text-base mb-1.5">{u.subject}</div>
                      <div className="font-body text-muted text-sm md:text-[15px] italic leading-[1.6]">
                        &ldquo;{u.example}&rdquo;
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div
                className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 60%, #1e3a4f 100%)" }}
              >
                <div
                  className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(37,171,214,0.25) 0%, transparent 70%)" }}
                />
                <div className="relative z-10">
                  <h3 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                    Bereit, Lexi auszuprobieren?
                  </h3>
                  <p className="font-body text-white/65 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base leading-[1.7]">
                    Kostenlos registrieren, sofort loslegen. Keine Kreditkarte, keine versteckten Kosten.
                  </p>
                  <a
                    href={LEXI_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body font-bold text-white text-sm md:text-base px-7 md:px-8 py-3.5 md:py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg,#25abd6,#655c9e)",
                      boxShadow: "0 8px 28px rgba(37,171,214,0.5)",
                    }}
                  >
                    Lexi öffnen
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-10 md:mb-14">
                <div
                  className="inline-block px-3 py-1 rounded-full mb-4 font-body text-[11px] font-bold tracking-[0.15em] uppercase"
                  style={{ background: "rgba(37,171,214,0.1)", color: "#25abd6" }}
                >
                  FAQ
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark" style={{ letterSpacing: "-0.02em" }}>
                  Häufige Fragen
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FadeIn key={i} delay={i * 40}>
                  <details
                    className="group p-5 md:p-6 rounded-xl transition-[box-shadow] duration-200 cursor-pointer"
                    style={{ background: "#f8fafc", border: "1px solid rgba(26,26,46,0.06)" }}
                  >
                    <summary className="font-heading font-bold text-dark text-base md:text-lg flex items-center justify-between list-none gap-4">
                      <span className="flex-1">{faq.q}</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                        style={{ color: "#25abd6" }}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <p className="font-body text-muted text-sm md:text-base mt-3 leading-[1.7]">{faq.a}</p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

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
            audience: { "@type": "EducationalAudience", educationalRole: "student" },
            featureList: features.map((f) => f.title),
          }),
        }}
      />

      <Footer />
      <ChatWidget />
    </>
  );
}

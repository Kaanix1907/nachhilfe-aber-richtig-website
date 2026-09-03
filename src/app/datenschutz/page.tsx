import { BUSINESS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Section, DiensteUndHosting, RechteUndFristen } from "./datenschutz.parts";

// Nur "Datenschutz": das Template im Root-Layout haengt den Firmennamen an.
export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://nachhilfe-aber-richtig.de/datenschutz" },
};


export default function Datenschutz() {
  const { owner, addresses, email } = BUSINESS;
  const addr = addresses.geschaeft;

  return (
    <>
      <Navbar />
      <main id="inhalt" className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
              Rechtliches
            </span>
            <h1 className="font-heading text-4xl font-extrabold text-dark" style={{ letterSpacing: "-0.03em" }}>
              Datenschutzerklärung
            </h1>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              border: "1px solid rgba(26,26,46,0.07)",
              boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 8px 32px rgba(26,26,46,0.06)",
            }}
          >
            <Section title="1. Verantwortlicher">
              <p>
                Verantwortlicher im Sinne der DSGVO ist:
              </p>
              <p className="font-semibold text-dark">
                {owner}<br />
                {addr.street}<br />
                {addr.city}<br />
                E-Mail: <a href={`mailto:${email}`} className="text-primary-deep hover:underline">{email}</a>
              </p>
            </Section>

            <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme
                (Kontaktformular, E-Mail, Telefon) freiwillig mitteilen. Dazu gehören insbesondere: Name,
                Telefonnummer, E-Mail-Adresse und Nachrichteninhalt.
              </p>
              <p>
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte
                weitergegeben, außer dies ist zur Erfüllung des Vertrags erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </Section>

            <DiensteUndHosting />

            <RechteUndFristen />

            <Section title="12. Aktualität">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 3. September 2026. Durch die
                Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es
                notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import { BUSINESS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Nachhilfe, aber richtig!",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div className="font-body text-muted/70 leading-[1.8] text-[0.95rem] space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function Datenschutz() {
  const { owner, addresses, email } = BUSINESS;
  const addr = addresses.geschaeft;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-primary/8 text-primary font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
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
                E-Mail: <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
              </p>
            </Section>

            <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktaufnahme
                (Kontaktformular, E-Mail, Telefon) freiwillig mitteilen. Dazu gehören insbesondere: Name,
                Telefonnummer und Nachrichteninhalt.
              </p>
              <p>
                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte
                weitergegeben, außer dies ist zur Erfüllung des Vertrags erforderlich oder gesetzlich vorgeschrieben.
              </p>
            </Section>

            <Section title="3. Kontaktformular">
              <p>
                Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben aus dem Formular
                (Name, Telefon, Nachricht) zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung).
              </p>
            </Section>

            <Section title="4. Google Places API">
              <p>
                Wir verwenden die Google Places API (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA),
                um Bewertungen unseres Unternehmens auf der Website anzuzeigen. Dabei werden Daten an Google-Server
                übertragen. Google kann diese Daten seinen eigenen Datenschutzbestimmungen entsprechend verarbeiten.
              </p>
              <p>
                Weitere Informationen:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  policies.google.com/privacy
                </a>
              </p>
            </Section>

            <Section title="5. Hosting">
              <p>
                Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet.
                Beim Aufruf der Website werden automatisch Server-Logfiles (IP-Adresse, Browsertyp, Referrer,
                Datum/Uhrzeit) erfasst. Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und
                nach spätestens 30 Tagen gelöscht.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                Diese Website setzt keine Tracking- oder Marketing-Cookies ein. Es werden ausschließlich
                technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
              </p>
            </Section>

            <Section title="7. Ihre Rechte">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
              </p>
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen
                das Recht auf Beschwerde bei einer Aufsichtsbehörde zu. Zuständig ist die{" "}
                <span className="font-semibold text-dark">Landesbeauftragte für Datenschutz und Informationsfreiheit NRW</span>.
              </p>
            </Section>

            <Section title="8. Aktualität">
              <p>
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die
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

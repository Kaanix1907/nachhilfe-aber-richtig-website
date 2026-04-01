import { BUSINESS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Nachhilfe, aber richtig!",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div className="font-body text-muted/70 leading-[1.8] text-[0.95rem] space-y-1">
        {children}
      </div>
    </div>
  );
}

export default function Impressum() {
  const { owner, addresses, email, phone, phoneDisplay } = BUSINESS;
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
              Impressum
            </h1>
          </div>

          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              border: "1px solid rgba(26,26,46,0.07)",
              boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 8px 32px rgba(26,26,46,0.06)",
            }}
          >
            <Section title="Angaben gemäß § 5 TMG">
              <p className="font-semibold text-dark">{owner}</p>
              <p>{addr.street}</p>
              <p>{addr.city}</p>
            </Section>

            <Section title="Kontakt">
              <p>Telefon: <a href={`tel:${phone}`} className="text-primary hover:underline">{phoneDisplay}</a></p>
              <p>E-Mail: <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a></p>
            </Section>

            <Section title="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
              <p className="font-semibold text-dark">{owner}</p>
              <p>{addr.street}</p>
              <p>{addr.city}</p>
            </Section>

            <Section title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </Section>

            <Section title="Haftung für Links">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

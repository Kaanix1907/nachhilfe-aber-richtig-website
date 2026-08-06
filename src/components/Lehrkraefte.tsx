import FadeIn from "./FadeIn";

// Bewusst ohne Namen und Fotos (Owner-Entscheid 2026-08-04): Studienkreis und
// Schuelerhilfe listen je vier Lehrkraefte namentlich, das braeuchte hier aber
// das Einverstaendnis jeder einzelnen Person. Stattdessen wird ausgefuehrt,
// was bisher nur als Schlagwort dastand ("Gepruefte Lehramtsstudenten").
//
// Jeder Punkt hier ist eine Aussage, die die Website ohnehin schon macht —
// nur belegt statt behauptet. Nichts hinzuerfunden.

const PUNKTE = [
  {
    titel: "Erweitertes Führungszeugnis, vor der ersten Stunde",
    text: "Wer bei uns unterrichtet, legt ein erweitertes Führungszeugnis vor — nicht irgendwann, sondern bevor er zum ersten Mal mit einem Kind in einem Raum sitzt. Für uns ist das keine Formalie, sondern die Grundbedingung.",
  },
  {
    titel: "Lehramtsstudierende und Lehrkräfte, keine Aushilfen",
    text: "Unsere Leute kommen aus dem Lehramt oder unterrichten bereits. Sie wissen nicht nur, wie der Stoff geht, sondern auch, wie man ihn jemandem erklärt, der ihn gerade nicht versteht. Das ist ein Unterschied, den man in der ersten Stunde merkt.",
  },
  {
    titel: "Niemand unterrichtet ein Fach, das er nicht sicher beherrscht",
    text: "Wer Mathematik gibt, gibt Mathematik. Wir besetzen keine Stunde mit jemandem, der sich das Thema am Abend vorher angelesen hat — auch dann nicht, wenn es terminlich einfacher wäre.",
  },
  {
    titel: "Drei bis fünf Kinder pro Gruppe",
    text: "Klein genug, dass jedes Kind drankommt und niemand sich verstecken kann. Groß genug, dass Nachfragen normal wird und nicht peinlich. Wer mehr Ruhe braucht, bekommt Einzelunterricht.",
  },
];

export default function Lehrkraefte() {
  return (
    <section id="lehrkraefte" className="relative py-24 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <FadeIn className="mb-12">
          <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase border border-primary/12">
            Unsere Lehrkräfte
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.03em" }}>
            Wer bei uns unterrichtet
          </h2>
          <p className="font-body text-muted/75 text-base md:text-lg leading-[1.7]">
            Sie geben Ihr Kind in fremde Hände. Deshalb hier ausführlich, wem genau.
          </p>
        </FadeIn>

        <div className="grid gap-4">
          {PUNKTE.map((p, i) => (
            <FadeIn key={p.titel} delay={i * 80} direction="up">
              <div
                className="flex items-start gap-4 rounded-2xl p-6 bg-white"
                style={{
                  border: "1px solid rgba(26,26,46,0.07)",
                  boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
                }}
              >
                <span
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(37,171,214,0.10)" }}
                  aria-hidden="true"
                >
                  <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 9.5l3.5 3.5 7.5-8" stroke="#25abd6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading font-bold text-dark text-[1.04rem] mb-2" style={{ letterSpacing: "-0.01em" }}>
                    {p.titel}
                  </h3>
                  <p className="font-body text-muted/75 leading-[1.8] text-[0.95rem]">{p.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

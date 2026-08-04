import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoPageHero from "./SeoPageHero";
import FadeIn from "./FadeIn";
import { BUSINESS } from "@/lib/data";
import { FAECHER, findOrt, type OrtPage } from "@/lib/seo-pages";

function Block({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn className="mb-14" direction="up">
      {kicker && (
        <span className="inline-block bg-primary/8 text-primary-deep font-body font-semibold text-xs px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-primary/12">
          {kicker}
        </span>
      )}
      <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-dark mb-4" style={{ letterSpacing: "-0.025em" }}>
        {title}
      </h2>
      <div className="font-body text-muted/70 leading-[1.8] text-[0.97rem] space-y-4">{children}</div>
    </FadeIn>
  );
}

export default function OrtSeite({ ort }: { ort: OrtPage }) {
  const nachbarn = ort.nachbarn.map(findOrt).filter((o): o is OrtPage => Boolean(o));

  return (
    <>
      <Navbar />
      <main>
        <SeoPageHero
          kicker={`Standort ${ort.name}`}
          h1={`Nachhilfe in ${ort.langName}`}
          lead={`Einzel- und Gruppennachhilfe in allen Fächern, von Klasse 1 bis zum Abitur. Unser Lernort liegt in der ${BUSINESS.addresses.lernort.street}, ${BUSINESS.addresses.lernort.city}.`}
          breadcrumb={`Nachhilfe ${ort.name}`}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Block kicker="Überblick" title={`Nachhilfe für Schüler aus ${ort.name}`}>
              {ort.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </Block>

            <Block kicker="Fächer" title={`Welche Fächer wir in ${ort.name} unterrichten`}>
              <p>
                Wir decken die Hauptfächer und die Naturwissenschaften ab. Zu jedem Fach steht,
                woran es erfahrungsgemäß hakt und wie wir es angehen:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {FAECHER.map((fach) => (
                  <Link
                    key={fach.slug}
                    href={`/nachhilfe/${fach.slug}`}
                    className="group flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/25"
                    style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)" }}
                  >
                    <span className="font-heading font-bold text-[0.98rem] text-dark group-hover:text-primary transition-[color] duration-300">
                      {fach.name}
                    </span>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 transition-[opacity,transform] duration-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </Block>

            <Block kicker="Unterrichtsformen" title={`So läuft der Unterricht ab`}>
              <p>
                <strong className="text-dark font-semibold">Kleingruppe mit drei bis fünf Schülern.</strong>{" "}
                Die häufigste Form und das beste Preis-Leistungs-Verhältnis. Jedes Kind kommt dran,
                gleichzeitig lernt es, Fragen vor anderen zu stellen.
              </p>
              <p>
                <strong className="text-dark font-semibold">Einzelunterricht.</strong>{" "}
                Wenn größere Lücken aufzuholen sind, eine Prüfung ansteht oder ein Kind in der
                Gruppe untergeht. Das gesamte Tempo richtet sich nach einem einzigen Schüler.
              </p>
              <p>
                <strong className="text-dark font-semibold">Onlinenachhilfe.</strong>{" "}
                Gleiche Lehrkräfte, gleiches Konzept, kein Anfahrtsweg. Sinnvoll bei engem
                Nachmittag, weiterem Wohnort oder Krankheit.
              </p>
              <p>
                Unterrichtet wird von geprüften Lehramtsstudierenden und Lehrkräften — alle mit
                erweitertem Führungszeugnis.
              </p>
            </Block>

            <Block kicker="Anfahrt" title={`So finden Sie uns von ${ort.name} aus`}>
              <p>{ort.anfahrt}</p>
              <div
                className="rounded-2xl p-6 mt-2"
                style={{
                  border: "1px solid rgba(26,26,46,0.07)",
                  boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 8px 24px rgba(26,26,46,0.05)",
                }}
              >
                <p className="font-heading font-bold text-dark text-base mb-2">{BUSINESS.name}</p>
                <p className="text-[0.93rem]">
                  {BUSINESS.addresses.lernort.street}
                  <br />
                  {BUSINESS.addresses.lernort.city}
                </p>
                <p className="text-[0.93rem] mt-3">
                  Montag bis Freitag, 13:00–17:00 Uhr
                  <br />
                  <a href={`tel:${BUSINESS.phone}`} className="text-primary-deep hover:underline">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
              </div>
            </Block>

            <Block kicker="Förderung" title={`Kostenlose Lernförderung über Bildung und Teilhabe`}>
              <p>
                Familien, die Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Leistungen nach
                dem Asylbewerberleistungsgesetz beziehen, haben Anspruch auf außerschulische
                Lernförderung. Die Kosten trägt dann das Amt, nicht die Familie.
              </p>
              <p>
                Wir rechnen direkt mit dem Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab
                und helfen beim Antrag — inklusive der Formulare, die der Anbieter ausfüllen muss.
              </p>
              <Link
                href="/bildung-und-teilhabe"
                className="inline-flex items-center gap-2 font-body font-semibold text-primary-deep text-[0.97rem] hover:gap-3 transition-[gap] duration-200"
              >
                Antrag auf Lernförderung Schritt für Schritt
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Block>

            {nachbarn.length > 0 && (
              <Block kicker="In der Nähe" title="Nachhilfe in den Nachbarorten">
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {nachbarn.map((n) => (
                    <Link
                      key={n.slug}
                      href={`/nachhilfe/${n.slug}`}
                      className="group flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/25"
                      style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)" }}
                    >
                      <span className="font-heading font-bold text-[0.98rem] text-dark group-hover:text-primary transition-[color] duration-300">
                        Nachhilfe {n.name}
                      </span>
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 transition-[opacity,transform] duration-300">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </Block>
            )}

            <FadeIn direction="up">
              <div
                className="rounded-3xl p-8 md:p-10 text-center"
                style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 70%, #1e3a4f 100%)" }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
                  Erste Stunde kostenlos
                </h2>
                <p className="font-body text-white/60 leading-[1.75] text-[0.97rem] mb-7 max-w-md mx-auto">
                  Unverbindlich ausprobieren, ob es passt — für Schülerinnen und Schüler aus{" "}
                  {ort.name} wie für alle anderen.
                </p>
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-sm md:text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
                  style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
                >
                  Probestunde vereinbaren
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

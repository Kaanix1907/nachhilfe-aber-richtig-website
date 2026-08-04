import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeoPageHero from "./SeoPageHero";
import FadeIn from "./FadeIn";
import { BUSINESS } from "@/lib/data";
import { ORTE, FAECHER, type FachPage } from "@/lib/seo-pages";

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

export default function FachSeite({ fach }: { fach: FachPage }) {
  const andereFaecher = FAECHER.filter((f) => f.slug !== fach.slug);

  return (
    <>
      <Navbar />
      <main>
        <SeoPageHero
          kicker={`${fach.name}-Nachhilfe`}
          h1={`Nachhilfe in ${fach.name} in Duisburg-Rheinhausen`}
          lead={`${fach.kurz}-Nachhilfe von Klasse 1 bis zum Abitur — in Kleingruppen von drei bis fünf Schülern, im Einzelunterricht oder online. Die erste Stunde ist kostenlos.`}
          breadcrumb={`${fach.name}-Nachhilfe`}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Block kicker="Warum es hakt" title={`${fach.name} in der Schule`}>
              {fach.intro.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </Block>

            <Block kicker="Themen" title={`Was wir in ${fach.name} konkret üben`}>
              <p>
                Die Schwerpunkte verschieben sich mit der Klassenstufe. Das sind die Stellen, an
                denen bei uns die meiste Arbeit anfällt:
              </p>
              <div className="grid gap-4 pt-2">
                {fach.themen.map((t) => (
                  <div
                    key={t.stufe}
                    className="rounded-2xl p-6 bg-white"
                    style={{
                      border: "1px solid rgba(26,26,46,0.07)",
                      boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)",
                    }}
                  >
                    <h3 className="font-heading font-bold text-dark text-[1.02rem] mb-3" style={{ letterSpacing: "-0.01em" }}>
                      {t.stufe}
                    </h3>
                    <ul className="space-y-2">
                      {t.punkte.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-[0.94rem]">
                          <span className="shrink-0 mt-[0.5rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>

            {/* Nur die drei Pruefungsfaecher der ZP10 verlinken auf die
                ZAP-Seite — bei Physik oder Biologie waere der Hinweis falsch. */}
            {["mathe", "deutsch", "englisch"].includes(fach.slug) && (
              <Block kicker="Klasse 10" title={`${fach.name} in den Zentralen Prüfungen`}>
                <p>
                  {fach.name} ist eines der drei Fächer, in denen am Ende der Klasse 10 in
                  Nordrhein-Westfalen zentral geprüft wird. Die Aufgaben kommen landesweit
                  einheitlich vom Schulministerium, nicht von der eigenen Lehrkraft — geprüft wird
                  der Stoff mehrerer Schuljahre.
                </p>
                <Link
                  href="/zap-vorbereitung"
                  className="inline-flex items-center gap-2 font-body font-semibold text-primary-deep text-[0.97rem] hover:gap-3 transition-[gap] duration-200"
                >
                  Zur ZAP-Vorbereitung
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </Block>
            )}

            <Block kicker="Unser Ansatz" title={`Wie wir ${fach.name} unterrichten`}>
              <p>{fach.ansatz}</p>
              <p>
                Unterrichtet wird von geprüften Lehramtsstudierenden und Lehrkräften mit
                erweitertem Führungszeugnis — und nur in Fächern, die sie sicher beherrschen.
              </p>
            </Block>

            <Block kicker="Förderung" title={`${fach.name}-Nachhilfe kostenlos über Bildung und Teilhabe`}>
              <p>
                Bezieht Ihre Familie Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe, besteht
                Anspruch auf außerschulische Lernförderung. Dann übernimmt das Amt die Kosten für
                die {fach.kurz}-Nachhilfe vollständig.
              </p>
              <p>
                Wir sind auf diese Abrechnung eingerichtet, rechnen direkt mit dem Jobcenter
                Duisburg beziehungsweise der Stadt Duisburg ab und begleiten den Antrag.
              </p>
              <Link
                href="/bildung-und-teilhabe"
                className="inline-flex items-center gap-2 font-body font-semibold text-primary-deep text-[0.97rem] hover:gap-3 transition-[gap] duration-200"
              >
                So läuft der Antrag auf Lernförderung
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </Block>

            <Block kicker="Standorte" title={`Wo Sie ${fach.kurz}-Nachhilfe bei uns bekommen`}>
              <p>
                Unser Lernort liegt in der {BUSINESS.addresses.lernort.street},{" "}
                {BUSINESS.addresses.lernort.city}. Von dort betreuen wir Schülerinnen und Schüler
                aus Rheinhausen und den umliegenden Orten:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {ORTE.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/nachhilfe/${o.slug}`}
                    className="group flex items-center justify-between gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/25"
                    style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.05), 0 4px 12px rgba(26,26,46,0.05)" }}
                  >
                    <span className="font-heading font-bold text-[0.98rem] text-dark group-hover:text-primary transition-[color] duration-300">
                      {fach.kurz}-Nachhilfe {o.name}
                    </span>
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="shrink-0 text-primary opacity-45 group-hover:opacity-100 group-hover:translate-x-0.5 transition-[opacity,transform] duration-300">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </Block>

            <Block kicker="Weitere Fächer" title="Nachhilfe in anderen Fächern">
              <div className="flex flex-wrap gap-2.5 pt-1">
                {andereFaecher.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/nachhilfe/${f.slug}`}
                    className="inline-flex items-center font-body font-semibold text-[0.9rem] text-dark px-5 py-2.5 rounded-full border border-gray-200 transition-[border-color,color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    {f.name}
                  </Link>
                ))}
              </div>
            </Block>

            <FadeIn direction="up">
              <div
                className="rounded-3xl p-8 md:p-10 text-center"
                style={{ background: "linear-gradient(135deg, #0f0c29 0%, #2d1f5e 70%, #1e3a4f 100%)" }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
                  {fach.name} einmal ausprobieren
                </h2>
                <p className="font-body text-white/60 leading-[1.75] text-[0.97rem] mb-7 max-w-md mx-auto">
                  Die erste Stunde ist kostenlos und unverbindlich. Danach entscheiden Sie in Ruhe.
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

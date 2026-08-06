import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeoPageHero from "@/components/SeoPageHero";
import FAQ from "@/components/FAQ";
import { SeoBlock, SchrittListe, WeiterLink, AbschlussKarte, StandHinweis } from "@/components/SeoBlock";
import { BUSINESS } from "@/lib/data";
import { INHALT_STAND, standAnzeige } from "@/lib/stand";
import { ANBIETER, SITE_URL, breadcrumbLd, faqLd } from "@/lib/schema";
import { RATGEBER, ratgeberNachSlug, type RatgeberSeite, type RatgeberAbschnitt } from "@/lib/ratgeber";

export function generateStaticParams() {
  return RATGEBER.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const seite = ratgeberNachSlug(slug);
  if (!seite) return {};

  return {
    title: { absolute: seite.title },
    description: seite.description,
    alternates: { canonical: `${SITE_URL}/ratgeber/${slug}` },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: `${SITE_URL}/ratgeber/${slug}`,
      modifiedTime: INHALT_STAND,
      siteName: BUSINESS.name,
      title: seite.title,
      description: seite.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seite.h1 }],
    },
  };
}

// Article statt Service: Diese Seiten verkaufen nichts, sie beantworten eine
// Frage. `author` und `publisher` zeigen auf dieselbe Entitaet wie ueberall
// sonst, damit kein zweiter Betrieb entsteht.
function articleLd(seite: RatgeberSeite) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seite.h1,
    description: seite.description,
    url: `${SITE_URL}/ratgeber/${seite.slug}`,
    dateModified: INHALT_STAND,
    datePublished: INHALT_STAND,
    inLanguage: "de",
    isAccessibleForFree: true,
    author: ANBIETER,
    publisher: ANBIETER,
    image: `${SITE_URL}/og-image.png`,
  };
}

// Die Kurzantwort steht bewusst ganz oben und in unter 60 Woertern. Wer eine
// Frage stellt, soll sie beantwortet bekommen, bevor er scrollt; und genau
// solche abgeschlossenen Absaetze zitieren Suchmaschinen und Sprachmodelle,
// statt eine halbe Seite zusammenzufassen.
function Kurzantwort({ text }: { text: string }) {
  return (
    <div
      className="rounded-2xl p-6 md:p-7 mb-14"
      style={{
        background: "rgba(37,171,214,0.05)",
        border: "1px solid rgba(37,171,214,0.18)",
      }}
    >
      <p className="font-body font-semibold text-dark/80 text-xs tracking-widest uppercase mb-3">
        Kurz gesagt
      </p>
      <p className="font-body text-dark/85 leading-[1.8] text-[1rem]">{text}</p>
    </div>
  );
}

function Liste({ eintraege }: { eintraege: { t: string; d: string }[] }) {
  return (
    <ul className="space-y-3 pt-1">
      {eintraege.map((e) => (
        <li key={e.t} className="flex items-start gap-3">
          <span className="shrink-0 mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>
            <strong className="text-dark font-semibold">{e.t}</strong>
            {e.d ? <> {e.d}</> : null}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Abschnitt({ a }: { a: RatgeberAbschnitt }) {
  // Schrittlisten brauchen den Textcontainer nicht, sie bringen ihren
  // eigenen mit. Deshalb `roh`, sonst saessen sie in doppeltem Zeilenabstand.
  if (a.schritte) {
    return (
      <SeoBlock kicker={a.kicker} title={a.titel} roh titelAbstand="weit">
        <SchrittListe schritte={a.schritte} />
      </SeoBlock>
    );
  }
  return (
    <SeoBlock kicker={a.kicker} title={a.titel}>
      {a.absaetze?.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {a.liste && <Liste eintraege={a.liste} />}
    </SeoBlock>
  );
}

function Hinweis({ text }: { text: string }) {
  return (
    <div className="rounded-2xl p-6 mb-14 bg-gray-50 border border-gray-100">
      <p className="font-body text-muted/75 leading-[1.75] text-[0.9rem]">{text}</p>
    </div>
  );
}

export default async function RatgeberBeitrag({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seite = ratgeberNachSlug(slug);
  if (!seite) notFound();

  const brotkrume = breadcrumbLd([
    { name: "Ratgeber", pfad: "/ratgeber" },
    { name: seite.kicker, pfad: `/ratgeber/${seite.slug}` },
  ]);
  const fragen = faqLd(seite.faq);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd(seite)) }} />
      {fragen && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fragen) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(brotkrume) }} />
      <Navbar />
      <main id="inhalt">
        <SeoPageHero
          kicker={seite.kicker}
          h1={seite.h1}
          lead={seite.lead}
          breadcrumb={seite.kicker}
          breadcrumbParent={{ label: "Ratgeber", href: "/ratgeber" }}
        />

        <section className="bg-white py-20 md:py-24">
          <div className="max-w-3xl mx-auto px-4">
            <Kurzantwort text={seite.kurzantwort} />

            {seite.abschnitte.map((a) => (
              <Abschnitt key={a.titel} a={a} />
            ))}

            {seite.hinweis && <Hinweis text={seite.hinweis} />}

            <SeoBlock kicker="Weiterlesen" title="Passt zu diesem Thema">
              <div className="flex flex-col gap-3">
                {seite.weiter.map((w) => (
                  <WeiterLink key={w.href} href={w.href}>
                    {w.text}
                  </WeiterLink>
                ))}
              </div>
            </SeoBlock>

            <AbschlussKarte
              titel="Erste Stunde kostenlos"
              text="Neunzig Minuten, in denen wir herausfinden, woran es liegt. Danach sagen wir Ihnen ehrlich, ob wir helfen können."
              knopfText="Probestunde vereinbaren"
              href="/#kontakt"
            />
            <StandHinweis stand={standAnzeige(INHALT_STAND)} />
          </div>
        </section>

        <FAQ
          items={seite.faq}
          title="Häufige Fragen"
          intro={`Was Eltern zum Thema ${seite.kicker.toLowerCase()} am häufigsten fragen.`}
        />
      </main>
      <Footer />
    </>
  );
}

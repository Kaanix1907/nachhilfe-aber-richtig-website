import Image from "next/image";
import { BUSINESS } from "@/lib/data";

interface Review {
  name: string;
  stars: number;
  text: string;
  time: string;
}

interface PlacesData {
  reviews: Review[];
  rating: number;
  total: number;
}

async function getGoogleData(): Promise<PlacesData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = "ChIJHWy-OVi_uEcR4TNsTTb7wko";

  if (!apiKey) return { reviews: [], rating: 5.0, total: 22 };

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total,reviews&language=de&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") return { reviews: [], rating: 5.0, total: 22 };

    const reviews: Review[] = (data.result.reviews || [])
      .filter((r: { text: string }) => r.text && r.text.trim().length > 15)
      .slice(0, 3)
      .map((r: { author_name: string; rating: number; text: string; relative_time_description: string }) => ({
        name: r.author_name,
        stars: r.rating,
        text: r.text.length > 120 ? r.text.slice(0, 117) + "…" : r.text,
        time: r.relative_time_description,
      }));

    return {
      reviews,
      rating: data.result.rating ?? 5.0,
      total: data.result.user_ratings_total ?? 22,
    };
  } catch {
    return { reviews: [], rating: 5.0, total: 22 };
  }
}

const FALLBACK_REVIEWS: Review[] = [
  { name: "Sara M.", stars: 5, text: "Mein Sohn hat sich in Mathe von 5 auf 2 verbessert. Unglaublich professionell!", time: "vor 2 Wochen" },
  { name: "Thomas K.", stars: 5, text: "Endlich Nachhilfe die wirklich wirkt. Die Lehrer erklären super geduldig.", time: "vor 1 Monat" },
  { name: "Ayse D.", stars: 5, text: "Dank des BuT-Programms komplett kostenlos. Absolut empfehlenswert!", time: "vor 3 Wochen" },
];

export default async function Hero() {
  const { reviews: rawReviews, rating, total } = await getGoogleData();
  const reviews = rawReviews.length >= 2 ? rawReviews : FALLBACK_REVIEWS;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #0f0c29 0%, #1a1040 30%, #2d1f5e 65%, #1e3a4f 100%)" }}
    >
      {/* Radiale Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(101,92,158,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,171,214,0.15) 0%, transparent 70%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Links — Text */}
        <div>
          <span className="inline-flex items-center gap-1.5 bg-white/8 text-white/60 font-body font-medium text-xs px-3.5 py-1.5 rounded-full mb-6 border border-white/10 tracking-widest uppercase">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3" fill="#25abd6"/>
              <circle cx="5" cy="5" r="5" fill="#25abd6" fillOpacity="0.2"/>
            </svg>
            Duisburg
          </span>

          <h1 className="font-heading text-5xl md:text-[3.75rem] font-extrabold text-white mb-6"
            style={{ lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            {BUSINESS.name}
          </h1>

          <p className="font-body text-xl text-white/65 mb-3 leading-[1.75]">
            Professionelle Nachhilfe für Schüler{" "}
            <span className="font-semibold text-white">ab Klasse 1 bis Abitur</span>{" "}
            — in allen Fächern, persönlich betreut.
          </p>

          <p className="font-body text-base text-white/35 mb-10 tracking-wide">
            {BUSINESS.slogan}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 text-white font-body font-bold text-base px-8 py-4 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-95"
              style={{ background: "linear-gradient(135deg,#00aa00,#008a00)", boxShadow: "0 4px 20px rgba(0,170,0,0.40)" }}
            >
              Gratis Probestunde buchen
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center gap-2 font-body font-semibold text-base px-8 py-4 rounded-full text-white transition-[transform,border-color] duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.10)", border: "1.5px solid rgba(255,255,255,0.28)", backdropFilter: "blur(8px)" }}
            >
              Unsere Leistungen
            </a>
          </div>

          {/* Gefördert-durch Sticker */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-body text-sm text-white/40 tracking-wide">Gefördert durch</span>
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>
              <Image src="/logo-jobcenter.jpeg" alt="Jobcenter Duisburg" width={130} height={34} className="object-contain" style={{ height: 30, width: "auto" }} />
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white"
              style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>
              <Image src="/logo-stadt-duisburg.png" alt="Stadt Duisburg" width={110} height={34} className="object-contain" style={{ height: 30, width: "auto" }} />
            </div>
          </div>
        </div>

        {/* Rechts — Fächer-Übersicht */}
        <div className="hidden md:flex flex-col gap-4">
          <div className="rounded-3xl p-7" style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}>
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-4">Alle Fächer</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Mathematik","Deutsch","Englisch","Physik","Chemie",
                "Biologie","Geschichte","Geographie","Informatik",
                "Französisch","Latein","Spanisch","Politik","Wirtschaft",
              ].map((f) => (
                <span key={f}
                  className="font-body text-sm px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.70)",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: "rgba(37,171,214,0.08)",
            border: "1px solid rgba(37,171,214,0.18)",
          }}>
            <p className="font-body text-white/40 text-xs tracking-widest uppercase mb-1">Klassen</p>
            <p className="font-heading font-bold text-white text-lg">Klasse 1 bis Abitur</p>
            <p className="font-body text-white/45 text-sm mt-1 leading-relaxed">
              Für jede Stufe den passenden Lehrer — individuell abgestimmt.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

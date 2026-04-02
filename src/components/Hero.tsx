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

        {/* Rechts — Vertikal scrollende Google Bewertungen */}
        <div className="hidden md:flex flex-col gap-4">
          {/* Google-Header */}
          <div className="flex items-center gap-3 mb-1">
            <svg viewBox="0 0 48 48" width="30" height="30">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
              <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                    <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                  </svg>
                ))}
                <span className="font-heading font-bold text-white text-sm ml-1">{rating.toFixed(1)}</span>
              </div>
              <span className="font-body text-white/35 text-xs">{total} Google Bewertungen</span>
            </div>
          </div>

          {/* Scroll-Container */}
          <div className="relative overflow-hidden" style={{ height: 380 }}>
            {/* Fade oben */}
            <div className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #0f0c29, transparent)" }} />
            {/* Fade unten */}
            <div className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to top, #1e3a4f, transparent)" }} />

            {/* Scrollende Karten — doppelt für nahtlosen Loop */}
            <div className="reviews-vertical flex flex-col gap-4">
              {[...reviews, ...reviews].map((r, idx) => (
                <div key={idx}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center font-body font-bold text-white text-xs shrink-0"
                        style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}>
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-body font-semibold text-white text-sm">{r.name}</div>
                        <div className="font-body text-white/30 text-xs">{r.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(r.stars)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b">
                          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-white/60 text-sm leading-[1.6]">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { ALL_REVIEWS } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill={i < count ? "#f59e0b" : "#d1d5db"}>
          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof ALL_REVIEWS[number] }) {
  return (
    <div
      className="flex-shrink-0 w-72 rounded-2xl p-5 border border-gray-100"
      style={{
        background: "#fff",
        boxShadow: "0 1px 3px rgba(26,26,46,0.06), 0 4px 16px rgba(26,26,46,0.06)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-body font-bold text-white text-sm shrink-0"
            style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
          >
            {review.name.charAt(0)}
          </div>
          <div>
            <div className="font-body font-semibold text-dark text-sm leading-tight">{review.name}</div>
            {review.time && (
              <div className="font-body text-muted/40 text-xs">{review.time}</div>
            )}
          </div>
        </div>
        <StarRating count={review.stars} />
      </div>
      <p className="font-body text-muted/65 text-sm leading-[1.6] line-clamp-3">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
}

export default function ReviewsTicker() {
  const reviews = ALL_REVIEWS;
  const rating = 5.0;
  const total = 23;

  // Zum nahtlosen Loop: dreifach duplizieren
  const loopItems = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-14 bg-white border-b border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3">
            {/* Google Logo */}
            <svg viewBox="0 0 48 48" width="28" height="28" className="shrink-0">
              <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
              <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
              <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
            </svg>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-dark text-2xl">{rating.toFixed(1)}</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 12 12" fill="#f59e0b">
                    <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <span className="font-body text-muted/50 text-sm sm:ml-1">
            Basierend auf <strong className="text-dark/70 font-semibold">{total} echten Bewertungen</strong> auf Google
          </span>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Fade-Masken links/rechts */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white 30%, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white 30%, transparent)" }}
        />

        <div className="reviews-ticker flex gap-4 w-max px-4">
          {loopItems.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

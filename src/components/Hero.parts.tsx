import type { CSSProperties } from "react";
import Image from "next/image";

type Review = { name: string; time: string; stars: number; text: string };

export function GoogleGLogo({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size}>
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16 19 13 24 13c2.8 0 5.3 1 7.2 2.7l5.7-5.7C33.5 7.3 29 5 24 5 16.3 5 9.7 9 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 45c4.9 0 9.3-1.8 12.7-4.8l-5.9-5c-1.8 1.3-4.1 2.1-6.8 2.1-5.2 0-9.6-3.5-11.2-8.3l-6.6 5.1C9.5 41.1 16.2 45 24 45z"/>
      <path fill="#1565C0" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l5.9 5C40 35.6 44 30.8 44 25c0-1.3-.1-2.6-.4-3.9z"/>
    </svg>
  );
}

export function StarRow({ count, size }: { count: number; size: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 12 12" fill="#f59e0b">
          <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4L6 1z"/>
        </svg>
      ))}
    </>
  );
}

export function ExternalLinkIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

type ReviewCardProps = {
  review: Review;
  variant: "mobile" | "desktop";
};

const REVIEW_VARIANTS: Record<ReviewCardProps["variant"], {
  wrapper: string;
  wrapperStyle: CSSProperties;
  avatarSize: string;
  avatarText: string;
  nameText: string;
  timeText: string;
  starSize: number;
  body: string;
}> = {
  mobile: {
    wrapper: "shrink-0 w-60 rounded-xl p-3.5",
    wrapperStyle: {
      background: "rgba(255,255,255,0.09)",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
    },
    avatarSize: "w-6 h-6",
    avatarText: "text-[10px]",
    nameText: "text-[11.5px] leading-tight truncate",
    timeText: "text-white/55 text-[10px]",
    starSize: 9,
    body: "font-body text-white/75 text-[11.5px] leading-[1.55] line-clamp-3",
  },
  desktop: {
    wrapper: "rounded-2xl p-5",
    wrapperStyle: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.09)",
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    },
    avatarSize: "w-8 h-8",
    avatarText: "text-xs",
    nameText: "text-sm",
    timeText: "text-white/30 text-xs",
    starSize: 12,
    body: "font-body text-white/60 text-sm leading-[1.6]",
  },
};

export function ReviewCard({ review, variant }: ReviewCardProps) {
  const v = REVIEW_VARIANTS[variant];
  const isMobile = variant === "mobile";
  return (
    <div className={v.wrapper} style={v.wrapperStyle}>
      <div className={`flex items-center justify-between ${isMobile ? "mb-2" : "mb-3"}`}>
        <div className={`flex items-center ${isMobile ? "gap-1.5 min-w-0" : "gap-2.5"}`}>
          <div
            className={`${v.avatarSize} rounded-full flex items-center justify-center font-body font-bold text-white ${v.avatarText} shrink-0`}
            style={{ background: "linear-gradient(135deg,#25abd6,#655c9e)" }}
          >
            {review.name.charAt(0)}
          </div>
          <div className={isMobile ? "min-w-0" : undefined}>
            <div className={`font-body font-semibold text-white ${v.nameText}`}>{review.name}</div>
            <div className={`font-body ${v.timeText}`}>{review.time}</div>
          </div>
        </div>
        <div className={`flex items-center ${isMobile ? "gap-px" : "gap-0.5"} shrink-0`}>
          <StarRow count={review.stars} size={v.starSize} />
        </div>
      </div>
      <p className={v.body}>&ldquo;{review.text}&rdquo;</p>
    </div>
  );
}

type GoogleHeaderProps = {
  rating: number;
  total: number;
  variant: "mobile" | "desktop";
};

export function GoogleHeader({ rating, total, variant }: GoogleHeaderProps) {
  const isMobile = variant === "mobile";
  return (
    <div className={`flex items-center ${isMobile ? "gap-2.5" : "gap-3 mb-1"}`}>
      <GoogleGLogo size={isMobile ? 22 : 30} />
      <div>
        <div className={`flex items-center ${isMobile ? "gap-0.5" : "gap-1"}`}>
          <StarRow count={5} size={isMobile ? 12 : 14} />
          <span className={`font-heading font-bold text-white ${isMobile ? "text-xs" : "text-sm"} ml-1`}>
            {rating.toFixed(1)}
          </span>
        </div>
        <span className={`font-body ${isMobile ? "text-white/55 text-[10px]" : "text-white/35 text-xs"}`}>
          {total} Google Bewertungen
        </span>
      </div>
    </div>
  );
}

export function LexiBadge() {
  return (
    <a
      href="/lexi"
      className="group inline-flex items-center gap-2 self-start mb-4 md:mb-6 pl-1.5 pr-4 py-1.5 rounded-full transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02]"
      style={{
        background: "rgba(37,171,214,0.12)",
        border: "1px solid rgba(37,171,214,0.35)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(37,171,214,0.15)",
      }}
    >
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full font-heading font-extrabold text-white text-[11px]"
        style={{
          background: "linear-gradient(135deg,#25abd6,#655c9e)",
          boxShadow: "0 2px 8px rgba(37,171,214,0.5)",
        }}
      >
        L
      </span>
      <span className="font-body text-[12px] md:text-[13px] font-semibold tracking-wide text-white">
        <span style={{ color: "#25abd6" }}>NEU:</span> Lexi — KI-Lernhilfe · gratis ausprobieren
      </span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white/75 transition-transform duration-200 group-hover:translate-x-0.5"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

const FUNDING_PILL_STYLE: CSSProperties = { boxShadow: "0 4px 14px rgba(0,0,0,0.35)" };

export function GefoerdertDurchRow() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
      <span className="font-body text-xs md:text-sm text-white/60 md:text-white/40 tracking-wide">Gefördert durch</span>
      <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white" style={FUNDING_PILL_STYLE}>
        <Image src="/logo-jobcenter.jpeg" alt="Jobcenter Duisburg" width={130} height={34} className="object-contain" style={{ height: 24, width: "auto" }} />
      </div>
      <div className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white" style={FUNDING_PILL_STYLE}>
        <Image src="/logo-stadt-duisburg.png" alt="Stadt Duisburg" width={110} height={34} className="object-contain" style={{ height: 24, width: "auto" }} />
      </div>
    </div>
  );
}

type ReviewsScrollProps = {
  reviews: Review[];
  rating: number;
  total: number;
  googleUrl: string;
};

export function MobileReviewsScroll({ reviews, rating, total, googleUrl }: ReviewsScrollProps) {
  return (
    <div className="md:hidden mt-5">
      <div className="flex items-center justify-between mb-3">
        <GoogleHeader rating={rating} total={total} variant="mobile" />
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-body text-[10px] font-semibold px-2 py-0.5 rounded-full transition-[opacity] duration-200 hover:opacity-80"
          style={{ background: "rgba(37,171,214,0.15)", border: "1px solid rgba(37,171,214,0.35)", color: "#25abd6" }}
        >
          <ExternalLinkIcon size={9} />
          Prüfen
        </a>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0f0c29, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1e3a4f, transparent)" }} />
        <div className="reviews-horizontal flex gap-2.5 w-max">
          {[...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={idx} review={r} variant="mobile" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesktopReviewsScroll({ reviews, rating, total, googleUrl }: ReviewsScrollProps) {
  return (
    <div className="hidden md:flex flex-col gap-4">
      <GoogleHeader rating={rating} total={total} variant="desktop" />

      <div className="relative overflow-hidden" style={{ height: 440 }}>
        <div className="absolute top-0 left-0 right-0 h-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #0f0c29, transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-10 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #1e3a4f, transparent)" }} />

        <div className="reviews-vertical flex flex-col gap-4">
          {[...reviews, ...reviews].map((r, idx) => (
            <ReviewCard key={idx} review={r} variant="desktop" />
          ))}
        </div>
      </div>

      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 font-body font-semibold text-sm py-3 rounded-xl transition-[opacity,transform] duration-200 hover:opacity-80 hover:-translate-y-px"
        style={{ background: "rgba(37,171,214,0.12)", border: "1px solid rgba(37,171,214,0.3)", color: "#25abd6" }}
      >
        <GoogleGLogo size={16} />
        Alle {total} Bewertungen auf Google ansehen
        <ExternalLinkIcon size={14} />
      </a>
    </div>
  );
}

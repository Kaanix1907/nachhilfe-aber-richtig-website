import type { CSSProperties } from "react";

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

type Review = { name: string; time: string; stars: number; text: string };

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

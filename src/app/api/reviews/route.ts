import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { ALL_REVIEWS } from "@/lib/data";

// Rate Limiting: max. 10 Anfragen pro IP pro Minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  if (entry.count >= 10) return true;
  entry.count++;
  return false;
}

export async function GET() {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Zu viele Anfragen." }, { status: 429 });
  }

  return NextResponse.json({
    reviews: ALL_REVIEWS,
    rating: 5.0,
    total: 23,
  });
}

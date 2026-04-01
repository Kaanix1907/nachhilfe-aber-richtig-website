import { NextResponse } from "next/server";

const PLACE_ID = "ChIJHWy-OVi_uEcR4TNsTTb7wko";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ reviews: [], rating: 5.0, total: 22 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews&language=de&reviews_sort=newest&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json({ reviews: [], rating: 5.0, total: 22 });
    }

    const reviews = (data.result.reviews || [])
      .filter((r: { text: string }) => r.text && r.text.trim().length > 10)
      .map((r: { author_name: string; rating: number; text: string; relative_time_description: string }) => ({
        name: r.author_name,
        stars: r.rating,
        text: r.text,
        time: r.relative_time_description,
      }));

    return NextResponse.json({
      reviews,
      rating: data.result.rating,
      total: data.result.user_ratings_total,
    });
  } catch {
    return NextResponse.json({ reviews: [], rating: 5.0, total: 22 });
  }
}

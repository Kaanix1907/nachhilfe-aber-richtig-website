import { getStats } from "@/lib/track";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") ?? req.headers.get("x-stats-token");

  if (!process.env.STATS_TOKEN || token !== process.env.STATS_TOKEN) {
    return new Response("Forbidden", { status: 403 });
  }

  const stats = await getStats();
  return Response.json(stats);
}

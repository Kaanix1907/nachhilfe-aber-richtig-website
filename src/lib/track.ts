import { Redis } from "@upstash/redis";
import { createHash } from "node:crypto";

let _redis: Redis | null = null;
const redis = (): Redis => {
  if (!_redis) _redis = Redis.fromEnv();
  return _redis;
};

const todayKey = (): string => new Date().toISOString().slice(0, 10);

const hashIp = (ip: string): string =>
  createHash("sha256").update(ip + (process.env.IP_SALT ?? "nachhilfe")).digest("hex").slice(0, 16);

export function trackChat(ip: string, messageCount: number): void {
  const day = todayKey();
  const ipHash = hashIp(ip);

  const r = redis();
  Promise.all([
    r.incr("chat:total"),
    r.incrby("chat:msgs:total", messageCount),
    r.incr(`chat:daily:${day}`),
    r.sadd(`chat:ips:${day}`, ipHash),
    r.expire(`chat:ips:${day}`, 60 * 60 * 24 * 90),
  ]).catch(() => {});
}

export async function getStats(): Promise<{
  total: number;
  totalMessages: number;
  today: { date: string; calls: number; uniqueUsers: number };
  last30Days: { date: string; calls: number; uniqueUsers: number }[];
}> {
  const today = todayKey();
  const days: string[] = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d.toISOString().slice(0, 10));
  }

  const r = redis();
  const [total, totalMessages, ...dayData] = await Promise.all([
    r.get<number>("chat:total"),
    r.get<number>("chat:msgs:total"),
    ...days.flatMap((d) => [
      r.get<number>(`chat:daily:${d}`),
      r.scard(`chat:ips:${d}`),
    ]),
  ]);

  const last30Days = days.map((date, i) => ({
    date,
    calls: (dayData[i * 2] as number | null) ?? 0,
    uniqueUsers: (dayData[i * 2 + 1] as number | null) ?? 0,
  }));

  return {
    total: total ?? 0,
    totalMessages: totalMessages ?? 0,
    today: {
      date: today,
      calls: last30Days[0].calls,
      uniqueUsers: last30Days[0].uniqueUsers,
    },
    last30Days,
  };
}

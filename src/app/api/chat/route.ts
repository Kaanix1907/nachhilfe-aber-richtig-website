import Anthropic from "@anthropic-ai/sdk";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/data";
import { trackChat } from "@/lib/track";

const client = new Anthropic();

// Rate Limiting: max. 20 Anfragen pro IP pro Minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }

  if (entry.count >= 20) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  // IP aus Header lesen (Vercel setzt x-forwarded-for)
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Zu viele Anfragen. Bitte warte eine Minute." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const messages = body?.messages;

    // Eingabe-Validierung
    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
    }
    if (messages.length > 20) {
      return Response.json({ error: "Zu viele Nachrichten." }, { status: 400 });
    }
    for (const msg of messages) {
      if (typeof msg.content !== "string" || msg.content.length > 1000) {
        return Response.json({ error: "Nachricht zu lang." }, { status: 400 });
      }
    }

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: CHATBOT_SYSTEM_PROMPT,
      messages,
    });

    const content = response.content[0];
    if (content.type !== "text") {
      return Response.json({ error: "Unexpected response type" }, { status: 500 });
    }

    trackChat(ip, messages.length);

    return Response.json({ message: content.text });
  } catch {
    return Response.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}

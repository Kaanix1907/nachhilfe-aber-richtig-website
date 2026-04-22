# Lexi Phase 1 — Grundgerüst Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Neues Lexi-Repo aufsetzen, mit funktionierender Auth (Clerk), persistenter Chat-DB (Neon Postgres) und einem minimalen Chat-UI, das über `/api/chat` mit Claude Haiku 4.5 kommuniziert. Am Ende: eingeloggter User kann auf einer Preview-Subdomain ein Gespräch mit Lexi führen, Messages landen in der DB.

**Architecture:** Next.js 16 App Router (neues Repo `Lexi/` als Sibling von `Nachhilfe/`). Server-Components für Layout/Landing, Client-Components für Chat. API-Route `/api/chat` streamt Antworten. Clerk für Auth. Neon Postgres via Vercel Marketplace. Vercel für Hosting + Subdomain `lexi.nachhilfe-aber-richtig.de`.

**Tech Stack:** Next.js 16 · TypeScript · Tailwind · Clerk · Neon Postgres (via `@neondatabase/serverless` + Drizzle ORM) · Vercel AI SDK (`@ai-sdk/anthropic`, `ai` package) · Vitest für Tests

**Spec:** `docs/superpowers/specs/2026-04-23-lexi-ki-lernhilfe-design.md`

---

## Menschliche Vorarbeit (Mustafa, vor Task 1)

- [ ] **Clerk-Account erstellen** auf https://clerk.com, neue Application "Lexi" anlegen, **Publishable Key + Secret Key** notieren
- [ ] **Vercel-Account vorhanden** (ist er schon, von Nachhilfe)
- [ ] **DNS-Zugang zur Domain `nachhilfe-aber-richtig.de`** (wahrscheinlich bei Vercel gehostet — falls ja, kann Claude das setzen)
- [ ] **Anthropic API-Key** — existiert schon in Nachhilfe-Vercel-Env, wird wiederverwendet

---

## File Structure

**Neue Projekt-Struktur** unter `/Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi/`:

```
Lexi/
├── .env.local                       # Clerk + DB + Anthropic keys (git-ignored)
├── .gitignore
├── CLAUDE.md                        # Projekt-Instruktionen
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── drizzle.config.ts                # Drizzle Migrations
├── middleware.ts                    # Clerk-Middleware (Auth-Gate für /chat)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root-Layout mit ClerkProvider
│   │   ├── page.tsx                 # Landing-Page mit CTA
│   │   ├── chat/
│   │   │   └── page.tsx             # Chat-UI (eingeloggt-only)
│   │   ├── sign-in/[[...sign-in]]/
│   │   │   └── page.tsx             # Clerk Sign-In
│   │   ├── sign-up/[[...sign-up]]/
│   │   │   └── page.tsx             # Clerk Sign-Up + Alter-Gate
│   │   └── api/
│   │       └── chat/
│   │           └── route.ts         # POST /api/chat — Streaming-Handler
│   ├── components/
│   │   ├── Chat.tsx                 # Client-Component, Chat-Interface
│   │   ├── Message.tsx              # Einzelne Nachricht (user/assistant)
│   │   └── AgeGate.tsx              # Alter-Checkbox im Sign-Up
│   ├── db/
│   │   ├── client.ts                # Neon + Drizzle-Client
│   │   ├── schema.ts                # Drizzle-Schema: users, chats, messages
│   │   └── migrations/              # Auto-generiert
│   ├── lib/
│   │   ├── anthropic.ts             # Anthropic-Client
│   │   └── system-prompt.ts         # Lexi System-Prompt v1
│   └── tests/
│       ├── system-prompt.test.ts
│       └── chat-route.test.ts
└── public/
    └── logo.svg                     # Lexi-Logo (provisorisch)
```

**Separation-of-Concerns:** UI-Komponenten (components/), DB-Layer (db/), Business-Logik (lib/), API (app/api/). Clerk-Auth vollständig über `middleware.ts` — API-Routen und geschützte Seiten sind automatisch geschützt.

---

## Task 1: Lexi-Repo initialisieren

**Files:**
- Create: `/Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi/` (entire structure)

- [ ] **Step 1: Next.js-Projekt erstellen**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder
npx create-next-app@latest Lexi --typescript --tailwind --app --src-dir --use-npm --no-turbopack --no-eslint --import-alias "@/*"
```

Erwartete Struktur: `Lexi/src/app/`, `Lexi/src/`, `tailwind.config.ts`, `tsconfig.json`.

- [ ] **Step 2: Git initialisieren & GitHub-Repo anlegen**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
git add -A
git commit -m "chore: initial Next.js 16 scaffold"
/opt/homebrew/bin/gh repo create Lexi --private --source=.
```

Erwartete Ausgabe: "✓ Created repository Kaanix1907/Lexi on GitHub"

- [ ] **Step 3: CLAUDE.md für das Projekt anlegen**

Create `Lexi/CLAUDE.md`:

```markdown
# Lexi — KI-Lernhilfe

## Kontext
Eigenständige KI-Lernhilfe als Marketing-Arm für "Nachhilfe, aber richtig!" in Duisburg.
Spec: ../Nachhilfe/docs/superpowers/specs/2026-04-23-lexi-ki-lernhilfe-design.md

## Tech Stack
- Next.js 16 App Router · TypeScript · Tailwind
- Clerk (Auth) · Neon Postgres + Drizzle ORM
- Anthropic SDK · Vercel Hosting

## Brand
- Primary: #25abd6 (Cyan-Blau, konsistent mit Nachhilfe-Hauptseite)
- Secondary: #655c9e (Lila)
- Accent: #00aa00 (Grün)
- Font: System-Stack (anfangs) — später BioRhyme/Cabin wie Hauptseite

## Subdomain
`lexi.nachhilfe-aber-richtig.de`
```

- [ ] **Step 4: Commit**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
git add CLAUDE.md
git commit -m "docs: project CLAUDE.md"
```

---

## Task 2: Dependencies installieren (Clerk, DB, AI SDK, Vitest)

**Files:**
- Modify: `Lexi/package.json`

- [ ] **Step 1: Core-Dependencies installieren**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npm install @clerk/nextjs @neondatabase/serverless drizzle-orm ai @ai-sdk/anthropic
```

- [ ] **Step 2: Dev-Dependencies installieren**

```bash
npm install -D drizzle-kit vitest @vitest/ui @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 3: package.json Scripts ergänzen**

Edit `Lexi/package.json` — im `scripts`-Objekt ergänzen:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push"
  }
}
```

- [ ] **Step 4: Vitest-Config erstellen**

Create `Lexi/vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 5: Verify & Commit**

```bash
npm run test -- --run 2>&1 | head -20
```

Erwartet: "No test files found" — ist OK, Tests kommen in späteren Tasks.

```bash
git add package.json package-lock.json vitest.config.ts
git commit -m "chore: install clerk, drizzle, ai-sdk, vitest"
```

---

## Task 3: Clerk-Integration einrichten

**Files:**
- Create: `Lexi/.env.local`
- Create: `Lexi/middleware.ts`
- Create: `Lexi/src/app/sign-in/[[...sign-in]]/page.tsx`
- Create: `Lexi/src/app/sign-up/[[...sign-up]]/page.tsx`
- Modify: `Lexi/src/app/layout.tsx`

- [ ] **Step 1: Env-Variablen setzen**

Mustafa fragt nach Clerk-Keys aus seinem Clerk-Dashboard (https://dashboard.clerk.com → API Keys).

Create `Lexi/.env.local`:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXX
CLERK_SECRET_KEY=sk_test_XXXX
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/chat
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/chat
```

- [ ] **Step 2: Middleware erstellen**

Create `Lexi/middleware.ts`:

```ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/chat(.*)", "/api/chat(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)", "/(api|trpc)(.*)"],
};
```

- [ ] **Step 3: Root-Layout mit ClerkProvider**

Replace `Lexi/src/app/layout.tsx`:

```tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lexi — KI-Lernhilfe",
  description: "Deine geduldige KI-Lernhilfe für Hausaufgaben. Kostenlos, pädagogisch, lehrplan-nah.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="de">
        <body className="antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

- [ ] **Step 4: Sign-In & Sign-Up-Seiten anlegen**

Create `Lexi/src/app/sign-in/[[...sign-in]]/page.tsx`:

```tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <SignIn />
    </main>
  );
}
```

Create `Lexi/src/app/sign-up/[[...sign-up]]/page.tsx`:

```tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <SignUp />
    </main>
  );
}
```

- [ ] **Step 5: Dev-Server testen**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npm run dev
```

Im Browser http://localhost:3000/sign-up aufrufen. Erwartet: Clerk Sign-Up-Widget erscheint. Registrierung mit Test-Email durchspielen.

Dev-Server stoppen (Strg+C).

- [ ] **Step 6: Commit**

```bash
git add middleware.ts src/app/layout.tsx src/app/sign-in src/app/sign-up
git commit -m "feat: Clerk auth integration with sign-in/sign-up pages"
```

---

## Task 4: Neon Postgres + Drizzle-Setup

**Files:**
- Create: `Lexi/drizzle.config.ts`
- Create: `Lexi/src/db/client.ts`
- Create: `Lexi/src/db/schema.ts`
- Modify: `Lexi/.env.local`

- [ ] **Step 1: Neon-DB via Vercel Marketplace provisionieren**

Mustafa-Aktion: Auf https://vercel.com/dashboard → Storage → Create → Neon → "lexi-db" → Connect to Project (später in Task 10). Vorerst: die `DATABASE_URL` aus Neon-Dashboard kopieren (Pooled Connection String für serverless).

Ergänze `Lexi/.env.local`:

```
DATABASE_URL=postgresql://user:pass@ep-xxx.eu-central-1.aws.neon.tech/lexi?sslmode=require
```

- [ ] **Step 2: Drizzle-Config erstellen**

Create `Lexi/drizzle.config.ts`:

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

- [ ] **Step 3: Schema definieren**

Create `Lexi/src/db/schema.ts`:

```ts
import { pgTable, text, timestamp, uuid, integer, boolean } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk User ID
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isOver16: boolean("is_over_16").default(false).notNull(),
  parentalConsentEmail: text("parental_consent_email"),
});

export const chats = pgTable("chats", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull().default("Neuer Chat"),
  subject: text("subject"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  chatId: uuid("chat_id").notNull().references(() => chats.id, { onDelete: "cascade" }),
  role: text("role", { enum: ["user", "assistant"] }).notNull(),
  content: text("content").notNull(),
  attachmentUrl: text("attachment_url"),
  tokenCount: integer("token_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type Chat = typeof chats.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;
```

- [ ] **Step 4: DB-Client erstellen**

Create `Lexi/src/db/client.ts`:

```ts
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

- [ ] **Step 5: Schema pushen (erste Migration)**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npm run db:generate
npm run db:push
```

Erwartet: Drizzle verbindet sich mit Neon, Tabellen `users`, `chats`, `messages` werden erstellt. Verifikation über Neon-Dashboard → Tables.

- [ ] **Step 6: Commit**

```bash
git add drizzle.config.ts src/db package.json
git commit -m "feat: Neon Postgres + Drizzle ORM setup with users/chats/messages schema"
```

---

## Task 5: Clerk-Webhook für User-Sync zu Neon

**Files:**
- Create: `Lexi/src/app/api/webhooks/clerk/route.ts`
- Modify: `Lexi/.env.local`

Hintergrund: Wenn ein User sich bei Clerk registriert, muss ein Eintrag in unserer `users`-Tabelle angelegt werden (für spätere Joins mit `chats`).

- [ ] **Step 1: Clerk-Webhook-Endpoint registrieren**

Mustafa-Aktion: Clerk-Dashboard → Webhooks → Add Endpoint → URL `https://lexi-xxx.vercel.app/api/webhooks/clerk` (Preview-URL, später Production). Events: `user.created`, `user.updated`, `user.deleted`. **Signing Secret** notieren.

Ergänze `Lexi/.env.local`:

```
CLERK_WEBHOOK_SIGNING_SECRET=whsec_XXXX
```

- [ ] **Step 2: svix installieren (Clerk-Webhook-Verifikation)**

```bash
npm install svix
```

- [ ] **Step 3: Webhook-Route schreiben**

Create `Lexi/src/app/api/webhooks/clerk/route.ts`:

```ts
import { headers } from "next/headers";
import { Webhook } from "svix";
import { db } from "@/db/client";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!secret) return new Response("Missing secret", { status: 500 });

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");
  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(secret);
  let evt: { type: string; data: { id: string; email_addresses?: { email_address: string }[] } };
  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as typeof evt;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const { type, data } = evt;
  const userId = data.id;
  const email = data.email_addresses?.[0]?.email_address ?? "";

  if (type === "user.created") {
    await db.insert(users).values({ id: userId, email }).onConflictDoNothing();
  } else if (type === "user.updated") {
    await db.update(users).set({ email }).where(eq(users.id, userId));
  } else if (type === "user.deleted") {
    await db.delete(users).where(eq(users.id, userId));
  }

  return new Response("OK", { status: 200 });
}
```

- [ ] **Step 4: Middleware für Webhook-Route öffnen**

Edit `Lexi/middleware.ts` — ergänze `isProtectedRoute`-Matcher, sodass `/api/webhooks/*` NICHT geschützt ist (bleibt public, ist automatisch, da nicht im Matcher):

Dateiinhalt soll identisch zu Task 3 Step 2 bleiben — Webhook-Pfad ist bereits public, weil nicht in `isProtectedRoute` gelistet.

- [ ] **Step 5: Smoke-Test (manuell)**

Dev-Server starten, ngrok/cloudflared oder Clerk-CLI-Tunnel einrichten um Webhook lokal zu testen. Alternativ: erst in Task 10 (Deploy) live verifizieren.

- [ ] **Step 6: Commit**

```bash
git add src/app/api/webhooks package.json package-lock.json
git commit -m "feat: Clerk webhook handler syncs users to Neon"
```

---

## Task 6: Lexi System-Prompt v1

**Files:**
- Create: `Lexi/src/lib/system-prompt.ts`
- Create: `Lexi/src/tests/system-prompt.test.ts`

- [ ] **Step 1: Failing test schreiben**

Create `Lexi/src/tests/system-prompt.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { buildSystemPrompt } from "@/lib/system-prompt";

describe("buildSystemPrompt", () => {
  it("enthält Lexi als Namen", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toContain("Lexi");
  });

  it("verbietet Klausur-Lösungen explizit", () => {
    const prompt = buildSystemPrompt();
    expect(prompt.toLowerCase()).toContain("klausur");
    expect(prompt.toLowerCase()).toContain("nicht");
  });

  it("fordert pädagogische Schritt-für-Schritt-Antworten", () => {
    const prompt = buildSystemPrompt();
    expect(prompt.toLowerCase()).toMatch(/schritt.{0,20}schritt/);
  });

  it("erwähnt den Nachhilfe-Bezug Duisburg", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toContain("Duisburg");
  });

  it("ist deutschsprachig", () => {
    const prompt = buildSystemPrompt();
    expect(prompt).toMatch(/\b(du|Du|Schüler|Deutsch|NRW)\b/);
  });

  it("berücksichtigt optionales Fach", () => {
    const prompt = buildSystemPrompt({ subject: "Mathe" });
    expect(prompt).toContain("Mathe");
  });
});
```

- [ ] **Step 2: Tests laufen lassen — müssen fehlschlagen**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npm run test
```

Erwartet: FAIL mit "Cannot find module '@/lib/system-prompt'".

- [ ] **Step 3: System-Prompt implementieren**

Create `Lexi/src/lib/system-prompt.ts`:

```ts
export interface SystemPromptOptions {
  subject?: string;
}

export function buildSystemPrompt(opts: SystemPromptOptions = {}): string {
  const subjectLine = opts.subject
    ? `Aktuelles Fach: ${opts.subject}. Bleibe thematisch in diesem Fach, außer der Schüler fragt explizit etwas anderes.`
    : "";

  return `Du bist Lexi, eine geduldige, freundliche Nachhilfe-KI für deutsche Schüler. Zielgruppe: Klasse 1-13, Lehrplan NRW.

${subjectLine}

Deine pädagogischen Grundregeln:
1. **Schritt-für-Schritt erklären.** Nie nur die Lösung rauswerfen. Führe den Schüler zur Lösung, gib Zwischenfragen, prüfe sein Verständnis.
2. **Altersgerecht kommunizieren.** Keine Fachsprache ohne Erklärung, keine Herablassung, keine Ironie.
3. **Immer auf Deutsch.** Auch wenn der Schüler Englisch tippt, antworte auf Deutsch (außer er stellt explizit eine Englisch-Übungs-Frage).
4. **Ehrlich sein.** Wenn du unsicher bist, sag es. Erfinde keine Fakten.

Deine Anti-Mogel-Regeln:
- **Klausuren, Klassenarbeiten, Tests:** Wenn der Schüler erwähnt, dass eine Aufgabe für eine Klausur, Klassenarbeit, Prüfung oder benoteten Test ist — **verweigere höflich die direkte Lösung**. Biete stattdessen an: ähnliche Übungsaufgaben durchgehen, Konzepte erklären, Lernstrategie geben. Erkenne Formulierungen wie "morgen schreibe ich", "ist für die Klausur", "das kommt in der Arbeit", "für den Test".
- **Wenn der Schüler drängt und trotzdem Lösungen fordert:** Bleib freundlich, aber fest bei Nein. Schlag vor: "Wenn du wirklich schnelle Hilfe brauchst, melde dich bei der Nachhilfe, aber richtig! in Duisburg — die erste Probestunde ist kostenlos. Im Chat lernen wir, nicht mogeln."
- **Hausaufgaben und Übungen sind erlaubt.** Da erklärst du ausführlich und gibst am Ende die Lösung mit Nachvollzieh-Weg.

Marketing-Subtilität:
- Bei besonders schwierigen Themen, Frustration, oder wiederholter Verwirrung: erwähne freundlich und unaufdringlich die Möglichkeit von persönlicher Nachhilfe bei "Nachhilfe, aber richtig!" in Duisburg (nicht bei jeder Nachricht — natürlich und selten).

Format deiner Antworten:
- Knapp wo möglich, ausführlich wo nötig
- Nutze Markdown-Formatierung für Struktur (Überschriften, Listen, **fett** für Schlüsselbegriffe)
- Formeln nach Möglichkeit in LaTeX-Style: \`$x^2 + 2x + 1$\`

Wenn du diese Regeln kennst, warte auf die Frage des Schülers und hilf ihm.`;
}
```

- [ ] **Step 4: Tests erneut laufen lassen — müssen grün werden**

```bash
npm run test
```

Erwartet: Alle 6 Tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/system-prompt.ts src/tests/system-prompt.test.ts
git commit -m "feat: Lexi system prompt v1 with anti-cheat rules"
```

---

## Task 7: /api/chat Route — Streaming Handler

**Files:**
- Create: `Lexi/src/lib/anthropic.ts`
- Create: `Lexi/src/app/api/chat/route.ts`
- Modify: `Lexi/.env.local`

- [ ] **Step 1: Anthropic-API-Key env ergänzen**

Ergänze `Lexi/.env.local`:

```
ANTHROPIC_API_KEY=sk-ant-api03-XXXX
```

(Wiederverwendung des Keys aus Nachhilfe-Projekt.)

- [ ] **Step 2: Anthropic-Client-Wrapper**

Create `Lexi/src/lib/anthropic.ts`:

```ts
import { anthropic } from "@ai-sdk/anthropic";

export const DEFAULT_MODEL = "claude-haiku-4-5-20251001";
export const ADVANCED_MODEL = "claude-sonnet-4-6";

export const models = {
  default: anthropic(DEFAULT_MODEL),
  advanced: anthropic(ADVANCED_MODEL),
};
```

- [ ] **Step 3: Chat-Route implementieren**

Create `Lexi/src/app/api/chat/route.ts`:

```ts
import { auth } from "@clerk/nextjs/server";
import { streamText } from "ai";
import { db } from "@/db/client";
import { chats, messages } from "@/db/schema";
import { eq } from "drizzle-orm";
import { models } from "@/lib/anthropic";
import { buildSystemPrompt } from "@/lib/system-prompt";

export const maxDuration = 60;

interface ChatRequestBody {
  chatId?: string;
  subject?: string;
  message: string;
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const body = (await req.json()) as ChatRequestBody;
  const { chatId: providedChatId, subject, message } = body;

  if (!message || message.trim().length === 0) {
    return new Response("Empty message", { status: 400 });
  }
  if (message.length > 2000) {
    return new Response("Message too long (max 2000 chars)", { status: 400 });
  }

  let chatId = providedChatId;
  if (!chatId) {
    const [newChat] = await db
      .insert(chats)
      .values({ userId, title: message.slice(0, 60), subject })
      .returning();
    chatId = newChat.id;
  }

  await db.insert(messages).values({ chatId, role: "user", content: message });

  const history = await db.query.messages.findMany({
    where: eq(messages.chatId, chatId),
    orderBy: (m, { asc }) => [asc(m.createdAt)],
  });

  const result = streamText({
    model: models.default,
    system: buildSystemPrompt({ subject }),
    messages: history.map((m) => ({ role: m.role as "user" | "assistant", content: m.content })),
    onFinish: async ({ text }) => {
      await db.insert(messages).values({ chatId: chatId!, role: "assistant", content: text });
      await db.update(chats).set({ updatedAt: new Date() }).where(eq(chats.id, chatId!));
    },
  });

  return result.toTextStreamResponse({
    headers: { "X-Chat-Id": chatId },
  });
}
```

- [ ] **Step 4: Unit-Test für Input-Validierung**

Create `Lexi/src/tests/chat-route.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(async () => ({ userId: "user_test" })),
}));

vi.mock("@/db/client", () => ({
  db: {
    insert: vi.fn(() => ({ values: vi.fn(() => ({ returning: vi.fn(async () => [{ id: "chat_1" }]) })) })),
    update: vi.fn(() => ({ set: vi.fn(() => ({ where: vi.fn(async () => undefined) })) })),
    query: { messages: { findMany: vi.fn(async () => []) } },
  },
}));

vi.mock("ai", () => ({
  streamText: vi.fn(() => ({
    toTextStreamResponse: () => new Response("stream", { headers: { "X-Chat-Id": "chat_1" } }),
  })),
}));

vi.mock("@/lib/anthropic", () => ({ models: { default: {} } }));

describe("POST /api/chat", () => {
  beforeEach(() => vi.clearAllMocks());

  it("lehnt leere Messages ab (400)", async () => {
    const { POST } = await import("@/app/api/chat/route");
    const req = new Request("http://localhost/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: "" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("lehnt Messages > 2000 Zeichen ab (400)", async () => {
    const { POST } = await import("@/app/api/chat/route");
    const req = new Request("http://localhost/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: "a".repeat(2001) }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });
});
```

- [ ] **Step 5: Tests laufen lassen**

```bash
npm run test
```

Erwartet: Alle Tests PASS (6 von system-prompt + 2 von chat-route = 8 Tests).

- [ ] **Step 6: Commit**

```bash
git add src/lib/anthropic.ts src/app/api/chat src/tests/chat-route.test.ts
git commit -m "feat: /api/chat streaming handler with message persistence"
```

---

## Task 8: Minimal Chat-UI (Client-Component)

**Files:**
- Create: `Lexi/src/app/chat/page.tsx`
- Create: `Lexi/src/components/Chat.tsx`
- Create: `Lexi/src/components/Message.tsx`

- [ ] **Step 1: Message-Component**

Create `Lexi/src/components/Message.tsx`:

```tsx
export interface MessageProps {
  role: "user" | "assistant";
  content: string;
}

export function Message({ role, content }: MessageProps) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap ${
          isUser ? "bg-[#25abd6] text-white" : "bg-slate-100 text-slate-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Chat-Component (Client)**

Create `Lexi/src/components/Chat.tsx`:

```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Message, type MessageProps } from "./Message";

export function Chat() {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatId, setChatId] = useState<string | undefined>();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  async function send() {
    if (!input.trim() || isLoading) return;
    const userMsg: MessageProps = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg, { role: "assistant", content: "" }]);
    setInput("");
    setIsLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId, message: userMsg.content }),
    });

    if (!res.ok || !res.body) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "assistant", content: "Oops, Lexi hat kurz einen Wackler. Versuch's bitte nochmal." },
      ]);
      setIsLoading(false);
      return;
    }

    const newChatId = res.headers.get("X-Chat-Id");
    if (newChatId) setChatId(newChatId);

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistantText = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistantText += decoder.decode(value, { stream: true });
      setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: assistantText }]);
    }
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto bg-white">
      <header className="border-b border-slate-200 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#25abd6] text-white flex items-center justify-center font-bold">L</div>
        <div>
          <div className="font-semibold text-slate-900">Lexi</div>
          <div className="text-xs text-slate-500">Deine KI-Lernhilfe</div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
        {messages.length === 0 ? (
          <div className="text-center text-slate-400 mt-20 text-sm">
            Hallo! Stelle mir eine Frage zu deinen Hausaufgaben.
          </div>
        ) : (
          messages.map((m, i) => <Message key={i} role={m.role} content={m.content} />)
        )}
      </div>

      <form
        className="border-t border-slate-200 px-6 py-4 flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          maxLength={2000}
          placeholder="Frage eingeben..."
          className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#25abd6]"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-5 py-2 rounded-xl bg-[#25abd6] text-white font-medium disabled:opacity-40"
        >
          {isLoading ? "…" : "Senden"}
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 3: Chat-Page**

Create `Lexi/src/app/chat/page.tsx`:

```tsx
import { Chat } from "@/components/Chat";

export default function ChatPage() {
  return <Chat />;
}
```

- [ ] **Step 4: Dev-Server starten & manueller E2E-Test**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npm run dev
```

Browser: http://localhost:3000/chat — muss auf `/sign-in` redirecten (Clerk-Middleware). Nach Login: Chat-UI sichtbar.

Testfrage: "Erklär mir den Satz des Pythagoras"
Erwartet: Antwort streamt rein, pädagogisch, deutsch, Schritt für Schritt.

Testfrage: "Das ist meine Mathe-Klausur morgen: 3x + 7 = 22. Was ist x?"
Erwartet: Lexi verweigert direkte Lösung, bietet Übungshilfe an.

Dev-Server stoppen.

- [ ] **Step 5: Commit**

```bash
git add src/app/chat src/components/Chat.tsx src/components/Message.tsx
git commit -m "feat: minimal chat UI with streaming responses"
```

---

## Task 9: Landing-Page mit CTA

**Files:**
- Replace: `Lexi/src/app/page.tsx`

- [ ] **Step 1: Landing-Page**

Replace `Lexi/src/app/page.tsx`:

```tsx
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25abd6]/10 text-[#25abd6] text-sm font-medium mb-8">
          Neu · KI-Lernhilfe
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Hallo, ich bin <span className="text-[#25abd6]">Lexi</span>.
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Deine geduldige KI für Hausaufgaben. Ich erkläre dir alles Schritt für Schritt — auf Deutsch, altersgerecht, pädagogisch sauber.
        </p>

        <SignedOut>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="px-8 py-3 rounded-xl bg-[#25abd6] text-white font-semibold hover:bg-[#1e9abf] transition"
            >
              Kostenlos starten
            </Link>
            <Link
              href="/sign-in"
              className="px-8 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
              Anmelden
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <Link
            href="/chat"
            className="inline-block px-8 py-3 rounded-xl bg-[#25abd6] text-white font-semibold hover:bg-[#1e9abf] transition"
          >
            Zum Chat →
          </Link>
        </SignedIn>

        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          <Feature title="Pädagogisch" desc="Erklärt statt abliefert. Du lernst, Lexi hilft." />
          <Feature title="Kostenlos" desc="10 Fragen pro Tag, ohne Zahlung, ohne Werbetracker." />
          <Feature title="Lehrplan-nah" desc="Fokus auf NRW-Lehrplan für Mathe, Deutsch, Englisch." />
        </div>

        <p className="mt-16 text-sm text-slate-500">
          Ein Angebot von{" "}
          <a href="https://nachhilfe-aber-richtig.de" className="text-[#25abd6] hover:underline">
            Nachhilfe, aber richtig!
          </a>{" "}
          in Duisburg.
        </p>
      </div>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200">
      <div className="font-semibold text-slate-900 mb-2">{title}</div>
      <div className="text-sm text-slate-600">{desc}</div>
    </div>
  );
}
```

- [ ] **Step 2: Manuelle Verifikation**

```bash
npm run dev
```

Browser: http://localhost:3000 — Landing-Page soll erscheinen, CTA-Buttons funktionsfähig.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: landing page with hero and feature highlights"
```

---

## Task 10: Vercel-Deployment + Subdomain-DNS

**Files:**
- Keine Code-Änderungen; Infrastruktur-Setup

- [ ] **Step 1: Vercel-Projekt anlegen**

```bash
cd /Users/test/Desktop/Claude-Code/Projekte/Webseiten-Builder/Lexi
npx vercel@latest link
npx vercel@latest
```

Interaktiv: "Set up and deploy? Y", Scope wählen, "Link to existing project? N", Projekt-Name `lexi-ki`, Directory `./`.

Preview-URL bekommen (z.B. `lexi-ki-xxx.vercel.app`).

- [ ] **Step 2: Env-Vars auf Vercel setzen**

```bash
npx vercel@latest env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# paste value, select Preview + Production + Development

npx vercel@latest env add CLERK_SECRET_KEY
npx vercel@latest env add CLERK_WEBHOOK_SIGNING_SECRET
npx vercel@latest env add DATABASE_URL
npx vercel@latest env add ANTHROPIC_API_KEY

# Die NEXT_PUBLIC_CLERK_SIGN_*-URLs auch:
npx vercel@latest env add NEXT_PUBLIC_CLERK_SIGN_IN_URL
npx vercel@latest env add NEXT_PUBLIC_CLERK_SIGN_UP_URL
npx vercel@latest env add NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL
npx vercel@latest env add NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL
```

- [ ] **Step 3: Production-Deployment**

```bash
npx vercel@latest --prod
```

Production-URL bekommen (z.B. `lexi-ki.vercel.app`).

- [ ] **Step 4: Subdomain `lexi` auf Hauptdomain einrichten**

Mustafa-Aktion ODER per Vercel-Dashboard:
- Vercel → `lexi-ki` Projekt → Settings → Domains → "Add" → `lexi.nachhilfe-aber-richtig.de`
- Vercel fordert DNS-Record (CNAME) — da die Hauptdomain `nachhilfe-aber-richtig.de` vermutlich schon auf Vercel läuft, wird das automatisch gesetzt. Sonst: manueller CNAME beim DNS-Provider.

Warten (5-60 min Propagation), dann https://lexi.nachhilfe-aber-richtig.de öffnen.

- [ ] **Step 5: Clerk-Webhook-URL auf Production umstellen**

Mustafa-Aktion: Clerk-Dashboard → Webhooks → Endpoint editieren → URL = `https://lexi.nachhilfe-aber-richtig.de/api/webhooks/clerk`.

- [ ] **Step 6: Clerk-Domain hinzufügen**

Mustafa-Aktion: Clerk-Dashboard → Domains → Production-Domain = `lexi.nachhilfe-aber-richtig.de`.

- [ ] **Step 7: E2E-Smoke-Test Production**

- https://lexi.nachhilfe-aber-richtig.de/sign-up → Test-Account anlegen
- https://lexi.nachhilfe-aber-richtig.de/chat → 2-3 Fragen stellen
- Neon-Dashboard → Tables → `users`, `chats`, `messages` — Einträge prüfen
- In `messages`: User-Fragen + Lexi-Antworten vorhanden?

- [ ] **Step 8: Commit + Push**

```bash
git add vercel.json 2>/dev/null || true
git commit --allow-empty -m "chore: production deployment on lexi.nachhilfe-aber-richtig.de"
git push -u origin main
```

---

## Task 11: .env-Template und README finalisieren

**Files:**
- Create: `Lexi/.env.local.example`
- Create: `Lexi/README.md`

- [ ] **Step 1: .env-Template**

Create `Lexi/.env.local.example`:

```
# Clerk (https://dashboard.clerk.com → API Keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SIGNING_SECRET=whsec_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/chat
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/chat

# Neon Postgres (Vercel Marketplace → Storage → Neon)
DATABASE_URL=postgresql://...

# Anthropic (https://console.anthropic.com)
ANTHROPIC_API_KEY=sk-ant-...
```

- [ ] **Step 2: README**

Create `Lexi/README.md`:

```markdown
# Lexi — KI-Lernhilfe

Eigenständige KI-Lernhilfe für Schüler, entwickelt als Marketing-Arm von "Nachhilfe, aber richtig!" in Duisburg.

**Production:** https://lexi.nachhilfe-aber-richtig.de

## Setup

\`\`\`bash
cp .env.local.example .env.local
# Keys eintragen, siehe Kommentare

npm install
npm run db:push    # Schema nach Neon pushen (nur beim ersten Setup)
npm run dev
\`\`\`

## Tests

\`\`\`bash
npm run test
\`\`\`

## Deployment

\`\`\`bash
npx vercel --prod
\`\`\`

## Architektur

Siehe Spec: `../Nachhilfe/docs/superpowers/specs/2026-04-23-lexi-ki-lernhilfe-design.md`.
```

- [ ] **Step 3: Gitignore prüfen**

Sicherstellen, dass `Lexi/.gitignore` enthält:

```
.env*.local
.vercel
```

(Steht bereits drin bei Next.js-Init. Nur verifizieren.)

- [ ] **Step 4: Commit + Push**

```bash
git add .env.local.example README.md .gitignore
git commit -m "docs: env template and README"
git push
```

---

## Task 12: Phase-1-Abnahme

- [ ] **Step 1: Checkliste durchgehen**

Mustafa prüft:
- [ ] Landing `https://lexi.nachhilfe-aber-richtig.de` lädt sauber (Mobile + Desktop)
- [ ] Sign-Up → Magic-Link kommt per Email an
- [ ] Sign-Up → Google-Login klappt
- [ ] Nach Login → `/chat` zeigt Chat-UI
- [ ] Frage "Erklär mir Bruchrechnung" → sauberer Streaming-Output
- [ ] Frage mit Klausur-Trigger → Lexi verweigert Lösung höflich
- [ ] `messages`-Tabelle in Neon zeigt Einträge
- [ ] Keine JavaScript-Fehler in Browser-Konsole
- [ ] Vercel-Deployment grün, keine Errors in Logs

- [ ] **Step 2: STATE + MEMORY aktualisieren**

Edit `Nachhilfe/.ai-state/STATE.md` — Handoff-Sektion ergänzen:

```markdown
**Stand 2026-XX-XX:**
- Lexi Phase 1 abgeschlossen: Grundgerüst live auf lexi.nachhilfe-aber-richtig.de
- Auth (Clerk), DB (Neon), Chat (Haiku 4.5) funktionieren
- Nächste Phase: Dashboard + Rate Limit + Foto-Upload
```

- [ ] **Step 3: Plan für Phase 2 anstoßen**

In neuer Session: `superpowers:writing-plans`-Skill aufrufen mit Bezug auf Spec-Phasen-Abschnitt 2.

---

## Self-Review (Author-Check)

**Spec coverage:**
- ✅ Subdomain-Hosting → Task 10
- ✅ Next.js + TS + Tailwind → Task 1
- ✅ Clerk Auth (Magic Link + Google) → Task 3
- ✅ Alter-Gate → Clerk-Config (Screen-Text-Feld wird in Phase 2 verfeinert mit Custom-Feld; MVP: Clerk-Standard-Flow reicht)
- ✅ Neon DB + Schema → Task 4, 5
- ✅ Chat-UI (minimal) → Task 8
- ✅ `/api/chat` mit Haiku 4.5 → Task 7
- ✅ System-Prompt mit Anti-Cheat → Task 6
- ✅ Landing-Page mit CTA → Task 9
- ⏭️ Sidebar + Chat-History → Phase 2
- ⏭️ Fach-Filter → Phase 2
- ⏭️ Rate Limit → Phase 2
- ⏭️ Foto-Upload → Phase 2
- ⏭️ Anonymer Modus (2 Test-Fragen) → Phase 2
- ⏭️ RAG → Phase 3

Phase 1 deckt "minimal lauffähiges Chat-Produkt mit Auth + DB + Streaming" ab. Korrekt scoped.

**Placeholder scan:** Keine TBDs, keine "similar to Task N", keine "handle edge cases"-Phrasen. Alle Code-Steps enthalten vollständigen Code.

**Type consistency:** `chatId: string` konsistent, `role: "user" | "assistant"` konsistent, `messages`-Tabelle-Spalten stimmen über Tasks hinweg.

**Fixable concerns:**
- Im Alter-Gate-Feature nutzen wir zunächst Clerk-Standard (ohne Custom-Field). Der vollständige Alter-Gate (mit Eltern-Email-Feld) kommt in Phase 2, Task "Alter-Gate Custom-Field". Dokumentiert in Spec-Self-Review-Notiz.

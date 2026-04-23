# Lexi Phase 2 — Design Spec

**Datum:** 2026-04-23
**Status:** Design approved, ready for implementation plan
**Voraussetzung:** Phase 1 live (siehe `2026-04-23-lexi-phase-1-grundgeruest.md`)

## Motivation & Ziele

Phase 1 hat Lexi live gebracht (Auth, Chat, Persistenz, Foto-Upload). Zwei Schmerzpunkte bleiben:

1. **Kostenrisiko:** Ohne Rate Limit kann ein einzelner User hundert Anfragen/Stunde absetzen. Claude Haiku ist günstig, Sonnet (Vision) nicht. Ohne Schutz sind 50 € Tagesausgaben bei einem motivierten User möglich.
2. **Conversion-Barriere:** Der Sign-up-Zwang vor der ersten Frage ist die höchste Einstiegshürde. Viele Besucher werden nie erfahren, wie gut Lexi ist, weil sie die Registrierung abbrechen.

Phase 2 adressiert beides: harte Rate Limits als Ventil für Kosten und Conversion-Druck Richtung Nachhilfe, plus 2 anonyme Test-Fragen als Demo-Modus.

**Nicht in Scope:**
- Fach-Auswahl (Subject-Router für System-Prompt)
- Chat-Export / DSGVO-Datenexport als UI-Feature
- Admin-Dashboard
- Separate `/settings`-Page
- Dark-Mode-Toggle

## Features (3)

1. **Rate Limit** — 10 Fragen/Tag für eingeloggte User, 2 Lifetime-Fragen für anonyme User
2. **Anonymer Modus** — Chat ohne Login für 2 Fragen, danach Sign-Up-Wall mit Chat-Migration
3. **Usage-Counter** — Live-Anzeige in Sidebar (`7 / 10 heute`)

## Architektur

### Tech-Stack-Ergänzungen
- **Upstash Redis** via `@upstash/redis` + `@upstash/ratelimit` — serverless, pay-per-request, free tier 10k req/day reicht locker für den Launch
- **`date-fns-tz`** für Berlin-Midnight-TTL (DST-safe)
- **`js-cookie`** nicht nötig — wir setzen Cookies serverseitig via `Response.headers`

### Rate-Limit-Keys
```
lexi:rl:user:{clerkUserId}   → counter, int, TTL bis Berlin-Midnight
lexi:rl:anon:{cookieId}      → counter, int, KEIN TTL (lifetime)
```

### Flow pro `/api/chat`-Call
```
1. auth() → userId?
   ├─ ja:  key = lexi:rl:user:{userId},   limit = 10, ttl bis Berlin-Midnight
   └─ nein: lies anon_id aus Cookie
            ├─ kein Cookie: 401 "Bitte einmal Seite neu laden"
            └─ Cookie da:    key = lexi:rl:anon:{anonId}, limit = 2, kein TTL
2. Upstash: INCR key, check ob > limit
   └─ wenn überschritten: 429 "daily_limit_reached" / "anon_limit_reached"
3. Bei INCR wenn vorher 0 und user-mode: PEXPIREAT setzen auf Berlin-Midnight-Epoch
4. Nachricht an LLM weiterreichen wie in Phase 1
```

### Anonymer Flow — End-to-End

**1. First Visit auf `/chat`:**
- Middleware liest Cookie `lexi_anon_id`
- Fehlt er und User nicht eingeloggt → Middleware schreibt Cookie (UUIDv4, HttpOnly, SameSite=Lax, `Max-Age=31536000`, Path=/)
- Request wird durchgelassen

**2. Frage stellen:**
- `/api/chat`-Route ist nicht mehr Clerk-protected
- Route liest entweder `userId` von Clerk ODER `anon_id` aus Cookie
- Speichert Chat/Message in `anon_chats` / `anon_messages` (neue Tabellen)

**3. Nach 2. Antwort bei Anonym:**
- Sobald die 2. Assistant-Antwort fertig gestreamt ist, Frontend zeigt Sign-Up-Modal proaktiv
- Modal-Text: „Deine 2 Test-Fragen sind aufgebraucht. Melde dich jetzt kostenlos an — dein Chat bleibt erhalten."
- Chat-Input disabled
- Trigger-Logik: Frontend liest `X-Usage-Remaining: 0` + `X-Usage-Mode: anon` aus der Stream-Response-Header nach Completion → setzt `showAnonGate = true`

**4. Sign-Up / Sign-In Migration:**
- Cookie ist HttpOnly — Frontend kann ihn nicht lesen, triggert nur die Migration
- Nach erfolgreichem Sign-In: Client-side detection via `useUser()`-Hook → wenn user vorher nicht da, jetzt da → fetch `/api/migrate-anon` (POST)
- Server liest Cookie `lexi_anon_id`, sucht `anon_chats WHERE anon_id = ...`, verschiebt alle rows in `chats` mit neuer `user_id`, kopiert `anon_messages` in `messages`
- Anon-Tabellen-Rows werden gelöscht
- Response setzt `Set-Cookie: lexi_anon_id=; Max-Age=0` (clear)
- Frontend reload nach Migration um state zu refreshen

**5. Falls Upload bei anonym versucht:**
- `/api/upload` bleibt Clerk-protected (auth().userId required)
- Frontend zeigt Upload-Button nur wenn eingeloggt, sonst disabled mit Tooltip „Bitte anmelden"

### Datenbank — neue Tabellen

```sql
-- src/db/schema.ts
anon_chats:
  id uuid PK
  anon_id text NOT NULL                     -- = Cookie-Wert
  title text NOT NULL DEFAULT 'Neuer Chat'
  subject text
  created_at timestamp DEFAULT now()
  updated_at timestamp DEFAULT now()

anon_messages:
  id uuid PK
  chat_id uuid NOT NULL REFERENCES anon_chats(id) ON DELETE CASCADE
  role text NOT NULL                        -- 'user' | 'assistant'
  content text NOT NULL
  token_count int DEFAULT 0
  created_at timestamp DEFAULT now()
  -- KEIN attachment_url: anonymous users dürfen nicht uploaden
```

**Indexes:** `anon_id` auf `anon_chats` für Migration-Speed.

### Usage-Counter API

```
GET /api/usage
  Auth: eingeloggt ODER anon-cookie
  Response:
    { used: 7, limit: 10, resetAt: "2026-04-24T23:00:00Z" }       // eingeloggt
    { used: 1, limit: 2,  resetAt: null }                          // anonym
```

Frontend pollt nach jedem Send erfolgreich — oder liest Header `X-Usage-Remaining` direkt aus `/api/chat`-Response. **Entscheidung:** Header, spart 1 Round-Trip.

### Middleware-Änderung

```ts
// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { randomUUID } from "node:crypto";

const isApiProtected = createRouteMatcher(["/api/upload"]);

export default clerkMiddleware(async (auth, req) => {
  // Nur /api/upload verlangt Login
  if (isApiProtected(req)) await auth.protect();

  // Anonymen Cookie setzen auf /chat wenn fehlend
  const res = NextResponse.next();
  const url = new URL(req.url);
  if (url.pathname.startsWith("/chat") || url.pathname === "/api/chat") {
    const { userId } = await auth();
    if (!userId && !req.cookies.get("lexi_anon_id")) {
      res.cookies.set("lexi_anon_id", randomUUID(), {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    }
  }
  return res;
});
```

**`/chat` Page:** keine Auth-Protection mehr. Clerk-UI (UserButton) wird conditionally gerendert: wenn `useUser()` → zeigen, sonst "Anmelden"-Button.

## UI-Änderungen

### Sidebar — Usage-Counter Block

Unter dem Brand-Header und über dem „Neuer Chat"-Button:

```
┌──────────────────────────┐
│  Heute:  7 / 10 Fragen   │
│  ████████████░░░░░       │   <- Gradient-Progress
│  Reset 00:00 Uhr         │
└──────────────────────────┘
```

Bei < 3 verbleibend: Progress-Bar rot (#ef4444). Bei 0: Text rot + Hinweis „Limit erreicht — komm morgen zurück oder buche deine Probestunde" + direkter Link-Button zur Nachhilfe-Site.

Bei anonym:
```
┌──────────────────────────┐
│  Test:  1 / 2 Fragen     │
│  ██████░░░░░             │
│  Nach 2 Fragen: Anmeldung│
└──────────────────────────┘
```

### Rate-Limit-Banner im Chat-Bereich

Wenn 429 von `/api/chat` kommt:
- Chat-Input disabled
- Card oberhalb der Messages: „**Tageslimit erreicht.** Du hast heute 10 Fragen gestellt. Komm morgen um 00:00 zurück — oder buche deine kostenlose Probestunde bei Nachhilfe, aber richtig!"
- Primary-Button: „Probestunde buchen" → `https://nachhilfe-aber-richtig.de/#kontakt` (external)
- Secondary-Button: „Zurück zur Nachhilfe-Seite"

### Anonym-Sign-Up-Modal

Nach 2. anonymer Antwort, beim Fokus auf Chat-Input:
- Full-screen-Overlay (nicht wegklickbar außer Sign-Up oder expliziten „Später"-Link)
- Title: „Weiter geht's mit Account"
- Body: „Du hast deine 2 Test-Fragen genutzt. Melde dich kostenlos an — **dein Chatverlauf bleibt erhalten** und du bekommst 10 Fragen pro Tag."
- Primary-Button: „Kostenlos registrieren" → `/sign-up?from=anon`
- Link: „Lieber später" → schließt Modal, Chat-Input bleibt disabled, Banner oben zeigt „Test beendet — anmelden für mehr"

## Error Handling

| Szenario | Response | Frontend |
|---|---|---|
| Upstash down | 500 Server Error + Fallback: request durchlassen, loggen | Chat funktioniert, Counter zeigt „—" |
| Cookie fehlt bei Anonym | 401 `cookie_missing` | „Bitte Seite neu laden" |
| 429 User | 429 `daily_limit_reached` | Rate-Limit-Banner + Input disabled |
| 429 Anonym | 429 `anon_limit_reached` | Sign-Up-Modal sofort |
| Migration fail (anon_id nicht gefunden) | 200 `{migrated: 0}` | Silent, nix tun |
| Migration fail (DB-Error) | 500 | Toast „Chat-Migration fehlgeschlagen, alte Chats bleiben zugänglich über Cookie" — kein Blocker |

## Security-Review

- **Rate Limit auf `/api/upload`:** teilt sich Bucket mit `/api/chat` (1 Upload = 1 Chat-Call), daher automatisch abgedeckt.
- **Cookie-Hijacking:** HttpOnly verhindert XSS-Zugriff. SameSite=Lax verhindert CSRF.
- **Anonymer Spam-Vektor:** Ein Angreifer könnte per Script immer neue Cookies generieren → 2 Fragen pro Cookie × 1000 Scripts = 2000 Fragen. Gegenmaßnahme: **IP-basiertes zweites Limit** bei anonym: max 20 Fragen/IP/Tag (über Upstash `lexi:rl:anon-ip:{ip}`). Nicht DSGVO-problematisch weil kurze Retention + nur technisch.
- **Cookie-Löschen-Abuse:** User löscht Cookie → bekommt neue 2 Fragen. Durch IP-Limit begrenzt auf 20/Tag.
- **Migration-Race:** Zwei gleichzeitige Sign-Ups mit demselben anon_id-Cookie (theoretisch möglich bei Double-Submit) → DB-Constraint + UPSERT auf user_id pro anon_chats.id (IDs sind UUIDs, keine Kollision).
- **Keine PII in Logs:** Cookie-IDs sind UUIDs, IPs werden nur als hash(ip+salt) geloggt falls überhaupt nötig (Debugging).

## Testing

### Unit-Tests (Vitest)
- `lib/rate-limit.ts`: Mock-Redis, 11. Call → 429
- `lib/rate-limit.ts`: Berlin-Midnight-TTL-Berechnung, DST-Shift (Winter/Sommer-Szenario)
- `lib/anon-cookie.ts`: Cookie-Parse, UUID-Format-Validierung

### Integration-Tests
- `/api/chat` POST als Anonym ohne Cookie → 401
- `/api/chat` POST als Anonym mit Cookie, 3. Call → 429 anon_limit_reached
- `/api/chat` POST als User, 11. Call → 429 daily_limit_reached
- `/api/usage` GET für beide User-Typen, korrekte Werte
- `/api/migrate-anon` POST: verschiebt `anon_chats` + `anon_messages` korrekt in `chats` / `messages`

### E2E-Tests (nicht in Scope, spätere Phase)

## Rollout-Reihenfolge

1. Upstash-Store via `vercel integration add` erstellen, `UPSTASH_REDIS_REST_URL` + `_TOKEN` in Vercel-Env
2. `anon_chats` + `anon_messages` Schema pushen via `drizzle-kit push`
3. Rate-Limit-Logik + Upstash-Client in `src/lib/rate-limit.ts`
4. `/api/chat` erweitern um Rate-Check (anfangs nur für eingeloggte, Tests grün)
5. Anonymer Flow: Middleware, neue Tabellen nutzen, `/api/chat` Dual-Mode
6. Migration-API `/api/migrate-anon` + Frontend-Trigger nach Sign-In
7. UI: Usage-Counter-Komponente, Rate-Limit-Banner, Anon-Sign-Up-Modal
8. IP-Limit für anonyme als zweites Netz
9. Test-Pass + Deploy

## Out of Scope (expliziter Verzicht)

- **Fach-Router:** Verschiebt sich auf Phase 3 nach Launch
- **Chat-Export als PDF/MD:** Nice-to-have, nicht businesskritisch
- **Admin-Dashboard:** Analytics via Vercel + Neon direkt reicht
- **Account löschen UI:** Clerk-UserButton kann das bereits (via Deletion-Webhook → unsere DB)
- **Dark-Mode:** Kein Bedarf, Single-Theme passt zum Design-System
- **Settings-Page:** UserButton deckt Profile/Logout/Password-Reset ab

## Open Questions — geklärt

- Anonyme Uploads: **Nein**, zu hohes Missbrauchsrisiko
- Upload-Rate-Limit: **teilt sich Bucket mit Chat-Calls** (einfacher, fair)
- Reset-Zeitzone: **Berlin-Midnight** via `date-fns-tz`
- Anonym-Flow-Storage: **separate Tabellen** (`anon_chats`/`anon_messages`), nicht Foreign-Key auf `users` mit NULL — saubereres Schema

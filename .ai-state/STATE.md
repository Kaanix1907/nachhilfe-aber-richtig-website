# State — Nachhilfe Website

**Zuletzt aktualisiert:** 2026-04-26 (sechste Session — Incident: API-Key-Leak in Claude Code, Chatbot-Outage)

## Aktueller Focus
Beide Projekte live.
- **Nachhilfe:** https://nachhilfe-aber-richtig.de — mit neuem `/lexi` Marketing-Unterseite, Hero-Badge, Navbar-Link, Lexi-Teaser-Widget statt altem Chatbot.
- **Lexi:** https://lexi.nachhilfe-aber-richtig.de — Phase 1 komplett abgenommen. Auth, Chat mit Streaming, Persistenz, Sidebar-History, Foto-Upload mit Vision-Mode (Sonnet 4.6), konsistentes Branding.

## Was funktioniert
- [x] Hero mit 18 echten Google-Bewertungen (vertikal Desktop, horizontal Mobile)
- [x] Services-Sektion mit 4 Leistungskarten
- [x] Bildung & Teilhabe Sektion (Jobcenter + Stadt Duisburg)
- [x] USPs-Sektion ("Warum Nachhilfe, aber richtig?")
- [x] Kontaktformular (mailto-basiert)
- [x] KI-Chatbot (Claude API, /api/chat)
- [x] SEO: JSON-LD (EducationalOrganization + FAQ), Sitemap, robots.txt, OG-Image
- [x] Scroll-Animationen (FadeIn-Komponente, IntersectionObserver)
- [x] Rate Limiting auf /api/chat und /api/reviews
- [x] Vercel Production Deployment

## Offene Blocker
_Nichts bekannt_

## Nächste Schritte
1. Unterseiten: /leistungen, /ueber-uns (noch nicht gebaut)
2. /impressum und /datenschutz — Inhalt prüfen/aktualisieren
3. ANTHROPIC_API_KEY als Vercel Env-Variable setzen (Chatbot funktioniert erst dann live)
4. Google Search Console einrichten + Sitemap einreichen
5. GOOGLE_PLACES_API_KEY optional: Für Live-Review-Updates von Google

---
## Handoff (letzter Stand für nächste Session)
_Diese Sektion wird am Ende jeder Session aktualisiert._

**Stand 2026-04-25 (fünfte Session — Chatbot-Tracking + SEO Lexi):**

**Was erledigt:**
- **Chatbot-Tracking** auf Nachhilfe `/api/chat` eingebaut (`src/lib/track.ts`):
  - Upstash Redis (Lexi-Store mitgenutzt, Key-Prefix `chat:` — kollidiert nicht)
  - Counter: `chat:total`, `chat:msgs:total`, `chat:daily:YYYY-MM-DD`, `chat:ips:YYYY-MM-DD` (Set, gehashte IPs, 90 Tage TTL)
  - Fire-and-forget — blockiert Chat-Antwort nie
  - DSGVO: IPs mit SHA256 + IP_SALT gehasht, kein Klartext
- **Stats-Endpoint** `/api/admin/stats` mit Token-Auth (`STATS_TOKEN` in env, Header `x-stats-token` oder `?token=`)
- **Lexi SEO-Schemas** auf `/lexi`:
  - `SoftwareApplication` (kostenlose EducationalApplication, EUR 0, deutsch)
  - `FAQPage` mit 6 Fragen (Was ist Lexi, Kosten, Fächer, Schreibt Hausaufgaben?, Verfügbarkeit, Anbieter)
  - Verifiziert live: 6 JSON-LD Blöcke im HTML
- Vercel Env-Vars für Production+Preview+Development gesetzt: KV_*, REDIS_URL, STATS_TOKEN, IP_SALT
- `~/.zshenv` synced via `sync_project_keys.sh` — ich kann jederzeit Stats curlen

**KRITISCH offen — Bot Prod-Funktionalität:**
`ANTHROPIC_API_KEY` ist überall ein Placeholder (`dein-api-key-hier`):
- in `.env.local`
- in `~/.zshenv`
- War **nie** in Vercel Production gesetzt → der Chatbot auf nachhilfe-aber-richtig.de hat live noch nie geantwortet, alle Calls geben 500
- Mein Versuch ihn zu setzen hat den Placeholder reingeschoben → wieder entfernt aus Vercel
- **Mustafa muss echten Key generieren** (https://console.anthropic.com/settings/keys), in `.env.local` ersetzen, dann „key drin" sagen → ich pushe + redeploye

**Wie Stats abgerufen werden (sobald Bot läuft):**
```
curl "https://nachhilfe-aber-richtig.de/api/admin/stats?token=$STATS_TOKEN"
```
Liefert: `{total, totalMessages, today: {date, calls, uniqueUsers}, last30Days: [...]}`
STATS_TOKEN steht in `.env.local` und in Vercel Production.

**Wichtige Entscheidungen:**
- KV-Vars in `.env.local` (von Lexi kopiert) hatten Anführungszeichen umrandet — beim ersten `vercel env add` als String-Wert mit Quotes übernommen → Build-Fehler. Fix: Quotes vor Push strippen.
- `Redis.fromEnv()` muss lazy initialisiert werden (Funktion-Wrapper), sonst wird's beim Next.js-Build evaluiert → crasht beim Page-Data-Sammeln.
- Lexi-Redis-Store wird jetzt von zwei Apps genutzt — sauber via Key-Prefixes getrennt. Falls in Zukunft Konflikt: separater Store via `vercel integration add upstash/upstash-kv` für Nachhilfe.

**Offen für nächste Session:**
1. **ANTHROPIC_API_KEY** echt setzen → Bot live machen
2. Search Console: `/lexi` URL-Inspection + Indexierung beantragen (Schemas sollten dann in 1–3 Tagen sichtbar sein)
3. Rich Results Test prüfen: https://search.google.com/test/rich-results?url=https%3A%2F%2Fnachhilfe-aber-richtig.de%2Flexi
4. Live-Abnahme Lexi Phase 2 (steht seit 2026-04-23 offen)
5. Unterseiten `/leistungen`, `/ueber-uns`

---

**Stand 2026-04-23 (vierte Session — Phase 2 Code fertig + deployed):**

**Was erledigt:**
- Vercel CLI auf v52 upgraded (fixt preview-env-Bug für später)
- Lexi Phase 2 Spec + Implementation Plan geschrieben (`docs/superpowers/specs/2026-04-23-lexi-phase-2-design.md` + `docs/superpowers/plans/2026-04-23-lexi-phase-2.md`)
- Phase 2 Features implementiert + deployed auf `lexi.nachhilfe-aber-richtig.de`:
  - Upstash Redis via `vercel integration add upstash/upstash-kv` (Store `upstash-kv-bronze-horizon`)
  - DB-Schema `anon_chats` + `anon_messages` (mit Index auf anon_id)
  - Libs: `berlin-time.ts`, `anon-cookie.ts`, `rate-limit.ts`, `migrate-anon.ts` — alle TDD, 28 Tests grün
  - API-Routes: `/api/chat` Dual-Mode, `/api/chats*` Anon-Fallback, `/api/usage`, `/api/migrate-anon`
  - Middleware: `/chat` nicht mehr Clerk-protected, setzt Cookie bei Anon
  - UI-Komponenten: `UsageCounter`, `RateLimitBanner`, `AnonSignUpModal`, `useAnonMigration` Hook
  - ChatSidebar zeigt Counter + SignInButton bei Anon
  - Chat.tsx handled 429, Banner, Gate-Modal, migration

**Live aber NICHT abgenommen:**
Mustafa hat die Abnahme-Checkliste (Task 32) nicht final durchgegangen. Beim nächsten Mal:
1. Inkognito auf `/chat` → 2 anon Fragen → Modal sollte erscheinen
2. Sign-Up → Migration-Reload → Counter zeigt user-mode
3. 11. Frage als User → RateLimitBanner + Probestunde-Button

**Wichtige Entscheidungen:**
- Upstash env-vars sind `KV_REST_API_URL/TOKEN` (nicht UPSTASH_REDIS_*) — `Redis.fromEnv()` erkennt beide automatisch.
- `anon_messages` hat KEIN `attachment_url` — anonyme User dürfen nicht uploaden (Missbrauchsschutz).
- IP-Limit für Anon: 20/Tag/IP als zweites Netz gegen Cookie-Farming.
- `vi.hoisted()` nötig für Mock-Setup in vitest 4.x (sonst ReferenceError bei Mock-Funktionen).

**Offen für nächste Session:**
1. **Live-Abnahme Phase 2** — der Mustafa-Test-Flow oben
2. Google Search Console einrichten (beide Domains + Sitemaps)
3. Unterseiten `/leistungen` + `/ueber-uns` auf Nachhilfe bauen
4. Duplikat-Blob-Store `store_SzMjqlTSUFa3HNjq` löschen (via Dashboard)
5. Altes Vercel-Projekt `lexi-qs7w` (leer) löschen

---

**Stand 2026-04-23 (dritte Session — Lexi live + Nachhilfe-Integration):**

**Lexi Phase 1 — KOMPLETT ABGESCHLOSSEN:**
- Code auf GitHub `Kaanix1907/Lexi` (9+ Commits, main, gepusht)
- Vercel-Projekt `lexi` in Team `info-89370544s-projects`, linked via `.vercel/project.json`
- Neon-Postgres via `vercel integration add neon` — Store `neon-pink-window`
- Vercel Blob `lexi-uploads-linked` (Store `store_vV9VGkAIUA2v7eD4`) für Foto-Uploads
- Clerk v7 komplett: Sign-In/Up, Webhook `/api/webhooks/clerk` syncen User in DB
- Subdomain `lexi.nachhilfe-aber-richtig.de` via CNAME bei IONOS → cname.vercel-dns.com
- SSL automatisch ausgestellt, HTTP 200
- DB-Schema gepushed via `drizzle-kit push`
- Env-Vars in Vercel (Production + Development): Clerk Publishable, Clerk Secret, Anthropic, Database_URL, Clerk_Webhook_Signing_Secret, Blob_Read_Write_Token
- Preview-Env hat Vercel-CLI-v50-Bug — nicht kritisch, später bei CLI-Upgrade fixen

**Features implementiert in Session 3:**
- Streaming-Chat mit Claude Haiku 4.5 (default) / Sonnet 4.6 (Vision)
- Chat-Persistenz mit User-Isolation (Clerk userId als PK)
- Sidebar mit Chat-History, Load/Delete/New
- Foto-Upload via Vercel Blob (max 8 MB, png/jpg/webp/gif) → Multimodal-Call mit Sonnet
- Markdown-Rendering mit remark-gfm, remark-math, rehype-katex + LaTeX-Formeln
- Empty-State mit 4 Beispielfragen
- Chat-Header mit Online-Indikator
- Mobile-Sidebar (Hamburger + Overlay)
- Nachhilfe-Logo in Sidebar auf cremefarbenem Pill mit Gradient-Accent
- BioRhyme/Cabin Fonts, konsistent mit Haupt-Site
- System-Prompt v2: kleinschrittige Erklärungen, jede Operation beim Namen ("Wurzel ziehen"), Fachbegriffe in Klammern, Probe/Check am Ende

**Nachhilfe-Integration in Session 3:**
- `/lexi` Unterseite: Hero mit NEU-Badge, 6 Feature-Cards (SVG-Icons im USP-Stil), 4 Use-Cases, CTA-Banner, 5 FAQs, JSON-LD EducationalApplication
- Hero-Badge auf Startseite („NEU: Lexi — KI-Lernhilfe")
- Navbar-Link „Lexi KI" mit NEU-Pill (Desktop + Mobile)
- ChatWidget.tsx komplett umgebaut: statt Claude-Chat jetzt Lexi-Teaser-Card mit CTA direkt zu /chat
- Sitemap erweitert um `/lexi` (priority 0.9)
- Subdomain-SEO: 25 Keywords (KI Nachhilfe, Schul-KI, Hausaufgaben-KI, Mathe-KI etc.), JSON-LD, Sitemap, Robots

**User-Flow final:**
1. `nachhilfe-aber-richtig.de` → Badge oder Navbar-Link klicken
2. `/lexi` Marketing-Seite → „Lexi jetzt öffnen"
3. Direkt auf `lexi.nachhilfe-aber-richtig.de/chat` (selber Tab)
4. Clerk-Middleware redirected zu Sign-In wenn nicht eingeloggt
5. Nach Login direkt im Chat

**Security-Status:**
- Clerk Publishable Key im Chat-Verlauf (public per Definition, OK)
- Clerk Webhook Secret wurde rotiert — alter Value in Chat-Verlauf nicht mehr gültig
- Clerk Secret Key und Anthropic Key NICHT im Chat (via TextEdit eingetragen)
- `.env.local` in `.gitignore`, nie committet
- `.vercel/project.json` lokal gelinkt (in gitignore)

**Offene Punkte / Nice-to-Have für spätere Sessions:**
1. Vercel CLI auf v52 upgraden → löst Preview-Env-Bug
2. Rate Limit für Lexi `/api/chat` (Phase 2 Plan: 10 Msgs/Tag per User via Upstash)
3. Ältere Lexi-Landing kann man später redesignen (noch einfache Hero-Version)
4. Duplikat-Blob-Store `store_SzMjqlTSUFa3HNjq` via Dashboard löschen
5. Altes Vercel-Projekt `lexi-qs7w` (leer, vom ersten Import-Versuch) via Dashboard löschen
6. Unterseiten `/leistungen`, `/ueber-uns` auf Nachhilfe noch offen (Backlog)
7. Google Search Console einrichten + beide Sitemaps einreichen

---

**Stand 2026-04-23 (zweite Session — Deploy-Versuch):**

**Was erledigt:**
- Lexi gepusht auf `github.com/Kaanix1907/Lexi` (privat, main, commit `4dd96df`)
- Vercel-Projekt `lexi` via Import angelegt
- `Lexi/.env.local` befüllt mit: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `ANTHROPIC_API_KEY`
- Neon-Account vorhanden, org_id: `org-wandering-wind-19162679`
- Erster Vercel-Deploy fehlgeschlagen — erwartet, `DATABASE_URL` fehlt noch

**Blocker für Task 2 (Neon DB):**
Mustafa fand den Neon-Integrations-Dialog in der Vercel-UI nicht. Der Flow `Vercel Marketplace → Neon → Install → org_id eingeben` schlug fehl, weil Mustafa den Dialog verloren hat und die Deeplinks (`vercel.com/kaanix1907/lexi/stores` etc.) ins Leere liefen. Session frustriert abgebrochen.

**Nächste Session — Lösungsansätze (Priorität):**
1. **Vercel CLI statt UI:** `cd ../Lexi && vercel link` → `vercel env add DATABASE_URL` manuell. Neon-DB via Neon-Console erstellen (nicht via Marketplace), Connection-String kopieren, in Vercel-Env eintragen. Umgeht die ganze Marketplace-UI.
2. **Neon-DB direkt in Neon-Console anlegen:** `console.neon.tech` → Project `lexi` erstellen → Connection-String aus dem Dashboard kopieren → in Vercel-Dashboard bei Lexi-Projekt → Settings → Environment Variables → `DATABASE_URL` für alle 3 Environments setzen.
3. Mit Screenshot arbeiten — Mustafa Screenshot schicken lassen, von dem aus direkt navigieren.

**Status pro Env-Var (Lexi):**
- ✅ `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (lokal + Vercel)
- ✅ `CLERK_SECRET_KEY` (lokal + Vercel)
- ✅ `ANTHROPIC_API_KEY` (lokal + Vercel)
- ❌ `DATABASE_URL` (fehlt komplett)
- ❌ `CLERK_WEBHOOK_SIGNING_SECRET` (fehlt — kommt nach erstem erfolgreichen Deploy)
- ⚠️ Die 4 `NEXT_PUBLIC_CLERK_*_URL`-Vars wurden nicht separat bestätigt — checken.

**Security-Check:**
- Publishable Key (`pk_test_...`) im Chat-Verlauf — ist per Definition öffentlich, OK
- Secret Key + Anthropic Key NICHT im Chat (Mustafa selbst in TextEdit eingetragen, protect-env Hook hat direkten Edit blockiert)
- `.env.local` steht in `.gitignore`, nie committet
- Empfehlung: Nach finalem Deploy Clerk Secret Key einmal rotieren (Dashboard → Reveal → Rotate)

---

**Stand 2026-04-23 (erste Session — Lexi-Projekt gestartet):**

Komplettes Brainstorming + Phase-1-Implementierung für **Lexi KI-Lernhilfe** durchgeführt.
- Spec: `Nachhilfe/docs/superpowers/specs/2026-04-23-lexi-ki-lernhilfe-design.md`
- Plan: `Nachhilfe/docs/superpowers/plans/2026-04-23-lexi-phase-1-grundgeruest.md`
- Neues Repo: `../Lexi/` (GitHub: Kaanix1907/Lexi, privat, NICHT gepusht)

**Phase-1 Status — 9/12 Tasks erledigt** (alle non-key-Code):
- ✅ Lexi-Repo + GitHub + CLAUDE.md (commit 8c92d35)
- ✅ Dependencies: Clerk 7.2.5, Drizzle 0.45, AI SDK 6, Vitest (f444465)
- ✅ Clerk-Code: Middleware + Layout + Sign-In/Up Pages (70be1d8)
- ✅ Neon DB Schema (users, chats, messages) + Drizzle Client (626fe11) — DB-Push pending
- ✅ Clerk-Webhook-Route mit svix (64284a9)
- ✅ System-Prompt v1 + 6 TDD-Tests grün (f33536c)
- ✅ /api/chat Streaming-Route + 2 Input-Tests grün (40c0303) = 8 Tests total
- ✅ Chat-UI mit Streaming-Reader (b416148)
- ✅ Landing-Page mit Hero + Features (ac209b9)
- ✅ README + .env.local.example (4dd96df)

**Blocker für Task 10 (Vercel Deploy) — wartet auf Mustafa:**
1. Clerk-Account anlegen (clerk.com) + API-Keys kopieren
2. Neon-DB via Vercel Marketplace provisionieren → DATABASE_URL
3. DNS-Setup für `lexi.nachhilfe-aber-richtig.de` (Vercel macht das semi-auto)

**Wichtige Plan-Abweichung (bereits gefixt):**
- Clerk v7 exportiert `SignedIn`/`SignedOut` nicht mehr als React-Components → stattdessen `<Show when="signed-in">` verwenden
- Plan-Dokument für zukünftige Sessions: Clerk v7 kennt `<Show>` statt `<SignedIn>/<SignedOut>`

**Nächste Session:**
1. Mustafa liefert Keys → ich führe Task 10 + 12 durch (Deploy + Abnahme)
2. Phase-2-Plan schreiben (Dashboard-Sidebar, Rate Limit, Foto-Upload, anonymer Modus)

---

**Stand 2026-04-21:**
- USPs-Fix (d83e068): `h-full` auf FadeIn + Card — alle 4 Karten exakt 239px (verifiziert 1100–1920px)
- Öffnungszeiten (996d86a): Di + Mi von 13–18:30 auf 13–17 angepasst — alle Mo–Fr jetzt 13:00–17:00 (data.ts, page.tsx JSON-LD, CLAUDE.md)
- Bildung & Teilhabe (2b1965b): Jobcenter-Karte von Cyan auf Lila (Stadt-Duisburg-Farbe) für konsistente Optik
- **Noch nicht deployed** — Änderungen liegen nur auf main lokal, kein git push

**Stand 2026-04-14:**
- Alle 18 Google-Reviews mit Text extrahiert (via Puppeteer), rechtschreibkorrigiert, zentral in `data.ts`
- SEO komplett: 19 Keywords, 8 FAQ-Einträge, 18 Reviews im JSON-LD, erweitertes areaServed
- Mobile-Layout überarbeitet: kein min-h-screen, kompakte Review-Karten, bessere Abstände
- Design-Polish: FadeIn-Scroll-Animationen, Services-Karten Accent-Lines
- Production-Deploy: Commit 629a96c, Build OK (Next.js 16.2.1, Turbopack)
- Domain: nachhilfe-aber-richtig.de zeigt auf Vercel

---

## Stand 2026-04-26 (Session 6 — Incident: API-Key-Leak in Claude Code)

Ausgangs-Frage „wie viele Leute haben meine KI benutzt?" → Stats-Endpoint zeigte 0/0/0. Eskalation zu Multi-Bug-Befund.

**Bug 1 — Chatbot kaputt seit Tracking-Deploy:**
`ANTHROPIC_API_KEY` fehlte komplett in Vercel-Production. Jeder `/api/chat`-Call → 500. `trackChat()` läuft erst nach erfolgreichem Anthropic-Call, daher nie ausgelöst. Echte Antwort auf Ausgangsfrage: 0 erfolgreiche Conversations weil Bot komplett offline.

**Bug 2 — 0 Credits:**
Lexi-Key in Vercel-Prod (`vercel env add`) + lokale `.env.local` (Placeholder ersetzt) eingetragen, Redeploy. Immer noch 500. Direkt-Probe gegen `api.anthropic.com` zeigte: **Anthropic-Konto auf 0 Credits.**

**Bug 3 — SECURITY-INCIDENT (Wurzel des Credit-Verbrauchs):**
- `~/.claude.json` → `customApiKeyResponses.approved` enthielt **4 Hashes** → Claude Code (CLI) nutzte diese Keys statt Max-Abo → API-Credits verbraten.
- `~/.zshenv` exportierte global `ANTHROPIC_API_KEY` → jeder neue `claude`-Prozess sah einen API-Key.
- **Fix:** `approved`-Liste auf `[]` gesetzt + Export aus `~/.zshenv` entfernt.
- Backups: `~/.claude.json.backup-20260426-094827`, `~/.zshenv.backup-20260426-094827`.

**Key-Inventur (alle 3 lokal getestet):**
| Key | Status |
|---|---|
| Faceless YT | lebt, 0 Credits |
| Nachhilfe Agent | TOT (von Mustafa gelöscht) |
| Lexi (= aktuell Vercel-Prod-Nachhilfe + Lexi-App) | lebt, 0 Credits |

**Pending Mustafa-Actions:**
1. Anthropic-Konto Credits aufladen (https://console.anthropic.com/settings/billing)
2. Alle laufenden `claude`-Prozesse beenden + neu starten + `/login` (Max-Abo OAuth statt API-Key)
3. Bei jedem zukünftigen „Approve API key from ENV?"-Prompt → IMMER Nein
4. Anthropic Console → Usage prüfen (welcher Key war Spike-Verursacher)

**Production-Status Nachhilfe-Chatbot:** Code läuft, Vercel-Env hat Lexi-Key, **wartet auf Credits**. Sobald aufgeladen → Bot funktioniert sofort, Tracking zählt.

# State — Nachhilfe Website

**Zuletzt aktualisiert:** 2026-04-23

## Aktueller Focus
Website ist live auf https://nachhilfe-aber-richtig.de.
**Neues Parallel-Projekt gestartet:** Lexi — KI-Lernhilfe als Marketing-Arm (`../Lexi/`, eigenes GitHub-Repo `Kaanix1907/Lexi`). Spec + Phase-1-Plan geschrieben, 9 von 12 Tasks implementiert.

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

**Stand 2026-04-23 (Lexi-Projekt gestartet):**

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

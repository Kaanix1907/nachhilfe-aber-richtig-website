# State — Nachhilfe Website

**Zuletzt aktualisiert:** 2026-04-21

## Aktueller Focus
Website ist live auf https://nachhilfe-aber-richtig.de — Production-Deploy abgeschlossen.

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

**Stand 2026-04-21:**
- USPs-Sektion Fix: Karte 4 "Faire Verträge" war niedriger als Karte 3 "Staatlich gefördert"
- Ursache: FadeIn-Wrapper + Card-Div hatten kein `h-full`, Grid-Row-Stretch griff nicht durch
- Fix (Commit d83e068): `h-full` auf FadeIn und Card — alle 4 Karten jetzt exakt 239px (verifiziert 1100–1920px)

**Stand 2026-04-14:**
- Alle 18 Google-Reviews mit Text extrahiert (via Puppeteer), rechtschreibkorrigiert, zentral in `data.ts`
- SEO komplett: 19 Keywords, 8 FAQ-Einträge, 18 Reviews im JSON-LD, erweitertes areaServed
- Mobile-Layout überarbeitet: kein min-h-screen, kompakte Review-Karten, bessere Abstände
- Design-Polish: FadeIn-Scroll-Animationen, Services-Karten Accent-Lines
- Production-Deploy: Commit 629a96c, Build OK (Next.js 16.2.1, Turbopack)
- Domain: nachhilfe-aber-richtig.de zeigt auf Vercel

# Tasks — Nachhilfe Website

**Format:** [ ] TODO | [~] IN_PROGRESS | [x] DONE

## Aktiv
- [ ] **PR #7 Datenschutz-Text freigeben** (Mustafa, DSGVO) → dann mergen
- [ ] **PR #4 auf GlitchTip umbiegen** (Entscheid 16.07.): Projekt `nachhilfe` in GlitchTip anlegen (existiert noch nicht), dash-lose DSN, Datenschutz-Sektion „Fehler-Monitoring"
- [ ] 🚩 **Lexi: Impressum + Datenschutz fehlen** (beide 404, Seite ist öffentlich) — §5 DDG, anderes Repo
- [ ] Vercel-Env nach dem Rückbau aufräumen: ANTHROPIC_API_KEY / KV_* / STATS_TOKEN / IP_SALT
- [ ] `npm run lint` ist tot (`next lint` in Next 16 entfernt) — Flat-Config nachziehen oder Script entfernen
- [ ] **Lexi Phase 2 Live-Abnahme** (Code deployed, Flow-Test offen — Inkognito 2 Fragen → Modal → Sign-Up → Migration → Rate-Limit)
- [ ] Unterseiten /leistungen und /ueber-uns auf Nachhilfe bauen
- [ ] Google Search Console einrichten + beide Sitemaps einreichen (Nachhilfe + Lexi)
- [ ] Duplikat-Blob-Store + leeres Projekt `lexi-qs7w` via Vercel-Dashboard löschen

## Backlog
- [x] ~~/impressum und /datenschutz Inhalt aktualisieren~~ — erledigt (4352db7, 86ee5b9: TMG→DDG + VSBG §36) *(nachgetragen 2026-07-16)*
- [ ] GOOGLE_PLACES_API_KEY für Live-Review-Updates (optional)
- [ ] Social Media Links (Facebook, Instagram) mit echten URLs befüllen

## Abgeschlossen
- [x] **Cloudflare Web Analytics abgeschaltet** — 2026-08-11. Cloudflare injizierte
      `static.cloudflareinsights.com/beacon.min.js` in jede Response; die CSP der Seite blockte
      es. Es lieferte also keine Daten (Dashboard: 0 Seitenaufrufe, 0 Besuche), erzeugte aber
      bei jedem Aufruf einen Konsolenfehler und kostete 8 Lighthouse-Best-Practices-Punkte
      (100 → 92). Im Dashboard auf „Disable" gestellt; am ausgelieferten HTML gegengeprüft —
      das Beacon steht weder auf der Startseite noch im Impressum.
- [x] **Deploy-Branch auf `main` umgestellt** — 2026-08-11 (Cloudflare Pages → Branch control).
      Pages baute aus `cloudflare-migration`; dadurch lag `main` 14 Commits zurück und trug im
      Impressum noch die Privatnummer statt der Geschäftsnummer. Vor der Umstellung geprüft,
      dass sich beide Stände nur noch in zwei `.ai-state/`-Dateien unterscheiden — die Seite
      bleibt also identisch. `cloudflare-migration` kann jetzt weg.
- [x] Mobile-Hero-Cleanup (Glows mobil verkleinert, Text-Opacities erhöht, Cards heller) + Marquee-Bug-Fix (`w-max` ergänzt, Animation 60s, prefers-reduced-motion) — deployed 2026-05-03
- [x] Lexi Phase 2 Code: Rate Limit (Upstash), Anonymer Modus + Migration, Usage-Counter — deployed
- [x] Vercel CLI v52 Upgrade
- [x] Lexi Phase 1 komplett: Auth, Chat, Persistenz, Sidebar, Foto-Upload, Vision-Mode, Markdown+LaTeX, Subdomain, SEO
- [x] Nachhilfe-Integration: /lexi Seite, Hero-Badge, Navbar-Link, ChatWidget als Lexi-Teaser
- [x] Lexi System-Prompt v2 (kleinschrittig, pädagogisch, Probe am Ende)
- [x] Projektstruktur (Next.js App Router, TypeScript, Tailwind)
- [x] Alle Komponenten: Navbar, Hero, Services, BildungTeilhabe, USPs, Contact, Footer
- [x] ~~KI-Chatbot (Claude API + Floating Widget)~~ — **zurückgebaut 2026-07-16** (PR #7); Lexi lebt als eigene App, das Widget verlinkt nur noch dorthin
- [x] Logo freigestellt (/public/logo.png)
- [x] SEO: OpenGraph, Twitter Cards, Sitemap, robots.txt, JSON-LD, FAQ-Schema
- [x] OG-Image (1200x630px, Logo auf dunklem Hintergrund)
- [x] Echte Google-Bewertungen (18 Stück) + Rechtschreibkorrektur
- [x] ~~Rate Limiting /api/chat + /api/reviews~~ — **gegenstandslos:** beide Routen am 2026-07-16 zurückgebaut (PR #7)
- [x] Mobile-Layout Überarbeitung
- [x] Scroll-Animationen (FadeIn-Komponente)
- [x] Production-Deploy auf Vercel (nachhilfe-aber-richtig.de)

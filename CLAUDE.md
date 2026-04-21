# Nachhilfe, aber richtig! — Projekt CLAUDE.md

## 1. Projektübersicht
Kompletter Neuaufbau der Website für das Nachhilfeinstitut "Nachhilfe, aber richtig!" in Duisburg-Rheinhausen.
Inhalt und Struktur basieren auf der bestehenden Seite (nachhilfe-aber-richtig.de), aber mit modernem Stack, Premium-Design und KI-Chatbot.

**Owner:** Mustafa Kaan Güneren
**Domain:** nachhilfe-aber-richtig.de
**Standort:** Duisburg-Rheinhausen

---

## 2. Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **KI-Chatbot:** Claude API (Anthropic) via Next.js API Route
- **Deployment:** Vercel (Standard für Next.js)
- **Schriften:** BioRhyme (Headings), Cabin (Body) — via Google Fonts

---

## 3. Design-System

### Farben
| Rolle | Hex |
|---|---|
| Primary (Cyan-Blau) | `#25abd6` |
| Secondary (Lila) | `#655c9e` |
| Accent (Grün) | `#00aa00` |
| Text | `#444444` |
| Background | `#ffffff` |

### Typografie
- **Headings:** BioRhyme (Bold)
- **Body:** Cabin (Regular/Medium)

### Logo
- Produktionsdatei: `/public/logo.png` (bereits freigestellt — weißer Hintergrund entfernt)
- Original-Backup: `logo_backup Kopie.jpeg` im Projektroot

---

## 4. Seiten-Struktur

| Route | Inhalt |
|---|---|
| `/` | Hero, Leistungsübersicht, USPs, Testimonials, CTA |
| `/leistungen` | Gruppenunterricht, Einzel, Online, Stay in School |
| `/ueber-uns` | Mission, Werte, Lehrerqualität |
| `/kontakt` | Formular, Öffnungszeiten, Adressen, Karte |
| `/impressum` | Pflichtangaben |
| `/datenschutz` | DSGVO |

---

## 5. KI-Chatbot Feature

- Floating Chat-Widget (rechts unten)
- Backend: `/api/chat` Route → Claude API
- System-Prompt enthält alle Business-Infos (Fächer, Preise, Ablauf, Kontakt)
- Der Bot beantwortet Fragen zu Nachhilfeangebot, Buchung, Preisen etc.
- Nutze `claude-haiku-4-5-20251001` für schnelle, günstige Antworten
- ANTHROPIC_API_KEY via `.env.local`

---

## 6. Business-Informationen (für Chatbot-System-Prompt & Inhalte)

### Leistungen
- **Gruppennachhilfe:** 3–5 Schüler, bestes Preis-Leistungs-Verhältnis
- **Einzelnachhilfe:** Intensive 1:1 Betreuung
- **Onlinenachhilfe:** Für Schüler mit weiterem Wohnort
- **WhatsApp-Support:** Lehrer erreichbar auch nach Unterrichtszeiten
- **Übungsmaterial:** Hunderte Seiten Übungsmaterial inklusive
- **Stay in School:** Kostenloses Programm für Schulen & Vereine (via Bildung und Teilhabe)

### Kontakt
- **Email:** info@nachhilfe-aber-richtig.de
- **Telefon:** +49 157 53337648
- **Lernort:** Friedrich-Alfred-Straße 14, 47226 Duisburg
- **Geschäftsadresse:** Rheinstraße 19, 47226 Duisburg

### Öffnungszeiten
| Tag | Zeiten |
|---|---|
| Montag | 13:00–17:00 |
| Dienstag | 13:00–17:00 |
| Mittwoch | 13:00–17:00 |
| Donnerstag | 13:00–17:00 |
| Freitag | 13:00–17:00 |
| Samstag | Geschlossen |
| Sonntag | Geschlossen |

---

## 7. Aktueller Projektstand
- [x] Next.js Grundstruktur (App Router, TypeScript, Tailwind)
- [x] Komponenten: Navbar, Hero, USPs, Footer, Contact
- [x] KI-Chatbot (Floating Widget + `/api/chat`)
- [x] Logo freigestellt (`/public/logo.png`)
- [ ] Testimonials Sektion
- [ ] Unterseiten: `/leistungen`, `/ueber-uns`, `/impressum`, `/datenschutz`
- [ ] `.env.local` mit echtem `ANTHROPIC_API_KEY` befüllen
- [ ] Vercel Deployment
- [ ] Domain nachhilfe-aber-richtig.de verknüpfen

---

## 8. Session-Start (PFLICHT)

**Am Anfang jeder Session automatisch ausführen:**
1. Dev-Server starten: `npm run dev` (falls nicht bereits aktiv)
2. Screenshot aufnehmen: `node screenshot.mjs http://localhost:3000`
3. Screenshot analysieren — aktuellen Stand sofort im Blick haben
4. Erst danach auf die Anfrage von Mustafa eingehen

**Nach jeder Änderung:** `open http://localhost:3000` ausführen — Mustafa soll die Seite nie selbst öffnen müssen.

**Ziel:** Mustafa sieht immer sofort die neueste Version, ohne selbst den Server starten oder die URL öffnen zu müssen.

**PFLICHT — Selbst-Verifikation vor jeder Rückmeldung:**
Bevor ich Mustafa sage "es ist fertig" oder "es funktioniert", MUSS ich:
1. Screenshot Desktop (1440px): `node screenshot.mjs http://localhost:3000 verify-desktop 1440 900`
2. Screenshot Mobile (390px): `node screenshot.mjs http://localhost:3000 verify-mobile 390 844`
3. Beide Screenshots mit Read-Tool öffnen und das gewünschte Element **mit eigenen Augen bestätigen**
4. Erst wenn ich es im Screenshot sehe → Rückmeldung an Mustafa

Wenn der Cache alt ist: `.next` löschen, Server neu starten, dann nochmals Screenshot.
Kein "sollte funktionieren" — nur "ich habe es im Screenshot gesehen".

---

## 9. Entwicklungsregeln
> Die allgemeinen Frontend-Regeln (Design Guardrails, Tech Stack, Bild-Befehle) stehen im übergeordneten Ordner: `../CLAUDE.md`


- **Sprache:** Alle Kommentare und Commit-Messages auf Deutsch
- **Komponenten:** Jede Sektion als eigene Komponente in `/components`
- **Keine externen UI-Libs** außer was explizit beschlossen wird — kein shadcn ohne Absprache
- **Mobile-first:** Alle Layouts zuerst für Mobile designen
- **Bilder:** Immer `next/image` mit korrekten `alt`-Texten
- **Kein Hardcoding** von Business-Daten — zentrale Konstanten-Datei (`/lib/data.ts`)
- **Barrierefreiheit:** Semantisches HTML, ARIA-Labels wo nötig
- **SEO:** Jede Seite bekommt Metadata via Next.js `generateMetadata`

---

## 10. SEO-Pflichtcheckliste (bei jeder neuen Seite & vor jedem Deployment)

### Neue Seite hinzufügen
- [ ] `export const metadata: Metadata` oder `generateMetadata()` mit `title` und `description`
- [ ] `title` folgt dem Template `"%s | Nachhilfe, aber richtig!"` aus `layout.tsx`
- [ ] `robots: { index: false }` nur für `/impressum` und `/datenschutz`
- [ ] Canonical URL via `alternates: { canonical: "..." }` wenn nötig

### Bei Deployment (PFLICHT)
- [ ] `layout.tsx` — `metadataBase` zeigt auf `https://nachhilfe-aber-richtig.de`
- [ ] `og:image` vorhanden: `/public/og-image.png` (1200×630px)
- [ ] `sitemap.ts` aktuell — alle öffentlichen Routen gelistet
- [ ] `robots.ts` korrekt — `/api/*` ausgeschlossen
- [ ] JSON-LD Schema in `page.tsx` — Öffnungszeiten & Adresse stimmen
- [ ] Build-Test: `npm run build` — keine TypeScript/Metadata-Fehler

### Struktur (bereits implementiert, nicht anfassen ohne Grund)
| Datei | Zweck |
|---|---|
| `src/app/layout.tsx` | Global: title-Template, OG, Twitter, robots, metadataBase |
| `src/app/sitemap.ts` | Automatische `/sitemap.xml` für Google |
| `src/app/robots.ts` | Automatische `/robots.txt` |
| `src/app/page.tsx` | JSON-LD LocalBusiness Schema (EducationalOrganization) |

### OG-Image erstellen (wenn noch nicht vorhanden)
```bash
# Placeholder aus Logo generieren (1200×630):
/opt/homebrew/bin/magick /public/logo.png -resize 400x400 -gravity center -background white -extent 1200x630 public/og-image.png
```

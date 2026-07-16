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
- **Deployment:** Vercel (Standard für Next.js)
- **Schriften:** BioRhyme (Headings), Cabin (Body) — **self-hosted via `next/font`**
  (Build-Time-Download, kein Runtime-Request an Google; Commit 6194b9d schloss das
  Google-Fonts-Abmahnrisiko, §10a.3)
- **Keine API-Routes mehr:** seit 2026-07-16 ist die Seite rein statisch (Rückbau des
  Chat-Clusters, siehe §5)

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
- Original-Backup: `/public/logo.jpeg` (unfreigestellt). Lag bis 2026-07-16 zusätzlich als
  `logo_backup Kopie.jpeg` im Projektroot — byte-identisch, deshalb entfernt.

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

## 5. KI-Lernhilfe „Lexi" — eigene App, NICHT hier

**Der On-Site-Chatbot ist am 2026-07-16 zurückgebaut worden.** Lexi lebt als eigenständige
Anwendung auf `lexi.nachhilfe-aber-richtig.de`. Diese Website verlinkt nur dorthin
(`src/components/ChatWidget.tsx`, gemountet auf `/lexi`).

Entfernt wurden: `/api/chat`, `/api/reviews` (toter Zwilling — Reviews werden aus
`ALL_REVIEWS` statisch gerendert), `/api/admin/stats`, `src/lib/track.ts`,
`CHATBOT_SYSTEM_PROMPT` sowie die Dependencies `@anthropic-ai/sdk` und `@upstash/redis`.

**Warum:** kein einziger Frontend-Aufrufer existierte mehr, aber der Claude-Proxy war
öffentlich erreichbar. Der ANTHROPIC_API_KEY war in Vercel nie gesetzt (live gemessen:
HTTP 500) — hätte ihn jemand „repariert", wäre es ein anonym nutzbarer Token-Burner
gewesen, dessen In-Memory-Rate-Limit auf Serverless ohnehin pro Instanz gilt und durch
paralleles Fan-out umgangen wird.

**Wenn der Chatbot je zurück auf diese Seite soll:** nicht die alten Routen wiederbeleben.
Persistentes Rate-Limit (Upstash) ist dann Pflicht, nicht optional.

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

## 7. Aktueller Projektstand (Stand 2026-07-16)

Die Seite ist **live** unter https://nachhilfe-aber-richtig.de.

- [x] Next.js Grundstruktur (App Router, TypeScript, Tailwind)
- [x] Komponenten: Navbar, Hero, USPs, Footer, Contact
- [x] Logo freigestellt (`/public/logo.png`)
- [x] Vercel Deployment + Domain verknüpft
- [x] `/impressum` + `/datenschutz` (§5 DDG, §18 MStV, DSGVO — Legal-Update TMG→DDG 13.07.)
- [x] Fonts self-hosted, Security-Header, WCAG-Kontraste
- [x] CI (`.github/workflows/ci.yml`): `npm ci` + `next build` (baut UND typecheckt strict)
- [x] Chat-Cluster zurückgebaut (§5) — Seite ist rein statisch
- [ ] Unterseiten `/leistungen`, `/ueber-uns` — in §4 beschrieben, nie gebaut.
      **Produkt-Entscheid offen:** bauen oder aus §4 streichen
- [ ] Social-Links sind Platzhalter (`data.ts`: generisches facebook.com/instagram.com)
- [ ] `npm run lint` ist tot: `next lint` gibt es in Next 16 nicht mehr, `eslint-config-next`
      steht auf 15.2.4, es existiert keine ESLint-Config. Entweder Flat-Config nachziehen
      oder das Script entfernen
- [ ] **Keine Tests.** Für eine statische Marketing-Site vertretbar — der Build ist das Gate

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
- **Git-Workflow: PR statt direktem main-Push (Abweichung von globalem §4).** Live-Website,
  öffentlich erreichbar. Änderungen auf Feature-Branch, `gh pr create`, kurzes OK von
  Mustafa vor Merge. Reine Konvention, keine harte Branch-Protection.
- **CodeScene-Check ist Pflicht vor "fertig"** (2026-07-05): nach `gh pr create` NICHT
  direkt als fertig melden. Aktiv `gh api repos/Kaanix1907/nachhilfe-aber-richtig-website/commits/<branch>/check-runs`
  prüfen. Findings selbst lesen und fixen, erneut pushen, bis Check grün ist. Sobald
  CodeScene-MCP verfügbar: `code_health_review` schon lokal vor dem Push laufen lassen.

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

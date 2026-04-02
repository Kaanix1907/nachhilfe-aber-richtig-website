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
| Dienstag | 13:00–18:30 |
| Mittwoch | 13:00–18:30 |
| Donnerstag | Geschlossen |
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

**Ziel:** Mustafa sieht immer sofort die neueste Version, ohne selbst den Server starten zu müssen.

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

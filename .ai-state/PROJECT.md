# Nachhilfe, aber richtig! — Website

**Erstellt:** 2026-04-11
**Status:** Active — **live** unter https://nachhilfe-aber-richtig.de
**Zuletzt real befüllt:** 2026-07-16 (war bis dahin ein Skelett mit leeren Checkboxen)

## Ziel

Marketing-Website für das Nachhilfeinstitut „Nachhilfe, aber richtig!" in Duisburg-Rheinhausen.
Conversion-Ziel: Kontaktaufnahme (Telefon/E-Mail) für eine kostenlose Probestunde.

## Stack (real erhoben, 2026-07-16)

- **Framework:** Next.js 16 (App Router) · React 19 · TypeScript (strict)
- **Styling:** Tailwind CSS 3.4
- **Schriften:** BioRhyme + Cabin, **self-hosted via `next/font`** (Build-Time-Download, kein
  Runtime-Request an Google — schließt das Google-Fonts-Abmahnrisiko, §10a.3)
- **Analytics:** Simple Analytics (NL/EU, cookielos) — der einzige Third-Party-Request der Seite
- **Deployment:** Vercel
- **Backend: keines.** Seit dem Chat-Rückbau (2026-07-16) ist die Seite **rein statisch** —
  alle Routen sind `○ (Static)`, es existiert keine API-Route mehr.

## Wichtige Pfade

```
src/app/          → Routen: / /lexi /impressum /datenschutz + sitemap.ts robots.ts
src/components/   → Navbar, Hero, Services, USPs, BildungTeilhabe, Contact, Footer, ChatWidget
src/lib/data.ts   → ALLE Business-Daten zentral (Preise, Zeiten, Adressen, ALL_REVIEWS)
public/           → Logos, OG-Image
screenshots/      → lokale Verify-Artefakte, gitignored (seit 2026-07-16 auch enttrackt)
```

**Regel:** keine Business-Daten hardcoden — alles kommt aus `src/lib/data.ts`.

## Verwandt, aber NICHT dieses Repo

**Lexi** (`lexi.nachhilfe-aber-richtig.de`) ist die KI-Lernhilfe als **eigenständige App in einem
eigenen Repo**. Hier liegen nur die Marketing-Unterseite `/lexi` und das `ChatWidget`, das dorthin
verlinkt. Wer am Chat selbst arbeiten will, ist hier falsch.

## Gates

- **CI** (`.github/workflows/ci.yml`): `npm ci` + `next build`. Der Build ist das einzige Gate —
  er baut UND typecheckt strict. **Keine Tests** (für eine statische Marketing-Site vertretbar).
- **CodeScene Code Health Review** läuft als Check auf PRs.
- **`npm run lint` ist tot:** `next lint` gibt es in Next 16 nicht mehr, `eslint-config-next` steht
  auf 15.2.4, es existiert keine ESLint-Config. Entweder Flat-Config nachziehen oder Script raus.
- **Git:** PR statt Direct-Push (bewusste Abweichung vom globalen §4 — die Seite ist öffentlich live).

## Links

- Live: https://nachhilfe-aber-richtig.de
- Repo: `Kaanix1907/nachhilfe-aber-richtig-website`
- Lexi (eigene App): https://lexi.nachhilfe-aber-richtig.de
- Kontakt: info@nachhilfe-aber-richtig.de · +49 157 53337648

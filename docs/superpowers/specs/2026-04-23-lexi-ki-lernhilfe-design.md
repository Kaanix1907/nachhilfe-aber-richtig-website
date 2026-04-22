# Lexi — KI-Lernhilfe (Design-Spec)

**Datum:** 2026-04-23
**Owner:** Mustafa Kaan Güneren
**Kontext:** Eigenständiges KI-Produkt als Marketing-Arm für "Nachhilfe, aber richtig!" in Duisburg.

---

## 1. Executive Summary

Lexi ist eine eigenständige KI-Lernhilfe, erreichbar unter `lexi.nachhilfe-aber-richtig.de`. Schüler stellen Hausaufgaben-Fragen im Chat und bekommen pädagogisch sauber aufgebaute Erklärungen. Das Produkt dient primär als Lead-Funnel zur Nachhilfe, sekundär als eigenständige kostenlose Lernhilfe.

Kernmerkmale:
- ChatGPT-ähnliches Dashboard mit Brand-Farben der Nachhilfe
- 2 Test-Fragen ohne Login, danach Pflicht-Registrierung (Magic Link + Google)
- 10 Fragen/Tag kostenlos, dann Sperre + CTA zur Nachhilfe
- Foto-Upload für Hausaufgaben
- Anti-Cheat-Modus: erklärt, löst aber keine Klausuren
- RAG-Wissensbasis: Lehrplan NRW + Serlo + eigene Muster-Aufgaben
- Kein Web-Search im MVP, kein Abo-Modell im MVP

---

## 2. Produktziele & Positionierung

### Primärziel
**Leads generieren für die Nachhilfe.** Jeder Lexi-Nutzer ist ein potenzieller Nachhilfe-Schüler. Nach dem Tageslimit wird die Probestunde beworben.

### Sekundärziel
Eigenständige Marke im KI-Lernhilfe-Bereich aufbauen. Später monetarisierbar per Abo (v2, nicht im MVP).

### USP gegen ChatGPT
- **Lehrplan-NRW-fokussiert** (statt Generalist)
- **"Lernen statt Mogeln"** — explizit keine Klausur-Lösungen
- **Direkter Bezug zur realen Nachhilfe in Duisburg** (Trust, lokale Marke)

### Zielgruppe
Schüler Klasse 5-13 in NRW, Grundschüler (1-4) möglich aber sekundär.

---

## 3. User Flows

### Flow A — Erstbesuch (ohne Account)
1. User kommt auf `lexi.nachhilfe-aber-richtig.de` (Landing + Chat direkt sichtbar)
2. Stellt bis zu 2 Fragen ohne Anmeldung
3. Bei Frage 3: Modal erscheint — "Melde dich an für 10 Fragen/Tag kostenlos"
4. Registrierung per Magic Link oder Google
5. Alter-Gate-Checkbox: "Ich bin 16 oder älter **ODER** mein Erziehungsberechtigter stimmt zu"
6. Eingeloggt → zurück zum Chat, weiter machen

### Flow B — Wiederkehrender Nutzer
1. User öffnet `lexi.nachhilfe-aber-richtig.de` → automatisch eingeloggt (30-Tage-Session)
2. Sieht Sidebar mit bisherigen Chats
3. Klickt "Neuer Chat" oder setzt einen alten fort
4. Wählt optional ein Fach (Mathe/Deutsch/Englisch/…)
5. Fragt → Lexi antwortet

### Flow C — Tageslimit erreicht
1. User hat 10 Fragen heute gestellt
2. Bei Frage 11: Chat-Eingabe wird ersetzt durch Block-Screen:
   > "Du hast dein heutiges Limit erreicht. Morgen geht's weiter!
   > **Brauchst du persönliche Hilfe?** Buche eine kostenlose Probestunde bei Nachhilfe, aber richtig! in Duisburg."
   > → Button zur Nachhilfe-Hauptseite

### Flow D — Foto-Hausaufgabe
1. User klickt 📎 im Input-Feld
2. Wählt Foto aus (Handy: Kamera oder Galerie)
3. Upload + Preview im Chat
4. Optional: Textfrage dazu ("Erkläre mir Aufgabe 3")
5. Lexi verarbeitet Foto + Frage, antwortet pädagogisch

### Flow E — Klausur-Erkennung
1. User stellt Frage, die nach Klausur/Test riecht ("das ist meine Mathe-Klausur morgen")
2. Lexi antwortet nicht mit Lösung, sondern:
   > "Klingt wichtig! Ich löse Klausur-Aufgaben aber nicht direkt — sonst lernst du nichts. Was wir machen können: Schicke mir den Aufgabentyp, wir üben ähnliche Beispiele."
3. Falls User drängt → Lexi bleibt freundlich bei Nein, empfiehlt Nachhilfe-Probestunde

---

## 4. System-Architektur

```
┌─────────────────────────────────────────────┐
│  Browser (Next.js Frontend, Subdomain)      │
│  - Landing Page                             │
│  - Chat Dashboard (Sidebar + Chat + Upload) │
└──────────────┬──────────────────────────────┘
               │ HTTPS
               ▼
┌─────────────────────────────────────────────┐
│  Next.js Backend (Vercel Fluid Compute)     │
│  /api/chat       — Chat-Handler             │
│  /api/upload     — Foto-Upload              │
│  /api/usage      — Rate-Limit-Check         │
└──┬──────┬──────┬────────┬──────────┬────────┘
   │      │      │        │          │
   ▼      ▼      ▼        ▼          ▼
 Clerk  Neon   Upstash  Upstash   Anthropic
 Auth   PG     Redis    Vector    API (Claude)
         │     (rate)   (RAG)
         │
    Vercel Blob (Fotos)
```

### Deployment-Topologie
- **Eigenes Repo**: `Lexi/` als Sibling-Ordner von `Nachhilfe/` unter `Webseiten-Builder/`
- **Eigenes Vercel-Projekt**: `lexi-ki`
- **Subdomain-Verknüpfung**: DNS-Eintrag `lexi` auf `nachhilfe-aber-richtig.de` zeigt auf Vercel-Projekt

---

## 5. Daten-Modell (vereinfacht)

### Users (Neon Postgres, via Clerk synchronisiert)
- `id` (Clerk User ID)
- `email`
- `created_at`
- `is_over_16` (Alter-Gate)
- `parental_consent` (nullable, wenn under 16)
- `daily_question_count` (cached, wird täglich um 0:00 resettet via Cron)

### Chats
- `id`
- `user_id`
- `title` (automatisch aus erster Frage generiert)
- `subject` (nullable: Mathe/Deutsch/Englisch/…)
- `created_at`, `updated_at`

### Messages
- `id`
- `chat_id`
- `role` (user/assistant)
- `content` (Text)
- `attachment_url` (nullable, Vercel Blob URL für Foto)
- `token_count`
- `created_at`

### Knowledge Base (Upstash Vector)
- Embeddings von: Lehrplan NRW PDFs, Serlo-Inhalten, eigenen Muster-Aufgaben
- Metadata: `subject`, `grade`, `topic`, `source`

### Rate Limit State (Upstash Redis)
- Key: `ratelimit:<user_id>:<date>` → Counter
- Auto-TTL auf Ende des Tages

---

## 6. Feature-Details

### 6.1 Dashboard-UI

**Desktop-Layout:**
- Links: Sidebar (~260px breit)
  - Oben: Logo "Lexi", Brand-Farben (Primary #25abd6, Secondary #655c9e)
  - Fach-Filter (Mathe/Deutsch/Englisch/… — optional wählbar)
  - Chat-History (Liste aller bisherigen Chats, aktueller highlighted)
  - Unten: Tagesbudget-Anzeige ("3/10 heute"), Logout
- Mitte: Chat-Fenster
  - Oben: aktueller Chat-Titel, Fach-Tag, Budget-Anzeige
  - Mitte: Message-Liste (User rechts, Lexi links)
  - Unten: Input-Feld + 📎-Button + Senden

**Mobile-Layout:**
- Hamburger-Menü oben links → Sidebar einblendbar
- Vollbild-Chat
- Foto-Upload direkt am Input

### 6.2 Auth-Flow (Clerk)

- **Anonymer Modus:** 2 Fragen erlaubt, gespeichert per anonymous Session-Cookie (Upstash Redis keyed auf Cookie-ID)
- **Registration Trigger:** Nach 2. anonymer Frage
- **Methoden:** Magic Link (Email) + Google OAuth
- **Session:** 30 Tage, automatischer Refresh
- **Alter-Gate:** Pflicht-Checkbox bei Registration. DSGVO Art. 8 fordert "angemessene Maßnahmen" zur Elterneinwilligung bei unter 16-Jährigen.
  - **MVP-Ansatz:** Self-Declaration ("Ich bin 16 oder älter" ODER "Mein Erziehungsberechtigter hat zugestimmt" + Eltern-Email-Feld zur Bestätigung). Risiko-Hinweis in AGB. Realistisch: viele Mitbewerber machen es genauso.
  - **Post-MVP empfohlen:** Echte Eltern-Email-Verifikation via Bestätigungs-Link, bevor unter-16-Account aktiv wird.

### 6.3 Rate Limiting

- **Counter:** `ratelimit:<user_id>:<YYYY-MM-DD>` in Upstash Redis
- **Inkrement:** pro Message vom User (Foto-Upload ohne Frage = nicht gezählt, aber Foto+Frage = 1)
- **Reset:** Redis TTL auf 24h → Counter verschwindet automatisch
- **Anonymer User:** Gleiche Logik, Key = anonymous Session-Cookie-ID, hart 2 gecapped

### 6.4 Anti-Cheat System-Prompt

Der Claude-System-Prompt wird Lexi klare Regeln geben:

1. **Rolle:** "Du bist Lexi, eine geduldige Nachhilfe-KI für deutsche Schüler (Lehrplan NRW, Klasse 1-13)."
2. **Pädagogischer Modus:** "Erkläre Schritt für Schritt. Frage nach, wo der Schüler steht. Gib Beispiele. Lösung am Ende der Erklärung, nie vorab."
3. **Klausur-Erkennung:** "Wenn der Schüler erwähnt 'Klausur', 'Test', 'Klassenarbeit morgen', 'das ist für die Prüfung' — verweigere direkte Lösungen höflich. Biete Übungshilfe und Lernunterstützung an."
4. **Nachhilfe-Bezug:** "Bei schwierigen Themen oder wiederholter Verwirrung: erwähne natürlich die Möglichkeit der persönlichen Nachhilfe bei 'Nachhilfe, aber richtig!' in Duisburg."
5. **Sprache:** "Immer Deutsch. Freundlich, altersgerecht, nie herablassend."

### 6.5 RAG-Wissensbasis

**Bei Launch (Phase 3 des Build-Plans):**
- Lehrplan NRW für Mathe, Deutsch, Englisch (Klassen 5-10) — offizielle PDFs, eingebettet
- Serlo.org-Inhalte Mathe (Creative Commons) — 200-500 Aufgaben/Erklärungen
- 10-15 eigene Muster-Aufgaben pro Kernfach von Mustafa/Nachhilfelehrern

**Retrieval-Logik:**
- Bei jeder User-Frage: top-3 relevante Chunks aus Upstash Vector
- Gefiltert nach Fach (wenn User Fach gewählt hat)
- Als Kontext in System-Prompt eingefügt

**Wachstum:**
- Admin-Dashboard (v2): Mustafa kann neue Inhalte per Upload hinzufügen
- Log-Review: Monatlich schauen wo Lexi schwach war → gezielt Material nachladen

### 6.6 Foto-Upload

- **Acceptance:** `image/jpeg`, `image/png`, `image/webp`, max 5MB
- **Speicherort:** Vercel Blob, 30-Tage-TTL (DSGVO: Datensparsamkeit)
- **LLM-Modell:** Bei Foto-Frage automatischer Switch auf Claude Sonnet 4.6 mit Vision + Extended Thinking (teurer, aber Mathe-Foto-Erklärungen brauchen das)
- **Prompt-Injection-Schutz:** Foto wird in separater Content-Block geschickt, nicht im Text

### 6.7 Marketing-Integration auf Hauptseite

Auf `nachhilfe-aber-richtig.de`:
- Hero-Sektion: kleiner "Jetzt Lexi ausprobieren"-Button
- Neue Sektion "Unsere KI-Lernhilfe Lexi" mit Screenshot + CTA
- Footer-Link auf `lexi.nachhilfe-aber-richtig.de`

Auf Lexi:
- Header: klein "Ein Angebot von Nachhilfe, aber richtig! Duisburg"
- Tageslimit-Screen: prominenter Nachhilfe-CTA
- Footer mit Link zur Nachhilfe-Hauptseite

---

## 7. Tech-Stack (bestätigt)

| Bauteil | Tool |
|---|---|
| Framework | Next.js 16 App Router, TypeScript, Tailwind |
| Auth | Clerk (Magic Link + Google) |
| User/Chat DB | Neon Postgres via Vercel Marketplace |
| Vector DB | Upstash Vector |
| Blob Storage | Vercel Blob |
| Rate Limit / Session | Upstash Redis |
| LLM | Anthropic SDK, Modelle: `claude-haiku-4-5-20251001` default, `claude-sonnet-4-6` für Foto + schwere Mathe |
| Hosting | Vercel |

### Modell-Strategie
- **Default (Text-only):** Haiku 4.5 — günstig, schnell, für 80% der Fragen ausreichend
- **Foto-Upload:** Sonnet 4.6 mit Vision + Extended Thinking
- **Mathe mit Keywords wie "Beweis", "Herleitung", "Klasse 11-13":** Sonnet 4.6 mit Extended Thinking
- **Routing-Logik:** Einfache Regeln im Backend vor API-Call

### Kosten-Management
- **Prompt Caching** für System-Prompt + RAG-Kontext (System-Prompt ändert sich selten → hoher Cache-Hit-Rate)
- Rate Limit verhindert unkontrolliertes API-Blowup

---

## 8. Security & DSGVO

### Secrets
- `ANTHROPIC_API_KEY`, `CLERK_SECRET_KEY`, DB-URL → alle in Vercel Env Vars
- Keine Secrets im Code, keine `.env`-Dateien in git

### Rate Limiting
- Pro User: 10 Fragen/Tag
- Pro IP (gegen Bots, anonymer Modus): 5 Signup-Versuche/Stunde
- API-Route-Level Circuit Breaker

### Input-Validierung
- Foto-Upload: Mime-Type + Größe, Virenscan via Vercel Blob (built-in)
- User-Message: max 2000 Zeichen
- Prompt-Injection-Schutz im System-Prompt

### DSGVO-Konformität
- **Art. 8 Minderjährige:** Alter-Gate bei Registration
- **Auftragsverarbeiter:** Anthropic, Clerk, Vercel, Upstash, Neon in Datenschutzerklärung nennen
- **Datensparsamkeit:** Chat-Löschung nach 90 Tagen Inaktivität, Fotos nach 30 Tagen
- **Widerrufsrecht:** Account-Löschung per 1-Click im Profil
- **Cookie-Banner:** technisch notwendige Cookies (Clerk-Session) — kein Consent nötig; kein Tracking im MVP

### Error-Responses
- Keine Stack Traces zum Client
- User-freundliche Fehlermeldungen ("Oops, Lexi ist kurz verwirrt — versuch's nochmal")
- Detailliertes Logging serverseitig (ohne PII)

---

## 9. Kostenprojektion (monatlich)

| Szenario | Nutzer | LLM | Infra | **Total** |
|---|---|---|---|---|
| Launch | 10-30 aktiv | 5-15€ | 0€ (alle Free Tiers) | **5-15€** |
| Wachstum | 100 aktiv | 40-60€ | ~20€ | **60-80€** |
| Skaliert | 500 aktiv | 200-350€ | ~50€ | **250-400€** |

Ab 200 aktiven Nutzern wird Monetarisierung unumgänglich. Zu dem Zeitpunkt v2 (Abo-Modell) planen.

---

## 10. Build-Plan (Phasen)

### Phase 1 — Grundgerüst (Woche 1-2)
- Next.js-Repo initialisieren, Vercel-Projekt, Subdomain-DNS
- Clerk-Integration (Magic Link + Google + Alter-Gate)
- Neon-DB setup, Schema (Users, Chats, Messages)
- Minimales Chat-UI (ohne Sidebar, ohne Foto)
- `/api/chat` mit Haiku 4.5, Anti-Cheat-System-Prompt v1

### Phase 2 — Dashboard + Rate Limit (Woche 3-4)
- Sidebar mit Chat-History, Fach-Filter
- Upstash Redis Rate-Limit-Implementierung
- Block-Screen mit Nachhilfe-CTA
- Anonymer Modus (2 Test-Fragen)
- Foto-Upload (Vercel Blob + Vision-Routing auf Sonnet 4.6)
- Mobile-Layout

### Phase 3 — RAG + Anti-Cheat-Tuning (Woche 5-6)
- Upstash Vector setup
- Einbetten: Lehrplan NRW + Serlo + 30-45 eigene Muster (Mustafa liefert Content)
- Retrieval-Logik in `/api/chat` integrieren
- Klausur-Erkennungs-Prompt iterieren + testen
- Prompt-Caching aktivieren

### Phase 4 — Polish + Launch (Woche 7-8)
- Landing-Page auf `lexi.nachhilfe-aber-richtig.de`
- Marketing-Integration auf Hauptseite
- DSGVO-Dokumente (Datenschutz, AGB, Impressum)
- SEO-Grundsetup
- Beta-Test mit 5-10 bekannten Schülern
- Launch

---

## 11. Außerhalb des MVP (bewusst nicht im Scope)

- Abo-Modell / Premium (v2, wenn Nutzerzahlen es rechtfertigen)
- Web-Search-Integration
- Eigenes Admin-Dashboard für Content-Pflege (v2 — bis dahin manueller Upload durch Mustafa + Claude)
- Foto-Upload-History als Galerie
- Eltern-Accounts / Accountverknüpfung
- Schul-/Klassen-Accounts
- Fine-Tuning eigenes Modell
- Mehrsprachigkeit (Türkisch, Arabisch — relevant für Duisburger Zielgruppe, aber später)
- Push-Notifications / App
- Sprach-Input (Mikro-Button)

---

## 12. Erfolgs-Kriterien MVP

Nach 3 Monaten Betrieb gilt MVP als erfolgreich, wenn:
- **Mindestens 100 registrierte Nutzer** gesammelt
- **Mindestens 3 Nachhilfe-Probestunden** nachweislich durch Lexi-Traffic gebucht
- **Unter 50€/Monat** Infra+LLM-Kosten bis 100 Nutzer
- **Keine DSGVO-Beschwerden**, keine rechtlichen Probleme
- **"Klausur-Erkennung"** funktioniert in > 80% der Stichproben-Tests

Bei < 30 Nutzern nach 3 Monaten: Marketing-Problem, nicht Produkt-Problem — dann Strategie-Check, nicht Produkt-Umbau.

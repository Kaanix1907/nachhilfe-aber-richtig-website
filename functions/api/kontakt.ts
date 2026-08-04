// Cloudflare Pages Function: nimmt das Kontaktformular entgegen und schickt
// die Anfrage per Brevo an das Postfach.
//
// Warum es das gibt: Der Kontaktbereich war bis 2026-08-04 kein Formular,
// sondern ein mailto-Absprung — und meldete bedingungslos Erfolg, auch wenn
// sich kein Mailprogramm oeffnete (Handy ohne Mailkonto, In-App-Browser von
// Instagram/Facebook). Anfragen gingen still verloren, ohne dass eine der
// beiden Seiten es merkte.
//
// Warum Brevo und nicht Resend: Resends kostenloser Tarif erlaubt genau eine
// verifizierte Domain, und die ist mit klartext-digital.com belegt — eine
// zweite kostet 20 USD im Monat. Brevo ist kostenlos (300 Mails taeglich,
// eigene Absenderdomain inklusive) und sitzt in Frankreich. Der EU-Sitz ist
// der eigentliche Gewinn: keine Drittlandsuebermittlung, damit entfaellt die
// ganze Passage zu Standardvertragsklauseln in der Datenschutzerklaerung.
//
// Diese Datei liegt bewusst ausserhalb von src/ und ist in tsconfig.json
// ausgeschlossen: Cloudflare uebersetzt sie selbst, `next build` soll sie
// nicht anfassen.
//
// Secret: BREVO_API_KEY wird als Environment-Variable im Cloudflare-Pages-
// Projekt hinterlegt (Typ "Secret"), niemals im Repo.

type Env = {
  BREVO_API_KEY: string;
};

type Ctx = {
  request: Request;
  env: Env;
};

type Anfrage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

// "still" = wie Erfolg aussehen lassen, aber nichts verschicken. Gilt fuer
// Bots; wer eine echte Fehlermeldung bekommt, variiert seinen Versuch.
type Pruefung =
  | { art: "still" }
  | { art: "fehler"; text: string }
  | { art: "ok"; anfrage: Anfrage };

const ABSENDER = { name: "Website-Formular", email: "formular@nachhilfe-aber-richtig.de" };
const EMPFAENGER = { email: "info@nachhilfe-aber-richtig.de" };

const GRENZEN = { name: 100, email: 200, phone: 40, message: 5000 } as const;

function antwort(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function sauber(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

// Absichtlich einfach gehalten: nur offensichtlicher Unfug wird abgewiesen.
// Eine strenge Regex sortiert mehr gueltige Adressen aus, als sie ungueltige
// faengt — und eine verlorene Anfrage ist genau das Problem, das hier
// behoben werden soll.
function istMail(v: string): boolean {
  return v.length > 4 && v.includes("@") && !v.includes(" ") && v.indexOf("@") < v.lastIndexOf(".");
}

function istBot(daten: Record<string, unknown>): boolean {
  // Honigtopf: ein Feld, das im Formular per CSS versteckt ist. Menschen
  // fuellen es nie aus, viele Bots schon.
  if (sauber(daten.website, 50)) return true;
  // Wer in unter drei Sekunden absendet, hat nicht getippt.
  const gestartet = Number(daten.startedAt);
  return Number.isFinite(gestartet) && Date.now() - gestartet < 3000;
}

function leseAnfrage(daten: Record<string, unknown>): Anfrage {
  return {
    name: sauber(daten.name, GRENZEN.name),
    email: sauber(daten.email, GRENZEN.email),
    phone: sauber(daten.phone, GRENZEN.phone),
    message: sauber(daten.message, GRENZEN.message),
  };
}

// Die Regeln stehen einzeln, damit die Pruefkette nicht zu einer Funktion mit
// neun Verzweigungen anwaechst. Reihenfolge und Wortlaut der Meldungen sind
// dieselben wie zuvor — sie entscheiden, was der Besucher zuerst liest.
function fehlendePflichtangabe(a: Anfrage): string | null {
  if (!a.name || !a.message) return "Bitte Name und Nachricht ausfüllen.";
  return null;
}

function fehlendeZustimmung(daten: Record<string, unknown>): string | null {
  return daten.consent === true ? null : "Bitte der Datenschutzerklärung zustimmen.";
}

// Ohne Rueckkanal ist die Anfrage wertlos: das alte Formular liess sich mit
// Name und Nachricht allein abschicken, die Telefonnummer war freiwillig.
function fehlenderRueckkanal(a: Anfrage): string | null {
  if (!a.phone && !istMail(a.email)) {
    return "Bitte Telefonnummer oder E-Mail angeben, sonst können wir nicht antworten.";
  }
  if (a.email && !istMail(a.email)) return "Die E-Mail-Adresse sieht nicht richtig aus.";
  return null;
}

function pruefeEingaben(daten: Record<string, unknown>): Pruefung {
  if (istBot(daten)) return { art: "still" };

  const anfrage = leseAnfrage(daten);
  const fehler =
    fehlendePflichtangabe(anfrage) ?? fehlendeZustimmung(daten) ?? fehlenderRueckkanal(anfrage);

  return fehler ? { art: "fehler", text: fehler } : { art: "ok", anfrage };
}

async function versende(a: Anfrage, apiKey: string): Promise<boolean> {
  const text = [
    `Name: ${a.name}`,
    `Telefon: ${a.phone || "–"}`,
    `E-Mail: ${a.email || "–"}`,
    "",
    "Nachricht:",
    a.message,
  ].join("\n");

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: ABSENDER,
        to: [EMPFAENGER],
        subject: `Anfrage über die Website – ${a.name}`,
        textContent: text,
        // Antworten geht direkt an die Familie, sofern eine Adresse da ist.
        ...(istMail(a.email) ? { replyTo: { email: a.email, name: a.name } } : {}),
      }),
    });
    if (res.ok) return true;
    // Statuscode protokollieren, aber keine Formularinhalte: im Log haben
    // Namen, Nummern und Nachrichten von Familien nichts zu suchen.
    console.error(`Brevo antwortete mit ${res.status}`);
    return false;
  } catch {
    console.error("Brevo nicht erreichbar");
    return false;
  }
}

export async function onRequestPost(ctx: Ctx): Promise<Response> {
  let daten: Record<string, unknown>;
  try {
    daten = await ctx.request.json();
  } catch {
    return antwort(400, { ok: false, fehler: "Ungültige Anfrage." });
  }

  const pruefung = pruefeEingaben(daten);
  if (pruefung.art === "still") return antwort(200, { ok: true });
  if (pruefung.art === "fehler") return antwort(400, { ok: false, fehler: pruefung.text });

  if (!ctx.env.BREVO_API_KEY) {
    // Kein Schluessel hinterlegt: ehrlich scheitern statt Erfolg vorzugaukeln.
    return antwort(503, {
      ok: false,
      fehler: "Der Versand ist gerade nicht erreichbar. Bitte ruf uns kurz an.",
    });
  }

  if (!(await versende(pruefung.anfrage, ctx.env.BREVO_API_KEY))) {
    return antwort(502, {
      ok: false,
      fehler: "Die Nachricht konnte nicht zugestellt werden. Bitte ruf uns kurz an.",
    });
  }

  return antwort(200, { ok: true });
}

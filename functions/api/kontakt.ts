// Cloudflare Pages Function: nimmt das Kontaktformular entgegen und schickt
// die Anfrage per Resend an das Postfach.
//
// Warum es das gibt: Der Kontaktbereich war bis 2026-08-04 kein Formular,
// sondern ein mailto-Absprung — und meldete bedingungslos Erfolg, auch wenn
// sich kein Mailprogramm oeffnete (Handy ohne Mailkonto, In-App-Browser von
// Instagram/Facebook). Anfragen gingen still verloren, ohne dass eine der
// beiden Seiten es merkte.
//
// Diese Datei liegt bewusst ausserhalb von src/ und ist in tsconfig.json
// ausgeschlossen: Cloudflare uebersetzt sie selbst, `next build` soll sie
// nicht anfassen.
//
// Secret: RESEND_API_KEY wird als Environment-Variable im Cloudflare-Pages-
// Projekt hinterlegt (Typ "Secret"), niemals im Repo.

type Env = {
  RESEND_API_KEY: string;
};

type Ctx = {
  request: Request;
  env: Env;
};

// Absender laeuft ueber klartext-digital.com, nicht ueber die eigene Domain.
// Zwei Gruende, beide zwingend:
//
// 1. Resends kostenloser Tarif erlaubt genau EINE verifizierte Domain, und die
//    ist seit Mai mit klartext-digital.com belegt. Eine zweite kostet 20 USD
//    im Monat — mehr als der gesamte IONOS-Vertrag, den wir gerade gekuendigt
//    haben. Verifiziert sein muss nur der Absender; der Empfaenger darf jede
//    beliebige Adresse sein.
// 2. Damit bleibt der SPF-Eintrag von nachhilfe-aber-richtig.de
//    ("v=spf1 include:_spf-eu.ionos.com ~all") voellig unberuehrt. Wer ihn
//    fuer einen zweiten Versender aufbohrt, riskiert die gesamte
//    Geschaeftspost im Spam.
//
// Die Familie sieht diese Adresse nie — sie fuellt ein Formular aus, die Mail
// geht an uns. Nur im eigenen Posteingang steht ein fremder Absender.
// Geantwortet wird ueber reply_to direkt an die Familie.
const VON = "Nachhilfe Website <formular@klartext-digital.com>";
const AN = "info@nachhilfe-aber-richtig.de";

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

export async function onRequestPost(ctx: Ctx): Promise<Response> {
  let daten: Record<string, unknown>;
  try {
    daten = await ctx.request.json();
  } catch {
    return antwort(400, { ok: false, fehler: "Ungültige Anfrage." });
  }

  // Honigtopf: ein Feld, das im Formular per CSS versteckt ist. Menschen
  // fuellen es nie aus, viele Bots schon.
  if (sauber(daten.website, 50)) {
    // Fuer den Bot wie ein Erfolg aussehen lassen, damit er nicht variiert.
    return antwort(200, { ok: true });
  }

  // Wer in unter drei Sekunden absendet, hat nicht getippt.
  const gestartet = Number(daten.startedAt);
  if (Number.isFinite(gestartet) && Date.now() - gestartet < 3000) {
    return antwort(200, { ok: true });
  }

  const name = sauber(daten.name, GRENZEN.name);
  const email = sauber(daten.email, GRENZEN.email);
  const phone = sauber(daten.phone, GRENZEN.phone);
  const message = sauber(daten.message, GRENZEN.message);
  const consent = daten.consent === true;

  if (!name || !message) {
    return antwort(400, { ok: false, fehler: "Bitte Name und Nachricht ausfüllen." });
  }
  if (!consent) {
    return antwort(400, { ok: false, fehler: "Bitte der Datenschutzerklärung zustimmen." });
  }
  // Ohne Rueckkanal ist die Anfrage wertlos: das alte Formular liess sich mit
  // Name und Nachricht allein abschicken, die Telefonnummer war freiwillig.
  if (!phone && !istMail(email)) {
    return antwort(400, {
      ok: false,
      fehler: "Bitte Telefonnummer oder E-Mail angeben, sonst können wir nicht antworten.",
    });
  }
  if (email && !istMail(email)) {
    return antwort(400, { ok: false, fehler: "Die E-Mail-Adresse sieht nicht richtig aus." });
  }

  if (!ctx.env.RESEND_API_KEY) {
    // Kein Schluessel hinterlegt: ehrlich scheitern statt Erfolg vorzugaukeln.
    return antwort(503, {
      ok: false,
      fehler: "Der Versand ist gerade nicht erreichbar. Bitte ruf uns kurz an.",
    });
  }

  const text = [
    `Name: ${name}`,
    `Telefon: ${phone || "–"}`,
    `E-Mail: ${email || "–"}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${ctx.env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: VON,
        to: [AN],
        subject: `Anfrage über die Website – ${name}`,
        text,
        // Antworten geht direkt an die Familie, sofern eine Adresse da ist.
        ...(istMail(email) ? { reply_to: email } : {}),
      }),
    });

    if (!res.ok) {
      // Statuscode protokollieren, aber keine Formularinhalte: im Log haben
      // Namen, Nummern und Nachrichten von Familien nichts zu suchen.
      console.error(`Resend antwortete mit ${res.status}`);
      return antwort(502, {
        ok: false,
        fehler: "Die Nachricht konnte nicht zugestellt werden. Bitte ruf uns kurz an.",
      });
    }
  } catch {
    console.error("Resend nicht erreichbar");
    return antwort(502, {
      ok: false,
      fehler: "Die Nachricht konnte nicht zugestellt werden. Bitte ruf uns kurz an.",
    });
  }

  return antwort(200, { ok: true });
}

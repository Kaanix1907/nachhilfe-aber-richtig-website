import { BUSINESS } from "@/lib/data";

// Die Abschnitte der Datenschutzerklaerung — ausgelagert aus `datenschutz/page.tsx`.
//
// **Warum getrennt.** Die Seite lag mit 169 Zeilen schon ueber der Komplexitaetsschwelle
// (CodeScene, Large Method ab 120); die vier fehlenden Pflichtangaben vom 2026-09-03
// haetten sie auf 235 gebracht. Eine Rechtsseite waechst mit jeder Pflichtangabe — sie
// braucht also eine Form, in der Wachsen nichts kostet. Geschnitten ist nach Zustaendigkeit:
// wer eine Frist aendert, fasst `RechteUndFristen` an; wer einen Dienstleister aendert,
// `DiensteUndHosting`. Der Rahmen der Seite bleibt in `page.tsx`.

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-heading font-bold text-xl text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
        {title}
      </h2>
      <div className="font-body text-muted/75 leading-[1.8] text-[0.95rem] space-y-3">
        {children}
      </div>
    </div>
  );
}

/** Abschnitte 3-7: was die Website selbst erhebt und wer daran beteiligt ist. */
export function DiensteUndHosting() {
  const { email } = BUSINESS;
  return (
    <>
      <Section title="3. Kontaktformular">
        <p>
          Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben aus dem Formular
          (Name, Telefonnummer, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage und für den Fall
          von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Übermittlung an unser Postfach erfolgt über einen Dienstleister für den E-Mail-Versand;
          Einzelheiten dazu finden Sie in Abschnitt 6.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO
          (Vertragsanbahnung).
        </p>
      </Section>

      <Section title="4. Webanalyse (Simple Analytics)">
        <p>
          Zur Reichweitenmessung verwenden wir Simple Analytics, einen cookielosen Webanalysedienst der
          Simple Analytics B.V. (Niederlande, EU). Simple Analytics setzt keine Cookies und erstellt keine
          personenbezogenen Profile; es werden ausschließlich aggregierte, anonyme Statistiken über die
          Nutzung unserer Website erhoben.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer datensparsamen
          Reichweitenmessung).
        </p>
        <p>
          Weitere Informationen:{" "}
          <a href="https://simpleanalytics.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-deep hover:underline">
            simpleanalytics.com/privacy-policy
          </a>
        </p>
      </Section>

      <Section title="5. Hosting">
        <p>
          Diese Website wird bei Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA
          gehostet (Dienst „Cloudflare Pages“). Beim Aufruf der Website werden automatisch
          Serverprotokolle (IP-Adresse, Browsertyp, Referrer, Datum/Uhrzeit) erfasst. Diese Daten werden
          nicht mit anderen Datenquellen zusammengeführt und nach spätestens 30 Tagen gelöscht.
        </p>
        <p>
          Cloudflare verarbeitet diese Daten in unserem Auftrag. Wir haben mit Cloudflare einen Vertrag
          zur Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen. Da Cloudflare, Inc. ihren Sitz in
          den USA hat, sind Datenübermittlungen in ein Drittland über die Standardvertragsklauseln (SCC)
          der EU-Kommission abgesichert. Rechtsgrundlage für den Einsatz ist Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an einem sicheren und leistungsfähigen Betrieb dieser Website).
        </p>
        <p>
          Datenschutzerklärung von Cloudflare:{" "}
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary-deep hover:underline">
            cloudflare.com/privacypolicy
          </a>
        </p>
      </Section>

      <Section title="6. E-Mail-Versand des Kontaktformulars">
        <p>
          Für die Zustellung der über das Kontaktformular abgesendeten Anfragen an unser Postfach nutzen
          wir den Versanddienst Brevo, betrieben von der Brevo GmbH, Köpenicker Straße 126,
          10179 Berlin (Tochtergesellschaft der Sendinblue SAS, 17 rue de Salneuve, 75017 Paris,
          Frankreich). Übermittelt werden ausschließlich die von Ihnen im Formular eingegebenen
          Angaben (Name, Telefonnummer, E-Mail-Adresse, Nachricht).
        </p>
        <p>
          Brevo verarbeitet diese Daten in unserem Auftrag. Wir haben mit Brevo einen Vertrag zur
          Auftragsverarbeitung nach Art. 28 DSGVO abgeschlossen. Die Verarbeitung findet auf Servern
          innerhalb der Europäischen Union statt; eine Übermittlung in ein Drittland ist damit nicht
          verbunden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung beim Absenden
          des Formulars) sowie Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
        </p>
        <p>
          Datenschutzerklärung von Brevo:{" "}
          <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-primary-deep hover:underline">
            brevo.com/de/legal/privacypolicy
          </a>
        </p>
        <p>
          Wenn Sie diese Übermittlung vermeiden möchten, erreichen Sie uns jederzeit auch direkt
          telefonisch oder per E-Mail an{" "}
          <a href={`mailto:${email}`} className="text-primary-deep hover:underline">{email}</a>.
        </p>
      </Section>

      <Section title="7. Cookies">
        <p>
          Diese Website setzt keine Tracking- oder Cookies für Marketing ein. Es werden ausschließlich
          technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
          Auch der eingesetzte Webanalysedienst (Simple Analytics) arbeitet cookielos, sodass für die
          Reichweitenmessung kein Einwilligungsbanner erforderlich ist.
        </p>
      </Section>

    </>
  );
}

/** Abschnitte 8-11: Rechte, Speicherdauer, Art. 22, Altersbezug. */
export function RechteUndFristen() {
  const { email } = BUSINESS;
  return (
    <>
      <Section title="8. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
          <a href={`mailto:${email}`} className="text-primary-deep hover:underline">{email}</a>
        </p>
        <p>
          Haben Sie uns eine Einwilligung erteilt — etwa für Terminerinnerungen per SMS —, können Sie
          diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO). Ein formloser
          Hinweis per E-Mail genügt. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
          bleibt davon unberührt, Nachteile entstehen Ihnen nicht.
        </p>
        <p>
          Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen
          das Recht auf Beschwerde bei einer Aufsichtsbehörde zu. Zuständig ist die{" "}
          <span className="font-semibold text-dark">Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen</span>, Kavalleriestraße 2–4, 40213 Düsseldorf,{" "}
          <a href="mailto:poststelle@ldi.nrw.de" className="text-primary-deep hover:underline">poststelle@ldi.nrw.de</a>.
        </p>
      </Section>

      {/* Die vier Pflichtangaben, die bis zum 2026-09-03 fehlten (Rechts-Inventur, R11):
          Speicherdauer (Art. 13 Abs. 2 lit. a), Widerrufsrecht (lit. c, oben ergänzt),
          automatisierte Entscheidungsfindung (lit. f) und die vollständige Anschrift der
          Aufsichtsbehörde. Eine Erklärung, die die eigenen Fristen nicht nennt, erfüllt
          Art. 13 nicht — auch wenn alles andere darin stimmt. */}
      <Section title="9. Wie lange wir Daten speichern">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck
          erforderlich ist oder gesetzliche Aufbewahrungspflichten es verlangen. Im Einzelnen:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <span className="font-semibold text-dark">Server-Protokolle</span> dieser Website: 7 Tage.
          </li>
          <li>
            <span className="font-semibold text-dark">Reichweitenmessung</span>: dauerhaft, aber
            ausschließlich als zusammengefasste Zahl ohne Bezug zu einer Person.
          </li>
          <li>
            <span className="font-semibold text-dark">Anfragen über das Kontaktformular</span>, aus denen
            kein Unterricht entsteht: 6 Monate nach der letzten Rückmeldung.
          </li>
          <li>
            <span className="font-semibold text-dark">Daten aus einem Unterrichtsvertrag</span>: nach den
            Fristen des jeweiligen Vertrages — drei Monate nach Vertragsende beim privaten Unterricht,
            sechs Monate bei einer Förderung über Bildung und Teilhabe.
          </li>
          <li>
            <span className="font-semibold text-dark">Rechnungen und Buchungsbelege</span>: zehn Jahre
            (§ 147 Abs. 3 AO), gerechnet ab dem Ende des Kalenderjahres. Diese Daten werden bis zum
            Ablauf der Frist ausschließlich zu diesem Zweck aufbewahrt.
          </li>
        </ul>
        <p>
          Läuft für einen Datensatz eine gesetzliche Aufbewahrungspflicht, gilt die längere Frist. Bis
          dahin wird er nicht mehr im laufenden Betrieb verwendet.
        </p>
      </Section>

      <Section title="10. Keine automatisierte Entscheidungsfindung">
        <p>
          Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO
          findet nicht statt. Es gibt bei uns keine Bewertung, Einstufung oder Auswahl von Personen, die
          ohne menschliche Beteiligung zustande kommt.
        </p>
      </Section>

      <Section title="11. Angebot für Erwachsene, Unterricht für Kinder">
        <p>
          Diese Website richtet sich an Erziehungsberechtigte. Verträge schließen wir ausschließlich mit
          Erwachsenen; ein Kind kann bei uns keinen Unterricht buchen und keine Daten übermitteln, für die
          es die Einwilligung eines Erziehungsberechtigten bräuchte. Wo wir Schülerinnen und Schüler
          unmittelbar ansprechen, ist das eine Frage des Tons und keine Aufforderung, uns ohne die Eltern
          Daten zu schicken.
        </p>
        <p>
          Falls uns dennoch Daten einer Person unter 16 Jahren ohne Zustimmung der Erziehungsberechtigten
          erreichen, löschen wir sie nach Kenntnis unverzüglich.
        </p>
      </Section>

    </>
  );
}

import type { FaqItem } from "./faq";

// Die Ratgeber-Ebene.
//
// Bis 2026-08-05 beantwortete die Seite nur Fragen von Leuten, die schon
// wussten, dass sie Nachhilfe wollen. Die vier Texte hier setzen eine Stufe
// frueher an: Was kostet das, ab wann lohnt es sich, was bedeutet der Blaue
// Brief, woran erkenne ich einen brauchbaren Anbieter.
//
// Zwei Grenzen, die bewusst gezogen sind:
//   1. KEINE eigenen Preise. Vorgabe des Inhabers.
//   2. KEINE Markennamen im Vergleichstext. Vergleichende Werbung mit
//      Wettbewerbern ist zwar erlaubt, aber die Grenze zwischen § 6 UWG und
//      einer Abmahnung verlaeuft an Formulierungen, nicht an Absichten.
//      Der Text vergleicht deshalb Kriterien, keine Anbieter.
//
// Rechtsangaben auf /ratgeber/versetzung-gefaehrdet stammen aus dem
// Schulgesetz NRW und der APO-S I, nachgeschlagen am 2026-08-05. Wer sie
// aendert, aendert eine Rechtsbehauptung.

export type RatgeberAbschnitt = {
  kicker?: string;
  titel: string;
  absaetze?: string[];
  /** Aufzaehlung mit fetter Vorderseite. */
  liste?: { t: string; d: string }[];
  /** Nummerierte Schritte. */
  schritte?: { titel: string; text: string }[];
};

export type RatgeberSeite = {
  slug: string;
  kicker: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  /** Einzeiler fuer die Sammelseite. */
  teaser: string;
  /** Direkte Antwort in unter 60 Woertern, gleich unter der Ueberschrift. */
  kurzantwort: string;
  abschnitte: RatgeberAbschnitt[];
  /** Erscheint als abgesetzter Kasten am Ende, z.B. der Rechtshinweis. */
  hinweis?: string;
  faq: FaqItem[];
  weiter: { href: string; text: string }[];
};

export const RATGEBER: RatgeberSeite[] = [
  {
    slug: "was-kostet-nachhilfe",
    kicker: "Kosten",
    h1: "Was kostet Nachhilfe? Woraus sich der Preis zusammensetzt",
    title: "Was kostet Nachhilfe? | Preisfaktoren und Vertragsfallen",
    description:
      "Woraus sich der Preis für Nachhilfe zusammensetzt, welche Vertragsklauseln teuer werden und wann das Amt die Kosten trägt. Für Familien in Duisburg.",
    lead: "Ein Stundenpreis allein sagt fast nichts. Entscheidend sind Vertragslaufzeit, Ferienregelung und die Frage, ob Ihr Kind einzeln oder in einer Gruppe sitzt.",
    teaser:
      "Warum der Stundenpreis die falsche Zahl ist und welche sechs Fragen Sie vor jeder Unterschrift stellen sollten.",
    kurzantwort:
      "Der Preis für Nachhilfe hängt an fünf Größen: Einzel- oder Gruppenunterricht, Häufigkeit, Vertragslaufzeit, Ort und Material. Vergleichbar wird er erst, wenn Sie ihn auf ein Schuljahr hochrechnen statt auf eine Stunde. Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag oder Sozialhilfe zahlt das Amt.",
    abschnitte: [
      {
        kicker: "Die falsche Zahl",
        titel: "Warum der Stundenpreis wenig aussagt",
        absaetze: [
          "Zwei Angebote mit demselben Stundenpreis können sich über ein Schuljahr um mehrere hundert Euro unterscheiden. Der Unterschied steckt nicht im Preis, sondern in der Frage, wofür Sie zahlen und wie lange Sie gebunden sind.",
          "Ein Schuljahr hat grob gerechnet vierzig Unterrichtswochen, nicht zweiundfünfzig. Wenn ein Vertrag zwölf Monate lang jeden Monat denselben Betrag abbucht, zahlen Sie in den Ferien mit. Das kann in Ordnung sein, wenn der Monatsbetrag entsprechend kalkuliert ist. Es ist nicht in Ordnung, wenn niemand es Ihnen sagt.",
          "Rechnen Sie deshalb um: Betrag pro Monat mal Laufzeit in Monaten, geteilt durch die Zahl der Stunden, die in dieser Zeit tatsächlich stattfinden. Erst diese Zahl lässt sich vergleichen.",
        ],
      },
      {
        kicker: "Die Größen",
        titel: "Fünf Dinge, die den Preis bestimmen",
        liste: [
          {
            t: "Einzeln oder in der Gruppe",
            d: "Einzelunterricht kostet mehr und ist nicht immer besser. Eine Gruppe von drei bis fünf Kindern im selben Fach und in ähnlicher Klassenstufe funktioniert oft gut, weil Kinder sich gegenseitig erklären. Bei einer großen Lücke oder starker Unsicherheit ist einzeln richtiger.",
          },
          {
            t: "Wie oft",
            d: "Einmal die Woche hält den Anschluss, zweimal schließt eine Lücke. Wer eine Lücke aus dem letzten Schuljahr mitschleppt, kommt mit einer Stunde pro Woche selten hinterher, weil parallel neuer Stoff dazukommt.",
          },
          {
            t: "Wie lange gebunden",
            d: "Mindestlaufzeiten von zwölf Monaten sind in der Branche verbreitet. Sie sind zulässig, aber sie bedeuten, dass Sie auch dann weiterzahlen, wenn die Noten längst stimmen.",
          },
          {
            t: "Wo",
            d: "Unterricht am Lernort, bei Ihnen zu Hause oder online. Hausbesuche kosten Fahrzeit, und die zahlt jemand.",
          },
          {
            t: "Material",
            d: "Manche Anbieter rechnen Arbeitshefte, Kopien oder eine Anmeldegebühr getrennt ab. Fragen Sie danach, bevor Sie unterschreiben, nicht danach.",
          },
        ],
      },
      {
        kicker: "Vor der Unterschrift",
        titel: "Sechs Fragen, die Sie jedem Anbieter stellen sollten",
        absaetze: [
          "Diese sechs Fragen kosten fünf Minuten am Telefon und entscheiden über den Betrag, der am Ende des Schuljahres auf dem Kontoauszug steht.",
        ],
        liste: [
          { t: "Wie lange bindet mich der Vertrag, und wie lange ist die Kündigungsfrist?", d: "" },
          { t: "Zahle ich in den Schulferien mit?", d: "" },
          { t: "Was passiert, wenn eine Stunde ausfällt, bei Ihnen und bei uns?", d: "" },
          { t: "Kostet die erste Stunde etwas, und ist sie unverbindlich?", d: "" },
          { t: "Sind Material, Anmeldung oder Prüfungsvorbereitung im Preis enthalten?", d: "" },
          { t: "Rechnen Sie direkt mit dem Jobcenter oder der Stadt ab?", d: "" },
        ],
      },
      {
        kicker: "Kostenfrei",
        titel: "Wann Nachhilfe nichts kostet",
        absaetze: [
          "Familien, die Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Asylbewerberleistungen beziehen, haben Anspruch auf Lernförderung aus dem Bildungspaket. Die Kosten trägt dann das Amt, für die Familie entsteht kein Eigenanteil.",
          "Voraussetzung ist, dass die Schule den Förderbedarf im jeweiligen Fach bestätigt und dass der Antrag vor Beginn der Förderung gestellt wird. Wir rechnen direkt mit dem Jobcenter Duisburg beziehungsweise der Stadt Duisburg ab, Sie müssen nicht in Vorleistung gehen.",
        ],
      },
      {
        kicker: "Unsere Preise",
        titel: "Warum hier keine Preisliste steht",
        absaetze: [
          "Weil eine Zahl ohne Ihren Fall keine Aussage hat. Ob Ihr Kind einzeln oder in der Gruppe sitzt, ob es um ein Fach oder drei geht, ob eine Prüfung ansteht und ob das Amt zahlt, ändert den Betrag jedes Mal.",
          "Sie bekommen den Preis für Ihren Fall im ersten Gespräch genannt, vor der ersten Stunde und schriftlich. Die Probestunde ist kostenlos und verpflichtet zu nichts.",
        ],
      },
    ],
    faq: [
      {
        q: "Was kostet Nachhilfe im Monat?",
        a: "Das hängt an der Unterrichtsform und daran, wie oft unterrichtet wird. Vergleichbar wird ein Angebot erst, wenn Sie den Monatsbetrag mit der Vertragslaufzeit multiplizieren und durch die Zahl der Stunden teilen, die in dieser Zeit tatsächlich stattfinden. Ferien und Ausfalltage gehören in diese Rechnung.",
      },
      {
        q: "Muss ich für Nachhilfe einen Jahresvertrag abschließen?",
        a: "Bei uns nicht. In der Branche sind Mindestlaufzeiten von zwölf Monaten üblich und rechtlich zulässig. Fragen Sie vor der Unterschrift nach Laufzeit und Kündigungsfrist und lassen Sie sich beides schriftlich geben.",
      },
      {
        q: "Zahlt man in den Ferien mit?",
        a: "Das steht im Vertrag und ist von Anbieter zu Anbieter verschieden. Ein Schuljahr hat rund vierzig Unterrichtswochen. Wer zwölf Monate lang denselben Betrag abbucht, rechnet die Ferien entweder ein oder lässt Sie dafür zahlen.",
      },
      {
        q: "Übernimmt das Amt die Kosten für Nachhilfe?",
        a: "Bei Bezug von Bürgergeld, Wohngeld, Kinderzuschlag, Sozialhilfe oder Asylbewerberleistungen ja, über die Lernförderung aus dem Bildungspaket. Die Schule bestätigt den Förderbedarf, der Antrag muss vor Beginn der Förderung gestellt werden. Wir rechnen direkt mit dem Amt ab.",
      },
      {
        q: "Ist Einzelunterricht besser als eine Gruppe?",
        a: "Nicht grundsätzlich. Er ist teurer und bei großen Lücken oder starker Unsicherheit richtig. Eine kleine Gruppe im selben Fach und in ähnlicher Klassenstufe hat einen eigenen Vorteil: Kinder erklären einander anders, als eine Lehrkraft es tut, und das hilft beim Behalten.",
      },
    ],
    weiter: [
      { href: "/bildung-und-teilhabe", text: "Lernförderung über Bildung und Teilhabe" },
      { href: "/ratgeber/nachhilfe-vergleichen", text: "Anbieter vergleichen: die Kriterien" },
      { href: "/nachhilfe", text: "Alle Fächer und Standorte" },
    ],
  },
  {
    slug: "ab-wann-nachhilfe",
    kicker: "Zeitpunkt",
    h1: "Ab wann ist Nachhilfe sinnvoll?",
    title: "Ab wann ist Nachhilfe sinnvoll? | Anzeichen und Zeitpunkt",
    description:
      "Nicht die Note entscheidet, ob Nachhilfe hilft, sondern woran es hakt. Vier Anzeichen, drei Fälle für andere Hilfe und der beste Zeitpunkt im Schuljahr.",
    lead: "Die verbreitete Antwort lautet: ab einer Vier. Sie ist falsch. Eine Vier aus Schlamperei braucht etwas anderes als eine Drei, für die ein Kind jeden Abend zwei Stunden arbeitet.",
    teaser:
      "Vier Anzeichen, die für Nachhilfe sprechen, und drei Fälle, in denen etwas anderes hilft.",
    kurzantwort:
      "Nachhilfe hilft, wenn eine Verständnislücke da ist und das Kind sie allein nicht schließen kann. Sie hilft nicht bei fehlender Organisation, bei Prüfungsangst oder bei einer unerkannten Lese-Rechtschreib-Schwäche. Der beste Zeitpunkt ist nach dem Halbjahreszeugnis, nicht drei Wochen vor der Versetzungskonferenz.",
    abschnitte: [
      {
        kicker: "Die falsche Frage",
        titel: "Nicht die Note zählt, sondern die Ursache",
        absaetze: [
          "Eine Note beschreibt ein Ergebnis, keine Ursache. Zwei Kinder mit derselben Vier in Mathematik brauchen völlig Verschiedenes: Das eine hat die Bruchrechnung nie verstanden und scheitert seitdem an allem, was darauf aufbaut. Das andere versteht alles und vergisst regelmäßig, die Hausaufgaben abzugeben.",
          "Im ersten Fall ist Nachhilfe genau das Richtige. Im zweiten wäre sie teuer und wirkungslos.",
          "Deshalb fangen wir jede Zusammenarbeit mit einer Standortbestimmung an und nicht mit dem Zeugnis. Nach neunzig Minuten wissen wir, ob eine Lücke da ist, wo sie anfängt und wie tief sie reicht.",
        ],
      },
      {
        kicker: "Anzeichen",
        titel: "Vier Signale, die für Nachhilfe sprechen",
        liste: [
          {
            t: "Der Aufwand steigt, die Note bleibt",
            d: "Ihr Kind lernt mehr als im letzten Jahr und schreibt dieselben Noten. Das ist das deutlichste Zeichen für eine Lücke weiter unten: Es arbeitet gegen ein Fundament an, das nicht trägt.",
          },
          {
            t: "Es kann nicht sagen, was es nicht versteht",
            d: "Auf die Frage, wo es hakt, kommt „alles“ oder ein Schulterzucken. Wer eine Lücke benennen kann, kann sie meist auch selbst schließen. Wer sie nicht benennen kann, braucht jemanden, der von außen sucht.",
          },
          {
            t: "Ein Fach färbt auf andere ab",
            d: "Mathematik zieht Physik und Chemie mit, Deutsch zieht alle Fächer mit langen Texten mit. Wenn zwei Noten gleichzeitig rutschen, liegt die Ursache oft in einem einzigen Fach.",
          },
          {
            t: "Lernen ist zum Streitthema geworden",
            d: "Wenn Hausaufgaben regelmäßig in Streit enden, ist die Beziehung zwischen Eltern und Kind der eigentliche Schaden. Eine dritte Person löst das nicht immer, nimmt aber verlässlich Druck aus dem Wohnzimmer.",
          },
        ],
      },
      {
        kicker: "Grenzen",
        titel: "Drei Fälle, in denen etwas anderes hilft",
        liste: [
          {
            t: "Es fehlt an Organisation, nicht am Verständnis",
            d: "Material nicht dabei, Termine vergessen, in letzter Minute gelernt. Das ist ein Arbeitsproblem. Es lässt sich lösen, aber nicht durch mehr Fachunterricht.",
          },
          {
            t: "Prüfungsangst",
            d: "Wenn Ihr Kind zu Hause alles kann und in der Arbeit nichts, ist der Stoff nicht das Thema. Wir können Prüfungssituationen üben und Abläufe automatisieren. Bleibt die Angst, gehört sie in andere Hände.",
          },
          {
            t: "Etwas Unerkanntes",
            d: "Eine Lese-Rechtschreib-Schwäche, eine Rechenschwäche, eine Seh- oder Hörschwäche. Solche Ursachen bleiben oft jahrelang unbemerkt, und jede Nachhilfestunde ist gegen sie verlorene Zeit. Wenn wir einen Verdacht haben, sagen wir es Ihnen und nennen die zuständige Stelle.",
          },
        ],
      },
      {
        kicker: "Zeitpunkt",
        titel: "Wann im Schuljahr anfangen",
        absaetze: [
          "Der günstigste Moment ist kurz nach dem Halbjahreszeugnis. Dann steht schwarz auf weiß, wo es steht, und es bleibt ein halbes Jahr, um etwas zu ändern.",
          "Der zweithäufigste Moment ist der schlechteste: drei Wochen vor der Versetzungskonferenz, nachdem ein Blauer Brief gekommen ist. Zu diesem Zeitpunkt lässt sich in einem Fach oft noch etwas retten, in drei nicht mehr.",
          "Und es gibt einen Moment, den fast niemand nutzt: die Sommerferien vor dem neuen Schuljahr. Wer eine bekannte Lücke in den Ferien schließt, startet im August auf gleicher Höhe wie die Klasse statt einen halben Schritt dahinter.",
        ],
      },
    ],
    faq: [
      {
        q: "Ab welcher Note braucht mein Kind Nachhilfe?",
        a: "Die Note ist der falsche Auslöser. Entscheidend ist, ob eine Verständnislücke vorliegt und ob Ihr Kind sie allein schließen kann. Eine Drei, für die es täglich zwei Stunden arbeitet, ist ein deutlicheres Warnsignal als eine Vier aus Nachlässigkeit.",
      },
      {
        q: "Ab welcher Klasse ist Nachhilfe sinnvoll?",
        a: "Es gibt keine Untergrenze. Wir unterrichten ab Klasse 1. In der Grundschule geht es meist um Lesen, Schreiben und die Grundrechenarten, und gerade dort zahlt sich frühes Eingreifen aus, weil alles Spätere darauf aufbaut.",
      },
      {
        q: "Wie lange dauert es, bis sich etwas ändert?",
        a: "Bei einer klar umrissenen Lücke sind sechs bis zehn Wochen realistisch, bevor sich das in einer Note zeigt. Bei einer Lücke, die zwei Schuljahre zurückreicht, dauert es länger. Nach der ersten Standortbestimmung sagen wir Ihnen, womit Sie rechnen können.",
      },
      {
        q: "Ist es zu spät, wenn schon ein Blauer Brief da ist?",
        a: "Nein, aber die Zeit ist knapp. Die Benachrichtigung kommt spätestens zehn Wochen vor dem Versetzungstermin. In einem Fach lässt sich in dieser Zeit oft noch etwas bewegen, bei mehreren Fächern selten. Und es gibt die Nachprüfung am Ende der Sommerferien als zweite Möglichkeit.",
      },
    ],
    weiter: [
      { href: "/ratgeber/versetzung-gefaehrdet", text: "Versetzung gefährdet: was jetzt gilt" },
      { href: "/ratgeber/was-kostet-nachhilfe", text: "Was Nachhilfe kostet" },
      { href: "/nachhilfe", text: "Alle Fächer und Standorte" },
    ],
  },
  {
    slug: "versetzung-gefaehrdet",
    kicker: "Versetzung",
    h1: "Versetzung gefährdet: was der Blaue Brief bedeutet",
    title: "Versetzung gefährdet in NRW | Blauer Brief und Nachprüfung",
    description:
      "Was die Mahnung nach § 50 Abs. 4 Schulgesetz NRW bedeutet, welche Frist gilt und wie die Nachprüfung am Ende der Sommerferien funktioniert.",
    lead: "Der Blaue Brief ist keine Entscheidung, sondern eine Frist. Ab dem Tag, an dem er ankommt, bleiben mindestens zehn Wochen.",
    teaser:
      "Frist, Ausgleichsregelung und die Nachprüfung am Ende der Sommerferien, mit den Paragrafen dazu.",
    kurzantwort:
      "Der Blaue Brief ist die Benachrichtigung nach § 50 Absatz 4 Schulgesetz NRW. Sie geht spätestens zehn Wochen vor dem Versetzungstermin an die Eltern. Versetzt wird, wer in allen Fächern mindestens ausreichend steht oder wessen schwache Noten ausgeglichen werden können. Bleibt es bei einem Fach, ist eine Nachprüfung am Ende der Sommerferien möglich.",
    abschnitte: [
      {
        kicker: "Was er ist",
        titel: "Eine Frist, keine Entscheidung",
        absaetze: [
          "Wenn die Leistungen in einem Fach nicht mehr ausreichen und damit von der letzten Zeugnisnote abweichen, muss die Schule die Eltern schriftlich benachrichtigen. Das steht in § 50 Absatz 4 des Schulgesetzes Nordrhein-Westfalen. Umgangssprachlich heißt diese Mitteilung Blauer Brief, im Amtsdeutsch Mahnung.",
          "Die Benachrichtigung geht spätestens zehn Wochen vor dem Versetzungstermin heraus. Das ist der eigentliche Inhalt der Nachricht: Es sind noch zehn Schulwochen, und die Entscheidung fällt erst am Ende.",
          "Umgekehrt gilt eine Regel, die kaum jemand kennt: Unterbleibt eine Benachrichtigung, obwohl ein Fach hätte abgemahnt werden müssen, bleibt die schwache Leistung in diesem Fach bei der Versetzungsentscheidung unberücksichtigt. Ein fehlender Brief allein begründet allerdings keinen Anspruch auf Versetzung. Wenn Sie den Verdacht haben, dass eine Mahnung fehlt, fragen Sie bei der Schule nach, und zwar vor der Versetzungskonferenz.",
        ],
      },
      {
        kicker: "Die Regel",
        titel: "Wann versetzt wird",
        absaetze: [
          "§ 22 der Ausbildungs- und Prüfungsordnung Sekundarstufe I formuliert es knapp: Versetzt wird, wer in allen Fächern und Lernbereichen ausreichende oder bessere Leistungen hat. Oder wer nicht ausreichende Leistungen ausgleichen kann.",
          "Wie dieser Ausgleich genau aussieht, hängt an der Schulform und steht in den §§ 25 bis 29 derselben Verordnung. Für Hauptschule, Realschule, Gymnasium, Gesamtschule und Sekundarschule gelten jeweils eigene Regeln. Welche für Ihr Kind gilt, sagt Ihnen die Klassenleitung verbindlich.",
          "Entschieden wird auf Grundlage der Leistungen im zweiten Schulhalbjahr. Die Entwicklung über das ganze Jahr und die Note aus dem ersten Halbjahr werden berücksichtigt, sind aber nicht der Maßstab. Wer im Februar schlecht stand und seitdem gearbeitet hat, steht besser da, als das Halbjahreszeugnis vermuten lässt.",
        ],
      },
      {
        kicker: "Die zweite Chance",
        titel: "Die Nachprüfung am Ende der Sommerferien",
        absaetze: [
          "Wird ein Kind ab Klasse 7 nicht versetzt, ist eine Nachprüfung möglich. Die Schulleitung lässt dazu zu, wenn in einem einzigen Fach die Verbesserung von mangelhaft auf ausreichend genügen würde, um die Versetzungsbedingungen zu erfüllen. Kommen mehrere Fächer in Frage, wählt die Schülerin oder der Schüler.",
          "Der Termin ist der eigentliche Punkt: Die Nachprüfung findet in der letzten Woche vor Unterrichtsbeginn des neuen Schuljahres statt. Zwischen dem Zeugnis und der Prüfung liegen also die kompletten Sommerferien.",
          "Das ist mehr Zeit, als die meisten Familien annehmen, und weniger, als es klingt. Sechs Wochen reichen, um ein Fach von mangelhaft auf ausreichend zu bringen, wenn ab der ersten Ferienwoche gearbeitet wird. Sie reichen nicht, wenn zwei Wochen vor Schulbeginn angefangen wird.",
        ],
      },
      {
        kicker: "Vorgehen",
        titel: "Was in diesen zehn Wochen zu tun ist",
        schritte: [
          {
            titel: "Den Brief genau lesen",
            text: "Welches Fach, welche Note, welcher Bezugszeitraum. Steht dort ein Fach, das Sie nicht erwartet haben, ist das die wichtigere Nachricht als das erwartete.",
          },
          {
            titel: "Mit der Fachlehrkraft sprechen",
            text: "Nicht um zu verhandeln, sondern um zwei Dinge zu erfahren: Woran genau liegt es, und welche Leistungen stehen bis zum Schuljahresende noch an. Danach wissen Sie, worauf sich Arbeit lohnt.",
          },
          {
            titel: "Auf ein Fach konzentrieren",
            text: "Bei zwei gefährdeten Fächern gleichzeitig anzusetzen, führt meist dazu, dass keines gerettet wird. Fragen Sie die Schule, welches Fach die Versetzung am ehesten kippt, und fangen Sie dort an.",
          },
          {
            titel: "Zwei Termine pro Woche einplanen",
            text: "Einmal pro Woche hält den Anschluss. In zehn Wochen eine Note zu heben, verlangt mehr. Wer gleichzeitig eine Lücke aus dem Vorjahr mitschleppt, braucht diese Frequenz ohnehin.",
          },
          {
            titel: "Die Nachprüfung mitdenken",
            text: "Falls es doch nicht reicht, ist der Sommer die zweite Chance und nicht das Ende. Wer das früh weiß, verliert im Juli keine drei Wochen an Schockstarre.",
          },
        ],
      },
    ],
    hinweis:
      "Diese Seite gibt allgemeine Auskunft über das Schulrecht in Nordrhein-Westfalen, keine Rechtsberatung im Einzelfall. Verbindlich sind das Schulgesetz, die Ausbildungs- und Prüfungsordnung und die Auskunft Ihrer Schule. Stand der zitierten Vorschriften ist der 5. August 2026.",
    faq: [
      {
        q: "Was ist ein Blauer Brief?",
        a: "Die schriftliche Benachrichtigung der Eltern nach § 50 Absatz 4 Schulgesetz NRW, wenn die Leistungen in einem Fach nicht mehr ausreichen und damit von der letzten Zeugnisnote abweichen. Sie geht spätestens zehn Wochen vor dem Versetzungstermin heraus.",
      },
      {
        q: "Was passiert, wenn die Schule den Blauen Brief nicht verschickt hat?",
        a: "Unterbleibt eine Benachrichtigung, obwohl sie hätte erfolgen müssen, bleibt die schwache Leistung in diesem Fach bei der Versetzungsentscheidung unberücksichtigt. Ein fehlender Brief allein begründet aber keinen Anspruch auf Versetzung. Fragen Sie bei der Schule nach, bevor die Versetzungskonferenz tagt.",
      },
      {
        q: "Wann ist eine Nachprüfung möglich?",
        a: "Ab Klasse 7 und nur dann, wenn in einem einzigen Fach die Verbesserung von mangelhaft auf ausreichend genügen würde, um versetzt zu werden. Die Zulassung spricht die Schulleitung aus. Kommen mehrere Fächer in Betracht, wählt die Schülerin oder der Schüler.",
      },
      {
        q: "Wann findet die Nachprüfung statt?",
        a: "In der letzten Woche vor Unterrichtsbeginn des neuen Schuljahres. Zwischen Zeugnis und Prüfung liegen damit die gesamten Sommerferien.",
      },
      {
        q: "Zählt für die Versetzung das ganze Schuljahr?",
        a: "Die Entscheidung beruht auf den Leistungen im zweiten Schulhalbjahr. Die Gesamtentwicklung über das Jahr und die Note aus dem ersten Halbjahr werden berücksichtigt, sind aber nicht der Maßstab. Wer nach dem Halbjahreszeugnis aufholt, verbessert seine Lage.",
      },
    ],
    weiter: [
      { href: "/ratgeber/ab-wann-nachhilfe", text: "Ab wann Nachhilfe sinnvoll ist" },
      { href: "/bildung-und-teilhabe", text: "Lernförderung über das Amt" },
      { href: "/nachhilfe", text: "Alle Fächer und Standorte" },
    ],
  },
  {
    slug: "nachhilfe-vergleichen",
    kicker: "Auswahl",
    h1: "Nachhilfe in Duisburg vergleichen: worauf es ankommt",
    title: "Nachhilfe vergleichen | Acht Kriterien für Duisburger Familien",
    description:
      "Acht Kriterien, an denen sich Nachhilfeanbieter unterscheiden, und die Fragen, mit denen Sie jedes davon in fünf Minuten am Telefon klären.",
    lead: "Anbieter unterscheiden sich weniger im Preis als in acht Punkten, die auf keiner Website stehen. Alle acht lassen sich am Telefon klären.",
    teaser:
      "Acht Punkte, in denen sich Anbieter wirklich unterscheiden, und wie Sie sie am Telefon prüfen.",
    kurzantwort:
      "Vergleichen Sie nicht Preise, sondern acht Punkte: wer unterrichtet, ob diese Person bleibt, wie die Gruppe zusammengesetzt ist, wie lange der Vertrag bindet, was bei Ausfall passiert, ob Material enthalten ist, ob mit dem Amt abgerechnet wird und wer ans Telefon geht.",
    abschnitte: [
      {
        kicker: "Vorbemerkung",
        titel: "Warum hier keine Namen stehen",
        absaetze: [
          "Auf dieser Seite werden keine Wettbewerber genannt und keine Anbieter bewertet. Wir schreiben über unser eigenes Angebot und beschreiben Kriterien, an denen sich jedes Angebot messen lässt, auch unseres.",
          "Prüfen Sie die acht Punkte bei uns genauso wie bei allen anderen. Wo wir nicht gut abschneiden, sagen wir es im Gespräch.",
        ],
      },
      {
        kicker: "Die Kriterien",
        titel: "Acht Punkte, in denen sich Angebote unterscheiden",
        liste: [
          {
            t: "Wer unterrichtet",
            d: "Eine Fachkraft, eine Studentin, eine Oberstufenschülerin. Alle drei können gut unterrichten. Der Unterschied liegt darin, ob jemand den Lehrplan des Landes kennt und weiß, wie in der Prüfung bewertet wird.",
          },
          {
            t: "Ob die Person bleibt",
            d: "Die wichtigere Frage. Ein Wechsel der Lehrkraft kostet zwei bis vier Stunden, bis die neue Person weiß, wo das Kind steht. Fragen Sie, wie oft bei diesem Anbieter gewechselt wird.",
          },
          {
            t: "Wie die Gruppe zusammengesetzt ist",
            d: "Nicht die Zahl entscheidet, sondern die Mischung. Fünf Kinder im selben Fach und in ähnlicher Klassenstufe sind eine Lerngruppe. Drei Kinder in drei verschiedenen Fächern sind drei Einzelunterrichte, die sich eine Lehrkraft teilen.",
          },
          {
            t: "Wie lange der Vertrag bindet",
            d: "Mindestlaufzeit und Kündigungsfrist. Zwölf Monate sind branchenüblich und zulässig. Sie bedeuten, dass Sie weiterzahlen, auch wenn das Ziel im Februar erreicht ist.",
          },
          {
            t: "Was bei Ausfall passiert",
            d: "Ihr Kind ist krank, die Lehrkraft ist krank, die Schule macht einen Ausflug. Fragen Sie beide Richtungen ab und lassen Sie sich die Antwort zeigen, nicht nur sagen.",
          },
          {
            t: "Ob Material enthalten ist",
            d: "Arbeitshefte, Kopien, Prüfungsaufgaben, Anmeldegebühr. Manche Anbieter rechnen das getrennt ab. Unser Übungsmaterial steht frei im Netz, ohne Anmeldung und ohne E-Mail-Adresse.",
          },
          {
            t: "Ob mit dem Amt abgerechnet wird",
            d: "Bei Lernförderung über Bildung und Teilhabe rechnen längst nicht alle Anbieter direkt mit dem Jobcenter oder der Stadt ab. Wo das nicht geht, gehen Familien in Vorleistung und warten auf Erstattung.",
          },
          {
            t: "Wer ans Telefon geht",
            d: "Bei einem Einzelunternehmen die Person, die unterrichtet. Bei einer Kette eine Zentrale. Beides hat Vor- und Nachteile, aber es macht einen Unterschied, wenn kurzfristig etwas zu klären ist.",
          },
        ],
      },
      {
        kicker: "Praxis",
        titel: "Wie Sie das in fünf Minuten prüfen",
        absaetze: [
          "Rufen Sie an, statt Formulare auszufüllen. Ein Rückrufformular sagt Ihnen nichts über die acht Punkte, ein Telefonat klärt sechs davon.",
          "Fragen Sie im Gespräch nach den beiden Punkten, die am seltensten freiwillig genannt werden: nach der Vertragslaufzeit und danach, wie oft die Lehrkraft wechselt. Wie ein Anbieter auf diese beiden Fragen reagiert, sagt oft mehr als die Antwort selbst.",
          "Nehmen Sie danach die kostenlose Probestunde in Anspruch, wenn es eine gibt. Ihr Kind merkt in neunzig Minuten, ob es mit der Person arbeiten kann, und darauf kommt am Ende mehr an als auf jedes Kriterium dieser Liste.",
        ],
      },
    ],
    faq: [
      {
        q: "Worauf sollte man bei einem Nachhilfeanbieter zuerst achten?",
        a: "Auf zwei Dinge: wer unterrichtet und ob diese Person bleibt. Ein Wechsel der Lehrkraft kostet zwei bis vier Stunden, bis die neue Person weiß, wo das Kind steht. Erst danach kommen Preis und Vertragsbedingungen.",
      },
      {
        q: "Ist eine kleine Gruppe oder Einzelunterricht besser?",
        a: "Es kommt auf die Zusammensetzung an, nicht auf die Zahl. Eine Gruppe, in der alle dasselbe Fach in ähnlicher Klassenstufe haben, arbeitet gut. Eine Gruppe, in der jedes Kind an etwas anderem sitzt, ist geteilter Einzelunterricht zum Gruppenpreis.",
      },
      {
        q: "Wie erkenne ich einen unseriösen Vertrag?",
        a: "An drei Signalen: eine Mindestlaufzeit, die nicht auf Nachfrage genannt wird, Kosten, die erst im Kleingedruckten auftauchen, und Druck, sofort zu unterschreiben. Ein seriöses Angebot verträgt es, dass Sie den Vertrag mit nach Hause nehmen.",
      },
      {
        q: "Rechnen alle Anbieter mit dem Jobcenter ab?",
        a: "Nein. Bei Lernförderung über das Bildungspaket rechnen manche Anbieter nicht direkt mit Jobcenter oder Stadt ab, sodass Familien in Vorleistung gehen. Fragen Sie das ausdrücklich, wenn Sie Leistungen beziehen.",
      },
    ],
    weiter: [
      { href: "/ratgeber/was-kostet-nachhilfe", text: "Was Nachhilfe kostet" },
      { href: "/material", text: "Unser Übungsmaterial, frei zugänglich" },
      { href: "/bildung-und-teilhabe", text: "Abrechnung über das Amt" },
    ],
  },
];

export function ratgeberNachSlug(slug: string): RatgeberSeite | undefined {
  return RATGEBER.find((r) => r.slug === slug);
}

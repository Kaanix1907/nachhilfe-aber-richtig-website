// Wann die Inhalte zuletzt inhaltlich durchgesehen wurden.
//
// BEWUSST von Hand gepflegt und NICHT aus dem git-Datum abgeleitet: sonst
// springt das Datum bei jedem Tippfehler, jeder Umbenennung und jeder rein
// technischen Änderung hoch. Ein Aktualitätshinweis, der das tut, behauptet
// eine Durchsicht, die nie stattgefunden hat — gegenüber Leserinnen und
// Lesern wie gegenüber Suchmaschinen.
//
// PFLEGE: Wer den Text einer Seite inhaltlich anfasst oder ihn durchsieht und
// für weiterhin richtig befindet, setzt hier das Datum neu. Wer nur Technik
// ändert, lässt es stehen.
//
// Das Datum speist drei Stellen: den sichtbaren Hinweis unter den Seiten,
// `dateModified` im JSON-LD und `lastModified` in der Sitemap. Alle drei
// müssen dasselbe sagen — widersprechen sie sich, ist keines mehr glaubhaft.

/** ISO-Datum der letzten inhaltlichen Durchsicht. */
export const INHALT_STAND = "2026-08-04";

const MONATE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

/**
 * Monatsgenaue Anzeige ("August 2026"). Absichtlich nicht taggenau: bei
 * Inhalten, die sich über Monate kaum ändern, täuscht ein Tagesdatum eine
 * Pflegefrequenz vor, die es nicht gibt.
 */
export function standAnzeige(iso: string = INHALT_STAND): string {
  const [jahr, monat] = iso.split("-");
  return `${MONATE[Number(monat) - 1]} ${jahr}`;
}

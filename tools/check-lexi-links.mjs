#!/usr/bin/env node
// Prüft, dass keine Quelldatei auf einen Lexi-Pfad zeigt, den es nicht gibt.
//
// Warum es das gibt: der CTA auf /lexi zeigte auf lexi.nachhilfe-aber-richtig.de/chat
// -> HTTP 404. Den Pfad gibt es in der Lexi-App nicht, der Chat liegt auf der Wurzel.
// Aufgefallen ist es erst bei einer Live-Prüfung, weil NICHTS die Links misst. Beim
// ersten Fix wurde dann nur ChatWidget.tsx korrigiert — src/app/lexi/page.tsx hatte eine
// ZWEITE, eigene LEXI_URL-Konstante, die gleich drei Stellen speist: zwei CTA-Buttons
// und das SoftwareApplication-JSON-LD (das Google eine tote URL als kanonische Adresse
// der App meldete). Eine Handprüfung findet die zweite Stelle nicht zuverlässig.
//
// Bewusst offline: greppt die Quellen, macht keine Netz-Requests. Damit läuft er in der
// CI ohne Flake und ohne die Lexi-App zu belasten. KNOWN_GOOD ist die Behauptung, welche
// Pfade existieren — sie stammt aus einer echten Messung, nicht aus einer Annahme.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const LEXI_HOST = "lexi.nachhilfe-aber-richtig.de";
// Gemessen 2026-07-16: "/" -> 200. /chat, /de, /app, /datenschutz, /impressum -> 404.
const KNOWN_GOOD = new Set(["/", ""]);

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk("src").filter((f) => /\.(ts|tsx|js|jsx)$/.test(f));
const bad = [];

for (const file of files) {
  readFileSync(file, "utf8").split("\n").forEach((line, i) => {
    // Nur echte URLs (mit Protokoll), damit Fließtext in der Datenschutzerklärung,
    // der den Host nur nennt, nicht als Link zählt.
    for (const match of line.matchAll(new RegExp(`https://${LEXI_HOST}([^"'\\s\`)]*)`, "g"))) {
      if (!KNOWN_GOOD.has(match[1])) {
        bad.push({ file, line: i + 1, url: match[0] });
      }
    }
  });
}

if (bad.length > 0) {
  console.error(`FEHLER: ${bad.length} Verweis(e) auf einen Lexi-Pfad, den es nicht gibt:\n`);
  for (const b of bad) console.error(`  ${b.file}:${b.line}  ${b.url}`);
  console.error(`\nBekannt gute Pfade: ${[...KNOWN_GOOD].map((p) => `"${p}"`).join(", ")}`);
  console.error("Existiert der Pfad inzwischen? Dann KNOWN_GOOD erweitern — aber vorher messen.");
  process.exit(1);
}

console.log(`OK: ${files.length} Dateien geprüft, alle ${LEXI_HOST}-Verweise zeigen auf existierende Pfade.`);

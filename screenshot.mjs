/**
 * Screenshot-Tool für Next.js Websites
 * Verwendung: node ../../screenshot.mjs [url] [label]
 * Beispiel:   node ../../screenshot.mjs http://localhost:3000 hero
 * Output:     ./screenshots/screenshot-N-[label].png
 */

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";

// Screenshots-Ordner im aufrufenden Projektverzeichnis
const screenshotDir = path.join(process.cwd(), "screenshots");
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

// Auto-increment Dateiname
const existing = fs.readdirSync(screenshotDir).filter(f => f.endsWith(".png"));
const n = existing.length + 1;
const filename = label
  ? `screenshot-${n}-${label}.png`
  : `screenshot-${n}.png`;
const outputPath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
  protocolTimeout: 60000,
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

// Fonts, Bilder & Animationen abwarten
await new Promise(r => setTimeout(r, 2000));

await page.screenshot({ path: outputPath, fullPage: false });
await browser.close();

console.log(outputPath);

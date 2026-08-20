import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // Cloudflare Pages liefert reine Dateien aus — es gibt keinen Next-Server mehr.
  // Der Build schreibt nach out/ statt .next/.
  output: "export",
  images: {
    // Der Bild-Optimizer ist ein Server-Feature und faellt mit dem Export weg.
    // formats/minimumCacheTTL waeren damit wirkungslos und sind deshalb raus.
    unoptimized: true,
  },
  // Security- und Cache-Header stehen jetzt in public/_headers.
  // headers() ist mit output: "export" nicht erlaubt und liesse den Build scheitern.
};

// Sentry-Wrapper: injiziert SDK + Client-Instrumentation. Source-Map-Upload deaktiviert
// (kein SENTRY_AUTH_TOKEN in CI → Build bleibt grün); für symbolisierte Stacktraces später
// Token setzen + sourcemaps.disable entfernen.
//
// NUR Browser-Fehler. Mit `output: "export"` gibt es keinen Next-Server: eine Server- oder
// Edge-Config würde zwar nach .next/server/ gebaut, aber `out/` — und nur das liefert
// Cloudflare Pages aus — enthält davon nichts. Solche Dateien lagen hier schon einmal und
// waren toter Code; wer sie wieder anlegt, überwacht nichts. Erst wenn die Seite wieder
// serverseitig läuft, ergeben instrumentation.ts + sentry.server.config.ts Sinn.
export default withSentryConfig(nextConfig, {
  org: "hoherr",
  project: "nachhilfe-website",
  sourcemaps: { disable: true },
  // Kein Build-Metadaten-Versand des Sentry-Plugins an Sentry (öffentliche DE-Seite).
  telemetry: false,
});

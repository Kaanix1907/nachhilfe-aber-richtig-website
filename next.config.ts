import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        // Public-Assets ändern sich praktisch nie — lange cachen statt no-store.
        // HTML-Seiten bekommen bewusst KEINEN no-store mehr (bricht bfcache).
        source: "/:file*.(png|jpeg|jpg|webp|ico|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=2592000" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

// Sentry-Wrapper: injiziert SDK + App-Router-Instrumentation. Source-Map-Upload deaktiviert
// (kein SENTRY_AUTH_TOKEN in CI/Vercel → Build bleibt grün); für symbolisierte Stacktraces
// später Token setzen + sourcemaps.disable entfernen. Das Runtime-Monitoring läuft DSN-gated
// über die instrumentation*-Dateien, unabhängig von diesem Build-Wrapper.
export default withSentryConfig(nextConfig, {
  org: "hoherr",
  project: "nachhilfe-website",
  sourcemaps: { disable: true },
  // Kein Build-Metadaten-Versand des Sentry-Plugins an Sentry (öffentliche DE-Seite).
  telemetry: false,
});

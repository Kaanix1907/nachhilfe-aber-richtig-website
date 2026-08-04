import type { NextConfig } from "next";

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

export default nextConfig;

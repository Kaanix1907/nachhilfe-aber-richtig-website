import type { NextConfig } from "next";

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

export default nextConfig;

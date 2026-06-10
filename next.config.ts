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
    ];
  },
};

export default nextConfig;

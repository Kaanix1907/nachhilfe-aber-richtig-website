import type { MetadataRoute } from "next";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

// Pflicht bei output: "export" — sonst bricht der Build ab.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

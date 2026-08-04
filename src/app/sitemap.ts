import type { MetadataRoute } from "next";
import { ORTE, FAECHER } from "@/lib/seo-pages";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

// Pflicht bei output: "export" — sonst bricht der Build ab.
// lastModified friert damit auf den Build-Zeitpunkt ein, was fuer eine
// statische Seite genau richtig ist.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();

  // Impressum und Datenschutz stehen bewusst NICHT drin: beide tragen
  // robots: { index: false }. Eine Seite gleichzeitig auf "nicht indexieren"
  // zu setzen und in die Sitemap zu schreiben, sind zwei widerspruechliche
  // Anweisungen an denselben Crawler.
  return [
    { url: SITE_URL, lastModified: stand, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/bildung-und-teilhabe`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...ORTE.map((o) => ({
      url: `${SITE_URL}/nachhilfe/${o.slug}`,
      lastModified: stand,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...FAECHER.map((f) => ({
      url: `${SITE_URL}/nachhilfe/${f.slug}`,
      lastModified: stand,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

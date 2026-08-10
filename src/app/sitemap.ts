import type { MetadataRoute } from "next";
import { ORTE, FAECHER } from "@/lib/seo-pages";
import { ZAP_FAECHER } from "@/lib/zap-faecher";
import { RATGEBER } from "@/lib/ratgeber";
import { INHALT_STAND } from "@/lib/stand";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

// Pflicht bei output: "export" — sonst bricht der Build ab.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bis 2026-08-05 stand hier `new Date()`, also der Build-Zeitpunkt. Damit
  // trugen alle vierzehn Adressen dasselbe lastmod, und jeder Deploy — auch
  // einer, der nur eine Farbe aendert — meldete saemtliche Seiten als
  // aktualisiert. Ein Datum, das immer aktuell ist, ist kein Datum.
  // Jetzt dasselbe gepflegte Inhaltsdatum wie Seitenfuss und JSON-LD.
  const stand = new Date(INHALT_STAND);

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
    {
      url: `${SITE_URL}/zap-vorbereitung`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Sammelstelle der elf Orts- und Fachseiten. Hoehere Prioritaet als die
    // Einzelseiten, weil sie deren Einstieg ist.
    {
      url: `${SITE_URL}/nachhilfe`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Sammelstelle der Ratgeber-Ebene, wie /nachhilfe hoeher gewichtet als
    // ihre Unterseiten.
    {
      url: `${SITE_URL}/ratgeber`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/material`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.8,
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
    // Schulstufen: eigene Routen neben [slug], deshalb von Hand.
    ...["grundschule", "abiturvorbereitung"].map((s) => ({
      url: `${SITE_URL}/nachhilfe/${s}`,
      lastModified: stand,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ZAP_FAECHER.map((f) => ({
      url: `${SITE_URL}/zap-vorbereitung/${f.slug}`,
      lastModified: stand,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...RATGEBER.map((r) => ({
      url: `${SITE_URL}/ratgeber/${r.slug}`,
      lastModified: stand,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

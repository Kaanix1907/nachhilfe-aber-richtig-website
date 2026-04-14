import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/data";

const SITE_URL = "https://nachhilfe-aber-richtig.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nachhilfe, aber richtig! | Nachhilfe in Duisburg-Rheinhausen",
    template: "%s | Nachhilfe, aber richtig!",
  },
  description:
    "Professionelle Nachhilfe in Duisburg-Rheinhausen für Schüler ab Klasse 1 bis Abitur. Gruppen- & Einzelnachhilfe, Bildung & Teilhabe möglich. Jetzt kostenlose Probestunde buchen!",
  keywords: [
    "Nachhilfe Duisburg",
    "Nachhilfe Rheinhausen",
    "Nachhilfe Duisburg-Rheinhausen",
    "Nachhilfeinstitut Duisburg",
    "Einzelnachhilfe Duisburg",
    "Gruppennachhilfe Duisburg",
    "Bildung und Teilhabe Nachhilfe",
    "Bildung und Teilhabe Duisburg",
    "Nachhilfe Abitur Duisburg",
    "Online Nachhilfe Duisburg",
    "Nachhilfe Mathe Duisburg",
    "Nachhilfe Deutsch Duisburg",
    "Nachhilfe Englisch Duisburg",
    "kostenlose Nachhilfe Duisburg",
    "Nachhilfe Grundschule Duisburg",
    "Nachhilfe Moers",
    "Nachhilfe Homberg",
    "Probestunde Nachhilfe Duisburg",
    "Nachhilfe aber richtig",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "Nachhilfe, aber richtig! | Duisburg-Rheinhausen",
    description:
      "Professionelle Nachhilfe für Klasse 1 bis Abitur. Bildung & Teilhabe möglich — kostenlos für berechtigte Familien. Probestunde gratis!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nachhilfe, aber richtig! – Professionelle Nachhilfe in Duisburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nachhilfe, aber richtig! | Duisburg-Rheinhausen",
    description:
      "Professionelle Nachhilfe für Klasse 1 bis Abitur. Bildung & Teilhabe möglich — kostenlos für berechtigte Familien.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import { BioRhyme, Cabin } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/data";

const bioRhyme = BioRhyme({
  subsets: ["latin"],
  // 400 ist nirgends im Einsatz — alle font-heading-Stellen sind bold/extrabold
  weight: ["700", "800"],
  variable: "--font-biorhyme",
  display: "swap",
});

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cabin",
  display: "swap",
});

const SITE_URL = "https://nachhilfe-aber-richtig.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nachhilfe, aber richtig! | Nachhilfe in Duisburg-Rheinhausen",
    template: "%s | Nachhilfe, aber richtig!",
  },
  description:
    "Nachhilfe in Duisburg-Rheinhausen, Klasse 1 bis Abitur. Einzel- und Gruppenunterricht in allen Fächern, kostenlos über Bildung und Teilhabe möglich.",
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
  // Kein globales `alternates.canonical`: Next vererbt es an jede Unterseite,
  // die keines setzt. Impressum und Datenschutz zeigten dadurch auf die
  // Startseite — und jede neue Orts-/Fachseite haette sich selbst als Kopie
  // der Startseite ausgewiesen und waere nie gerankt worden. Jede Seite setzt
  // ihr Canonical selbst.
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
  verification: {
    google: "kLCggrg73BDCufBVV56CufQeyyJ2jjjR0v86Cp4JCGU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bioRhyme.variable} ${cabin.variable}`}>
      <body className="antialiased">
        {/* Erstes fokussierbares Element der Seite. Ohne ihn muss sich jeder,
            der mit der Tastatur navigiert, auf JEDER Seite erst durch die
            komplette Navigation tabben (WCAG 2.2 A, 2.4.1 Bypass Blocks).
            Unsichtbar, bis er den Fokus bekommt. Ziel ist das <main> jeder
            Seite, das dafuer id="inhalt" traegt. */}
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-xl focus:bg-white focus:text-dark focus:font-body focus:font-semibold focus:text-sm focus:shadow-xl focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-deep"
        >
          Zum Inhalt springen
        </a>
        {/* SimpleAnalytics — privacy-first, kein Cookie-Banner nötig */}
        <Script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}

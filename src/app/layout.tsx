import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/data";

export const metadata: Metadata = {
  title: `${BUSINESS.name} | Nachhilfe in Duisburg`,
  description:
    "Professionelle Nachhilfe in Duisburg-Rheinhausen für Schüler ab Klasse 1 bis Abitur. Kostenlose Probestunde buchen!",
  keywords: ["Nachhilfe", "Duisburg", "Rheinhausen", "Schüler", "Bildung"],
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

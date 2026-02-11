import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Schlüsseldienst Hamburg | 24/7 Schlüsselnotdienst | AJ Schlüsseldienst",
    template: "%s | AJ Schlüsseldienst Hamburg",
  },
  description: "Schlüsseldienst Hamburg ✓ 24/7 Schlüsselnotdienst ✓ In 20-30 Min. vor Ort ✓ Faire Festpreise ✓ Keine versteckten Kosten ✓ Türöffnung, Autoöffnung, Tresoröffnung ✓ 19 Jahre Erfahrung ☎ 040 18204419",
  keywords: "schlüsseldienst hamburg, schlüsselnotdienst, schlüsselnotdienst hamburg, türöffnung hamburg, schlüsseldienst auto öffnen, tresoröffnung hamburg, 24h schlüsseldienst, schlüsseldienst harburg, schlüsseldienst altona, schlüsseldienst wandsbek, schlüsseldienst barmbek, schlüsseldienst bergedorf, schlüsseldienst eimsbüttel, hamburg schlüsseldienst, schlüsseldienste hamburg",
  openGraph: {
    title: "Schlüsseldienst Hamburg | 24/7 Schlüsselnotdienst – Schnell & Fair",
    description: "Ihr zuverlässiger Schlüsseldienst in Hamburg. Schlüsselnotdienst 24/7 – in 20-30 Minuten vor Ort. Faire Festpreise. ☎ 040 18204419",
    type: "website",
    locale: "de_DE",
    siteName: "AJ Schlüsseldienst Hamburg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aj-schluesseldienst.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "A+J Schlüsseldienst Hamburg | 24/7 Notdienst | Schnell & Fair",
  description: "Ihr zuverlässiger Schlüsseldienst in Hamburg. 24/7 Notdienst, faire Festpreise, keine versteckten Kosten. Über 15 Jahre Erfahrung. Jetzt anrufen!",
  keywords: "Schlüsseldienst Hamburg, Türöffnung, Schloss austauschen, 24h Notdienst, Schlüsselnotdienst, Einbruchschutz",
  openGraph: {
    title: "A+J Schlüsseldienst Hamburg | 24/7 Notdienst",
    description: "Ihr zuverlässiger Schlüsseldienst in Hamburg. Schnell, fair und kompetent.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
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

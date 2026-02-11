import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung | AJ Schlüsseldienst Hamburg",
  description: "Datenschutzerklärung von AJ Schlüsseldienst Hamburg. Keine Cookies, keine Datensammlung. Datenschutzfreundliche Analyse mit Plausible.",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/datenschutz",
  },
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] pt-20 md:pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-300 text-lg">
              AJ Schlüsseldienst nimmt den Schutz Ihrer Daten ernst.
            </p>
          </div>
          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Keine Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  1. Keine Cookies – keine Datensammlung
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Wir verwenden keine Cookies und sammeln keine personenbezogenen Daten auf unserer Website.
                  </p>
                </div>
              </div>

              {/* Welche Dienste */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  2. Welche Dienste wir nutzen
                </h2>
                <div className="space-y-6">
                  {/* Bunny Fonts */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#83ebeb] rounded-full"></span>
                      Bunny Fonts
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Wir verwenden Schriftarten von Bunny.net, um die Seite schön darzustellen. Dabei werden keine personenbezogenen Daten von Ihnen gespeichert oder verfolgt.
                    </p>
                  </div>

                  {/* Plausible */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#83ebeb] rounded-full"></span>
                      Plausible Analytics
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Wir nutzen Plausible, ein datenschutzfreundliches Analyse-Tool. Es arbeitet ohne Cookies und speichert keine personenbezogenen Daten. Wir sehen nur anonyme Zahlen, z.&nbsp;B. wie oft die Seite besucht wurde.
                    </p>
                  </div>

                  {/* Elfsight */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#83ebeb] rounded-full"></span>
                      Elfsight Widgets (mit Zustimmung)
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Wenn Sie ein interaktives Element (z.&nbsp;B. einen WhatsApp-Button) sehen, kommt das von Elfsight. Dieses wird nur geladen, wenn Sie vorher zustimmen. Erst dann kann Elfsight Daten verarbeiten (z.&nbsp;B. Ihre IP-Adresse). Ohne Ihre Zustimmung passiert nichts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-[#83ebeb] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

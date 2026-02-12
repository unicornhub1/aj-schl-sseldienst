import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Link from "next/link";

export const metadata = {
  title: "Impressum",
  description: "Impressum von AJ Schlüsseldienst Hamburg. Angaben gemäß § 5 TMG. Betreiber: Herr K. Kassim, Winterhuder Weg 59, 22085 Hamburg.",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/impressum",
  },
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] pt-20 md:pt-28 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Impressum
            </h1>
            <p className="text-gray-300 text-lg">
              Angaben gemäß § 5 TMG
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
              {/* Betreiber */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  Betreiber der Website
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Herr K. Kassim</strong><br />
                    Winterhuder Weg 59<br />
                    22085 Hamburg<br />
                    Deutschland
                  </p>
                </div>
              </div>

              {/* Kontakt */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  Kontakt
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                  <p className="text-gray-700 flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+494018204419" className="hover:text-[#83ebeb] transition-colors">040 18204419</a>
                  </p>
                  <p className="text-gray-700 flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@aj-schluesseldienst.de" className="hover:text-[#83ebeb] transition-colors">info@aj-schluesseldienst.de</a>
                  </p>
                </div>
              </div>

              {/* Steuerdaten */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  Steuerliche Angaben
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Steuernummer:</strong> 43/114/04615<br />
                    <strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong> 53 677 041 825
                  </p>
                </div>
              </div>

              {/* Verantwortlich */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Kassim Kassim</strong><br />
                    Winterhuder Weg 59<br />
                    22085 Hamburg<br />
                    Deutschland
                  </p>
                </div>
              </div>

              {/* Streitbeilegung */}
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  Online-Streitbeilegung
                </h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#83ebeb] hover:underline font-medium"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p className="text-gray-700 mt-3">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
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

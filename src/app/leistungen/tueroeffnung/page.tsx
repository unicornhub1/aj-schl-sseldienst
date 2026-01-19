import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Image from "next/image";

export const metadata = {
  title: "Türöffnung Hamburg | 24/7 Schlüsseldienst | AJ Schlüsseldienst",
  description: "Ausgesperrt in Hamburg? Schnelle Türöffnung ohne Schäden. In 20-30 Min vor Ort. Faire Festpreise. 24/7 erreichbar. ☎ 040 18204419",
};

export default function Tueroeffnung() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - wie Startseite */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Professionelle <span className="text-[#83ebeb]">Türöffnung</span><br />
                  in Hamburg
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Ausgesperrt? Kein Problem! Wir öffnen Ihre Haus- oder Wohnungstür schnell, zuverlässig und ohne Schäden – zu fairen Festpreisen.
                </p>

                <a
                  href="tel:+494018204419"
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  040 18204419
                </a>
              </div>

              {/* Right - Notfall Card wie Startseite */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Emergency Badge */}
                <div className="flex items-center justify-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Notfall-Hotline</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-6">
                  Türöffnung Notdienst
                </h2>

                {/* 4 Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">In 20-30 Minuten vor Ort</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Türöffnung ohne Beschädigung</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Faire Festpreise - keine versteckten Kosten</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">19 Jahre Erfahrung</span>
                  </div>
                </div>

                {/* Call Button - Mobile only */}
                <a
                  href="tel:+494018204419"
                  className="flex items-center justify-center gap-3 w-full bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold py-5 rounded-xl text-xl transition-all duration-300 hover:scale-[1.02] shadow-lg md:hidden"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  040 18204419
                </a>

                {/* Desktop - Arrow pointing to floating button */}
                <div className="hidden md:flex items-center justify-center gap-3 text-[#1a1a1a] font-medium">
                  <span>Jetzt anrufen</span>
                  <svg className="w-8 h-8 text-amber-500 animate-bounce-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <p className="text-gray-500 text-sm text-center mt-4">
                  Direkt zum Techniker - kein Callcenter
                </p>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Wann brauchen Sie Türöffnung Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/tuerschloss.png"
                  alt="Türöffnung Hamburg"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Wann brauchen Sie eine <span className="text-[#83ebeb]">Türöffnung?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Schlüssel vergessen oder verloren</h3>
                      <p className="text-gray-600">Kommt vor – wir helfen schnell und unkompliziert.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Schlüssel im Schloss abgebrochen</h3>
                      <p className="text-gray-600">Wir entfernen den Schlüsselrest und öffnen die Tür.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Tür zugefallen (Schnapper)</h3>
                      <p className="text-gray-600">In Sekunden geöffnet – ohne Schaden.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Defektes Schloss</h3>
                      <p className="text-gray-600">Wir öffnen und reparieren oder tauschen das Schloss.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Notfall-Hotline</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ausgesperrt? Wir sind sofort da!
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Rufen Sie uns direkt an – wir sind in 20-30 Minuten bei Ihnen!
                </p>

                <a
                  href="tel:+494018204419"
                  className="inline-flex items-center gap-4 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-10 py-5 rounded-full text-2xl md:text-3xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  040 18204419
                </a>
              </div>

              {/* Image */}
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/images/ajplus800.jpg"
                  alt="Jetzt AJ Schlüsseldienst anrufen"
                  width={400}
                  height={400}
                  className="w-auto h-auto max-h-[350px] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* So arbeiten wir Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                So funktioniert die <span className="text-[#83ebeb]">Türöffnung</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                In 3 einfachen Schritten sind Sie wieder in Ihrer Wohnung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Schritt 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Anruf</h3>
                <p className="text-gray-600">
                  Rufen Sie uns an unter 040 18204419. Wir sind 24/7 erreichbar.
                </p>
              </div>

              {/* Schritt 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Ankunft</h3>
                <p className="text-gray-600">
                  Unser Techniker ist in 20-30 Minuten bei Ihnen vor Ort.
                </p>
              </div>

              {/* Schritt 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Türöffnung</h3>
                <p className="text-gray-600">
                  Professionelle Öffnung ohne Schäden – Sie sind wieder drin!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ihr Schlüsselprofi <span className="text-[#83ebeb]">für Türöffnungen</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Über 19 Jahre Erfahrung. Faire Preise. Zufriedene Kunden.
            </p>
            <a
              href="tel:+494018204419"
              className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              040 18204419
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

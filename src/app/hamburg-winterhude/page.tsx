import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import GoogleRating from "@/components/GoogleRating";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export const metadata = {
  title: "Schlüsseldienst Winterhude 24/7",
  description:
    "Schlüsseldienst Hamburg-Winterhude – Standort direkt am Winterhuder Weg, in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/hamburg-winterhude",
  },
};

export default function HamburgWinterhude() {
  return (
    <>
      <LocalBusinessSchema area="Hamburg-Winterhude" url="https://aj-schluesseldienst.de/hamburg-winterhude" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] pt-20 md:pt-28 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="mb-5">
                  <GoogleRating variant="dark" />
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Schlüsseldienst<br />
                  <span className="text-[#83ebeb]">Hamburg-Winterhude</span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Unser Standort liegt am Winterhuder Weg – mitten in Ihrem Viertel. Dadurch sind wir
                  in Winterhude besonders schnell bei Ihnen: Türöffnung ohne Schäden, faire
                  Festpreise, rund um die Uhr.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+494018204419"
                    className="inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    040 18204419
                  </a>

                  <a
                    href="https://wa.me/4917666699227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Right - Notfall Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="flex items-center justify-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Notfall-Hotline</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-6">
                  Notdienst Winterhude
                </h2>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Standort im Viertel – oft in 15-20 Min da</span>
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

                {/* Mobile: Pfeil nach unten */}
                <div className="lg:hidden flex flex-col items-center gap-2 mt-2">
                  <span className="text-gray-500 font-medium text-sm">Jetzt Kontakt aufnehmen</span>
                  <svg className="w-8 h-8 text-red-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Desktop: Pfeil nach links */}
                <div className="hidden lg:flex items-center justify-center gap-3 mt-2">
                  <svg className="w-8 h-8 text-red-500 animate-[bounce-left_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span className="text-gray-500 font-medium text-sm">Jetzt Kontakt aufnehmen</span>
                </div>

                <p className="text-gray-500 text-sm text-center mt-4">
                  Direkt zum Techniker - kein Callcenter
                </p>
              </div>
            </div>
          </div>

          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Einsatzgebiet Winterhude */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/experience.png"
                  alt="Schlüsseldienst Hamburg-Winterhude"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Schnell vor Ort in <span className="text-[#83ebeb]">ganz Winterhude</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Vom Mühlenkamp über den Winterhuder Marktplatz bis zur Jarrestadt und dem Stadtpark –
                  unser Standort am Winterhuder Weg liegt direkt nebenan. So sind wir oft schon in
                  15-20 Minuten bei Ihnen, rund um die Uhr.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Mühlenkamp &amp; Winterhuder Marktplatz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Sierichstraße &amp; Leinpfad an der Alster</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Jarrestadt &amp; Goldbekplatz</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Stadtpark, Borgweg &amp; Alsterdorfer Straße</span>
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
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Notfall-Hotline</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ausgesperrt in Winterhude?
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Rufen Sie uns direkt an – wir sind in der Regel in 15-30 Minuten bei Ihnen!
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

              <div className="hidden lg:flex justify-center">
                <Image
                  src="/images/ajplus800.jpg"
                  alt="Schlüsseldienst Winterhude anrufen"
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

        {/* Leistungen in Winterhude (verlinkt) */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                Unsere Leistungen in <span className="text-[#83ebeb]">Winterhude</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Rund ums Schloss – wir sind für Sie da.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/leistungen/tueroeffnung" className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#5fd4d4] transition-colors">Türöffnung</h3>
                <p className="text-gray-600">Ausgesperrt? Wir öffnen Ihre Tür schnell und ohne Schäden.</p>
              </Link>

              <Link href="/leistungen/auto-oeffnung" className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#5fd4d4] transition-colors">Autoöffnung</h3>
                <p className="text-gray-600">Schlüssel im Auto? Wir öffnen Ihr Fahrzeug ohne Schaden.</p>
              </Link>

              <Link href="/leistungen/tresoroeffnung" className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#5fd4d4] transition-colors">Tresoröffnung</h3>
                <p className="text-gray-600">Code vergessen? Wir öffnen Ihren Tresor fachgerecht.</p>
              </Link>

              <div className="group p-6 bg-gray-50 rounded-2xl border border-transparent">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Schließzylinder</h3>
                <p className="text-gray-600">Zylinder defekt? Wir tauschen ihn schnell und professionell aus.</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-2xl border border-transparent">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Einbruchschutz</h3>
                <p className="text-gray-600">Panzerriegel, Zusatzschlösser und mehr für Ihr Zuhause.</p>
              </div>

              <Link href="/schluesselnotdienst" className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#5fd4d4] transition-colors">24/7 Notdienst</h3>
                <p className="text-gray-600">Rund um die Uhr erreichbar – auch nachts und an Feiertagen.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          heading={<>Häufige Fragen zum <span className="text-[#83ebeb]">Schlüsseldienst Winterhude</span></>}
          subtitle="Alles, was Sie über unseren Schlüsseldienst in Hamburg-Winterhude wissen müssen."
          items={[
            {
              question: "Was kostet ein Schlüsseldienst in Winterhude?",
              answer:
                "Bei AJ Schlüsseldienst arbeiten wir mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Die Kosten hängen von der Art der Türöffnung ab. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Winterhude.",
            },
            {
              question: "Wie schnell ist der Schlüsseldienst in Winterhude vor Ort?",
              answer:
                "Besonders schnell: Unser Standort liegt direkt am Winterhuder Weg. Dadurch sind wir in Winterhude – ob Mühlenkamp, Sierichstraße, Jarrestadt oder am Stadtpark – oft schon in 15-20 Minuten bei Ihnen, rund um die Uhr.",
            },
            {
              question: "Bieten Sie Schlüsselnotdienst in Winterhude auch nachts an?",
              answer:
                "Ja, unser Schlüsselnotdienst in Winterhude ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen. Rufen Sie einfach an und unser Techniker kommt sofort.",
            },
            {
              question: "Welche Leistungen bieten Sie in Winterhude an?",
              answer:
                "Wir bieten in Hamburg-Winterhude das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden. Alles aus einer Hand und zu fairen Festpreisen.",
            },
            {
              question: "Wird die Tür bei der Türöffnung in Winterhude beschädigt?",
              answer:
                "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und professionellem Spezialwerkzeug garantieren wir eine schonende Türöffnung in Winterhude ohne Beschädigung am Schloss oder Türrahmen.",
            },
          ]}
        />

        {/* Final CTA */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ihr Schlüsselprofi <span className="text-[#83ebeb]">in Winterhude</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Standort direkt am Winterhuder Weg. Über 19 Jahre Erfahrung. Faire Preise.
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

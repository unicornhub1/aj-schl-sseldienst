import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import GoogleRating from "@/components/GoogleRating";

export const metadata = {
  title: "Schlüsseldienst Altona | 24/7 Notdienst Hamburg | AJ Schlüsseldienst",
  description: "Schlüsseldienst in Hamburg-Altona. In 20-30 Min vor Ort. Faire Festpreise, keine versteckten Kosten. 24/7 Notdienst. ☎ 040 18204419",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/hamburg-altona",
  },
};

export default function HamburgAltona() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - wie Startseite */}
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
                  <span className="text-[#83ebeb]">Hamburg-Altona</span>
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Ihr zuverlässiger Schlüsseldienst in Altona, Ottensen, Bahrenfeld und Umgebung. Schnell vor Ort, faire Preise, keine versteckten Kosten.
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
                  Notdienst Altona
                </h2>

                {/* 4 Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">In 20-30 Minuten in Altona</span>
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

        {/* Einsatzgebiet Altona Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/experience.png"
                  alt="Schlüsseldienst Hamburg-Altona"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Schnell vor Ort in <span className="text-[#83ebeb]">ganz Altona</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Ob Altona-Altstadt, Ottensen, Bahrenfeld, Othmarschen oder Groß Flottbek –
                  wir sind in 20-30 Minuten bei Ihnen. Unser Techniker kennt Altona und ist
                  rund um die Uhr für Sie im Einsatz.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Altona-Altstadt & Altona-Nord</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Ottensen & Bahrenfeld</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Othmarschen & Groß Flottbek</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Lurup & Osdorf</span>
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
                  Ausgesperrt in Altona?
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
                  alt="Schlüsseldienst Altona anrufen"
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

        {/* Leistungen in Altona */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                Unsere Leistungen in <span className="text-[#83ebeb]">Altona</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Rund ums Schloss – wir sind für Sie da.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Türöffnung */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Türöffnung</h3>
                <p className="text-gray-600">Ausgesperrt? Wir öffnen Ihre Tür schnell und ohne Schäden.</p>
              </div>

              {/* Autoöffnung */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Autoöffnung</h3>
                <p className="text-gray-600">Schlüssel im Auto? Wir öffnen Ihr Fahrzeug ohne Schaden.</p>
              </div>

              {/* Schließzylinder */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Schließzylinder</h3>
                <p className="text-gray-600">Zylinder defekt? Wir tauschen ihn schnell und professionell aus.</p>
              </div>

              {/* Einbruchschutz */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Einbruchschutz</h3>
                <p className="text-gray-600">Panzerriegel, Zusatzschlösser und mehr für Ihr Zuhause.</p>
              </div>

              {/* Tresoröffnung */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Tresoröffnung</h3>
                <p className="text-gray-600">Code vergessen? Wir öffnen Ihren Tresor fachgerecht.</p>
              </div>

              {/* 24/7 Service */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">24/7 Notdienst</h3>
                <p className="text-gray-600">Rund um die Uhr erreichbar – auch nachts und an Feiertagen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          heading={<>Häufige Fragen zum <span className="text-[#83ebeb]">Schlüsseldienst Altona</span></>}
          subtitle="Alles, was Sie über unseren Schlüsseldienst in Hamburg-Altona wissen müssen."
          items={[
            {
              question: "Was kostet ein Schlüsseldienst in Altona?",
              answer: "Bei AJ Schlüsseldienst arbeiten wir mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Die Kosten hängen von der Art der Türöffnung ab. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Altona.",
            },
            {
              question: "Wie schnell ist der Schlüsseldienst in Altona vor Ort?",
              answer: "Unser Techniker ist in der Regel innerhalb von 20-30 Minuten bei Ihnen in Altona. Egal ob Altona-Altstadt, Ottensen, Bahrenfeld, Othmarschen oder Groß Flottbek – wir kennen die schnellsten Wege zu Ihnen.",
            },
            {
              question: "Bieten Sie auch Schlüsselnotdienst in Altona nachts an?",
              answer: "Ja, unser Schlüsselnotdienst in Altona ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen. Rufen Sie einfach an und unser Techniker kommt sofort.",
            },
            {
              question: "Welche Leistungen bieten Sie in Altona an?",
              answer: "Wir bieten in Hamburg-Altona das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden. Alles aus einer Hand und zu fairen Festpreisen.",
            },
            {
              question: "Wird die Tür bei der Türöffnung in Altona beschädigt?",
              answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und professionellem Spezialwerkzeug garantieren wir eine schonende Türöffnung in Altona ohne Beschädigung am Schloss oder Türrahmen.",
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
              Ihr Schlüsselprofi <span className="text-[#83ebeb]">in Altona</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Über 19 Jahre Erfahrung. Faire Preise. Zufriedene Kunden in ganz Altona.
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

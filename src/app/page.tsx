import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section id="start" className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Ihr <span className="text-[#83ebeb]">Zuverlässiger</span><br />
                  Schlüsseldienst<br />
                  in Hamburg
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Schnelle und professionelle Hilfe bei Ausgesperrt-Situationen, Türöffnungen, und allen Schloss-Problemen – fair, transparent und zu jeder Zeit.
                </p>

                <a
                  href="tel:+494018204419"
                  className="inline-flex items-center justify-center gap-3 bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 animate-pulse-glow"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  040 18204419
                </a>
              </div>

              {/* Right - Notfall Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Emergency Badge */}
                <div className="flex items-center justify-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Notfall-Hotline</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-6">
                  Notfall-Schlüsseldienst
                </h2>

                {/* 4 Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Sofort Hilfe bei Ausgesperrt-Situationen</span>
                  </div>
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
                    <span className="text-gray-700">Faire Festpreise - keine versteckten Kosten</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">24/7 erreichbar - auch Feiertags</span>
                  </div>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+494018204419"
                  className="flex items-center justify-center gap-3 w-full bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold py-5 rounded-xl text-xl transition-all duration-300 hover:scale-[1.02] animate-pulse-glow"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  040 18204419
                </a>

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

        {/* 19 Jahre Erfahrung Section */}
        <section id="ueber-uns" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/experience.png"
                  alt="AJ Schlüsseldienst Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                  Über <span className="text-[#83ebeb]">19 Jahre</span> Berufserfahrung
                </h2>
                <p className="text-gray-600 text-lg">
                  Bei AJ Schlüsseldienst legen wir Wert auf persönlichen Service. Sie sprechen direkt mit unserem erfahrenen Techniker, der Ihnen mit Rat und Tat zur Seite steht.
                </p>
              </div>
            </div>

            {/* Features Grid - 2 columns on desktop for better layout with 5 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-2 transition-colors">Professioneller Techniker</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">Unsere erfahrenen und gut geschulten Techniker bieten Ihnen einen sicheren und zuverlässigen Service, der höchste Qualitätsstandards erfüllt.</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-2 transition-colors">Faire & transparente Preise</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">Keine versteckten Kosten! Wir bieten Ihnen einen klaren, verständlichen Kostenvoranschlag, bevor wir mit der Arbeit beginnen.</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-2 transition-colors">24/7 Notfallservice</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">Egal ob Tag oder Nacht, unser Schlüsseldienst ist immer für Sie da, um Ihnen aus jeder misslichen Lage zu helfen.</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-2 transition-colors">Schnelle Türöffnungen ohne Beschädigung</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors">Wir öffnen Ihre Türen schnell und schonend, ohne das Schloss oder den Rahmen zu beschädigen.</p>
              </div>

              <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 md:col-span-2 md:max-w-xl md:mx-auto">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-white mb-2 transition-colors text-center md:text-left">Keine Weitervermittler!</h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors text-center md:text-left">Sie erreichen direkt den Techniker – ohne Callcenter, ohne Zusatzgebühren. Schnell, fair und transparent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Notfall-Hotline Section - Yellow CTA */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-br from-amber-400 to-amber-500 overflow-hidden">
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

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Ausgesperrt oder ein anderer Notfall?
                </h2>

                <p className="text-[#1a1a1a]/80 text-lg mb-8">
                  Rufen Sie uns direkt an – wir sind in 20-30 Minuten bei Ihnen!
                </p>

                <a
                  href="tel:+494018204419"
                  className="inline-flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold px-10 py-5 rounded-full text-2xl md:text-3xl transition-all duration-300 hover:scale-105 shadow-lg"
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

        {/* Leistungen Section */}
        <section id="leistungen" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                Unsere <span className="text-[#83ebeb]">Leistungen</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Rund ums Schloss - wir sind zuverlässig für Sie da.
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
                <p className="text-gray-600">Ausgesperrt? Wir öffnen Ihre Haus- oder Wohnungstür schnell, zuverlässig und ohne Schäden.</p>
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
                <p className="text-gray-600">Auto zu und Schlüssel drin? Wir öffnen Ihr Fahrzeug schnell und ohne Schaden.</p>
              </div>

              {/* Tresoröffnung */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Tresoröffnung</h3>
                <p className="text-gray-600">Sie kommen nicht mehr an Ihren Tresor? Wir öffnen ihn fachgerecht und sicher.</p>
              </div>

              {/* Schließzylinder Montage */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Schließzylinder Montage</h3>
                <p className="text-gray-600">Schließzylinder kaputt? Wir tauschen ihn aus.</p>
              </div>

              {/* Einsteckschloss Montage */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Einsteckschloss Montage</h3>
                <p className="text-gray-600">Türschloss kaputt? Wir tauschen es schnell und ordentlich aus.</p>
              </div>

              {/* Schließanlagen */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Montage & Konfiguration von Schließanlagen</h3>
                <p className="text-gray-600">Wir kümmern uns um Einbau und Einstellung Ihrer Schließanlage – schnell und professionell.</p>
              </div>

              {/* Einbruchschaden Reparatur */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Reparatur von Einbruchschäden</h3>
                <p className="text-gray-600">Tür oder Fenster nach Einbruch beschädigt? Wir reparieren schnell – rund um die Uhr.</p>
              </div>

              {/* Einbruchschutz */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Moderner & effektiver Einbruchschutz</h3>
                <p className="text-gray-600">Wir bauen Zusatzschlösser, Panzerriegel, Sicherheitsbeschläge und mehr ein – für besseren Schutz zu Hause.</p>
              </div>

              {/* Sicherheitsberatung */}
              <div className="group p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#83ebeb]">
                <div className="w-14 h-14 bg-[#83ebeb] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Sicherheitsberatung</h3>
                <p className="text-gray-600">Wie schütze ich mein Zuhause? Wir beraten Sie gern zum Einbruchschutz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Kostenlose Beratung Section - Yellow CTA */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-br from-amber-400 to-amber-500 overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Kostenlose <span className="text-[#1a1a1a]">Beratung</span>
            </h2>

            <p className="text-[#1a1a1a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Sie möchten Ihr Zuhause besser schützen? Lassen Sie sich von uns zum Thema Einbruchschutz beraten – kostenlos und unverbindlich!
            </p>

            <a
              href="tel:+494018204419"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              040 18204419
            </a>
          </div>

          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Anruf genügt - Schloss wechseln Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                Anruf <span className="text-[#83ebeb]">genügt!</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Türschloss wechseln */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/tuerschloss.png"
                    alt="Türschloss wechseln"
                    fill
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Türschloss wechseln?</h3>
                  <p className="text-gray-600 text-sm">
                    Wenn Sie Ihr Türschloss austauschen möchten, genügt ein Anruf und wir sind innerhalb kurzer Zeit vor Ort, um Ihr Türschloss fachgerecht auswechseln. Noch ehe die Arbeit aufgenommen wird, nennt Ihnen der Mitarbeiter alle anfallenden Kosten und wird erst anschließend ein neues Türschloss einbauen. Wir haben immer eine große Auswahl an hochwertigen Schlössern dabei.
                  </p>
                </div>
              </div>

              {/* Schloss austauschen */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/schloss.png"
                    alt="Schloss austauschen"
                    fill
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Schloss austauschen?</h3>
                  <p className="text-gray-600 text-sm">
                    Bei einer Beschädigung oder nach einem Einbruch ist es unverzichtbar, dass Sie schnellstmöglich das Schloss austauschen. Unser Schlüsselnotdienst übernimmt diese Arbeit gerne für Sie und wird fachgerecht das Schloss wechseln. Auch hochwertige Verriegelungen werden von uns repariert oder ausgetauscht.
                  </p>
                </div>
              </div>

              {/* Schließzylinder wechseln */}
              <div className="group relative bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/zylinder.png"
                    alt="Schließzylinder wechseln"
                    fill
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Schließzylinder wechseln?</h3>
                  <p className="text-gray-600 text-sm">
                    Wenn Sie den Schließzylinder austauschen möchten, ist der Schlüsselladen ebenfalls der richtige Ansprechpartner. Zum Festpreis wird der Schließzylinder gewechselt. Vorab teilen wir Ihnen transparent alle Kosten mit. Wir sind zum vereinbarten Termin bei Ihnen und werden den Schließzylinder der Haustür fachgerecht wechseln.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faire Festpreise Section - Yellow CTA */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-br from-amber-400 to-amber-500 overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Faire <span className="text-[#1a1a1a]">Festpreise</span>
            </h2>

            <p className="text-[#1a1a1a]/80 text-lg mb-8 max-w-2xl mx-auto">
              Schloss oder Zylinder wechseln? Wir nennen Ihnen alle Kosten vorab – transparent und ohne versteckte Gebühren!
            </p>

            <a
              href="tel:+494018204419"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              040 18204419
            </a>
          </div>

          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Kundenbewertungen Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                Was unsere <span className="text-[#83ebeb]">Kunden</span> über uns sagen
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-[#1a1a1a]">5.0</span>
                  <span className="text-gray-500">(1.065 Bewertungen)</span>
                </div>
                <Image
                  src="/images/focusmedia.png"
                  alt="Focus Media Partner 2025"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Vertrauen Sie nicht nur unseren Worten – hören Sie, was unsere Kunden über ihre Erfahrungen mit AJ Schlüsseldienst berichten.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bewertung 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  &quot;Schneller und zuverlässiger Service.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">
                    B
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">Bra Okyei</p>
                    <p className="text-gray-500 text-xs">vor 14 Tagen bei Google</p>
                  </div>
                </div>
              </div>

              {/* Bewertung 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  &quot;Hallo, mir hat dieser Schlüsseldienst sehr gefallen. Sie waren sehr freundlich, hilfsbereit und in kurzer Zeit schon da. Würde ich jedem weiterempfehlen! Vielen Dank!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">
                    H
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">Hava Seidl</p>
                    <p className="text-gray-500 text-xs">vor 15 Tagen bei Google</p>
                  </div>
                </div>
              </div>

              {/* Bewertung 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  &quot;In 10 min da gewesen hat echt mein Tag gerettet bester Mann&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">
                    L
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">Lennox Clevé</p>
                    <p className="text-gray-500 text-xs">vor 15 Tagen bei Google</p>
                  </div>
                </div>
              </div>

              {/* Bewertung 4 */}
              <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm">
                  &quot;5 Sterne Top Service! Super zufrieden, freundlich, schnell und professionell!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#83ebeb] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold">
                    V
                  </div>
                  <div>
                    <p className="font-medium text-[#1a1a1a]">Vanessa</p>
                    <p className="text-gray-500 text-xs">vor 16 Tagen bei Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ihr Schlüsselprofi vor Ort - Final CTA Yellow */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-amber-400 to-amber-500 overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Ihr Schlüsselprofi <span className="text-[#1a1a1a]">vor Ort</span>
            </h2>
            <p className="text-[#1a1a1a]/80 text-lg mb-8">
              Überzeugt von unseren Kundenbewertungen? Kontaktieren Sie uns jetzt und erleben Sie selbst unseren zuverlässigen Service!
            </p>
            <a
              href="tel:+494018204419"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
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

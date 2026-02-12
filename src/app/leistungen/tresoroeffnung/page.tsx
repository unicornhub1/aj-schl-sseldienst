import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import GoogleRating from "@/components/GoogleRating";

export const metadata = {
  title: "Tresoröffnung Hamburg | Tresor öffnen lassen | AJ Schlüsseldienst",
  description: "Professionelle Tresoröffnung in Hamburg. Kombination vergessen? Schlüssel verloren? Tresor Notöffnung 24/7. Faire Festpreise. ☎ 040 18204419",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/leistungen/tresoroeffnung",
  },
};

export default function Tresoroeffnung() {
  return (
    <>
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
                  Professionelle <span className="text-[#83ebeb]">Tresoröffnung</span><br />
                  in Hamburg
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                  Tresor lässt sich nicht öffnen? Kombination vergessen oder Schlüssel verloren? Wir öffnen Ihren Safe schnell, fachgerecht und wenn möglich zerstörungsfrei – zu fairen Festpreisen.
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
                {/* Emergency Badge */}
                <div className="flex items-center justify-center gap-2 bg-red-600 rounded-full px-4 py-2 mb-6 w-fit mx-auto">
                  <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                  <span className="text-white font-medium">24/7 Tresor-Notdienst</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-6">
                  Tresor Notöffnung Hamburg
                </h2>

                {/* 4 Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Alle Tresortypen und Hersteller</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                    <svg className="w-5 h-5 text-[#83ebeb] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Zerstörungsfreie Öffnung wenn möglich</span>
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

                {/* Mobile: Roter Pfeil nach unten zu den CTAs */}
                <div className="lg:hidden flex flex-col items-center gap-2 mt-2">
                  <span className="text-gray-500 font-medium text-sm">Jetzt Kontakt aufnehmen</span>
                  <svg className="w-8 h-8 text-red-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Desktop: Roter Pfeil nach links zu den CTAs */}
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

          {/* Wave Divider */}
          <div className="wave-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#ffffff">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Wann brauchen Sie eine Tresoröffnung Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/experience.png"
                  alt="Tresoröffnung Hamburg - Professionelle Safe Öffnung"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Wann brauchen Sie eine <span className="text-[#83ebeb]">Tresoröffnung?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Kombination vergessen</h3>
                      <p className="text-gray-600">Zahlenkombination nicht mehr bekannt? Wir öffnen Ihren Tresor fachgerecht.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Tresorschlüssel verloren</h3>
                      <p className="text-gray-600">Schlüssel weg? Wir können Ihr Tresorschloss öffnen und einen neuen Schlüssel anfertigen.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Schloss defekt oder blockiert</h3>
                      <p className="text-gray-600">Mechanik klemmt oder Elektronik ausgefallen? Wir reparieren oder tauschen das Schloss.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Erbschafts-Tresor öffnen</h3>
                      <p className="text-gray-600">Geerbten Tresor ohne Zugangsdaten? Wir öffnen ihn diskret und professionell.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Firmentresor & Wertschutzschrank</h3>
                      <p className="text-gray-600">Auch gewerbliche Tresore und Wertschutzschränke öffnen wir zuverlässig.</p>
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
                  <span className="text-white font-medium">24/7 Tresor-Notdienst</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Tresor öffnen lassen? Wir helfen sofort!
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp – wir beraten Sie kostenlos und unverbindlich zur Tresoröffnung in Hamburg.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="tel:+494018204419"
                    className="inline-flex items-center gap-4 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-10 py-5 rounded-full text-2xl md:text-3xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    040 18204419
                  </a>

                  <a
                    href="https://wa.me/4917666699227"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="hidden lg:flex justify-center">
                <Image
                  src="/images/ajplus800.jpg"
                  alt="AJ Schlüsseldienst - Tresoröffnung Hamburg"
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

        {/* So funktioniert die Tresoröffnung Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                So funktioniert die <span className="text-[#83ebeb]">Tresoröffnung</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                In 3 einfachen Schritten öffnen wir Ihren Tresor professionell und sicher.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Schritt 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Kontakt aufnehmen</h3>
                <p className="text-gray-600">
                  Rufen Sie uns an unter 040 18204419 oder schreiben Sie per WhatsApp. Beschreiben Sie Ihren Tresor und das Problem.
                </p>
              </div>

              {/* Schritt 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Analyse & Angebot</h3>
                <p className="text-gray-600">
                  Wir analysieren den Tresortyp und die beste Öffnungsmethode. Sie erhalten einen transparenten Festpreis.
                </p>
              </div>

              {/* Schritt 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Safe öffnen</h3>
                <p className="text-gray-600">
                  Professionelle Tresoröffnung vor Ort – wenn möglich zerstörungsfrei. Auf Wunsch mit neuem Schloss.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          heading={<>Häufige Fragen zur <span className="text-[#83ebeb]">Tresoröffnung</span></>}
          subtitle="Alles was Sie über unsere Tresoröffnung in Hamburg wissen müssen."
          items={[
            {
              question: "Was kostet eine Tresoröffnung in Hamburg?",
              answer: "Die Kosten einer Tresoröffnung hängen vom Tresortyp, der Sicherheitsstufe und der benötigten Öffnungsmethode ab. Einfache Tresore können bereits ab ca. 150 EUR geöffnet werden. Hochsicherheitstresore erfordern mehr Aufwand. Wir nennen Ihnen vorab einen verbindlichen Festpreis – ohne versteckte Kosten.",
            },
            {
              question: "Welche Methoden nutzen Sie bei der Tresoröffnung?",
              answer: "Wir setzen auf schonende Verfahren: Manipulation des Schlosses, Schloss-Picking, Dekodierung von Zahlenschlössern oder elektronische Überbrückung. Nur wenn keine zerstörungsfreie Methode möglich ist, greifen wir auf Bohr- oder Schneidtechniken zurück. Das Tresorschloss kann anschließend erneuert werden.",
            },
            {
              question: "Welche Tresortypen können Sie öffnen?",
              answer: "Wir öffnen alle gängigen Tresortypen: Möbeltresore, Wandtresore, Standtresore, Wertschutzschränke, Dokumententresore, Datensicherungsschränke und Firmentresore. Egal ob mit Schlüssel, Zahlenkombination oder elektronischem Schloss – wir haben die Erfahrung und das Werkzeug.",
            },
            {
              question: "Kann der Tresor nach der Öffnung weiter genutzt werden?",
              answer: "Bei einer zerstörungsfreien Tresoröffnung kann der Safe in der Regel sofort weiter genutzt werden. Wir können das Schloss neu einstellen oder ein neues Tresorschloss einbauen. Bei einer destruktiven Öffnung beraten wir Sie gerne zu Reparatur oder Ersatz.",
            },
            {
              question: "Bieten Sie Tresoröffnung auch am Wochenende und nachts an?",
              answer: "Ja, unser Tresor-Notdienst in Hamburg ist 24 Stunden am Tag, 7 Tage die Woche erreichbar. Ob Werktag, Wochenende oder Feiertag – rufen Sie uns an und wir kümmern uns um Ihre Tresor Notöffnung.",
            },
          ]}
        />

        {/* Final CTA */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
          <div className="wave-divider-top">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="#f9fafb">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.12,118.92,114.23,86.14,172.83,79,246.12,69.46,265.08,67.9,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ihr Experte für <span className="text-[#83ebeb]">Tresoröffnung in Hamburg</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Über 19 Jahre Erfahrung. Alle Tresortypen. Faire Festpreise. Diskret und zuverlässig.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+494018204419"
                className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                040 18204419
              </a>

              <a
                href="https://wa.me/4917666699227"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}

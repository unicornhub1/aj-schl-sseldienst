import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import GoogleRating from "@/components/GoogleRating";

export const metadata = {
  title: "Auto öffnen Hamburg | Schlüsseldienst Auto öffnen | AJ Schlüsseldienst",
  description: "Auto zugefallen? Schlüssel im Auto eingeschlossen? Professionelle Autoöffnung in Hamburg ohne Schäden. 24/7 Autoschlüssel Notdienst. Faire Festpreise. ☎ 040 18204419",
  alternates: {
    canonical: "https://aj-schluesseldienst.de/leistungen/auto-oeffnung",
  },
};

export default function AutoOeffnung() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Professionell <span className="text-[#83ebeb]">Auto öffnen</span><br />
                  in Hamburg
                </h1>

                <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                  Schlüssel im Auto eingesperrt? Unser Auto Schlüsseldienst in Hamburg hilft sofort! Wir öffnen Ihr Fahrzeug schnell, schadensfrei und zu fairen Festpreisen – rund um die Uhr.
                </p>

                <div className="mb-6">
                  <GoogleRating variant="dark" />
                </div>

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
                    href="https://wa.me/494018204419"
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
                  <span className="text-white font-medium">24/7 Autoschlüssel Notdienst</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] text-center mb-6">
                  Autoöffnung Hamburg
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
                    <span className="text-gray-700">Auto öffnen ohne Schlüssel - schadensfrei</span>
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
                    <span className="text-gray-700">Alle Automarken und Modelle</span>
                  </div>
                </div>

                <a
                  href="tel:+494018204419"
                  className="flex items-center justify-center gap-3 w-full bg-amber-400 hover:bg-amber-500 text-[#1a1a1a] font-bold py-5 rounded-xl text-xl transition-all duration-300 hover:scale-[1.02] shadow-lg"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
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

        {/* Wann brauchen Sie eine Autoöffnung Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/experience.png"
                  alt="Autoöffnung Hamburg - Schlüsseldienst Auto öffnen"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Wann brauchen Sie eine <span className="text-[#83ebeb]">Autoöffnung?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Schlüssel im Auto eingeschlossen</h3>
                      <p className="text-gray-600">Tür zugefallen und der Schlüssel liegt noch im Fahrzeug? Wir öffnen Ihr Auto schnell und schadensfrei.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Autoschlüssel verloren</h3>
                      <p className="text-gray-600">Schlüssel weg? Unser Autoschlüssel Notdienst hilft Ihnen weiter und öffnet Ihr Fahrzeug vor Ort.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Schlüssel abgebrochen</h3>
                      <p className="text-gray-600">Schlüssel im Schloss abgebrochen? Wir entfernen den Rest und öffnen Ihr Auto ohne weitere Schäden.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#83ebeb] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">Elektronisches Schließsystem defekt</h3>
                      <p className="text-gray-600">Funkschlüssel reagiert nicht oder Batterie leer? Wir öffnen auch Fahrzeuge mit elektronischen Schließsystemen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dark CTA Section */}
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
                  <span className="text-white font-medium">24/7 Autoschlüssel Notdienst</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Auto aufschließen in Hamburg? Sofort-Hilfe!
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                  Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp – wir sind in 20-30 Minuten bei Ihrem Fahrzeug!
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
                    href="https://wa.me/494018204419"
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
                  alt="AJ Schlüsseldienst - Auto Schlüsseldienst Hamburg"
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

        {/* So funktioniert die Autoöffnung Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-4">
                So funktioniert die <span className="text-[#83ebeb]">Autoöffnung</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                In 3 einfachen Schritten ist Ihr Fahrzeug wieder offen – ganz ohne Schäden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Schritt 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">1</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Anruf oder WhatsApp</h3>
                <p className="text-gray-600">
                  Kontaktieren Sie uns unter 040 18204419 oder per WhatsApp. Schildern Sie kurz die Situation und Ihren Standort.
                </p>
              </div>

              {/* Schritt 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">2</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Schnelle Anfahrt</h3>
                <p className="text-gray-600">
                  Unser Techniker macht sich sofort auf den Weg und ist in 20-30 Minuten bei Ihrem Fahrzeug in Hamburg.
                </p>
              </div>

              {/* Schritt 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-[#83ebeb] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-[#1a1a1a]">3</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Schadensfreie Autoöffnung</h3>
                <p className="text-gray-600">
                  Mit Spezialwerkzeug öffnen wir Ihr Auto ohne Beschädigung – Sie können sofort weiterfahren!
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          heading={<>Häufige Fragen zur <span className="text-[#83ebeb]">Autoöffnung</span></>}
          subtitle="Alles, was Sie zum Thema Schlüsseldienst Auto öffnen wissen müssen."
          items={[
            {
              question: "Was kostet es, ein Auto öffnen zu lassen?",
              answer: "Die Kosten für eine Autoöffnung in Hamburg hängen vom Fahrzeugtyp und der Tageszeit ab. Bei AJ Schlüsseldienst arbeiten wir mit fairen Festpreisen – ohne versteckte Kosten. Rufen Sie uns an unter 040 18204419 für ein unverbindliches Angebot.",
            },
            {
              question: "Kann mein Auto ohne Schäden geöffnet werden?",
              answer: "Ja! Unsere Techniker sind darauf spezialisiert, Fahrzeuge schadensfrei zu öffnen. Mit professionellem Spezialwerkzeug öffnen wir Ihr Auto ohne Kratzer oder Beschädigungen am Lack, an der Tür oder am Schloss. Die schadensfreie Autoöffnung ist unser Standard.",
            },
            {
              question: "Wie schnell sind Sie bei einer Autoöffnung in Hamburg vor Ort?",
              answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihrem Fahrzeug in Hamburg. Unser Auto Schlüsseldienst ist rund um die Uhr einsatzbereit – auch an Wochenenden und Feiertagen.",
            },
            {
              question: "Welche Automarken können Sie öffnen?",
              answer: "Wir öffnen alle gängigen Automarken und Modelle – von VW, BMW, Mercedes und Audi bis hin zu Ford, Opel, Toyota und vielen mehr. Auch Fahrzeuge mit modernen elektronischen Schließsystemen sind kein Problem für unseren Autoschlüssel Notdienst.",
            },
            {
              question: "Brauche ich einen Eigentumsnachweis für die Autoöffnung?",
              answer: "Ja, aus Sicherheitsgründen benötigen wir einen Nachweis, dass Sie der Fahrzeughalter sind. Bitte halten Sie Ihren Fahrzeugschein oder Personalausweis bereit. So schützen wir Sie und Ihr Fahrzeug vor unbefugtem Zugriff.",
            },
            {
              question: "Wie funktioniert das Auto öffnen ohne Schlüssel?",
              answer: "Unsere erfahrenen Techniker verwenden professionelles Spezialwerkzeug, um Ihr Auto ohne Schlüssel zu öffnen. Je nach Fahrzeugtyp kommen verschiedene Methoden zum Einsatz – immer mit dem Ziel, Ihr Fahrzeug schnell und ohne jegliche Beschädigung zu öffnen.",
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
              Ihr Experte für <span className="text-[#83ebeb]">Autoöffnung in Hamburg</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Über 19 Jahre Erfahrung. Faire Preise. Schadensfreie Autoöffnung. Zufriedene Kunden in ganz Hamburg.
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
                href="https://wa.me/494018204419"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

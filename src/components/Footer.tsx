import Image from "next/image";
import Link from "next/link";

const stadtteile = [
  "Alsterdorf", "Altona", "Bahrenfeld", "Bargteheide", "Barmbek", "Bergedorf",
  "Billstedt", "Blankenese", "Bramfeld", "Dulsberg", "Eidelstedt", "Eilbek",
  "Eimsbüttel", "Eppendorf", "Fuhlsbüttel", "Glinde", "Hamm", "Harburg",
  "Harvestehude", "Horn", "Jenfeld", "Langenhorn", "Lohbrügge", "Lokstedt",
  "Niendorf", "Norderstedt", "Ottensen", "Pinneberg", "Poppenbüttel", "Rahlstedt",
  "Reinbek", "Sasel", "Schnelsen", "St. Pauli", "Steilshoop", "Stellingen",
  "Uhlenhorst", "Volksdorf", "Wandsbek", "Wentorf", "Wilhelmsburg", "Winterhude"
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-white.png"
              alt="A+J Schlüsseldienst"
              width={150}
              height={75}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Zuverlässig, ehrlich und mobil –<br />
              Ihr direkter Schlüsselprofi vor Ort.
            </p>
            <a
              href="tel:+494018204419"
              className="inline-flex items-center gap-2 bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold px-4 py-2 rounded-full text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Jetzt anrufen
            </a>
          </div>

          {/* Quick-Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#83ebeb]">Quick-Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#start" className="text-gray-400 hover:text-[#83ebeb] transition-colors">
                Startseite
              </Link>
              <Link href="#leistungen" className="text-gray-400 hover:text-[#83ebeb] transition-colors">
                Leistungen
              </Link>
              <Link href="#ueber-uns" className="text-gray-400 hover:text-[#83ebeb] transition-colors">
                Über uns
              </Link>
              <Link href="/impressum" className="text-gray-400 hover:text-[#83ebeb] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-400 hover:text-[#83ebeb] transition-colors">
                Datenschutz
              </Link>
            </nav>
          </div>

          {/* Kontakt */}
          <div id="kontakt" className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4 text-[#83ebeb]">Kontakt</h3>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+494018204419"
                className="flex items-center gap-3 text-gray-400 hover:text-[#83ebeb] transition-colors"
              >
                <svg className="w-5 h-5 text-[#83ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                040 18204419
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <svg className="w-5 h-5 text-[#83ebeb] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Hamburg und Umgebung</span>
              </div>
            </div>
          </div>
        </div>

        {/* Einsatzgebiete / Stadtteile */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold mb-4 text-[#83ebeb]">Schlüsseldienst in</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {stadtteile.join(" | ")}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} A+J Schlüsseldienst Hamburg. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/impressum" className="text-gray-500 hover:text-[#83ebeb] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-500 hover:text-[#83ebeb] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

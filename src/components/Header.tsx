"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="A+J Schlüsseldienst Hamburg"
              width={120}
              height={60}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#start" className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium">
              Startseite
            </Link>
            <Link href="#leistungen" className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium">
              Leistungen
            </Link>
            <Link href="#ueber-uns" className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium">
              Über uns
            </Link>
            <Link href="#kontakt" className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium">
              Kontakt
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+494018204419"
            className="hidden md:flex items-center gap-2 bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#start"
                className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Startseite
              </Link>
              <Link
                href="#leistungen"
                className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link
                href="#ueber-uns"
                className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="#kontakt"
                className="text-gray-700 hover:text-[#83ebeb] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <a
                href="tel:+494018204419"
                className="flex items-center justify-center gap-2 bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold px-5 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

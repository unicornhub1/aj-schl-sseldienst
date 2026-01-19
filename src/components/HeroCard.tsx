"use client";

import { useState } from "react";

export default function HeroCard() {
  const [activeTab, setActiveTab] = useState<"notfall" | "kontakt">("notfall");

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab("notfall")}
          className={`flex-1 py-4 px-4 text-sm font-semibold transition-colors ${
            activeTab === "notfall"
              ? "bg-[#83ebeb] text-[#1a1a1a]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Notfall-Hilfe
        </button>
        <button
          onClick={() => setActiveTab("kontakt")}
          className={`flex-1 py-4 px-4 text-sm font-semibold transition-colors ${
            activeTab === "kontakt"
              ? "bg-[#83ebeb] text-[#1a1a1a]"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Rückruf anfordern
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {activeTab === "notfall" ? (
          <div className="text-center">
            {/* Emergency Icon */}
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
              Notfall-Schlüsseldienst
            </h2>
            <p className="text-gray-600 mb-6">
              Sofort Hilfe bei Ausgesperrt-Situationen
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <svg className="w-5 h-5 text-[#83ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">In 20-30 Minuten vor Ort</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <svg className="w-5 h-5 text-[#83ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Faire Festpreise - keine versteckten Kosten</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <svg className="w-5 h-5 text-[#83ebeb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">24/7 erreichbar - auch Feiertags</span>
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

            <p className="text-gray-500 text-sm mt-4">
              Direkt zum Techniker - kein Callcenter
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Kostenlose Beratung</h2>
            <p className="text-gray-600 mb-6">Wir rufen Sie schnellstmöglich zurück!</p>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#83ebeb] focus:border-transparent transition-all text-gray-900"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#83ebeb] focus:border-transparent transition-all text-gray-900"
                  placeholder="Ihre Telefonnummer"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#83ebeb] focus:border-transparent transition-all text-gray-900 resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Rückruf anfordern
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

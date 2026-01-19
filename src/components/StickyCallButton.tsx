"use client";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <a
        href="tel:+494018204419"
        className="flex items-center justify-center gap-3 w-full bg-[#83ebeb] hover:bg-[#5fd4d4] text-[#1a1a1a] font-bold py-4 rounded-full text-lg shadow-lg transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        040 18204419
      </a>
    </div>
  );
}

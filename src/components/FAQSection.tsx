import { useState } from "react";
import { FAQS, BRAND_INFO } from "@/data/site-data";
import { HelpCircle, ChevronDown, Phone, Mail } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-5 md:px-8 bg-[#0c0b0a] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Clarity & Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
            Frequently Asked <span className="text-[#d4af37] italic">Questions.</span>
          </h2>
          <p className="mt-4 text-[#a8a29a] text-sm sm:text-base leading-relaxed">
            Everything you need to know about our design philosophy, on-site execution, and 10-year warranty.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#161513] border-[#c5a880]/40 shadow-xl shadow-black/50"
                    : "bg-[#121110] border-[#242220] hover:border-[#383430]"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#f5f0ea] font-medium">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#332f2b] flex items-center justify-center text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#211d1a]" : "bg-[#181615]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm text-[#b8b0a5] leading-relaxed border-t border-[#1f1d1b] animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions pill */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141312] border border-[#2b2824] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-semibold text-[#f5f0ea]">
              Have a specific architectural or layout question?
            </div>
            <div className="text-xs text-[#8c857b] mt-0.5">
              Speak directly with our senior interior consultants in Bengaluru.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.rawPhone}`}
              className="px-4 py-2 rounded-full bg-[#1e1c1a] hover:bg-[#282522] border border-[#c5a880]/30 text-xs font-semibold text-[#d4af37] flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="px-4 py-2 rounded-full bg-[#1e1c1a] hover:bg-[#282522] border border-[#c5a880]/30 text-xs font-semibold text-[#f5f0ea] flex items-center gap-2 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

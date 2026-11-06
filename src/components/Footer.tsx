import { BRAND_INFO } from "@/data/site-data";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  const serviceAreas = [
    "Begur",
    "AECS Layout",
    "Bannerghatta Road",
    "Koramangala",
    "Indiranagar",
    "Whitefield",
    "HSR Layout",
    "Sarjapur Road",
    "Electronic City",
    "JP Nagar",
    "Jayanagar",
    "Bellandur",
  ];

  return (
    <footer className="bg-[#080707] border-t border-[#23211f] pt-20 pb-12 px-5 md:px-8 text-[#a8a29a] relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Call to Action Banner */}
        <div className="pb-16 mb-16 border-b border-[#1c1a18] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              Ready to transform your residential or commercial space?
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#f5f0ea] mt-2">
              Let's create something timeless together.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-xl shadow-[#d4af37]/20 transition-all cursor-pointer"
            >
              Book Free Site Consultation
            </button>
            <a
              href={`tel:${BRAND_INFO.rawPhone}`}
              className="px-6 py-4 rounded-full bg-[#181615] hover:bg-[#22201d] text-xs font-semibold text-[#f5f0ea] border border-[#332f2b] transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call +91 9035 672 941</span>
            </a>
          </div>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#1c1a18]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2a2622] to-[#141312] border border-[#c5a880]/30 flex items-center justify-center font-serif text-[#d4af37] text-xl font-bold">
                JM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wider font-semibold text-[#f5f0ea]">
                  J&M INTERIORS
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880]">
                  And Decorators
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8c857b] leading-relaxed mb-6">
              Bengaluru's premier turnkey architecture, luxury residential interior, and commercial workspace fitout studio. Backed by in-house joinery craftsmanship and a 45-day guaranteed delivery protocol.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141312] border border-[#262422] text-xs text-[#d8d2ca]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>10-Year Comprehensive Warranty</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f0ea] font-semibold mb-5">
              Studio & Contact
            </h4>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#f5f0ea] font-medium leading-relaxed">
                    #2, AECS Layout B Block,
                  </p>
                  <p className="text-[#8c857b]">Chikka Begur, Bengaluru - 560068</p>
                  <p className="text-[#8c857b]">Karnataka, India</p>
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#c5a880] hover:text-[#d4af37] mt-1.5 font-medium"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.rawPhone}`}
                  className="text-[#f5f0ea] hover:text-[#d4af37] transition-colors font-medium"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-[#f5f0ea] hover:text-[#d4af37] transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 text-[#78726a]">
                <Clock className="w-4 h-4 text-[#78726a] shrink-0 mt-0.5" />
                <div>
                  <div>Mon - Sat: 9:30 AM - 7:30 PM</div>
                  <div className="text-[11px]">Sunday: By Prior Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f0ea] font-semibold mb-5">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Office Interiors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Home Interiors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Modular Kitchens
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Workspace Furniture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Custom Woodwork
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  Turnkey Execution
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas in Bangalore */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest text-[#f5f0ea] font-semibold mb-5">
              Service Areas • Bengaluru
            </h4>
            <p className="text-xs text-[#78726a] mb-3">
              We undertake premium architectural and interior projects across key Bengaluru zones:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-[#141312] border border-[#23211f] text-[#a8a29a]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666059] gap-4">
          <p>© {new Date().getFullYear()} J M Interior And Decorators (J&M Interiors). All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Architectural Revamp & Demo Showcase for Client Outreach</span>
            <span className="text-[#d4af37]">•</span>
            <span className="text-[#a8a29a]">Bengaluru</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { BRAND_INFO } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

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
    <footer className="bg-[#faf8f5] text-[#1c1917] pt-20 pb-12 px-6 lg:px-12 border-t border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Top Callout */}
        <div className="pb-16 mb-16 border-b border-[#e6e2dc] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c4830] font-semibold">
              Commence Your Architectural Project
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#1c1917] mt-2">
              Transforming spaces across Bengaluru.
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={onOpenConsultation} size="lg" className="rounded-xs">
              Book Site Consultation
            </Button>
            <a
              href={`tel:${BRAND_INFO.rawPhone}`}
              className="px-6 py-3 border border-[#d6d0c7] hover:border-[#1c1917] text-xs font-mono font-semibold transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c4830]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#e6e2dc]">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="font-serif text-2xl font-normal text-[#1c1917] mb-1">
              J&M Interiors
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] mb-4">
              J M Interior And Decorators
            </div>
            <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-6 font-sans">
              Turnkey architectural interior contracting, commercial workspace fitouts, and bespoke timber furniture joinery based in Bengaluru, Karnataka.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ffffff] border border-[#e6e2dc] text-xs text-[#1c1917]">
              <ShieldCheck className="w-4 h-4 text-[#8c4830]" />
              <span className="font-mono text-[11px]">10-Year Hardware & Carcass Warranty</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4">
              Studio & Workshop
            </div>
            <div className="space-y-3.5 text-xs text-[#57534e]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8c4830] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#1c1917] font-medium leading-relaxed">
                    #2, AECS Layout B Block,
                  </p>
                  <p>Chikka Begur, Bengaluru – 560068</p>
                  <p>Karnataka, India</p>
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[#8c4830] hover:underline mt-1"
                  >
                    <span>Google Maps Directions</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#8c4830] shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.rawPhone}`}
                  className="font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8c4830] shrink-0" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1 text-[#78716c]">
                <Clock className="w-4 h-4 text-[#8c4830] shrink-0 mt-0.5" />
                <div className="text-[11px] font-mono">
                  <div>Mon – Sat: 9:30 AM to 7:30 PM</div>
                  <div>Sunday: By Scheduled Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4">
              Index
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  01 / Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#8c4830] transition-colors">
                  02 / Portfolio
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-[#8c4830] transition-colors">
                  03 / Transformation
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#8c4830] transition-colors">
                  04 / Cost Estimator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#8c4830] transition-colors">
                  05 / Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#8c4830] transition-colors">
                  06 / FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Service Zones */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4">
              Active Zones • Bengaluru
            </div>
            <p className="text-xs text-[#78716c] mb-3">
              Currently executing turnkey projects across key Bangalore sectors:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-[11px] font-mono px-2 py-0.5 bg-[#ffffff] border border-[#e6e2dc] text-[#57534e]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78716c] gap-4">
          <p>© {new Date().getFullYear()} J M Interior And Decorators. All rights reserved.</p>
          <p>
            Studio Revamp & Freelance Pitch Showcase • Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}

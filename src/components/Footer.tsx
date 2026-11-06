import { CLIENT_DATA } from "@/data/site-data";
import { Button } from "@/components/ui/button";

interface FooterProps {
  onOpenConsultation: () => void;
}

export function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-[#faf8f5] text-[#1c1917] pt-20 pb-12 px-6 sm:px-8 lg:px-12 border-t border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Top Callout */}
        <div className="pb-16 mb-16 border-b border-[#e6e2dc] flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c4830] font-bold">
              READY TO TRANSFORM YOUR WORKSPACE?
            </span>
            <h3 className="font-display text-3xl sm:text-5xl uppercase font-extrabold text-[#1c1917] mt-2 tracking-tight">
              LET JM INTERIORS CREATE AN INSPIRING SPACE FOR YOU.
            </h3>
            <p className="text-xs sm:text-sm text-[#57534e] mt-2 max-w-xl font-sans">
              Thank you for choosing us to transform your space into something truly beautiful, functional, and inspiring.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button
              onClick={onOpenConsultation}
              size="lg"
              className="rounded-xs font-mono text-xs tracking-wider"
              data-cursor="CONTACT"
            >
              Contact Our Experts
            </Button>
            <a
              href={`tel:${CLIENT_DATA.contact.rawPhone}`}
              className="px-6 py-3 border border-[#d6d0c7] hover:border-[#1c1917] text-xs font-mono font-semibold transition-colors flex items-center gap-2"
              data-cursor="CALL"
            >
              <span className="material-symbols-outlined text-[16px] text-[#8c4830]">call</span>
              <span>{CLIENT_DATA.contact.phone}</span>
            </a>
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#e6e2dc]">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="font-display text-2xl uppercase font-bold text-[#1c1917] mb-1 tracking-tight">
              {CLIENT_DATA.brandName}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] mb-4">
              {CLIENT_DATA.fullName}
            </div>
            <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-6 font-sans">
              Collaborating with leading architecture companies in Bangalore to develop working spaces and homes that are dynamic, breathtaking, and productive.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ffffff] border border-[#e6e2dc] text-xs text-[#1c1917]">
              <span className="material-symbols-outlined text-[16px] text-[#8c4830]">verified</span>
              <span className="font-mono text-[11px] font-bold">10+ Years of Interior & Architecture Expertise</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4 font-bold">
              CONTACT & STUDIO
            </div>
            <div className="space-y-3.5 text-xs text-[#57534e]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#8c4830] shrink-0 mt-0.5">location_on</span>
                <div>
                  <p className="text-[#1c1917] font-medium leading-relaxed font-sans">
                    {CLIENT_DATA.contact.address}
                  </p>
                  <a
                    href={CLIENT_DATA.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[#8c4830] hover:underline mt-1"
                  >
                    <span>Google Maps Directions</span>
                    <span className="material-symbols-outlined text-[12px]">north_east</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <span className="material-symbols-outlined text-[18px] text-[#8c4830] shrink-0">call</span>
                <a
                  href={`tel:${CLIENT_DATA.contact.rawPhone}`}
                  className="font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors"
                >
                  {CLIENT_DATA.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-[#8c4830] shrink-0">mail</span>
                <a
                  href={`mailto:${CLIENT_DATA.contact.email}`}
                  className="font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors break-all"
                >
                  {CLIENT_DATA.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4 font-bold">
              SERVICES
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  Office Interior
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  Home Interiors
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  Office Furniture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  Home Furniture
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-[#78716c] mb-4 font-bold">
              QUICK LINKS
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-[#8c4830] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#8c4830] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#8c4830] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#8c4830] transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#8c4830] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#78716c] gap-4">
          <p>© {new Date().getFullYear()} JM Interiors. All Rights Reserved.</p>
          <p>
            Bengaluru, Karnataka • +91 9035 672 941
          </p>
        </div>
      </div>
    </footer>
  );
}

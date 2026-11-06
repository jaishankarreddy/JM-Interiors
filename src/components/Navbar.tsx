import { useState, useEffect } from "react";
import { BRAND_INFO } from "@/data/site-data";
import { Phone, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", label: "Work", href: "#portfolio" },
    { num: "02", label: "Capabilities", href: "#services" },
    { num: "03", label: "Transformation", href: "#transformation" },
    { num: "04", label: "Cost Estimator", href: "#calculator" },
    { num: "05", label: "Process", href: "#process" },
    { num: "06", label: "Studio & FAQ", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e6e2dc] py-3.5 shadow-xs"
          : "bg-[#faf8f5] border-b border-[#e6e2dc]/80 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Mark */}
        <a href="#" className="flex items-baseline gap-2.5 group">
          <span className="font-serif text-2xl font-normal tracking-tight text-[#1c1917] group-hover:text-[#8c4830] transition-colors">
            J&M Interiors
          </span>
          <span className="hidden sm:inline-block text-[10px] font-sans uppercase tracking-[0.2em] text-[#78716c]">
            Architecture & Decorators • Bengaluru
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-widest text-[#57534e] hover:text-[#1c1917] transition-colors flex items-center gap-1.5 py-1"
            >
              <span className="font-mono text-[10px] text-[#a8a29e]">{link.num}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${BRAND_INFO.rawPhone}`}
            className="text-xs font-mono text-[#57534e] hover:text-[#1c1917] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#8c4830]" />
            <span>{BRAND_INFO.phone}</span>
          </a>

          <Button
            onClick={onOpenConsultation}
            size="sm"
            className="rounded-xs tracking-widest text-[11px]"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-1.5 text-[#1c1917] hover:text-[#8c4830] transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e6e2dc] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#78716c] pb-2 border-b border-[#e6e2dc]">
              Bengaluru Studio • Turnkey Interiors
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm uppercase tracking-wider text-[#1c1917] hover:text-[#8c4830] py-2 flex items-center justify-between border-b border-[#f0ebe3]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#a8a29e]">{link.num}</span>
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${BRAND_INFO.rawPhone}`}
                className="py-3 text-center border border-[#d6d0c7] text-xs font-mono font-medium text-[#1c1917]"
              >
                Direct Call: {BRAND_INFO.phone}
              </a>
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsultation();
                }}
                className="w-full"
              >
                Book Site Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from "react";
import { BRAND_INFO } from "@/data/site-data";
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Transformation", href: "#transformation" },
    { label: "Cost Estimator", href: "#calculator" },
    { label: "How We Work", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-[#c5a880]/15 shadow-2xl shadow-black/40"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2a2622] to-[#141312] border border-[#c5a880]/30 flex items-center justify-center font-serif text-[#d4af37] text-xl font-bold tracking-wider shadow-md group-hover:border-[#d4af37] transition-all">
            JM
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider font-semibold text-[#f5f0ea] group-hover:text-[#d4af37] transition-colors leading-tight">
              J&M INTERIORS
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#c5a880]">
              Architecture & Decorators
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1a1816]/70 border border-[#c5a880]/20 rounded-full px-5 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs uppercase tracking-widest text-[#d8d2ca] hover:text-[#d4af37] px-3.5 py-1.5 transition-colors relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA / Contact Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.rawPhone}`}
            className="flex items-center gap-2 text-xs font-medium text-[#d8d2ca] hover:text-[#d4af37] px-3 py-2 rounded-full border border-transparent hover:border-[#c5a880]/30 transition-all"
            title="Call Bengaluru Office"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden xl:inline">{BRAND_INFO.phone}</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#f5f0ea] hover:text-[#d4af37] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121110]/95 backdrop-blur-xl border-b border-[#c5a880]/20 px-6 py-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-[#c5a880] pb-2 border-b border-[#2b2824]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio Open for Q2/Q3 Projects • Bengaluru</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm uppercase tracking-widest text-[#f5f0ea] hover:text-[#d4af37] py-2 border-b border-[#1f1d1b] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${BRAND_INFO.rawPhone}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1c1a18] border border-[#c5a880]/20 text-xs font-semibold text-[#f5f0ea]"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call {BRAND_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-xs font-bold uppercase tracking-wider text-[#0c0b0a]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Site Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

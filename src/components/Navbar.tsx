import { useState, useEffect } from "react";
import { CLIENT_DATA } from "@/data/site-data";
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
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "How We Work", href: "#process" },
    { label: "Gallery", href: "#gallery" },
    { label: "Estimator", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
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
          : "bg-[#faf8f5] border-b border-[#e6e2dc] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Mark with Syne geometric boldness */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <span className="font-display text-xl sm:text-2xl tracking-tighter text-[#1c1917] group-hover:text-[#8c4830] transition-colors whitespace-nowrap uppercase">
            JM Interiors
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-[#d6d0c7]" />
          <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#78716c] uppercase whitespace-nowrap">
            Bengaluru / Architectural Fitouts
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[12px] font-sans font-medium uppercase tracking-widest text-[#57534e] hover:text-[#1c1917] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#1c1917] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Phone */}
        <div className="hidden sm:flex items-center gap-5 shrink-0">
          <a
            href={`tel:${CLIENT_DATA.contact.rawPhone}`}
            className="flex items-center gap-2 text-xs font-mono font-medium text-[#57534e] hover:text-[#1c1917] transition-colors whitespace-nowrap"
            title="Call Bengaluru Office"
          >
            <span className="material-symbols-outlined text-[#8c4830] text-[16px]">call</span>
            <span className="whitespace-nowrap">{CLIENT_DATA.contact.phone}</span>
          </a>

          <Button
            onClick={onOpenConsultation}
            size="sm"
            className="rounded-xs px-4 h-9 tracking-wider text-[11px] font-mono whitespace-nowrap"
          >
            <span>Get In Touch</span>
            <span className="material-symbols-outlined text-[14px] ml-1.5">north_east</span>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Toggle Navigation"
        >
          <span className="material-symbols-outlined text-[24px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#e6e2dc] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#78716c] pb-2 border-b border-[#e6e2dc] flex items-center justify-between">
              <span>JM Interiors</span>
              <span>Bengaluru, Karnataka</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs uppercase tracking-widest text-[#1c1917] hover:text-[#8c4830] py-2.5 border-b border-[#f0ebe3] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[16px] text-[#a8a29e]">arrow_forward</span>
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`tel:${CLIENT_DATA.contact.rawPhone}`}
                className="w-full py-2.5 px-4 text-center border border-[#d6d0c7] text-xs font-mono font-medium text-[#1c1917] flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px] text-[#8c4830]">call</span>
                <span>{CLIENT_DATA.contact.phone}</span>
              </a>

              <Button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsultation();
                }}
                className="w-full h-10 tracking-widest text-xs font-mono"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

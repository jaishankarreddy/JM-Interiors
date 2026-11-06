import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BRAND_INFO } from "@/data/site-data";
import { ArrowDownRight, ShieldCheck, Clock, Award, Building2, Sparkles, MessageCircle } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onOpenConsultation, onExploreProjects, onOpenCalculator }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(titleRef.current?.children || [], {
        opacity: 0,
        y: 35,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        y: 25,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-14 px-5 md:px-8 bg-grain overflow-hidden"
    >
      {/* Background Hero Image with Dark Luxury Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/assets/hero.jpg"
          alt="J&M Interiors Luxury Architecture & Interior Design Bengaluru"
          className="w-full h-full object-cover object-center scale-105 opacity-25 filter contrast-125 brightness-90 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/75 to-[#0c0b0a]/85" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/10 blur-[140px] pointer-events-none rounded-full" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center my-auto">
        {/* Studio Status Pill */}
        <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b1917]/80 border border-[#c5a880]/30 text-xs tracking-wider text-[#d8d2ca] mb-6 backdrop-blur-md w-fit">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          <span className="uppercase text-[11px] font-semibold text-[#c5a880]">Turnkey Architecture & Bespoke Interiors</span>
          <span className="text-[#68635c]">•</span>
          <span className="text-[#a8a29a] text-[11px]">Bengaluru, India</span>
        </div>

        {/* Editorial Headline */}
        <h1
          ref={titleRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-normal leading-[1.05] tracking-tight text-[#f5f0ea] max-w-5xl"
        >
          <span className="block">Designing workspaces that</span>
          <span className="block text-[#d4af37] italic font-normal">
            inspire daily brilliance.
          </span>
          <span className="block text-3xl sm:text-5xl md:text-6xl text-[#d4cfc7] mt-1">
            Crafting homes for mindful living.
          </span>
        </h1>

        {/* Subtitle / Context */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#b8b0a5] font-light leading-relaxed">
          <strong className="text-[#f5f0ea] font-medium">J&M Interior And Decorators</strong> delivers complete turnkey architecture, commercial fitouts, and bespoke modular furniture across Bangalore. Designed with spatial precision, crafted in our own joinery, and delivered on an uncompromising 45-day timeline.
        </p>

        {/* Call-to-action Button Row */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="group px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] hover:brightness-110 shadow-xl shadow-[#d4af37]/25 transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Book Free Site Consultation</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenCalculator}
            className="px-6 py-4 rounded-full text-sm font-medium tracking-wide bg-[#1c1a18]/80 hover:bg-[#25221f] text-[#f5f0ea] border border-[#c5a880]/30 hover:border-[#c5a880] transition-all flex items-center gap-2 backdrop-blur-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Calculate Project Cost</span>
          </button>

          <button
            onClick={onExploreProjects}
            className="px-5 py-4 text-xs font-semibold uppercase tracking-widest text-[#a8a29a] hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            Explore Selected Works ↓
          </button>
        </div>
      </div>

      {/* Trust & Stats Bar */}
      <div
        ref={statsRef}
        className="max-w-7xl mx-auto w-full pt-10 mt-6 border-t border-[#c5a880]/15 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#1c1a18] border border-[#c5a880]/20 text-[#d4af37]">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5f0ea]">10+ Years</div>
            <p className="text-xs text-[#a8a29a] uppercase tracking-wider mt-0.5">Bangalore Interior Expertise</p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#1c1a18] border border-[#c5a880]/20 text-[#d4af37]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5f0ea]">150+ Projects</div>
            <p className="text-xs text-[#a8a29a] uppercase tracking-wider mt-0.5">Delivered Across South India</p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#1c1a18] border border-[#c5a880]/20 text-[#d4af37]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5f0ea]">45 Days</div>
            <p className="text-xs text-[#a8a29a] uppercase tracking-wider mt-0.5">Guaranteed Modular Handover</p>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-[#1c1a18] border border-[#c5a880]/20 text-[#d4af37]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#f5f0ea]">10-Yr Warranty</div>
            <p className="text-xs text-[#a8a29a] uppercase tracking-wider mt-0.5">Woodwork & Hardware Assurance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

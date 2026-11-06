import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CLIENT_DATA } from "@/data/site-data";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onOpenConsultation, onExploreServices, onOpenCalculator }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim-text", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-image-box", {
        opacity: 0,
        y: 25,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-28 pb-16 px-6 sm:px-8 lg:px-12 bg-[#faf8f5] border-b border-[#e6e2dc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Minimal Eyebrow */}
        <div className="hero-anim-text flex items-center justify-between pb-4 mb-8 border-b border-[#e6e2dc] text-xs font-sans text-[#78716c]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8c4830]" />
            <span className="uppercase tracking-widest text-[#1c1917] font-semibold text-[11px]">
              {CLIENT_DATA.tagline}
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#78716c]">
            Bangalore, Karnataka
          </span>
        </div>

        {/* Minimal Hero Headline & Description */}
        <div className="max-w-4xl mb-12">
          <h1 className="hero-anim-text font-sans font-bold text-4xl sm:text-6xl lg:text-[4.5rem] uppercase tracking-tight text-[#1c1917] leading-[1.05]">
            Designing workspaces that inspire <span className="text-[#8c4830]">daily brilliance</span> & living.
          </h1>

          <p className="hero-anim-text mt-5 text-sm sm:text-base text-[#57534e] leading-relaxed max-w-2xl font-sans font-normal">
            {CLIENT_DATA.heroDescription}
          </p>

          <div className="hero-anim-text flex flex-wrap items-center gap-3.5 pt-6">
            <Button
              onClick={onOpenConsultation}
              size="lg"
              className="rounded-xs font-sans text-xs font-semibold tracking-wider h-11 px-6"
              data-cursor="CONTACT"
            >
              <span>Get In Touch</span>
              <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
            </Button>

            <Button
              onClick={onExploreServices}
              variant="outline"
              size="lg"
              className="rounded-xs font-sans text-xs font-semibold tracking-wider h-11 px-6"
              data-cursor="SERVICES"
            >
              Explore Services
            </Button>

            <button
              onClick={onOpenCalculator}
              className="text-xs font-sans font-semibold text-[#57534e] hover:text-[#1c1917] transition-colors ml-2 py-2 cursor-pointer"
            >
              Cost Estimator ↓
            </button>
          </div>
        </div>

        {/* Hero Imagery Showcase - Clean, Fully Visible, Minimal */}
        <div className="hero-image-box grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div
            className="lg:col-span-8 relative aspect-[16/10] sm:h-[460px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]"
            data-cursor="VIEW"
          >
            <img
              src="/assets/hero.jpg"
              alt="JM Interiors Bangalore Architecture & Interior Design"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#faf8f5]/90 backdrop-blur-xs border border-[#e6e2dc] px-4 py-2 flex items-center justify-between text-xs font-sans">
              <span className="font-medium text-[#1c1917]">Workspaces & Living Environments</span>
              <span className="text-[#78716c] text-[11px]">Turnkey Execution • Bangalore</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div
              className="relative h-56 sm:h-60 overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]"
              data-cursor="WORK"
            >
              <img
                src="/assets/project-office.jpg"
                alt="Office Interiors Bangalore"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-[#faf8f5] text-[#1c1917] text-[10px] uppercase font-semibold px-2 py-0.5 border border-[#e6e2dc]">
                Commercial Fitout
              </div>
            </div>

            <div className="p-6 border border-[#e6e2dc] bg-[#ffffff] flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#8c4830] font-bold block mb-2">
                  About JM Interiors
                </span>
                <p className="font-sans text-lg font-semibold text-[#1c1917] leading-snug">
                  "The vision: To make any space completely attached to ambition, style, and productivity."
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ebe3] flex items-center justify-between text-xs text-[#78716c] mt-3">
                <span>10+ Years of Craftsmanship</span>
                <span className="font-medium text-[#1c1917]">Begur, Bengaluru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Metrics Row */}
        <div className="mt-12 pt-8 border-t border-[#e6e2dc] grid grid-cols-2 md:grid-cols-4 gap-6">
          {CLIENT_DATA.about.stats.map((stat, i) => (
            <div key={i}>
              <div className="font-sans text-3xl sm:text-4xl font-bold text-[#1c1917] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#1c1917] font-semibold mt-1">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#78716c] mt-0.5 font-sans">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

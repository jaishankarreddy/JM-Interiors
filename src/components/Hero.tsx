import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BRAND_INFO } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onOpenConsultation, onExploreProjects, onOpenCalculator }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current?.children || [], {
        y: 25,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.98,
        duration: 1.1,
        delay: 0.25,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-32 pb-20 px-6 sm:px-8 lg:px-12 bg-paper border-b border-[#e6e2dc] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Studio Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-3 text-xs text-[#78716c]">
          <div className="flex items-center gap-3">
            <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
              Studio Practice
            </Badge>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#1c1917]">
              J M Interior And Decorators • Begur, Bengaluru
            </span>
          </div>
          <div className="font-mono text-[11px] tracking-wider text-[#78716c] flex items-center gap-2">
            <span>12°53'N 77°38'E</span>
            <span>/</span>
            <span>EST. 2014</span>
            <span>/</span>
            <span className="text-[#8c4830] font-semibold">150+ COMPLETED PROJECTS</span>
          </div>
        </div>

        {/* Editorial Headline & Overview */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <h1
              ref={headlineRef}
              className="font-serif text-5xl sm:text-7xl lg:text-[5.4rem] font-normal leading-[1.03] tracking-tight text-[#1c1917]"
            >
              <span className="block">Architecture for</span>
              <span className="block text-[#8c4830] italic font-normal">
                thoughtful living.
              </span>
              <span className="block text-3xl sm:text-5xl lg:text-6xl text-[#44403c] mt-2">
                Workspaces built with lasting clarity.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-sans">
              We design and construct bespoke residential environments, high-efficiency corporate headquarters, and precision German-hardware modular kitchens across Bengaluru. Governed by a strict 45-day on-site delivery discipline.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button onClick={onOpenConsultation} size="lg" className="rounded-xs font-mono text-xs">
                <span>Book Site Audit</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>

              <Button
                onClick={onOpenCalculator}
                variant="outline"
                size="lg"
                className="rounded-xs font-mono text-xs"
              >
                Cost Calculator
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Imagery Showcase */}
        <div ref={imageRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative aspect-[16/10] md:aspect-auto md:h-[500px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]">
            <img
              src="/assets/hero.jpg"
              alt="J&M Interiors Turnkey Living Architecture Bengaluru"
              className="w-full h-full object-cover object-center filter contrast-[1.02]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#faf8f5]/90 backdrop-blur-xs border border-[#e6e2dc] px-4 py-2.5 flex items-center justify-between text-xs">
              <span className="font-mono text-[#1c1917]">Project / The Sarjapur Villa Residence</span>
              <span className="font-mono text-[#78716c]">4,200 sq.ft • Turnkey Architectural Handover</span>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div className="relative aspect-[4/3] md:h-[240px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]">
              <img
                src="/assets/project-office.jpg"
                alt="Corporate Workspace Architecture Bengaluru"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#faf8f5] text-[#1c1917] font-mono text-[10px] uppercase px-2 py-0.5 border border-[#e6e2dc]">
                  Commercial Fitout
                </span>
              </div>
            </div>

            {/* Quick Pitch Note */}
            <div className="p-6 border border-[#e6e2dc] bg-[#ffffff] flex-1 flex flex-col justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8c4830]">
                Turnkey Execution Model
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#1c1917] my-3 leading-snug">
                "Direct carpenter teams, in-house modular fabrication, zero subcontracting."
              </p>
              <button
                onClick={onExploreProjects}
                className="text-xs uppercase tracking-widest font-semibold text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5 cursor-pointer mt-2"
              >
                <span>View Portfolio Index</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Studio Metrics Row */}
        <div className="mt-14 pt-10 border-t border-[#e6e2dc] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-serif text-4xl sm:text-5xl text-[#1c1917] font-normal">
              10<span className="text-[#8c4830]">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mt-1.5">
              Years in Bengaluru
            </div>
            <p className="text-[11px] text-[#78716c] mt-0.5 font-sans">Established practice since 2014</p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl text-[#1c1917] font-normal">
              150<span className="text-[#8c4830]">+</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mt-1.5">
              Turnkey Projects
            </div>
            <p className="text-[11px] text-[#78716c] mt-0.5 font-sans">Homes & commercial offices</p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl text-[#1c1917] font-normal">
              45<span className="text-base font-sans text-[#78716c] ml-1">Days</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mt-1.5">
              Execution Timeline
            </div>
            <p className="text-[11px] text-[#78716c] mt-0.5 font-sans">Guaranteed modular delivery</p>
          </div>

          <div>
            <div className="font-serif text-4xl sm:text-5xl text-[#1c1917] font-normal">
              10<span className="text-base font-sans text-[#78716c] ml-1">Years</span>
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mt-1.5">
              Warranty Coverage
            </div>
            <p className="text-[11px] text-[#78716c] mt-0.5 font-sans">Woodwork & German hardware</p>
          </div>
        </div>
      </div>
    </section>
  );
}

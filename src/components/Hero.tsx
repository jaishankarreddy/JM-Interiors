import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CLIENT_DATA } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
  onOpenCalculator: () => void;
}

export function Hero({ onOpenConsultation, onExploreServices, onOpenCalculator }: HeroProps) {
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
              {CLIENT_DATA.tagline}
            </Badge>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#1c1917]">
              {CLIENT_DATA.fullName} • Begur, Bengaluru
            </span>
          </div>
          <div className="font-mono text-[11px] tracking-wider text-[#78716c] flex items-center gap-2">
            <span>Call Anytime:</span>
            <a
              href={`tel:${CLIENT_DATA.contact.rawPhone}`}
              className="text-[#1c1917] font-semibold hover:text-[#8c4830] transition-colors"
            >
              {CLIENT_DATA.contact.phone}
            </a>
          </div>
        </div>

        {/* Editorial Headline & Overview */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <h1
              ref={headlineRef}
              className="font-serif text-5xl sm:text-7xl lg:text-[5.2rem] font-normal leading-[1.03] tracking-tight text-[#1c1917]"
            >
              <span className="block">{CLIENT_DATA.subtitles[0]}</span>
              <span className="block text-[#8c4830] italic font-normal mt-2 text-3xl sm:text-5xl lg:text-6xl">
                {CLIENT_DATA.subtitles[1]}
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <p className="text-sm sm:text-base text-[#57534e] leading-relaxed font-sans">
              {CLIENT_DATA.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button onClick={onOpenConsultation} size="lg" className="rounded-xs font-mono text-xs">
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>

              <Button
                onClick={onExploreServices}
                variant="outline"
                size="lg"
                className="rounded-xs font-mono text-xs"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Imagery Showcase */}
        <div ref={imageRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Image */}
          <div className="md:col-span-8 relative aspect-[16/10] md:aspect-auto md:h-[480px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]">
            <img
              src="/assets/hero.jpg"
              alt="JM Interiors Bangalore Architecture & Interior Design"
              className="w-full h-full object-cover object-center filter contrast-[1.02]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#faf8f5]/90 backdrop-blur-xs border border-[#e6e2dc] px-4 py-2.5 flex items-center justify-between text-xs">
              <span className="font-mono text-[#1c1917]">Workspaces & Living Environments</span>
              <span className="font-mono text-[#78716c]">Crafted by Bangalore's Top Architecture Firms</span>
            </div>
          </div>

          {/* Secondary Editorial Column */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div className="relative aspect-[4/3] md:h-[230px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]">
              <img
                src="/assets/project-office.jpg"
                alt="Office Interiors Bangalore"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#faf8f5] text-[#1c1917] font-mono text-[10px] uppercase px-2 py-0.5 border border-[#e6e2dc]">
                  Office Interiors
                </span>
              </div>
            </div>

            {/* Quick Pitch Note */}
            <div className="p-6 border border-[#e6e2dc] bg-[#ffffff] flex-1 flex flex-col justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8c4830]">
                About JM Interiors
              </span>
              <p className="font-serif text-xl sm:text-2xl text-[#1c1917] my-2 leading-snug">
                "The vision: To make any space completely attached to ambition, style, and productivity."
              </p>
              <button
                onClick={onOpenCalculator}
                className="text-xs uppercase tracking-widest font-semibold text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5 cursor-pointer mt-2"
              >
                <span>Calculate Cost Estimate</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Studio Metrics Row */}
        <div className="mt-14 pt-10 border-t border-[#e6e2dc] grid grid-cols-2 md:grid-cols-4 gap-8">
          {CLIENT_DATA.about.stats.map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-4xl sm:text-5xl text-[#1c1917] font-normal">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#78716c] mt-1.5">
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

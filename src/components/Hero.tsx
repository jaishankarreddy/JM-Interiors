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
  const titleLinesRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const gridLinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Grid lines entrance animation (Obys Grids signature)
      gsap.from(".hero-grid-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.inOut",
      });

      // 2. Text lines masked slide up (Mecha & GSAP signature)
      const lines = titleLinesRef.current?.querySelectorAll(".hero-reveal-line");
      if (lines && lines.length) {
        gsap.from(lines, {
          yPercent: 120,
          rotate: 1.5,
          duration: 1.2,
          stagger: 0.14,
          ease: "power4.out",
          delay: 0.2,
        });
      }

      // 3. Image clip path & scale reveal
      if (imageFrameRef.current) {
        gsap.from(imageFrameRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          scale: 1.1,
          duration: 1.4,
          delay: 0.4,
          ease: "power3.inOut",
        });
      }

      // 4. Parallax effect on mouse movement
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xOffset = (clientX / window.innerWidth - 0.5) * 16;
        const yOffset = (clientY / window.innerHeight - 0.5) * 16;
        gsap.to(".hero-parallax-target", {
          x: xOffset,
          y: yOffset,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="pt-28 pb-20 px-6 sm:px-8 lg:px-12 bg-paper border-b border-[#e6e2dc] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Architectural Coordinate Strip */}
        <div className="hero-grid-line flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-10 border-b border-[#e6e2dc] gap-3 text-xs font-mono text-[#78716c]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8c4830] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-[#1c1917] font-semibold">
              {CLIENT_DATA.tagline}
            </span>
            <span className="text-[#d6d0c7]">/</span>
            <span className="text-[11px] text-[#78716c] uppercase">
              {CLIENT_DATA.fullName}
            </span>
          </div>

          <div className="text-[11px] tracking-wider text-[#78716c] flex items-center gap-3">
            <span>12°53'N 77°38'E</span>
            <span>•</span>
            <span>BENGALURU</span>
            <span>•</span>
            <span className="text-[#8c4830] font-bold">EST. 2014</span>
          </div>
        </div>

        {/* Hero Headline - Bold Architectural Grotesque Typography */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div ref={titleLinesRef} className="lg:col-span-8">
            <div className="mask-line">
              <h1 className="hero-reveal-line font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] uppercase font-extrabold leading-[0.98] tracking-tighter text-[#1c1917]">
                DESIGNING WORKSPACES
              </h1>
            </div>
            <div className="mask-line">
              <div className="hero-reveal-line font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] uppercase font-extrabold leading-[0.98] tracking-tighter text-[#8c4830]">
                THAT INSPIRE DAILY
              </div>
            </div>
            <div className="mask-line">
              <div className="hero-reveal-line font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.6rem] uppercase font-extrabold leading-[1] tracking-tighter text-[#1c1917]">
                BRILLIANCE & LIVING.
              </div>
            </div>
          </div>

          {/* Side Context & Callouts */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <div className="border-l-2 border-[#8c4830] pl-4">
              <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                {CLIENT_DATA.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                onClick={onOpenConsultation}
                size="lg"
                className="rounded-xs font-mono text-xs tracking-wider"
                data-cursor="CONTACT"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>

              <Button
                onClick={onExploreServices}
                variant="outline"
                size="lg"
                className="rounded-xs font-mono text-xs tracking-wider"
                data-cursor="EXPLORE"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Imagery Showcase with Mecha / Obys Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Large Image */}
          <div
            ref={imageFrameRef}
            className="md:col-span-8 relative aspect-[16/10] md:aspect-auto md:h-[500px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]"
            data-cursor="VIEW"
          >
            <img
              src="/assets/hero.jpg"
              alt="JM Interiors Bangalore Architecture & Interior Design"
              className="hero-parallax-target w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Architectural Grid Tag on Image */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-mono text-white">
              <span className="bg-[#1c1917]/80 backdrop-blur-xs px-3 py-1.5 border border-white/20">
                PLATE 01 — WORKSPACE ARCHITECTURE & LIVING
              </span>
              <span className="hidden sm:inline-block bg-[#1c1917]/80 backdrop-blur-xs px-3 py-1.5 border border-white/20">
                BENGALURU • 45-DAY DISCIPLINE
              </span>
            </div>
          </div>

          {/* Secondary Structural Box */}
          <div className="md:col-span-4 flex flex-col justify-between gap-6">
            <div
              className="relative aspect-[4/3] md:h-[240px] overflow-hidden border border-[#e6e2dc] bg-[#f0ebe3]"
              data-cursor="WORK"
            >
              <img
                src="/assets/project-office.jpg"
                alt="Office Interiors Bangalore"
                className="hero-parallax-target w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#faf8f5] text-[#1c1917] font-mono text-[10px] uppercase px-2 py-0.5 border border-[#e6e2dc]">
                  Commercial Fitout
                </span>
              </div>
            </div>

            {/* Editorial Statement Card */}
            <div className="p-7 border border-[#e6e2dc] bg-[#ffffff] flex-1 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8c4830] block mb-2 font-bold">
                  ABOUT JM INTERIORS
                </span>
                <p className="font-display text-xl sm:text-2xl text-[#1c1917] leading-tight uppercase">
                  "ANY SPACE ATTACHED TO AMBITION, STYLE & PRODUCTIVITY."
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ebe3] flex items-center justify-between mt-4">
                <button
                  onClick={onOpenCalculator}
                  className="text-xs uppercase tracking-widest font-mono font-semibold text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5 cursor-pointer"
                  data-cursor="CALC"
                >
                  <span>Calculate Cost</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="font-mono text-[11px] text-[#78716c]">BANGALORE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Metrics Row with Animated Grid Border */}
        <div className="hero-grid-line mt-14 pt-10 border-t border-[#e6e2dc] grid grid-cols-2 md:grid-cols-4 gap-8">
          {CLIENT_DATA.about.stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1c1917] tracking-tighter uppercase group-hover:text-[#8c4830] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#1c1917] font-bold mt-2">
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

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal headline on scroll
      gsap.from(".about-title-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate cards staggered on scroll
      const cards = cardsRef.current?.querySelectorAll(".about-interactive-card");
      if (cards && cards.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
          y: 45,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                {CLIENT_DATA.about.eyebrow}
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Bangalore, Karnataka
              </span>
            </div>

            <div className="about-title-reveal">
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase font-extrabold text-[#1c1917] leading-[0.98] tracking-tight">
                YOUR PROFESSIONAL <br />
                <span className="text-[#8c4830]">ARCHITECTURE</span> <br />
                PARTNER.
              </h2>
            </div>

            <p className="mt-6 text-sm sm:text-base text-[#57534e] leading-relaxed font-sans max-w-lg">
              {CLIENT_DATA.about.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={onOpenConsultation}
                size="lg"
                className="rounded-xs font-mono text-xs tracking-wider"
                data-cursor="CONSULT"
              >
                <span>Book Free Consultation</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>
            </div>
          </div>

          {/* Right Feature Boxes & Pillars */}
          <div ref={cardsRef} className="lg:col-span-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {CLIENT_DATA.about.features.map((feat, i) => (
                <div
                  key={i}
                  className="about-interactive-card p-7 bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] transition-all group"
                  data-cursor="DISCOVER"
                >
                  <span className="material-symbols-outlined text-[#8c4830] text-[28px] mb-3 group-hover:scale-110 transition-transform">
                    {i === 0 ? "draw" : "engineering"}
                  </span>
                  <h3 className="font-display text-lg uppercase font-bold text-[#1c1917] mb-2 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#57534e] leading-relaxed font-sans">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* 4 Pillars with Swiss Grid styling */}
            <div className="about-interactive-card p-6 sm:p-8 bg-[#ffffff] border border-[#e6e2dc]">
              <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#f0ebe3]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-bold">
                  CORE ARCHITECTURAL PRINCIPLES
                </span>
                <span className="font-mono text-[10px] text-[#78716c]">BENGALURU</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {CLIENT_DATA.about.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#8c4830] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#1c1917] uppercase tracking-wide font-sans">
                        {pillar.title}
                      </div>
                      <div className="text-[11px] text-[#78716c] mt-0.5 font-sans leading-normal">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

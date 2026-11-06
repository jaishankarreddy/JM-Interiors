import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".process-step-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                How We Work
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Execution Methodology
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl uppercase font-extrabold text-[#1c1917] leading-[0.98] tracking-tight">
              OUR EASY <br />
              <span className="text-[#8c4830]">WORKING STEPS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed font-sans">
            Every step is designed to deliver clarity, creative precision, and timely execution from initial consultation to final handover.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e6e2dc]">
          {CLIENT_DATA.workingSteps.map((step) => (
            <div
              key={step.step}
              className="process-step-box border-r border-b border-[#e6e2dc] p-8 bg-[#ffffff] flex flex-col justify-between group hover:bg-[#faf8f5] transition-colors"
              data-cursor="STEP"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#f0ebe3]">
                  <span className="font-display text-4xl text-[#8c4830] font-extrabold tracking-tight">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#78716c] bg-[#f5f2ed] px-2 py-0.5 border border-[#e8e2d8]">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl uppercase font-bold text-[#1c1917] mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0ebe3] flex items-center justify-between font-mono text-[11px] text-[#78716c]">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-[#8c4830]">verified</span>
                  <span>Verified Milestone</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 border border-[#e6e2dc] bg-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-bold mb-1">
              START WITH STEP 01 / VISIT PROJECT
            </div>
            <p className="font-display text-2xl uppercase font-bold text-[#1c1917] tracking-tight">
              SCHEDULE A COMPLIMENTARY ON-SITE REQUIREMENT ASSESSMENT.
            </p>
          </div>
          <Button
            onClick={onOpenConsultation}
            size="lg"
            className="rounded-xs shrink-0 font-mono text-xs tracking-wider"
            data-cursor="AUDIT"
          >
            <span>Schedule Site Visit</span>
            <span className="material-symbols-outlined text-[16px] ml-2">arrow_forward</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

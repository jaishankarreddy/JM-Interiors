import { PROCESS_STEPS } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  return (
    <section id="process" className="py-24 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay">Methodology</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Chronological Execution Protocol
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Predictable execution, <span className="text-[#8c4830] italic">zero surprises.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            Eliminating the traditional construction anxiety through a milestone-driven process backed by digital weekly reporting and strict delivery windows.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e6e2dc]">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="border-r border-b border-[#e6e2dc] p-8 bg-[#ffffff] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#f0ebe3]">
                  <span className="font-serif text-4xl text-[#8c4830] font-normal">
                    {step.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#78716c] bg-[#f5f2ed] px-2 py-0.5 border border-[#e8e2d8]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#1c1917] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0ebe3] flex items-center justify-between font-mono text-[11px] text-[#78716c]">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#8c4830]" />
                  Sign-off Milestone
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 border border-[#e6e2dc] bg-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-semibold mb-1">
              Step 01 / Complimentary Site Audit
            </div>
            <p className="font-serif text-2xl text-[#1c1917]">
              Request our principal architect to inspect your site in Bengaluru.
            </p>
          </div>
          <Button onClick={onOpenConsultation} size="lg" className="rounded-xs shrink-0">
            <span>Schedule Site Visit</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

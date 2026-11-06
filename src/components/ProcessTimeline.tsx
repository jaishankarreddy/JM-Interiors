import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  return (
    <section id="process" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
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
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Our Easy <span className="text-[#8c4830] italic">Working Steps.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            Every step is designed to deliver clarity, creative precision, and timely execution from initial consultation to final handover.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e6e2dc]">
          {CLIENT_DATA.workingSteps.map((step) => (
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
                    Phase {step.step}
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
                  <span className="material-symbols-outlined text-[16px] text-[#8c4830]">verified</span>
                  <span>Structured Milestone</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 border border-[#e6e2dc] bg-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-semibold mb-1">
              Start With Step 01 / Visit Project
            </div>
            <p className="font-serif text-2xl text-[#1c1917]">
              Schedule a complimentary on-site requirement assessment in Bengaluru.
            </p>
          </div>
          <Button onClick={onOpenConsultation} size="lg" className="rounded-xs shrink-0 font-mono text-xs">
            <span>Schedule Site Visit</span>
            <span className="material-symbols-outlined text-[16px] ml-2">arrow_forward</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

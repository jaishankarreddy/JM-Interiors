import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  return (
    <section id="process" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                How We Work
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Execution Methodology
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] tracking-tight leading-tight">
              Our Easy <span className="text-[#8c4830]">Working Steps.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
            Every step is designed to deliver clarity, creative precision, and timely execution from initial consultation to final handover.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#e6e2dc]">
          {CLIENT_DATA.workingSteps.map((step) => (
            <div
              key={step.step}
              className="border-r border-b border-[#e6e2dc] p-6 sm:p-8 bg-[#ffffff] flex flex-col justify-between group hover:bg-[#faf8f5] transition-colors"
              data-cursor="STEP"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#f0ebe3]">
                  <span className="text-3xl sm:text-4xl text-[#8c4830] font-bold tracking-tight font-sans">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#78716c] bg-[#f5f2ed] px-2 py-0.5 border border-[#e8e2d8] font-semibold">
                    Phase {step.step}
                  </span>
                </div>

                <h3 className="text-xl uppercase font-bold text-[#1c1917] mb-2 font-sans tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebe3] flex items-center justify-between text-xs text-[#78716c]">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="material-symbols-outlined text-[15px] text-[#8c4830]">verified</span>
                  <span>Verified Milestone</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 sm:p-8 border border-[#e6e2dc] bg-[#ffffff] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-[#8c4830] font-bold mb-1">
              Start With Step 01 / Visit Project
            </div>
            <p className="font-sans text-xl sm:text-2xl uppercase font-bold text-[#1c1917] tracking-tight">
              Schedule a complimentary on-site requirement assessment.
            </p>
          </div>
          <Button
            onClick={onOpenConsultation}
            size="lg"
            className="rounded-xs shrink-0 font-sans text-xs font-semibold tracking-wider h-11 px-6"
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

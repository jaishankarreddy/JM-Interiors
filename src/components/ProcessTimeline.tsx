import { PROCESS_STEPS } from "@/data/site-data";
import { GitCommit, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface ProcessTimelineProps {
  onOpenConsultation: () => void;
}

export function ProcessTimeline({ onOpenConsultation }: ProcessTimelineProps) {
  return (
    <section id="process" className="py-24 px-5 md:px-8 bg-[#0e0d0c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
            <GitCommit className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The 4-Stage Execution Blueprint</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
            How We Build <span className="text-[#d4af37] italic">Without Hassle.</span>
          </h2>
          <p className="mt-4 text-[#a8a29a] text-sm sm:text-base leading-relaxed">
            Eliminating the traditional construction anxiety. A milestone-driven process with digital weekly tracking and zero surprise expenses.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-3xl p-7 bg-[#141312] border border-[#262422] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step number & duration */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#211f1d]">
                  <span className="font-serif text-4xl font-bold text-[#c5a880]/40 group-hover:text-[#d4af37] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1e1c1a] border border-[#332f2b] text-[#d4af37] font-semibold">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#f5f0ea] group-hover:text-[#d4af37] transition-colors mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#8c857b] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[#1f1d1b] flex items-center justify-between text-xs text-[#524d47]">
                <span className="flex items-center gap-1.5 text-[#a8a29a]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  Verified Milestone
                </span>
                <span className="font-mono">Stage {idx + 1}/4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#1c1a18] via-[#24211e] to-[#1c1a18] border border-[#c5a880]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="font-serif text-2xl text-[#f5f0ea]">
              Ready to start with Step 01?
            </h4>
            <p className="text-xs sm:text-sm text-[#a8a29a] mt-1">
              Book a zero-obligation on-site structural audit with our principal design engineer in Bengaluru.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#d4af37]/25 flex items-center gap-2 cursor-pointer shrink-0 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Schedule Free Site Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

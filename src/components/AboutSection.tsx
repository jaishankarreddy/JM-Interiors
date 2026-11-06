import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                {CLIENT_DATA.about.eyebrow}
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Bangalore, Karnataka
              </span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] leading-tight tracking-tight">
              Your Professional <br />
              <span className="text-[#8c4830]">Architecture Partner.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-[#57534e] leading-relaxed font-sans max-w-lg font-normal">
              {CLIENT_DATA.about.body}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                onClick={onOpenConsultation}
                size="lg"
                className="rounded-xs font-sans text-xs font-semibold tracking-wider h-11 px-6"
                data-cursor="CONSULT"
              >
                <span>Book Free Consultation</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>
            </div>
          </div>

          {/* Right Feature Boxes & Principles */}
          <div className="lg:col-span-6 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {CLIENT_DATA.about.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] transition-all group"
                  data-cursor="DISCOVER"
                >
                  <span className="material-symbols-outlined text-[#8c4830] text-[24px] mb-2.5">
                    {i === 0 ? "draw" : "engineering"}
                  </span>
                  <h3 className="font-sans text-base uppercase font-bold text-[#1c1917] mb-1.5 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#57534e] leading-relaxed font-sans">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* Core Architectural Principles */}
            <div className="p-6 bg-[#ffffff] border border-[#e6e2dc]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#f0ebe3]">
                <span className="text-xs uppercase tracking-wider text-[#8c4830] font-bold">
                  Core Architectural Principles
                </span>
                <span className="text-[11px] text-[#78716c] font-medium">Bangalore</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {CLIENT_DATA.about.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#8c4830] text-[16px] shrink-0 mt-0.5">
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

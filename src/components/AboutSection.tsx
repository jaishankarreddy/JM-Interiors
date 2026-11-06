import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export function AboutSection({ onOpenConsultation }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                {CLIENT_DATA.about.eyebrow}
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Bangalore, Karnataka
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Your Professional <span className="text-[#8c4830] italic">Architecture Partner.</span>
            </h2>
            <p className="mt-6 text-base text-[#57534e] leading-relaxed">
              {CLIENT_DATA.about.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button onClick={onOpenConsultation} size="lg" className="rounded-xs font-mono text-xs">
                <span>Book Free Consultation</span>
                <span className="material-symbols-outlined text-[16px] ml-1.5">arrow_forward</span>
              </Button>
            </div>
          </div>

          {/* Right Feature Boxes & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {CLIENT_DATA.about.features.map((feat, i) => (
                <div key={i} className="p-6 bg-[#ffffff] border border-[#e6e2dc]">
                  <span className="material-symbols-outlined text-[#8c4830] text-[28px] mb-3">
                    {i === 0 ? "draw" : "engineering"}
                  </span>
                  <h3 className="font-serif text-xl text-[#1c1917] mb-2">{feat.title}</h3>
                  <p className="text-xs text-[#57534e] leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* 4 Pillars */}
            <div className="p-6 sm:p-8 bg-[#ffffff] border border-[#e6e2dc]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8c4830] block mb-4">
                Core Architectural Principles
              </span>
              <div className="grid sm:grid-cols-2 gap-4">
                {CLIENT_DATA.about.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#8c4830] text-[18px] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-[#1c1917]">{pillar.title}</div>
                      <div className="text-[11px] text-[#78716c] mt-0.5">{pillar.desc}</div>
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

import { SERVICES } from "@/data/site-data";
import { ArrowUpRight, Check, Compass, Layers, Sparkles } from "lucide-react";

interface BentoServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export function BentoServices({ onSelectService, onOpenConsultation }: BentoServicesProps) {
  return (
    <section id="services" className="py-24 px-5 md:px-8 bg-[#0c0b0a] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
              <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Comprehensive Studio Capabilities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
              Architectural Vision, <span className="text-[#d4af37] italic">End-to-End Craft.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#a8a29a] leading-relaxed">
            From modern commercial headquarters on Outer Ring Road to bespoke penthouses in Koramangala and Indiranagar — explore our specialized turnkey divisions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => {
            const isLarge = index === 0; // Office Interiors takes prominence
            return (
              <div
                key={srv.id}
                className={`group relative rounded-3xl overflow-hidden border border-[#262422] hover:border-[#c5a880]/50 transition-all duration-500 bg-[#141312] flex flex-col justify-between ${
                  isLarge ? "lg:col-span-2 md:col-span-2" : ""
                }`}
              >
                {/* Image Banner */}
                <div className={`relative overflow-hidden ${isLarge ? "h-64 sm:h-80" : "h-56"}`}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0c0b0a]/80 text-[#d4af37] border border-[#d4af37]/40 backdrop-blur-md">
                      {srv.badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0ea] group-hover:text-[#d4af37] transition-colors flex items-center justify-between">
                      <span>{srv.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#c5a880] opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                    </h3>
                    <p className="mt-3 text-sm text-[#a8a29a] leading-relaxed">
                      {srv.description}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-[#23211f]">
                      {srv.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#d8d2ca]">
                          <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer action */}
                  <div className="mt-6 pt-4 flex items-center justify-between">
                    <button
                      onClick={onOpenConsultation}
                      className="text-xs uppercase tracking-wider font-semibold text-[#c5a880] hover:text-[#d4af37] flex items-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Inquire About This Service</span>
                    </button>
                    <span className="text-xs text-[#524d47] font-mono">0{index + 1}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

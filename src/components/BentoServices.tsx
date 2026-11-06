import { SERVICES } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Check } from "lucide-react";

interface BentoServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export function BentoServices({ onOpenConsultation }: BentoServicesProps) {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay">Capabilities</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Architecture & Production
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Integrated divisions, <span className="text-[#8c4830] italic">one accountability.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            By unifying architectural drawings with our own joinery manufacturing and on-site civil crews, we prevent the subcontractor blame-game typical of Indian interior fitouts.
          </p>
        </div>

        {/* Editorial Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#e6e2dc]">
          {SERVICES.map((srv, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={srv.id}
                className={`border-r border-b border-[#e6e2dc] p-8 bg-[#ffffff] hover:bg-[#faf8f5] transition-colors flex flex-col justify-between group ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#f0ebe3]">
                    <span className="font-mono text-xs text-[#8c4830] uppercase tracking-wider">
                      0{index + 1} / DIVISION
                    </span>
                    <span className="text-[11px] font-mono uppercase text-[#78716c] bg-[#f5f2ed] px-2 py-0.5 border border-[#e8e2d8]">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Image preview */}
                  <div className={`overflow-hidden border border-[#e6e2dc] mb-6 ${isFeatured ? "h-64 sm:h-80" : "h-52"}`}>
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917] group-hover:text-[#8c4830] transition-colors flex items-center justify-between">
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#a8a29e] group-hover:text-[#8c4830] transition-colors" />
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                    {srv.description}
                  </p>

                  {/* Bullet specifications */}
                  <div className="mt-6 pt-5 border-t border-[#f0ebe3] space-y-2">
                    {srv.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#44403c]">
                        <Check className="w-3.5 h-3.5 text-[#8c4830] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f0ebe3] flex items-center justify-between">
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs uppercase tracking-widest font-semibold text-[#1c1917] hover:text-[#8c4830] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inquire For Site Brief</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                  <span className="font-mono text-[10px] text-[#a8a29e]">BENGALURU</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

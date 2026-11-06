import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";

interface BentoServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export function BentoServices({ onOpenConsultation }: BentoServicesProps) {
  return (
    <section id="services" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                Our Services
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Core Divisions
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] tracking-tight leading-tight">
              Architecture Services <span className="text-[#8c4830]">at a Glance.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
            Each service is backed by modern architecture firms in Bangalore, ensuring quality, style, and efficiency.
          </p>
        </div>

        {/* 4 Core Services Grid - Rock-Solid Always Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CLIENT_DATA.services.map((srv, index) => (
            <div
              key={srv.id}
              className="border border-[#e6e2dc] bg-[#faf8f5] hover:bg-[#ffffff] hover:border-[#1c1917] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group"
              data-cursor="INQUIRE"
            >
              <div>
                {/* Top index */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#e6e2dc]">
                  <span className="text-xs text-[#8c4830] uppercase tracking-wider font-bold">
                    0{index + 1} / DIVISION
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#78716c] bg-[#ffffff] px-2.5 py-0.5 border border-[#e6e2dc] font-semibold">
                    {srv.category === "commercial" ? "Commercial Fitout" : "Residential Living"}
                  </span>
                </div>

                {/* Service Image */}
                <div className="overflow-hidden border border-[#e6e2dc] mb-5 h-56 sm:h-64 bg-[#f0ebe3]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="text-xs text-[#8c4830] mb-1 font-semibold uppercase tracking-wider">
                  {srv.subtitle}
                </div>
                <h3 className="font-sans text-2xl font-bold uppercase text-[#1c1917] group-hover:text-[#8c4830] transition-colors tracking-tight">
                  {srv.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
                  {srv.description}
                </p>

                {/* Features */}
                <div className="mt-5 pt-4 border-t border-[#e6e2dc] space-y-1.5">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#44403c] font-sans">
                      <span className="material-symbols-outlined text-[15px] text-[#8c4830] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e6e2dc] flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs uppercase tracking-wider font-semibold text-[#1c1917] hover:text-[#8c4830] flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire For This Service</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </button>
                <span className="text-[10px] font-mono text-[#78716c]">BANGALORE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner as on jandminteriors.in */}
        <div className="mt-10 p-6 sm:p-8 border border-[#e6e2dc] bg-[#faf8f5] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#8c4830] font-bold">
              Expert Consultation
            </span>
            <p className="font-sans text-xl sm:text-2xl uppercase font-bold text-[#1c1917] mt-1 tracking-tight">
              Do You Want To Contact Our Experts?
            </p>
            <p className="text-xs text-[#78716c] mt-0.5 font-sans">
              Call our team directly or book a free site assessment today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${CLIENT_DATA.contact.rawPhone}`}
              className="px-5 py-2.5 border border-[#1c1917] bg-[#1c1917] text-[#faf8f5] text-xs uppercase tracking-wider font-semibold hover:bg-[#322e2b] transition-colors flex items-center gap-1.5"
              data-cursor="CALL"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>{CLIENT_DATA.contact.phone}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 border border-[#d6d0c7] hover:border-[#1c1917] text-xs uppercase tracking-wider font-semibold text-[#1c1917] transition-colors cursor-pointer"
              data-cursor="INQUIRE"
            >
              Click Here To Inquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

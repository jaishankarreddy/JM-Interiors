import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";

interface BentoServicesProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export function BentoServices({ onOpenConsultation }: BentoServicesProps) {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                Our Services
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Architecture Services
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              See Our Architecture <span className="text-[#8c4830] italic">Services at a Glance.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            Each service is backed by modern architecture firms in Bangalore, ensuring quality, style, and efficiency.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_DATA.services.map((srv, index) => (
            <div
              key={srv.id}
              className="border border-[#e6e2dc] bg-[#faf8f5] hover:bg-[#ffffff] hover:border-[#1c1917] transition-all duration-300 p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top index */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e6e2dc]">
                  <span className="font-mono text-xs text-[#8c4830] uppercase tracking-wider">
                    0{index + 1} / SERVICE
                  </span>
                  <span className="text-[11px] font-mono uppercase text-[#78716c] bg-[#ffffff] px-2.5 py-0.5 border border-[#e6e2dc]">
                    {srv.category === "commercial" ? "Commercial" : "Residential"}
                  </span>
                </div>

                {/* Image */}
                <div className="overflow-hidden border border-[#e6e2dc] mb-6 h-60 bg-[#f0ebe3]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="font-mono text-xs text-[#8c4830] mb-1">{srv.subtitle}</div>
                <h3 className="font-serif text-3xl text-[#1c1917] group-hover:text-[#8c4830] transition-colors">
                  {srv.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#57534e] leading-relaxed">
                  {srv.description}
                </p>

                {/* Features */}
                <div className="mt-6 pt-5 border-t border-[#e6e2dc] space-y-2">
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="material-symbols-outlined text-[16px] text-[#8c4830] shrink-0 mt-0.5">
                        check
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#e6e2dc] flex items-center justify-between">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs uppercase tracking-widest font-semibold text-[#1c1917] hover:text-[#8c4830] flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire For This Service</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </button>
                <span className="font-mono text-[10px] text-[#78716c]">BANGALORE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner as seen on jandminteriors.in */}
        <div className="mt-12 p-8 border border-[#e6e2dc] bg-[#faf8f5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-semibold">
              Expert Consultation
            </span>
            <p className="font-serif text-2xl text-[#1c1917] mt-1">
              Do You Want To Contact Our Experts?
            </p>
            <p className="text-xs text-[#78716c] mt-0.5">
              Call our team directly or book a free site assessment today.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={`tel:${CLIENT_DATA.contact.rawPhone}`}
              className="px-6 py-3 border border-[#1c1917] bg-[#1c1917] text-[#faf8f5] text-xs font-mono uppercase tracking-wider hover:bg-[#322e2b] transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              <span>{CLIENT_DATA.contact.phone}</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 border border-[#d6d0c7] hover:border-[#1c1917] text-xs font-mono uppercase tracking-wider text-[#1c1917] transition-colors cursor-pointer"
            >
              Click Here To Inquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";

export function TestimonialMarquee() {
  const brandPartners = [
    "BLUM AUSTRIA",
    "HETTICH GERMANY",
    "SAINT-GOBAIN GLASS",
    "HAFELE HARDWARE",
    "GREENLAM LAMINATES",
    "CENTURY MARINE PLY",
    "ASIAN PAINTS ROYALE",
    "CAESARSTONE QUARTZ",
    "MERINO LAMINATES",
    "KOHLER SANITARYWARE",
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#e6e2dc] overflow-hidden">
      {/* Brand Specifications Ticker */}
      <div className="mb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-5 flex items-center justify-between text-xs font-sans text-[#78716c] uppercase tracking-wider font-semibold">
          <span>01 / Material & Hardware Specifications</span>
          <span>Verified International Partners</span>
        </div>

        <div className="w-full border-y border-[#e6e2dc] bg-[#ffffff] py-4 overflow-hidden mask-edge">
          <div className="flex animate-marquee gap-12 items-center text-xs font-sans font-bold tracking-widest text-[#57534e] uppercase">
            {brandPartners.concat(brandPartners).map((partner, idx) => (
              <span key={idx} className="flex items-center gap-12">
                <span>{partner}</span>
                <span className="text-[#a8a29e] font-normal">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Exact Client Testimonials from jandminteriors.in */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                Testimonials
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Client Reviews
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] tracking-tight leading-tight">
              What Our <span className="text-[#8c4830]">Client's Say?</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
            We value our clients' feedback, showcasing genuine experiences and heartfelt stories that reflect our commitment to quality, creativity, and lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#ffffff] border border-[#e6e2dc] flex flex-col justify-between group hover:border-[#1c1917] transition-all"
              data-cursor="REVIEW"
            >
              <div>
                <span className="material-symbols-outlined text-[#8c4830] text-[28px] mb-3">
                  format_quote
                </span>

                <p className="font-sans text-base text-[#1c1917] leading-relaxed font-medium">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0ebe3]">
                <div className="font-sans text-base uppercase font-bold text-[#1c1917] tracking-tight">{t.author}</div>
                <div className="text-xs text-[#78716c] font-sans mt-0.5">{t.role}</div>
                {t.company && (
                  <div className="text-[11px] text-[#8c4830] mt-0.5 font-bold uppercase font-sans">{t.company}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

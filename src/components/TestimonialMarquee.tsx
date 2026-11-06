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
    <section className="py-24 bg-[#FAF8F5] border-b border-[#e6e2dc] overflow-hidden">
      {/* Brand Specifications Ticker */}
      <div className="mb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-6 flex items-center justify-between text-xs font-mono text-[#78716c] uppercase tracking-wider">
          <span>01 / Material & Hardware Partners</span>
          <span>Certified Specifications</span>
        </div>

        <div className="w-full border-y border-[#e6e2dc] bg-[#ffffff] py-4 overflow-hidden mask-edge">
          <div className="flex animate-marquee gap-12 items-center text-xs font-mono font-medium tracking-widest text-[#57534e] uppercase">
            {brandPartners.concat(brandPartners).map((partner, idx) => (
              <span key={idx} className="flex items-center gap-12">
                <span>{partner}</span>
                <span className="text-[#a8a29e]">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Exact Client Testimonials from jandminteriors.in */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                Testimonials
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Client Reviews
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              What Our <span className="text-[#8c4830] italic">Client's Say?</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            We value our clients' feedback, showcasing genuine experiences and heartfelt stories that reflect our commitment to quality, creativity, and lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CLIENT_DATA.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#ffffff] border border-[#e6e2dc] flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-[#8c4830] text-[32px] mb-4">
                  format_quote
                </span>

                <p className="font-serif text-xl text-[#1c1917] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0ebe3]">
                <div className="font-serif text-lg text-[#1c1917] font-medium">{t.author}</div>
                <div className="text-xs text-[#78716c] font-sans">{t.role}</div>
                {t.company && (
                  <div className="text-[11px] font-mono text-[#8c4830] mt-0.5">{t.company}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { TESTIMONIALS } from "@/data/site-data";
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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6 flex items-center justify-between text-xs font-mono text-[#78716c] uppercase tracking-wider">
          <span>01 / Material Supply Partners</span>
          <span>Verified International Specifications</span>
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

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay">Testimonials</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Verified Client Accounts
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Words from <span className="text-[#8c4830] italic">Bangalore homeowners.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#ffffff] border border-[#e6e2dc] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#8c4830] uppercase tracking-wider block mb-4">
                  0{idx + 1} / {t.highlight}
                </span>

                <p className="font-serif text-lg sm:text-xl text-[#1c1917] leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#f0ebe3]">
                <div className="font-serif text-lg text-[#1c1917] font-medium">{t.name}</div>
                <div className="text-xs text-[#78716c] font-sans">{t.role}</div>
                <div className="text-[11px] font-mono text-[#a8a29e] mt-1">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

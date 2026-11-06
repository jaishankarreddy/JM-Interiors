import { TESTIMONIALS } from "@/data/site-data";
import { Star, Quote, Award } from "lucide-react";

export function TestimonialMarquee() {
  const brandPartners = [
    "BLUM AUSTRIA",
    "HETTICH GERMANY",
    "SAINT-GOBAIN",
    "HAFELE",
    "GREENLAM LAMINATES",
    "CENTURY PLY",
    "ASIAN PAINTS ROYALE",
    "CAESARSTONE QUARTZ",
    "MERINO LAMINATES",
    "KOHLER SANITARYWARE",
  ];

  return (
    <section className="py-24 bg-[#0c0b0a] border-y border-[#262422] overflow-hidden">
      {/* Brands ticker */}
      <div className="mb-20">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-[#78726a] mb-8 font-semibold">
          Specified With Global Hardware & Architectural Materials
        </p>

        <div className="relative w-full overflow-hidden flex whitespace-nowrap mask-gradient">
          <div className="flex animate-marquee gap-12 items-center text-xs sm:text-sm font-semibold tracking-widest text-[#5c564f] uppercase">
            {brandPartners.concat(brandPartners).map((partner, idx) => (
              <span key={idx} className="flex items-center gap-12 hover:text-[#c5a880] transition-colors">
                <span>{partner}</span>
                <span className="text-[#38342e] text-xs">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
            <Quote className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
            Trusted by Bangalore's <span className="text-[#d4af37] italic">Visionaries.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 bg-[#141312] border border-[#262422] hover:border-[#c5a880]/40 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating stars & badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-[#d4af37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#c5a880] bg-[#1f1d1a] border border-[#36322b] px-2.5 py-0.5 rounded-full font-semibold">
                    {t.highlight}
                  </span>
                </div>

                <p className="text-sm text-[#b8b0a5] leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#211f1d]">
                <h4 className="font-serif text-lg text-[#f5f0ea] font-medium">{t.name}</h4>
                <p className="text-xs text-[#78726a]">{t.role}</p>
                <p className="text-[11px] text-[#c5a880] mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

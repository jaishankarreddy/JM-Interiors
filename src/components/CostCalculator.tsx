import { useState } from "react";
import confetti from "canvas-confetti";
import { Calculator, CheckCircle2, Sparkles, MessageSquare, ArrowRight, Shield, Clock } from "lucide-react";
import { BRAND_INFO } from "@/data/site-data";
import { formatINR } from "@/lib/utils";

type PropertyType = "2bhk" | "3bhk" | "villa" | "office";
type FinishTier = "signature" | "avant-garde" | "couture";
type ScopeType = "turnkey" | "modular" | "renovation";

export function CostCalculator() {
  const [property, setProperty] = useState<PropertyType>("3bhk");
  const [scope, setScope] = useState<ScopeType>("turnkey");
  const [finish, setFinish] = useState<FinishTier>("avant-garde");
  const [approxSqFt, setApproxSqFt] = useState<number>(1550);
  const [showCelebration, setShowCelebration] = useState(false);

  // Realistic interior cost model for Bangalore market
  const baseRates: Record<PropertyType, { minSqFt: number; maxSqFt: number; defaultSqFt: number; label: string }> = {
    "2bhk": { minSqFt: 800, maxSqFt: 1300, defaultSqFt: 1050, label: "2 BHK Luxury Apartment" },
    "3bhk": { minSqFt: 1250, maxSqFt: 2200, defaultSqFt: 1650, label: "3 BHK Luxury Residence" },
    villa: { minSqFt: 2200, maxSqFt: 5500, defaultSqFt: 3200, label: "4 BHK / Independent Villa" },
    office: { minSqFt: 1200, maxSqFt: 10000, defaultSqFt: 3500, label: "Commercial Office / Workspace" },
  };

  const finishMultiplier: Record<FinishTier, { mult: number; name: string; subtitle: string }> = {
    signature: { mult: 1.0, name: "Signature Modern", subtitle: "BWR Marine Ply + Scratch-resistant Matte Laminates + Hettich" },
    "avant-garde": { mult: 1.35, name: "Avant-Garde Luxury", subtitle: "Anti-Fingerprint Acrylic + Fluted Oak + Blum Soft-Close" },
    couture: { mult: 1.75, name: "Haute Couture Bespoke", subtitle: "Natural Smoked Veneer + PU Lacquer + Italian Quartz + Motorized Blum" },
  };

  const scopeRates: Record<ScopeType, number> = {
    turnkey: 1750, // Rs per sqft approx
    modular: 1150,
    renovation: 1450,
  };

  const ratePerSqFt = Math.round(scopeRates[scope] * finishMultiplier[finish].mult);
  const calculatedCost = Math.round(approxSqFt * ratePerSqFt);
  const minCost = Math.round(calculatedCost * 0.92);
  const maxCost = Math.round(calculatedCost * 1.08);

  const getTimeline = () => {
    if (scope === "modular") return "35 – 40 Working Days";
    if (property === "office") return "30 – 45 Days (Fast-Tracked)";
    return "45 Working Days Guaranteed";
  };

  const handleCelebrate = () => {
    setShowCelebration(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#D4AF37", "#C5A880", "#FFFFFF", "#B38E2D"],
    });
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello J&M Interiors! I used your online cost estimator.\n\n` +
      `*Project Type:* ${baseRates[property].label}\n` +
      `*Estimated Area:* ${approxSqFt} sq.ft\n` +
      `*Scope:* ${scope.toUpperCase()}\n` +
      `*Finish Tier:* ${finishMultiplier[finish].name}\n` +
      `*Estimated Range:* ${formatINR(minCost)} - ${formatINR(maxCost)}\n\n` +
      `I would like to schedule a site inspection in Bengaluru.`
  );

  return (
    <section id="calculator" className="py-24 px-5 md:px-8 bg-[#0c0b0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
            Transparent Pricing. <span className="text-[#d4af37] italic">Zero Hidden Extras.</span>
          </h2>
          <p className="mt-4 text-[#a8a29a] text-sm sm:text-base leading-relaxed">
            Calculate your approximate interior investment tailored specifically for Bengaluru real estate. Backed by our transparent itemized Bill of Quantities (BOQ).
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#141312] border border-[#2b2824] rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            {/* Step 1: Property Type */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-[#a8a29a] font-semibold block mb-3">
                1. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(Object.keys(baseRates) as PropertyType[]).map((key) => {
                  const isSelected = property === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setProperty(key);
                        setApproxSqFt(baseRates[key].defaultSqFt);
                      }}
                      className={`py-3 px-3 rounded-2xl text-xs font-semibold text-center transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-gradient-to-b from-[#2a2622] to-[#1c1a18] border-[#d4af37] text-[#d4af37] shadow-lg shadow-[#d4af37]/10"
                          : "bg-[#1c1a18]/60 border-[#2b2824] text-[#a8a29a] hover:border-[#423d38] hover:text-[#f5f0ea]"
                      }`}
                    >
                      {key.toUpperCase()}
                      <span className="block text-[10px] font-normal text-[#78726a] mt-0.5">
                        {key === "2bhk" && "800-1200 sft"}
                        {key === "3bhk" && "1300-2000 sft"}
                        {key === "villa" && "2200-5000 sft"}
                        {key === "office" && "Commercial"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Approximate Area Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest text-[#a8a29a] font-semibold">
                  2. Approximate Carpet Area
                </label>
                <span className="text-sm font-semibold text-[#d4af37] font-serif">
                  {approxSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min={baseRates[property].minSqFt}
                max={baseRates[property].maxSqFt}
                step={50}
                value={approxSqFt}
                onChange={(e) => setApproxSqFt(Number(e.target.value))}
                className="w-full h-2 bg-[#262422] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
              />
              <div className="flex justify-between text-[11px] text-[#6d6760] mt-1.5 font-mono">
                <span>{baseRates[property].minSqFt} sq.ft</span>
                <span>{baseRates[property].maxSqFt} sq.ft</span>
              </div>
            </div>

            {/* Step 3: Scope of Work */}
            <div className="mb-8">
              <label className="text-xs uppercase tracking-widest text-[#a8a29a] font-semibold block mb-3">
                3. Scope of Execution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "turnkey", label: "Full Turnkey", desc: "Civil + False Ceiling + Electrical + Woodwork" },
                  { id: "modular", label: "Modular Woodwork", desc: "Kitchens + Wardrobes + TV & Storage Units" },
                  { id: "renovation", label: "Revamp & Restructure", desc: "Partial Remodel + Custom Upgrades" },
                ].map((s) => {
                  const isSelected = scope === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setScope(s.id as ScopeType)}
                      className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#221f1c] border-[#d4af37] shadow-md shadow-[#d4af37]/10"
                          : "bg-[#181615] border-[#2b2824] hover:border-[#3e3934]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-semibold ${isSelected ? "text-[#d4af37]" : "text-[#f5f0ea]"}`}>
                          {s.label}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </div>
                      <p className="text-[11px] text-[#8c857b] leading-tight">{s.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Finish Grade */}
            <div>
              <label className="text-xs uppercase tracking-widest text-[#a8a29a] font-semibold block mb-3">
                4. Material & Hardware Finish Tier
              </label>
              <div className="flex flex-col gap-2.5">
                {(Object.keys(finishMultiplier) as FinishTier[]).map((tierKey) => {
                  const item = finishMultiplier[tierKey];
                  const isSelected = finish === tierKey;
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setFinish(tierKey)}
                      className={`p-3.5 rounded-2xl text-left flex items-start justify-between border transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#24211e] border-[#d4af37] shadow-md shadow-[#d4af37]/10"
                          : "bg-[#181615] border-[#2b2824] hover:border-[#3a3530]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${isSelected ? "text-[#d4af37]" : "text-[#f5f0ea]"}`}>
                            {item.name}
                          </span>
                          {tierKey === "avant-garde" && (
                            <span className="text-[9px] uppercase tracking-wider bg-[#d4af37]/20 text-[#d4af37] px-2 py-0.5 rounded-full font-semibold">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#8c857b] mt-0.5">{item.subtitle}</p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center ${
                          isSelected ? "border-[#d4af37] bg-[#d4af37]" : "border-[#4a443e]"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#0c0b0a]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1c1a18] to-[#121110] border border-[#c5a880]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-5 border-b border-[#2b2824]">
              <span className="text-xs uppercase tracking-widest text-[#a8a29a] font-semibold">
                Investment Estimate
              </span>
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full font-medium">
                Milestone-Backed
              </span>
            </div>

            <div className="my-7">
              <span className="text-xs text-[#8c857b] block mb-1">Estimated Budget Range:</span>
              <div className="font-serif text-3xl sm:text-4xl text-[#f5f0ea] font-medium leading-none">
                <span className="text-[#d4af37]">{formatINR(minCost)}</span>
                <span className="text-xl sm:text-2xl text-[#78726a] mx-2">to</span>
                <span>{formatINR(maxCost)}</span>
              </div>
              <p className="text-[11px] text-[#a8a29a] mt-2">
                *Approx. ₹{ratePerSqFt} per sq.ft based on current {finishMultiplier[finish].name} material specifications.
              </p>
            </div>

            {/* Timeline & Warranty Perks */}
            <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#2b2824] my-6">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#f5f0ea]">{getTimeline()}</div>
                  <div className="text-[10px] text-[#8c857b]">Execution Timeline</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#d4af37] mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-[#f5f0ea]">10-Year Warranty</div>
                  <div className="text-[10px] text-[#8c857b]">Hardware & Woodwork</div>
                </div>
              </div>
            </div>

            {/* Estimated Breakdown items */}
            <div className="space-y-2 mb-8">
              <div className="text-xs font-semibold text-[#f5f0ea] mb-2 flex items-center justify-between">
                <span>Included in this estimation:</span>
                <span className="text-[11px] text-[#d4af37]">100% Itemized BOQ</span>
              </div>
              {[
                "Complimentary 3D photorealistic architectural renders & VR walkthrough",
                "Factory-finished modular carcasses in BWR marine plywood",
                "Premium soft-close hinges & telescopic channel runners",
                "On-site project engineer supervision & digital weekly progress reports",
                "Post-installation white-glove cleaning & 10-year warranty certificate",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#b8b0a5]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCelebrate}
                className="w-full py-3 rounded-full bg-[#24211e] hover:bg-[#2e2a26] text-xs font-medium text-[#d8d2ca] border border-[#c5a880]/20 hover:border-[#c5a880]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Lock In Current Pricing for Bangalore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

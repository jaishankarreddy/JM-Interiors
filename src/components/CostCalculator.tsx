import { useState } from "react";
import confetti from "canvas-confetti";
import { formatINR } from "@/lib/utils";
import { BRAND_INFO } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

type PropertyType = "2bhk" | "3bhk" | "villa" | "office";
type FinishTier = "signature" | "avant-garde" | "bespoke";
type ScopeType = "turnkey" | "modular" | "renovation";

export function CostCalculator() {
  const [property, setProperty] = useState<PropertyType>("3bhk");
  const [scope, setScope] = useState<ScopeType>("turnkey");
  const [finish, setFinish] = useState<FinishTier>("avant-garde");
  const [approxSqFt, setApproxSqFt] = useState<number>(1650);

  const configs: Record<PropertyType, { min: number; max: number; def: number; label: string; desc: string }> = {
    "2bhk": { min: 800, max: 1300, def: 1050, label: "2 BHK Apartment", desc: "Compact residential" },
    "3bhk": { min: 1250, max: 2200, def: 1650, label: "3 BHK Residence", desc: "Family living" },
    villa: { min: 2200, max: 5500, def: 3200, label: "4 BHK / Villa", desc: "Independent home" },
    office: { min: 1200, max: 10000, def: 3500, label: "Commercial Office", desc: "Workplace hub" },
  };

  const finishTiers: Record<FinishTier, { mult: number; title: string; subtitle: string; hardware: string }> = {
    signature: {
      mult: 1.0,
      title: "Signature Architecture",
      subtitle: "BWR Marine Ply + Scratch-Resistant Matte Laminates",
      hardware: "Hettich soft-close hardware",
    },
    "avant-garde": {
      mult: 1.3,
      title: "Avant-Garde Architectural",
      subtitle: "Anti-Fingerprint Acrylic + Fluted Natural Oak Veneer",
      hardware: "Blum Austria soft-close systems",
    },
    bespoke: {
      mult: 1.65,
      title: "Bespoke Haute Joinery",
      subtitle: "Smoked Natural Timber + PU Lacquer + Sintered Porcelain",
      hardware: "Motorized Blum Aventos + Concealed tracks",
    },
  };

  const scopeRates: Record<ScopeType, number> = {
    turnkey: 1750, // Rs per sqft
    modular: 1150,
    renovation: 1400,
  };

  const ratePerSqFt = Math.round(scopeRates[scope] * finishTiers[finish].mult);
  const calculatedCost = Math.round(approxSqFt * ratePerSqFt);
  const minCost = Math.round(calculatedCost * 0.94);
  const maxCost = Math.round(calculatedCost * 1.06);

  const handleCelebrate = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#1C1917", "#8C4830", "#78716C"],
    });
  };

  const whatsappMessage = encodeURIComponent(
    `J&M Interiors Quotation Request\n\n` +
      `Configuration: ${configs[property].label}\n` +
      `Carpet Area: ${approxSqFt} sq.ft\n` +
      `Scope: ${scope.toUpperCase()}\n` +
      `Finish Grade: ${finishTiers[finish].title}\n` +
      `Estimated Range: ${formatINR(minCost)} - ${formatINR(maxCost)}\n\n` +
      `I would like to schedule an on-site structural audit in Bengaluru.`
  );

  return (
    <section id="calculator" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">Estimator Index</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Preliminary Cost Modeling
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Honest estimates, <span className="text-[#8c4830] italic">line-by-line.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            Configure your parameters below to generate an itemized investment range based on real prevailing Bangalore material and labour rates.
          </p>
        </div>

        {/* Estimation Slip Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#ffffff] p-6 sm:p-8 border border-[#e6e2dc]">
            {/* Step 1: Configuration */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#78716c] block mb-3">
                01. Select Property Configuration
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {(Object.keys(configs) as PropertyType[]).map((key) => {
                  const isSelected = property === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setProperty(key);
                        setApproxSqFt(configs[key].def);
                      }}
                      className={`p-3.5 text-left border transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#1c1917] bg-[#faf8f5] text-[#1c1917] shadow-xs"
                          : "border-[#e6e2dc] bg-[#ffffff] text-[#78716c] hover:border-[#1c1917] hover:text-[#1c1917]"
                      }`}
                    >
                      <div className="font-serif text-lg leading-tight mb-1">{configs[key].label}</div>
                      <div className="text-[10px] font-mono text-[#78716c]">{configs[key].desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-xs uppercase tracking-widest text-[#78716c]">
                  02. Carpet Area (Square Feet)
                </label>
                <span className="font-serif text-2xl text-[#1c1917]">
                  {approxSqFt.toLocaleString()} <span className="text-xs font-sans text-[#78716c]">sq.ft</span>
                </span>
              </div>
              <Slider
                min={configs[property].min}
                max={configs[property].max}
                step={50}
                value={[approxSqFt]}
                onValueChange={(val) => setApproxSqFt(val[0])}
                className="py-2"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#78716c] mt-1">
                <span>Min: {configs[property].min} sq.ft</span>
                <span>Max: {configs[property].max} sq.ft</span>
              </div>
            </div>

            {/* Step 3: Scope */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#78716c] block mb-3">
                03. Scope of Execution
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "turnkey", label: "Full Turnkey Fitout", copy: "Civil + Ceilings + Electrical + Complete Joinery" },
                  { id: "modular", label: "Modular Woodwork", copy: "Kitchens + Wardrobes + Media Credenzas" },
                  { id: "renovation", label: "Structural Remodel", copy: "Civil Restructuring + Finish Upgrade" },
                ].map((s) => {
                  const isSelected = scope === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setScope(s.id as ScopeType)}
                      className={`p-3.5 text-left border transition-all cursor-pointer ${
                        isSelected
                          ? "border-[#1c1917] bg-[#faf8f5]"
                          : "border-[#e6e2dc] bg-[#ffffff] hover:border-[#1c1917]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-[#1c1917]">{s.label}</span>
                        {isSelected && <span className="material-symbols-outlined text-[16px] text-[#8c4830]">check</span>}
                      </div>
                      <p className="text-[11px] text-[#78716c] leading-tight font-sans">{s.copy}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Finish Specification */}
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-[#78716c] block mb-3">
                04. Material Specification Tier
              </label>
              <div className="space-y-2.5">
                {(Object.keys(finishTiers) as FinishTier[]).map((tierKey) => {
                  const item = finishTiers[tierKey];
                  const isSelected = finish === tierKey;
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setFinish(tierKey)}
                      className={`w-full p-4 text-left border transition-all cursor-pointer flex items-start justify-between ${
                        isSelected
                          ? "border-[#1c1917] bg-[#faf8f5]"
                          : "border-[#e6e2dc] bg-[#ffffff] hover:border-[#1c1917]"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1c1917] uppercase tracking-wider">
                            {item.title}
                          </span>
                          {tierKey === "avant-garde" && (
                            <Badge variant="clay" className="text-[9px] font-mono">Standard Specification</Badge>
                          )}
                        </div>
                        <p className="text-xs text-[#57534e] mt-1 font-sans">{item.subtitle}</p>
                        <p className="text-[11px] font-mono text-[#8c4830] mt-0.5">Hardware: {item.hardware}</p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border mt-1 flex items-center justify-center shrink-0 ${
                          isSelected ? "border-[#1c1917] bg-[#1c1917]" : "border-[#d6d0c7]"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#faf8f5]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quotation Slip Preview (Right Column) */}
          <Card className="lg:col-span-5 bg-[#faf8f5] border border-[#e6e2dc] rounded-none">
            <CardHeader className="border-b border-[#e6e2dc] pb-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                  Preliminary Estimate Slip
                </span>
                <span className="font-mono text-[11px] text-[#8c4830]">
                  DOC-JM-{new Date().getFullYear()}
                </span>
              </div>
              <CardTitle className="text-xl font-serif mt-2">
                Turnkey Investment Schedule
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-6 space-y-6">
              {/* Grand Price Range */}
              <div>
                <span className="text-xs font-mono uppercase text-[#78716c] block mb-1">
                  Estimated Investment Range:
                </span>
                <div className="font-serif text-3xl sm:text-4xl text-[#1c1917] leading-none">
                  <span>{formatINR(minCost)}</span>
                  <span className="text-lg text-[#78716c] mx-2 font-sans font-light">to</span>
                  <span>{formatINR(maxCost)}</span>
                </div>
                <p className="text-[11px] font-mono text-[#78716c] mt-2">
                  *Effective rate: ~₹{ratePerSqFt} per sq.ft based on chosen specifications.
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#e6e2dc]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#8c4830] mt-0.5">schedule</span>
                  <div>
                    <div className="text-xs font-semibold text-[#1c1917]">45 Working Days</div>
                    <div className="text-[10px] font-mono text-[#78716c]">Guaranteed Handover</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#8c4830] mt-0.5">verified_user</span>
                  <div>
                    <div className="text-xs font-semibold text-[#1c1917]">10-Year Warranty</div>
                    <div className="text-[10px] font-mono text-[#78716c]">Hardware & Carcass</div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2 text-xs text-[#57534e]">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#1c1917] font-semibold mb-2">
                  Standard Studio Deliverables:
                </div>
                {[
                  "Complete 3D photorealistic architectural renders & layout blueprints",
                  "BWR Marine Plywood fabrication in our Bangalore joinery",
                  "Original Blum / Hettich soft-close hinges and concealed drawer channels",
                  "Dedicated on-site site supervisor and digital weekly logs",
                  "Post-handover white-glove cleaning & formal 10-year warranty document",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#8c4830] shrink-0 mt-0.5">check</span>
                    <span className="font-sans">{item}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Call to Action */}
              <div className="pt-4 border-t border-[#e6e2dc] space-y-3">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCelebrate}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 bg-[#1c1917] hover:bg-[#322e2b] text-[#faf8f5] text-xs font-mono uppercase tracking-widest transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Send Estimate to J&M WhatsApp</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>

                <p className="text-center text-[10px] font-mono text-[#78716c]">
                  Direct consultation with J&M Interiors Bangalore (+91 9035 672 941)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

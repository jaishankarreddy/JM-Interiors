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
    turnkey: 1750,
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
    `JM Interiors Quotation Request\n\n` +
      `Configuration: ${configs[property].label}\n` +
      `Carpet Area: ${approxSqFt} sq.ft\n` +
      `Scope: ${scope.toUpperCase()}\n` +
      `Finish Grade: ${finishTiers[finish].title}\n` +
      `Estimated Range: ${formatINR(minCost)} - ${formatINR(maxCost)}\n\n` +
      `I would like to schedule an on-site structural audit in Bengaluru.`
  );

  return (
    <section id="calculator" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                Estimator
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Preliminary Cost Modeling
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] tracking-tight leading-tight">
              Cost Estimator <span className="text-[#8c4830]">& Schedule.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
            Configure your parameters below to generate an itemized investment range based on prevailing Bangalore rates.
          </p>
        </div>

        {/* Estimation Slip Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-7 bg-[#ffffff] p-6 sm:p-8 border border-[#e6e2dc]">
            {/* Step 1: Configuration */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#78716c] block mb-3 font-semibold">
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
                      data-cursor="SELECT"
                    >
                      <div className="text-sm font-sans font-bold leading-tight mb-0.5">{configs[key].label}</div>
                      <div className="text-[10px] text-[#78716c] font-sans">{configs[key].desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider text-[#78716c] font-semibold">
                  02. Carpet Area (Square Feet)
                </label>
                <span className="text-xl font-bold font-sans text-[#1c1917]">
                  {approxSqFt.toLocaleString()} <span className="text-xs font-normal text-[#78716c]">sq.ft</span>
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
              <div className="flex justify-between text-[11px] text-[#78716c] mt-1 font-sans">
                <span>Min: {configs[property].min} sq.ft</span>
                <span>Max: {configs[property].max} sq.ft</span>
              </div>
            </div>

            {/* Step 3: Scope */}
            <div>
              <label className="text-xs uppercase tracking-wider text-[#78716c] block mb-3 font-semibold">
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
                      data-cursor="TOGGLE"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold font-sans text-[#1c1917]">{s.label}</span>
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
              <label className="text-xs uppercase tracking-wider text-[#78716c] block mb-3 font-semibold">
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
                      data-cursor="SELECT"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1c1917] uppercase tracking-wider font-sans">
                            {item.title}
                          </span>
                          {tierKey === "avant-garde" && (
                            <Badge variant="clay" className="text-[9px] font-semibold">Standard Specification</Badge>
                          )}
                        </div>
                        <p className="text-xs text-[#57534e] mt-0.5 font-sans">{item.subtitle}</p>
                        <p className="text-[11px] text-[#8c4830] mt-0.5 font-medium">Hardware: {item.hardware}</p>
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
            <CardHeader className="border-b border-[#e6e2dc] pb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#78716c] font-semibold">
                  Preliminary Estimate Slip
                </span>
                <span className="text-[11px] text-[#8c4830] font-bold">
                  DOC-JM-{new Date().getFullYear()}
                </span>
              </div>
              <CardTitle className="text-lg font-sans font-bold uppercase tracking-tight mt-1.5">
                Turnkey Investment Schedule
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-5 space-y-5">
              {/* Grand Price Range */}
              <div>
                <span className="text-xs uppercase text-[#78716c] block mb-1 font-semibold">
                  Estimated Investment Range:
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-sans text-[#1c1917] leading-none">
                  <span>{formatINR(minCost)}</span>
                  <span className="text-base text-[#78716c] mx-2 font-normal">to</span>
                  <span>{formatINR(maxCost)}</span>
                </div>
                <p className="text-[11px] text-[#78716c] mt-1.5 font-sans">
                  *Effective rate: ~₹{ratePerSqFt} per sq.ft based on chosen specifications.
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-3 py-3.5 border-y border-[#e6e2dc]">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#8c4830] mt-0.5">schedule</span>
                  <div>
                    <div className="text-xs font-bold text-[#1c1917] font-sans">45 Working Days</div>
                    <div className="text-[10px] text-[#78716c] font-sans">Guaranteed Handover</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#8c4830] mt-0.5">verified_user</span>
                  <div>
                    <div className="text-xs font-bold text-[#1c1917] font-sans">10-Year Warranty</div>
                    <div className="text-[10px] text-[#78716c] font-sans">Hardware & Carcass</div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2 text-xs text-[#57534e]">
                <div className="text-[11px] uppercase tracking-wider text-[#1c1917] font-bold mb-2">
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
                    <span className="material-symbols-outlined text-[15px] text-[#8c4830] shrink-0 mt-0.5">check</span>
                    <span className="font-sans text-[11px] leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Call to Action */}
              <div className="pt-3 border-t border-[#e6e2dc] space-y-2">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCelebrate}
                  className="w-full h-10 inline-flex items-center justify-center gap-2 bg-[#1c1917] hover:bg-[#322e2b] text-[#faf8f5] text-xs font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  data-cursor="WHATSAPP"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Send Estimate to J&M WhatsApp</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </a>

                <p className="text-center text-[10px] text-[#78716c] font-sans">
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

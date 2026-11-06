import { useState, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformation" className="py-24 px-6 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay">Transformation Index</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Case Study / 45-Day Turnover
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              From bare shell to <span className="text-[#8c4830] italic">quiet elegance.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#57534e] leading-relaxed">
            Drag the vertical divider to compare the unplastered concrete structure against our finished turnkey interior in Bengaluru.
          </p>
        </div>

        {/* Comparison Frame */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[400px] sm:h-[550px] md:h-[620px] overflow-hidden cursor-ew-resize select-none border border-[#e6e2dc] bg-[#e4ded6]"
          >
            {/* After Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/project-living.jpg"
                alt="After Turnkey Execution by J&M Interiors Bengaluru"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-5 right-5 px-3 py-1.5 bg-[#faf8f5]/90 border border-[#e6e2dc] text-[11px] font-mono uppercase tracking-wider text-[#1c1917]">
                02 / Handover / Complete Fitout
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[100vw] max-w-5xl h-full">
                <img
                  src="/assets/hero.jpg"
                  alt="Before raw shell construction"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90"
                />
                {/* Architectural Blueprint grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px]" />
              </div>

              <div className="absolute top-5 left-5 px-3 py-1.5 bg-[#1c1917]/90 text-[#faf8f5] text-[11px] font-mono uppercase tracking-wider">
                01 / Bare Shell / Civil & Conduits
              </div>
            </div>

            {/* Hairline Divider & Minimalist Handle */}
            <div
              className="absolute top-0 bottom-0 w-[1px] bg-[#1c1917] z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#faf8f5] border border-[#1c1917] flex items-center justify-center text-[#1c1917] text-[11px] font-mono shadow-sm">
                ↔
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] pt-4 font-mono">
            <span>FIGURE 01 — STRUCTURAL RESTORATION & JOINERY INTERACTION</span>
            <span>SLIDE HORIZONTALLY TO SCRUB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

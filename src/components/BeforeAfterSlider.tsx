import { useState, useRef, useCallback } from "react";
import { SlidersHorizontal, Sparkles, Building, CheckCircle2 } from "lucide-react";

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
    <section id="transformation" className="py-24 px-5 md:px-8 bg-[#0e0d0c] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Turnkey Transformation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
            From Bare Shell to <span className="text-[#d4af37] italic">Refined Luxury.</span>
          </h2>
          <p className="mt-4 text-[#a8a29a] text-sm sm:text-base leading-relaxed">
            Drag the slider to witness how J&M Interiors transforms cold concrete and raw bricks into an architecturally curated living sanctuary within 45 days.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[520px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#c5a880]/30 shadow-2xl"
          >
            {/* "After" Image (Full background) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/assets/project-living.jpg"
                alt="After Turnkey Interior by J&M Interiors Bengaluru"
                className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-[#121110]/80 border border-[#d4af37]/50 backdrop-blur-md text-xs font-semibold text-[#d4af37] flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>AFTER: Turnkey Handover</span>
              </div>
            </div>

            {/* "Before" Image (Clipped Left Layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[100vw] max-w-5xl h-full">
                <img
                  src="/assets/hero.jpg"
                  alt="Before raw shell state"
                  className="w-full h-full object-cover object-center filter grayscale contrast-150 brightness-75"
                />
                {/* Architectural Blueprint / Laser grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#3a3630_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-[#1c1a18]/85 border border-[#4a453f] backdrop-blur-md text-xs font-semibold text-[#a8a29a] flex items-center gap-2 shadow-lg">
                <Building className="w-3.5 h-3.5" />
                <span>BEFORE: Bare Shell & Plaster</span>
              </div>
            </div>

            {/* Divider Line & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#181615] border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] shadow-xl shadow-black/80 backdrop-blur-md">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Insight Bar */}
            <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs text-[#f5f0ea] px-5 py-2.5 rounded-2xl bg-[#0c0b0a]/75 backdrop-blur-md border border-[#c5a880]/20">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                Laser-measured spatial execution • Zero masonry cracking
              </span>
              <span className="text-[#c5a880] font-mono">45-Day Turnaround Record</span>
            </div>
          </div>

          <p className="text-center text-xs text-[#78726a] mt-3">
            ↔ Click and drag the golden slider to compare bare shell vs. completed living space.
          </p>
        </div>
      </div>
    </section>
  );
}

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

  // We use the EXACT SAME image source so the angle, perspective, and furniture align 1:1!
  const imageSource = "/assets/project-living.jpg";

  return (
    <section id="transformation" className="py-20 px-6 sm:px-8 lg:px-12 bg-[#FAF8F5] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="clay" className="text-[10px] uppercase tracking-wider font-semibold">
                Transformation
              </Badge>
              <span className="text-xs uppercase tracking-wider text-[#78716c] font-medium">
                Identical Perspective Study
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl uppercase font-bold text-[#1c1917] tracking-tight leading-tight">
              From Bare Shell to <span className="text-[#8c4830]">Turnkey Handover.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#57534e] leading-relaxed font-sans">
            Drag the divider to compare the identical space: raw structural architectural wireframe on the left versus finished interior on the right.
          </p>
        </div>

        {/* 1:1 Pixel-Aligned Comparison Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] md:h-[560px] overflow-hidden cursor-ew-resize select-none border border-[#e6e2dc] bg-[#e4ded6]"
            data-cursor="DRAG"
          >
            {/* 1. After Image (Full background layer) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={imageSource}
                alt="Turnkey Interior Finished State"
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-[#faf8f5]/90 border border-[#e6e2dc] text-[10px] font-sans uppercase tracking-wider text-[#1c1917] font-semibold">
                Handover / Finished Interior
              </div>
            </div>

            {/* 2. Before Image (Clipped Left Layer with 100% IDENTICAL layout & coordinates) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Inner container matches the exact container width so the image does not squash or offset! */}
              <div className="absolute inset-0 w-[100vw] max-w-4xl h-full">
                <img
                  src={imageSource}
                  alt="Raw Bare Shell Wireframe State"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 pointer-events-none select-none"
                  draggable={false}
                />
                {/* Architectural Blueprint grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_1px,transparent_1px),linear-gradient(to_bottom,#00000015_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              </div>

              <div className="absolute top-4 left-4 px-3 py-1 bg-[#1c1917]/90 text-[#faf8f5] text-[10px] font-sans uppercase tracking-wider font-semibold">
                Bare Shell / Structural Frame
              </div>
            </div>

            {/* Hairline Divider & Minimalist Handle */}
            <div
              className="absolute top-0 bottom-0 w-[1.5px] bg-[#1c1917] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#faf8f5] border border-[#1c1917] flex items-center justify-center text-[#1c1917] text-[11px] font-mono shadow-sm">
                ↔
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#78716c] pt-3 font-sans">
            <span>Identical camera position • Structural wireframe vs. completed fitout</span>
            <span className="font-medium text-[#1c1917]">Drag horizontally to compare</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProjectShowcaseProps {
  onOpenConsultation: () => void;
}

export function ProjectShowcase({ onOpenConsultation }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<{ id: string; title: string; category: string; image: string } | null>(null);

  const categories = ["All", "Office Interiors", "Home Interiors", "Office Furniture", "Home Furniture"];

  const filteredGallery =
    activeCategory === "All"
      ? CLIENT_DATA.gallery
      : CLIENT_DATA.gallery.filter((g) => g.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
                Our Gallery
              </Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Featured Works
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Crafted by Bangalore's <span className="text-[#8c4830] italic">Top Architecture Firms.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "border-[#1c1917] bg-[#1c1917] text-[#faf8f5]"
                    : "border-[#e6e2dc] bg-[#faf8f5] text-[#78716c] hover:border-[#1c1917] hover:text-[#1c1917]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0ebe3] border-b border-[#e6e2dc]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#faf8f5]/90 border border-[#e6e2dc] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#1c1917]">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-[10px] text-[#78716c] bg-[#faf8f5]/80 px-2 py-0.5 border border-[#e6e2dc]">
                    0{idx + 1}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="font-mono text-xs text-[#8c4830] block mb-1">
                    Bangalore, Karnataka
                  </span>
                  <h3 className="font-serif text-2xl text-[#1c1917] group-hover:text-[#8c4830] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="px-6 py-4 border-t border-[#f0ebe3] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#78716c]">
                  JM Interiors Archive
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1c1917] group-hover:text-[#8c4830] flex items-center gap-1">
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[14px]">north_east</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-w-2xl bg-[#faf8f5] border border-[#e6e2dc] rounded-none p-6">
            <DialogHeader>
              <span className="font-mono text-xs uppercase tracking-wider text-[#8c4830]">
                {selectedItem.category}
              </span>
              <DialogTitle className="text-3xl font-serif text-[#1c1917]">
                {selectedItem.title}
              </DialogTitle>
              <DialogDescription className="text-xs text-[#78716c]">
                Crafted by JM Interiors in Bangalore with bespoke joinery and turnkey precision.
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[16/10] overflow-hidden border border-[#e6e2dc] my-3">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#e6e2dc]">
              <span className="font-mono text-xs text-[#78716c]">
                Location: Bengaluru, Karnataka
              </span>

              <Button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenConsultation();
                }}
                size="sm"
                className="rounded-xs font-mono text-xs"
              >
                Inquire For Similar Space
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

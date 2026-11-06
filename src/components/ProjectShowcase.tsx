import { useState } from "react";
import { PROJECTS, Project } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowUpRight, MapPin, Check } from "lucide-react";

interface ProjectShowcaseProps {
  onOpenConsultation: () => void;
}

export function ProjectShowcase({ onOpenConsultation }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "All", label: "All Works" },
    { id: "Residential", label: "Residential" },
    { id: "Commercial", label: "Commercial" },
    { id: "Modular Kitchen", label: "Modular Kitchens" },
    { id: "Custom Furniture", label: "Bespoke Joinery" },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-6 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#e6e2dc] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="clay">Archive</Badge>
              <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
                Index 2021 — 2026
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
              Selected architectural <span className="text-[#8c4830] italic">commissions.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat.id
                    ? "border-[#1c1917] bg-[#1c1917] text-[#faf8f5]"
                    : "border-[#e6e2dc] bg-[#faf8f5] text-[#78716c] hover:border-[#1c1917] hover:text-[#1c1917]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f0ebe3] border-b border-[#e6e2dc]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#faf8f5]/90 border border-[#e6e2dc] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#1c1917]">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-[10px] text-[#78716c] bg-[#faf8f5]/80 px-2 py-0.5 border border-[#e6e2dc]">
                    0{idx + 1}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-[#78716c] font-mono mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8c4830]" />
                    <span>{project.location}</span>
                    <span>/</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1c1917] group-hover:text-[#8c4830] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-[#57534e] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom metadata */}
              <div className="px-6 py-4 border-t border-[#f0ebe3] flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-[#78716c]">
                  Completed: {project.year}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1c1917] group-hover:text-[#8c4830] flex items-center gap-1">
                  <span>Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blueprint Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-mono text-[#78716c] mb-1">
                <span>{selectedProject.category.toUpperCase()}</span>
                <span>•</span>
                <span>{selectedProject.location}</span>
                <span>•</span>
                <span>{selectedProject.area}</span>
              </div>
              <DialogTitle className="text-3xl font-serif">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-[#57534e] pt-2">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>

            <div className="relative aspect-[16/9] overflow-hidden border border-[#e6e2dc] my-3">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Specifications */}
            <div className="p-4 bg-[#f2efe9] border border-[#e6e2dc] space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#1c1917] font-semibold block mb-2">
                Architectural Specifications:
              </span>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-[#44403c]">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#8c4830] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#e6e2dc]">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase bg-[#ffffff] border border-[#e6e2dc] px-2 py-0.5 text-[#78716c]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultation();
                }}
                size="sm"
                className="rounded-xs"
              >
                Inquire For Similar Layout
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}

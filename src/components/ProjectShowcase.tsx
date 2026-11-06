import { useState } from "react";
import { PROJECTS, Project } from "@/data/site-data";
import { Eye, MapPin, Maximize2, Tag, X, Check, ArrowRight } from "lucide-react";

interface ProjectShowcaseProps {
  onOpenConsultation: () => void;
}

export function ProjectShowcase({ onOpenConsultation }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Residential", "Commercial", "Modular Kitchen", "Custom Furniture"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-5 md:px-8 bg-[#0c0b0a] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1a18] border border-[#c5a880]/30 text-xs text-[#c5a880] uppercase tracking-widest mb-4">
              <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#f5f0ea] leading-tight">
              Landmark Spaces <span className="text-[#d4af37] italic">Delivered.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#d4af37] text-[#0c0b0a] shadow-lg shadow-[#d4af37]/20"
                    : "bg-[#181615] text-[#a8a29a] hover:text-[#f5f0ea] border border-[#2b2824] hover:border-[#4a443e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#141312] border border-[#262422] hover:border-[#c5a880]/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Image with zoom and badge */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-black/20" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#0c0b0a]/80 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick inspect icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0c0b0a]/80 border border-[#c5a880]/30 flex items-center justify-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#a8a29a] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{project.location}</span>
                    <span className="text-[#524d47]">•</span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#f5f0ea] group-hover:text-[#d4af37] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#8c857b] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-[#23211f] flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-[#a8a29a] bg-[#1c1a18] px-2.5 py-0.5 rounded-full border border-[#2b2824]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-[#d4af37] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#141312] border border-[#c5a880]/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#201d1b] text-[#f5f0ea] hover:text-[#d4af37] border border-[#36322e] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-6 border border-[#2b2824]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0c0b0a]/80 text-[#d4af37] border border-[#d4af37]/40 backdrop-blur-md">
                {selectedProject.category}
              </div>
            </div>

            {/* Modal Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#a8a29a] mb-3">
              <span className="flex items-center gap-1.5 text-[#d4af37]">
                <MapPin className="w-4 h-4" />
                {selectedProject.location}
              </span>
              <span>•</span>
              <span>Carpet Area: {selectedProject.area}</span>
              <span>•</span>
              <span>Handover Year: {selectedProject.year}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0ea] mb-4">
              {selectedProject.title}
            </h2>

            <p className="text-sm text-[#b8b0a5] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            {/* Features Breakdown */}
            <div className="mb-6 p-5 rounded-2xl bg-[#1a1816] border border-[#2b2824]">
              <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
                Architectural & Interior Features:
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#d8d2ca]">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons in Modal */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#23211f]">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-[#c5a880] bg-[#221f1c] px-3 py-1 rounded-full border border-[#3a3530]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenConsultation();
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all cursor-pointer"
              >
                Inquire For Similar Layout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

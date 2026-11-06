import { useState } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BentoServices } from "@/components/BentoServices";
import { CostCalculator } from "@/components/CostCalculator";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { BRAND_INFO } from "@/data/site-data";
import { MessageCircle, ArrowUp } from "lucide-react";

export function App() {
  // Lenis smooth momentum scrolling
  useLenis();

  const [consultationOpen, setConsultationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1c1917] selection:bg-[#1c1917] selection:text-[#faf8f5] font-sans antialiased">
      {/* Editorial Navigation */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* Architectural Hero */}
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          onExploreProjects={() => scrollToSection("portfolio")}
          onOpenCalculator={() => scrollToSection("calculator")}
        />

        {/* Selected Project Showcase */}
        <ProjectShowcase onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Integrated Capabilities Grid */}
        <BentoServices
          onSelectService={() => setConsultationOpen(true)}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* Interactive Before & After Transformation */}
        <BeforeAfterSlider />

        {/* Interactive Architectural Cost Estimator */}
        <CostCalculator />

        {/* 4-Stage Chronological Execution Protocol */}
        <ProcessTimeline onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Hardware Specifications Ticker & Client Accounts */}
        <TestimonialMarquee />

        {/* Architectural FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Dialog */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20J%26M%20Interiors!%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20interior%20consultation%20in%20Bengaluru.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#1c1917] text-[#faf8f5] hover:bg-[#322e2b] text-xs font-mono uppercase tracking-wider shadow-lg transition-all"
          title="Direct WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#8c4830]" />
          <span className="hidden sm:inline">WhatsApp Studio</span>
        </a>

        <button
          onClick={scrollToTop}
          className="w-9 h-9 flex items-center justify-center bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] text-[#1c1917] transition-all shadow-xs cursor-pointer"
          title="Return to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BentoServices } from "@/components/BentoServices";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { CostCalculator } from "@/components/CostCalculator";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import { CLIENT_DATA } from "@/data/site-data";

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
      {/* Clean Navbar */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      <main>
        {/* 1. Hero Banner */}
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          onExploreServices={() => scrollToSection("services")}
          onOpenCalculator={() => scrollToSection("calculator")}
        />

        {/* 2. About JM Interiors — Your Professional Architecture Partner */}
        <AboutSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 3. Our Services — See Our Architecture Services at a Glance */}
        <BentoServices
          onSelectService={() => setConsultationOpen(true)}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* 4. How We Work — Our Easy Working Steps */}
        <ProcessTimeline onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 5. Interactive Before & After Transformation */}
        <BeforeAfterSlider />

        {/* 6. Interactive Preliminary Cost Estimator */}
        <CostCalculator />

        {/* 7. Our Gallery — Crafted by Bangalore's Top Architecture Firms */}
        <ProjectShowcase onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 8. Testimonials — What Our Client's Say */}
        <TestimonialMarquee />

        {/* 9. FAQs — Most Commonly Asked Questions About Us */}
        <FAQSection />
      </main>

      {/* Footer & Contact */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Dialog */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Minimalist Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${CLIENT_DATA.contact.whatsapp}?text=Hello%20JM%20Interiors!%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20interior%20consultation%20in%20Bengaluru.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 bg-[#1c1917] text-[#faf8f5] hover:bg-[#322e2b] text-[11px] font-mono uppercase tracking-wider shadow-md transition-all border border-[#1c1917]"
          title="Direct WhatsApp"
        >
          <span className="material-symbols-outlined text-[16px] text-[#8c4830]">chat</span>
          <span>WhatsApp</span>
        </a>

        <button
          onClick={scrollToTop}
          className="w-8 h-8 flex items-center justify-center bg-[#ffffff] border border-[#e6e2dc] hover:border-[#1c1917] text-[#1c1917] transition-all shadow-xs cursor-pointer"
          title="Back to top"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
        </button>
      </div>
    </div>
  );
}

export default App;

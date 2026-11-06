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
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

export function App() {
  // Initialize Lenis smooth scroll + GSAP integration
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
    <div className="min-h-screen bg-[#0c0b0a] text-[#f5f0ea] selection:bg-[#c5a880] selection:text-[#0c0b0a] relative font-sans">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Content Stream */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => setConsultationOpen(true)}
          onExploreProjects={() => scrollToSection("portfolio")}
          onOpenCalculator={() => scrollToSection("calculator")}
        />

        {/* Interactive Transformation Before / After */}
        <BeforeAfterSlider />

        {/* Capabilities & Bento Services */}
        <BentoServices
          onSelectService={() => setConsultationOpen(true)}
          onOpenConsultation={() => setConsultationOpen(true)}
        />

        {/* Interactive Cost & Timeline Calculator */}
        <CostCalculator />

        {/* Portfolio Showcase with Filters & Modal */}
        <ProjectShowcase onOpenConsultation={() => setConsultationOpen(true)} />

        {/* 4-Step Working Process */}
        <ProcessTimeline onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Brand Partners Marquee & Testimonials */}
        <TestimonialMarquee />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Free Site Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Floating Action Buttons (WhatsApp + Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20J%26M%20Interiors!%20I%20am%20interested%20in%20an%20architectural%20and%20interior%20consultation%20in%20Bengaluru.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all"
          title="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-[#181615]/80 hover:bg-[#25221f] text-[#c5a880] hover:text-[#d4af37] border border-[#c5a880]/30 shadow-xl backdrop-blur-md transition-all cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default App;

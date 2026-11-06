import { CLIENT_DATA } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 sm:px-8 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center pb-8 mb-12 border-b border-[#e6e2dc]">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="clay" className="font-mono text-[10px] tracking-wider">
              FAQ
            </Badge>
            <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
              Questions & Answers
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
            Most Commonly Asked <span className="text-[#8c4830] italic">Questions About Us.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-[#57534e] mt-3">
            Learn more about our collaborative architecture process, commercial & residential capabilities, and after-sale support in Bangalore.
          </p>
        </div>

        {/* Exact Questions & Answers from jandminteriors.in */}
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {CLIENT_DATA.faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Strip */}
        <div className="mt-12 p-6 border border-[#e6e2dc] bg-[#faf8f5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase text-[#1c1917] font-semibold">
              Ready to Transform Your Workspace?
            </div>
            <div className="text-xs text-[#78716c] mt-0.5">
              Let JM Interiors — one of the leading architecture companies in Bangalore — create an inspiring office or home for you.
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CLIENT_DATA.contact.rawPhone}`}
              className="text-xs font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <span className="material-symbols-outlined text-[16px] text-[#8c4830]">call</span>
              <span>{CLIENT_DATA.contact.phone}</span>
            </a>
            <span className="text-[#d6d0c7]">/</span>
            <a
              href={`mailto:${CLIENT_DATA.contact.email}`}
              className="text-xs font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px] text-[#8c4830]">mail</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

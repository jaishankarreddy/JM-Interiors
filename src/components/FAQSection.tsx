import { FAQS, BRAND_INFO } from "@/data/site-data";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Phone, Mail } from "lucide-react";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-6 lg:px-12 bg-[#ffffff] border-b border-[#e6e2dc]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center pb-8 mb-12 border-b border-[#e6e2dc]">
          <div className="inline-flex items-center gap-2 mb-3">
            <Badge variant="clay">Inquiry & Details</Badge>
            <span className="font-mono text-xs uppercase tracking-wider text-[#78716c]">
              Common Inquiries
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl text-[#1c1917] leading-tight">
            Frequently asked <span className="text-[#8c4830] italic">questions.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-[#57534e] mt-3">
            Clear responses regarding our 45-day timeline, Bangalore site locations, warranty terms, and architectural flexibility.
          </p>
        </div>

        {/* shadcn Accordion */}
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact Strip */}
        <div className="mt-12 p-6 border border-[#e6e2dc] bg-[#faf8f5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase text-[#1c1917] font-semibold">
              Require specific structural advice?
            </div>
            <div className="text-xs text-[#78716c] mt-0.5">
              Connect directly with our senior site architects in Bangalore.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND_INFO.rawPhone}`}
              className="text-xs font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5 font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#8c4830]" />
              <span>{BRAND_INFO.phone}</span>
            </a>
            <span className="text-[#d6d0c7]">/</span>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="text-xs font-mono text-[#1c1917] hover:text-[#8c4830] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#8c4830]" />
              <span>Email Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

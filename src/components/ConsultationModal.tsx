import { useState } from "react";
import confetti from "canvas-confetti";
import { X, Sparkles, Phone, MessageSquare, CheckCircle2, Send, ShieldCheck, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/data/site-data";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Luxury Residential (2/3/4 BHK)");
  const [location, setLocation] = useState("Bengaluru");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#C5A880", "#FFFFFF", "#10B981"],
    });

    // Also prepare WhatsApp redirection link
    const waText = encodeURIComponent(
      `*New Interior Consultation Request*\n\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Email:* ${email || "Not specified"}\n` +
        `*Project Type:* ${projectType}\n` +
        `*Location:* ${location}\n` +
        `*Notes:* ${notes || "Looking for site visit & quotation"}`
    );

    // Auto open WhatsApp in background after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${waText}`, "_blank");
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#141312] border border-[#c5a880]/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1e1c1a] text-[#a8a29a] hover:text-[#f5f0ea] border border-[#332f2b] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1d1a] border border-[#c5a880]/30 text-[11px] text-[#c5a880] uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              <span>Complimentary Site Visit</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#f5f0ea] leading-tight">
              Schedule Your Free <span className="text-[#d4af37] italic">Architectural Consultation</span>
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#8c857b]">
              Meet our senior project architect for on-site laser measurements, layout feasibility, and a transparent itemized quotation.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Varun Reddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] placeholder-[#5c564f] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] placeholder-[#5c564f] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] placeholder-[#5c564f] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] outline-none transition-all"
                  >
                    <option value="Luxury Residential (2/3/4 BHK)">Luxury Residential (2/3/4 BHK)</option>
                    <option value="Corporate Office & Commercial Fitout">Corporate Office & Commercial Fitout</option>
                    <option value="Precision Modular Kitchen & Pantry">Precision Modular Kitchen & Pantry</option>
                    <option value="Bespoke Loose Furniture & Joinery">Bespoke Loose Furniture & Joinery</option>
                    <option value="Architectural Renovation & Civil">Architectural Renovation & Civil</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                    Site Location in Bengaluru
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Begur / Sarjapur / Whitefield"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] placeholder-[#5c564f] outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-[#a8a29a] font-semibold block mb-1.5">
                  Brief Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your possession date, floor area, or design preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1c1a18] border border-[#2b2824] focus:border-[#d4af37] text-sm text-[#f5f0ea] placeholder-[#5c564f] outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38e2d] text-[#0c0b0a] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 shadow-xl shadow-[#d4af37]/25 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Consultation & Open WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-[#78726a] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                  Zero Sales Spam
                </span>
                <span>•</span>
                <span>Direct response within 2 hours</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#1f2d20] border border-emerald-500/40 flex items-center justify-center mx-auto mb-5 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-3xl text-[#f5f0ea]">
              Consultation Scheduled!
            </h3>

            <p className="mt-3 text-sm text-[#a8a29a] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#f5f0ea]">{name}</strong>. Our lead architectural consultant is reviewing your request and will contact you at <strong className="text-[#d4af37]">{phone}</strong>.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}?text=Hello%20JM%20Interiors!%20My%20name%20is%20${encodeURIComponent(name)}.%20I%20just%20booked%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Direct on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="py-3 px-6 rounded-full bg-[#1c1a18] text-xs font-semibold text-[#a8a29a] hover:text-[#f5f0ea] border border-[#2b2824] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

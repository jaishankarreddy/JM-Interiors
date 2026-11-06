import { useState } from "react";
import confetti from "canvas-confetti";
import { BRAND_INFO, CLIENT_DATA } from "@/data/site-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Residential (Home Interiors & Furniture)");
  const [location, setLocation] = useState("Bengaluru");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#1C1917", "#8C4830", "#78716C"],
    });

    const waText = encodeURIComponent(
      `New Consultation Request - JM Interiors\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email || "Not specified"}\n` +
        `Project Type: ${projectType}\n` +
        `Location: ${location}\n` +
        `Notes: ${notes || "Requesting on-site measurement audit."}`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${CLIENT_DATA.contact.whatsapp}?text=${waText}`, "_blank");
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleReset()}>
      <DialogContent className="max-w-lg bg-[#faf8f5] border border-[#e6e2dc] rounded-none p-8">
        {!submitted ? (
          <div>
            <DialogHeader className="mb-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8c4830] font-bold">
                COMPLIMENTARY SITE INSPECTION
              </span>
              <DialogTitle className="text-3xl font-display uppercase font-bold text-[#1c1917] tracking-tight">
                SCHEDULE AN ARCHITECTURAL AUDIT
              </DialogTitle>
              <DialogDescription className="text-xs text-[#78716c] font-sans">
                Our senior architect will visit your site in Bengaluru for laser measurements, structural feasibility, and an itemized BOQ costing.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Varun Reddy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-sm text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-sm text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-sm text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-xs text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none"
                  >
                    <option value="Office Furniture & Workstations">Office Furniture & Workstations</option>
                    <option value="Office Interiors & Fitouts">Office Interiors & Fitouts</option>
                    <option value="Home Furniture & Joinery">Home Furniture & Joinery</option>
                    <option value="Home Interiors & Turnkey Fitout">Home Interiors & Turnkey Fitout</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                    Site Location in Bengaluru
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Begur / Sarjapur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-sm text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-[#78716c] block mb-1 font-semibold">
                  Brief Project Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Estimated possession timeline, carpet area, specific requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#ffffff] border border-[#e6e2dc] text-xs text-[#1c1917] outline-none focus:border-[#1c1917] rounded-none resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-none tracking-widest text-xs font-mono mt-2" data-cursor="SUBMIT">
                <span className="material-symbols-outlined text-[16px] mr-2">send</span>
                <span>Submit & Open Studio WhatsApp</span>
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-[#78716c] pt-1">
                <span className="material-symbols-outlined text-[14px] text-[#8c4830]">verified</span>
                <span>Zero sales harassment. Response directly from project architects.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#1c1917] bg-[#1c1917] text-[#faf8f5] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[24px]">check</span>
            </div>

            <DialogTitle className="text-2xl font-display uppercase font-bold text-[#1c1917]">
              Consultation Scheduled
            </DialogTitle>

            <p className="text-xs text-[#57534e] max-w-sm mx-auto font-sans">
              Thank you, <strong className="text-[#1c1917]">{name}</strong>. Our senior site engineer will contact you at <span className="font-mono text-[#8c4830] font-bold">{phone}</span> to coordinate the site audit.
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={`https://wa.me/${CLIENT_DATA.contact.whatsapp}?text=Hello%20JM%20Interiors!%20My%20name%20is%20${encodeURIComponent(name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#1c1917] text-[#faf8f5] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                data-cursor="WHATSAPP"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Open WhatsApp Direct</span>
              </a>

              <Button onClick={handleReset} variant="outline" size="sm" className="rounded-none font-mono text-xs">
                Done
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

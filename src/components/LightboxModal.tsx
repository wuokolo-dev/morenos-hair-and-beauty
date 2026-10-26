import React, { useEffect } from "react";
import { galleryItems } from "../data/gallery";
import { X, Sparkles, Calendar, ArrowRight } from "lucide-react";

interface LightboxModalProps {
  look: (typeof galleryItems)[0] | null;
  onClose: () => void;
  onInquireLook: (serviceRef?: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  look,
  onClose,
  onInquireLook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!look) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#121217] border border-[#242430] rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0b0b0e]/80 text-[#8e8a80] hover:text-[#f5f2eb] border border-white/10 hover:border-[#c5a059] transition-all"
          aria-label="Close look preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High-res Image Preview */}
        <div className="md:w-3/5 bg-black relative flex items-center justify-center max-h-[60vh] md:max-h-[75vh] overflow-hidden">
          <img
            src={look.image}
            alt={look.title}
            className="w-full h-full object-contain md:object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Editorial Look Description & Action */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#121217]">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] uppercase text-[#dec17c] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{look.category}</span>
            </div>

            <h3 id="lightbox-title" className="font-serif text-2xl sm:text-3xl text-[#f5f2eb] font-normal leading-tight mb-3">
              {look.title}
            </h3>

            <p className="text-sm text-[#8e8a80] font-light leading-relaxed mb-6">
              {look.subtitle}
            </p>

            <div className="p-4 bg-[#0b0b0e] border border-[#242430] rounded-sm text-xs text-[#c9c4b7] space-y-2">
              <div className="text-[#dec17c] uppercase tracking-wider font-medium text-[11px]">
                Atelier Craft Note
              </div>
              <p className="leading-relaxed">
                Every look is individually adapted to your natural hairline, facial contours, and lifestyle requirements during your one-on-one consultation.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#242430] mt-6">
            <button
              onClick={() => onInquireLook(look.serviceRef)}
              type="button"
              className="w-full py-3.5 px-6 rounded-sm text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] text-[#0b0b0e] hover:brightness-110 active:brightness-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(197,160,89,0.25)] cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Inquire About This Look</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

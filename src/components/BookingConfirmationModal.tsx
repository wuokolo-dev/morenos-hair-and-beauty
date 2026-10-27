import React, { useState } from "react";
import { BookingFormState } from "./BookingSection";
import { salonConfig } from "../data/salon";
import { salonServices } from "../data/services";
import { X, CheckCircle2, Copy, Check, Calendar, Clock, User, Phone, Mail, Sparkles } from "lucide-react";

interface BookingConfirmationModalProps {
  booking: BookingFormState | null;
  onClose: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  booking,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!booking) return null;

  const matchedService = salonServices.find((s) => s.id === booking.serviceId);
  const servicePrice = matchedService ? matchedService.priceNote : "Guide Price upon consultation";
  const serviceDuration = matchedService ? matchedService.duration : "60–90 min";

  const summaryText = `*Moreno’s Hair&Beauty Appointment Enquiry*
---------------------------------------
• Client Name: ${booking.name}
• Contact: ${booking.phone} / ${booking.email}
• Service: ${booking.serviceName} (${serviceDuration})
• Guide Pricing: ${servicePrice}
• Date: ${booking.date}
• Time: ${booking.time}
• Notes: ${booking.notes || "None"}
---------------------------------------
Transmitted to Moreno’s Hair&Beauty · 119 Nantwich Rd, Crewe CW2 6BA (01270 255992)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#131318] border border-white/[0.08] rounded-md p-6 sm:p-8 text-left shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 text-[#8e8a80] hover:text-[#f5f2eb] transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059]"
          aria-label="Close booking confirmation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366] flex items-center justify-center text-[#25D366]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#dec17c] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#25D366]" />
              <span>Enquiry Confirmed</span>
            </div>
            <h3 id="modal-headline" className="font-serif text-2xl text-[#f5f2eb] font-normal">
              Booking Enquiry Transmitted
            </h3>
          </div>
        </div>

        {/* Confirmation Notice Banner */}
        <div className="p-4 bg-[#14141a] border border-[#25D366]/20 rounded-md text-xs text-[#c9c4b7] leading-relaxed mb-6">
          <span className="font-semibold text-[#25D366]">Enquiry Transmitted: </span>
          Your appointment request has been securely delivered to the team at Moreno’s Hair&Beauty. Our stylists will review your requested slot and reach out directly by phone or email.
        </div>

        {/* Structured Appointment Details */}
        <div className="bg-[#0c0c10] border border-white/[0.06] p-5 rounded-md space-y-3.5 mb-6 text-sm">
          <div className="flex items-start justify-between pb-3 border-b border-white/[0.06]">
            <div>
              <div className="text-xs text-[#8e8a80] uppercase tracking-wider">Service Selected</div>
              <div className="font-serif text-lg text-[#f5f2eb] mt-0.5">{booking.serviceName}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#8e8a80]">{serviceDuration}</div>
            </div>
          </div>

          <div className="text-xs text-[#dec17c] bg-[#181822] p-2.5 rounded-md border border-white/[0.06]">
            {servicePrice}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#c9c4b7]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#dec17c] shrink-0" />
              <span>{booking.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#dec17c] shrink-0" />
              <span className="font-mono">{booking.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#dec17c] shrink-0" />
              <span>{booking.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#dec17c] shrink-0" />
              <span className="font-mono">{booking.date}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <Clock className="w-4 h-4 text-[#dec17c] shrink-0" />
              <span>{booking.time}</span>
            </div>
          </div>

          {booking.notes && (
            <div className="pt-2 border-t border-[#242430]/60 text-xs">
              <span className="text-[#8e8a80] uppercase tracking-wider">Notes & Hair History: </span>
              <span className="text-[#c9c4b7] italic">{booking.notes}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a
            href={`tel:${salonConfig.contact.phone}`}
            className="w-full py-3.5 px-6 rounded-sm text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] text-[#0b0b0e] hover:brightness-110 active:brightness-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_4px_16px_rgba(197,160,89,0.25)] cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#0b0b0e]" />
            <span>Call Salon: 01270 255992</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              type="button"
              className="flex-1 py-3 px-4 rounded-sm text-xs font-medium tracking-wider uppercase bg-[#1a1a24] hover:bg-[#242432] text-[#f5f2eb] border border-[#242430] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5 text-[#dec17c]" />}
              <span>{copied ? "Copied to Clipboard" : "Copy Summary"}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="py-3 px-5 rounded-sm text-xs font-medium tracking-wider uppercase text-[#8e8a80] hover:text-[#f5f2eb] hover:bg-white/5 transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

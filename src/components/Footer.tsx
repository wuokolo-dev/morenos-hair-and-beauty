import React from "react";
import { salonConfig } from "../data/salon";
import { Sparkles, MapPin, Phone, Clock, Car, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#08080a] border-t border-white/[0.06] text-[#c9c4b7] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <Sparkles className="w-3.5 h-3.5 text-[#dec17c]" />
              </span>
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.14em] text-[#f5f2eb]">
                {salonConfig.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#8e8a80] leading-relaxed max-w-md font-light">
              &ldquo;From Afro to Caucasian hair, we celebrate every strand.&rdquo; Contemporary hair and beauty salon prominently located at 119 Nantwich Road, Crewe. Specialists in curly hair cutting, bespoke extensions, and aesthetic care.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                type="button"
                className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase bg-[#14141a] hover:bg-[#c5a059] text-[#f5f2eb] hover:text-[#0b0b0e] border border-white/[0.08] hover:border-[#c5a059] transition-all cursor-pointer"
              >
                Book Appointment
              </button>

              <a
                href={`tel:${salonConfig.contact.phone}`}
                className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-widest uppercase bg-transparent hover:bg-white/5 text-[#dec17c] border border-[#c5a059]/40 hover:border-[#c5a059] transition-all"
              >
                Call 01270 255992
              </a>
            </div>
          </div>

          {/* Opening Schedule */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#dec17c] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Hours & Status</span>
            </div>
            <ul className="space-y-2 text-xs text-[#8e8a80]">
              {salonConfig.hours.map((h, idx) => (
                <li key={idx} className="border-b border-[#242430]/40 pb-2">
                  <div className="text-[#c9c4b7] font-medium">{h.days}</div>
                  <div className="font-mono text-[11px] text-[#dec17c] mt-0.5">{h.hours}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Social Connections */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#dec17c] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Salon Location & Contacts</span>
            </div>

            <div className="space-y-2.5 text-xs text-[#8e8a80]">
              <p className="text-[#c9c4b7] leading-relaxed">
                {salonConfig.contact.address.street} <br />
                {salonConfig.contact.address.city}, {salonConfig.contact.address.county} {salonConfig.contact.address.postcode} <br />
                <span className="text-[#dec17c]">{salonConfig.contact.address.country}</span>
              </p>

              <div className="flex items-center gap-2 text-xs text-[#dec17c]">
                <Car className="w-3.5 h-3.5 shrink-0" />
                <span>{salonConfig.contact.address.parking}</span>
              </div>

              <div className="pt-2 flex flex-col space-y-2">
                <a
                  href={`tel:${salonConfig.contact.phone}`}
                  className="flex items-center gap-2 hover:text-[#dec17c] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#dec17c]" />
                  <span className="font-mono">{salonConfig.contact.displayPhone}</span>
                </a>

                {/* Clean Social Media & Booking Icons */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/morenoshairbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Moreno's Hair Beauty on Instagram"
                    className="w-9 h-9 rounded-sm bg-[#14141a] hover:bg-[#c5a059] border border-[#242430] hover:border-[#c5a059] text-[#dec17c] hover:text-[#0b0b0e] flex items-center justify-center transition-all group"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-[#dec17c] group-hover:text-[#0b0b0e] transition-colors" />
                  </a>

                  <a
                    href="https://www.facebook.com/morenoshairbeauty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit us on Facebook"
                    className="w-9 h-9 rounded-sm bg-[#14141a] hover:bg-[#c5a059] border border-[#242430] hover:border-[#c5a059] text-[#dec17c] hover:text-[#0b0b0e] flex items-center justify-center transition-all group"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-[#dec17c] group-hover:text-[#0b0b0e] transition-colors" />
                  </a>

                  <a
                    href="https://www.treatwell.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book an appointment on Treatwell"
                    className="w-9 h-9 rounded-sm bg-[#14141a] hover:bg-[#c5a059] border border-[#242430] hover:border-[#c5a059] text-[#dec17c] hover:text-[#0b0b0e] flex items-center justify-center transition-all group"
                    title="Treatwell"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-[#dec17c] group-hover:text-[#0b0b0e] transition-colors"
                      aria-hidden="true"
                    >
                      <path d="M7 6.5h10v2.8h-3.6v9.2c0 .9.7 1.5 1.6 1.5h2v2.5h-2.8c-2.3 0-3.8-1.5-3.8-3.9V9.3H7V6.5z" />
                      <circle cx="17.5" cy="5" r="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Concept Disclaimer & Navigation Shortcuts */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#8e8a80] text-center sm:text-left">
          <div className="max-w-md leading-relaxed px-2 sm:px-0">
            &copy; {new Date().getFullYear()} Moreno’s Hair&Beauty · Private Concept Preview · Prepared for Moreno's Hair & Beauty.
          </div>

          <nav
            aria-label="Footer navigation links"
            className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2.5 px-4 sm:px-0 max-w-full text-center"
          >
            <a href="#services" className="hover:text-[#c5a059] transition-colors py-0.5 whitespace-nowrap">Services</a>
            <span aria-hidden="true" className="text-[#242430] select-none">·</span>
            <a href="#reviews" className="hover:text-[#c5a059] transition-colors py-0.5 whitespace-nowrap">Reviews</a>
            <span aria-hidden="true" className="text-[#242430] select-none">·</span>
            <a href="#gallery" className="hover:text-[#c5a059] transition-colors py-0.5 whitespace-nowrap">Gallery</a>
            <span aria-hidden="true" className="text-[#242430] select-none">·</span>
            <a href="#about" className="hover:text-[#c5a059] transition-colors py-0.5 whitespace-nowrap">About</a>
            <span aria-hidden="true" className="text-[#242430] select-none">·</span>
            <a href="#contact" className="hover:text-[#c5a059] transition-colors py-0.5 whitespace-nowrap">Book / Call</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

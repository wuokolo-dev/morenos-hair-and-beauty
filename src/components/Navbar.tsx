import React, { useState, useEffect, useRef } from "react";
import { salonConfig } from "../data/salon";
import { Phone, Menu, X, Calendar, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Refined Minimal Prototype Notice */}
      <div className="bg-[#0e0e13]/95 backdrop-blur-md border-b border-white/[0.06] py-1.5 px-4 text-center text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#dec17c]/85 font-medium">
        <span>Private Concept Preview — Prepared for Moreno's Hair & Beauty</span>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0b0e]/95 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-2xl"
            : "bg-[#0b0b0e]/50 backdrop-blur-sm py-4 border-b border-white/[0.03]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-4 relative">
          {/* Zone 1: Salon Logo on the left-hand side */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059]"
          >
            <span className="w-8 h-8 rounded-full border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
              <Sparkles className="w-4 h-4 text-[#dec17c]" />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.14em] text-[#f5f2eb]">
                {salonConfig.name}
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (Centered / Unchanged on Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-[12px] font-medium tracking-[0.14em] uppercase text-[#c9c4b7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#e6ca85] transition-colors whitespace-nowrap shrink-0 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c5a059] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Desktop Primary Actions (Phone call & Book button - Unchanged on Desktop) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${salonConfig.contact.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-medium tracking-wider uppercase text-[#c9c4b7] hover:text-[#f5f2eb] hover:bg-white/5 border border-white/10 hover:border-[#c5a059]/40 transition-all whitespace-nowrap"
              title="Call Moreno’s Hair&Beauty directly"
              aria-label="Call salon telephone"
            >
              <Phone className="w-3.5 h-3.5 text-[#dec17c]" />
              <span className="font-mono text-xs">{salonConfig.contact.displayPhone}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase text-[#0b0b0e] bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] hover:brightness-110 active:brightness-95 transition-all shadow-[0_2px_15px_rgba(197,160,89,0.25)] cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Screen: Hamburger Menu Button placed on far right-hand side */}
          <div className="flex md:hidden items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#f5f2eb] hover:text-[#dec17c] focus-visible:outline-none rounded-sm border border-white/10 bg-[#14141a]/80 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#dec17c]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Screens: Elegant Dropdown Menu Aligned to the Right */}
          {mobileMenuOpen && (
            <div
              ref={menuRef}
              className="md:hidden absolute top-full right-5 mt-2.5 w-64 max-w-[calc(100vw-2.5rem)] bg-[#0e0e12]/98 backdrop-blur-xl border border-[#c5a059]/35 rounded-sm p-4 shadow-[0_12px_36px_rgba(0,0,0,0.9)] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              {/* Dropdown Navigation Links */}
              <nav className="flex flex-col space-y-1 pb-3 border-b border-white/10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-medium tracking-[0.14em] uppercase text-[#c9c4b7] hover:text-[#dec17c] hover:bg-white/5 px-3 py-2.5 rounded-sm transition-colors text-right"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Quick Actions in Mobile Dropdown */}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  type="button"
                  className="w-full py-2.5 px-3 rounded-sm text-xs font-semibold tracking-widest uppercase text-[#0b0b0e] bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] hover:brightness-110 active:brightness-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${salonConfig.contact.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3 rounded-sm text-xs font-medium tracking-widest uppercase text-[#dec17c] bg-[#14141a] hover:bg-[#1a1a24] border border-[#242430] hover:border-[#c5a059]/40 flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {salonConfig.contact.displayPhone}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

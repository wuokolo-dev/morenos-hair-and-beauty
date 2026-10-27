import React, { useState, useRef, useEffect } from "react";
import { salonConfig } from "../data/salon";
import { Calendar, ArrowRight, Star, MapPin, Car, Sparkles, Scissors } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Respect reduced-motion preferences
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVideoFailed(true);
      return;
    }

    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted (e.g. low-power mode); graceful poster fallback is maintained
      });
    }
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-28 overflow-hidden border-b border-white/[0.06] bg-[#0b0b0e]">
      {/* Background Video Layer - Controlled Responsive Height on Mobile (approx 38-42vh, max 350px) preventing zoom distortion & screen takeover */}
      <div className="absolute top-0 inset-x-0 h-[40vh] min-h-[250px] max-h-[350px] md:h-full md:max-h-none z-0 overflow-hidden pointer-events-none select-none">
        {/* Fallback Poster Image */}
        <img
          src="/images/hero_luxe_salon_1793022124335.jpg"
          alt="Moreno’s Hair&Beauty salon atmosphere"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-95 transition-opacity duration-700 ${
            videoLoaded && !videoFailed ? "opacity-0" : "opacity-100"
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Video Element - Controlled Sizing, Object Fit Cover & Centered Subject */}
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero_luxe_salon_1793022124335.jpg"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ objectFit: "cover", objectPosition: "center" }}
          >
            <source
              src="https://res.cloudinary.com/gp7qrkyy/video/upload/v1793030088/Website_Video.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Responsive Gradient Overlays:
            - Mobile: Soft top tone + gradual bottom fade blending seamlessly into the dark section canvas
            - Desktop: Subtle top navbar blend + smooth bottom transition into Services
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e]/50 via-[#0b0b0e]/20 to-[#0b0b0e] md:hidden" />
        <div className="hidden md:block absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0b0b0e]/80 via-[#0b0b0e]/30 to-transparent" />
        <div className="hidden md:block absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* High-Contrast Readability Scrim / Backdrop Container */}
        <div className="relative max-w-3xl">
          {/* Subtle semi-transparent dark gradient & backdrop layer ensuring 100% legibility */}
          <div className="absolute -inset-4 sm:-inset-6 md:-inset-x-10 md:-inset-y-8 rounded-xl bg-gradient-to-r from-[#0b0b0e]/95 via-[#0b0b0e]/80 to-[#0b0b0e]/30 md:to-transparent backdrop-blur-[3px] border border-white/[0.05] md:border-none pointer-events-none -z-10 shadow-2xl md:shadow-none" />

          {/* Verified Google Rating & Specialty Kicker */}
          <div className="inline-flex flex-wrap items-center gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#14141a]/95 border border-[#c5a059]/40 rounded-sm text-xs font-semibold text-[#dec17c] shadow-lg backdrop-blur-sm">
              <div className="flex items-center text-[#dec17c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-mono tabular-nums text-white">5.0</span>
              <span className="text-[#f5f2eb]/75">({salonConfig.rating.totalReviews} Google Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium tracking-[0.18em] uppercase text-[#dec17c] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <Sparkles className="w-3 h-3" />
              <span>Crewe, Cheshire</span>
            </div>
          </div>

          {/* Primary Serif Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f5f2eb] leading-[1.14] md:leading-[1.12] tracking-tight mb-4 sm:mb-6 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            From Afro to Caucasian Hair, <br className="hidden sm:inline" />
            We Celebrate Every Strand.
          </h1>

          {/* Editorial Description */}
          <p className="text-[#f5f2eb]/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-light mb-6 sm:mb-8 text-balance drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            Prominently located on Nantwich Road in Crewe, <strong className="font-medium text-[#f5f2eb]">{salonConfig.name}</strong> is your contemporary destination for specialist curly hair cutting, bespoke hair extensions, precision cuts, and aesthetic care.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <button
              onClick={onOpenBooking}
              type="button"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-sm text-xs font-semibold tracking-[0.16em] uppercase text-[#0b0b0e] bg-gradient-to-r from-[#dec17c] via-[#c5a059] to-[#aa853c] hover:brightness-110 active:brightness-95 transition-all shadow-[0_4px_24px_rgba(197,160,89,0.3)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href="#services"
              className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-sm text-xs font-medium tracking-[0.16em] uppercase text-[#f5f2eb] bg-[#0b0b0e]/80 hover:bg-[#14141a] border border-white/15 hover:border-[#c5a059]/50 backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#dec17c] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4-Column Feature Ribbon with Softened Cards & Subtle Surfaces */}
        <div className="mt-10 sm:mt-14 md:mt-20 p-5 sm:p-7 rounded-md bg-[#131318]/90 backdrop-blur-md border border-white/[0.07] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-[#f5f2eb]/85 shadow-2xl">
          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#dec17c] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#f5f2eb] font-medium">Nantwich Road Location</div>
              <div className="text-xs sm:text-sm text-[#c9c4b7] mt-0.5">119 Nantwich Rd, Crewe CW2 6BA</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Scissors className="w-5 h-5 text-[#dec17c] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#f5f2eb] font-medium">All Hair Types</div>
              <div className="text-xs sm:text-sm text-[#c9c4b7] mt-0.5">Curly & Hair Extension Specialists</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Car className="w-5 h-5 text-[#dec17c] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#f5f2eb] font-medium">On-Site Parking</div>
              <div className="text-xs sm:text-sm text-[#c9c4b7] mt-0.5">Customer parking right at the salon</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Star className="w-5 h-5 text-[#dec17c] shrink-0 mt-0.5 fill-[#dec17c]" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#f5f2eb] font-medium">5.0 Star Rated</div>
              <div className="text-xs sm:text-sm text-[#c9c4b7] mt-0.5">44 Verified Reviews on Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

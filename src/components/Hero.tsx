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
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#242430]/60 bg-[#111111]">
      {/* Background Video Layer - Full Coverage, Bright & Clear with pointer-events: none */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Fallback Poster Image */}
        <img
          src="/images/hero_luxe_salon_1793022124335.jpg"
          alt="Moreno’s Hair&Beauty salon atmosphere"
          className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-95 transition-opacity duration-700 ${
            videoLoaded && !videoFailed ? "opacity-0" : "opacity-100"
          }`}
          referrerPolicy="no-referrer"
        />

        {/* Video Element - Natural Brightness, Unrestricted Clarity */}
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

        {/* Subtle, transparent charcoal gradient overlay only where needed */}
        {/* Subtle top blend for header navigation legibility */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#111111]/70 via-[#111111]/20 to-transparent" />

        {/* Soft bottom edge blend to transition smoothly into the next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#111111] via-[#111111]/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Text Container with Subtle Localized Charcoal Gradient Scrim Behind Text Only */}
        <div className="relative max-w-3xl">
          {/* Subtle directional gradient backdrop strictly focused behind text to ensure 100% legibility */}
          <div className="absolute -inset-x-6 -inset-y-6 sm:-inset-x-10 sm:-inset-y-8 rounded-2xl bg-gradient-to-r from-[#111111]/80 via-[#111111]/45 to-transparent backdrop-blur-[2px] pointer-events-none -z-10" />

          {/* Verified Google Rating & Specialty Kicker */}
          <div className="inline-flex flex-wrap items-center gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/95 border border-[#C8A96B]/40 rounded-sm text-xs font-semibold text-[#C8A96B] shadow-lg backdrop-blur-sm">
              <div className="flex items-center text-[#C8A96B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-mono tabular-nums text-white">5.0</span>
              <span className="text-[#F5F0E8]/75">({salonConfig.rating.totalReviews} Google Reviews)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium tracking-[0.18em] uppercase text-[#C8A96B] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <Sparkles className="w-3 h-3" />
              <span>Crewe, Cheshire</span>
            </div>
          </div>

          {/* Primary Serif Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F0E8] leading-[1.12] tracking-tight mb-6 text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            From Afro to Caucasian Hair, <br className="hidden sm:inline" />
            We Celebrate Every Strand.
          </h1>

          {/* Editorial Description */}
          <p className="text-[#F5F0E8]/95 text-base sm:text-lg leading-relaxed max-w-2xl font-light mb-8 text-balance drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Prominently located on Nantwich Road in Crewe, <strong className="font-medium text-[#F5F0E8]">{salonConfig.name}</strong> is your contemporary destination for specialist curly hair cutting, bespoke hair extensions, precision cuts, and aesthetic care.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              type="button"
              className="px-8 py-4 rounded-sm text-xs font-semibold tracking-[0.16em] uppercase text-[#111111] bg-gradient-to-r from-[#dec17c] via-[#C8A96B] to-[#aa853c] hover:brightness-110 active:brightness-95 transition-all shadow-[0_4px_24px_rgba(200,169,107,0.35)] flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              href="#services"
              className="px-8 py-4 rounded-sm text-xs font-medium tracking-[0.16em] uppercase text-[#F5F0E8] bg-[#111111]/70 hover:bg-[#111111]/90 border border-white/20 hover:border-[#C8A96B]/60 backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C8A96B] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 4-Column Verified Salon Feature Ribbon with Translucent Glass Backdrop */}
        <div className="mt-14 md:mt-20 p-6 sm:p-7 rounded-sm bg-[#111111]/80 backdrop-blur-md border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#F5F0E8]/80 shadow-2xl">
          <div className="flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#F5F0E8] font-medium">Nantwich Road Location</div>
              <div className="text-sm text-[#F5F0E8]/70 mt-0.5">119 Nantwich Rd, Crewe CW2 6BA</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Scissors className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#F5F0E8] font-medium">All Hair Types</div>
              <div className="text-sm text-[#F5F0E8]/70 mt-0.5">Curly & Hair Extension Specialists</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Car className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#F5F0E8] font-medium">On-Site Parking</div>
              <div className="text-sm text-[#F5F0E8]/70 mt-0.5">Customer parking right at the salon</div>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <Star className="w-5 h-5 text-[#C8A96B] shrink-0 mt-0.5 fill-[#C8A96B]" />
            <div>
              <div className="text-xs uppercase tracking-widest text-[#F5F0E8] font-medium">5.0 Star Rated</div>
              <div className="text-sm text-[#F5F0E8]/70 mt-0.5">44 Verified Reviews on Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

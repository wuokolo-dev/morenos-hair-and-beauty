import React from "react";
import { salonConfig } from "../data/salon";
import { Sparkles, Car, Star, Scissors, Quote, Heart } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0b0b0e] relative border-b border-[#242430]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Philosophy & Craft */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Moreno’s Hair&Beauty</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#f5f2eb] tracking-tight leading-[1.15] mb-6">
              Celebrating Every Strand in Crewe.
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-[#c9c4b7] font-light leading-relaxed">
              <p>
                Prominently situated at <strong className="text-[#f5f2eb] font-normal">119 Nantwich Road in Crewe, Cheshire</strong>, Moreno’s Hair&Beauty is a welcoming, contemporary salon built around a clear philosophy: <span className="text-[#dec17c] italic">&ldquo;From Afro to Caucasian hair, we celebrate every strand.&rdquo;</span>
              </p>
              <p>
                Whether you need dedicated curly hair dry cutting tailored to natural curl elasticity, expert bespoke hair extensions, protective styling, or precision cutting and aesthetic rejuvenation, our stylists combine skilled technique with a warm, unhurried customer experience.
              </p>
            </div>

            {/* 3 Verified Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#242430]">
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#14141a] border border-[#242430] flex items-center justify-center text-[#dec17c] mb-3">
                  <Scissors className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-[#f5f2eb] mb-1 font-normal">All Hair Types</h4>
                <p className="text-xs text-[#8e8a80] leading-normal font-light">
                  Specialist mastery for all hair types—from Afro and coily to wavy and fine Caucasian hair.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-sm bg-[#14141a] border border-[#242430] flex items-center justify-center text-[#dec17c] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-[#f5f2eb] mb-1 font-normal">Curl & Extensions</h4>
                <p className="text-xs text-[#8e8a80] leading-normal font-light">
                  Specialist curl sculpting, seamless hair extension matching, and aesthetic treatments.
                </p>
              </div>

              <div>
                <div className="w-10 h-10 rounded-sm bg-[#14141a] border border-[#242430] flex items-center justify-center text-[#dec17c] mb-3">
                  <Car className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-[#f5f2eb] mb-1 font-normal">Customer Parking</h4>
                <p className="text-xs text-[#8e8a80] leading-normal font-light">
                  Convenient on-site parking on Nantwich Road for a relaxed, stress-free visit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Creed Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#242430] bg-[#14141a] aspect-[4/5] shadow-2xl">
              <img
                src="/images/hero_luxe_salon_1793022124335.jpg"
                alt="Moreno’s Hair&Beauty salon concept atmosphere"
                className="w-full h-full object-cover filter brightness-[0.82]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/25 to-transparent" />

              {/* Verified Creed Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0b0b0e]/92 backdrop-blur-md border border-white/10 rounded-sm">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#f5f2eb] leading-snug mb-3 font-light">
                  &ldquo;From Afro to Caucasian hair, we celebrate every strand.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#dec17c] font-medium">
                  <span>Moreno’s Hair&Beauty</span>
                  <span className="text-[#8e8a80]">Crewe, UK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Verified Google Reviews Section */}
        <div id="reviews" className="mt-20 pt-16 border-t border-[#242430]/70">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-2">
                Verified Client Feedback
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl font-light text-[#f5f2eb]">
                5.0 Stars on Google Reviews
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-[#dec17c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-wider text-[#8e8a80]">
                44 Verified Google Reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salonConfig.rating.verifiedQuotes.map((review, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#121217] border border-[#242430] rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-5 h-5 text-[#dec17c]/60 mb-3" />
                  <p className="font-serif italic text-base text-[#f5f2eb] leading-relaxed mb-4">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-[#242430]/70 text-xs">
                  <span className="text-[#dec17c] font-medium">{review.source}</span>
                  <div className="flex text-[#dec17c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

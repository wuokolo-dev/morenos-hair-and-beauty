import React, { useState } from "react";
import { galleryFilters, signatureCollection, editorialCollection, galleryItems } from "../data/gallery";
import { Maximize2, Sparkles, ArrowRight, Layers } from "lucide-react";

interface GalleryProps {
  onSelectLook: (item: (typeof galleryItems)[0]) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectLook }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSignature =
    activeFilter === "all"
      ? signatureCollection
      : signatureCollection.filter((item) => item.category === activeFilter);

  const filteredEditorial =
    activeFilter === "all"
      ? editorialCollection
      : editorialCollection.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0e0e12] relative border-b border-[#242430]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Main Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-2.5">
              Visual Portfolio & Lookbook
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#f5f2eb] tracking-tight">
              Atelier Gallery
            </h2>
            <p className="text-[#8e8a80] text-sm sm:text-base mt-3 font-light">
              Explore our curated portfolio across two complementary collections: Signature Transformations and Editorial Texture Finishes.
            </p>
          </div>

          {/* Interactive Lookbook Filters */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#14141a] border border-[#242430] rounded-sm">
            {galleryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-sm cursor-pointer ${
                  activeFilter === filter.id
                    ? "bg-[#c5a059] text-[#0b0b0e] font-semibold shadow-sm"
                    : "text-[#8e8a80] hover:text-[#f5f2eb]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: Collection I · Signature Salon Artistry & Transformations
           ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#242430]">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#dec17c] flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Collection I</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f5f2eb]">
                Signature Hair Artistry & Transformations
              </h3>
            </div>
            <p className="text-xs text-[#8e8a80] mt-2 sm:mt-0 font-light max-w-sm sm:text-right">
              Mastery across multi-tonal balayage, curl sculpting, artisan braids, bespoke extensions, and silk press.
            </p>
          </div>

          {filteredSignature.length === 0 ? (
            <div className="py-12 text-center text-xs uppercase tracking-widest text-[#8e8a80] bg-[#121217] border border-[#242430] rounded-sm">
              No looks in Collection I matching this filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSignature.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectLook(item)}
                  className="group relative bg-[#121217] border border-[#242430] hover:border-[#c5a059]/50 overflow-hidden cursor-pointer transition-all duration-300 rounded-sm aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Action Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#0b0b0e]/75 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#dec17c] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <div className="text-[11px] font-medium tracking-widest uppercase text-[#dec17c] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#f5f2eb] leading-snug group-hover:text-[#dec17c] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8e8a80] mt-1 line-clamp-1 font-light">
                      {item.subtitle}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Details & Inquire</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Elegant Editorial Divider */}
        <div className="relative my-16 flex items-center justify-center">
          <div className="w-full border-t border-[#242430]" />
          <div className="absolute px-4 bg-[#0e0e12] flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[#dec17c]">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#c5a059]" />
            <span>Editorial Retrospective</span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#c5a059]" />
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: Collection II · Editorial Texture, Precision & Studio Finishes
           ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-8 border-b border-[#242430]">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#dec17c] flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Collection II</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f5f2eb]">
                Editorial Texture & Studio Finishes
              </h3>
            </div>
            <p className="text-xs text-[#8e8a80] mt-2 sm:mt-0 font-light max-w-sm sm:text-right">
              Detailed textural close-ups, high-shine copper butterfly layers, goddess braids, and Nantwich Road salon suites.
            </p>
          </div>

          {filteredEditorial.length === 0 ? (
            <div className="py-12 text-center text-xs uppercase tracking-widest text-[#8e8a80] bg-[#121217] border border-[#242430] rounded-sm">
              No looks in Collection II matching this filter.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEditorial.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSelectLook(item)}
                  className="group relative bg-[#121217] border border-[#242430] hover:border-[#c5a059]/50 overflow-hidden cursor-pointer transition-all duration-300 rounded-sm aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Action Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#0b0b0e]/75 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#dec17c] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Caption Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <div className="text-[11px] font-medium tracking-widest uppercase text-[#dec17c] mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#f5f2eb] leading-snug group-hover:text-[#dec17c] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8e8a80] mt-1 line-clamp-1 font-light">
                      {item.subtitle}
                    </p>

                    <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Details & Inquire</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

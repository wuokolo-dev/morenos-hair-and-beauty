import React, { useState } from "react";
import { galleryFilters, galleryItems } from "../data/gallery";
import { Maximize2, Sparkles, ArrowRight } from "lucide-react";

interface GalleryProps {
  onSelectLook: (item: (typeof galleryItems)[0]) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectLook }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#0e0e12] relative border-b border-[#242430]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-2.5">
              Visual Portfolio & Lookbook
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#f5f2eb] tracking-tight">
              Atelier Gallery
            </h2>
            <p className="text-[#8e8a80] text-sm sm:text-base mt-3 font-light">
              A curated retrospective of bespoke hair artistry, textural braids, dimensional coloring, and our tranquil salon environment.
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
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
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#f5f2eb] leading-snug group-hover:text-[#dec17c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8e8a80] mt-1 line-clamp-1">
                  {item.subtitle}
                </p>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase text-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details & Book</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

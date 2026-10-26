import React, { useState } from "react";
import { serviceCategories, salonServices } from "../data/services";
import { Clock, Calendar, Check, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? salonServices
      : salonServices.filter((s) => s.categoryId === activeCategory);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0b0b0e] relative border-b border-[#242430]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.24em] uppercase text-[#dec17c] mb-2.5">
              Specialist Hair Menu · All Hair Types
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#f5f2eb] tracking-tight">
              Salon Services & Artistry
            </h2>
            <p className="text-[#8e8a80] text-sm sm:text-base mt-3 font-light">
              From Afro to Caucasian hair, our Crewe specialists offer curly hair dry cutting, bespoke extension fitting, precision cuts, and aesthetic care.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs uppercase tracking-widest text-[#8e8a80]">Guide Pricing (GBP £)</span>
            <div className="text-sm text-[#dec17c] mt-0.5">Final pricing confirmed during in-salon consultation</div>
          </div>
        </div>

        {/* Interactive Filter Tabs (Functional buttons with active states) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 py-2.5 rounded-sm text-xs font-medium tracking-[0.12em] uppercase transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#c5a059] text-[#0b0b0e] font-semibold shadow-[0_2px_12px_rgba(197,160,89,0.2)]"
                  : "bg-[#14141a] text-[#c9c4b7] hover:text-[#f5f2eb] hover:bg-[#1a1a24] border border-[#242430]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group bg-[#121217] border border-[#242430] hover:border-[#c5a059]/40 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Service Image with Measured Gradient Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181822]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category label */}
                  <div className="absolute top-3.5 left-4 text-[11px] font-medium tracking-widest uppercase text-[#f5f2eb] bg-[#0b0b0e]/75 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                    {service.categoryName}
                  </div>
                </div>

                {/* Service Card Details */}
                <div className="p-6">
                  {/* Title */}
                  <div className="flex items-baseline justify-between gap-4 mb-2.5">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#f5f2eb] font-normal group-hover:text-[#dec17c] transition-colors leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* Duration and Guide Price */}
                  <div className="flex items-center gap-2 text-xs text-[#8e8a80] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#dec17c]" />
                      <span className="tabular-nums font-mono">{service.duration}</span>
                    </span>
                    <span aria-hidden="true" className="text-[#dec17c]">·</span>
                    <span className="text-[#8e8a80]">Bespoke Consultation</span>
                  </div>

                  <div className="text-xs text-[#dec17c] font-medium mb-4">
                    {service.priceNote}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#c9c4b7] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature inclusions */}
                  <div className="space-y-2 pt-4 border-t border-[#242430]/70 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#8e8a80]">
                        <Check className="w-3.5 h-3.5 text-[#dec17c] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service.id)}
                  type="button"
                  className="w-full py-3 px-4 rounded-sm text-xs font-semibold tracking-widest uppercase bg-[#1a1a24] hover:bg-[#c5a059] text-[#f5f2eb] hover:text-[#0b0b0e] border border-[#242430] hover:border-[#c5a059] transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <Calendar className="w-3.5 h-3.5 group-hover/btn:text-[#0b0b0e] text-[#dec17c] transition-colors" />
                  <span>Book This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

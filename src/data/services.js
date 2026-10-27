/**
 * Moreno’s Hair&Beauty Services Catalog.
 * Based on verified salon specialties:
 * - Curly Hair Cutting & Sculpting
 * - Hair Extensions (Specialist)
 * - All Hair Types: Afro to Caucasian
 * - Precision Haircuts, Color, Aesthetics & Treatments
 *
 * Note: Individual price tiers are guide ranges in GBP (£) subject to
 * in-person hair assessment and confirmation by the salon.
 */

export const serviceCategories = [
  { id: "all", name: "All Offerings" },
  { id: "curly", name: "Curly Hair Specialist" },
  { id: "extensions", name: "Hair Extensions" },
  { id: "haircuts", name: "Precision Cuts & Styling" },
  { id: "afro-textured", name: "Afro & Textured Hair" },
  { id: "color", name: "Color & Balayage" },
  { id: "aesthetics", name: "Aesthetics & Care" },
];

export const salonServices = [
  {
    id: "curly-cut-sculpt",
    categoryId: "curly",
    categoryName: "Curly Hair Specialist",
    name: "Specialist Curly Hair Cut & Moisture Sculpt",
    priceNote: "Guide from £65 · Subject to hair length & density",
    duration: "75–90 min",
    description: "Anatomical dry curl-by-curl precision cutting respecting natural bounce, curl grouping, and volume balance. Includes deep hydration cleanse, curl defining ritual, and diffuse finish.",
    image: "/images/service_curly_cut_1793042076958.jpg",
    features: [
      "Specialist curl pattern & porosity assessment",
      "Curl-by-curl dry sculpting technique",
      "Hydrating botanical cleanse & diffuse definition",
    ],
    featured: true,
  },
  {
    id: "hair-extensions-consult",
    categoryId: "extensions",
    categoryName: "Hair Extensions",
    name: "Bespoke Hair Extensions Application",
    priceNote: "Price on Consultation · Bespoke matching",
    duration: "120–240 min",
    description: "Specialist extension fitting tailored to all textures from Afro to Caucasian hair. Seamless blend, volume enhancement, and length matching with professional aftercare advice.",
    image: "/images/service_bespoke_extensions_1793042078150.jpg",
    features: [
      "Texture, color & density custom matching",
      "Gentle non-damaging application methods",
      "Blending haircut & styling finish included",
    ],
    featured: true,
  },
  {
    id: "precision-haircut",
    categoryId: "haircuts",
    categoryName: "Precision Cuts & Styling",
    name: "Precision Haircut, Wash & Blowout",
    priceNote: "Guide from £45 · All hair textures",
    duration: "60 min",
    description: "Tailored wet or dry precision cutting, bespoke wash at our tranquil basin, and luxury blowout styling tailored for your lifestyle and face shape.",
    image: "/images/service_precision_cut_1793042077984.jpg",
    features: [
      "Professional pre-cut consultation",
      "Invigorating wash & conditioning ritual",
      "Round-brush or sleek thermal finish",
    ],
    featured: true,
  },
  {
    id: "bohemian-knotless-braids",
    categoryId: "afro-textured",
    categoryName: "Afro & Textured Hair",
    name: "Artisan Knotless Braids & Protective Styling",
    priceNote: "Guide from £95 · Dependent on length & style",
    duration: "180–300 min",
    description: "Gentle, tension-free parting and protective braid styling celebrating Afro and textured hair. Expertly installed to protect delicate roots and edges.",
    image: "/images/service_artisan_braids_1793022122255.jpg",
    features: [
      "Zero-tension root parting method",
      "Scalp and edge moisturizing treatment",
      "Long-lasting protective finish",
    ],
    featured: true,
  },
  {
    id: "dimensional-balayage-color",
    categoryId: "color",
    categoryName: "Color & Balayage",
    name: "Dimensional Balayage & Gloss Tone",
    priceNote: "Guide from £110 · Patch test required",
    duration: "150–210 min",
    description: "Hand-blended customized lightening ribbons tailored to compliment your skin undertone and natural base shade, sealed with an acidic high-shine gloss.",
    image: "/images/service_balayage_color_1793022124089.jpg",
    features: [
      "Bespoke color mapping & 48h patch test requirement",
      "Bond-protecting lightening system",
      "Gloss toner and restorative mask",
    ],
    featured: false,
  },
  {
    id: "silk-press-treatment",
    categoryId: "afro-textured",
    categoryName: "Afro & Textured Hair",
    name: "Signature Silk Press & Hydration Infusion",
    priceNote: "Guide from £60 · Chemical-free smoothing",
    duration: "90 min",
    description: "Deep steam conditioning treatment followed by a precision thermal silk press that leaves natural textured hair weightless, silky, and with mirror-like shine.",
    image: "/images/service_silk_press_1793042075726.jpg",
    features: [
      "Hydrating steam conditioning infusion",
      "Thermal heat defense shield",
      "Smooth, fluid movement with zero chemical processing",
    ],
    featured: false,
  },
  {
    id: "aesthetics-hair-ritual",
    categoryId: "aesthetics",
    categoryName: "Aesthetics & Care",
    name: "Aesthetic Scalp & Hair Rejuvenation Ritual",
    priceNote: "Guide from £50 · Rejuvenating care",
    duration: "45–60 min",
    description: "Targeted aesthetic scalp therapy and intensive fiber replenishment formulated to soothe the scalp, remove buildup, and restore vibrant hair health.",
    image: "/images/service_scalp_ritual_1793042077913.jpg",
    features: [
      "Dermal exfoliation & scalp purification",
      "Botanical nutrient infusion",
      "Aromatherapy relaxation finish",
    ],
    featured: false,
  },
];

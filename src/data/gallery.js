/**
 * Curated Gallery for Moreno’s Hair&Beauty.
 * Two distinct, complementary portfolio collections:
 * 1. Collection I: Signature Transformations & Artistry
 * 2. Collection II: Editorial Texture, Finishes & Salon Atmosphere
 *
 * All items feature 100% distinct, high-resolution salon photography.
 */

export const galleryFilters = [
  { id: "all", label: "All Looks" },
  { id: "curly", label: "Curly Hair" },
  { id: "extensions", label: "Hair Extensions" },
  { id: "afro", label: "Afro & Textured" },
  { id: "cuts", label: "Precision Cuts" },
  { id: "color", label: "Color & Balayage" },
];

/**
 * Collection I — Signature Salon Portfolio / Transformations & Core Specialties
 */
export const signatureCollection = [
  {
    id: "sig-01",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "color",
    title: "Luminous Honey Balayage & Beach Waves",
    subtitle: "Multi-tonal sunlit ribbons hand-painted with dimensional depth and gloss toner finish",
    image: "/images/gallery_honey_balayage_1793042097621.jpg",
    aspect: "square",
    serviceRef: "dimensional-balayage-color",
  },
  {
    id: "sig-02",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "curly",
    title: "Specialist 3C/4A Defined Curl Sculpt",
    subtitle: "Dry curl-by-curl anatomical cutting preserving elasticity, density, and natural crown volume",
    image: "/images/gallery_curly_volume_1793042097990.jpg",
    aspect: "square",
    serviceRef: "curly-cut-sculpt",
  },
  {
    id: "sig-03",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "afro",
    title: "Waist-Length Artisan Knotless Braids",
    subtitle: "Zero-tension scalp partings, neat knotless feed-in roots, and delicate gold filigree accents",
    image: "/images/gallery_knotless_waist_1793042098867.jpg",
    aspect: "tall",
    serviceRef: "bohemian-knotless-braids",
  },
  {
    id: "sig-04",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "extensions",
    title: "Seamless Caramel & Brunette Extension Blend",
    subtitle: "Invisible custom weft application delivering touchable length, volume, and effortless bouncy blowout",
    image: "/images/gallery_caramel_extensions_1793042099743.jpg",
    aspect: "square",
    serviceRef: "hair-extensions-consult",
  },
  {
    id: "sig-05",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "afro",
    title: "Ultra-Fluid Silk Press with Bouncy Finish",
    subtitle: "Steam hydration infusion and thermal smoothing creating weightless flow and mirror reflection",
    image: "/images/gallery_silkpress_flip_1793042100604.jpg",
    aspect: "square",
    serviceRef: "silk-press-treatment",
  },
  {
    id: "sig-06",
    collection: "signature",
    collectionTitle: "Collection I · Signature Artistry",
    category: "cuts",
    title: "Architectural Precision Textured Pixie Cut",
    subtitle: "Expertly sculpted tapered neckline with soft texturized crown and face-framing fringe",
    image: "/images/gallery_textured_pixie_1793042100592.jpg",
    aspect: "square",
    serviceRef: "precision-haircut",
  },
];

/**
 * Collection II — Editorial Texture, Precision & Studio Finishes
 */
export const editorialCollection = [
  {
    id: "edt-01",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "color",
    title: "Radiant Copper Bronze Butterfly Layers",
    subtitle: "Rich warm autumn copper gloss paired with sweeping 90s-inspired voluminous blowout layers",
    image: "/images/gallery_copper_layers_1793042115118.jpg",
    aspect: "square",
    serviceRef: "dimensional-balayage-color",
  },
  {
    id: "edt-02",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "afro",
    title: "Bohemian Goddess Braids & Soft Curls",
    subtitle: "Square-parted artisan box braids accented with cascading spiral tendrils throughout",
    image: "/images/gallery_goddess_braids_1793042115796.jpg",
    aspect: "tall",
    serviceRef: "bohemian-knotless-braids",
  },
  {
    id: "edt-03",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "curly",
    title: "Honey-Caramel Hydrated Ringlets",
    subtitle: "Botanical moisture infusion defining natural corkscrew curls with luminous dimensional tone",
    image: "/images/gallery_honey_ringlets_1793042116267.jpg",
    aspect: "square",
    serviceRef: "curly-cut-sculpt",
  },
  {
    id: "edt-04",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "cuts",
    title: "Liquid Glass Hair Dark Espresso Lob",
    subtitle: "Ultra-sharp geometric perimeter with glass-like light refraction and fluid movement",
    image: "/images/gallery_espresso_gloss_1793042116526.jpg",
    aspect: "square",
    serviceRef: "precision-haircut",
  },
  {
    id: "edt-05",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "extensions",
    title: "Sculpted Hollywood Glamour Waves",
    subtitle: "Luxury density enhancement styled into timeless S-pattern red carpet waves with golden shimmer",
    image: "/images/gallery_hollywood_waves_1793042117236.jpg",
    aspect: "square",
    serviceRef: "hair-extensions-consult",
  },
  {
    id: "edt-06",
    collection: "editorial",
    collectionTitle: "Collection II · Editorial Texture",
    category: "all",
    title: "Atelier Styling Suites on Nantwich Road",
    subtitle: "Backlit circular LED mirrors, dark oak & brass styling stations, and serene Crewe salon atmosphere",
    image: "/images/gallery_salon_stations_1793042118334.jpg",
    aspect: "wide",
    serviceRef: "aesthetics-hair-ritual",
  },
];

/**
 * Combined catalog of all 12 distinct gallery looks for seamless searching and modal lookup.
 */
export const galleryItems = [...signatureCollection, ...editorialCollection];

/**
 * Salon configuration and verified business details for Moreno’s Hair&Beauty.
 * Source: Verified business profile, Google Reviews, Instagram, Facebook, and Treatwell listings.
 */

export const salonConfig = {
  name: "Moreno’s Hair&Beauty",
  shortName: "Moreno’s",
  tagline: "Curly Hair Cutting & Hair Extension Specialist · All Hair Types",
  creed: "From Afro to Caucasian hair, we celebrate every strand.",
  philosophy: "Prominently located at 119 Nantwich Road in Crewe, this contemporary salon is your destination for top-tier styling, precision cutting, custom hair extensions, and aesthetic services for all hair textures.",
  
  // Real Google Reviews & Rating metrics provided
  rating: {
    score: 5.0,
    totalReviews: 44,
    source: "Google Reviews",
    verifiedQuotes: [
      {
        quote: "Excellent salon, good location, has parking, very beautiful and pleasant place!",
        source: "Google Review",
      },
      {
        quote: "Absolutely fantastic experience from start to finish.",
        source: "Google Review",
      },
      {
        quote: "Quick but proper service, good company too!",
        source: "Google Review",
      },
    ],
  },

  // Formspree live booking enquiry endpoint
  bookingEndpoint: "https://formspree.io/f/meaaazal",

  // WhatsApp Configuration:
  // Note: Only landline +44 1270 255992 is verified; mobile WhatsApp number is not yet provided by the salon.
  whatsapp: {
    isVerified: false, // Flag indicating no dedicated WhatsApp mobile provided yet
    number: "", // Awaiting salon owner confirmation
    displayNumber: "Pending Salon Mobile Confirmation",
    defaultMessage: "Hello Moreno’s Hair&Beauty, I would like to inquire about booking an appointment.",
  },

  contact: {
    phone: "+44 1270 255992",
    displayPhone: "01270 255992",
    internationalPhone: "+44 1270 255992",
    email: "contact@morenoshairbeauty.co.uk", // Concept placeholder labeled as subject to confirmation
    emailVerified: false,
    address: {
      street: "119 Nantwich Rd",
      city: "Crewe",
      county: "Cheshire",
      postcode: "CW2 6BA",
      country: "United Kingdom",
      parking: "Dedicated customer parking available on-site",
    },
    mapsUrl: "https://maps.google.com/?q=Moreno’s+Hair%26Beauty+119+Nantwich+Rd+Crewe+CW2+6BA",
  },

  hours: [
    { days: "Current Day Status", hours: "Open · Closes 4:30 PM (Verified on Google)" },
    { days: "Weekly Appointments", hours: "Contact 01270 255992 for daily schedules & availability" },
    { days: "Consultations", hours: "Pre-booking & Walk-in subject to stylist availability" },
  ],

  amenities: [
    { title: "All Hair Types Welcomed", desc: "Specialist expertise celebrating every texture from Afro to Caucasian hair." },
    { title: "Dedicated Customer Parking", desc: "Convenient on-site parking for an unhurried, comfortable salon experience." },
    { title: "Curly Hair Cutting & Styling", desc: "Anatomical dry-cutting and moisture shaping designed specifically for curls." },
    { title: "Hair Extensions & Aesthetics", desc: "Top-tier bespoke extensions, protective styling, and aesthetic treatments." },
  ],

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/morenoshairbeauty", handle: "@morenoshairbeauty" },
    { name: "Facebook", url: "https://www.facebook.com/morenoshairbeauty", handle: "Moreno’s Hair&Beauty" },
    { name: "Treatwell", url: "https://www.treatwell.co.uk", handle: "Moreno’s Hair&Beauty on Treatwell" },
  ],

  disclaimer: "This website is an unofficial modern digital concept prototype created for Moreno’s Hair&Beauty (119 Nantwich Rd, Crewe) pending owner review and approval. Booking inquiries are in demonstration mode.",
};

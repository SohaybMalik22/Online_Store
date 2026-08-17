/**
 * Single place the shop owner edits: name, contact, hours, socials, hero slides.
 * Nothing else in the app hardcodes these.
 */

export const site = {
  name: "Sonia Zari",
  fullName: "Sonia Zari Boutique",
  tagline: "Elegance woven into every thread",
  intro:
    "A small atelier of formal, party and bridal wear — every piece cut, stitched and finished by hand in our studio.",
  phone: "+92 300 1234567",
  phoneHref: "tel:+923001234567",
  whatsapp: "+92 300 1234567",
  whatsappHref: "https://wa.me/923001234567",
  email: "hello@soniazari.pk",
  address: {
    line1: "Shop 12, Boulevard Mall",
    line2: "Gulberg III, Lahore, Pakistan",
    mapsHref: "https://maps.google.com/?q=Gulberg+III+Lahore",
  },
  hours: [
    { days: "Monday — Saturday", time: "12:00 pm — 9:00 pm" },
    { days: "Sunday", time: "2:00 pm — 8:00 pm" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "WhatsApp", href: "https://wa.me/923001234567" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  instagramHandle: "@soniazari.boutique",
} as const;

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  /** Where the subject sits in the frame, so faces never get cropped out. */
  position?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "33210512",
    alt: "Model in a flowing embroidered suit from the new collection",
    eyebrow: "New Collection 2026",
    title: "Elegance Woven\nInto Every Thread",
    subtitle:
      "Hand-finished silhouettes for the woman who dresses with intention.",
    ctaLabel: "Explore",
    ctaHref: "/collection/formal",
    position: "50% 8%",
  },
  {
    image: "13124449",
    alt: "Bride in a hand-worked bridal lehenga",
    eyebrow: "The Bridal Atelier",
    title: "For The Day\nYou Remember Forever",
    subtitle:
      "Custom bridals, fitted over three appointments — never rushed, never repeated.",
    ctaLabel: "View Bridals",
    ctaHref: "/collection/bridal",
    position: "50% 10%",
  },
  {
    image: "34182973",
    alt: "Velvet party wear with hand embellishment",
    eyebrow: "Evening & Occasion",
    title: "Made For\nThe Night To Come",
    subtitle: "Velvet, organza and hand-set work for mehndi, mayun and eid.",
    ctaLabel: "See Party Wear",
    ctaHref: "/collection/party-wear",
    position: "50% 12%",
  },
];

export const usps = [
  {
    title: "Hand-Finished",
    body: "Every hem, bead and dori is set by hand in our own studio.",
  },
  {
    title: "Custom Stitching",
    body: "Any piece can be re-cut to your measurements at no extra step.",
  },
  {
    title: "Premium Fabric",
    body: "Pure silk, raw silk, organza and chiffon — sourced, never substituted.",
  },
  {
    title: "22 Years In Craft",
    body: "Two generations of the same family, the same two hands on the shears.",
  },
];

export const testimonials = [
  {
    quote:
      "I walked in with a photo on my phone and walked out three fittings later with something better than the photo. My bridal was exactly what I had in my head.",
    name: "Hira A.",
    detail: "Bridal, Lahore",
  },
  {
    quote:
      "The fabric quality is what keeps me coming back. Three years of formals from here and not one of them has lost its fall.",
    name: "Sana M.",
    detail: "Formal Wear",
  },
  {
    quote:
      "They took my mother's old dupatta and worked it into my party piece. That's not a shop, that's a craftsman.",
    name: "Zoya K.",
    detail: "Party Wear",
  },
];

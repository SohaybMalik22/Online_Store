/**
 * The catalogue. Display only — deliberately no price field anywhere.
 *
 * `images` holds Pexels photo ids (placeholders). When the boutique's own
 * shoot is ready, drop full https URLs in the same array — imgUrl() passes
 * anything starting with http straight through.
 */

export type CategorySlug = "formal" | "party-wear" | "bridal";

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  description: string;
  fabric: string;
  care: string;
  work: string[];
  pieces: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  isNew?: boolean;
  featured?: boolean;
};

export const categories: {
  slug: CategorySlug;
  name: string;
  short: string;
  blurb: string;
  intro: string;
  cover: string;
  coverPosition?: string;
}[] = [
  {
    slug: "formal",
    name: "Formal Wear",
    short: "Formal",
    blurb: "Everyday elegance, stitched to sit right",
    intro:
      "Lawn, cotton-net and chiffon three-pieces for daawats, office and the days in between — light work, clean cuts, nothing loud.",
    cover: "36090333",
    coverPosition: "50% 14%",
  },
  {
    slug: "party-wear",
    name: "Party Wear",
    short: "Party Wear",
    blurb: "Velvet, organza and a little shine",
    intro:
      "Mehndi, mayun, engagements and eid — pieces cut to catch the light the moment you move.",
    cover: "34688051",
    coverPosition: "50% 14%",
  },
  {
    slug: "bridal",
    name: "Bridal Wear",
    short: "Bridal",
    blurb: "One bride, one piece, never repeated",
    intro:
      "Our atelier collection. Every bridal is drawn, framed and hand-worked for a single client and fitted over three appointments.",
    cover: "12959396",
    coverPosition: "50% 14%",
  },
];

export const categoryBySlug = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
) as Record<CategorySlug, (typeof categories)[number]>;

const S = ["XS", "S", "M", "L", "XL"];

export const products: Product[] = [
  // ---------------------------------------------------------------- FORMAL
  {
    slug: "meher-embroidered-kameez",
    name: "Meher Embroidered Kameez",
    category: "formal",
    tagline: "Straight kameez, resham work",
    description:
      "A straight-cut kameez in printed cotton-silk with fine resham work running down the front panel. Side slits to the hip so it moves with you, not against you.",
    fabric: "Cotton silk",
    care: "Dry clean, or gentle cold hand wash. Cool iron on the reverse.",
    work: ["Resham thread", "Front panel embroidery", "Side slits"],
    pieces: "Three piece — kameez, shalwar, dupatta",
    sizes: [...S, "Unstitched"],
    colors: [
      { name: "Ink Black", hex: "#26262b" },
      { name: "Deep Olive", hex: "#4e5340" },
    ],
    images: ["29413606", "27603234"],
    isNew: true,
    featured: true,
  },
  {
    slug: "sitara-lawn-three-piece",
    name: "Sitara Lawn Three-Piece",
    category: "formal",
    tagline: "Summer lawn, printed dupatta",
    description:
      "Featherweight lawn in a warm marigold, with a printed chiffon dupatta and plain trousers. The one you reach for when it is forty degrees and you still have somewhere to be.",
    fabric: "Pure lawn, chiffon dupatta",
    care: "Machine wash cold, separately for the first two washes.",
    work: ["Digital print", "Embroidered neckline", "Printed dupatta"],
    pieces: "Three piece — shirt, trouser, dupatta",
    sizes: [...S, "Unstitched"],
    colors: [
      { name: "Marigold", hex: "#dfa03c" },
      { name: "Coral", hex: "#e0836f" },
    ],
    images: ["20382106", "28213801"],
  },
  {
    slug: "zehra-chiffon-suit",
    name: "Zehra Chiffon Suit",
    category: "formal",
    tagline: "Soft drape, kora border",
    description:
      "Pure chiffon in a deep bottle green, with kora and dabka worked along the sleeve and hem borders. Lined through the body, sheer at the sleeve.",
    fabric: "Pure chiffon, silk lining",
    care: "Dry clean only.",
    work: ["Kora & dabka border", "Sheer sleeve", "Full lining"],
    pieces: "Three piece — shirt, inner, dupatta",
    sizes: S,
    colors: [
      { name: "Bottle Green", hex: "#2f4a3a" },
      { name: "Wine", hex: "#6b1c34" },
    ],
    images: ["29413592", "33210484"],
    featured: true,
  },
  {
    slug: "aiza-cotton-net-kurta",
    name: "Aiza Cotton-Net Kurta",
    category: "formal",
    tagline: "Long kurta, chikankari",
    description:
      "A long cotton-net kurta with white-on-white chikankari across the yoke. Quiet enough for the office, dressed enough for a lunch after.",
    fabric: "Cotton net",
    care: "Hand wash cold. Dry flat in shade.",
    work: ["Chikankari", "Scalloped hem", "Cotton slip included"],
    pieces: "Two piece — kurta, slip",
    sizes: S,
    colors: [
      { name: "Pearl White", hex: "#eee9df" },
      { name: "Stone Grey", hex: "#b6b2aa" },
    ],
    images: ["25184995", "27603163"],
    isNew: true,
  },
  {
    slug: "rida-angrakha-kurta",
    name: "Rida Angrakha Kurta",
    category: "formal",
    tagline: "Angrakha cut, tie fastening",
    description:
      "The traditional angrakha, drafted with a soft crossover front and a self-fabric tie at the waist. Powder blue, with tilla work following the crossover line.",
    fabric: "Karandi",
    care: "Dry clean recommended.",
    work: ["Angrakha crossover", "Tilla work", "Self tie"],
    pieces: "Three piece — angrakha, shalwar, dupatta",
    sizes: S,
    colors: [
      { name: "Powder Blue", hex: "#a9c3d6" },
      { name: "Ivory", hex: "#efe7d9" },
    ],
    images: ["36090370", "35485443"],
  },
  {
    slug: "nashwa-silk-shalwar-suit",
    name: "Nashwa Silk Shalwar Suit",
    category: "formal",
    tagline: "Raw silk, banded collar",
    description:
      "Raw silk with a banded collar and a straight silhouette, finished with a narrow tilla border. Structured without being stiff.",
    fabric: "Raw silk",
    care: "Dry clean only.",
    work: ["Banded collar", "Tilla border", "Concealed placket"],
    pieces: "Three piece — kameez, shalwar, dupatta",
    sizes: S,
    colors: [
      { name: "Deep Red", hex: "#8a2230" },
      { name: "Rust", hex: "#a75a34" },
    ],
    images: ["27603164", "36090333"],
    featured: true,
  },
  {
    slug: "hooriya-jacquard-two-piece",
    name: "Hooriya Jacquard Two-Piece",
    category: "formal",
    tagline: "Woven texture, no embroidery",
    description:
      "A woven jacquard two-piece that gets all its interest from the cloth itself. No embroidery, no border — just a good fabric cut properly.",
    fabric: "Silk jacquard",
    care: "Dry clean only.",
    work: ["Woven jacquard", "Unembellished", "Straight trouser"],
    pieces: "Two piece — shirt, trouser",
    sizes: S,
    colors: [
      { name: "Silver Grey", hex: "#b8bbbd" },
      { name: "Dove", hex: "#cfc9c0" },
    ],
    images: ["27321998", "33210514"],
  },
  {
    slug: "suhana-printed-kurta",
    name: "Suhana Printed Kurta",
    category: "formal",
    tagline: "Block print, easy fit",
    description:
      "Hand block-printed cotton in aubergine, cut loose through the body with a deep pocket set into each side seam.",
    fabric: "Block-printed cotton",
    care: "Machine wash cold. Colours settle after the first wash.",
    work: ["Hand block print", "Side pockets", "Loose fit"],
    pieces: "Two piece — kurta, trouser",
    sizes: [...S, "Unstitched"],
    colors: [
      { name: "Aubergine", hex: "#4a3a55" },
      { name: "Indigo", hex: "#39456b" },
    ],
    images: ["20593502", "35485416"],
  },

  // ------------------------------------------------------------ PARTY WEAR
  {
    slug: "aleena-velvet-suit",
    name: "Aleena Velvet Suit",
    category: "party-wear",
    tagline: "Silk velvet, mukaish scatter",
    description:
      "Silk velvet in true black, scattered with mukaish so it reads plain in daylight and lights up under a chandelier. Worn with a matching velvet dupatta.",
    fabric: "Silk velvet",
    care: "Dry clean only. Never press directly on the pile.",
    work: ["Mukaish scatter", "Dabka neckline", "Velvet dupatta"],
    pieces: "Three piece — shirt, trouser, dupatta",
    sizes: S,
    colors: [
      { name: "True Black", hex: "#1c1c1f" },
      { name: "Deep Wine", hex: "#5f1a30" },
    ],
    images: ["34182973", "34688051", "27817081"],
    isNew: true,
    featured: true,
  },
  {
    slug: "zoya-organza-gown",
    name: "Zoya Organza Gown",
    category: "party-wear",
    tagline: "Sequinned, full sleeve",
    description:
      "A floor-length organza gown worked over in tonal sequins, with a full sleeve and a soft flare from the waist. Built over a lined slip so nothing shows through.",
    fabric: "Silk organza over crepe",
    care: "Dry clean only. Store hanging, covered.",
    work: ["Hand-set sequins", "Full sleeve", "Lined slip"],
    pieces: "Two piece — gown, slip",
    sizes: S,
    colors: [
      { name: "Champagne", hex: "#ded0b0" },
      { name: "Dusty Rose", hex: "#d3a6ab" },
    ],
    images: ["36409025", "17471731"],
    featured: true,
  },
  {
    slug: "nyla-sequin-column",
    name: "Nyla Sequin Column",
    category: "party-wear",
    tagline: "Narrow cut, all-over shine",
    description:
      "A narrow column in fully sequinned mesh, lined edge to edge. Nothing on it but the shine and the cut — which is the point.",
    fabric: "Sequinned mesh, crepe lining",
    care: "Dry clean only. Store flat.",
    work: ["All-over sequin", "Edge-to-edge lining", "Invisible zip"],
    pieces: "One piece",
    sizes: S,
    colors: [
      { name: "Onyx", hex: "#232326" },
      { name: "Gunmetal", hex: "#5d5f66" },
    ],
    images: ["13012420", "38738314"],
  },
  {
    slug: "hania-chiffon-suit",
    name: "Hania Chiffon Suit",
    category: "party-wear",
    tagline: "Navy chiffon, gota kinari",
    description:
      "Navy chiffon with gota kinari edging the shirt, sleeves and the full length of the dupatta. Weightless to wear through a long evening.",
    fabric: "Pure chiffon",
    care: "Dry clean only.",
    work: ["Gota kinari", "Embroidered neckline", "Full-width dupatta"],
    pieces: "Three piece — shirt, trouser, dupatta",
    sizes: S,
    colors: [
      { name: "Midnight Navy", hex: "#232a45" },
      { name: "Charcoal", hex: "#3b3b3f" },
    ],
    images: ["28213811", "33210512"],
    isNew: true,
  },
  {
    slug: "daniya-cape-gown",
    name: "Daniya Cape Gown",
    category: "party-wear",
    tagline: "Sheer cape over a fitted inner",
    description:
      "A fitted inner with a floor-length sheer cape worked in tone-on-tone thread. Wear the cape for the entrance and drop it for dinner.",
    fabric: "Net cape, crepe inner",
    care: "Dry clean only.",
    work: ["Tone-on-tone thread", "Detachable cape", "Two piece"],
    pieces: "Two piece — inner, cape",
    sizes: S,
    colors: [
      { name: "Sage", hex: "#9aa88c" },
      { name: "Lilac", hex: "#c6b3cd" },
    ],
    images: ["37962704", "36104971"],
  },
  {
    slug: "mina-jamawar-kurta",
    name: "Mina Jamawar Kurta",
    category: "party-wear",
    tagline: "Woven jamawar, short cut",
    description:
      "A short jamawar kurta with a banded collar, worn over a straight silk trouser. Heavy cloth, minimal work — the weave does the talking.",
    fabric: "Banarsi jamawar",
    care: "Dry clean only.",
    work: ["Woven jamawar", "Banded collar", "Silk trouser"],
    pieces: "Two piece — kurta, trouser",
    sizes: S,
    colors: [
      { name: "Crimson", hex: "#8e2130" },
      { name: "Royal Blue", hex: "#26407a" },
    ],
    images: ["13085573", "29413562"],
  },
  {
    slug: "eshal-tissue-lehenga",
    name: "Eshal Tissue Lehenga",
    category: "party-wear",
    tagline: "Light skirt, fitted blouse",
    description:
      "A tissue lehenga cut in fewer, wider panels so it stays light on the hip. Paired with a plain fitted blouse and a net dupatta.",
    fabric: "Tissue silk, net dupatta",
    care: "Dry clean only. Store hanging.",
    work: ["Wide-panel skirt", "Fitted blouse", "Cancan underskirt"],
    pieces: "Three piece — lehenga, blouse, dupatta",
    sizes: S,
    colors: [
      { name: "Deep Red", hex: "#8c1f2c" },
      { name: "Emerald", hex: "#1f5347" },
    ],
    images: ["38027175", "24498697"],
  },
  {
    slug: "alina-pearl-kurta",
    name: "Alina Pearl Kurta",
    category: "party-wear",
    tagline: "Rose pink, pearl work",
    description:
      "Rose-pink net over a silk slip, with pearl and crystal work set by hand across the yoke and cuffs. Soft in daylight, bright under lights.",
    fabric: "Net over silk",
    care: "Dry clean only.",
    work: ["Hand pearl work", "Crystal cuffs", "Silk slip"],
    pieces: "Three piece — kurta, slip, dupatta",
    sizes: S,
    colors: [
      { name: "Rose Pink", hex: "#d98f96" },
      { name: "Blush", hex: "#e9c5c8" },
    ],
    images: ["33210508", "29650435"],
  },

  // ---------------------------------------------------------------- BRIDAL
  {
    slug: "aurelia-bridal-lehenga",
    name: "Aurelia Bridal Lehenga",
    category: "bridal",
    tagline: "Hand zardozi, six months on the frame",
    description:
      "Our atelier piece. Hand zardozi worked over raw silk across a full-panelled skirt, with a matched choli and a net dupatta finished in kiran. Six months on the frame, three fittings on you, and never made again for anyone else.",
    fabric: "Raw silk, net dupatta",
    care: "Specialist dry clean only. Store flat, wrapped in muslin.",
    work: ["Hand zardozi", "Dabka & naqshi", "Kiran-finished dupatta"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Deep Maroon", hex: "#6a172f" },
      { name: "Antique Gold", hex: "#b18d4c" },
    ],
    images: ["12791932", "12791933", "12791934", "12792006"],
    featured: true,
  },
  {
    slug: "serena-nikkah-lehenga",
    name: "Serena Nikkah Lehenga",
    category: "bridal",
    tagline: "Ivory and old gold",
    description:
      "A nikkah lehenga in ivory tissue, with old-gold dabka concentrated at the choli and fading out down the skirt. Lighter than a barat piece, and meant to be.",
    fabric: "Ivory tissue, silk lining",
    care: "Specialist dry clean only.",
    work: ["Old-gold dabka", "Sheesha accents", "Scalloped dupatta"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Ivory", hex: "#eee5d4" },
      { name: "Champagne", hex: "#ddc9a2" },
    ],
    images: ["16125951", "30809485"],
    isNew: true,
    featured: true,
  },
  {
    slug: "noorjahan-valima-set",
    name: "Noorjahan Valima Set",
    category: "bridal",
    tagline: "Blush organza, gota kinari",
    description:
      "A valima set in blush organza with gota kinari edging the full skirt and the dupatta. Carries lighter than it looks, which matters by the third event.",
    fabric: "Organza, silk lining",
    care: "Specialist dry clean only.",
    work: ["Gota kinari", "Resham floral", "Full-flare skirt"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Blush Pink", hex: "#e5b7bd" },
      { name: "Rose Gold", hex: "#d7a58e" },
    ],
    images: ["30184702", "33343591", "37628608"],
  },
  {
    slug: "mahnoor-mehndi-set",
    name: "Mahnoor Mehndi Set",
    category: "bridal",
    tagline: "Mirror work on a bright ground",
    description:
      "A mehndi set built for a long night — sheesha and resham over a light cotton-silk ground, cut loose through the body so you can actually dance in it.",
    fabric: "Cotton silk",
    care: "Dry clean only.",
    work: ["Sheesha mirror work", "Resham thread", "Loose cut"],
    pieces: "Three piece — kurta, gharara, dupatta",
    sizes: S,
    colors: [
      { name: "Marigold", hex: "#d9863a" },
      { name: "Parrot Green", hex: "#3f7a4a" },
    ],
    images: ["11726516", "28405815"],
  },
  {
    slug: "zoya-heirloom-gharara",
    name: "Zoya Heirloom Gharara",
    category: "bridal",
    tagline: "Traditional cut, hand-pieced knee",
    description:
      "A gharara made the old way — the knee joint pieced by hand from woven brocade, with a short kurti and a farshi dupatta that trails behind you.",
    fabric: "Banarsi brocade, silk velvet kurti",
    care: "Specialist dry clean only. Store flat.",
    work: ["Hand-pieced knee joint", "Farshi dupatta", "Velvet kurti"],
    pieces: "Three piece — gharara, kurti, dupatta",
    sizes: S,
    colors: [
      { name: "Deep Maroon", hex: "#5f1626" },
      { name: "Gold", hex: "#b5903f" },
    ],
    images: ["14089250", "5192861"],
  },
  {
    slug: "inara-reception-lehenga",
    name: "Inara Reception Lehenga",
    category: "bridal",
    tagline: "Structured choli, trailing dupatta",
    description:
      "A reception lehenga with a boned choli and a long trailing dupatta, worked in tonal beadwork so it catches light without shouting.",
    fabric: "Silk, beaded net dupatta",
    care: "Specialist dry clean only.",
    work: ["Boned choli", "Tonal beadwork", "Trailing dupatta"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Fuchsia", hex: "#a83b64" },
      { name: "Deep Maroon", hex: "#65182c" },
    ],
    images: ["13124449", "38720214"],
  },
  {
    slug: "rania-barat-lehenga",
    name: "Rania Barat Lehenga",
    category: "bridal",
    tagline: "Classic red, full zardozi",
    description:
      "The classic barat red, worked in full zardozi from choli to hem. Heavy in the hand and heavy on the frame — six panels, each one finished before the next is started.",
    fabric: "Raw silk",
    care: "Specialist dry clean only. Store flat, wrapped in muslin.",
    work: ["Full zardozi", "Naqshi & sitara", "Six-panel skirt"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Barat Red", hex: "#8f1a24" },
      { name: "Deep Maroon", hex: "#68162a" },
    ],
    images: ["12796883", "12762487", "28457317"],
    featured: true,
  },
  {
    slug: "amal-heritage-lehenga",
    name: "Amal Heritage Lehenga",
    category: "bridal",
    tagline: "Maroon and antique gold",
    description:
      "Deep maroon raw silk with antique-gold kora, dabka and naqshi laid over the whole skirt. Cut long and hemmed to your height on the last fitting.",
    fabric: "Raw silk, net dupatta",
    care: "Specialist dry clean only.",
    work: ["Kora & dabka", "Naqshi", "Hemmed to height"],
    pieces: "Three piece — lehenga, choli, dupatta",
    sizes: S,
    colors: [
      { name: "Deep Maroon", hex: "#621a2e" },
      { name: "Antique Gold", hex: "#a98a4d" },
    ],
    images: ["12762484", "12411105", "38526712"],
  },
];

/* ------------------------------------------------------------------ utils */

/**
 * Pexels ids in, full URLs out. Anything already starting with http passes
 * through untouched, so real photography can be dropped in one product at a
 * time without touching this file.
 */
export function imgUrl(id: string) {
  if (id.startsWith("http")) return id;
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function byCategory(category: CategorySlug) {
  return products.filter((p) => p.category === category);
}

export function featured(limit = 8) {
  const picked = products.filter((p) => p.featured);
  const rest = products.filter((p) => !p.featured);
  return [...picked, ...rest].slice(0, limit);
}

export function related(product: Product, limit = 4) {
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug,
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.slug !== product.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Filter facets, derived from the data so they never drift out of sync. */
export function facetsFor(category: CategorySlug) {
  const items = byCategory(category);
  const fabrics = [...new Set(items.map((p) => p.fabric))].sort();
  const sizes = [...new Set(items.flatMap((p) => p.sizes))];
  const colors = [
    ...new Map(items.flatMap((p) => p.colors).map((c) => [c.name, c])).values(),
  ].sort((a, b) => a.name.localeCompare(b.name));
  const work = [...new Set(items.flatMap((p) => p.work))].sort();
  return { fabrics, sizes, colors, work };
}

"use client";

import Link from "next/link";
import { categoryBySlug, type Product } from "@/data/products";
import { useSaved } from "./useSaved";
import SmartImage from "./SmartImage";
import { IconHeart } from "./icons";

const GRID_SIZES =
  "(max-width: 640px) 46vw, (max-width: 1024px) 31vw, (max-width: 1400px) 23vw, 320px";

export default function ProductCard({
  product,
  priority = false,
  showCategory = false,
  sizes = GRID_SIZES,
}: {
  product: Product;
  priority?: boolean;
  showCategory?: boolean;
  sizes?: string;
}) {
  const { isSaved, toggle, ready } = useSaved();
  const saved = ready && isSaved(product.slug);
  const hover = product.images[1];

  return (
    <article className="group relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-ivory-deep">
          <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]">
            <SmartImage
              id={product.images[0]}
              alt={product.name}
              sizes={sizes}
              priority={priority}
            />
          </div>

          {/* Second shot fades in on hover — desktop only, never fetched on mobile */}
          {hover && (
            <div className="absolute inset-0 hidden opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:block">
              <SmartImage id={hover} alt="" sizes={sizes} quality={62} />
            </div>
          )}

          {product.isNew && (
            <span className="eyebrow absolute left-3 top-3 z-10 rounded-full bg-ivory/95 px-3 py-1 text-[9px] text-wine shadow-sm">
              New
            </span>
          )}

          {/* Bottom sheet on hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10 opacity-0 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <p className="eyebrow text-[9px] text-gold-soft">View Piece</p>
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => toggle(product.slug)}
        aria-label={saved ? `Remove ${product.name} from shortlist` : `Save ${product.name}`}
        aria-pressed={saved}
        className={`absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 backdrop-blur-sm transition-all duration-300 hover:bg-ivory ${
          saved ? "text-wine" : "text-ink-soft hover:text-wine"
        }`}
      >
        <span className="h-[18px] w-[18px]">
          <IconHeart filled={saved} />
        </span>
      </button>

      <div className="pt-3.5">
        {showCategory && (
          <p className="eyebrow text-[9px] text-gold">
            {categoryBySlug[product.category].short}
          </p>
        )}
        <h3 className="font-display mt-1 text-[1.05rem] leading-snug text-ink">
          <Link href={`/product/${product.slug}`} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-[0.8rem] text-ink-soft">{product.tagline}</p>
      </div>
    </article>
  );
}

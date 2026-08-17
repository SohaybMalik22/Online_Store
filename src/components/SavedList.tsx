"use client";

import Link from "next/link";
import { getProduct } from "@/data/products";
import ProductCard from "./ProductCard";
import { ProductGridSkeleton } from "./ProductCardSkeleton";
import { useSaved } from "./useSaved";
import { IconArrow } from "./icons";

export default function SavedList() {
  const { saved, ready } = useSaved();

  const items = saved
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8 sm:py-20">
      {/* Storage reads on the client, so show skeletons for that first frame */}
      {!ready ? (
        <ProductGridSkeleton count={4} />
      ) : items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-display text-[1.7rem] text-ink">
            Your shortlist is empty
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[0.92rem] leading-relaxed text-ink-soft">
            Tap the heart on any piece and it will wait for you here — handy when
            you finally walk into the shop.
          </p>
          <Link href="/collection/bridal" className="btn-gold mt-8">
            Start Browsing
            <span className="h-3.5 w-3.5">
              <IconArrow />
            </span>
          </Link>
        </div>
      ) : (
        <>
          <p className="text-[0.82rem] text-ink-soft">
            <span className="text-ink">{items.length}</span>{" "}
            {items.length === 1 ? "piece" : "pieces"} saved
          </p>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-11 md:grid-cols-3 xl:grid-cols-4">
            {items.map((p, i) => (
              <ProductCard key={p.slug} product={p} showCategory priority={i < 4} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

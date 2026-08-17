import Link from "next/link";
import { featured } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./icons";

export default function FeaturedRail() {
  const items = featured(8);

  return (
    <section className="bg-ivory-deep/55 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Just Off The Frame"
            title="New This Season"
            align="left"
          />
          <Reveal delay={140}>
            <Link href="/collection/bridal" className="btn-outline">
              See Everything
              <span className="h-3.5 w-3.5">
                <IconArrow />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-11 md:grid-cols-3 xl:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 4) * 90}>
              <ProductCard product={p} showCategory priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

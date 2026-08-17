import Link from "next/link";
import { byCategory, categories } from "@/data/products";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";
import { IconArrow } from "./icons";

export default function CategoryCards() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="The Collections"
        title="Three Ways To Be Dressed"
        body="Everything in the shop lives in one of these three racks. Browse online, then come in and try what caught your eye."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.slug} delay={i * 130}>
            <Link
              href={`/collection/${cat.slug}`}
              className="group relative block overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[3/4] w-full bg-ivory-deep md:aspect-[4/5]">
                <div className="absolute inset-0 transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]">
                  <SmartImage
                    id={cat.cover}
                    alt={cat.name}
                    position={cat.coverPosition}
                    sizes="(max-width: 768px) 90vw, 31vw"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent transition-opacity duration-700 group-hover:from-black/85" />

                {/* Inset gold hairline that draws itself on hover */}
                <span className="pointer-events-none absolute inset-4 rounded-md border border-gold-soft/0 transition-all duration-700 group-hover:inset-3 group-hover:border-gold-soft/60" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="eyebrow text-[9px] text-gold-soft">
                    {byCategory(cat.slug).length} Pieces
                  </p>
                  <h3 className="font-display mt-2 text-[1.7rem] leading-tight">
                    {cat.name}
                  </h3>
                  {/* Two lines reserved so all three titles sit on one line */}
                  <p className="mt-1.5 min-h-[2.6em] max-w-[26ch] text-[0.82rem] leading-relaxed text-white/75">
                    {cat.blurb}
                  </p>

                  <span className="eyebrow mt-5 flex items-center gap-2 text-[9px] text-gold-soft opacity-0 transition-all duration-500 group-hover:opacity-100 md:-translate-y-1 md:group-hover:translate-y-0">
                    Explore
                    <span className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-1">
                      <IconArrow />
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

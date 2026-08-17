"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { site } from "@/data/site";
import { useSaved } from "./useSaved";
import { IconArrow, IconHeart, IconPin } from "./icons";

const TABS = ["Description", "Fabric & Care", "Sizing"] as const;

export default function ProductDetails({ product }: { product: Product }) {
  const { isSaved, toggle, ready } = useSaved();
  const [tab, setTab] = useState<(typeof TABS)[number]>("Description");
  const saved = ready && isSaved(product.slug);

  return (
    <div>
      <p className="eyebrow text-gold">{product.tagline}</p>
      <h1 className="font-display mt-3 text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.15] text-ink">
        {product.name}
      </h1>

      <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
        {product.description}
      </p>

      {/* Craft chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {product.work.map((w) => (
          <span
            key={w}
            className="rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-[0.74rem] tracking-wide text-ink-soft"
          >
            {w}
          </span>
        ))}
      </div>

      <div className="mt-8 h-px w-full bg-line" />

      <div className="mt-7">
        <p className="eyebrow text-[9px] text-ink-soft">What You Get</p>
        <p className="mt-2 text-[0.92rem] text-ink">{product.pieces}</p>
      </div>

      {/* Colours — informational, not selectable */}
      <div className="mt-7">
        <p className="eyebrow text-[9px] text-ink-soft">Available In</p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          {product.colors.map((c) => (
            <span key={c.name} className="flex items-center gap-2">
              <span
                className="h-6 w-6 rounded-full ring-1 ring-line"
                style={{ background: c.hex }}
                aria-hidden
              />
              <span className="text-[0.84rem] text-ink">{c.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-7">
        <p className="eyebrow text-[9px] text-ink-soft">Stitched Sizes</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="min-w-[44px] border border-line px-3 py-1.5 text-center text-[0.8rem] text-ink"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-3 text-[0.8rem] text-ink-soft">
          Not your size? Every piece can be re-cut to measure in store.
        </p>
      </div>

      {/* Actions — shortlist and directions only. Nothing is sold online. */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => toggle(product.slug)}
          aria-pressed={saved}
          className={`flex flex-1 items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.69rem] font-semibold uppercase tracking-[0.24em] transition-all duration-400 ${
            saved
              ? "bg-wine text-white"
              : "border border-wine text-wine hover:bg-wine hover:text-white"
          }`}
        >
          <span className="h-4 w-4">
            <IconHeart filled={saved} />
          </span>
          {saved ? "In Your Shortlist" : "Save This Piece"}
        </button>

        <a
          href={site.address.mapsHref}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-[0.69rem] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-400 hover:-translate-y-0.5"
        >
          <span className="h-4 w-4">
            <IconPin />
          </span>
          Visit To Try
        </a>
      </div>

      <p className="mt-4 text-[0.78rem] leading-relaxed text-ink-soft">
        This is a display catalogue — pieces are shown here and sold at the
        boutique. Save what you like and bring the list in with you.
      </p>

      {/* Tabs */}
      <div className="mt-11">
        <div role="tablist" aria-label="Piece details" className="flex gap-7 border-b border-line">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              id={`tab-${t.replace(/\W+/g, "-")}`}
              aria-controls="tabpanel-details"
              aria-selected={tab === t}
              tabIndex={tab === t ? 0 : -1}
              onClick={() => setTab(t)}
              className={`relative -mb-px pb-3 text-[0.72rem] uppercase tracking-[0.16em] transition-colors ${
                tab === t ? "text-wine" : "text-ink-soft hover:text-ink"
              }`}
            >
              {t}
              <span
                className={`absolute inset-x-0 bottom-0 h-px bg-wine transition-transform duration-400 ease-[cubic-bezier(.22,1,.36,1)] ${
                  tab === t ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="tabpanel-details"
          aria-labelledby={`tab-${tab.replace(/\W+/g, "-")}`}
          className="pt-5 text-[0.9rem] leading-relaxed text-ink-soft"
        >
          {tab === "Description" && <p>{product.description}</p>}

          {tab === "Fabric & Care" && (
            <dl className="space-y-3">
              <div>
                <dt className="eyebrow text-[9px] text-ink">Fabric</dt>
                <dd className="mt-1">{product.fabric}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[9px] text-ink">Care</dt>
                <dd className="mt-1">{product.care}</dd>
              </div>
            </dl>
          )}

          {tab === "Sizing" && (
            <div className="space-y-3">
              <p>
                Stitched in {product.sizes.join(", ")}. Our sizes run true, cut
                with a little ease through the waist.
              </p>
              <p>
                Come in for a measure and we will adjust any piece to you —
                there is no charge for a first alteration.
              </p>
              <Link href="/about#sizing" className="link-underline inline-flex items-center gap-2 text-wine">
                Full size guide
                <span className="h-3.5 w-3.5">
                  <IconArrow />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

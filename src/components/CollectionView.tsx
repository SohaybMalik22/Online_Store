"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { IconChevron, IconClose } from "./icons";

type Facets = {
  fabrics: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  work: string[];
};

type Sort = "featured" | "newest" | "az";

const SORTS: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "New In" },
  { value: "az", label: "A — Z" },
];

const PAGE = 8;

function FilterGroup({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line py-5">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between"
      >
        <span className="eyebrow text-ink">{title}</span>
        <span
          className={`h-4 w-4 text-ink-soft transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <IconChevron />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">{children}</div>
      </div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-1.5 text-[0.86rem] text-ink-soft transition-colors hover:text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="grid h-[15px] w-[15px] shrink-0 place-items-center border border-line bg-white transition-colors peer-checked:border-wine peer-checked:bg-wine">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-white" aria-hidden>
          <path
            d="m2.5 6.2 2.3 2.3 4.7-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="peer-checked:text-ink">{label}</span>
    </label>
  );
}

export default function CollectionView({
  items,
  facets,
}: {
  items: Product[];
  facets: Facets;
}) {
  const [fabric, setFabric] = useState<string[]>([]);
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [work, setWork] = useState<string[]>([]);
  const [sort, setSort] = useState<Sort>("featured");
  const [shown, setShown] = useState(PAGE);
  const [drawer, setDrawer] = useState(false);

  const toggle =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) => (v: string) => {
      setter((prev) =>
        prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v],
      );
      setShown(PAGE);
    };

  const activeCount = fabric.length + size.length + color.length + work.length;

  const filtered = useMemo(() => {
    const list = items.filter(
      (p) =>
        (!fabric.length || fabric.includes(p.fabric)) &&
        (!size.length || p.sizes.some((s) => size.includes(s))) &&
        (!color.length || p.colors.some((c) => color.includes(c.name))) &&
        (!work.length || p.work.some((w) => work.includes(w))),
    );

    const sorted = [...list];
    if (sort === "newest") {
      sorted.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    } else if (sort === "az") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return sorted;
  }, [items, fabric, size, color, work, sort]);

  const clearAll = () => {
    setFabric([]);
    setSize([]);
    setColor([]);
    setWork([]);
    setShown(PAGE);
  };

  const filterPanel = (
    <>
      <FilterGroup title="Fabric">
        {facets.fabrics.map((f) => (
          <Check
            key={f}
            label={f}
            checked={fabric.includes(f)}
            onChange={() => toggle(setFabric)(f)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="flex flex-wrap gap-2 pt-1">
          {facets.sizes.map((s) => {
            const on = size.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggle(setSize)(s)}
                aria-pressed={on}
                className={`min-w-[42px] border px-3 py-1.5 text-[0.78rem] transition-all duration-300 ${
                  on
                    ? "border-wine bg-wine text-white"
                    : "border-line text-ink-soft hover:border-wine hover:text-wine"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup title="Colour">
        <div className="flex flex-wrap gap-2.5 pt-1">
          {facets.colors.map((c) => {
            const on = color.includes(c.name);
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => toggle(setColor)(c.name)}
                aria-pressed={on}
                title={c.name}
                className={`h-7 w-7 rounded-full ring-offset-2 ring-offset-ivory transition-all duration-300 ${
                  on ? "ring-2 ring-wine" : "ring-1 ring-line hover:ring-gold"
                }`}
                style={{ background: c.hex }}
              >
                <span className="sr-only">{c.name}</span>
              </button>
            );
          })}
        </div>
      </FilterGroup>

      <FilterGroup title="Craft" defaultOpen={false}>
        {facets.work.map((w) => (
          <Check
            key={w}
            label={w}
            checked={work.includes(w)}
            onChange={() => toggle(setWork)(w)}
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-gold">Refine</p>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[0.72rem] text-ink-soft underline transition-colors hover:text-wine"
                >
                  Clear ({activeCount})
                </button>
              )}
            </div>
            <div className="mt-2 max-h-[calc(100vh-11rem)] overflow-y-auto pr-1">
              {filterPanel}
            </div>
          </div>
        </aside>

        <div>
          {/* Toolbar */}
          <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
            <p className="text-[0.82rem] text-ink-soft">
              <span className="text-ink">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "piece" : "pieces"}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawer(true)}
                className="eyebrow flex items-center gap-2 border border-line px-4 py-2 text-ink transition-colors hover:border-wine hover:text-wine lg:hidden"
              >
                Filter{activeCount > 0 ? ` (${activeCount})` : ""}
              </button>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  aria-label="Sort pieces"
                  className="eyebrow cursor-pointer appearance-none border border-line bg-transparent py-2 pl-4 pr-9 text-ink outline-none transition-colors hover:border-wine focus:border-wine"
                >
                  {SORTS.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft">
                  <IconChevron />
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display text-2xl text-ink">Nothing matches that</p>
              <p className="mx-auto mt-3 max-w-sm text-[0.9rem] text-ink-soft">
                Loosen a filter — or call the shop, we may have it on the rack
                without it being on the site yet.
              </p>
              <button type="button" onClick={clearAll} className="btn-outline mt-7">
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-11 md:grid-cols-3">
                {filtered.slice(0, shown).map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 3) * 90}>
                    <ProductCard
                      product={p}
                      priority={i < 3}
                      sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 300px"
                    />
                  </Reveal>
                ))}
              </div>

              {shown < filtered.length && (
                <div className="mt-14 text-center">
                  <button
                    type="button"
                    onClick={() => setShown((s) => s + PAGE)}
                    className="btn-outline"
                  >
                    Load More ({filtered.length - shown})
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[65] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close filters"
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-400 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-ivory px-6 pb-8 pt-5 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            drawer ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="sticky top-0 -mx-6 flex items-center justify-between bg-ivory px-6 pb-3">
            <p className="eyebrow text-gold">Refine</p>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close filters"
              className="h-5 w-5 text-ink"
            >
              <IconClose />
            </button>
          </div>

          {filterPanel}

          <div className="mt-6 flex gap-3">
            {activeCount > 0 && (
              <button type="button" onClick={clearAll} className="btn-outline flex-1">
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setDrawer(false)}
              className="btn-gold flex-1 justify-center"
            >
              Show {filtered.length}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

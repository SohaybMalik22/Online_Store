"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { categoryBySlug, products } from "@/data/products";
import SmartImage from "./SmartImage";
import { IconClose, IconSearch } from "./icons";

/**
 * Client-side search over the static catalogue — no network round trip, so
 * results appear as fast as the user types.
 */
export default function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset on the way out, so the next open starts clean without an effect
  // writing state during render.
  const close = useCallback(() => {
    setQ("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 260);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term.length < 2) return [];
    return products
      .filter((p) =>
        [p.name, p.tagline, p.fabric, p.category, ...p.work]
          .join(" ")
          .toLowerCase()
          .includes(term),
      )
      .slice(0, 6);
  }, [q]);

  return (
    <div
      className={`fixed inset-0 z-[70] transition-opacity duration-400 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close search"
        onClick={close}
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
      />

      <div
        className={`relative mx-auto w-full max-w-3xl bg-ivory px-5 pb-8 pt-7 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] sm:px-8 ${
          open ? "translate-y-0" : "-translate-y-6"
        }`}
      >
        <div className="flex items-center gap-4 border-b border-line pb-4">
          <span className="h-5 w-5 shrink-0 text-gold">
            <IconSearch />
          </span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a piece, fabric or occasion…"
            className="font-display w-full bg-transparent text-xl text-ink outline-none placeholder:text-ink-soft/60 sm:text-2xl"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close search"
            className="h-5 w-5 shrink-0 text-ink-soft transition-colors hover:text-wine"
          >
            <IconClose />
          </button>
        </div>

        <div className="mt-5">
          {q.trim().length < 2 ? (
            <div className="flex flex-wrap gap-2">
              {["Bridal", "Organza", "Lawn", "Zardozi", "Velvet", "Chiffon"].map(
                (tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQ(tag)}
                    className="rounded-full border border-line px-4 py-1.5 text-xs tracking-wide text-ink-soft transition-colors hover:border-gold hover:text-wine"
                  >
                    {tag}
                  </button>
                ),
              )}
            </div>
          ) : results.length === 0 ? (
            <p className="py-6 text-sm text-ink-soft">
              Nothing matched “{q}”. Try a fabric or an occasion — or{" "}
              <Link href="/contact" className="text-wine underline">
                ask us directly
              </Link>
              .
            </p>
          ) : (
            <ul className="max-h-[52vh] divide-y divide-line/70 overflow-y-auto">
              {results.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/product/${p.slug}`}
                    onClick={close}
                    className="group flex items-center gap-4 py-3"
                  >
                    <span className="relative h-16 w-12 shrink-0 overflow-hidden rounded-sm bg-ivory-deep">
                      <SmartImage
                        id={p.images[0]}
                        alt={p.name}
                        sizes="48px"
                        quality={45}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="font-display block truncate text-base text-ink transition-colors group-hover:text-wine">
                        {p.name}
                      </span>
                      <span className="eyebrow block text-ink-soft/80">
                        {categoryBySlug[p.category].name}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

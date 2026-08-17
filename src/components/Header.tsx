"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { site } from "@/data/site";
import { useSaved } from "./useSaved";
import SearchOverlay from "./SearchOverlay";
import { IconClose, IconHeart, IconMenu, IconSearch } from "./icons";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const NAV = [
  { label: "Home", href: "/" },
  { label: "Formal", href: "/collection/formal" },
  { label: "Party Wear", href: "/collection/party-wear" },
  { label: "Bridal", href: "/collection/bridal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { saved, ready } = useSaved();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 40,
    () => false,
  );

  // Only the home page has a photo behind the bar; everywhere else it's solid.
  const overHero = pathname === "/";
  const solid = scrolled || !overHero || menu;

  useEffect(() => {
    document.body.style.overflow = menu || search ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu, search]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
            : "bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-5 sm:h-20 sm:px-8">
          {/* Left — mobile menu */}
          <button
            type="button"
            onClick={() => setMenu(true)}
            aria-label="Open menu"
            className={`h-6 w-6 shrink-0 lg:hidden ${solid ? "text-ink" : "text-white"}`}
          >
            <IconMenu />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className={`font-display shrink-0 text-2xl tracking-[0.18em] transition-colors duration-500 sm:text-[28px] ${
              solid ? "text-wine" : "text-white"
            }`}
          >
            {site.name.toUpperCase()}
          </Link>

          {/* Desktop nav */}
          <nav className="mx-auto hidden items-center gap-9 lg:flex">
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className={`link-underline eyebrow transition-colors duration-500 ${
                    solid
                      ? active
                        ? "text-wine"
                        : "text-ink-soft hover:text-wine"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right — actions */}
          <div
            className={`ml-auto flex items-center gap-4 sm:gap-5 lg:ml-0 ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Search the collection"
              className="h-[22px] w-[22px] transition-opacity hover:opacity-60"
            >
              <IconSearch />
            </button>
            <Link
              href="/saved"
              aria-label="Your shortlist"
              className="relative h-[22px] w-[22px] transition-opacity hover:opacity-60"
            >
              <IconHeart filled={ready && saved.length > 0} />
              {ready && saved.length > 0 && (
                <span className="absolute -right-2 -top-2 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">
                  {saved.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menu ? "" : "pointer-events-none"}`}
        aria-hidden={!menu}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Close menu"
          onClick={() => setMenu(false)}
          className={`absolute inset-0 bg-ink/45 transition-opacity duration-400 ${
            menu ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-[82%] max-w-[340px] flex-col bg-ivory transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
            menu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <span className="font-display text-2xl tracking-[0.18em] text-wine">
              {site.name.toUpperCase()}
            </span>
            <button
              type="button"
              onClick={() => setMenu(false)}
              aria-label="Close menu"
              className="h-6 w-6 text-ink"
            >
              <IconClose />
            </button>
          </div>

          <nav className="flex flex-col px-5 py-3">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                style={{ transitionDelay: menu ? `${120 + i * 45}ms` : "0ms" }}
                className={`font-display border-b border-line/70 py-4 text-2xl text-ink transition-all duration-500 hover:text-wine ${
                  menu ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-1 border-t border-line px-5 py-6 text-sm text-ink-soft">
            <p className="eyebrow mb-3 text-gold">Visit Us</p>
            <p>{site.address.line1}</p>
            <p>{site.address.line2}</p>
            <a
              href={site.phoneHref}
              onClick={() => setMenu(false)}
              className="mt-3 block text-wine"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}

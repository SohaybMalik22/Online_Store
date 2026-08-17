"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { IconChevron, socialIcon } from "./icons";

const COLUMNS = [
  {
    title: "Collections",
    links: [
      { label: "Formal Wear", href: "/collection/formal" },
      { label: "Party Wear", href: "/collection/party-wear" },
      { label: "Bridal Wear", href: "/collection/bridal" },
      { label: "My Shortlist", href: "/saved" },
    ],
  },
  {
    title: "The Boutique",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Size Guide", href: "/about#sizing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function Column({ title, links }: (typeof COLUMNS)[number]) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ivory/12 py-4 sm:border-0 sm:py-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between sm:pointer-events-none"
      >
        <span className="eyebrow text-gold-soft">{title}</span>
        <span
          className={`h-4 w-4 text-ivory/60 transition-transform duration-300 sm:hidden ${
            open ? "rotate-180" : ""
          }`}
        >
          <IconChevron />
        </span>
      </button>

      <ul
        className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(.22,1,.36,1)] sm:!grid-rows-[1fr] sm:!opacity-100 ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 sm:mt-5"
        }`}
      >
        <li className="min-h-0 space-y-2.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline block w-fit text-[0.88rem] text-ivory/70 transition-colors hover:text-ivory"
            >
              {l.label}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine-deep text-ivory">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold/70" />

      {/* soft motif glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl tracking-[0.2em] text-gold-soft"
            >
              {site.name.toUpperCase()}
            </Link>
            <p className="mt-4 max-w-[34ch] text-[0.88rem] leading-relaxed text-ivory/65">
              {site.intro}
            </p>

            <div className="mt-6 flex gap-3">
              {site.socials.map((s) => {
                const Icon = socialIcon[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-ivory/20 text-ivory/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
                  >
                    <span className="h-[17px] w-[17px]">
                      {Icon ? <Icon /> : null}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {COLUMNS.map((c) => (
            <Column key={c.title} {...c} />
          ))}

          {/* Visit */}
          <div className="pt-4 sm:pt-0">
            <p className="eyebrow text-gold-soft">Visit Us</p>
            <address className="mt-5 space-y-2.5 text-[0.88rem] not-italic leading-relaxed text-ivory/70">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <a
                href={site.phoneHref}
                className="link-underline block w-fit hover:text-ivory"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="link-underline block w-fit hover:text-ivory"
              >
                {site.email}
              </a>
            </address>
            <a
              href={site.address.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-5 inline-block border-b border-gold pb-1 text-[9px] text-gold-soft"
            >
              Open In Maps
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-ivory/12 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[0.78rem] text-ivory/50">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p className="text-[0.78rem] text-ivory/40">
            A display catalogue — pieces are sold in store only.
          </p>
        </div>
      </div>
    </footer>
  );
}

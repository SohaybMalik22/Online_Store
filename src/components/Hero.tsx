"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/site";
import SmartImage from "./SmartImage";
import { IconArrow, IconChevron } from "./icons";

const DURATION = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      DURATION,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  // Pause the carousel while the tab is hidden — no wasted repaints.
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <section
      className="relative h-[86svh] min-h-[520px] w-full overflow-hidden bg-ink sm:h-[92svh]"
      aria-roledescription="carousel"
      aria-label="Featured collections"
    >
      {heroSlides.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.image}
            className={`hero-slide absolute inset-0 ${active ? "" : "pointer-events-none"}`}
            data-active={active}
            aria-hidden={!active}
          >
            <div className="hero-media absolute inset-0 will-change-transform">
              <SmartImage
                id={s.image}
                alt={s.alt}
                sizes="100vw"
                position={s.position}
                quality={i === 0 ? 80 : 72}
                priority={i === 0}
              />
            </div>

            {/* Two-stop scrim: readable text, photo still visible */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/45" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8">
                <div className="max-w-2xl text-white">
                  <p
                    className="hero-line eyebrow flex items-center gap-3 text-gold-soft"
                    style={{ "--line-delay": "120ms" } as React.CSSProperties}
                  >
                    <span className="h-px w-8 bg-gold-soft" />
                    {s.eyebrow}
                  </p>

                  <h1
                    className="hero-line font-display mt-5 whitespace-pre-line text-[clamp(2.4rem,7vw,4.6rem)] font-normal leading-[1.06] tracking-[-0.01em] [text-shadow:0_2px_28px_rgb(0_0_0/0.35)]"
                    style={{ "--line-delay": "240ms" } as React.CSSProperties}
                  >
                    {s.title}
                  </h1>

                  <p
                    className="hero-line mt-5 max-w-md text-[0.95rem] leading-relaxed text-white/85"
                    style={{ "--line-delay": "380ms" } as React.CSSProperties}
                  >
                    {s.subtitle}
                  </p>

                  <div
                    className="hero-line mt-9"
                    style={{ "--line-delay": "500ms" } as React.CSSProperties}
                  >
                    <Link
                      href={s.ctaHref}
                      tabIndex={active ? undefined : -1}
                      className="btn-gold"
                    >
                      {s.ctaLabel}
                      <span className="h-3.5 w-3.5">
                        <IconArrow />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="group py-2"
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-500 ${
                i === index
                  ? "w-9 bg-gold"
                  : "w-3.5 bg-white/45 group-hover:bg-white/80"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 right-6 z-10 hidden flex-col items-center gap-1 text-white/70 sm:flex">
        <span className="eyebrow [writing-mode:vertical-rl] text-[9px]">Scroll</span>
        <span className="animate-bob h-4 w-4">
          <IconChevron />
        </span>
      </div>
    </section>
  );
}

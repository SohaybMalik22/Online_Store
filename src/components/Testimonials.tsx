"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-wine py-20 text-ivory sm:py-28">
      {/* faint quote mark as texture */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 text-[22rem] leading-none text-white/[0.04]"
      >
        &rdquo;
      </span>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow rule-motif text-gold-soft [&::before]:from-transparent [&::before]:to-gold-soft [&::after]:from-transparent [&::after]:to-gold-soft">
            In Their Words
          </p>
        </Reveal>

        <div className="relative mt-9 min-h-[190px] sm:min-h-[170px]">
          {testimonials.map((t, n) => (
            <blockquote
              key={t.name}
              aria-hidden={n !== i}
              className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                n === i
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <p className="font-display text-[clamp(1.15rem,2.6vw,1.65rem)] leading-relaxed text-ivory/95">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <span className="eyebrow text-gold-soft">{t.name}</span>
                <span className="mt-1 block text-xs text-ivory/55">{t.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((t, n) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Read review ${n + 1}`}
              aria-current={n === i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                n === i ? "w-8 bg-gold" : "w-1.5 bg-ivory/30 hover:bg-ivory/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

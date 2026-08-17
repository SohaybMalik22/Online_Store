"use client";

import { useState } from "react";
import SmartImage from "./SmartImage";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  return (
    <div className="flex gap-3 sm:gap-4">
      {/* Thumbnails — horizontal under the photo on phones, vertical beside it above */}
      {images.length > 1 && (
        <div className="order-2 flex shrink-0 gap-3 sm:order-1 sm:flex-col">
          {images.map((id, i) => (
            <button
              key={id + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={`relative h-20 w-[60px] shrink-0 overflow-hidden rounded-sm bg-ivory-deep transition-all duration-300 sm:h-[92px] sm:w-[70px] ${
                i === active
                  ? "ring-1 ring-wine ring-offset-2 ring-offset-ivory"
                  : "opacity-65 hover:opacity-100"
              }`}
            >
              <SmartImage id={id} alt="" sizes="70px" quality={45} />
            </button>
          ))}
        </div>
      )}

      <div className="order-1 min-w-0 flex-1 sm:order-2">
        <div
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setOrigin(
              `${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`,
            );
          }}
          className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-ivory-deep"
        >
          {images.map((id, i) => (
            <div
              key={id + i}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: zoom && i === active ? "scale(1.7)" : "scale(1)",
                transformOrigin: origin,
                transition:
                  "opacity .5s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1)",
              }}
            >
              <SmartImage
                id={id}
                alt={`${name} — view ${i + 1}`}
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 44vw"
                priority={i === 0}
                quality={80}
              />
            </div>
          ))}

          <span className="pointer-events-none absolute bottom-3 right-3 hidden rounded-full bg-ivory/85 px-3 py-1 text-[10px] tracking-widest text-ink-soft backdrop-blur-sm md:block">
            HOVER TO ZOOM
          </span>
        </div>
      </div>
    </div>
  );
}

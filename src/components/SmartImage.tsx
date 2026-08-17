"use client";

import Image from "next/image";
import { useState } from "react";
import { imgUrl } from "@/data/products";

type Props = {
  id: string;
  alt: string;
  /** Responsive size hint — always pass one, it decides how many bytes ship. */
  sizes: string;
  className?: string;
  /** object-position, e.g. "50% 30%" so faces survive the crop. */
  position?: string;
  priority?: boolean;
  quality?: number;
};

/**
 * next/image + a shimmering skeleton that sits underneath until the bytes land,
 * then the photo fades in over it. No layout shift, no white flash, no
 * "kya bakwas website hai" moment on a slow connection.
 */
export default function SmartImage({
  id,
  alt,
  sizes,
  className = "",
  position = "50% 50%",
  priority = false,
  quality = 72,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 skeleton transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={imgUrl(id)}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setLoaded(true)}
        data-loaded={loaded}
        style={{ objectPosition: position }}
        className={`img-fade object-cover ${className}`}
      />
    </>
  );
}

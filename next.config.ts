import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pexels placeholders — replace with the boutique's own CDN/host later.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    // AVIF encodes ~6x slower than WebP, and remote images are only optimized
    // on demand — so a cold cache makes every first page view crawl. Measured
    // on this homepage's 3 above-the-fold images: 2.4s AVIF vs 0.4s WebP; all
    // 29 images cold, 15.7s AVIF. Prod pays that once per variant (then
    // minimumCacheTTL holds it), but in dev the cache is wiped constantly, so
    // every restart looks like "the images are broken". WebP-only in dev.
    formats:
      process.env.NODE_ENV === "production"
        ? ["image/avif", "image/webp"]
        : ["image/webp"],
    // Next 16 requires an explicit allowlist. These are the only values any
    // <SmartImage> passes: thumbs → cards → hero.
    qualities: [45, 58, 62, 72, 80],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 128, 200, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;

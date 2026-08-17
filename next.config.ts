import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pexels placeholders — replace with the boutique's own CDN/host later.
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    formats: ["image/avif", "image/webp"],
    // Next 16 requires an explicit allowlist. These are the only values any
    // <SmartImage> passes: thumbs → cards → hero.
    qualities: [45, 58, 62, 72, 80],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [96, 128, 200, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;

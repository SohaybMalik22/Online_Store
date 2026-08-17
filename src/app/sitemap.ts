import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";

const BASE = "https://soniazari.pk";

export default function sitemap(): MetadataRoute.Sitemap {
  const stat = ["", "/about", "/contact"].map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.6,
  }));

  const cats = categories.map((c) => ({
    url: `${BASE}/collection/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const items = products.map((p) => ({
    url: `${BASE}/product/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...stat, ...cats, ...items];
}

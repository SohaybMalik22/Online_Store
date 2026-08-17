import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionView from "@/components/CollectionView";
import PageHeader from "@/components/PageHeader";
import VisitUs from "@/components/VisitUs";
import {
  byCategory,
  categories,
  categoryBySlug,
  facetsFor,
  type CategorySlug,
} from "@/data/products";

type Params = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category } = await params;
  const cat = categoryBySlug[category as CategorySlug];
  if (!cat) return {};
  return { title: cat.name, description: cat.intro };
}

export default async function CollectionPage({ params }: Params) {
  const { category } = await params;
  const cat = categoryBySlug[category as CategorySlug];
  if (!cat) notFound();

  const items = byCategory(cat.slug);

  return (
    <>
      <PageHeader
        crumbs={[{ label: cat.name }]}
        eyebrow="The Collection"
        title={cat.name}
        body={cat.intro}
      />
      <CollectionView items={items} facets={facetsFor(cat.slug)} />
      <VisitUs />
    </>
  );
}

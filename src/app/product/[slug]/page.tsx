import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import ProductDetails from "@/components/ProductDetails";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  categoryBySlug,
  getProduct,
  imgUrl,
  products,
  related,
} from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.description,
    openGraph: {
      title: p.name,
      description: p.description,
      images: [imgUrl(p.images[0])],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const cat = categoryBySlug[product.category];
  const more = related(product, 4);

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: cat.name, href: `/collection/${cat.slug}` },
          { label: product.name },
        ]}
      />

      <section className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-24">
          <ProductGallery images={product.images} name={product.name} />
          <ProductDetails product={product} />
        </div>
      </section>

      <section className="border-t border-line bg-ivory-deep/45 py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <SectionHeading eyebrow="Keep Looking" title="You May Also Like" />
          <div className="mt-11 grid grid-cols-2 gap-x-5 gap-y-11 md:grid-cols-4">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProductCard product={p} showCategory />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

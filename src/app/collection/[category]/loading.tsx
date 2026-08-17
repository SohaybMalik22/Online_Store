import { ProductGridSkeleton } from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <>
      <div className="border-b border-line bg-ivory-deep/45 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-[1400px] space-y-4 px-6 sm:px-8">
          <div className="skeleton h-3 w-40 rounded-full" />
          <div className="skeleton h-10 w-72 rounded-md" />
          <div className="skeleton h-3.5 w-full max-w-xl rounded-full" />
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          <div className="hidden space-y-6 lg:block">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="space-y-3">
                <div className="skeleton h-3 w-24 rounded-full" />
                <div className="skeleton h-3 w-32 rounded-full" />
                <div className="skeleton h-3 w-28 rounded-full" />
              </div>
            ))}
          </div>
          <div>
            <div className="skeleton h-4 w-24 rounded-full" />
            <div className="mt-9">
              <ProductGridSkeleton count={6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

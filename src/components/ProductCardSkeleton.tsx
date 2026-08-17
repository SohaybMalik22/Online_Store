/** Matches ProductCard's geometry exactly so nothing jumps when data lands. */
export default function ProductCardSkeleton() {
  return (
    <div aria-hidden>
      <div className="skeleton aspect-[3/4] w-full rounded-md" />
      <div className="pt-4 space-y-2.5">
        <div className="skeleton h-3.5 w-3/4 rounded-full" />
        <div className="skeleton h-3 w-1/2 rounded-full" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

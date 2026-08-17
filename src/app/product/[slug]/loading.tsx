export default function Loading() {
  return (
    <>
      <div className="border-b border-line bg-ivory-deep/40 pb-4 pt-24 sm:pt-28">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
          <div className="skeleton h-3 w-56 rounded-full" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          <div className="flex gap-4">
            <div className="hidden shrink-0 flex-col gap-3 sm:flex">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="skeleton h-[92px] w-[70px] rounded-sm" />
              ))}
            </div>
            <div className="skeleton aspect-[3/4] flex-1 rounded-md" />
          </div>

          <div className="space-y-4">
            <div className="skeleton h-3 w-28 rounded-full" />
            <div className="skeleton h-9 w-3/4 rounded-md" />
            <div className="skeleton h-3.5 w-full rounded-full" />
            <div className="skeleton h-3.5 w-11/12 rounded-full" />
            <div className="skeleton h-3.5 w-2/3 rounded-full" />
            <div className="flex gap-2 pt-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="skeleton h-8 w-28 rounded-full" />
              ))}
            </div>
            <div className="skeleton !mt-10 h-12 w-full rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

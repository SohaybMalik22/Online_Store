import Link from "next/link";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="grid min-h-[72svh] place-items-center px-6 py-28 text-center">
      <div>
        <p className="eyebrow rule-motif text-gold">Page 404</p>
        <h1 className="font-display mt-5 text-[clamp(2rem,6vw,3.2rem)] leading-tight text-ink">
          This rack is empty
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-[0.94rem] leading-relaxed text-ink-soft">
          The page you were after has moved or never existed. The collections
          are all still here.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-gold">
            Back Home
            <span className="h-3.5 w-3.5">
              <IconArrow />
            </span>
          </Link>
          <Link href="/collection/bridal" className="btn-outline">
            View Bridals
          </Link>
        </div>
      </div>
    </section>
  );
}

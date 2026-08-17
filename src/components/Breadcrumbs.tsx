import Link from "next/link";
import type { Crumb } from "./PageHeader";

/** Slim breadcrumb bar for pages that own their own <h1> further down. */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-line bg-ivory-deep/40 pb-4 pt-24 sm:pt-28"
    >
      <ol className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-2 px-6 text-[0.72rem] tracking-wide text-ink-soft sm:px-8">
        <li>
          <Link href="/" className="transition-colors hover:text-wine">
            Home
          </Link>
        </li>
        {crumbs.map((c) => (
          <li key={c.label} className="flex items-center gap-2">
            <span className="text-line">/</span>
            {c.href ? (
              <Link href={c.href} className="transition-colors hover:text-wine">
                {c.label}
              </Link>
            ) : (
              <span className="max-w-[55vw] truncate text-ink">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

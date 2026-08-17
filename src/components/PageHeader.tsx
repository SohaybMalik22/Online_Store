import Link from "next/link";
import Reveal from "./Reveal";

export type Crumb = { label: string; href?: string };

export default function PageHeader({
  crumbs,
  eyebrow,
  title,
  body,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory-deep/45 pb-12 pt-28 sm:pb-16 sm:pt-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] tracking-wide text-ink-soft">
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
                  <span className="text-ink">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <Reveal>
            <p className="eyebrow mt-8 flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              {eyebrow}
            </p>
          </Reveal>
        )}

        <Reveal delay={70}>
          <h1 className="font-display mt-3 text-[clamp(2.1rem,5.4vw,3.4rem)] leading-[1.1] text-ink">
            {title}
          </h1>
        </Reveal>

        {body && (
          <Reveal delay={150}>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
              {body}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

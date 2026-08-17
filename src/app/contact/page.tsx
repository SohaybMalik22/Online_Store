import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import {
  IconArrow,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  socialIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Visit ${site.fullName} at ${site.address.line1}, ${site.address.line2}. Call ${site.phone}.`,
};

const CARDS = [
  {
    Icon: IconPin,
    label: "The Boutique",
    lines: [site.address.line1, site.address.line2],
    href: site.address.mapsHref,
    action: "Open in Maps",
    external: true,
  },
  {
    Icon: IconPhone,
    label: "Call Us",
    lines: [site.phone, "Best between 1 pm and 8 pm"],
    href: site.phoneHref,
    action: "Call now",
  },
  {
    Icon: IconMail,
    label: "Email",
    lines: [site.email, "We reply within a day"],
    href: `mailto:${site.email}`,
    action: "Send an email",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Contact" }]}
        eyebrow="Come See Us"
        title="Where To Find Us"
        body="No online orders and no forms to fill — just an address, a phone number and a kettle that is usually on."
      />

      <section className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.label} delay={i * 110}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex h-full flex-col rounded-lg border border-line bg-white/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-28px_rgb(123_30_58/0.4)]"
              >
                <span className="h-6 w-6 text-wine">
                  <c.Icon />
                </span>
                <p className="eyebrow mt-5 text-[9px] text-gold">{c.label}</p>
                <div className="mt-2 space-y-1">
                  {c.lines.map((l, n) => (
                    <p
                      key={l}
                      className={
                        n === 0
                          ? "font-display text-[1.15rem] leading-snug text-ink"
                          : "text-[0.84rem] text-ink-soft"
                      }
                    >
                      {l}
                    </p>
                  ))}
                </div>
                <span className="eyebrow mt-auto flex items-center gap-2 pt-6 text-[9px] text-wine">
                  {c.action}
                  <span className="h-3 w-3 transition-transform duration-400 group-hover:translate-x-1">
                    <IconArrow />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Hours + socials */}
        <div className="mt-16 grid gap-10 rounded-lg bg-blush-soft p-8 sm:p-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="h-6 w-6 text-wine">
                <IconClock />
              </span>
              <h2 className="font-display mt-4 text-[1.6rem] text-ink">
                Opening Hours
              </h2>
              <dl className="mt-5 space-y-3">
                {site.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/70 pb-3"
                  >
                    <dt className="text-[0.9rem] text-ink-soft">{h.days}</dt>
                    <dd className="text-[0.9rem] text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[0.82rem] text-ink-soft">
                Bridal fittings are by appointment — call ahead so we keep the
                room free for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h2 className="font-display text-[1.6rem] text-ink">
                Or Follow Along
              </h2>
              <p className="mt-3 max-w-md text-[0.9rem] leading-relaxed text-ink-soft">
                New pieces go up on Instagram the day they come off the frame —
                usually before they make it onto this site.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {site.socials.map((s) => {
                  const Icon = socialIcon[s.label];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 rounded-full border border-line bg-white/70 px-5 py-2.5 text-[0.8rem] text-ink transition-all duration-400 hover:border-wine hover:bg-wine hover:text-white"
                    >
                      <span className="h-4 w-4">{Icon ? <Icon /> : null}</span>
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

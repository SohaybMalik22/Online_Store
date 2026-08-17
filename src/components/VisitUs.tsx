import { site } from "@/data/site";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import { IconArrow, IconClock, IconPhone, IconPin } from "./icons";

export default function VisitUs() {
  return (
    <section id="visit" className="bg-blush-soft py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-ivory-deep">
            <SmartImage
              id="36104971"
              alt="Inside the Sonia Zari studio"
              sizes="(max-width: 1024px) 92vw, 46vw"
              position="50% 48%"
            />
            <span className="pointer-events-none absolute inset-4 rounded-md border border-white/25" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" />
              The Shop
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="font-display mt-4 text-[clamp(1.9rem,4.2vw,2.9rem)] leading-[1.15] text-ink">
              Everything Here Is
              <br />
              Waiting On A Hanger
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
              This site is our window, not our counter — there is nothing to buy
              here. Browse, note what you like, then come try it on. Tea is on us.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            <Reveal delay={220}>
              <div className="flex gap-4">
                <span className="mt-0.5 h-5 w-5 shrink-0 text-wine">
                  <IconPin />
                </span>
                <div>
                  <p className="eyebrow text-[9px] text-ink-soft">Address</p>
                  <p className="mt-1 text-[0.95rem] text-ink">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="flex gap-4">
                <span className="mt-0.5 h-5 w-5 shrink-0 text-wine">
                  <IconClock />
                </span>
                <div>
                  <p className="eyebrow text-[9px] text-ink-soft">Open</p>
                  <div className="mt-1 space-y-0.5 text-[0.95rem] text-ink">
                    {site.hours.map((h) => (
                      <p key={h.days}>
                        <span className="text-ink-soft">{h.days}</span> · {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="flex gap-4">
                <span className="mt-0.5 h-5 w-5 shrink-0 text-wine">
                  <IconPhone />
                </span>
                <div>
                  <p className="eyebrow text-[9px] text-ink-soft">Call Ahead</p>
                  <a
                    href={site.phoneHref}
                    className="link-underline mt-1 inline-block text-[0.95rem] text-ink"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <a
              href={site.address.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-gold mt-10"
            >
              Get Directions
              <span className="h-3.5 w-3.5">
                <IconArrow />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

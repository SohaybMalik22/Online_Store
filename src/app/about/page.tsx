import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import Testimonials from "@/components/Testimonials";
import UspStrip from "@/components/UspStrip";
import VisitUs from "@/components/VisitUs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: site.intro,
};

const SIZE_ROWS = [
  { size: "XS", bust: "32", waist: "25", hip: "35" },
  { size: "S", bust: "34", waist: "27", hip: "37" },
  { size: "M", bust: "36", waist: "29", hip: "39" },
  { size: "L", bust: "38", waist: "31", hip: "41" },
  { size: "XL", bust: "40", waist: "33", hip: "43" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow="Since 2004"
        title="Two Hands, One Pair Of Shears"
        body={site.intro}
      />

      {/* Story */}
      <section id="story" className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-ivory-deep">
              <SmartImage
                id="27817081"
                alt="At work in the Sonia Zari studio"
                sizes="(max-width: 1024px) 92vw, 46vw"
                position="50% 14%"
              />
            </div>
          </Reveal>

          <div className="space-y-5 text-[0.96rem] leading-relaxed text-ink-soft">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-gold">
                <span className="h-px w-8 bg-gold" />
                Our Story
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.5rem)] leading-[1.18] text-ink">
                It started with one sewing machine and a borrowed room.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p>
                {site.fullName} opened in 2004 with a single machine, a roll of
                raw silk and a stubborn belief that a garment should be cut for
                the person standing in front of you — not for an average.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                Twenty-two years later the room is bigger and there are more
                machines, but the rule has not changed. Every bridal we make is
                made once. Every hem is finished by hand. If a piece does not
                fall right on you, it goes back on the table until it does.
              </p>
            </Reveal>
            <Reveal delay={250}>
              <p>
                This website is a window into that room. Nothing here is for
                sale online — it is here so you know what is on the rack before
                you make the trip.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <UspStrip />

      {/* Sizing */}
      <section id="sizing" className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            Size Guide
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-4 text-[clamp(1.7rem,3.6vw,2.5rem)] text-ink">
            Measurements, In Inches
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-3 max-w-xl text-[0.93rem] leading-relaxed text-ink-soft">
            A starting point only. Come in and we will take your measure
            properly — first alteration is always on us.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-9 overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  {["Size", "Bust", "Waist", "Hip"].map((h) => (
                    <th
                      key={h}
                      className="eyebrow py-3 pr-6 text-[9px] text-ink-soft"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIZE_ROWS.map((r) => (
                  <tr key={r.size} className="border-b border-line/60">
                    <td className="font-display py-3.5 pr-6 text-[1.05rem] text-wine">
                      {r.size}
                    </td>
                    <td className="py-3.5 pr-6 text-[0.9rem] text-ink">{r.bust}&Prime;</td>
                    <td className="py-3.5 pr-6 text-[0.9rem] text-ink">{r.waist}&Prime;</td>
                    <td className="py-3.5 pr-6 text-[0.9rem] text-ink">{r.hip}&Prime;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <Testimonials />
      <VisitUs />
    </>
  );
}

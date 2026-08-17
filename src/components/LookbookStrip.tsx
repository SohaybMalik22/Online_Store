import { site } from "@/data/site";
import Reveal from "./Reveal";
import SmartImage from "./SmartImage";
import SectionHeading from "./SectionHeading";
import { IconInstagram } from "./icons";

const SHOTS = [
  "12959396",
  "12062663",
  "37628619",
  "36090333",
  "33210484",
  "12792006",
];

export default function LookbookStrip() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8">
        <SectionHeading
          eyebrow="From The Studio"
          title="The Lookbook"
          body={`Fittings, finished pieces and work in progress — we post it all at ${site.instagramHandle}.`}
        />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-2.5 lg:px-2.5">
        {SHOTS.map((id, i) => (
          <Reveal key={id} delay={(i % 6) * 70}>
            <a
              href={site.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-sm bg-ivory-deep"
            >
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110">
                <SmartImage
                  id={id}
                  alt="Studio photograph"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  quality={58}
                />
              </div>
              <span className="absolute inset-0 grid place-items-center bg-wine/0 text-white/0 transition-all duration-500 group-hover:bg-wine/45 group-hover:text-white">
                <span className="h-6 w-6">
                  <IconInstagram />
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

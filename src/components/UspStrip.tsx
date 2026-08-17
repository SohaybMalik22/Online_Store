import { usps } from "@/data/site";
import Reveal from "./Reveal";

export default function UspStrip() {
  return (
    <section className="border-y border-line bg-ivory">
      <div className="mx-auto grid max-w-[1400px] gap-px bg-line px-0 sm:grid-cols-2 lg:grid-cols-4">
        {usps.map((u, i) => (
          <Reveal key={u.title} delay={i * 90} className="bg-ivory">
            <div className="px-7 py-10 text-center sm:py-12">
              <span className="font-display mx-auto block text-[1.6rem] leading-none text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-[1.15rem] text-ink">
                {u.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[30ch] text-[0.84rem] leading-relaxed text-ink-soft">
                {u.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

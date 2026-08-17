import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <Reveal>
          <p
            className={`eyebrow text-gold ${centered ? "rule-motif" : "flex items-center gap-3"}`}
          >
            {!centered && <span className="h-px w-8 bg-gold" />}
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2 className="font-display mt-4 text-[clamp(1.85rem,4.2vw,2.9rem)] leading-[1.15] text-ink">
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={170}>
          <p
            className={`mt-4 text-[0.95rem] leading-relaxed text-ink-soft ${
              centered ? "mx-auto max-w-xl" : "max-w-xl"
            }`}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}

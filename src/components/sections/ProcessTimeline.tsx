import { processSteps } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="bg-background px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="From Idea to Impact"
          intro="Six stages, one continuous loop. Every engagement follows the same rhythm — and keeps improving after launch."
        />
        <ol className="mt-16 space-y-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 70} as="li">
              <div className="group grid gap-4 border-t border-border py-8 transition-colors duration-300 hover:border-brand/40 md:grid-cols-[7rem_1fr_1.2fr] md:items-baseline md:gap-10">
                <span className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground/70 transition-colors group-hover:text-brand">
                  {step.number}
                </span>
                <h3 className="text-2xl font-semibold lg:text-3xl">{step.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
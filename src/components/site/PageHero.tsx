import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  aside?: ReactNode | undefined;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background px-5 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-end">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={120} className="lg:pb-3">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
          {aside ? <div className="mt-8">{aside}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
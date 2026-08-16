import { industries } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Industries() {
  return (
    <section className="bg-secondary/40 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries"
          title="Experience Across Industries"
          intro="Different markets, same discipline: understand the buyer, then build the system that reaches them."
        />
        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <li key={industry}>
              <Reveal
                delay={i * 40}
                className="group flex h-full items-center gap-3 bg-background px-5 py-7 transition-colors duration-300 hover:bg-card"
              >
                <span className="font-display text-xs text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium transition-colors group-hover:text-brand">
                  {industry}
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
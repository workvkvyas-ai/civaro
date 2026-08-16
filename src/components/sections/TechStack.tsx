import { technologies } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TechnologyLogo } from "@/components/site/TechnologyLogo";

export function TechStack() {
  return (
    <section className="bg-background px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Technology" title="Powered by Modern Technology" />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechnologyLogo name={item} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

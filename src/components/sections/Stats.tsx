import { stats } from "@/lib/site-data";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";

export function Stats() {
  return (
    <section className="bg-background px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-y border-border py-14 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <p className="font-display text-5xl font-semibold tracking-tight lg:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
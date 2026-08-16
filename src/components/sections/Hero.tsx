import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import heroWebsiteCreator from "@/assets/hero-website-creator.svg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-24">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid-faint opacity-45" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              Design better. Build smarter. Grow faster.
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.6rem]">
              We Design, Build &amp; Grow{" "}
              <span className="text-gradient-brand">Digital Experiences.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We partner with ambitious businesses to create powerful brands, high-performing
              websites, scalable digital products, and marketing strategies that drive measurable
              growth.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link to="/contact">
                  Start a Project
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-10 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Strategy • Design • Development • Marketing
            </p>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src={heroWebsiteCreator}
              alt="Website creator designing a digital experience"
              width={500}
              height={500}
              className="aspect-square w-full bg-brand-soft/30 object-contain"
            />
            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 rounded-2xl border border-ink-line bg-ink/70 p-4 backdrop-blur-md">
              {[
                { k: "Design", v: "UX / UI" },
                { k: "Build", v: "Full-Stack" },
                { k: "Grow", v: "Marketing" },
              ].map((item) => (
                <div key={item.k}>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                    {item.k}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-ink-foreground">
                    {item.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

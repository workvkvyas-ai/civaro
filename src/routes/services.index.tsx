import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { TechStack } from "@/components/sections/TechStack";
import { services } from "@/lib/site-data";

const title = "Services | Development, Design, Marketing & Reputation";
const description =
  "Six disciplines under one roof: full-stack development, web development, UX/UI design, digital marketing, reputation management and graphic design.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Digital Expertise. One Integrated Team."
        intro="Strategy, design, engineering and growth working from the same brief — so nothing gets lost between vendors."
        aside={
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        }
      />

      <div className="bg-background px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {services.map((service, index) => {
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="grid gap-10 border-b border-border py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
              >
                <Reveal>
                  <div className="lg:sticky lg:top-28">
                    <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand">
                      <ServiceIcon name={service.icon} className="size-5" />
                    </span>
                    <p className="mt-6 font-display text-sm tracking-[0.2em] text-muted-foreground">
                      {service.number}
                    </p>
                    <h2 className="mt-3 text-3xl leading-tight font-semibold lg:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Button asChild variant="quiet" size="xl" className="mt-8">
                      <Link to="/services/$slug" params={{ slug: service.slug }}>
                        {service.cta}
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={index === 0 ? 100 : 0} className="grid gap-10 sm:grid-cols-2">
                  <Block title="Problems it solves">
                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {service.problems.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block title="Capabilities">
                    <ul className="flex flex-wrap gap-2">
                      {service.capabilities.map((c) => (
                        <li
                          key={c}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Block>
                  <Block title="Technology & tools">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.tools.join(" · ")}
                    </p>
                  </Block>
                  <Block title="Example results">
                    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {service.results.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </Block>
                </Reveal>
              </section>
            );
          })}
        </div>
      </div>

      <TechStack />
      <CTASection title="Not Sure Which Service You Need?" primary="Request a Quote" />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

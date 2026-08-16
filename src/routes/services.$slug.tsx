import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { TechnologyLogo } from "@/components/site/TechnologyLogo";
import { processSteps, services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.service.title} | Civaro`;
    const d = loaderData.service.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: loaderData.service.title,
            description: d,
            provider: { "@type": "Organization", name: "Civaro" },
          }),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.title}
        intro={service.description}
        aside={
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">
              Start a Project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        }
      />

      <section className="bg-background px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <Reveal>
            <h2 className="text-2xl font-semibold">What it is</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {service.short} {service.description}
            </p>
            <span className="mt-6 inline-grid size-12 place-items-center rounded-xl bg-brand-soft text-brand">
              <ServiceIcon name={service.icon} className="size-5" />
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-semibold">Problems it solves</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="text-2xl font-semibold">Example results</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {service.results.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Capabilities</h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((c, i) => (
              <li key={c}>
                <Reveal delay={i * 40} className="bg-background px-6 py-7">
                  <span className="font-display text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-sm font-medium">{c}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Technology & tools
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {service.tools.map((t) => (
                <li key={t}>
                  <TechnologyLogo name={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How we deliver it</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.slice(0, 6).map((s, i) => (
              <Reveal key={s.number} delay={i * 60} as="li">
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-xs tracking-[0.2em] text-brand">
                    {s.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Other services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-5 py-5 transition-colors hover:border-brand/40"
                >
                  <span className="text-sm font-medium">{s.title}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title={`Ready to talk ${service.title.toLowerCase()}?`} />
    </>
  );
}

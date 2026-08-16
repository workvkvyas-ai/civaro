import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.project.client} Case Study | Northbeam Studio`;
    const d = loaderData.project.description;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const sections = [
    { title: "Challenge", body: project.challenge },
    { title: "Strategy", body: project.strategy },
    { title: "Design Process", body: project.design },
    { title: "Development", body: project.development },
    { title: "Solution", body: project.solution },
  ];

  return (
    <>
      <PageHero
        eyebrow={project.industry}
        title={project.title}
        intro={project.description}
        aside={
          <dl className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                Client
              </dt>
              <dd className="mt-2 font-medium">{project.client}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </dt>
              <dd className="mt-2 font-medium">{project.services.join(", ")}</dd>
            </div>
          </dl>
        }
      />

      <section className="bg-background px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <img
              src={project.image}
              alt={`${project.client} project visual`}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[16/9] w-full rounded-3xl border border-border object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 50}>
              <div className="grid gap-4 border-t border-border py-10 md:grid-cols-[16rem_1fr] md:gap-12">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <h2 className="text-3xl font-semibold text-ink-foreground sm:text-4xl">Results</h2>
              <div className="mt-8 space-y-4 text-sm">
                <p className="rounded-xl border border-ink-line p-5 text-ink-muted">
                  <span className="block text-[0.7rem] uppercase tracking-[0.2em]">Before</span>
                  <span className="mt-2 block text-ink-foreground">{project.before}</span>
                </p>
                <p className="rounded-xl border border-ink-line bg-ink-foreground/[0.05] p-5 text-ink-muted">
                  <span className="block text-[0.7rem] uppercase tracking-[0.2em]">After</span>
                  <span className="mt-2 block text-ink-foreground">{project.after}</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={100} className="grid gap-px self-start overflow-hidden rounded-2xl bg-ink-line sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-ink px-6 py-10 text-center">
                  <p className="font-display text-4xl font-semibold text-ink-foreground">
                    {m.value}
                  </p>
                  <p className="mt-3 text-xs text-ink-muted">{m.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120}>
            <figure className="mt-14 max-w-3xl">
              <blockquote className="font-display text-2xl leading-relaxed text-ink-foreground sm:text-3xl">
                “{project.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-ink-muted">
                {project.testimonial.name} — {project.testimonial.role}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold">Related projects</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a Similar Project? Let's Talk." />
    </>
  );
}
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Stats } from "@/components/sections/Stats";
import { projects, workFilters } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const title = "Our Work | Case Studies in Design, Development & Growth";
const description =
  "Selected case studies across SaaS, e-commerce, professional services and local business — with the results each engagement produced.";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Work That Creates Impact"
        intro="Every project below started with a business problem and ended with a number we can point at."
      />

      <section className="bg-background px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work">
            {workFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === f
                    ? "border-transparent bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {visible.map((project, i) => (
              <Reveal key={project.slug} delay={i * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          {visible.length === 0 ? (
            <p className="mt-12 text-sm text-muted-foreground">
              No projects in this category yet — get in touch and yours could be the first.
            </p>
          ) : null}
        </div>
      </section>

      <Stats />
      <CTASection title="Have a Similar Project? Let's Talk." />
    </>
  );
}
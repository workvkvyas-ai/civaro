import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean | undefined }) {
  return (
    <article className={cn("group", wide && "lg:col-span-2")}>
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lift"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.client} — ${project.title}`}
            loading="lazy"
            width={1200}
            height={900}
            className={cn(
              "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
              wide ? "aspect-[16/9]" : "aspect-[4/3]",
            )}
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.7rem] font-medium backdrop-blur">
            {project.industry}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{project.client}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{project.services.join(" • ")}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
            <p className="font-display text-lg font-semibold text-brand">{project.result}</p>
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              View Case Study
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
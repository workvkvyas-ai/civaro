import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site-data";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift sm:p-8"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
            <ServiceIcon name={service.icon} className="size-5" />
          </span>
          <span className="font-display text-sm font-semibold tracking-widest text-muted-foreground/70">
            {service.number}
          </span>
        </div>
        <h3 className="mt-7 text-xl font-semibold sm:text-[1.35rem]">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.capabilities.slice(0, 5).map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.72rem] text-muted-foreground"
            >
              {c}
            </li>
          ))}
          <li className="rounded-full px-2.5 py-1 text-[0.72rem] text-muted-foreground/70">
            +{service.capabilities.length - 5} more
          </li>
        </ul>
      </div>
      <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-brand">
        {service.cta}
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
export function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink-line bg-ink-foreground/[0.04] p-7 transition-colors duration-300 hover:bg-ink-foreground/[0.07] sm:p-8">
      <blockquote className="font-display text-lg leading-relaxed text-ink-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-line pt-6">
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full bg-brand/25 text-sm font-semibold text-ink-foreground"
        >
          {initials}
        </span>
        <span className="text-sm">
          <span className="block font-medium text-ink-foreground">{name}</span>
          <span className="block text-ink-muted">
            {role}, {company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
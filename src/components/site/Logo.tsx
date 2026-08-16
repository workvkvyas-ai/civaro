import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { AGENCY } from "@/lib/site-data";

export function Logo({ dark = false }: { dark?: boolean | undefined }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label={`${AGENCY.name} home`}>
      <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[10px] bg-[var(--gradient-brand)]">
        <span className="h-3 w-3 rounded-[3px] bg-brand-foreground transition-transform duration-500 group-hover:rotate-45" />
      </span>
      <span
        className={cn(
          "font-display text-[1.05rem] font-semibold tracking-tight",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {AGENCY.name}
      </span>
    </Link>
  );
}
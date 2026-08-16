import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean | undefined }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
        dark ? "text-ink-muted" : "text-muted-foreground",
      )}
    >
      <span className={cn("h-px w-6", dark ? "bg-ink-muted/60" : "bg-brand")} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  intro?: string | undefined;
  dark?: boolean | undefined;
  align?: "left" | "center" | undefined;
  className?: string | undefined;
  action?: ReactNode | undefined;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
        <h2
          className={cn(
            "mt-5 text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-5xl",
            dark ? "text-ink-foreground" : "text-foreground",
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              dark ? "text-ink-muted" : "text-muted-foreground",
            )}
          >
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
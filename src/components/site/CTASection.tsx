import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CTASection({
  title = "Have an Idea? Let's Build Something Great.",
  body = "Tell us what you're working on and we'll help you figure out the best way to bring it to life.",
  primary = "Start Your Project",
  secondary = "Book a Free Consultation",
}: {
  title?: string | undefined;
  body?: string | undefined;
  primary?: string | undefined;
  secondary?: string | undefined;
}) {
  return (
    <section className="bg-background px-5 pb-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-6 py-20 text-center sm:px-14 sm:py-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 w-[42rem] max-w-full rounded-full bg-[var(--gradient-brand)] opacity-30 blur-[110px]"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl leading-[1.06] font-semibold text-ink-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {body}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl" className="w-full sm:w-auto">
                <Link to="/contact">{primary}</Link>
              </Button>
              <Button asChild variant="inkOutline" size="xl" className="w-full sm:w-auto">
                <a
                  href="https://calendly.com/hello-civaro/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  {secondary}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

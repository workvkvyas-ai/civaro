import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { AGENCY, services } from "@/lib/site-data";

const title = "Contact Civaro | Start Your Project";
const description =
  "Tell Civaro about your website, digital product, design or marketing project and get a tailored response.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@civaro.ca", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Unable to submit contact form");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great Together."
        intro="Tell us what you're working on. We'll review the details and get back to you with the clearest next step."
      />

      <section className="bg-background px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="rounded-3xl bg-ink p-7 text-ink-foreground sm:p-9">
              <p className="text-sm leading-relaxed text-ink-muted">
                Have a question before you begin? Reach out directly and we'll help you find the
                right service.
              </p>
              <dl className="mt-8 space-y-6 text-sm">
                <ContactDetail icon={Mail} label="Email">
                  <a href={`mailto:${AGENCY.email}`} className="transition-colors hover:text-brand-soft">
                    {AGENCY.email}
                  </a>
                </ContactDetail>
                <ContactDetail icon={MapPin} label="Location">
                  <span>{AGENCY.location}</span>
                </ContactDetail>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-9"
            >
              <input type="hidden" name="_subject" value="New project inquiry from Civaro.ca" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input id="name" name="name" autoComplete="name" required className="h-12" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="h-12"
                  />
                </Field>
                <Field label="Company" htmlFor="company">
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    className="h-12"
                  />
                </Field>
                <Field label="Service" htmlFor="service">
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-ring"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
                <Field label="Estimated budget" htmlFor="budget">
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    className="h-12 w-full rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-ring"
                  >
                    <option value="">Select a range</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000–$10,000">$5,000–$10,000</option>
                    <option value="$10,000–$25,000">$10,000–$25,000</option>
                    <option value="$25,000+">$25,000+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
                <Field label="Project details" htmlFor="message" className="sm:col-span-2">
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Tell us about your goals, timeline and what success looks like."
                    className="min-h-44 resize-y"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
                  By submitting this form, you agree that Civaro may contact you about your inquiry.
                </p>
                <Button
                  type="submit"
                  variant="brand"
                  size="xl"
                  disabled={status === "submitting"}
                  className="shrink-0"
                >
                  {status === "submitting" ? "Sending…" : "Send Inquiry"}
                  {status !== "submitting" ? <ArrowRight className="size-4" /> : null}
                </Button>
              </div>

              <div className="mt-5 min-h-6 text-sm" aria-live="polite">
                {status === "success" ? (
                  <p className="flex items-center gap-2 text-brand">
                    <CheckCircle2 className="size-4" />
                    Thanks—your inquiry has been sent. We'll be in touch soon.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-destructive">
                    We couldn't send your inquiry. Please email us at{" "}
                    <a href={`mailto:${AGENCY.email}`} className="underline">
                      {AGENCY.email}
                    </a>
                    .
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-soft">
        <Icon className="size-4" />
      </span>
      <div>
        <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">{label}</dt>
        <dd className="mt-1 text-ink-foreground">{children}</dd>
      </div>
    </div>
  );
}

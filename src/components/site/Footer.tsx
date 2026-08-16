import { Link } from "@tanstack/react-router";
import { AGENCY, services } from "@/lib/site-data";
import { Logo } from "./Logo";

const company = [
  { label: "Contact", to: "/contact" as const },
];

const social = ["LinkedIn", "Instagram", "Facebook", "Behance"];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo dark />
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              We design, build and grow digital experiences that move businesses forward.
            </p>
            <dl className="mt-8 space-y-2 text-sm">
              <div className="flex gap-2">
                <dt className="sr-only">Email</dt>
                <dd>
                  <a className="hover:text-brand-soft" href={`mailto:${AGENCY.email}`}>
                    {AGENCY.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Location</dt>
                <dd className="text-ink-muted">{AGENCY.location}</dd>
              </div>
            </dl>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {company.map((c) => (
              <li key={c.label}>
                <Link to={c.to} className="text-ink-muted transition-colors hover:text-ink-foreground">
                  {c.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            {social.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-ink-muted transition-colors hover:text-ink-foreground"
                  aria-label={`${AGENCY.name} on ${s}`}
                >
                  {s}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-line pt-8 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {AGENCY.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-ink-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-ink-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ink-muted">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

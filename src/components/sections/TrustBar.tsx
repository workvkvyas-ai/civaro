import { clientLogos } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/40 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground">
            Trusted by ambitious businesses and growing brands.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {clientLogos.map((logo) => (
              <li
                key={logo}
                className="text-center font-display text-lg font-semibold tracking-tight text-muted-foreground/55 transition-colors duration-300 hover:text-foreground"
              >
                {logo}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
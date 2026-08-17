import { Reveal } from "@/components/site/Reveal";
import oizomLogo from "@/assets/client-oizom.png";
import intelLogo from "@/assets/client-intel.png";
import fastSignsLogo from "@/assets/client-fastsigns.png";

const clientLogos = [
  { name: "Oizom", src: oizomLogo },
  { name: "Intel", src: intelLogo },
  { name: "FASTSIGNS", src: fastSignsLogo },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/40 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-sm text-muted-foreground">
            Trusted by ambitious businesses and growing brands.
          </p>
          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 items-center gap-8 sm:grid-cols-3">
            {clientLogos.map((logo) => (
              <li
                key={logo.name}
                className="flex h-16 items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={300}
                  height={100}
                  loading="lazy"
                  className="max-h-14 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

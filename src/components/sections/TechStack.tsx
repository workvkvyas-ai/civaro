import { technologies } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const technologyLogos: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Node.js": "nodedotjs",
  PHP: "php",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  WordPress: "wordpress",
  Shopify: "shopify",
  Webflow: "webflow",
  Figma: "figma",
  "Google Analytics": "googleanalytics",
  "Google Ads": "googleads",
  "Meta Ads": "meta",
  "Search Console": "googlesearchconsole",
};

const fallbackTechnologyLogos: Record<string, string> = {
  "Adobe Creative Cloud": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  AWS: "https://img.icons8.com/color/96/amazon-web-services.png",
};

export function TechStack() {
  return (
    <section className="bg-background px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Technology" title="Powered by Modern Technology" />
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {group.group}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    title={item}
                    aria-label={item}
                    className="grid size-16 place-items-center rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
                  >
                    <img
                      src={
                        fallbackTechnologyLogos[item] ??
                        `https://cdn.simpleicons.org/${technologyLogos[item]}`
                      }
                      alt=""
                      width={32}
                      height={32}
                      loading="lazy"
                      className="size-8 object-contain"
                    />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

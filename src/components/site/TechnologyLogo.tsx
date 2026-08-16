import { cn } from "@/lib/utils";

const simpleIconSlugs: Record<string, string> = {
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
  FigJam: "figma",
  Maze: "maze",
  Storybook: "storybook",
  "Google Analytics": "googleanalytics",
  "Google Ads": "googleads",
  "Meta Ads": "meta",
  "Search Console": "googlesearchconsole",
  HubSpot: "hubspot",
  "Looker Studio": "looker",
  Docker: "docker",
  GraphQL: "graphql",
  Vercel: "vercel",
  "Tailwind CSS": "tailwindcss",
  Cloudflare: "cloudflare",
};

const fallbackLogos: Record<string, string> = {
  AWS: "https://img.icons8.com/color/96/amazon-web-services.png",
  "Adobe Creative Cloud": "https://img.icons8.com/color/96/adobe-creative-cloud.png",
  Illustrator: "https://img.icons8.com/color/96/adobe-illustrator.png",
  "After Effects": "https://img.icons8.com/color/96/adobe-after-effects.png",
  "Google Business Profile": "https://img.icons8.com/color/96/google-logo.png",
  Birdeye: "https://www.google.com/s2/favicons?domain=birdeye.com&sz=128",
};

function getLogoUrl(name: string) {
  return fallbackLogos[name] ?? `https://cdn.simpleicons.org/${simpleIconSlugs[name]}`;
}

export function TechnologyLogo({ name, className }: { name: string; className?: string }) {
  return (
    <span
      title={name}
      aria-label={name}
      className={cn(
        "grid size-16 place-items-center rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift",
        className,
      )}
    >
      <img
        src={getLogoUrl(name)}
        alt=""
        width={32}
        height={32}
        loading="lazy"
        className="size-8 object-contain"
      />
    </span>
  );
}

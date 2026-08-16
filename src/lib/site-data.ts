import caseSaas from "@/assets/case-saas.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import caseProfessional from "@/assets/case-professional.jpg";
import caseLocal from "@/assets/case-local.jpg";

export const AGENCY = {
  name: "Civaro",
  tagline: "Design better. Build smarter. Grow faster.",
  email: "hello@northbeamstudio.com",
  phone: "+1 (587) 555-0142",
  location: "Edmonton, AB — working worldwide",
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  problems: string[];
  capabilities: string[];
  tools: string[];
  results: string[];
  caseSlug: string;
  cta: string;
  icon: "code" | "globe" | "pen" | "trend" | "star" | "shapes";
};

export const services: Service[] = [
  {
    slug: "full-stack-development",
    number: "01",
    title: "Full-Stack Development",
    short: "Scalable products, frontend to infrastructure.",
    description:
      "We build scalable, secure, high-performance digital products from frontend interfaces to backend infrastructure.",
    problems: [
      "Legacy systems that can't keep up with the business",
      "Prototypes that never made it to production quality",
      "Slow, fragile releases and mounting technical debt",
    ],
    capabilities: [
      "React",
      "Next.js",
      "Node.js",
      "APIs",
      "Databases",
      "SaaS Development",
      "Cloud Integrations",
      "Custom Applications",
    ],
    tools: ["TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL", "Vercel"],
    results: [
      "+42% user activation for a B2B SaaS platform",
      "Sub-200ms median API response at 10x traffic",
      "Release cadence moved from monthly to weekly",
    ],
    caseSlug: "saas-platform",
    cta: "Explore Development",
    icon: "code",
  },
  {
    slug: "web-development",
    number: "02",
    title: "Web Development",
    short: "Fast, responsive, conversion-focused websites.",
    description:
      "Fast, responsive and conversion-focused websites built around your business goals.",
    problems: [
      "A website that looks fine but converts poorly",
      "Slow load times hurting rankings and sales",
      "Content updates that require a developer",
    ],
    capabilities: [
      "Corporate Websites",
      "Landing Pages",
      "E-commerce",
      "WordPress",
      "Shopify",
      "Webflow",
      "Custom Websites",
      "Website Maintenance",
    ],
    tools: ["WordPress", "Shopify", "Webflow", "Tailwind CSS", "Cloudflare"],
    results: [
      "+67% online conversions for a DTC brand",
      "95+ Lighthouse performance across templates",
      "Editors shipping content without engineering",
    ],
    caseSlug: "ecommerce-brand",
    cta: "Explore Web Development",
    icon: "globe",
  },
  {
    slug: "ux-ui-design",
    number: "03",
    title: "UX/UI Design",
    short: "Complex products made simple and engaging.",
    description:
      "We design intuitive digital experiences that make complex products simple, engaging and easy to use.",
    problems: [
      "Users drop off before reaching value",
      "Inconsistent interfaces across teams",
      "Feature requests with no underlying research",
    ],
    capabilities: [
      "UX Research",
      "Wireframes",
      "User Flows",
      "UI Design",
      "Prototyping",
      "Design Systems",
      "SaaS Interfaces",
      "Mobile App Design",
    ],
    tools: ["Figma", "FigJam", "Maze", "Storybook"],
    results: [
      "Onboarding time cut by 38%",
      "Design system adopted across 4 product teams",
      "Support tickets down 24% after redesign",
    ],
    caseSlug: "saas-platform",
    cta: "Explore UX Design",
    icon: "pen",
  },
  {
    slug: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    short: "Data-driven campaigns that compound.",
    description:
      "Data-driven campaigns designed to increase visibility, generate qualified leads and accelerate growth.",
    problems: [
      "Traffic that never turns into pipeline",
      "Ad spend without clear attribution",
      "No repeatable channel strategy",
    ],
    capabilities: [
      "SEO",
      "Google Ads",
      "Social Media Marketing",
      "Meta Ads",
      "Content Marketing",
      "Email Marketing",
      "Conversion Optimization",
      "Marketing Strategy",
    ],
    tools: ["Google Analytics", "Google Ads", "Meta Ads", "Search Console", "HubSpot"],
    results: [
      "3.2x increase in qualified leads",
      "Cost per lead reduced 45% in two quarters",
      "Organic sessions doubled within 9 months",
    ],
    caseSlug: "professional-services",
    cta: "Explore Marketing",
    icon: "trend",
  },
  {
    slug: "reputation-management",
    number: "05",
    title: "Reputation Management",
    short: "Trust, reviews and local visibility.",
    description:
      "Build trust, strengthen your online reputation and make sure customers see the best version of your business.",
    problems: [
      "Outdated or negative reviews dominating search",
      "No consistent process for collecting feedback",
      "Weak local visibility versus competitors",
    ],
    capabilities: [
      "Google Review Management",
      "Review Generation",
      "Reputation Monitoring",
      "Review Response Strategy",
      "Local SEO",
      "Brand Monitoring",
      "Customer Feedback Systems",
      "Reputation Recovery",
    ],
    tools: ["Google Business Profile", "Birdeye", "Search Console", "Looker Studio"],
    results: [
      "4.9★ average Google rating maintained",
      "5x more reviews collected per month",
      "Map pack visibility up across 12 locations",
    ],
    caseSlug: "local-business",
    cta: "Explore Reputation Management",
    icon: "star",
  },
  {
    slug: "graphic-design",
    number: "06",
    title: "Graphic Design",
    short: "Brand assets that get remembered.",
    description:
      "Creative visuals and brand assets that make your business instantly recognizable.",
    problems: [
      "Visual identity that no longer fits the business",
      "Inconsistent assets across channels",
      "Marketing material produced ad hoc",
    ],
    capabilities: [
      "Branding",
      "Logo Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Presentation Design",
      "Digital Advertising",
      "Print Design",
      "Brand Guidelines",
    ],
    tools: ["Figma", "Adobe Creative Cloud", "Illustrator", "After Effects"],
    results: [
      "Full rebrand delivered in 6 weeks",
      "Ad creative CTR improved 31%",
      "One asset library across sales and marketing",
    ],
    caseSlug: "professional-services",
    cta: "Explore Graphic Design",
    icon: "shapes",
  },
];

export type Project = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  services: string[];
  categories: string[];
  description: string;
  result: string;
  image: string;
  challenge: string;
  strategy: string;
  design: string;
  development: string;
  solution: string;
  before: string;
  after: string;
  metrics: { label: string; value: string }[];
  testimonial: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    slug: "saas-platform",
    client: "Meridian Analytics",
    industry: "SaaS & Technology",
    title: "An analytics platform rebuilt around activation",
    services: ["UX/UI", "Full-Stack Development"],
    categories: ["UX/UI", "Development"],
    description:
      "A workspace redesign and platform rebuild that turned a dense analytics tool into a product new teams could adopt in a day.",
    result: "+42% increase in user activation",
    image: caseSaas,
    challenge:
      "Meridian had strong data but weak adoption. New accounts stalled during setup and churned before reaching their first insight.",
    strategy:
      "We mapped the first-week journey, cut the setup path from eleven steps to four, and defined activation as the north-star metric for every release.",
    design:
      "A new design system gave the product a consistent structure: a single navigation model, reusable data components and a guided onboarding flow.",
    development:
      "The frontend moved to React and TypeScript against a rebuilt Node.js API layer with caching, so dashboards render in under a second on large datasets.",
    solution:
      "One coherent platform where setup, dashboards and sharing all follow the same interaction language.",
    before: "11-step setup, 6-day median time to first insight",
    after: "4-step setup, same-day first insight",
    metrics: [
      { label: "User activation", value: "+42%" },
      { label: "Time to first insight", value: "-71%" },
      { label: "Dashboard load time", value: "0.8s" },
    ],
    testimonial: {
      quote:
        "They understood our product faster than teams we'd worked with for years, and the activation numbers moved within a quarter.",
      name: "Dana Whitfield",
      role: "VP Product, Meridian Analytics",
    },
  },
  {
    slug: "ecommerce-brand",
    client: "Halden Supply",
    industry: "E-Commerce",
    title: "A storefront rebuilt for speed and conversion",
    services: ["Web Development", "CRO", "Marketing"],
    categories: ["Websites", "Marketing"],
    description:
      "A performance-first storefront rebuild paired with a structured testing program across the checkout funnel.",
    result: "+67% increase in online conversions",
    image: caseEcommerce,
    challenge:
      "A heavy theme and a five-step checkout were losing customers on mobile, where most of the traffic arrived.",
    strategy:
      "We prioritised the mobile funnel, rebuilt product and cart templates, and set up a monthly experiment roadmap tied to revenue.",
    design:
      "Product pages were restructured around imagery, proof and a persistent add-to-cart, with a lighter, editorial brand layer.",
    development:
      "A custom Shopify theme with lazy-loaded media and a two-step checkout cut page weight by more than half.",
    solution: "A store that loads fast, reads clearly and converts on the first session.",
    before: "4.1s mobile load, 1.4% conversion rate",
    after: "1.3s mobile load, 2.3% conversion rate",
    metrics: [
      { label: "Online conversions", value: "+67%" },
      { label: "Mobile load time", value: "-68%" },
      { label: "Average order value", value: "+18%" },
    ],
    testimonial: {
      quote:
        "Every change was tied to a number. That discipline is why the results held after launch.",
      name: "Marcus Peña",
      role: "Founder, Halden Supply",
    },
  },
  {
    slug: "professional-services",
    client: "Kestrel Advisory",
    industry: "Professional Services",
    title: "A brand and site built to win better clients",
    services: ["Branding", "Website", "SEO"],
    categories: ["Branding", "Websites", "Marketing"],
    description:
      "A repositioning, identity system and content engine for an advisory firm competing against much larger names.",
    result: "3.2x increase in qualified leads",
    image: caseProfessional,
    challenge:
      "Kestrel's expertise was specific, but their brand and website read as generic — and search traffic reflected it.",
    strategy:
      "We rebuilt positioning around three service lines and mapped a content plan to the questions buyers actually search for.",
    design:
      "A restrained identity — navy, off-white, one accent — applied across the site, proposals and print material.",
    development:
      "A fast marketing site with structured data, per-service landing pages and a CRM-connected enquiry flow.",
    solution: "A brand that reads senior and a site that turns search demand into meetings.",
    before: "12 qualified enquiries per quarter",
    after: "38 qualified enquiries per quarter",
    metrics: [
      { label: "Qualified leads", value: "3.2x" },
      { label: "Organic sessions", value: "+184%" },
      { label: "Cost per lead", value: "-45%" },
    ],
    testimonial: {
      quote:
        "We finally have a website and marketing system that actually generates business, not just compliments.",
      name: "Priya Raman",
      role: "Managing Partner, Kestrel Advisory",
    },
  },
  {
    slug: "local-business",
    client: "Rowan Home Services",
    industry: "Home Services",
    title: "Reviews and local search turned into a pipeline",
    services: ["Reputation Management", "Local SEO"],
    categories: ["Marketing"],
    description:
      "A reputation program and local search overhaul across twelve service areas.",
    result: "4.9★ average Google rating",
    image: caseLocal,
    challenge:
      "Great work on the ground, thin and outdated review presence online — and competitors owning the map pack.",
    strategy:
      "We built an automated review request flow after each job and a response policy with clear service recovery steps.",
    design:
      "Location pages and review displays were designed to make proof the first thing a visitor sees.",
    development:
      "Twelve templated location pages with structured data, connected to the review platform via API.",
    solution: "A steady stream of recent, specific, five-star proof in exactly the places buyers look.",
    before: "4.1★ average, 63 total reviews",
    after: "4.9★ average, 480+ reviews",
    metrics: [
      { label: "Average rating", value: "4.9★" },
      { label: "Reviews per month", value: "5x" },
      { label: "Map pack impressions", value: "+212%" },
    ],
    testimonial: {
      quote:
        "Customers tell us they picked us because of the reviews. That never used to happen.",
      name: "Alicia Grant",
      role: "Owner, Rowan Home Services",
    },
  },
];

export const workFilters = ["All", "Development", "Websites", "UX/UI", "Marketing", "Branding"];

export const benefits = [
  {
    title: "Strategy First",
    body: "We understand your business before recommending solutions.",
  },
  {
    title: "One Integrated Team",
    body: "Designers, developers and marketers working together.",
  },
  { title: "Built for Growth", body: "Everything we create is designed to scale." },
  { title: "Results Matter", body: "We focus on measurable business outcomes." },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    body: "We learn about your business, audience, competitors and goals.",
  },
  {
    number: "02",
    title: "Strategy",
    body: "We define the roadmap, positioning, user experience and technology.",
  },
  {
    number: "03",
    title: "Design",
    body: "We transform the strategy into compelling digital experiences.",
  },
  {
    number: "04",
    title: "Build",
    body: "Our developers turn the designs into fast, scalable products.",
  },
  { number: "05", title: "Launch", body: "We test, optimize and deploy the final experience." },
  {
    number: "06",
    title: "Grow",
    body: "We continue improving performance through marketing, analytics and optimization.",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Businesses Supported" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Digital Disciplines" },
];

export const industries = [
  "SaaS & Technology",
  "Professional Services",
  "E-Commerce",
  "Real Estate",
  "Healthcare",
  "Finance",
  "Home Services",
  "Retail",
  "Startups",
  "Local Businesses",
];

export const testimonials = [
  {
    quote:
      "The team completely transformed our digital presence. We finally have a website and marketing system that actually generates business.",
    name: "Priya Raman",
    role: "Managing Partner",
    company: "Kestrel Advisory",
    initials: "PR",
  },
  {
    quote:
      "They shipped faster than our internal team and left us with a codebase we're genuinely happy to maintain.",
    name: "Dana Whitfield",
    role: "VP Product",
    company: "Meridian Analytics",
    initials: "DW",
  },
  {
    quote:
      "Design, build and marketing under one roof meant nothing got lost between vendors. That alone was worth it.",
    name: "Marcus Peña",
    role: "Founder",
    company: "Halden Supply",
    initials: "MP",
  },
];

export const posts = [
  {
    slug: "website-that-generates-leads",
    title: "How to Build a Website That Actually Generates Leads",
    category: "Web Strategy",
    excerpt:
      "Most websites are brochures. The ones that produce pipeline share five structural decisions — here's how to make them.",
    readTime: "7 min read",
    date: "Jul 2026",
  },
  {
    slug: "saas-ux-mistakes",
    title: "UX Mistakes That Are Costing SaaS Companies Customers",
    category: "UX Design",
    excerpt:
      "Activation problems usually look like marketing problems. Nine times out of ten they start in the first session.",
    readTime: "6 min read",
    date: "Jun 2026",
  },
  {
    slug: "reviews-and-buying-decisions",
    title: "How Online Reviews Influence Buying Decisions",
    category: "Reputation Management",
    excerpt:
      "Recency, specificity and response rate matter more than star count. What the data says about modern review behaviour.",
    readTime: "5 min read",
    date: "May 2026",
  },
];

export const technologies = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "PHP", "MySQL", "PostgreSQL"] },
  { group: "CMS & Platforms", items: ["WordPress", "Shopify", "Webflow"] },
  { group: "Design", items: ["Figma", "Adobe Creative Cloud"] },
  { group: "Marketing", items: ["Google Analytics", "Google Ads", "Meta Ads", "Search Console"] },
  { group: "Cloud", items: ["AWS"] },
];

export const clientLogos = [
  "Meridian",
  "Halden",
  "Kestrel",
  "Rowan",
  "Northline",
  "Balmore",
  "Verity",
  "Copperfield",
];

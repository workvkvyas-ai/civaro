import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Stats } from "@/components/sections/Stats";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ProjectCard } from "@/components/site/ProjectCard";
import { BlogCard } from "@/components/site/BlogCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";
import { benefits, posts, projects, services } from "@/lib/site-data";
import aboutStudio from "@/assets/about-studio.jpg";

const title = "Digital Agency | Web Development, UX Design & Marketing";
const description =
  "Full-service digital agency specializing in web development, full-stack development, UX/UI design, digital marketing, reputation management and graphic design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="bg-background px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Everything You Need to Build & Grow Your Digital Presence"
            intro="From strategy and design to development and marketing, our team brings everything together under one roof."
            action={
              <Button asChild variant="quiet" size="xl">
                <Link to="/services">
                  All Services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            }
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected Work"
            title="Selected Work"
            intro="Digital experiences designed to create real business impact."
            action={
              <Button asChild variant="quiet" size="xl">
                <Link to="/work">View All Work</Link>
              </Button>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <h2 className="text-3xl leading-[1.06] font-semibold sm:text-5xl">
              Not Just Another Agency.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              We combine strategy, design, technology and marketing to solve business problems — not
              just complete tasks.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 80} className="bg-background p-7 sm:p-8">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <Stats />
      <Industries />
      <Testimonials />
      <TechStack />

      <section className="bg-secondary/40 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutStudio}
              alt="Designers and developers collaborating in the studio"
              loading="lazy"
              width={1200}
              height={1000}
              className="aspect-[6/5] w-full rounded-2xl border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-5xl">
              Creative Thinking Meets Technical Expertise
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are a multidisciplinary digital agency bringing together designers, developers,
              marketers and strategists.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our goal is simple: help businesses create better digital experiences and turn those
              experiences into measurable growth.
            </p>
            <Button asChild variant="brand" size="xl" className="mt-9">
              <Link to="/about">
                Learn About Us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas, Insights & Strategies"
            action={
              <Button asChild variant="link" size="xl" className="px-0">
                <Link to="/insights">
                  View All Insights
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            }
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 90} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

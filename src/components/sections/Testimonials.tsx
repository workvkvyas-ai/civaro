import { testimonials } from "@/lib/site-data";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TestimonialCard } from "@/components/site/TestimonialCard";

export function Testimonials() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading dark eyebrow="Testimonials" title="What Our Clients Say" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
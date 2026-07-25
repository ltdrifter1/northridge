import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: `Services from ${site.name}—Fractional CFO, reporting, forecasting, and systems.`,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">Services</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Practical support where finance meets decisions.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A focused set of engagements—kept simple on purpose.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={index * 0.06}>
            <article className="h-full border-t border-teal/25 pt-6">
              <h2 className="text-xl font-medium text-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16">
        <Button render={<Link href="/contact" />} size="lg">
          Discuss what you need
        </Button>
      </FadeIn>
    </div>
  );
}

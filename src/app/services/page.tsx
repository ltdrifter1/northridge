import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { pillars, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description: `${site.name} services—CFO/controller advisory and ${site.product}.`,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">Services</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Advisory and {site.product}.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Hands-on finance leadership for growing businesses—and a financial
          intelligence engine when custom software is the right move.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.name} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-border/80 bg-white/60 p-7 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-teal">
                {pillar.name}
              </p>
              <h2 className="mt-3 text-2xl font-medium text-ink">
                {pillar.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-muted-foreground before:mr-2 before:text-teal before:content-['—']"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-20">
        <h2 className="font-serif text-2xl tracking-tight text-ink sm:text-3xl">
          How engagements usually look
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border-t border-teal/25 pt-6">
              <h3 className="text-lg font-medium text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-16">
        <Button render={<Link href="/contact" />} size="lg">
          Discuss what you need
        </Button>
      </FadeIn>
    </div>
  );
}

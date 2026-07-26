import { FadeIn } from "@/components/motion/fade-in";
import { pillars } from "@/lib/content";

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">
          Under Northridge
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Advisory and KeystoneOS.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          One practice. Two ways we help—hands-on finance leadership, and a
          financial intelligence engine when the tools need to be custom.
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.name} delay={index * 0.08}>
            <article className="h-full border-t border-teal/30 pt-7">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-teal">
                {pillar.name}
              </p>
              <h3 className="mt-3 text-xl font-medium text-ink">
                {pillar.title}
              </h3>
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
    </section>
  );
}

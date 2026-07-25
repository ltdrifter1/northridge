import { FadeIn } from "@/components/motion/fade-in";
import { outcomes } from "@/lib/content";

export function Outcomes() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">What changes</p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl tracking-tight text-ink sm:text-4xl">
          Simple outcomes. Better decisions.
        </h2>
      </FadeIn>

      <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {outcomes.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.08}>
            <div className="border-t border-teal/30 pt-6">
              <h3 className="text-lg font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

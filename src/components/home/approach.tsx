import { FadeIn } from "@/components/motion/fade-in";

export function Approach() {
  return (
    <section className="border-y border-border/70 bg-white/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-teal">Approach</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Less theatre. More judgment.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Northridge Advisory brings deep reporting and accounting experience
            into executive-level strategy—so finance supports the business, not
            the other way around.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <li className="border-l-2 border-teal/40 pl-4">
              Start with the business problem, not a service menu.
            </li>
            <li className="border-l-2 border-teal/40 pl-4">
              Build the reporting and rhythm leaders will actually trust.
            </li>
            <li className="border-l-2 border-teal/40 pl-4">
              Stay close enough to guide decisions—without adding process weight.
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

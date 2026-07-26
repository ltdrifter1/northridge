import { FadeIn } from "@/components/motion/fade-in";
import { site } from "@/lib/content";

export function Approach() {
  return (
    <section className="border-y border-border/70 bg-white/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-teal">Approach</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            A finance expert who builds the tools.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            {site.name} starts with the business problem—then brings CFO and
            controller judgment, and {site.product} when you need a system that
            actually fits how you operate.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <li className="border-l-2 border-teal/40 pl-4">
              Built for owner-led businesses roughly $1M–$50M in revenue.
            </li>
            <li className="border-l-2 border-teal/40 pl-4">
              Advisory first—reporting, cash, and operating rhythm.
            </li>
            <li className="border-l-2 border-teal/40 pl-4">
              {site.product} when off-the-shelf software stops matching the
              business.
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

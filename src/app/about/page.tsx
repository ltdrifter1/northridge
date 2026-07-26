import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/fade-in";
import { aboutPoints, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}—finance experts who build tools for growing businesses.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">About</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Finance expertise. Tools that fit.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {site.name} helps owner-led businesses get clearer numbers through
          CFO and controller advisory—and {site.product}, our financial
          intelligence engine, when the software needs to match how the business
          runs.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {aboutPoints.map((point, index) => (
          <FadeIn key={point} delay={index * 0.08}>
            <div className="border-t border-border pt-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

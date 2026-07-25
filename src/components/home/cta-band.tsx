import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <FadeIn>
        <div className="relative overflow-hidden rounded-2xl bg-ink px-8 py-14 text-paper sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-teal/30 blur-3xl"
          />
          <h2 className="relative max-w-lg font-serif text-3xl tracking-tight sm:text-4xl">
            Ready for clearer financial leadership?
          </h2>
          <p className="relative mt-4 max-w-md text-sm leading-relaxed text-paper/70">
            Share a bit about your business. We’ll reply by email.
          </p>
          <div className="relative mt-8">
            <Button
              render={<Link href="/contact" />}
              variant="secondary"
              size="lg"
              className="bg-paper text-ink hover:bg-paper/90"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

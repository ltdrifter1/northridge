import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}. Reach out by email through the form.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1fr_1fr] md:py-28">
      <FadeIn>
        <p className="text-sm font-medium tracking-wide text-teal">Contact</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          Start a conversation.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          Tell us about your business and where the numbers feel unclear—advisory,
          {` ${site.product}`}, or both. We’ll reply by email.
        </p>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="rounded-2xl border border-border/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <ContactForm />
        </div>
      </FadeIn>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(135deg,#eef5f3_0%,#f7faf9_45%,#e4f0ed_100%)]" />
        <div className="absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/80" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M48 0H0V48"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-teal/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {site.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl"
        >
          Financial strategy that turns numbers into executive decisions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Calm, precise financial leadership for operators who need clarity—not
          more noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Button render={<Link href="/contact" />} size="lg">
            Start a conversation
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button render={<Link href="/services" />} variant="outline" size="lg">
            View services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

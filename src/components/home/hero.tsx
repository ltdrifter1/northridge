"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed atmospheric plane */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_-20%,#cfe4df_0%,transparent_55%),linear-gradient(180deg,#fbfcfb_0%,#f0f5f3_48%,#e8f0ed_100%)]" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_40%,rgb(31_107_99_/_0.14),transparent_60%)]" />
        <motion.div
          className="absolute -right-20 top-24 size-[28rem] rounded-full bg-teal/[0.08] blur-3xl"
          animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-center px-6 py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-serif text-[clamp(2.75rem,7vw,5.25rem)] leading-[1.05] tracking-[-0.03em] text-ink">
            {site.name}
          </p>

          {/* Signature precision line */}
          <motion.div
            className="mt-7 h-px origin-left bg-gradient-to-r from-teal via-teal/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-[18ch] text-[clamp(1.5rem,3.2vw,2.15rem)] font-medium leading-[1.25] tracking-[-0.02em] text-ink"
        >
          Financial strategy that turns numbers into executive decisions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Calm, precise financial leadership for operators who need clarity—not
          more noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Button
            render={<Link href="/contact" />}
            size="lg"
            className="h-12 px-6 text-[0.95rem]"
          >
            Start a conversation
            <ArrowRight data-icon="inline-end" className="size-4" />
          </Button>
          <Button
            render={<Link href="/services" />}
            variant="outline"
            size="lg"
            className="h-12 border-ink/15 bg-white/50 px-6 text-[0.95rem] backdrop-blur-sm hover:bg-white/80"
          >
            View services
          </Button>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/35 to-transparent"
      />
    </section>
  );
}

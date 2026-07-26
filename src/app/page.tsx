import { Approach } from "@/components/home/approach";
import { CtaBand } from "@/components/home/cta-band";
import { Hero } from "@/components/home/hero";
import { Outcomes } from "@/components/home/outcomes";
import { Pillars } from "@/components/home/pillars";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Outcomes />
      <Pillars />
      <Approach />
      <CtaBand />
    </>
  );
}

export const site = {
  name: "Northridge Advisory",
  tagline: "Financial strategy that turns numbers into executive decisions.",
  description:
    "Fractional CFO and financial strategy for operators who need clarity, calm, and board-ready judgment.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const outcomes = [
  {
    title: "Clearer numbers",
    description:
      "Reporting that leadership can actually use—clean, consistent, and focused on what matters.",
  },
  {
    title: "Stronger cash position",
    description:
      "Visibility into cash, runway, and working capital so decisions aren’t made in the dark.",
  },
  {
    title: "Confident next moves",
    description:
      "Forecasts, scenarios, and executive support when you’re growing, raising, or resetting.",
  },
] as const;

export const services = [
  {
    title: "Fractional CFO",
    description:
      "Senior financial leadership without a full-time hire. Strategy, cadence, and decision support.",
  },
  {
    title: "Reporting & clarity",
    description:
      "Management packs, KPI frameworks, and board materials that cut through noise.",
  },
  {
    title: "Forecasting & planning",
    description:
      "Practical models for cash, profitability, and growth—built for how your business actually runs.",
  },
  {
    title: "Systems & process",
    description:
      "Tighter close, cleaner data, and the operating rhythm that keeps finance reliable.",
  },
] as const;

export const aboutPoints = [
  "Deep experience across reporting, accounting, and executive financial leadership.",
  "Worked with companies of every size and type across Canada and the United States.",
  "Based in British Columbia. Available across Canada, the U.S., and globally.",
] as const;

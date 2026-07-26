export const site = {
  name: "Northridge",
  tagline: "Financial clarity for growing businesses—and tools built to keep it that way.",
  description:
    "Northridge helps owner-led businesses from $1M–$50M get clearer numbers through CFO/controller advisory and KeystoneOS, our financial intelligence engine. Based in Canada, serving the U.S. and clients globally.",
  product: "KeystoneOS",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const outcomes = [
  {
    title: "Numbers you can trust",
    description:
      "Clean reporting and a steady close—so owners aren’t guessing what the business actually made.",
  },
  {
    title: "Cash you can see",
    description:
      "Visibility into cash, collections, and runway before a problem becomes a crisis.",
  },
  {
    title: "Systems that fit",
    description:
      "When spreadsheets and off-the-shelf tools break down, KeystoneOS is built around how you operate.",
  },
] as const;

export const pillars = [
  {
    name: "Advisory",
    title: "CFO & controller support",
    description:
      "Hands-on financial leadership for growing businesses—reporting, cash, forecasting, and the operating rhythm that keeps finance reliable.",
    points: [
      "Management reporting and KPI clarity",
      "Cash, forecasting, and planning",
      "Close process and finance operations",
      "Owner and leadership decision support",
    ],
  },
  {
    name: site.product,
    title: "Financial intelligence engine",
    description:
      "Custom accounting software delivered as part of advisory—when your business has outgrown generic tools and needs a system built around how it actually runs.",
    points: [
      "Reporting and operational finance views",
      "Workflows tailored to your business",
      "Cleaner data for better decisions",
      "Built with the advisor who knows your numbers",
    ],
  },
] as const;

export const services = [
  {
    title: "Fractional CFO / controller",
    description:
      "Senior finance leadership without a full-time hire—cadence, judgment, and clarity for owner-led teams.",
  },
  {
    title: "Reporting & cash visibility",
    description:
      "Practical packs and cash views leadership will actually use—not reports that sit unread.",
  },
  {
    title: "Forecasting & planning",
    description:
      "Simple, durable models for growth, hiring, and runway—built for how your business works.",
  },
  {
    title: `${site.product}`,
    description:
      "Our financial intelligence engine: custom accounting software when advisory alone isn’t enough—and the tools need to match the business.",
  },
] as const;

export const aboutPoints = [
  "Finance expert who builds tools—deep experience in reporting, accounting, and hands-on financial leadership.",
  "Built for owner-led businesses roughly $1M–$50M in revenue across industries.",
  "Based in British Columbia. Primary focus on Canada and the U.S., available globally.",
] as const;

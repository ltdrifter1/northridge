# Northridge

Finance practice for owner-led businesses ($1M–$50M): CFO/controller advisory and **KeystoneOS**, a financial intelligence engine.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form + Zod

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — Home
- `/about` — About
- `/services` — Advisory + KeystoneOS
- `/contact` — Contact (email form)

## Contact email

Submissions go to **lp.guthrie@outlook.com**.

1. **Default (no setup):** browser sends via FormSubmit. The first submission triggers an activation email to that inbox — confirm once.
2. **Production (recommended):** set `RESEND_API_KEY` (see `.env.example`). The API route then delivers through Resend.

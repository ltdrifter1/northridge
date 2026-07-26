import { z } from "zod";

export const CONTACT_TO = "lp.guthrie@outlook.com";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  message: z
    .string()
    .trim()
    .min(10, "A short note helps—aim for a sentence or two."),
});

export type ContactPayload = z.infer<typeof contactSchema>;

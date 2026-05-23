import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),

  company: z.string().max(100).optional(),

  email: z.string().email("Invalid email address"),

  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid Indian phone number"),

  industry: z.string().optional(),

  enquiryType: z.enum(["Sales", "Rental", "Implementation"]).optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

export type ContactFormData = z.infer<typeof contactSchema>;

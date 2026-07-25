import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập họ và tên."),
  phone: z
    .string()
    .trim()
    .regex(
      /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
      "Vui lòng nhập số điện thoại hợp lệ.",
    ),
  company: z.string().trim().min(1, "Vui lòng nhập tên doanh nghiệp."),
  region: z.string().optional(),
  need: z.string().min(1, "Vui lòng chọn nhu cầu tư vấn."),
  quantity: z.string().optional(),
  notes: z.string().optional(),
  consent: z.boolean().refine((v) => v, {
    message: "Vui lòng đồng ý để SHT liên hệ.",
  }),
  // Honeypot — must be empty
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

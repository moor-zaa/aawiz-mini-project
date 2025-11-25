import z from "zod";

export const introSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().optional(),
  email: z.email(),
  age: z.number(),
});

export type IntroInputProps = z.infer<typeof introSchema>;

import { z } from "zod";

export const authSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = authSchema.pick({
  email: true,
  password: true,
});

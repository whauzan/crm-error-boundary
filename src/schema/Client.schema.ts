import { z } from "zod";

export const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  gender: z.string(),
  dob: z.string(),
  maritalStatus: z.string(),
  employmentStatus: z.string(),
});

export type Client = z.infer<typeof clientSchema>;

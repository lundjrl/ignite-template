import { z } from 'zod/v4'

export const UserSchema = z.object({
  id: z.uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  phone: z.number().min(7),
})

export type User = z.infer<typeof UserSchema>

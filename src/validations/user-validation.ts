import type { User } from 'types/schema/user-example'
import { UserSchema } from 'types/schema/user-example'

export function isValidUser(user: Partial<User>) {
  return UserSchema.safeParse(user)
}

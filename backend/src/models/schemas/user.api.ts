import { z } from 'zod'

import { UserModel } from '.'
import auth from '../../lib/auth/index'

// ----------------------------------------------------------------

const Password = z.object({
  password: z.string().refine(async (val) => await auth.isValidPassword(val)),
})

export const UserCreateSchema = UserModel.partial() // make all types optional
  .extend({ email: UserModel.shape.email }) // then make email a required field
  .merge(Password) // add password

export const UserUpdateSchema = UserModel.partial() // make all fields optional
  .strict() // disallow unknown keys

export type UserCreateType = z.infer<typeof UserCreateSchema>

export type UserUpdateType = z.infer<typeof UserUpdateSchema>

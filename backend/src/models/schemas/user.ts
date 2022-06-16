import * as z from "zod"
import { AccountStatus } from "@prisma/client"

export const UserModel = z.object({
  id: z.string().uuid(),
  email: z.string().max(200, { message: "Email must not exceed 200 characters" }),
  name: z.string().max(200, { message: "Name must not exceed 200 characters" }).nullish(),
  hashedPassword: z.string().max(100, { message: "hashedPassword must not exceed 100 characters" }),
  status: z.nativeEnum(AccountStatus),
  isAdmin: z.boolean(),
  isSeller: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

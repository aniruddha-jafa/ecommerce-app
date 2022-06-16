import { User } from '@prisma/client'
import { UserUpdateSchema, UserCreateSchema } from './schemas/user.api'

import type { UserCreateType, UserUpdateType } from './schemas/user.api'

// -- create user tests
describe('create user', () => {
  const schema = UserCreateSchema

  it('email & password are required', async () => {
    const userValid: UserCreateType = {
      email: 'user@email.com',
      password: 'Hello-world-12345',
    }
    let result = await schema.safeParseAsync(userValid)
    expect(result.success).toBe(true)

    const userMissingEmail = { name: 'user', password: 'Hello-world-12345' } // email is missing
    result = await schema.safeParseAsync(userMissingEmail)
    expect(result.success).toBe(false)
  })

  it('Can specify optional fields on create', async () => {
    const user: UserCreateType = {
      email: 'user@email.com',
      password: 'Hello-world-12345',
      name: 'Timmy',
      isSeller: true,
      createdAt: new Date(),
    }
    const result = await UserCreateSchema.safeParseAsync(user)
    expect(result.success).toBe(true)
  })
})

// -- update user tests
describe('update user', () => {
  const schema = UserUpdateSchema
  it('can omit optional fields', async () => {
    const user: UserUpdateType = {
      name: 'test-user', // field to update
      id: 'f2dfed11-db89-44e4-8ea9-f49a2c7240d9',
    }
    const result = await schema.safeParseAsync(user)
    expect(result.success).toBe(true)
  })

  it('can specify optional fields', async () => {
    const user: UserUpdateType = {
      name: 'Timmy',
      isSeller: true,
      status: 'BLOCKED',
    }
    const result = await schema.safeParseAsync(user)
    expect(result.success).toBe(true)
  })
})

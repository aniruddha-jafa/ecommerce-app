import bcrypt from 'bcrypt'
import pino from 'pino'

import validatePassword from './validatePassword'

// ----------------------------------------------------------------

const log = pino({ name: 'auth' })

const DEFAULT_SALT_ROUNDS = 10

/**
 * check if a plaintext string can be used as a valid password
 * e.g. it should have a minimum number of special characters
 *
 */
const isValidPassword = async (plaintext: string) => {
  // throws on validation error
  const result = await validatePassword.safeParseAsync(plaintext)
  return result
}

/**
 * check if a plaintext & hashedPassword match
 */
const authenticate = async (plaintext: string, hashedPassword: string) => {
  try {
    return await bcrypt.compare(plaintext, hashedPassword)
  } catch (err: any) {
    log.error(err?.message)
    return false
  }
}

/**
 *
 * @private
 * */
const encrypt = async (plaintext: string, saltRounds: number) => {
  return await bcrypt.hash(plaintext, saltRounds)
}

const createHashedPassword = async (plaintext: string) => {
  try {
    const result = await isValidPassword(plaintext)
    if (!result.success) {
      const { message } = result.error.issues[0]
      throw new Error(message)
    }
    const hashedPassword = await encrypt(plaintext, DEFAULT_SALT_ROUNDS)
    return hashedPassword
  } catch (err: any) {
    log.error(err?.message)
    throw new Error(err?.message || 'Password is invalid')
  }
}

export default { isValidPassword, createHashedPassword, authenticate }

import { z } from 'zod'

const PasswordSchema = {
  min: 10,
  max: 150,
  minDigits: 1,
  minSpecial: 1,
  minUpper: 1,
}

const regexUpper = /[A-Z]/g
const regexDigits = /\d/g
const regexSpecial = /[^\W-]/g

const validatePassword = z
  .string()
  .min(
    PasswordSchema.min,
    `Password must have at least ${PasswordSchema.min} characters`
  )
  .max(
    PasswordSchema.max,
    `Password length must not exceed ${PasswordSchema.min} characters`
  )
  .refine(
    (s) => {
      const matches = s.match(regexUpper)
      return matches && matches.length >= PasswordSchema.minUpper
    },
    {
      message: `Password must have at least ${
        PasswordSchema.minUpper
      } uppercase ${PasswordSchema.minUpper > 1 ? 'letters' : 'letter'}`,
    }
  )
  .refine(
    (s) => {
      const matches = s.match(regexDigits)
      return matches && matches?.length >= PasswordSchema.minDigits
    },
    {
      message: `Password must have at least  ${PasswordSchema.minDigits} ${
        PasswordSchema.minDigits > 1 ? 'digits' : 'digit'
      }`,
    }
  )
  .refine(
    (s) => {
      const matches = s.match(regexSpecial)
      return matches && matches.length >= PasswordSchema.minSpecial
    },
    {
      message: `Passwordmust have at least ${
        PasswordSchema.minSpecial
      } special ${PasswordSchema.minSpecial > 1 ? 'characters' : 'character'}`,
    }
  )

export default validatePassword

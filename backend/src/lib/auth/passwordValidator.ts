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

const passwordValidator = z
  .string()
  .min(PasswordSchema.min)
  .max(PasswordSchema.max)
  .refine(
    (s) => {
      const matches = s.match(regexUpper)
      return matches && matches.length >= PasswordSchema.minUpper
    },
    {
      message:
        'Must have at least ' + PasswordSchema.minUpper + ' uppercase letters',
    }
  )
  .refine(
    (s) => {
      const matches = s.match(regexDigits)
      return matches && matches?.length >= PasswordSchema.minDigits
    },
    { message: 'Must have at least ' + PasswordSchema.minDigits + ' numbers' }
  )
  .refine(
    (s) => {
      const matches = s.match(regexSpecial)
      return matches && matches.length >= PasswordSchema.minSpecial
    },
    {
      message:
        'Must have at least ' +
        PasswordSchema.minSpecial +
        ' special characters',
    }
  )

export default passwordValidator

import { z } from 'zod'

// ----------------------------------------------------------------

const EMAIL_MIN = 2
const EMAIL_MAX = 250
const PASSWORD_MIN = 8
const PASSWORD_MAX = 200

const LoginFormSchema = z.object({
  email: z
    .string()
    .min(EMAIL_MIN, `Email is too short`)
    .max(EMAIL_MAX, `Email must not exceed ${EMAIL_MAX} characters`)
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(PASSWORD_MIN, 'Password is too short')
    .max(PASSWORD_MAX, 'Password is too long'),
})

const initialValues: LoginForm = {
  email: '',
  password: '',
}

type LoginForm = z.infer<typeof LoginFormSchema>
type LoginFormKeys = Partial<keyof LoginForm>

export { LoginFormSchema, initialValues }
export type { LoginFormKeys }

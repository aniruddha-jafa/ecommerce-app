import auth from './index'

const invalid = ['hello-world', '', 29362, 'abc@123', 'abcdef12345']

it.each(invalid)('Password "%s" is invalid', async (password: any) => {
  const result = await auth.isValidPassword(password)
  expect(result.success).toBeFalsy()
})

const valid = ['P7Ca-l3cI-ay13', 'Twoc7*#xnaocu89']

it.each(valid)('Password "%s" is valid', async (password: string) => {
  const result = await auth.isValidPassword(password)
  expect(result.success).toBe(true)
})

it('Can authenticate a password', async () => {
  const plaintext = 'P7Ca-l3cI-ay13'
  const hashedPassword = await auth.createHashedPassword(plaintext)
  const result = await auth.authenticate(plaintext, hashedPassword)
  expect(result).toBe(true)
})

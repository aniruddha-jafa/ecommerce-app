import {
  FormControl,
  FormErrorMessage,
  Input,
  Container,
  Stack,
  Button,
} from '@chakra-ui/react'

import { useFormik } from 'formik'
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

type LoginForm = z.infer<typeof LoginFormSchema>

const initialValues: LoginForm = {
  email: '',
  password: '',
}

const onSubmit = (values: object) => {
  alert(JSON.stringify(values))
}

function validate(values: unknown) {
  const result = LoginFormSchema.safeParse(values)
  if (!result.success) {
    return result.error.flatten().fieldErrors
  }
  return {}
}

function Main() {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  })

  const { handleChange, touched, errors, values } = formik

  return (
    <Container
      maxW='sm'
      py='8'
      px='12'
      borderRadius='xl'
      boxShadow='lg'
      bgColor='white'
      mt={[8, 12, 32]}
    >
      <form
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        noValidate
      >
        <Stack spacing={4} justifyContent='space-around'>
          <FormControl isInvalid={Boolean(touched.email && errors.email)}>
            <Input
              name='email'
              type='email'
              placeholder='Email'
              value={values.email}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(touched.password && errors.password)}>
            <Input
              name='password'
              type='password'
              placeholder='********'
              value={values.password}
              onChange={handleChange}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Button mt={[8, 12]} type='submit' colorScheme='teal' width='full'>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Main

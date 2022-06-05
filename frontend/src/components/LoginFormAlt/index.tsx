import {
  FormControl,
  FormErrorMessage,
  Input,
  Container,
  Stack,
  Button,
} from '@chakra-ui/react'

import { useFormik } from 'formik'

import { LoginFormSchema, initialValues } from './schema'

// ----------------------------------------------------------------

/**@todo */
const onSubmit = (values: object) => {
  alert(JSON.stringify(values))
}

function validate(values: unknown) {
  const result = LoginFormSchema.safeParse(values)
  if (!result.success) {
    return result.error.flatten().fieldErrors // return error messages
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

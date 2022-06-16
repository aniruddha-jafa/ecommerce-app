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

// const API_URL = process.env.NEXT_PUBLIC_SERVER_DEV_URL

/**@todo */
const onSubmit = async (values: object) => {
  console.log('mock submit with:', values)
  // try {
  //   if (!API_URL) {
  //     throw new Error('API_URL is undefined')
  //   }
  //   const userEndpoint = API_URL + '/api/users'

  //   let res = await fetch(userEndpoint, {
  //     method: 'POST',
  //     body: JSON.stringify(values),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //   // res = await res.json()
  //   console.log('Received resposne: ', res)
  // } catch (err: any) {
  //   console.error('Something went wrong: ', err?.message)
  // }
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

import 'styles/globals.css'

import Head from 'next/head'
import type { AppProps } from 'next/app'

// -- data
import { UserProvider } from 'components/user/UserContext'

// -- ui
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/index'

// ----------------------------------------------------------------

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <ChakraProvider theme={theme}>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp

import 'styles/globals.css'

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme/index'

import type { AppProps } from 'next/app'

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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp

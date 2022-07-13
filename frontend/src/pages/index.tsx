import BaseLayout from 'layouts/BaseLayout'
import { Box } from '@chakra-ui/react'

import type { NextPage } from 'next'

// ----------------------------------------------------------------

/**
 * For layout see:
 * {@link | https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto}
 */
const Home: NextPage = () => {
  return (
    <>
      <BaseLayout>
        <Box bgColor='orange.100' height='100%'></Box>
      </BaseLayout>
    </>
  )
}

export default Home

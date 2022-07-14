// -- components
import { Box } from '@chakra-ui/react'

// custom
import BaseLayout from 'layouts/BaseLayout'
import ProductGrid from 'components/ProductGrid/index'

// -- types
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
        <Box bgColor='orange.50' height='100%'>
          <ProductGrid />
        </Box>
      </BaseLayout>
    </>
  )
}

export default Home

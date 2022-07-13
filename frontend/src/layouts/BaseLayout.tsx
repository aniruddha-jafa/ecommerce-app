import { Grid } from '@chakra-ui/react'

import Footer from 'components/Footer/index'
import Navbar from 'components/Navbar/index'

import type { ReactNode } from 'react'

// ----------------------------------------------------------------

interface props {
  children: ReactNode
}

/** 
 * Header + footer, & distribute remaining space to page contents
 * 
 * {@link | https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto}
*/
function Main({ children }: props) {
  return (
    <>
      <Grid minH='100vh' gridAutoRows={'auto 1fr auto'}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Grid>
    </>
  )
}

export default Main

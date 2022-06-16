import Footer from 'components/Footer/index'
import Navbar from 'components/Navbar/index'

import type { ReactNode } from 'react'

interface props {
  children: ReactNode
}

/**
 * For layout see:
 * {@link | https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto}
 */
function Main({ children }: props) {
  return (
    <>
      <div
        className='
      min-h-screen 
      grid grid-rows-[auto_1fr_auto]
      '
      >
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Main

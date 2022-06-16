import Footer from 'components/Footer/index'
import Navbar from 'components/Navbar/index'

import type { NextPage } from 'next'

/**
 * For layout see:
 * {@link | https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto}
 */
const Home: NextPage = () => {
  return (
    <>
      <div
        className='
      min-h-screen 
      grid grid-rows-[auto_1fr_auto]
      '
      >
        <Navbar />
        <div>
          <p>body</p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home

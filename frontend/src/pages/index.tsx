import BaseLayout from 'layouts/BaseLayout'

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
        <p>Home...</p>
      </BaseLayout>
    </>
  )
}

export default Home

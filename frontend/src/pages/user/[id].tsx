import { useRouter } from 'next/router'

// -- ui
import BaseLayout from 'layouts/BaseLayout'
import { UserDetail } from 'components/user/UserDetail'

import type { NextPage } from 'next'

// ----------------------------------------------------------------

/**
 * For layout see:
 * {@link | https://web.dev/one-line-layouts/#04.-pancake-stack:-grid-template-rows:-auto-1fr-auto}
 */
const Main: NextPage = () => {
  const router = useRouter()
  const id = (router.query?.id as string) || ''
  return (
    <>
      <BaseLayout>
        <UserDetail userId={id} />
      </BaseLayout>
    </>
  )
}

export default Main
export { UserDetail }

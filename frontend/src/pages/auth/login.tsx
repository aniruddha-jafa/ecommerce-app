import type { NextPage } from 'next'

import Login from 'components/LoginForm'

const LoginPage: NextPage = () => {
  return (
    <div className='h-screen bg-purple-200 border px-2'>
      <Login />
    </div>
  )
}

export default LoginPage

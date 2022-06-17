import { createContext, useCallback, useState } from 'react'

import userApi from '../../lib/userApi'

import type { ReactNode } from 'react'
// ----------------------------------------------------------------

interface User {
  name?: string
  email: string
  id: string
  createdAt: string
  updatedAt: string
  status: string
  isAdmin: boolean
  isSeller: boolean
}

interface UserState {
  user: User
  loading: boolean
  // eslint-disable-next-line no-unused-vars
  getUser: (userId: string) => Promise<void>
}

const UserContext = createContext<UserState>({} as UserState)

interface props {
  children: ReactNode
}

const UserProvider = ({ children }: props) => {
  const [user, setUser] = useState({} as User)
  const [loading, setLoading] = useState(false)

  /**
   * fetch a user with given user id
   */
  const getUser = useCallback(async (userId: string) => {
    try {
      if (!userId) {
        throw new Error('User id is required')
      }
      setLoading(true)

      const user = await userApi.read(userId)
      setUser(user)
    } catch (err) {
      console.error('unable to fetch user')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, loading, getUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }

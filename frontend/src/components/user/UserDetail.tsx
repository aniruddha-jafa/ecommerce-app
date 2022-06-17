import { useEffect, useContext } from 'react'
import { UserContext } from 'components/user/UserContext'

// -- ui
import { IconButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

// ----------------------------------------------------------------
interface props {
  userId: string
}
export const UserDetail = ({ userId }: props) => {
  const userState = useContext(UserContext)

  useEffect(() => {
    userState.getUser(userId).catch((err) => console.error(err))
  }, [userState, userId])

  const { user } = userState
  if (!user) {
    return <></>
  }
  const {
    email = '',
    name = '',
    isSeller = false,
    isAdmin = false,
    createdAt = '',
  } = user
  return (
    <div className='card shadow-lg max-w-md mx-auto'>
      <div className='card-body'>
        <div className='card-actions justify-between items-center'>
          <div className='card-title'>Hi, {name || email}</div>
          <span className='tooltip' data-tip='edit'>
            <IconButton icon={<EditIcon />} aria-label='edit' className='' />
          </span>
        </div>
        {createdAt && <p>Joined {new Date(createdAt).toDateString()} </p>}
        <div className='card-actions justify-start'>
          {isSeller && <div className='badge'>Seller</div>}
          {isAdmin && <div className='badge'>Admin</div>}
        </div>
      </div>
    </div>
  )
}

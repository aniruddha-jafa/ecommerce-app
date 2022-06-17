import fetchJSONData from 'lib/fetchJSON'
// ----------------------------------------------------------------

const USERS_API = `${process.env.NEXT_PUBLIC_SERVER_DEV_URL}/users/`

const read = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error('userId is required')
    }
    const url = `${USERS_API}/${userId}`
    const { error, data } = await fetchJSONData(url)
    if (error) {
      throw new Error(data)
    }
    return data
  } catch (err) {
    console.error('unable to fetch user')
    return null
  }
}

export default { read }

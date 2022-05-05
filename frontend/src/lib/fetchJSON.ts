async function fetchJSONData(url: string) {
  try {
    const data = await fetch(url)
    const body = await data.json()
    return { error: false, data: body }
  } catch (err) {
    console.error(err)
    let message = `Unable to fetch at ${url}`
    if (err instanceof Error) {
        message = err.message
    }
    return { error: true, data: message }
  }
}

export default fetchJSONData
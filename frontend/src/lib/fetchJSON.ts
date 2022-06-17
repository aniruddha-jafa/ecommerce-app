async function fetchJSONData(url: string) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    return { error: false, data }
  } catch (err: any) {
    console.error(err)
    const message = err?.message || `Unable to fetch ${url}`
    return { error: true, data: message }
  }
}

export default fetchJSONData
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import Problem from 'components/Problem'

const API_URL = 'http://127.0.0.1:8000/api/v1'

const fetchAPIData = async () => {
  try {
    const data = await fetch(API_URL)
    const body = await data.json()
    return body
  } catch (err) {
    console.error(err)
    return []
  }
}

interface IProblem {
  title: string,
  description: string
}

const Home: NextPage = () => {
  const [problems, setProblems] = useState<IProblem[]>([])

  useEffect(() => {
    fetchAPIData()
      .then(data => setProblems(data))
      .catch(err => console.error(err))
  }, [])
  
  return (
    <form onSubmit={() => alert('hi')}>
      <p>Hello World!</p>
      <textarea name="code" id="dummy" cols={30} rows={10} />
      <button type="submit">Submit</button>
      problems are: 
      {
        problems.map((problem, index) => (<Problem key={index} title={problem.title} description={problem.description} />))
      }
    </form>
  )
}

export default Home

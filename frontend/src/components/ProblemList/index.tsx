import { useState, useEffect } from 'react'
import fetchJSON from 'lib/fetchJSON'
import Problem from 'components/Problem'
import type { IProblem } from 'components/Problem'


const API_URL = process.env.NEXT_PUBLIC_API_URL

function ProblemList() {
  const [problems, setProblems] = useState<IProblem[]>([]);

  useEffect(() => {
    if (API_URL == undefined) {
      console.error('No API_URL: ', API_URL)
      return
    }
    fetchJSON(API_URL)
      .then(({ error, data}) => {
          if (error) {
              throw new Error(data)
          } 
          if (!Array.isArray(data)) {
              throw new Error('Expected an array')
          }
          setProblems(data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <p className='text-xl'>Problems</p>
      <div className='
      flex flex-col
      p-4 gap-4
      min-h-screen
      bg-slate-50
      max-w-lg'>
        {problems.map((problem, index) => (<Problem key={index} title={problem.title} description={problem.description} />))}
      </div>
    </div>
  )
}

export default ProblemList
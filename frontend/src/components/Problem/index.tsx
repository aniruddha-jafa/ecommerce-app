
interface IProblem {
  title: string 
  description: string
}

type ProblemProps = {
    title: string,
    description: string,
}

function Problem({ title }: ProblemProps) {
  return (
    <div className='
    flex max-w-full
    py-6 px-6
    shadow-md rounded-lg
    bg-white
    hover:drop-shadow-md hover:cursor-pointer
    '>
      <p className='capitalize font-semibold text-off-black'>{title}</p>
    </div>
  )
}

export default Problem
export type { IProblem }

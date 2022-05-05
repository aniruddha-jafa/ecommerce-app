
type ProblemProps = {
    title: string,
    description: string,
}

function Problem({ title, description }: ProblemProps) {
  return (
    <>
      {title}
      {description}
    </>
  )
}

export default Problem

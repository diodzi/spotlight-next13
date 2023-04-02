type Technology = {
  name: string
  mainStack: boolean
  typeOfTech: string[]
}

export default function MainStack({
  heading,
  technologies,
}: {
  heading: string
  technologies: Technology[]
}) {
  return (
    <>
      <h3 className="text-2xl font-bold">{heading}</h3>
      {technologies.map((technology: Technology) => {
        return <div>{technology.name}</div>
      })}
    </>
  )
}
// trust me this will look funny on github lmao

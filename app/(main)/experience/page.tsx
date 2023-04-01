import ExperienceContainer from './ExperienceContainer'
import { toPlainText } from '@portabletext/react'
import client from '../../../sanity/client'
import StyledBoxLink from '../StyledBoxLink'
import MainStack from './MainStack'

type ExperiencePageDataTypes = {
  experienceSectionDetails: { blurb: [] }
  techSectionDetails: { blurb: [] }
  experiences: {
    name: string
    position: string
    timeframe: string
    description: any[]
  }[]
  mainStack: Technology[]
  nonMainStack: Technology[]
}

type Technology = {
  name: string
  mainStack: boolean
  typeOfTech: string[]
}

async function getExperiencePageData(): Promise<ExperiencePageDataTypes> {
  const blurbData = await client.fetch(
    `*[_type == "page" && name == "Experience"]
    {
      "experienceSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Experience"]
      {blurb}[0],
      "techSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Technologies"]
      {blurb}[0],
    }[0]`
  )
  const { experienceSectionDetails, techSectionDetails } = blurbData

  const experiences = await client.fetch(
    `*[_type == "experience"] | order(startdate desc)
    {name, position, timeframe, description}`
  )

  const technologies = await client.fetch(
    `*[_type == "technology"]
    {
      name, typeOfTech, mainStack
    }`
  )

  let mainStack: Technology[] = []
  let nonMainStack: Technology[] = []
  technologies.map((technology: Technology) => {
    technology.mainStack == true
      ? mainStack.push(technology)
      : nonMainStack.push(technology)
  })

  return {
    experienceSectionDetails,
    techSectionDetails,
    experiences,
    mainStack,
    nonMainStack,
  }
}

export default async function ExperiencePage() {
  const {
    experienceSectionDetails,
    techSectionDetails,
    experiences,
    mainStack,
    nonMainStack,
  }: ExperiencePageDataTypes = await getExperiencePageData()
  console.log(mainStack)

  return (
    <main>
      <section className="grid grid-cols-1 place-items-center gap-5 px-10 pt-14 pb-0">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p>{toPlainText(experienceSectionDetails.blurb)}</p>
        <div className="flex flex-col gap-5">
          {experiences?.map(({ name, position, timeframe, description }) => {
            return (
              <ExperienceContainer
                name={name}
                position={position}
                timeframe={timeframe}
                description={description}
                key={name}
              />
            )
          })}
        </div>
      </section>

      <section className="grid place-items-center gap-5 px-10 py-14">
        <h1 className="text-4xl font-bold">Technologies</h1>
        <p>
          {toPlainText(techSectionDetails.blurb)}
          <StyledBoxLink link="blog" description={null} small={true} />
        </p>

        <div className="grid place-items-center">
          <MainStack heading="Main Web Stack" technologies={mainStack} />
        </div>
      </section>
    </main>
  )
}

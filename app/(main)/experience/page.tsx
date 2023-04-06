import ExperienceContainer from './ExperienceContainer'
import { toPlainText } from '@portabletext/react'
import client from '../../../sanity/client'
import StyledBoxLink from '../(homeComponents)/StyledBoxLink'
import TechStack from './TechStack'
import { Technology } from '@/types/global'

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

async function getExperiencePageData(): Promise<ExperiencePageDataTypes> {
  const { experienceSectionDetails, techSectionDetails } = await client.fetch(
    `*[_type == "page" && name == "Experience"]
    {
      "experienceSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Experience"]
      {blurb}[0],
      "techSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Technologies"]
      {blurb}[0],
    }[0]`
  )

  const experiences = await client.fetch(
    `*[_type == "experience"] | order(startdate desc)
    {name, position, timeframe, description}`
  )

  const technologies = await client.fetch(
    `*[_type == "technology"] | order(typeOfTech[0] asc)
    {
      name, typeOfTech, mainStack,
      logo{asset->{url}}
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

  return (
    <main>
      <section className="grid grid-cols-1 place-items-center gap-5 px-10 pt-14 pb-0">
        <h1 className="text-4xl font-bold">Experience</h1>
        <p>{toPlainText(experienceSectionDetails.blurb)}</p>
        <div className="flex flex-col gap-5 w-full">
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

        <div className="flex flex-col gap-5 w-full">
          <TechStack heading="Main Web Stack" technologies={mainStack} />
          <TechStack heading="Other Technologies" technologies={nonMainStack} />
        </div>
      </section>
    </main>
  )
}

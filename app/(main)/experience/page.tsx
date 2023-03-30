import ExperienceContainer from './ExperienceContainer'
import { toPlainText } from '@portabletext/react'
import client from '../../../sanity/client'
import StyledBoxLink from '../StyledBoxLink'

type ExperiencePageDataTypes = {
  experiences: {
    name: string
    position: string
    timeframe: string
    description: any[]
  }[]
  experienceSectionDetails: { blurb: any[] }
  techSectionDetails: { blurb: any[] }
}

async function getExperiencePageData(): Promise<ExperiencePageDataTypes> {
  const data = await client.fetch(
    `*[_type == "page" && name == "Experience"]
    {
      "experienceSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Experience"]
      {blurb}[0],
      "techSectionDetails": *[_type == "pageDetail" && references(^._id) && (subsection->name) == "Technologies"]
      {blurb}[0],
      "experiences": *[_type == "experience"] | order(startdate desc)
      {name, position, timeframe, description}
    }[0]`
  )

  return data
}

export default async function ExperiencePage() {
  const {
    experiences,
    experienceSectionDetails,
    techSectionDetails,
  }: ExperiencePageDataTypes = await getExperiencePageData()

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

      <section className="grid grid-col place-items-center gap-5 px-10 py-14">
        <h1 className="text-4xl font-bold">Technologies</h1>
        <p>
          {toPlainText(techSectionDetails.blurb)}
          <StyledBoxLink link="blog" description={null} small={true} />
        </p>
      </section>
    </main>
  )
}

import ExperienceContainer from './ExperienceContainer'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'

type ExperiencePageDataTypes = {
  experiences: {
    name: string
    position: string
    timeframe: string
    description: any[]
  }[]
  pageDetails: { blurb: any[] }
}

async function getExperiencePageData(): Promise<ExperiencePageDataTypes> {
  const client = createClient({
    projectId: 'vuk3eh3d',
    dataset: 'production',
    apiVersion: '2022-03-27',
  })

  const data = await client.fetch(
    `*[_type == "page" && name == "Experience"]
    {
      "pageDetails": *[_type == "pageDetail" && references(^._id)]
      {blurb}
      [0],
      "experiences": *[_type == "experience"] | order(startdate desc)
      {name, position, timeframe, description}
    }[0]`
  )
  return data
}

export default async function ExperiencePage() {
  const { experiences, pageDetails }: ExperiencePageDataTypes =
    await getExperiencePageData()

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <PortableText value={pageDetails.blurb} />
      <div className="flex flex-col gap-5 mt-8">
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
    </div>
  )
}

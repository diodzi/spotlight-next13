import ExperienceContainer from './ExperienceContainer'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'vuk3eh3d',
  dataset: 'production',
  apiVersion: '2022-03-27',
})

async function getExperiences() {
  const experiences = await client.fetch(
    `*[_type == "experience"] | order(startdate desc)`
  )
  if (experiences) {
    return {
      experiences,
    }
  }
}

export default async function ExperiencePage() {
  const data = await getExperiences()

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <p className="text-center">
        This is a complete list of every professional position I have ever held.
      </p>
      <div className="flex flex-col gap-5 mt-8">
        {data?.experiences.map(
          ({ name, position, timeframe, description }: any) => {
            return (
              <ExperienceContainer
                name={name}
                position={position}
                timeframe={timeframe}
                description={description}
              />
            )
          }
        )}
      </div>
    </div>
  )
}

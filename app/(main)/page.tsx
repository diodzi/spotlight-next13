import Header from './Header'
import StyledBoxLink from './StyledBoxLink'
import { createClient } from 'next-sanity'
import { PortableText } from '@portabletext/react'

type HomePageDataTypes = {
  buttons: { name: string; description: any[] }[]
  pageDetails: { blurb: any[] }
}

async function getHomePageData(): Promise<HomePageDataTypes> {
  const client = createClient({
    projectId: 'vuk3eh3d',
    dataset: 'production',
    apiVersion: '2022-03-27',
  })

  const data = await client.fetch(
    `*[_type == "page" && name == "Home"]
    {
      "pageDetails": *[_type == "pageDetail" && references(^._id)]
      {blurb}
      [0],
      "buttons": *[_type == "buttonDescriptor" && references(^._id)]{name, description}
    }
    [0]`
  )

  return data
}

export default async function Home() {
  const { buttons, pageDetails }: HomePageDataTypes = await getHomePageData()

  return (
    <main className="flex flex-col items-center">
      <Header />

      <section className="flex flex-col items-center p-10 pb-0">
        <h1 className="text-4xl font-bold mb-5">Hello!</h1>
        <PortableText value={pageDetails.blurb} />
      </section>

      <div className="grid grid-rows-2 grid-cols-2 w-fit gap-5 p-10">
        {buttons.map(
          ({ name, description }: { name: string; description: any[] }) => {
            return <StyledBoxLink link={name} description={description} />
          }
        )}
      </div>
    </main>
  )
}

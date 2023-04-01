import Header from './Header'
import StyledBoxLink from './StyledBoxLink'
import { toPlainText } from '@portabletext/react'
import client from '../../sanity/client'

type HomePageDataTypes = {
  buttons: { name: string; description: any[] }[]
  pageDetails: { blurb: any[] }
}

async function getHomePageData(): Promise<HomePageDataTypes> {
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

      <section className="flex flex-col items-center px-10 pb-0 pt-14">
        <h1 className="text-4xl font-bold mb-5">Hello!</h1>
        <p>{toPlainText(pageDetails.blurb)}</p>
      </section>

      <section className="grid grid-rows-2 grid-cols-2 w-screen gap-5 px-10 py-14">
        {buttons.map(
          ({ name, description }: { name: string; description: any[] }) => {
            return <StyledBoxLink link={name} description={description} />
          }
        )}
      </section>
    </main>
  )
}

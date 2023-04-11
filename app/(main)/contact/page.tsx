import client from '@/sanity/client'
import { toPlainText } from '@portabletext/react'
import { SocialLinkType } from '@/types/global'
import SocialLink from './SocialLink'

async function getContactPageData() {
  const { pageDetail } = await client.fetch(
    `*[_type == "page" && name == "Contact"]{
        "pageDetail": *[_type == "pageDetail" && references(^._id)]
        {blurb}[0]
    }[0]`
  )

  const socialLinks = await client.fetch(
    `*[_type == "socialLink"]{name, handle, href, 
        image{asset->{url}}}`
  )

  return { pageDetail, socialLinks }
}

export default async function ContactPage() {
  const { pageDetail, socialLinks } = await getContactPageData()

  return (
    <div className="stack p-10 gap-5">
      <h1 className="text-4xl font-bold">Contact</h1>
      {toPlainText(pageDetail.blurb)}
      {socialLinks.map((social: SocialLinkType) => {
        return <SocialLink {...social} />
      })}
    </div>
  )
}

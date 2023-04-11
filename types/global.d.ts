export type Technology = {
  name: string
  mainStack: boolean
  typeOfTech: string[]
  logo: { asset: { url: string } }
}

export type BlogPostPreviewType = {
  title: string
  date: string
  description: string
  slug: { _type: string; current: string }
  image: { asset: { url: string } }
}

export type SocialLinkType = {
  href: string
  name: string
  handle: string
  image: { asset: { url: string } }
}

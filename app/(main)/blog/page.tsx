import client from '@/sanity/client'
import BlogPostPreview from './BlogPostPreview'
import { BlogPostPreviewType } from '@/types/global'

async function getBlogPageData() {
  const data = await client.fetch(
    `*[_type == "blogPost"]
    {title, date, description, slug, 
    image{asset->{url}}}
    `
  )

  return data
}

export default async function Blog() {
  const pages = await getBlogPageData()

  return (
    <div className="stack p-10 gap-5">
      <h1 className="text-4xl font-bold">Blog</h1>
      {pages.map((post: BlogPostPreviewType) => {
        return <BlogPostPreview {...post} />
      })}
    </div>
  )
}

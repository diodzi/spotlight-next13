import client from '@/sanity/client'
import { PortableText } from '@portabletext/react'
import { PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import SanityImage from './SanityImage'

const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-4">{children}</h2>
    ),
  },
  types: {
    image: SanityImage,
  },
}

async function getBlogPostData(slug: string) {
  const data = await client.fetch(
    `*[_type == "blogPost" && slug.current == "${slug}"]
        {title, date, content, description,
        image{asset->{url}}}
        [0]`
  )

  console.log(data.content)

  return data
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const { title, content, date, description, image } = await getBlogPostData(
    params.slug
  )

  return (
    <article className="p-10 stack gap-10">
      <div>
        <h1 className="text-6xl font-bold">{title}</h1>
        <span>{date}</span>
        <p>{description}</p>
      </div>

      <div className="relative w-full h-72 rounded-2xl styled-shadow overflow-hidden">
        <Image
          src={image.asset.url}
          alt="main image for blog post"
          fill
          style={{ objectFit: 'cover' }}
        ></Image>
      </div>
      <div className="flex flex-col gap-5">
        {<PortableText value={content} components={components} />}
      </div>
    </article>
  )
}

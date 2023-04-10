import Link from 'next/link'
import Image from 'next/image'
import { BlogPostPreviewType } from '@/types/global'
import { BsArrowUpRight } from 'react-icons/bs'

export default function BlogPostPreview({
  title,
  date,
  description,
  slug,
  image,
}: BlogPostPreviewType) {
  return (
    <Link href={`/blog/${slug.current}`}>
      <div className="stack gap-5 styled-shadow rounded-2xl p-6">
        <div className="w-full h-32 relative rounded-2xl overflow-hidden">
          <Image
            src={image.asset.url}
            alt="main picture of blog post"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <div className="flex gap-1 items-baseline">
            <h1 className="font-bold text-2xl">{title}</h1>
            <BsArrowUpRight />
          </div>
          <span className="font-bold">{date}</span>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

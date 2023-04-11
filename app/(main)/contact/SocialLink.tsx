import { SocialLinkType } from '@/types/global'
import Image from 'next/image'

export default function SocialLink({
  href,
  name,
  handle,
  image,
}: SocialLinkType) {
  return (
    <a href={href} target="_blank">
      <div className="stack">
        <div className="flex gap-5 items-center styled-shadow p-6 rounded-2xl">
          <div className="h-16 w-16 relative">
            <Image
              src={image.asset.url}
              fill
              style={{ objectFit: 'cover' }}
              alt={`${name} logo`}
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold">{name}</span>
            {handle}
          </div>
        </div>
      </div>
    </a>
  )
}

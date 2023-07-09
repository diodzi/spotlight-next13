import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/client'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export default function ({ value }: any) {
  return (
    <div className="w-64 h-32 relative rounded-2xl overflow-hidden">
      <img
        src={urlFor(value).url()}
        alt={''}
        loading="lazy"
        className="object-cover"
      />
    </div>
  )
}

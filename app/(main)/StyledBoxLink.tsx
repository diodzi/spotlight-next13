import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'
import { PortableText } from '@portabletext/react'

type StyledBoxLinkProps = {
  link: string
  description: any[] | null
  small?: boolean
}

export default function StyledBoxLink({
  link,
  description,
  small = false,
}: StyledBoxLinkProps) {
  return (
    <Link
      href={link.toLowerCase()}
      className={`${small ? 'p-1' : 'p-4'} styled-shadow hoverable rounded-lg`}
    >
      <div
        className={
          small ? 'mb-0 inline' : 'flex align-baseline mb-2 justify-between'
        }
      >
        {link}
        <BsArrowUpRight className="inline" />
      </div>
      {description != null && (
        <div className="pt-2 border-t-2 border-t-black">
          <PortableText value={description} />
        </div>
      )}
    </Link>
  )
}

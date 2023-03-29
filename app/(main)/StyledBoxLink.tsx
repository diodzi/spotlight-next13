import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'
import { PortableText } from '@portabletext/react'

type StyledBoxLinkProps = {
  link: string
  description: any[]
}

export default function StyledBoxLink({
  link,
  description,
}: StyledBoxLinkProps) {
  return (
    <Link href={link.toLowerCase()} className="p-4 bg-kinda-gray rounded-lg">
      <div className="flex justify-between align-baseline border-b-2 border-b-black mb-2 pb-2">
        {link}
        <BsArrowUpRight className="inline" />
      </div>
      <PortableText value={description} />
    </Link>
  )
}

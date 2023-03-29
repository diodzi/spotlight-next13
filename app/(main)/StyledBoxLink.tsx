import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

type StyledBoxLinkProps = {
  link: string
  description: string
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
      <p>{description}</p>
    </Link>
  )
}

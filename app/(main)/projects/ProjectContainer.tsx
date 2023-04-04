'use client'

import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity/client'
import { toPlainText } from '@portabletext/react'
import { BsArrowUpRight } from 'react-icons/bs'

type ProjectContainerProps = {
  name: string
  image: {}
  description: []
  technologies: {}[]
}

type Technology = {
  name: string
  mainStack: boolean
  typeOfTech: string[]
  logo: {}
  technologies: { logo: {} }
}

export default function ProjectContainer({
  name,
  image,
  description,
  technologies,
}: ProjectContainerProps) {
  const imageProps = useNextSanityImage(client, image)
  const { src } = imageProps

  return (
    <div className="w-full p-6 stack gap-3 styled-shadow hoverable rounded-2xl">
      <div className="flex items-baseline justify-between w-full">
        <h3 className="font-bold text-2xl">{name}</h3>
        <BsArrowUpRight />
      </div>
      <div className="w-full h-64 relative rounded-xl overflow-hidden border-white border-4 shadow-lg shadow-gray-300">
        <Image src={src} alt="technology" fill style={{ objectFit: 'cover' }} />
      </div>
      <p>{toPlainText(description)}</p>
      <div className="w-full flex flex-col items-start gap-4">
        <h3 className="text-start font-bold">Technologies:</h3>
        <div className="w-full flex gap-3">
          {technologies.map((technology: any) => {
            return (
              <div className="w-10 h-10 relative">
                <Image src={technology.logo.asset.url} fill alt="technology" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

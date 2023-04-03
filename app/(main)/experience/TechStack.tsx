'use client'

import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity/client'

type Technology = {
  name: string
  mainStack: boolean
  typeOfTech: string[]
  logo: {}
}

type TechStackProps = {
  heading: string
  technologies: Technology[]
}

export default function TechStack({ heading, technologies }: TechStackProps) {
  return (
    <div className="flex flex-col items-center gap-5 p-6 rounded-3xl styled-shadow">
      <h3 className="text-lg font-bold">{heading}</h3>
      <div className="grid grid-cols-2 grid-flow-row gap-6">
        {technologies.map((technology: Technology) => {
          const imageProps = useNextSanityImage(client, technology.logo)
          return (
            <div className="flex flex-col items-center ">
              <Image
                {...imageProps}
                alt={`${technology.name} logo`}
                width={50}
              />
              <span className="font-bold mt-2">{technology.name}</span>
              <span className="text-center">
                {technology.typeOfTech[0].substring(1)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

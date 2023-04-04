import Image from 'next/image'
import { Technology } from '@/types/global'

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
          return (
            <div className="flex flex-col items-center ">
              <Image
                src={technology.logo.asset.url}
                alt={`${technology.name} logo`}
                width={50}
                height={50}
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

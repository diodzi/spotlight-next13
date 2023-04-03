import { toPlainText } from '@portabletext/react'

type Props = {
  name: string
  position: string
  timeframe: string
  description: any[]
}

export default function ExperienceContainer(props: Props) {
  const { name, position, timeframe, description } = props || null

  return (
    <div className="styled-shadow p-6 rounded-3xl">
      <div className=" pb-2 mb-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <strong>{position}</strong>
        <p>{timeframe}</p>
      </div>
      <p className="break-words">{toPlainText(description)}</p>
    </div>
  )
}

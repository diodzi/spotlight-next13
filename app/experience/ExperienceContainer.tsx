interface Props {
  name: string
  position: string
  timeframe: string
  description: object
}

export default function ExperienceContainer({
  name,
  position,
  timeframe,
  description,
}: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <strong>{position}</strong>
      {timeframe}
    </div>
  )
}

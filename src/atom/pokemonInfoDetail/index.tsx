/**
 *
 * @param props
 * @returns
 */

type InfoProps = {
  features: string
  text: string
}
export const PokemonInfoDetail = (props: InfoProps) => {
  const { features, text } = props

  return (
    <>
      <div>
        {features}:{text}
      </div>
    </>
  )
}

import Image from 'next/image'

export const PokemonImage = (props: { src: string; name: string }) => {
  const { src, name } = props

  // next/Imageの機能
  const pokemonImageLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <>
      <Image
        loader={pokemonImageLoader}
        src={src}
        alt={`${name}の画像`}
        layout="responsive"
        width={134}
        height={134}
      />
    </>
  )
}

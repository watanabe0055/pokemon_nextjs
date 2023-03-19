import Image from 'next/image'
import dummyImage from 'public/dummy/hushigidane.png'

const dummyData = {
  src: dummyImage,
  alt: 'フシギダネの画像',
}

export const PokemonImage = (props: { src: string }) => {
  const { src } = props

  // next/Imageの機能
  const pokemonImageLoader = ({ src }) => {
    return `${src}`
  }

  return (
    <>
      <Image
        loader={pokemonImageLoader}
        src={src}
        alt={dummyData.alt}
        layout="responsive"
        width={134}
        height={134}
      />
    </>
  )
}

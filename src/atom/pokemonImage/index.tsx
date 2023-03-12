import Image from 'next/image'
import dummyImage from 'public/dummy/hushigidane.png'

const dummyData = {
  src: dummyImage,
  alt: 'フシギダネの画像',
}

export const PokemonImage = (props) => {
  console.log(props.src)

  return (
    <>
      <Image
        src={dummyData.src}
        alt={dummyData.alt}
        layout="responsive"
        width={134}
        height={134}
      />
    </>
  )
}

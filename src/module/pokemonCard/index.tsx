import { PokemonImage } from '@/atom/pokemonImage'
import { PokemonName } from '@/atom/pokemonName'
import styles from '@/module/pokemonCard/index.module.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const PokemonCard = (props: { name: string; url: string }) => {
  const { name, url } = props
  const [pokemonImage, setPokemonImage] = useState<string | undefined>()
  console.log(pokemonImage)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const pokemonData =
          response.data.sprites.other['official-artwork'].front_default
        setPokemonImage(pokemonData)
      })
      .catch((error) => {
        console.log(error)
        setPokemonImage(undefined)
      })
  }, [url])

  return (
    <div className={styles.grid_item}>
      <div className={styles.image_content}>
        {pokemonImage ? (
          <div>
            <PokemonImage src={pokemonImage} />
            <PokemonName name={name} />
          </div>
        ) : (
          <p>aaa</p>
        )}
      </div>
    </div>
  )
}

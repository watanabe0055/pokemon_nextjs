import { PokemonImage } from '@/atom/pokemonImage'
import { PokemonName } from '@/atom/pokemonName'
import styles from '@/module/pokemonCard/index.module.scss'

export const PokemonCord = (props) => {
  const { name } = props

  return (
    <div className={styles.grid_item}>
      <div className={styles.image_content}>
        <PokemonImage />
        <PokemonName name={name} />
      </div>
    </div>
  )
}

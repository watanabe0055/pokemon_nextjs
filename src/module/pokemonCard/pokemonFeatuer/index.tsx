import { PokemonInfoText } from '@/atom/pokemonInfoText'
import { POKEMON_INFO_HEADER } from '@/constant/pokemonInfo'
import styles from './index.module.scss'

export const PokemonFeatuer = () => {
  return (
    <>
      <div className={styles.featuer_content}>
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.CHARACTERISTIC}
          text="ねずみポケモン"
        />
        <PokemonInfoText features={POKEMON_INFO_HEADER.TYPE} text="電気" />
        <PokemonInfoText features={POKEMON_INFO_HEADER.HIGHT} text="0.4m" />
        <PokemonInfoText features={POKEMON_INFO_HEADER.WEIGHT} text="6.0kg" />
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.CHARACTERISTIC}
          text="せいでんき"
        />
      </div>
    </>
  )
}

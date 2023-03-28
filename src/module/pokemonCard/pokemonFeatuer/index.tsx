import { PokemonInfoText } from '@/atom/pokemonInfoText'
import { POKEMON_INFO_HEADER } from '@/constant/pokemonInfo'
import styles from './index.module.scss'

type Props = {
  stats: string
  height: number
  weight: number
  id: string
  types: string
  abilities: string
  species: string
}

export const PokemonFeatuer = (props: Props) => {
  const { stats, height, weight, id, types, abilities, species } = props
  console.log(props)

  return (
    <>
      <div className={styles.featuer_content}>
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.CHARACTERISTIC}
          text="ねずみポケモン"
        />
        <PokemonInfoText features={POKEMON_INFO_HEADER.TYPE} text="電気" />
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.HIGHT}
          text={`${getDividedNumber(height)}m`}
        />
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.WEIGHT}
          text={`${getDividedNumber(weight)}kg`}
        />
        <PokemonInfoText
          features={POKEMON_INFO_HEADER.CHARACTERISTIC}
          text="せいでんき"
        />
      </div>
    </>
  )
}

/** 体重と身長を10で割った値を返却する関数
 * @param divid 体重or身長
 */
const getDividedNumber = (divid: number): number => {
  return divid / 10
}

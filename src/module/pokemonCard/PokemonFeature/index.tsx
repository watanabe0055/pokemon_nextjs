import { PokemonInfoText } from '@/atom/pokemonInfoText'
import { POKEMON_INFO_HEADER } from '@/constant/pokemonInfo'
import {
  getDividedNumber,
  getPokemonTypeNames,
} from '@/utils/fetchPokemon/convertPokemonDetail'
import { translateTypeToJapanese } from '@/utils/translateTypeToJapanese'
import type { PokemonAbility, PokemonType } from '@/type/pokemonDetail'
import styles from './index.module.scss'

/** 特性コンポーネントの用 */
type Props = {
  japaneseGeums?: string
  height: number
  weight: number
  types: PokemonType[]
  abilities: PokemonAbility[]
}

/**
 * ポケモンの特性に関するコンポーネント
 * @param props
 */
export const PokemonFeature = (props: Props) => {
  const { japaneseGeums, height, weight, types, abilities } = props

  const typeList = getPokemonTypeNames(types)
  // typeを日本語に変換する
  const japanesePokemonTypes = translateTypeToJapanese(typeList)

  return (
    <>
      <div className={styles.feature_content}>
        {japaneseGeums ? (
          <PokemonInfoText
            features={POKEMON_INFO_HEADER.CHARACTERISTIC}
            text={japaneseGeums}
          />
        ) : (
          <></>
        )}

        <PokemonInfoText
          features={POKEMON_INFO_HEADER.TYPE}
          text={`${japanesePokemonTypes}`}
        />
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
          text={`${abilities}`}
        />
      </div>
    </>
  )
}

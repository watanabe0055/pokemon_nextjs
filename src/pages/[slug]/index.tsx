import axios from 'axios'
import { PokemonImage } from '@/atom/pokemonImage'
import { PokemonStatus } from '@/module/pokemonCard/pokemonStatus'
import { convertPokemonDetail } from '@/utils/fetchPokemon/convertPokemonDetail'
import { replaceLeadingZeros } from '@/utils/fetchPokemon/replaceNumber'
import { PokemonFeature } from '@/module/pokemonCard/PokemonFeature'
import type { ResponsePokemonDataList } from '@/type/pokemonDataList'
import type { PokemonResponse } from '@/type/pokemonDetail'
import type { PokemonSpecies } from '@/type/pokemonSpacies'
import styles from './index.module.scss'
import { BASEURL } from '../../constant/api'

export default function DisplayPokemonInfo(props: {
  pokemonImagePath: string
  pokemonSpeciesDetail: PokemonSpecies
  pokemonDetail: PokemonResponse
  abilityList: string[]
}) {
  const { pokemonImagePath, pokemonSpeciesDetail, pokemonDetail, abilityList } =
    props

  const { stats, height, weight, types } = pokemonDetail

  const [firstPokemonDetail] = convertPokemonDetail(pokemonSpeciesDetail)
  const { japaneseName, japaneseGeums } = firstPokemonDetail

  return (
    <>
      <div className={styles.content}>
        <div className={styles.child}>
          <p className={styles.pokemon_name}>{japaneseName}</p>
          <div className={styles.image}>
            <PokemonImage src={pokemonImagePath} name={japaneseName} />
          </div>
          <PokemonFeature
            japaneseGeums={japaneseGeums}
            height={height}
            weight={weight}
            types={types}
            abilityList={abilityList}
          />
          <PokemonStatus stats={stats} />
        </div>
      </div>
    </>
  )
}

/**
 * ポケモン一覧APIのフェッチ関数（getServerSide)
 */
export async function getServerSideProps(context: { query: { slug: string } }) {
  // urlからポケモンidを取得
  const { slug } = context.query
  // ポケモンIDの先頭に0があった際に置換する
  const pokemonDetailId = replaceLeadingZeros(slug)

  // ポケモンの一覧を取得
  const pokemonImagePath = await axios
    .get(`${BASEURL.NOMAL}pokemon/${pokemonDetailId}`)
    .then((response: ResponsePokemonDataList) => {
      const imagePath: string =
        response.data.sprites.other['official-artwork'].front_default

      return imagePath
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  // ポケモンの特徴データ取得
  const pokemonSpeciesDetail = await axios
    .get(`${BASEURL.SPECIES}/${pokemonDetailId}`)
    .then((response) => {
      const pokemonData = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  // ポケモンの詳細情報を取得
  const pokemonDetail = await axios
    .get(`${BASEURL.POKEMON}/${pokemonDetailId}`)
    .then((response) => {
      const pokemonData = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })
  // ポケモンの特性を日本語で取得する
  const abilityList = await Promise.all(
    // ability/idにしか日本語がないのでpokemonDetailから取得先を取得する
    pokemonDetail.abilities.map(async (ability: any) => {
      const url = ability.ability.url

      // 日本語の特性名を配列で取得する
      const pokemonAbilityList = await axios
        .get(url)
        .then((response) => {
          const pokemonAbilityData = response.data.names

          const japaneseAbilityList = pokemonAbilityData
            .map((ability: any) => {
              if (ability.language.name === 'ja') {
                return ability.name
              }

              return undefined
            })
            // 日本語以外はundefinedの配列になっているので、undefinedの取り除く
            .filter((abilityName: string) => abilityName !== undefined)
            .join('、')

          return japaneseAbilityList
        })
        .catch((error) => {
          console.log(error)

          return undefined
        })

      return pokemonAbilityList
    })
  )

  return {
    props: {
      pokemonImagePath,
      pokemonSpeciesDetail,
      pokemonDetail,
      abilityList,
    },
  }
}

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
}) {
  const { pokemonImagePath, pokemonSpeciesDetail, pokemonDetail } = props

  const { stats, height, weight, id, types, abilities, species } = pokemonDetail
  const japaneseName = convertPokemonDetail(pokemonSpeciesDetail)

  return (
    <>
      <p>{japaneseName}</p>
      <div className={styles.image}>
        <PokemonImage src={pokemonImagePath} name={japaneseName} />
      </div>
      <PokemonFeature
        height={height}
        weight={weight}
        types={types}
        abilities={abilities}
      />
      <PokemonStatus stats={stats} />
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

  return {
    props: { pokemonImagePath, pokemonSpeciesDetail, pokemonDetail },
  }
}

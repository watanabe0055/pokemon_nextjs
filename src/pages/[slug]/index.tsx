import axios from 'axios'
import { PokemonFeatuer } from '@/module/pokemonCard/pokemonFeatuer'
import { PokemonStatus } from '@/module/pokemonCard/pokemonStatus'
import { convertPokemonDetail } from '@/utils/fetchPokemon/convertPokemonDetail'
import { repalceLeadingZeros } from '@/utils/fetchPokemon/replaceNumber'
import type { PokemonResponse } from '@/type/pokemonDetail'
import type { PokemonSpecies } from '@/type/pokemonSpacies'
import { BASEURL } from '../../constant/api'

export default function DisplayPokemonInfo(props: {
  pokemonSpeciesDetail: PokemonSpecies
  pokemonDetail: PokemonResponse
}) {
  const { pokemonSpeciesDetail, pokemonDetail } = props

  const { stats } = pokemonDetail
  const japaneseName = convertPokemonDetail(pokemonSpeciesDetail)

  return (
    <>
      <div>{japaneseName}</div>
      <PokemonFeatuer />
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
  const pokemonDetailId = repalceLeadingZeros(slug)
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
    props: { pokemonSpeciesDetail, pokemonDetail },
  }
}

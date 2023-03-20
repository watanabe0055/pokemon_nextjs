import axios from 'axios'
import { convertPokemonDetail } from '@/utils/fetchPokemon/convertPokemonDetail'
import { repalceLeadingZeros } from '@/utils/fetchPokemon/replaceNumber'
import type { PokemonSpecies } from '@/type/pokemonSpacies'
import { BASEURL } from '../constant/api'

export default function DisplayPokemonInfo(props: {
  pokemonData: PokemonSpecies
}) {
  const { pokemonData } = props
  convertPokemonDetail(pokemonData)

  return (
    <>
      <div>pokemonDetailId</div>
    </>
  )
}

/**
 * @method ポケモン一覧APIのフェッチ関数（getServerSide)
 */
export async function getServerSideProps(context: { query: { slug: string } }) {
  // urlからポケモンidを取得
  const { slug } = context.query
  // ポケモンIDの先頭に0があった際に置換する
  const pokemonDetailId = repalceLeadingZeros(slug)
  // ポケモンの一覧を取得
  const pokemonData = await axios
    .get(`${BASEURL.SPECIES}/${pokemonDetailId}`)
    .then((response: PokemonSpecies) => {
      const pokemonData = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  return {
    props: { pokemonData },
  }
}

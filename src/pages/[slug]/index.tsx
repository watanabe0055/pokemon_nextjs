import { useRouter } from 'next/router'
import axios from 'axios'
import { repalceLeadingZeros } from '@/utils/fetchPokemon/replaceNumber'
import type {
  ResponsePokemonDataList,
  PokemonDataList,
} from '@/type/pokemonDataList'
import { BASEURL } from '../constant/api'

export default function DisplayPokemonInfo() {
  const router = useRouter()

  // urlからポケモンidを取得
  const pokemonDetailId = repalceLeadingZeros(router.query.slug)

  return (
    <>
      <div>{pokemonDetailId}</div>
    </>
  )
}

/**
 * @method ポケモン一覧APIのフェッチ関数（getServerSide)
 */
export async function getServerSideProps() {
  // ポケモンの一覧を取得
  const pokemonDetail = await axios
    .get(`${BASEURL}pokemon`)
    .then((response: ResponsePokemonDataList) => {
      const pokemonData: PokemonDataList = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  return {
    props: { pokemonDetail },
  }
}

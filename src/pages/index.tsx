import axios from 'axios'
import { BaseUrl } from '@/utils/base'
import type {
  PokemonDataList,
  ResponsePokemonDataList,
} from './type/pokemonDataList'

export default function pokemonIndex(props: {
  pokemonDataList: PokemonDataList
}) {
  const { pokemonDataList } = props

  return (
    <>
      <div>aaaa</div>
    </>
  )
}
export async function getServerSideProps() {
  const pokemonDataList = await axios
    .get(BaseUrl + 'pokemon')
    .then((response: ResponsePokemonDataList) => {
      const pokemonData: PokemonDataList = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  return {
    props: { pokemonDataList },
  }
}

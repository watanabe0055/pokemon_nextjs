import type { Key } from 'react'
import axios from 'axios'
import { PokemonCord } from '@/module/pokemonCard'
import styles from '@/pages/index.module.scss'
import { BaseUrl } from '@/utils/base'
import type {
  PokemonDataList,
  ResponsePokemonDataList,
} from './type/pokemonDataList'

export default function pokemonIndex(props: {
  pokemonDataList: PokemonDataList
}) {
  const { pokemonDataList } = props
  const results = pokemonDataList.results

  return (
    <>
      <div className={styles.grid_item}>
        <div className={styles.container}>
          <div className={styles.grid_container}>
            {results.map(
              (pokemon: { name: string }, index: Key | null | undefined) => (
                <div className={styles.test} key={index}>
                  <PokemonCord name={pokemon.name} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const pokemonDataList = await axios
    .get(`${BaseUrl}pokemon`)
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

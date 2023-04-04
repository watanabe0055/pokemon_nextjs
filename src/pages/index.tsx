import Link from 'next/link'
import type { Key } from 'react'
import axios from 'axios'
import { BASEURL } from '@/constant/api'
import { PokemonCard } from '@/module/pokemonCard'
import styles from '@/pages/index.module.scss'
import { getJapanesePokemonName } from '@/utils/fetchPokemon/convertPokemonDetail'
import type {
  PokemonDataList,
  ResponsePokemonDataList,
} from '../type/pokemonDataList'

/**
 * @component ポケモン一覧画面
 */
export default function pokemonIndex(props: {
  pokemonDataList: PokemonDataList
  japanesePokemonName: string[]
}) {
  const { pokemonDataList, japanesePokemonName } = props
  const results = pokemonDataList.results

  return (
    <>
      <div className={styles.grid_item}>
        <div className={styles.container}>
          <div className={styles.grid_container}>
            {results.map(
              (pokemon: { name: string; url: string }, index: number) => (
                <Link key={index} href={`/${index}`}>
                  <PokemonCard
                    name={japanesePokemonName[index]}
                    url={pokemon.url}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * @method ポケモン一覧APIのフェッチ関数（getServerSide)
 */
export async function getServerSideProps() {
  // ポケモンの一覧を取得
  const pokemonDataList = await axios
    .get(`${BASEURL.NOMAL}pokemon`)
    .then((response: ResponsePokemonDataList) => {
      const pokemonData: PokemonDataList = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })
  const japanesePokemonName = []

  for (const pokemon of pokemonDataList.results) {
    const fetchPokemonSpecies = await axios
      .get(`${BASEURL.SPECIES}/${pokemon.name}`)
      .then((response) => {
        const pokemonData = response.data.names
        // 日本語のポケモン名を取得
        const japaneseName = getJapanesePokemonName(pokemonData)

        return japaneseName
      })
      .catch((error) => {
        console.log(error)

        return undefined
      })

    japanesePokemonName.push(fetchPokemonSpecies)
  }

  return {
    props: { pokemonDataList, japanesePokemonName },
  }
}

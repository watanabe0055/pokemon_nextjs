import Link from 'next/link'
import type { Key } from 'react'
import axios from 'axios'
import { PokemonCard } from '@/module/pokemonCard'
import { BASEURL } from '@/pages/constant/api'
import styles from '@/pages/index.module.scss'
import type {
  PokemonDataList,
  ResponsePokemonDataList,
} from '../type/pokemonDataList'

/**
 * @component ポケモン一覧画面
 */
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
              (pokemon: { name: string; url: string }, index: Key) => (
                <Link key={index} href={`/${index}`}>
                  <PokemonCard name={pokemon.name} url={pokemon.url} />
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

  return {
    props: { pokemonDataList },
  }
}

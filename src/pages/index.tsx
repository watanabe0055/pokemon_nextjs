import Link from 'next/link'
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
      <div className={styles.main_content}>
        <div className={styles.grid_item}>
          <div className={styles.container}>
            <div className={styles.grid_container}>
              {results.map(
                (pokemon: { name: string; url: string }, index: number) => (
                  <Link
                    key={index}
                    href={`/${index + 1}`}
                    className={styles.link}
                  >
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
    .get(`${BASEURL.NOMAL}pokemon?limit=304`)
    .then((response: ResponsePokemonDataList) => {
      const pokemonData: PokemonDataList = response.data

      return pokemonData
    })
    .catch((error) => {
      console.log(error)

      return undefined
    })

  // pokemonDataList?.results が undefined の場合は空の配列 [] を代わりに渡す
  const japanesePokemonName = (
    await Promise.all(
      pokemonDataList?.results.map(async (pokemon) => {
        try {
          const response = await axios.get(`${BASEURL.SPECIES}/${pokemon.name}`)
          const pokemonData = response.data.names
          const japaneseName = getJapanesePokemonName(pokemonData)

          return japaneseName
        } catch (error) {
          console.log(error)

          return undefined
        }
      }) ?? []
    )
  ).filter((name) => name !== undefined)

  return {
    props: { pokemonDataList, japanesePokemonName },
  }
}

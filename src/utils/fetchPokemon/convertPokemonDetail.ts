import type { PokemonNames, PokemonSpecies } from '@/type/pokemonSpacies'

/**
 * @module ポケモンスペシャルオブジェクトから必要な要素のみを取得する
 * @param pokemonData speciesのオブジェクト
 */
export const convertPokemonDetail = (pokemonData: PokemonSpecies) => {
  const { names } = pokemonData
  // ポケモンの日本語名
  const japaneseName = getJapanesePokemonName(names)

  return japaneseName
}

/**
 * namesから日本語名のポケモン名を取得する関数
 * @param pokemonNames namesオブジェクト
 */
const getJapanesePokemonName = (
  pokemonNames: PokemonNames[]
): string | undefined => {
  const japaneseName: PokemonNames | undefined = pokemonNames.find(
    (name: PokemonNames) => name.language.name === 'ja'
  )

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return japaneseName ? japaneseName.name : undefined
}

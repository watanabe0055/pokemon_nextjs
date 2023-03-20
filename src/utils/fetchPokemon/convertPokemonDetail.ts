import type { PokemonNames, PokemonSpecies } from '@/type/pokemonSpacies'

/**
 * @module ポケモンスペシャルオブジェクトから必要な要素のみを取得する
 * @param pokemonData speciesのオブジェクト
 */
export const convertPokemonDetail = (pokemonData: PokemonSpecies) => {
  const { names } = pokemonData

  const pokemonName = convetName(names)
}

const convetName = (names: PokemonNames) => {
  const japaneseName: string = names.find((name) => name.language.name === 'ja')

  return japaneseName ? japaneseName.name : undefined
}

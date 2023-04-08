import type { PokemonType } from '@/type/pokemonDetail'
import type {
  Genus,
  PokemonSpeciesName,
  PokemonSpecies,
} from '@/type/pokemonSpacies'

/**
 * @module ポケモンスペシャルオブジェクトから必要な要素のみを取得する
 * @param pokemonData speciesのオブジェクト
 */
export const convertPokemonDetail = (pokemonData: PokemonSpecies) => {
  const { names, genera } = pokemonData
  // ポケモンの日本語名
  const japaneseName = getJapanesePokemonName(names)
  const japaneseGeums = getJapanesePokemonGenus(genera)

  return [{ japaneseName, japaneseGeums }]
}

/**
 * namesから日本語名のポケモン名を取得する関数
 * @param pokemonNames namesオブジェクト
 */
export const getJapanesePokemonName = (
  pokemonNames: PokemonSpeciesName[]
): string | undefined => {
  const japaneseName: PokemonSpeciesName | undefined = pokemonNames.find(
    (name: PokemonSpeciesName) => name.language.name === 'ja'
  )

  return japaneseName?.name
}

/**
 * genusから日本語名の生物種を取得する関数
 * @param pokemonGenus genusオブジェクト
 */
export const getJapanesePokemonGenus = (
  pokemonGenus: Genus[]
): string | undefined => {
  const japaneseGenus: Genus | undefined = pokemonGenus.find(
    (name: Genus) => name.language.name === 'ja'
  )

  return japaneseGenus?.genus
}

/** 体重と身長を10で割った値を返却する関数
 * @param divid 体重or身長
 */
export const getDividedNumber = (divid: number): number => {
  return divid / 10
}

/**
 * タイプオブジェクトからnameだけを取得して、配列または文字列で返す
 * @param typeList タイプのオブジェクト
 */
export const getPokemonTypeNames = (typeList: PokemonType[]) => {
  const types = typeList.map((type: PokemonType) => {
    return type.type.name
  })

  return types
}

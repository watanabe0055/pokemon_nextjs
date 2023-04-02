import type { PokemonAbility, PokemonType } from '@/type/pokemonDetail'
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

/**
 * タイプオブジェクトからnameだけを取得して、配列または文字列で返す
 * @param typeList タイプのオブジェクト
 */
export const getPokemonAbilitiesNames = (
  abilities: PokemonAbility[]
): string | string[] => {
  const abilityList = abilities.map((ability: PokemonAbility) => {
    return ability.ability.name
  })
  // typeが２つ以上の時は「、」で区切った配列を返す
  const abilityListJoin =
    abilityList.length >= 2 ? abilityList.join('、') : abilityList

  return abilityListJoin
}

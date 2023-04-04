import { POKEMON_TYPE } from '@/constant/pokemonType'

/** typeを日本語名にコンバート */
export const translateTypeToJapanese = (types: string[]) => {
  const typeList = types.map((type) => {
    let japaneseType: string | undefined

    if (POKEMON_TYPE[type]) {
      japaneseType = POKEMON_TYPE[type]
    }

    return japaneseType
  })

  // typeが２つ以上の時は「、」で区切った配列を返す
  const typesJoin = typeList.length >= 2 ? typeList.join('、') : typeList

  return typesJoin
}

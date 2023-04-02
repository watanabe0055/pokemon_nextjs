/**
 * @type ポケモン一覧APIのレスポンス
 */
export type PokemonDataList = {
  count: number
  next?: string
  previous?: string
  results: PokemonResults[]
}

/**
 * @type ポケモン一覧APIのリザルトの中身
 */
type PokemonResults = {
  name: string
  url: string
}

/**
 * @type ポケモン一覧APIのリザルトの取得直後
 */
export type ResponsePokemonDataList = {
  data: PokemonDataList
}

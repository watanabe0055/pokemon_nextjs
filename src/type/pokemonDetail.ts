/** ポケモンAPIのレスポンス */
type PokemonDetails = {
  name: string
  id: number
  height: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }>
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
}

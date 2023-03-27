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

/** ポケモン詳細APIのレスポンス（進化） */
export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

/** ポケモン詳細APIのレスポンス（タイプ） */
export type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

/** ポケモン詳細APIのレスポンス（ステータス） */
export type PokemonStat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

/** ポケモン詳細APIのレスポンス */
export type PokemonMove = {
  move: {
    name: string
    url: string
  }
  version_group_details: Array<{
    level_learned_at: number
    move_learn_method: {
      name: string
      url: string
    }
    version_group: {
      name: string
      url: string
    }
  }>
}

/** ポケモン詳細APIのレスポンス */
export type PokemonResponse = {
  abilities: PokemonAbility[]
  base_experience: number
  height: number
  id: number
  moves: PokemonMove[]
  name: string
  sprites: {
    front_default: string
    front_shiny: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}

export type PokemonListResponse = {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

type PokemonListItem = {
  name: string
  url: string
}

export type PokemonNameProps = { name: string }

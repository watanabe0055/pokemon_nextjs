export type GrowthRate = {
  name: string
  url: string
}

export type PokedexNumber = {
  entry_number: number
  pokedex: {
    name: string
    url: string
  }
}

export type EggGroup = {
  name: string
  url: string
}

export type Color = {
  name: string
  url: string
}

export type Shape = {
  name: string
  url: string
}

export type Language = {
  name: string
  url: string
}

export type EvolutionChain = {
  url: string
}

export type PokemonSpeciesName = {
  name: string
  language: Language
}

export type FlavorTextEntry = {
  flavor_text: string
  language: Language
  version: {
    name: string
    url: string
  }
}

export type FormDescription = {
  description: string
  language: Language
}

export type Genus = {
  genus: string
  language: Language
}

export type PokemonVariety = {
  is_default: boolean
  pokemon: {
    name: string
    url: string
  }
}

export type PokemonSpecies = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: GrowthRate
  pokedex_numbers: PokedexNumber[]
  egg_groups: EggGroup[]
  color: Color
  shape: Shape
  evolves_from_species: {
    name: string
    url: string
  } | null
  evolution_chain: EvolutionChain
  habitat: {
    name: string
    url: string
  } | null
  generation: {
    name: string
    url: string
  }
  names: PokemonSpeciesName[]
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: FormDescription[]
  genera: Genus[]
  varieties: PokemonVariety[]
}

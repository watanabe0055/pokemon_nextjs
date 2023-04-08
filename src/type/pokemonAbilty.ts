export type Effect = {
  effect: string
  language: {
    name: string
    url: string
  }
}

export type EffectEntry = {
  effect: string
  language: {
    name: string
    url: string
  }
  short_effect: string
}

export type Language = {
  name: string
  url: string
}

export type VersionGroup = {
  name: string
  url: string
}

type AbilityName = {
  name: string
  language: {
    name: string
    url: string
  }
}

export type Ability = {
  id: number
  name: string
  is_main_series: boolean
  generation: {
    name: string
    url: string
  }
  names: Array<{
    name: string
    language: Language
  }>
  effect_entries: EffectEntry[]
  effect_changes: Array<{
    effect_entries: EffectEntry[]
    version_group: VersionGroup
  }>
  flavor_text_entries: Array<{
    flavor_text: string
    language: Language
    version_group: VersionGroup
  }>
  pokemon: Array<{
    is_hidden: boolean
    pokemon: {
      name: string
      url: string
    }
    slot: number
  }>
}

export type ResponseAbilityName = {
  ability: {
    name: string
    language: {
      name: string
      url: string
    }
  }
}

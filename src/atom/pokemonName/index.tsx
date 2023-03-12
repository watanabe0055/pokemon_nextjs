import React from 'react'
import styles from '@/atom/pokemonName/index.module.scss'
//import { PokemonNameProps } from '@/type/PokemonCard'

export const PokemonName = (props) => {
  const { name } = props

  return (
    <div className={styles.name_content}>
      <p className={styles.name_font}>{name}</p>
    </div>
  )
}

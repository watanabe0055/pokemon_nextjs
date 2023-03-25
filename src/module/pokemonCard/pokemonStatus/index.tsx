import styles from './index.module.scss'

export const PokemonStatus = () => {
  return (
    <>
      <div className={styles.status_content}>
        <p>HP</p>
        <p>こうげき</p>
        <p>ぼうぎょ</p>
        <p>とくこう</p>
        <p>とくぼう</p>
        <p>すばやさ</p>
      </div>
    </>
  )
}

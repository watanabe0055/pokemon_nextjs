import styles from './index.module.scss'

/**
 * @type ステータスプロップスの型定義
 */
type Props = {
  hp: number
  att: number
  def: number
  spa: number
  spd: number
  sp: number
}

/** ポケモン詳細画面のステータスパーツ */
export const PokemonStatus = (status: Props) => {
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

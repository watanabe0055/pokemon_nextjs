import styles from './index.module.scss'

/** ステータスの値を四捨五入する
 * @params ステータスリスト
 */
const convertStatus = (status: Props) => {
  console.log(status)

  return status
}

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
  convertStatus(status)

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

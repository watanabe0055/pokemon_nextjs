import styles from './index.module.scss'

type InfoProps = {
  features: string
  text: string
}
/**
 * ポケモンの詳細情報のパーツ
 * @param features カテゴリ名
 * @param text カテゴリのテキスト
 */
export const PokemonInfoText = (props: InfoProps) => {
  const { features, text } = props

  return (
    <>
      <div className={styles.content}>
        <p className={styles.features_text}>{features}:</p>
        <p className={styles.text}>{text}</p>
      </div>
    </>
  )
}

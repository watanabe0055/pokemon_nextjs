import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import styles from './index.module.scss'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

/**
 * @type ステータスプロップスの型定義
 */
type Props = {
  status: {
    hp: number
    att: number
    def: number
    spa: number
    spd: number
    sp: number
  }
}

/** ポケモン詳細画面のステータスパーツ */
export const PokemonStatus = (status: Props) => {
  // ステータス
  const { hp, att, def, spa, spd, sp } = status.status

  // レーダーチャートに使用しているデータセット
  const data = {
    labels: ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ'],
    datasets: [
      {
        label: 'ステータス',
        data: [hp, att, def, spa, spd, sp],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      <div className={styles.status_content}>
        <Radar data={data} />
      </div>
    </>
  )
}

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
type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

type PokemonStats = {
  stats: Stat[]
}
/** ポケモン詳細画面のステータスパーツ */
export const PokemonStatus = (statsList: PokemonStats) => {
  const status = statsList.stats.map((stats) => {
    return stats.base_stat
  })

  const options = {
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 120,
      },
    },
  }

  // レーダーチャートに使用しているデータセット
  const data = {
    type: 'radar',
    labels: ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ'],
    datasets: [
      {
        label: 'ステータス',
        data: [
          status[0],
          status[1],
          status[2],
          status[3],
          status[4],
          status[5],
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
    // TODO: オプションが効いてない
    options,
  }

  return (
    <>
      <div className={styles.status_content}>
        <Radar data={data} />
      </div>
    </>
  )
}

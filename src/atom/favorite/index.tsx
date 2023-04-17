import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

export const FavoriteButton = () => {
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(false)
  const [isFavoriteCount, setIsFavoriteCount] = useState(0)

  const pokemonId = router.query.slug

  // お気に入りボタンの切り替えイベント
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    setIsFavoriteCount(isFavoriteCount + 1)
  }

  useEffect(() => {
    if (isFavorite && isFavoriteCount >= 1) {
      localStorage.setItem('form', JSON.stringify(pokemonId))
    }
    if (!isFavorite && isFavoriteCount >= 1) {
      localStorage.removeItem('form')
    }
  }, [isFavorite, pokemonId])

  return (
    <>
      <div className={styles.likes}>
        <div className={styles.icon}>
          <button
            className={
              isFavorite
                ? `${styles.favorite} ${styles.active}`
                : styles.favorite
            }
            onClick={toggleFavorite}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                className={isFavorite ? styles.active : styles.nonActive}
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

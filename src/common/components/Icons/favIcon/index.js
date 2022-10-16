import axios from 'axios'
import { useState } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import styles from './styles.module.css'

export function FavIcon({ isFavoriteInit, rid }) {
  const [isFavorite, setIsFavorite] = useState(isFavoriteInit)

  const changeIsFavorite = async () => {
    await axios.put(`/api/favorites/${rid}`)
    setIsFavorite(!isFavorite)
  }
  return isFavorite ? (
    <HeartFill
      data-cy="favIcon"
      size={16}
      className={styles.heart}
      onClick={changeIsFavorite}
    />
  ) : (
    <Heart
      data-cy="favIcon"
      size={16}
      className={styles.heart}
      onClick={changeIsFavorite}
    />
  )
}

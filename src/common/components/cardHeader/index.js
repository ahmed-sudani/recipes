import FavIcon from '../favIcon'
import styles from './styles.module.css'

export default function CarHeader({ name, country, isFavorite, rid }) {
  return (
    <div className={styles.cardHead}>
      <h3 className={styles.name}> {name}</h3>
      <div className={styles.country}> {country} </div>
      <FavIcon isFavoriteInit={isFavorite} rid={rid} />
    </div>
  )
}

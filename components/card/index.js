import Image from 'next/image'
import { Clock, HeartFill } from 'react-bootstrap-icons'
import styles from './styles.module.css'
export default function Card(props) {
  return (
    <div className={styles.card} data-testid="card">
      <Image
        src={`https://res.cloudinary.com/demo/image/fetch/${props.image}`}
        height={150}
        width={300}
        alt={props.name}
        objectFit="cover"
      />
      <span className={styles.time}>
        <Clock /> {`${props.time} min`}
      </span>
      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <h3 className={styles.name}> {props.name}</h3>
          <div className={styles.country}> {props.country} </div>
          <HeartFill size={16} className={styles.heart} />
        </div>
        <div className={styles.description}>
          {props.ingredients &&
            props.ingredients.map((item, index) => (
              <div key={index}>{item} </div>
            ))}
        </div>
      </div>
    </div>
  )
}

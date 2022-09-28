import Image from 'next/image'
import { Clock, HeartFill } from 'react-bootstrap-icons'
import styles from './styles.module.css'
export default function Card(props) {
  return (
    <div className={styles.card}>
      <Image src={props.img} height={150} width={300} alt={props.name} />
      <span className={styles.time}>
        <Clock /> {props.time}
      </span>
      <div className={styles.cardBody}>
        <div className={styles.cardHead}>
          <h3 className={styles.name}> {props.name}</h3>
          <div className={styles.country}> {props.country} </div>
          <HeartFill size={16} className={styles.heart} />
        </div>
        <div className={styles.description}>
          <div>{props.description1} </div>
          <div>{props.description2} </div>
          <div>{props.description3} </div>
        </div>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import CarHeader from '../cardHeader'
import ImageWithTime from '../ImageWithTime'
import styles from './styles.module.css'
export default function Card(props) {
  const router = useRouter()
  return (
    <div className={styles.card} data-testid="card">
      <ImageWithTime
        width={300}
        height={150}
        image={props.image}
        alt={props.name}
        time={props.time}
        onClickOnImage={() => router.push(`/recipes/${props._id}`)}
      />

      <div className={styles.cardBody}>
        <CarHeader
          isFavorite={props.favorite}
          name={props.name}
          country={props.country}
          rid={props._id}
        />

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

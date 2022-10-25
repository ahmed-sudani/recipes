import { useRouter } from 'next/router'
import { ImageWithTime } from '../../../components'
import { RecipeCarHeader } from './recipeCardHeader'
import styles from './styles.module.css'

export function Recipe(props) {
  const router = useRouter()
  return (
    <div className={styles.card} data-testid="recipe">
      <ImageWithTime
        width={300}
        height={150}
        image={props.image}
        alt={props.name}
        time={props.time}
        onClickOnImage={() => router.push(`/recipes/${props._id}`)}
      />

      <div className={styles.cardBody}>
        <RecipeCarHeader
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
export * from './recipeCardHeader'

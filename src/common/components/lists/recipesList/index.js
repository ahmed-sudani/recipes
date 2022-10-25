import { Recipe } from '../../cards'
import styles from './styles.module.css'
export function RecipesList(props) {
  let cardsComp = props.recipes.map((item) => (
    <Recipe key={item._id} {...item} />
  ))
  return (
    <div className={styles.container} data-testid="container">
      {cardsComp}
    </div>
  )
}

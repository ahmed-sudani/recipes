import { IngredientsList } from '../../../components'
import styles from './styles.module.css'

export function FormIngredients({ ingredients, setIngredients }) {
  const removeIngredient = (e) => {
    setIngredients((prev) =>
      prev.filter((value) => value != e.target.innerText)
    )
  }

  return (
    <IngredientsList
      className={styles.list}
      ingredients={ingredients}
      onClickOnItem={removeIngredient}
    />
  )
}

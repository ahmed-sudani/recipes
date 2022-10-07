import IngredientsList from '../ingredientList'
import styles from './styles.module.css'

export default function FormIngredients({ ingredients, setIngredients }) {
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

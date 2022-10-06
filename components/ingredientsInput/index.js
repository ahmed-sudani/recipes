import { useRef } from 'react'
import { PlusSquare } from 'react-bootstrap-icons'
import styles from './styles.module.css'

export default function IngredientsInput({ ingredients, setIngredients }) {
  const ingredientsInputRef = useRef()

  const addIngredients = () => {
    if (ingredientsInputRef.current.value)
      setIngredients([...ingredients, ingredientsInputRef.current.value])
    ingredientsInputRef.current.value = ''
  }

  return (
    <div className={styles.inputForm}>
      <label>Ingredients</label>
      <div className={styles.ingredientsInput}>
        <input type="text" ref={ingredientsInputRef} />
        <button type="button" onClick={addIngredients}>
          <PlusSquare size={20} />
        </button>
      </div>
    </div>
  )
}

import { Ingredient } from '../../ingredient'

export function IngredientsList({ ingredients, onClickOnItem, className }) {
  const ingredientsListComp = ingredients.map((item, index) => (
    <Ingredient key={index} text={item} onClickOnItem={onClickOnItem} />
  ))

  return (
    <ul className={className} data-testid="container">
      {ingredientsListComp}
    </ul>
  )
}

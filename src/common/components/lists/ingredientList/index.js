export function IngredientsList({ ingredients, onClickOnItem, className }) {
  const ingredientsListComp = ingredients.map((item, index) => (
    <li onClick={onClickOnItem} key={index}>
      {item}
    </li>
  ))

  return (
    <ul className={className} data-testid="container">
      {ingredientsListComp}
    </ul>
  )
}

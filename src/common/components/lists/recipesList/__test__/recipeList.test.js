import { render, screen, within } from '@testing-library/react'
import { RecipesList } from '..'

const recipes = [
  {
    id: '1',
    name: 'chechen',
    time: '50:00',
    image: '/cster.png',
    country: 'italy',
    ingredients: [],
  },

  {
    id: '2',
    name: 'chechen',
    time: '50:00',
    image: '/cster.png',
    country: 'italy',
    ingredients: [],
  },
]

describe('Recipes list', () => {
  it('should render RecipeList component', () => {
    render(<RecipesList recipes={[]} />)
    const recipeListElement = screen.getByTestId('container')
    expect(recipeListElement).toMatchSnapshot()
  })
  it('should have 2 recipes in the list', () => {
    render(<RecipesList recipes={recipes} />)
    const recipeListElement = screen.getByTestId('container')
    const recipesList = within(recipeListElement).getAllByTestId('recipe')
    expect(recipesList.length).toEqual(2)
  })
})

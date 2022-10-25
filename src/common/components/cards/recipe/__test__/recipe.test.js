import { render, screen } from '@testing-library/react'
import { Recipe } from '..'

const recipe = {
  name: 'chechen',
  time: '50:00',
  image: '/cster.png',
  country: 'italy',
  ingredients: [],
}
describe('Recipe', () => {
  it('should render recipe component', () => {
    render(<Recipe {...recipe} />)
    const recipeElement = screen.getByTestId('recipe')
    expect(recipeElement).toMatchSnapshot()
  })
})

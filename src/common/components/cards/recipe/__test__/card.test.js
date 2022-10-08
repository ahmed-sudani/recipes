import { render, screen } from '@testing-library/react'
import { Recipe } from '..'

const card = {
  name: 'chechen',
  time: '50:00',
  image: '/cster.png',
  country: 'italy',
  ingredients: [],
}
describe('Card', () => {
  it('should render card component', () => {
    render(<Recipe {...card} />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toMatchSnapshot()
  })
})

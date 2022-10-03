import { render, screen } from '@testing-library/react'
import Card from '..'

const card = {
  name: 'chechen',
  time: '50:00',
  image: '/cster.png',
  country: 'italy',
  ingredients: [],
}
describe('Card', () => {
  it('should render card component', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toMatchSnapshot()
  })
})

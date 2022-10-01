import { render, screen } from '@testing-library/react'
import Card from '..'

const card = {
  name: 'chechen',
  time: '50:00',
  img: '/cster.png',
  country: 'italy',
}
describe('Card', () => {
  it('should render card component', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    expect(cardElement).toMatchSnapshot()
  })
})

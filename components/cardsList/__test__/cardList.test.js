import { render, screen, within } from '@testing-library/react'
import CardsList from '..'

const cards = [
  {
    id: '1',
    name: 'chechen',
    time: '50:00',
    img: '/cster.png',
    country: 'italy',
  },

  {
    id: '2',
    name: 'chechen',
    time: '50:00',
    img: '/cster.png',
    country: 'italy',
  },
]

describe('Cards list', () => {
  it('should render CardList component', () => {
    render(<CardsList cards={[]} />)
    const cardListElement = screen.getByTestId('container')
    expect(cardListElement).toBeDefined()
  })
  it('should have 2 cards in the list', () => {
    render(<CardsList cards={cards} />)
    const cardListElement = screen.getByTestId('container')
    const cardsList = within(cardListElement).getAllByTestId('card')
    expect(cards.length).toEqual(2)
  })
})

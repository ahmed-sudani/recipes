import { render, screen, within } from '@testing-library/react'
import CardsList from '..'

const cards = [
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

describe('Cards list', () => {
  it('should render CardList component', () => {
    render(<CardsList cards={[]} />)
    const cardListElement = screen.getByTestId('container')
    expect(cardListElement).toMatchSnapshot()
  })
  it('should have 2 cards in the list', () => {
    render(<CardsList cards={cards} />)
    const cardListElement = screen.getByTestId('container')
    const cardsList = within(cardListElement).getAllByTestId('card')
    expect(cardsList.length).toEqual(2)
  })
})

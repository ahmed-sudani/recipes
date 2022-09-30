import { render, screen, within } from '@testing-library/react'
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
    expect(cardElement).toBeDefined()
  })

  it('card name should match the passed text', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    const nameElement = within(cardElement).getByText(card.name)
    expect(nameElement).toBeDefined()
  })
  it('card time should match the passed text', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    const timeElement = within(cardElement).getByText(card.time)
    expect(timeElement).toBeDefined()
  })
  it('card country should match the passed text', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    const timeElement = within(cardElement).getByText(card.country)
    expect(timeElement).toBeDefined()
  })
  it('image element should be defined', () => {
    render(<Card {...card} />)
    const cardElement = screen.getByTestId('card')
    const imageElement = within(cardElement).getByAltText(card.name)
    expect(imageElement).toBeDefined()
  })
})

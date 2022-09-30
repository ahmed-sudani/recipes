import { render, screen, within } from '@testing-library/react'
import Button from '..'

describe('Button', () => {
  it('should render button component', () => {
    render(<Button text="test" />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeDefined()
  })
  it('should match the text passed to button', () => {
    render(<Button text="test" />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement.textContent).toMatch(/test/i)
  })
})

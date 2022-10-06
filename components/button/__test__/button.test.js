import { render, screen } from '@testing-library/react'
import Button from '..'

describe('Button', () => {
  it('should render button component', () => {
    render(<Button name="test" />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toMatchSnapshot()
  })
  it('should match the text passed to button', () => {
    render(<Button name="test" />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement.textContent).toMatch(/test/i)
  })
})

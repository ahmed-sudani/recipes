import { render, screen } from '@testing-library/react'
import { Footer } from '..'

describe('Footer', () => {
  it('should render Footer component', () => {
    render(<Footer />)
    const footerElement = screen.getByText(/all copy right reserved/i)
    expect(footerElement).toMatchSnapshot()
  })
})

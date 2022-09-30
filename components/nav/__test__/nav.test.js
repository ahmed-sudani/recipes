import { render, screen } from '@testing-library/react'
import Nav from '..'

describe('Nav', () => {
  it('should render nav component correctly', () => {
    render(<Nav />)
    const navElement = screen.getByTestId('header')
    expect(navElement).toMatchSnapshot()
  })
})

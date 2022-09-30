import { render, screen } from '@testing-library/react'
import Layout from '..'

describe('Layout', () => {
  it('should render layout component', () => {
    render(
      <span data-testid="layout">
        <Layout />
      </span>
    )
    const layoutElement = screen.getByTestId(/layout/i)
    expect(layoutElement).toMatchSnapshot()
  })
})

import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { Layout } from '..'

jest.mock('next-auth/react')

const MockedLayout = () => (
  <span data-testid="layout">
    <Layout />
  </span>
)

describe('Layout', () => {
  it('should renders correctly', () => {
    useSession.mockReturnValue({
      data: null,
    })
    render(<MockedLayout />)
    const layoutElement = screen.getByTestId('layout')
    expect(layoutElement).toMatchSnapshot()
  })
})

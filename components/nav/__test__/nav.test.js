import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import Nav from '..'

jest.mock('next-auth/react')

describe('Nav', () => {
  it('should render nav component correctly', () => {
    useSession.mockReturnValueOnce([false, false])
    render(<Nav />)
    const navElement = screen.getByTestId('header')
    expect(navElement).toMatchSnapshot()
  })
})

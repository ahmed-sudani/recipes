import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import LoginButton from '..'

jest.mock('next-auth/react')

describe('LoginButton', () => {
  it('should renders correctly when signed in', () => {
    useSession.mockReturnValue({
      data: {
        user: { email: 'a' },
      },
    })

    render(<LoginButton />)
    expect(screen.getByText('Sign out'))
  })
  it('should renders correctly when signed out', () => {
    useSession.mockReturnValue({ data: null })
    render(<LoginButton />)
    expect(screen.getByText('Sign in'))
  })
})

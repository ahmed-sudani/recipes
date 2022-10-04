import { render } from '@testing-library/react'
import SignIn from '../../../pages/auth/signin'
import VerifyRequest from '../../../pages/auth/verifyRequest'

describe('Auth', () => {
  it('signIn should render correctly', () => {
    const { container } = render(<SignIn />)
    expect(container).toMatchSnapshot()
  })
  it('verifyRequest should render correctly', () => {
    const { container } = render(<VerifyRequest />)
    expect(container).toMatchSnapshot()
  })
})

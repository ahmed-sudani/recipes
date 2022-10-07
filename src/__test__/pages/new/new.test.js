import { render } from '@testing-library/react'
import Create from '../../../pages/new'

describe('New page', () => {
  it('should render correctly', () => {
    const { container } = render(<Create />)
    expect(container).toMatchSnapshot()
  })
})

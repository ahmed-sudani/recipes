import { render } from '@testing-library/react'
import Developers from '../../../pages/developers'

describe('Developers', () => {
  it('should render correctly', () => {
    const { container } = render(<Developers />)
    expect(container).toMatchSnapshot()
  })
})

import { render } from '@testing-library/react'
import Favorites from '../../../pages/favorites'

describe('Favorites', () => {
  it('should render correctly', () => {
    const { container } = render(<Favorites />)
    expect(container).toMatchSnapshot()
  })
})

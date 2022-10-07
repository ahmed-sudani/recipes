import { render } from '@testing-library/react'
import Recipes from '../../../pages/recipes'

describe('Recipes', () => {
  it('should render correctly', () => {
    const { container } = render(<Recipes />)
    expect(container).toMatchSnapshot()
  })
})

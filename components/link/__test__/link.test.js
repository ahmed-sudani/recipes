import { render, screen, within } from '@testing-library/react'
import Link from '../index'

jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <div data-testid="link">{children}</div>
    },
  }
})

describe('Link', () => {
  it('should render correctly', async () => {
    render(<Link name={'test'} icon="Github" />)
    const linkElement = screen.getByTestId(/link/i)
    expect(linkElement).toMatchSnapshot()
  })
  it('name should match the text passed', async () => {
    render(<Link name={'test'} icon="Github" />)
    const linkElement = within(screen.getByTestId(/link/i)).getByText(/test/i)
    expect(linkElement).toBeDefined()
  })
})

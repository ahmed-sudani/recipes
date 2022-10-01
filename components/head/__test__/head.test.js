import { render, screen } from '@testing-library/react'
import Head from '..'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <div data-testid="head">{children}</div>
    },
  }
})

describe('Head', () => {
  it('should render correctly', async () => {
    render(<Head title={'test'} description="this is test" />)
    const headElement = screen.getByTestId(/head/i)
    expect(headElement).toMatchSnapshot()
  })
  it('title should match the text passed', async () => {
    render(<Head title={'test'} description="this is test" />)
    expect(document.title).toEqual('test')
  })
})

import { render, screen, waitFor, within } from '@testing-library/react'
import Head from '..'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>
    },
  }
})

describe('Head', () => {
  it('title should match the text passed', async () => {
    render(<Head title={'test'} description="this is test" />)
    expect(document.title).toEqual('test')
  })
})

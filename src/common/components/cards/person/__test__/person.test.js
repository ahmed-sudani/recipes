import { render, screen } from '@testing-library/react'
import { Person } from '..'

const person = {
  name: 'ahmed',
  img: '/ahmed.png',
  jobTitle: 'software developer',
  description: 'good software developer',
}
describe('Person', () => {
  it('should render person component correctly', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    expect(personElement).toMatchSnapshot()
  })
})

import { render, screen, within } from '@testing-library/react'
import Person from '..'

const person = {
  name: 'ahmed',
  img: '/ahmed.png',
  jobTitle: 'software developer',
  description: 'good software developer',
}
describe('Person', () => {
  it('should render person component', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    expect(personElement).toBeDefined()
  })
  it('name element should be defined', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    const nameElement = within(personElement).getByText(person.name)
    expect(nameElement).toBeDefined()
  })
  it('image element should be defined', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    const imageElement = within(personElement).getByAltText(person.name)
    expect(imageElement).toBeDefined()
  })
  it('jobTitle element should be defined', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    const jobTitleElement = within(personElement).getByText(person.jobTitle)
    expect(jobTitleElement).toBeDefined()
  })
  it('description element should be defined', () => {
    render(<Person {...person} />)
    const personElement = screen.getByTestId('person')
    const descriptionElement = within(personElement).getByText(
      person.description
    )
    expect(descriptionElement).toBeDefined()
  })
})

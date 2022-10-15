import { user1 } from '../fixtures/session.json'

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.login(user1)
  })

  afterEach(() => {
    cy.logout(user1)
  })

  it('should navigate to /recipes page', () => {
    cy.get('[data-cy~="recipes"]').click()
    cy.url().should('include', '/recipes')
  })

  it('should navigate to /developers page', () => {
    cy.get('[data-cy~="developers"]').click()
    cy.url().should('include', '/developers')
  })

  it('should navigate to /new page', () => {
    cy.get('[data-cy~="new"]').click()
    cy.url().should('include', '/new')
  })

  it('should navigate to /login if user not login and access /new page', () => {
    cy.logout()
    cy.get('[data-cy~="new"]').click()
    cy.url().should('include', '/auth/signin')
  })

  it('should navigate to /favorites page', () => {
    cy.get('[data-cy~="favorites"]').click()
    cy.url().should('include', '/favorites')
  })

  it('should navigate to /login if user not login and access /favorites page', () => {
    cy.logout()
    cy.get('[data-cy~="favorites"]').click()
    cy.url().should('include', '/auth/signin')
  })
})

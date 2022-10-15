import recipe from '../fixtures/recipe.json'
import { user1, user2 } from '../fixtures/session.json'
import '../support/e2e'

describe('Recipes', () => {
  beforeEach(async () => {
    await cy.dropCollection('recipes', { failSilently: true })
    cy.visit('/')
    cy.login(user1)
    cy.wait(2000)
    cy.get('[data-cy~="new"]').click()
    cy.get('input[name="Name"]').type(recipe.name)
    cy.get('input[name="Image Url"]').type(recipe.image)
    cy.get('#react-select-2-input').type(`${recipe.country}{enter}{enter}`)
    cy.get('input[name="Required Time"]').type('50')
    cy.get('input[name="Ingredient"]').type(`${recipe.ingredient}{enter}`)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
  })

  afterEach(() => {
    cy.logout()
  })

  it('should create new recipe', () => {
    cy.get('h3').contains('piazza')
  })

  it('should remove recipe', () => {
    cy.get('img[alt="piazza"]').click()
    cy.get('[data-cy~="delete"]').click()
    cy.url().should('include', '/recipes')
    cy.wait(2000)
    cy.get('[data-cy~="favIcon"]').should('not.exist')
  })

  it('should add recipe to favorite', () => {
    cy.logout()
    cy.login(user2)
    cy.wait(1000)
    cy.get('[data-cy~="favIcon"]').click()
    cy.get('[data-cy~="favorites"]').click()
    cy.wait(2000)
    cy.get('h3').contains('piazza')
  })

  it('should remove recipe from favorite', () => {
    cy.get('[data-cy~="favIcon"]').click()
    cy.get('[data-cy~="favorites"]').click()
    cy.wait(2000)
    cy.get('[data-cy~="favIcon"]').should('not.exist')
  })
})

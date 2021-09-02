import Home from '../selectors/home'

describe('Test for Simple SPA', () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('Home tab', () => {
    cy.get('.header a[href="#/"]').click()
    cy.get(Home.contentHeader).should('have.text', 'HELLO')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/#/`)
  })
  it('Stuff tab', () => {
    cy.get('.header a[href="#/stuff"]').click()
    cy.get(Home.contentHeader).should('have.text', 'STUFF')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/#/stuff`)
  })
  it('Contact tab', () => {
    cy.get('.header a[href="#/contact"]').click()
    cy.get(Home.contentHeader).should('have.text', 'GOT QUESTIONS?')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/#/contact`)
  })
})

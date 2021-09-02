describe('Test for Simple SPA', () => {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('Home tab', () => {
    cy.get('.header a[href="#/"]').click()
    cy.get('.content h2').should('have.text', 'HELLO')
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/#/`)
  })
  it.skip('Stuff tab', () => {
    
  })
  it.skip('Contact tab', () => {
    
  })
})

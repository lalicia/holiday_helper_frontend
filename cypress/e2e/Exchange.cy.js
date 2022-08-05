describe('exchange page',() => {
  it('test functionalty of exchange rates page', () => {

      cy.visit('http://localhost:3000/exchange')
      cy.get('#Amount').type('500')
      cy.get('#From').type('gbp')
      cy.get('#To').type('eru')
      cy.get('.get-rate-button').click()
      cy.get('#To').clear().type('EUR')
      cy.get('.get-rate-button').click()
      
  })
})
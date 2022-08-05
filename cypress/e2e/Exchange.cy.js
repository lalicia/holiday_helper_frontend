describe('exchange page',() => {
  it('test functionalty of exchange rates page', () => {

      cy.visit('http://localhost:3000/exchange')
      cy.get('#Amount').type('500')
      cy.wait(1000)
      cy.get('#From').type('gbp')
      cy.wait(1000)
      cy.get('#To').type('eru')
      cy.wait(1000)
      cy.get('.get-rate-button').click()
      cy.wait(1000)
      cy.get('#To').clear().type('EUR')
      cy.get('.get-rate-button').click()
      
  })
})
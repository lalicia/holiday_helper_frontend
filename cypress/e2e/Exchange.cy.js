describe('exchange page',() => {
  it('test functionalty of exchange rates page', () => {

      cy.viewport(375, 812)
      cy.visit('https://holiday-helper.netlify.app/exchange')
      cy.get('.page-title').contains('Exchange Rate Checker')
      cy.get('.amount-input').contains('Amount')
      cy.get('.rates-flex > .rates-input').should('contain', 'From').and('contain', 'To').and('contain', 'Rate')
      cy.get('.get-rates').contains('Get Rate')
      cy.get('.graph-title').contains('The last 7 days trend')
      cy.get('#Amount').type('500')
      cy.wait(1500)
      cy.get('#From').type('gbp')
      cy.wait(1500)
      cy.get('#To').type('eru')
      cy.wait(1500)
      cy.get('.get-rate-button').click()
      cy.wait(4000)
      cy.get('#To').clear().type('EUR')
      cy.get('.get-rate-button').click()
      cy.wait(1500)
      cy.get('.text-result').invoke('text').should('match', /^[0-9]\d*(\.\d+)?$/)
      
      
      
  })
})
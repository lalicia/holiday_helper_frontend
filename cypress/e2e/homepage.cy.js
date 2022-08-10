describe('homepage',() => {
  it('test functionalty of home page', () => {
    
    cy.viewport(375, 812)
    cy.visit('http://localhost:3000/')
    cy.get('.homebuttons').should('contain' , 'Packing List').and('contain', 'Emergency Contact').and('contain', 'Weather Forecast').and('contain', 'Exchange Rates')
    cy.get('[href="/packing-list"] > .Icon').click()
    cy.wait(1500)
    cy.get('.logo-image').click()
    cy.wait(1500)
    cy.get('[href="/weather"] > .Icon').click()
    cy.wait(1500)
    cy.get('.logo-image').click()
    cy.wait(1500)
    cy.get('[href="/exchange"] > .Icon').click()
    cy.wait(1500)
    cy.get('.logo-image').click()
    cy.wait(1500)
    cy.get('[href="/contacts"] > .Icon').click()
    cy.wait(1500)
  
  })
})
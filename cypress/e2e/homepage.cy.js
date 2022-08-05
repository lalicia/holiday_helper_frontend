describe('homepage',() => {
  it('test functionalty of home page', () => {
    
    cy.visit('http://localhost:3000/')
    cy.get('[href="/packing-list"] > .Icon').click()
    cy.wait(1000)
    cy.get('.logo-image').click()
    cy.wait(1000)
    cy.get('[href="/weather"] > .Icon').click()
    cy.wait(1000)
    cy.get('.logo-image').click()
    cy.wait(1000)
    cy.get('[href="/exchange"] > .Icon').click()
    cy.wait(1000)
    cy.get('.logo-image').click()
    cy.wait(1000)
    cy.get('[href="/contacts"] > .Icon').click()
    cy.wait(1000)
  
  })
})
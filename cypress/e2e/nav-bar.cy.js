describe('nav bar',() => {
  it('test functionalty of nav bar', () => {

      cy.visit('http://localhost:3000')
      cy.get('.menu-icon').click()
      cy.get('#packing').click()
      cy.wait(1000)
      cy.get('.menu-icon').click()
      cy.get('#ex').click()
      cy.wait(1000)
      cy.get('.menu-icon').click()
      cy.get('#weather').click()
      cy.wait(1000)
      cy.get('.menu-icon').click()
      cy.get('#contacts').click()
      cy.wait(1000)
    
  })
})
describe('nav bar',() => {
  it('test functionalty of nav bar', () => {

      cy.viewport(375, 812)
      cy.visit('https://holiday-helper.netlify.app/')
      cy.get('.menu-icon').click()
      cy.get('ul').should('contain', 'Packing List').and('contain', 'Exchange Rates').and('contain', 'Weather Forecast').and('contain', 'Emergency Contacts')
      cy.get('#packing').click()
      cy.wait(1500)
      cy.get('.menu-icon').click()
      cy.get('#ex').click()
      cy.wait(1500)
      cy.get('.menu-icon').click()
      cy.get('#weather').click()
      cy.wait(1500)
      cy.get('.menu-icon').click()
      cy.get('#contacts').click()
      cy.wait(1500)
      cy.get('.menu-icon').click()
      cy.get('#home').click()
      cy.wait(1500)
      
  })
})
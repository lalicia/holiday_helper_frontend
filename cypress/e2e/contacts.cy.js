describe('emergency contacts page', () => {
  it('test functionalty of emergency contacts page page', () => {
    
    cy.viewport(375, 812)
    cy.visit('https://holiday-helper.netlify.app/contacts')
    cy.get('.page-title').contains('Emergency Contacts')
    cy.get('.az-table-headers').should('contain', 'Country').and('contain', 'Fire').and('contain', 'Ambulance').and('contain', 'Police').and('contain', 'Embassy')
    cy.get('.form-select').select('Brazil')
    cy.get('.country-title').contains('Brazil')
    cy.get('.emergency-component-div > :nth-child(3)').contains('Fire: 193')
    cy.get('.emergency-component-div > :nth-child(4)').contains('Police: 190')
    cy.get('.emergency-component-div > :nth-child(5)').contains('Ambulance: 192')
    cy.get('.emergency-component-div > :nth-child(6)').contains('Embassy: +55 6133292300')
    cy.get('.az-table').should('contain', '193').and('contain', '190').and('contain', '192').and('contain', '+55 6133292300')
    
    cy.get('.form-select').select('Germany')
    cy.get('.country-title').contains('Germany')
    cy.get('.emergency-component-div > :nth-child(3)').contains('Fire: 115')
    cy.get('.emergency-component-div > :nth-child(4)').contains('Police: 113')
    cy.get('.emergency-component-div > :nth-child(5)').contains('Ambulance: 118')
    cy.get('.emergency-component-div > :nth-child(6)').contains('Embassy: +33 0144513100')
    cy.get('.az-table').should('contain', '115').and('contain', '113').and('contain', '118').and('contain', '+33 0144513100')
    
   
  })
})
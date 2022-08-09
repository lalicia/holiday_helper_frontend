describe('weather page',() => {
  it('test functionalty of weather page', () => {

      cy.visit('http://localhost:3000')
      cy.get('[href="/weather"] > .Icon').click()
      cy.get('.page-title').contains('Weather Forecast')
      cy.get('.weather-input').type('pasis')
      cy.get('.iconify > path').click({force: true})
      cy.wait(2000)
      cy.get('.weather-input').clear()
      cy.wait(2000)
      cy.get('.weather-input').clear()
      cy.get('.weather-input').type('paris')
      cy.get('.iconify > path').click({force: true})
  
  })
})

describe('weather page',() => {
  it('test functionalty of weather page', () => {
      
      cy.viewport(375, 812)
      cy.visit('http://localhost:3000/weather')
      cy.get('.page-title').contains('Weather Forecast')
      cy.get('.weather-input').type('pasis')
      cy.get('.iconify > path').click({force: true}).request({method:'GET', url:'https://api.openweathermap.org/data/2.5/forecast?q=pasis&units=metric&appid=1a1a53ffdffb4a6940e1c179d178a70a', failOnStatusCode: false,}).as('404 weather').its('status').should('equal', 404)
      cy.wait(2000)
      cy.get('.weather-input').clear()
      cy.wait(2000)
      cy.get('.weather-input').clear()
      cy.get('.weather-input').type('paris')
      cy.get('.iconify > path').click({force: true}).request('https://api.openweathermap.org/data/2.5/forecast?q=paris&units=metric&appid=1a1a53ffdffb4a6940e1c179d178a70a').as('200 weather').its('status').should('equal', 200)
  
  })
})


// https://holiday-helper.netlify.app/

describe('packing-list page', () => {
  it('testing functionalty of packing-list page', () => {

      cy.visit('http://localhost:3000')
      cy.get('.homebuttons1').contains('a').click()
      cy.get('.page-title').contains('Packing List')
      cy.get('.toggle-button').click({ multiple: true })
      cy.get('.toggle-button').click({ multiple: true })
      cy.get('.edit-button').click({ multiple: true })
      cy.get ('#edit-input').clear().type('passport')
      cy.get('.edit-button').click({ multiple: true })
      cy.get('.toggle-button').click({ multiple: true })
      cy.get('.delete-button').click({ multiple: true })
      cy.get('.add-text').type('curvy badger')
      cy.get('.add-todo-add').click()
     
})
})


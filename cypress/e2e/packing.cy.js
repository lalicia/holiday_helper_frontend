
// https://holiday-helper.netlify.app/

describe('packing-list page', () => {
  it('testing functionalty of packing-list page', () => {
      
      cy.viewport(375, 812)
      cy.visit('http://localhost:3000/packing-list')
      cy.get('.page-title').contains('Packing List')
      cy.get(':nth-child(2) > .todo-title > .tick-cross').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .todo-title > .tick-cross').click()
      cy.wait(1000)
      cy.get(':nth-child(3) > .todo-title > .tick-cross').click()
      cy.get('.edit-button').click({ multiple: true })
      cy.get ('#edit-input').clear().type('passport')
      cy.get('.edit-button').click({ multiple: true })
      cy.wait(1000)
      cy.get(':nth-child(4) > .todo-buttons-div > .delete-button').click()
      cy.get('.delete-button').click({ multiple: true })
      cy.get('.add-text').type('curvy badger')
      cy.get('.add-todo-add').click()
     
})
})


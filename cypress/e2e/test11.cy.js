
//Test Case11
describe('Amazon product cart', () => {
    it('Verify that a user can easily modify the amount of a product in the cart. ', () => {
      cy.visit('https://www.amazon.com/cart') 
      cy.get('[data-name="Active Items"] .sc-list-item-content').first().as('Item')
      cy.get('@Item').find('[data-name="quantity"]').clear().type('9')
      cy.get('@Item').find('[data-name="save"]').click()
      cy.get('@Item').find('[data-name="quantity"]').should('have.value', '2')
    })
  })



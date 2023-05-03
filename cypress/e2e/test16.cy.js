

//Test Case16
describe('Amazon order history page', () => {
    it('successfully navigates to order history', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('#nav-link-accountList-nav-line-1').click()
      cy.get('#ap_email').type('email')
      cy.get('.a-button-inner > #continue').click()
      cy.get('#ap_password').type('password')
      cy.get('#signInSubmit').click()
      cy.get('#nav-orders').click()
      cy.url().should('include', '/gp/css/order-history')
      cy.get('.a-box-group > h1')
        .should('contain', 'Your Orders')
    })
  })
  
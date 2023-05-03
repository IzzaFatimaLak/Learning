

//Test Case15
describe('Amazon account settings page', () => {
    it('Confirm successful navigation to account settings.', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('#nav-link-accountList-nav-line-1').click()
      cy.get('#ap_email').type('email')
      cy.get('.a-button-inner > #continue').click()
      cy.get('#ap_password').type('password')
      cy.get('#signInSubmit').click()
      cy.get('#nav-link-accountList-nav-line-1').click()
    })
  })
  
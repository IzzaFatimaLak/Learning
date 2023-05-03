
//Test Case3
describe('Confirm that users can log in to their accounts.', () => {

    it('should allow users to log in with valid credentials', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('#nav-signin-tooltip ').click()
      cy.get('#ap_email').type('izzafatimaghazanfar@gmail.com')
      cy.get('#continue').click()
      cy.get('#ap_password').type('123')
      cy.get('#signInSubmit').click()  
    })
  })


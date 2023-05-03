
//Test Case4
describe('Amazon Login with invalid credentials', () => {

    it('Verify unsuccessful login with invalid credentials.', () => {

      cy.visit('https://www.amazon.com/');
      cy.get('#nav-link-accountList').click()
      cy.get('#ap_email').type('izzafatimaghazanfar@gmail.com');
      cy.get('#continue').click();
      cy.get('#ap_password').type('12345');
      cy.get('#signInSubmit').click();
  
    });

  });








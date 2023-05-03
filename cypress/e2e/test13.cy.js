
//Test Case13
describe('Amazon Checkout procedure with invalid details', () => {
    it('Verify unsuccessful checkout procedure with invalid payment data', () => {
        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('izzafatimaghazanfar@gmail.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('123');
        cy.get('#signInSubmit').click();
        cy.get('#twotabsearchtextbox').type('Iphone 13 pro max')
        cy.get('#nav-search-submit-button').click()
        cy.get('[data-asin="B0BGYQ4TXJ"] > :nth-child(1)').click()
       
        cy.get('#add-to-cart-button').click()
        cy.get('#attach-sidesheet-checkout-button').click()
        cy.get('#address-ui-widgets-countryCode > .a-button-inner > .a-button-text').click()
        cy.get('#address-ui-widgets-countryCode-dropdown-nativeId_166').click()
        cy.get('#address-ui-widgets-enterAddressFullName').type('Izza')
        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type('0000000')
        cy.get('#address-ui-widgets-enterAddressCity').type('Lahore')
        cy.get('#address-ui-widgets-enterAddressPostalCode').type('000')
        cy.get('#address-ui-widgets-use-as-my-default').click()
        cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click()

      
    })
  })
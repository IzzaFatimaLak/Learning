
//Test Case14
describe('Amazon Checkout procedure with invalid details', () => {
    it('Verify that payment transactions are processed accurately.', () => {
    
      cy.visit('https://www.amazon.com')
      cy.get('#twotabsearchtextbox').type('type the product name')
      cy.get('[data-asin="ASIN of the product"]').click()
      cy.get('#add-to-cart-button').click()
      cy.get('#nav-cart-count').click()
      cy.get('[data-action="proceed-to-checkout"]').click() 
      //  valid shipping details
      cy.get('#enterAddressFullName').type('Izza')
      cy.get('#enterAddressAddressLine1').type('I block')
      cy.get('#enterAddressCity').type('Lahore')
      cy.get('#enterAddressStateOrRegion').type('NY')
      cy.get('#enterAddressPostalCode').type('000')
      cy.get('#enterAddressPhoneNumber').type('000000')
      cy.get('#continue').click()
      // valid payment details
      cy.get('#addCreditCardNumber').type('1234567890123456')
      cy.get('#addCreditCardName').type('John Doe')
      cy.get('#addCreditCardExpMonth').select('09')//expired month
      cy.get('#addCreditCardExpYear').select('2017') // Expired year
      cy.get('#addCreditCardVerificationNumber').type('0000')
      cy.get('#continue').click()
    })
  })
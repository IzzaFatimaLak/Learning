
//Test Case1
describe('Amazon Website', () => {
    //The describe block sets up a suite of tests with a description of the Amazon website.\
    //The it block contains the actual test, which verifies that the website loads successfully.

    it('Verify that the Amazon website is loaded successfully.', () => {
      // Navigate to Amazon website.
      cy.visit('https://www.amazon.com')
      // Verify that the "Amazon" logo is displayed.
      cy.title().should('contain', 'Amazon')
      // Verify that the search bar is displayed.
      cy.get('#twotabsearchtextbox').should('be.visible')
      // Verify that the account list is displayed.
      cy.get('#nav-link-accountList').should('be.visible')
      // Verify that the Cart button is visible.
      cy.get('#nav-cart-count').should('be.visible')
      //Verify that the sign-in button is visible
      cy.get('#nav-link-accountList-nav-line-1').should('be.visible')
      //Verify location icon is visible
      cy.get('#nav-global-location-popover-link').should('be.visible')
      
    })
  })


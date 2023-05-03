
//Test Case2
describe('Amazon Homepage', () => {
    it('Verify that the homepage loads without errors.', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('body').should('not.have.class', 'error-page')
      cy.title().should('contain', 'Amazon')
      cy.get('#nav-link-accountList').should('be.visible')
      cy.get('#twotabsearchtextbox').should('be.visible')
      cy.get('#nav-cart-count').should('be.visible') 
    })
  })


  
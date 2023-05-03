
//Test Case10
describe('Amazon shopping cart', () => {

    it('  Verify that a user can remove a product from the cart successfully.', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').type('iPhone 14 pro max').type('{enter}');
      cy.get('[data-asin="B0B7CFD22J"]').click()
      cy.get('#add-to-cart-button').click();
      cy.get('#nav-cart').click();
      cy.url().should('contain', '/cart/');
      cy.get('.sc-list-item-content .sc-action-delete button').click();
      cy.get('.sc-empty-cart-header').should('be.visible');
    });

  });


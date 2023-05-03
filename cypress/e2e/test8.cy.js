
//Test Case8
describe('Amazon shopping cart', () => {

    it('Adds a product to the cart', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').type('air dots').type('{enter}');
      cy.get('[data-asin="B0B4PSQHD5"]').click()
      cy.get('#mbc-buybutton-addtocart-1 > .a-button-inner > .a-button-input').click()
      cy.get('#mbc-offer-view-cart-1 > .a-button-inner > .a-button-input').click()

    });

  });
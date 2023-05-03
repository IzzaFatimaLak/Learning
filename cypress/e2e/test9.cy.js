
//Test Case9
describe('Amazon shopping cart', () => {

    it('Updates cart count when a product is added to cart', () => {
    
        cy.visit('https://www.amazon.com/');
        cy.get('#nav-cart-count').then(($cartCount) => {
                const initialCartCount = parseInt($cartCount.text());
        cy.get('#twotabsearchtextbox').type('watches').type('{enter}');
        cy.get('[data-asin="B0B2HXJZ98"]').click()
        cy.get('#add-to-cart-button').click()
        cy.get('#nav-cart-count').should(($cartCount) => {
        const updatedCartCount = parseInt($cartCount.text());
        expect(updatedCartCount).to.eq(initialCartCount + 1);

        });

      });

    });

  });

//Test Case7
describe('Invalid Search Test', () => {

    it('Displays no search results for invalid product', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').type('zxcasdqwe');
      cy.get('#nav-search-submit-button').click();
      cy.url().should('include', 'k=zxcasdqwe');
    });
  });
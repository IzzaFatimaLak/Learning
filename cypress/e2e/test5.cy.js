
//Test Case5
describe('Amazon Search Functionality', () => {

    it('Verify that the search functionality works accurately!!.', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').type('iPhone');
      cy.get('#nav-search-submit-button').click();
      cy.url().should('include', 'k=iPhone');
      cy.get('.s-result-item').should('have.length.gt', 0);
    });
  });
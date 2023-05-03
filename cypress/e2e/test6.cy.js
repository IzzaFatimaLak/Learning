
//Test Case6
describe('Amazon Search Results Page', () => {

    it('Verify that the search results page shows appropriate esults related to the search term.', () => {
      cy.visit('https://www.amazon.com/');
      cy.get('#twotabsearchtextbox').type('android');
      cy.get('#nav-search-submit-button').click();
      cy.url().should('include', 'k=android');
      cy.get('.s-result-item').should('have.length.gt', 0);
      cy.get('.s-result-item .a-link-normal .a-text-normal').each(($el) => {
      });
    });

  });

  
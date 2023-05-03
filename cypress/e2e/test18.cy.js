
//Test Case18
describe('Reviews and Ratings of the product', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com/')
    })
  
    it('Test that users can leave reviews and ratings for products,and that these reviews are shown precisely on the product pages.', () => {
      cy.get('#twotabsearchtextbox').type('product name')
      cy.get('[value="Go"]').click()
      cy.get('.s-result-item').first().click()
      cy.get('#customer_review-RDLO7S3S2Q95X > div > div > div > div > div.a-section.review-panel > div.a-section.review-panel-footer > div > div.a-section.a-text-center.submit-review > a').click()
      cy.get('#review-text').type('I would love to use it!!!')
      cy.get('#rating-star-5').click()
      cy.get('[data-action="a-expander-toggle"]').click()
      cy.get('#reviewer-name').type('Izza')
      cy.get('#reviewer-email').type('izzafatimaghazanfar@gmail.com')
      cy.get('#reviewer-location').type('Lahore, LHR')
      cy.get('#reviewer-age').type('30')
      cy.get('#submit').click()

  
    })
  })


//Test Case17
describe('Amazon product page', () => {
    it('Test that product pages depict all relevant details.', () => {
      const productUrl = 'https://www.amazon.com/dp/B0BGYF4CZF'
      cy.visit(productUrl)
  
      //Confirm that the product title is visible
      cy.get('#productTitle')
        .should('be.visible')
  
      //Confirm that the product price is displayed.
      cy.get('#price_inside_buybox')
        .should('be.visible')
  
      //Confirm that the product is currently available.
      cy.get('#availability')
        .should('be.visible')
  
      //Confirm that the image of the product is visible.
      cy.get('#imgTagWrapperId > img')
        .should('be.visible')
  
      //Confirm that the description of the product is shown.
      cy.get('#productDescription')
        .should('be.visible')
  
      //Confirm that all the features of the product are displayed.
      cy.get('#feature-bullets > ul > li')
        .should('have.length.gt', 0)
    })
  })
  
  
  
  
  
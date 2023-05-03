describe('Profile Details of User!', () => {
    beforeEach(() => {
      //Test that users can view and handle their profile
//details, including payment scenarios, addresses,
//
        cy.visit('https://www.amazon.com/');
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('izzafatimaghazanfar@gmail.com');
        cy.get('#continue').click();
        cy.get('#ap_password').type('12345');
        cy.get('#signInSubmit').click();
    })
  
    it('Test that users can view and handle their profile details, including payment scenarios, addresses,and order history.', () => {
      cy.get('#nav-link-accountList').click()
      cy.get('[data-nav-ref="nav_ya_signin"]').click()
      cy.get('#ya-myab').contains('Payment options').click()
      cy.get('#ya-myab').contains('Your orders').click()
      cy.url().should('include', '/gp/css/order-history')
      cy.get('.a-box-group.a-spacing-base.order').should('exist')
    })
  })
  
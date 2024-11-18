describe('404 Page Message Validation', () => {

    it('Navigating to a non-existent page and validating 404 code and message', () => {
  
      cy.intercept('/nonexistentpage').as('pageRequest'); // Intercept Page's requests for future validations
      cy.visit('https://www.lumahealth.io/nonexistentpage', {failOnStatusCode: false});
      cy.wait('@pageRequest').its('response.statusCode').should('eq', 404)
      cy.contains('Page Not Found').should('be.visible')
      cy.contains('The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.').should('be.visible')
    })
})
  
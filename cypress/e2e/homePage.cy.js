describe('Luma Health - Home Page Validation', () => {

  it('Visiting HomePage and waiting for it to load successfully', () => {

    cy.intercept('**').as('pageRequests'); // Intercept Page's requests for future validations
    cy.visit('https://www.lumahealth.io');
    cy.verifyLoadingPage(); // Validate that all Page's requests are already finished. In other words, the page is fully loaded.
    cy.verifyHomePageElements(); // Validate that the most important Page's elements are already visible
  })
})

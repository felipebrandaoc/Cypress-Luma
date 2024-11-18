beforeEach(() => {
    cy.visit('https://www.lumahealth.io/');
    cy.intercept('**').as('pageRequests'); // Intercept Page's requests for future validations.
})

describe('Responsive Design Testing', () => {

    it('Testing on Desktop Viewport', () => {
        // Set viewport to desktop size
        cy.viewport(1200, 800)
        cy.verifyLoadingPage(); // Validate that all Page's requests are already finished. In other words, the page is fully loaded.
        cy.verifyHomePageElements(); // Validate that the most important Page's elements are already visible
    });

    it.only('Testing on iPad 2 Viewport', () => {
        // Set viewport to tablet size
        cy.viewport('ipad-2')
        cy.verifyLoadingPage();
        cy.verifyHomePageElements();
    });

    it('Testing on iPhone X Viewport', () => {
        // Set viewport to mobile size
        cy.viewport('iphone-x')
        cy.verifyLoadingPage();
        cy.verifyHomePageElements();
    });
  });
  
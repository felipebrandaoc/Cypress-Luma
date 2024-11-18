import contactSelectors from '../support/selectors/contactFormSelectors.js';
import navigationSelectors from '../support/selectors/navigationLinksSelectors.js';

beforeEach(() => {
  cy.visit('https://www.lumahealth.io/');
  cy.intercept('**').as('pageRequests'); // Intercept Page's requests for future validations.
})

describe('Luma Health - Contact Form', () => {
  
  it('Verify that the Contact Form has loaded correctly', () => {
    cy.contains(navigationSelectors.getADemo).click()
    cy.verifyLoadingPage(); // Validate that all Page's requests are already finished. In other words, the page is fully loaded.
    cy.verifyUrl('lumahealth.io/book-a-demo/')
    cy.verifyContactFormElements()
  });

  it('Verify required fields', () => {
    cy.contains(navigationSelectors.getADemo).click()
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/book-a-demo/')
    cy.verifyContactRequiredFields()
  });

  it('Validate required fields alerts', () => {
    cy.contains(navigationSelectors.getADemo).click()
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/book-a-demo/')
    cy.iframe('.iframe-full-height').find(contactSelectors.submitButton).click({force: true}) // Try to Submit Form with 9 empty required fields.
    cy.iframe('.iframe-full-height').find('[class="hs-error-msg hs-main-font-element"]').should('have.length', 9) // Verify that 9 alerts are shown.
  });

  it('Submit Contact Form Successfully', () => {
    cy.contains(navigationSelectors.getADemo).click()
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/book-a-demo/')
    cy.fillContactFormWithValidData()
    cy.iframe('.iframe-full-height').find(contactSelectors.submitButton).click()
    cy.iframe('.iframe-full-height').contains(contactSelectors.submitSuccessMessage).should('be.visible')
  });
})

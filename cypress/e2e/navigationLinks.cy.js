import navigationSelectors from '../support/selectors/navigationLinksSelectors.js';

beforeEach(() => {
  cy.visit('https://www.lumahealth.io/');
  cy.intercept('**').as('pageRequests'); // Intercept Page's requests for future validations.
})

describe('Luma Health - Navigation Links', () => {

  it('Click on Platform - Redirects to "lumahealth.io/patient-success-platform/"', () => {
    cy.contains(navigationSelectors.platform).click()
    cy.verifyLoadingPage(); // Validate that all Page's requests are already finished. In other words, the page is fully loaded.
    cy.verifyUrl('lumahealth.io/patient-success-platform')
    cy.iframe('.iframe-full-height').contains(navigationSelectors.thePatientSuccessPlatformPageTitle).should('be.visible') // The element is inside an iFrame.
  });

  it('Click on About Us - Redirects to "lumahealth.io/about-us/"', () => {
    cy.get(navigationSelectors.aboutUsCompany).eq(0).click({force: true}) // Forcing click cause element is hidden.
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/about-us/')
    cy.contains(navigationSelectors.meetLuma).should('be.visible')
    cy.contains(navigationSelectors.ourStory).should('be.visible')
  });

  it('Click on Who We Serve - Redirects to "lumahealth.io/who-we-serve/"', () => {
    cy.get(navigationSelectors.whoWeServe).eq(1).click({force: true})
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/who-we-serve/')
    cy.iframe('.iframe-full-height').contains(navigationSelectors.whoWeServeDescription).should('be.visible')
  });

  it('Click on Log in - Redirects to "next.lumahealth.io/login"', () => {
    cy.get(navigationSelectors.login).invoke('removeAttr', 'target').click() // Remove the "target" attribute to load the page in the same tab.
    cy.verifyLoadingPage();
    cy.verifyUrl('next.lumahealth.io/login')
    cy.contains(navigationSelectors.welcomeLoginMessage).should('be.visible')
    cy.get(navigationSelectors.emailInputField).should('be.visible')
    cy.get(navigationSelectors.passwordInputField).should('be.visible')
    cy.get('button').contains(navigationSelectors.signInButton).should('be.visible')
  });

  it('Click on Get a demo - Redirects to "lumahealth.io/book-a-demo/"', () => {
    cy.contains(navigationSelectors.getADemo).click()
    cy.verifyLoadingPage();
    cy.verifyUrl('lumahealth.io/book-a-demo/')
    cy.iframe('.iframe-full-height').contains(navigationSelectors.weDoItAllText).should('be.visible')
    cy.verifyContactFormElements()
  });
})

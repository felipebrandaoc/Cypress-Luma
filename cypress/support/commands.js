// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import homePageSelectors from '../support/selectors/homePageSelectors.js';
import contactSelectors from '../support/selectors/contactFormSelectors.js';
import navigationSelectors from '../support/selectors/navigationLinksSelectors.js';
import 'cypress-iframe';

// Wait for the intercepted requests to be finished.
Cypress.Commands.add('verifyLoadingPage', () => {
    cy.wait('@pageRequests')
});

// Validate the current url.
Cypress.Commands.add('verifyUrl', (url) => {
    cy.url().should('contain', url)
});

// Check that Home Page elements are displayed on the page.
Cypress.Commands.add('verifyHomePageElements', () => {
    cy.get(homePageSelectors.navBar).should('be.visible');
    cy.get(homePageSelectors.homePageLayout).should('be.visible');
    cy.get(homePageSelectors.headerLogIn).should('be.visible');
    cy.get(homePageSelectors.navBarLogo).should('be.visible');
    cy.contains(homePageSelectors.buildYourDemoButton).should('be.visible');
    cy.contains(homePageSelectors.aboutUs).should('be.visible');
    cy.get(homePageSelectors.footer).should('be.visible');
});

// Check that all Contact Form fields are displayed on the page.
Cypress.Commands.add('verifyContactFormElements', () => {
    cy.iframe('.iframe-full-height').find(contactSelectors.firstNameInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.lastNameInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(navigationSelectors.emailInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.phoneNumberInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.companyNameInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.providerRangeSelectField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.ehrSystemSelectField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.organizationTypeSelectField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.whatAreYouInterestedInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.howDidYouHearInputField).should('be.visible')
    cy.iframe('.iframe-full-height').find(contactSelectors.submitButton).should('be.visible')
});

// Check the Contact Form fields that are required.
Cypress.Commands.add('verifyContactRequiredFields', () => {
    cy.iframe('.iframe-full-height').find(contactSelectors.firstNameLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.lastNameLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.workEmailLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.companyNameLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.providerRangeLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.ehrSystemLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.organizationTypeLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.whatAreYouInterestedLabel).children().should('contain', '*')
    cy.iframe('.iframe-full-height').find(contactSelectors.howDidYouHearLabel).children().should('contain', '*')
});

// Fill the Contact Form fields with data.
// We can later parametrize this, sending custom data through reference to the command.
Cypress.Commands.add('fillContactFormWithValidData', () => {
    cy.iframe('.iframe-full-height').find(contactSelectors.firstNameInputField).type('User')
    cy.iframe('.iframe-full-height').find(contactSelectors.lastNameInputField).type('Automation')
    cy.iframe('.iframe-full-height').find(navigationSelectors.emailInputField).type('userautomation@testmail.com')
    cy.iframe('.iframe-full-height').find(contactSelectors.phoneNumberInputField).type('999999999')
    cy.iframe('.iframe-full-height').find(contactSelectors.companyNameInputField).type('Company Test')
    cy.iframe('.iframe-full-height').find(contactSelectors.providerRangeSelectField).select('0-14')
    cy.iframe('.iframe-full-height').find(contactSelectors.ehrSystemSelectField).select('Epic')
    cy.iframe('.iframe-full-height').find(contactSelectors.organizationTypeSelectField).select('Other')
    cy.iframe('.iframe-full-height').find(contactSelectors.whatAreYouInterestedInputField).type('I am Interested on Automation Testing')
    cy.iframe('.iframe-full-height').find(contactSelectors.howDidYouHearInputField).type('I heard from an Automation Testing')
});

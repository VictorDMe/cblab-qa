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

Cypress.Commands.add("login", () => {
    const email = Cypress.env("email");
    const password = Cypress.env("password");
    cy.visit("https://app-hom.cocobambu.com/");
    cy.get(".login-text").click();
    cy.get("#ion-input-2").type(email);
    cy.get("#ion-input-3").type(password);
    cy.get(".buttons-container > :nth-child(1)").click();
    cy.get(".is-primary").click();
    cy.get("[id^=otp_0_]").type("AAAAAA");
    cy.get(".buttons-container > :nth-child(1)").click();
});

Cypress.Commands.add('setMobileViewport', () => {
  cy.viewport('iphone-xr');
});

Cypress.Commands.add('setDesktopViewport', () => {
  cy.viewport(1920, 1080);
});

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

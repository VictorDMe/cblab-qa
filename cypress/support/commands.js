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

Cypress.Commands.add('clickPromocoes', () => {
  cy.get('.nav-bar-content > :nth-child(2)').click();
});

Cypress.Commands.add('clickDelivery', () => {
  cy.get('.nav-bar-content > :nth-child(1)').click(); 
});

Cypress.Commands.add('clickVouchers', () => {
  cy.get('.nav-bar-content > :nth-child(3)').click(); 
});

Cypress.Commands.add('finalizePurchase', () => {
  cy.get('bag-button.ng-star-inserted > .container').click();
  cy.get('.is-primary').click(); 
});

Cypress.Commands.add('selecionarEstado', (estado) => {
  cy.get('.select').click(); 
  cy.wait(2000);
  cy.get('.action-sheet-button-inner').contains(estado).click({ force: true }); 
  cy.get('.content-container button').click(); 
});

Cypress.Commands.add('selecionarVoucher', (tituloVoucher) => {
  cy.get(`.item.ng-star-inserted img.regular[title="${tituloVoucher}"]`).first().click(); 
  cy.get(':nth-child(1) > advertisement-card > .container').click(); 
  cy.get(':nth-child(3) > .voucher-counter > .voucher-plus-btn > img').click(); 
});

Cypress.Commands.add('adicionarFormaPagamento', (metodo) => {
  cy.get('.payment-display-container > .action-container > .md').click(); 
  cy.get('.online-payment').contains(metodo).click(); 
});

Cypress.Commands.add('preencherDados', () => {
  cy.get('body').then(($body) => {
    if ($body.find(':nth-child(4) > .action-container > .ng-star-inserted').length) {
      cy.get(':nth-child(4) > .action-container > .ng-star-inserted').click(); 
      cy.get('#cpf').type(Cypress.env('cpf'));
      cy.get('#phone').type(Cypress.env('phone'));
      cy.get('.container > button').click(); 
    }
  });
});

Cypress.Commands.add('finalizarCompra', () => {
  cy.get('bag-button.ng-star-inserted > .container').click();
  cy.get('.is-primary').click(); 
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

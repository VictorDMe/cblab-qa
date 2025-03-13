describe('Voucher', () => {
  it('desktop', () => {
    cy.setDesktopViewport();
    cy.login();
    cy.clickVouchers();
    cy.get('.select').click(); // Clica em selecionar estado
    cy.wait(2000);
    cy.get('.action-sheet-button-inner').contains('Distrito Federal').click({ force: true }); // Selecina estado
    cy.get('.content-container button').click(); // Clica em continuar
    cy.get('.item.ng-star-inserted img.regular[title="Campanha para testes alterada [Não apague]"]').first().click(); // Clica no primeiro elemento correspondente
    cy.get(':nth-child(1) > advertisement-card > .container').click(); //Clica no voucher
    cy.get(':nth-child(3) > .voucher-counter > .voucher-plus-btn > img').click(); //Clica em +
    cy.get('.payment-display-container > .action-container > .md').click(); //Clica em adicionar forma de pagamento
    cy.get('.online-payment > :nth-child(2)').contains('Pix').click(); //Clica em Pix
    cy.get('body').then(($body) => {
      if ($body.find(':nth-child(4) > .action-container > .ng-star-inserted').length) {
        cy.get(':nth-child(4) > .action-container > .ng-star-inserted').click(); // clicar em adicionar cpf
        cy.get('#cpf').type(Cypress.env('cpf'));
        cy.get('#phone').type(Cypress.env('phone'));
        cy.get('.container > button').click(); // clicar em salvar
      }
    });
    cy.get('bag-button.ng-star-inserted > .container').click(); 
    cy.get('.is-primary').click(); // clicar em finalizar compra
  });

  // Comentando o teste mobile
  /*
  it('mobile', () => {
    cy.setMobileViewport();
    cy.login();
    cy.clickPromocoes();
    cy.get('.main-button').click();
    cy.get('.search-box > input').type('Águas Claras');
    cy.get('.store-alias').contains('Coco Bambu Águas Claras').click();
    cy.clickDelivery();
    cy.clickVouchers();
  });
  */
});
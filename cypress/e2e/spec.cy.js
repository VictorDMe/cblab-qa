describe('Voucher', () => {
  it('desktop', () => {
    cy.setDesktopViewport();
    cy.login();
    cy.clickVouchers();
    cy.selecionarEstado('Distrito Federal');
    cy.selecionarVoucher('Campanha para testes alterada [Não apague]');
    cy.adicionarFormaPagamento('Pix');
    cy.preencherDados();
    cy.finalizarCompra();
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
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

  it('mobile', () => {
    cy.setMobileViewport();
    cy.login();
    cy.clickVouchers();
    cy.selecionarEstado('Distrito Federal');
    cy.selecionarVoucher('Campanha para testes alterada [Não apague]');
    cy.adicionarFormaPagamento('Pix');
    cy.preencherDados();
    cy.finalizarCompra();
  });
});
describe('template spec', () => {
  it('passes on desktop', () => {
    cy.setDesktopViewport();
    cy.login();

  });

  it('passes on mobile', () => {
    cy.setMobileViewport();
    cy.login();

  });
});
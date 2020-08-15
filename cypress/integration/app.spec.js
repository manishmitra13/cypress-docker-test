/// <reference types="Cypress" />

describe('app', () => {
  it('should loac correct URL', () => {
    cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should('include', 'index.html');
  });

  it('should click on the travel category', () => {
    cy.get('a').contains('Travel').click();
    cy.url().should('include', 'travel_2');
    cy.get('h1').contains('Travel');
  })
});

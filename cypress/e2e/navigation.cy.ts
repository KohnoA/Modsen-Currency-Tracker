/// <reference types="cypress" />

describe('Testing application navigation on desktop', () => {
  beforeEach(() => {
    cy.viewport(1440, 750);
  });

  it('The main page should load', () => {
    cy.visit('/');
  });

  it('When you click on a Timeline navigation element, the Timeline page should open', () => {
    cy.visit('/');

    cy.get('a').contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('When you click on a Bank Card navigation element, the Bank Card page should open', () => {
    cy.visit('/');

    cy.get('a').contains('Bank Card').click();
    cy.url().should('include', '/bank-card');
  });

  it('When you click on a Contacts navigation element, the Contacts page should open', () => {
    cy.visit('/');

    cy.get('a').contains('Contacts').click();
    cy.url().should('include', '/contacts');
  });

  it('When you click on a Home navigation element, the Home page should open', () => {
    cy.visit('/timeline');

    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');
  });

  it('If the path does not exist, there should be a 404 page', () => {
    cy.visit('/hjewhfkb');

    cy.get('h2').should('contain', '404');
    cy.get('p').should('contain', 'Page Not Found');
    cy.get('a').should('contain', 'Return to Home');
  });
});

describe('Testing application navigation on mobile', () => {
  beforeEach(() => {
    cy.viewport(768, 750);
  });

  it('The main page should load', () => {
    cy.visit('/');
  });

  it('When you click on a Timeline navigation element, the Timeline page should open', () => {
    cy.visit('/');

    cy.get('[data-testid=burger-menu]').click();
    cy.get('a').contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('When you click on a Bank Card navigation element, the Bank Card page should open', () => {
    cy.visit('/');

    cy.get('[data-testid=burger-menu]').click();
    cy.get('a').contains('Bank Card').click();
    cy.url().should('include', '/bank-card');
  });

  it('When you click on a Contacts navigation element, the Contacts page should open', () => {
    cy.visit('/');

    cy.get('[data-testid=burger-menu]').click();
    cy.get('a').contains('Contacts').click();
    cy.url().should('include', '/contacts');
  });

  it('When you click on a Home navigation element, the Home page should open', () => {
    cy.visit('/timeline');

    cy.get('[data-testid=burger-menu]').click();
    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');
  });

  it('If the path does not exist, there should be a 404 page', () => {
    cy.visit('/hjewhfkb');

    cy.get('h2').should('contain', '404');
    cy.get('p').should('contain', 'Page Not Found');
    cy.get('a').should('contain', 'Return to Home');
  });
});

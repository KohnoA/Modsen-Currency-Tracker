/// <reference types="cypress" />

describe('Application change testing', () => {
  it('Changing theme should work correctly', () => {
    cy.visit('/');

    cy.get('[data-testid=layout]').should('not.have.class', 'lightTheme');
    cy.get('[data-testid=switch-theme]').click();

    cy.get('[data-testid=layout]').should('have.class', 'lightTheme');
    cy.get('[data-testid=switch-theme]').click();
  });

  it('The theme of the modal window must match the theme of the application', () => {
    cy.visit('/timeline');

    cy.contains('Build Chart').click();
    cy.get('[data-testid=modal]').should('not.have.class', 'lightTheme');
    cy.contains('Close Modal').click();

    cy.get('[data-testid=switch-theme]').click();
    cy.contains('Build Chart').click();
    cy.get('[data-testid=modal]').should('have.class', 'lightTheme');
    cy.contains('Close Modal').click();
    cy.get('[data-testid=switch-theme]').click();
  });

  it('When reloading the page, the selected theme should be saved', () => {
    cy.visit('/');

    cy.get('[data-testid=layout]').should('not.have.class', 'light');
    cy.get('[data-testid=switch-theme]').click();
    cy.get('[data-testid=layout]').should('have.class', 'lightTheme');

    cy.reload();

    cy.get('[data-testid=layout]').should('have.class', 'lightTheme');
    cy.get('[data-testid=switch-theme]').click();
  });
});

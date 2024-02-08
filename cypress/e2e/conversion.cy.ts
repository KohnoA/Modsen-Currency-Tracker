/// <reference types="cypress" />

describe('Testing the currency conversion module', () => {
  beforeEach('Start Mocked Server', () => {
    cy.intercept('https://api.currencyapi.com/v3/**', { fixture: 'latest.json' }).as('currencyApi');
  });

  it('The list of currencies should be displayed', () => {
    cy.visit('/');

    cy.get('[data-testid=currencies-list]').should('exist');
    cy.get('[data-testid=currency-card]').contains('Commercial Dollar').click();
    cy.get('[data-testid=modal]').should('exist');
    cy.contains('Currency Converter').should('exist');

    cy.contains('Base currency: USD');
  });

  it('The modal window with the form should close', () => {
    cy.visit('/');

    cy.get('[data-testid=currency-card]').contains('Commercial Dollar').click();
    cy.contains('Close Modal').click();
    cy.get('[data-testid=modal]').should('not.exist');
  });

  it('The amount of allowed currency must be greater than 0 and not more than 1,000,000', () => {
    cy.visit('/');

    cy.get('[data-testid=currency-card]').contains('Commercial Dollar').click();

    cy.get('[data-testid=currency-count]').clear().type('1000001').should('have.value', '1000001');
    cy.get('[data-testid=get-rate]').click();
    cy.get('input:invalid').should('have.attr', 'data-testid', 'currency-count');

    cy.get('[data-testid=currency-count]').clear().type('-100').should('have.value', '-100');
    cy.get('[data-testid=get-rate]').click();
    cy.get('input:invalid').should('have.attr', 'data-testid', 'currency-count');
  });

  it('The conversion result should be displayed', () => {
    cy.visit('/');

    cy.get('[data-testid=currency-card]').contains('Commercial Dollar').click();
    cy.get('[data-testid=currency-count]').clear().type('100').should('have.value', '100');

    cy.get('[data-testid=get-rate]').click();
    cy.wait('@currencyApi');

    cy.get('[data-testid=result-conversion]').should('exist');
  });
});

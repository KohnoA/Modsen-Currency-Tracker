/// <reference types="cypress" />

describe('Testing the chart module', () => {
  it('The graph should be displayed', () => {
    cy.visit('/timeline');

    cy.get('[data-testid=candle-stick]').should('exist');
    cy.contains('Build Chart').should('exist');
    cy.get('[data-testid=trading-pair]').should('exist');
  });

  it('A modal window with the build chart form should open', () => {
    cy.visit('/timeline');

    cy.contains('Build Chart').click();
    cy.get('[data-testid=modal]');
    cy.contains('Create Your Chart').should('exist');
  });

  it('The date must be no more than two months from the current one', () => {
    cy.visit('/timeline');

    cy.contains('Build Chart').click();
    cy.get('[data-testid=modal]');
    cy.contains('Create Your Chart').should('exist');

    cy.get('input[type=date]').type('2024-01-23').should('have.value', '2024-01-23');
    cy.get('[data-testid=submit-chart]').click();
    cy.get('input[type=date]').should('have.focus');

    cy.get('[data-testid=modal]').should('exist');
  });

  it('When creating a new chart, the modal window should close and the currency pair will change', () => {
    cy.visit('/timeline');

    cy.contains('Build Chart').click();
    cy.get('[data-testid=modal]');
    cy.contains('Create Your Chart').should('exist');

    cy.get('select').select('LTC/BTC').should('have.value', 'LTC/BTC');
    cy.get('input[type=date]').type('2022-01-23').should('have.value', '2022-01-23');

    cy.intercept('https://rest.coinapi.io/v1/ohlcv/**').as('coinApi');
    cy.get('[data-testid=submit-chart]').click();
    cy.wait('@coinApi');

    cy.get('[data-testid=modal]').should('not.exist');

    cy.contains('LTC/BTC').should('exist');
    cy.get('[data-testid=candle-stick]').should('exist');
  });
});

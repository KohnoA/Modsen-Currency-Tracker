/// <reference types="cypress" />

describe('Testing the chart module', () => {
  beforeEach(() => cy.visit('/timeline'));

  it('The timeline module should be displayed', () => {
    cy.get('[data-testid=candle-stick]').should('exist');
    cy.contains('Build Chart').should('exist');
    cy.get('[data-testid=timeline-toolbar]').should('exist');
  });

  it('A modal window with the build chart form should open', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=modal]');
    cy.contains('Create Your Chart').should('exist');
  });

  it('The modal window with the form should close', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=modal]').should('exist');
    cy.contains('Create Your Chart').should('exist');

    cy.contains('Close Modal').click();
    cy.get('[data-testid=modal]').should('not.exist');
  });

  it('When changing the currency, a modal window with a form should open', () => {
    cy.get('[data-testid=change-currency]').select('Euro');
    cy.get('[data-testid=modal]').should('exist');
  });

  it('The number of days input field should not allow incorrect values', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=amount-days]').clear().type('32').should('have.value', '3');
    cy.get('[data-testid=amount-days]').clear().type('-12').should('have.value', '2');
  });

  it('If the value is zero, an alert should be displayed', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=amount-days]').clear().type('0').should('have.value', '0');

    cy.get('[data-testid=invalid-days-value]').should('exist');
    cy.get('[data-testid=submit-chart]').should('have.attr', 'disabled');
    cy.get('[data-testid=randomize]').should('have.attr', 'disabled');
  });

  it('The number of table rows must match the number of days', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=amount-days]').clear().type('10').should('have.value', '10');
    cy.get('[data-testid=ohlc-row]').should('have.length', 10);
  });

  it('A message indicating successful plotting should be displayed.', () => {
    cy.contains('Build Chart').click();

    cy.get('[data-testid=modal]').should('exist');

    cy.get('[data-testid=amount-days]').clear().type('10').should('have.value', '10');
    cy.get('[data-testid=randomize]').click();
    cy.get('[data-testid=submit-chart]').click();

    cy.get('[data-testid=modal]').should('not.exist');
    cy.get('[data-testid=success-message]').should('exist').should('have.css', 'opacity', '1');
  });
});

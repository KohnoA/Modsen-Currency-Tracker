import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';

import '@testing-library/jest-dom';

import CurrenciesList from './CurrenciesList';

describe('Testing CurrenciesList conponent', () => {
  beforeEach(() =>
    render(<CurrenciesList title="Test list" data={DEFAULT_QUOTES} />, { wrapper: BrowserRouter }),
  );

  it('Should be displayed', () => {
    expect(screen.getByTestId('currencies-list')).toBeInTheDocument();

    const title = screen.getByTestId('currencies-list-title');
    const cards = screen.getAllByTestId('currency-card');

    expect(title).toHaveTextContent('Test list');
    expect(cards.length).toBe(DEFAULT_QUOTES.length);
  });
});

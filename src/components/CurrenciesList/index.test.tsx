import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { DEFAULT_CURRENCIES } from '@/constants/defaultCurrencies';

import '@testing-library/jest-dom';

import { CurrenciesList } from '.';

describe('Testing CurrenciesList conponent', () => {
  beforeEach(() =>
    render(<CurrenciesList title="Test list" data={DEFAULT_CURRENCIES} />, {
      wrapper: BrowserRouter,
    }),
  );

  it('Should be displayed', () => {
    expect(screen.getByTestId('currencies-list')).toBeInTheDocument();

    const title = screen.getByTestId('currencies-list-title');
    const cards = screen.getAllByTestId('currency-card');

    expect(title).toHaveTextContent('Test list');
    expect(cards.length).toBe(DEFAULT_CURRENCIES.length);
  });
});

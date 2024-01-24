import { render, screen } from '@testing-library/react';
import CurrencyCard from './CurrencyCard';
import { DEFAULT_QUOTES } from '@/db/defaultCurrencies';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { truncateNumber } from '@/utils';
import { CURRENCY_MODAL_QUERY_KEY } from '@/constants';

describe('Testing CurrenciesList conponent', () => {
  beforeEach(() => render(<CurrencyCard {...DEFAULT_QUOTES[0]} />, { wrapper: BrowserRouter }));

  it('Should be displayed', async () => {
    const { name, rate, code } = DEFAULT_QUOTES[0];

    expect(screen.getByTestId('currency-card')).toBeInTheDocument();

    const nameNode = screen.getByTestId('currency-card-name');
    const rateNode = screen.getByTestId('currency-card-rate');
    const expectedRateContent = `${code} ${truncateNumber(rate)}`;

    expect(nameNode).toHaveTextContent(name);
    expect(rateNode).toHaveTextContent(expectedRateContent);
    expect(screen.getByTestId('currency-card-link')).toHaveAttribute(
      'href',
      `/?${CURRENCY_MODAL_QUERY_KEY}=${code}`,
    );
  });
});

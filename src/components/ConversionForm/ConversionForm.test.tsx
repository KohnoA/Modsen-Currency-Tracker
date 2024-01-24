import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ConversionForm from './ConversionForm';
import axios from 'axios';
import { currenciesResponseMock } from '@/__mocks__/currenciesResponseMock';
import { truncateNumber } from '@/utils';
import '@testing-library/jest-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Testing ConversionForm component', () => {
  beforeEach(() => render(<ConversionForm base="USD" />));

  afterAll(() => jest.clearAllMocks());

  it('Should be displayed', () => {
    expect(screen.getByTestId('conversion-form')).toBeInTheDocument();
    expect(screen.getByText(/Currency Converter/)).toBeInTheDocument();
    expect(screen.getByTestId('get-rate')).toBeInTheDocument();
  });

  it('The selected base currency should be displayed', () => {
    const base = screen.getByTestId('base-currency');

    expect(base).toBeInTheDocument();
    expect(base).toHaveTextContent('USD');
  });

  it('There should not be a choice of base currency from target currencies', () => {
    const targetList = screen.getByTestId('target-currency');

    expect(targetList).toBeInTheDocument();
    expect(targetList).not.toHaveValue('USD');
  });

  it('The user can enter a value from 1 to 1000000', () => {
    const countInput = screen.getByTestId('currency-count');
    const submitButton = screen.getByTestId('get-rate');

    expect(countInput).toBeInTheDocument();

    fireEvent.change(countInput, {
      target: { value: '1000001' },
    });
    fireEvent.click(submitButton);
    expect(countInput).toBeInvalid();

    fireEvent.change(countInput, {
      target: { value: -100 },
    });
    fireEvent.click(submitButton);
    expect(countInput).toBeInvalid();
  });

  it('Should correctly return the conversion result', async () => {
    const targetCurrency = 'EUR';
    const eurRate = currenciesResponseMock.data[targetCurrency].value;
    const count = 100;

    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: currenciesResponseMock }));

    fireEvent.change(screen.getByTestId('target-currency'), {
      target: { value: targetCurrency },
    });
    fireEvent.change(screen.getByTestId('currency-count'), {
      target: { value: count },
    });

    fireEvent.click(screen.getByTestId('get-rate'));

    await waitFor(() => {
      const resultConversion = screen.getByTestId('result-conversion');
      const correctResult = truncateNumber(eurRate * count);

      expect(resultConversion).toBeInTheDocument();
      expect(resultConversion).toHaveTextContent(`${targetCurrency}: ${correctResult}`);
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
});

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';

import { DEFAULT_OHLC_PAIRS } from '@/db/defaultOhlcPairs';

import '@testing-library/jest-dom';

import HistoryForm from './HistoryForm';
import { MAX_DATE, MIN_DATE } from './HistoryForm.constants';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const onSubmitMock = jest.fn;

describe('Testing HistoryForm component', () => {
  beforeEach(() => render(<HistoryForm onSubmit={onSubmitMock} />));

  afterAll(() => jest.clearAllMocks());

  it('Should be displayed', () => {
    screen.debug();
    expect(screen.getByTestId('history-form')).toBeInTheDocument();
    expect(screen.getByText(/Create Your Chart/)).toBeInTheDocument();
    expect(screen.getByTestId('submit-chart')).toBeInTheDocument();
    expect(screen.getByTestId('currency-pair')).toBeInTheDocument();
    expect(screen.getByTestId('trades-date')).toBeInTheDocument();
  });

  it('Date input must have restrictions', () => {
    const inputDate = screen.getByTestId('trades-date');

    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveAttribute('min', MIN_DATE);
    expect(inputDate).toHaveAttribute('max', MAX_DATE);
  });

  it('If a value entered is greater or less than the bounds, an alert should be displayed', () => {
    const inputDate = screen.getByTestId('trades-date');

    fireEvent.change(inputDate, {
      target: { value: '2000-01-01' },
    });
    fireEvent.click(screen.getByTestId('submit-chart'));

    expect(inputDate).toBeInvalid();
  });

  it('', async () => {
    const inputDate = screen.getByTestId('trades-date');
    const tradesPair = screen.getByTestId('currency-pair');
    mockedAxios.get.mockImplementation(() => Promise.resolve({ data: ohlcvReponseMock }));

    fireEvent.change(inputDate, {
      target: { value: '2020-01-01' },
    });
    fireEvent.change(tradesPair, {
      target: { value: DEFAULT_OHLC_PAIRS[1] },
    });
    fireEvent.click(screen.getByTestId('submit-chart'));

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
});

import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import { DEFAULT_AMOUNT_OF_DAYS, HistoryForm } from '.';

const onSubmitMock = jest.fn();

describe('Testing HistoryForm component', () => {
  beforeEach(() => render(<HistoryForm onSubmit={onSubmitMock} />));

  afterAll(() => jest.clearAllMocks());

  it('Should be displayed', () => {
    screen.debug();
    expect(screen.getByTestId('history-form')).toBeInTheDocument();
    expect(screen.getByText(/Create Your Chart/)).toBeInTheDocument();
    expect(screen.getByTestId('submit-chart')).toBeInTheDocument();
    expect(screen.getByTestId('amount-days')).toBeInTheDocument();
    expect(screen.getByTestId('randomize')).toBeInTheDocument();
  });

  it('The number of table rows must match the number of days', () => {
    const amountOfDaysInput = screen.getByTestId<HTMLInputElement>('amount-days');

    expect(amountOfDaysInput.value).toBe(DEFAULT_AMOUNT_OF_DAYS);
    expect(screen.getAllByTestId('ohlc-row').length).toBe(14);

    const newValue = '4';

    fireEvent.change(amountOfDaysInput, {
      target: { value: newValue },
    });

    expect(amountOfDaysInput.value).toBe(newValue);
    expect(screen.getAllByTestId('ohlc-row').length).toBe(Number(newValue));

    const nullValue = '0';

    fireEvent.change(amountOfDaysInput, {
      target: { value: nullValue },
    });

    expect(amountOfDaysInput.value).toBe(nullValue);
    expect(screen.queryByTestId('ohlc-row')).toBeNull();
    expect(screen.getByTestId('invalid-days-value')).toBeInTheDocument();
  });

  it('The onSubmit function should be called when the build button is clicked', () => {
    const submitButton = screen.getByTestId('submit-chart');

    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalled();
  });

  it('The submit button should be disabled if the number of days is zero', () => {
    const submitButton = screen.getByTestId('submit-chart');
    const amountOfDaysInput = screen.getByTestId('amount-days');

    fireEvent.change(amountOfDaysInput, {
      target: {
        value: '0',
      },
    });

    expect(submitButton).toHaveAttribute('disabled');

    fireEvent.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});

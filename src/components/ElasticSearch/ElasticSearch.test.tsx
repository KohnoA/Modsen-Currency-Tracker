import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';

import ElasticSearch from './ElasticSearch';

describe('Testing CanldeStick component', () => {
  beforeEach(() => render(<ElasticSearch options={['Euro', 'Yuan']} onChange={jest.fn} />));

  it('Should be displayed', () => {
    expect(screen.getByTestId('elastic-search')).toBeInTheDocument();
    expect(screen.getByTestId('elastic-search-input')).toBeInTheDocument();
    expect(screen.getByTestId('elastic-search-submit')).toBeInTheDocument();
  });

  it('When a match is found, it shows options', async () => {
    const input = screen.getByTestId('elastic-search-input');

    fireEvent.change(input, {
      target: { value: 'Eu' },
    });

    await waitFor(() => {
      expect(screen.getByTestId('elastic-search-options')).toBeInTheDocument();
    });
  });
});

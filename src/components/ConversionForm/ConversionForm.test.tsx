import { render, screen } from '@testing-library/react';
import ConversionForm from './ConversionForm';
import '@testing-library/jest-dom';

describe('Testing ConversionForm component', () => {
  it('should be displayed', () => {
    render(<ConversionForm />);

    expect(screen.getByTestId('conversion-form')).toBeInTheDocument();
  });
});

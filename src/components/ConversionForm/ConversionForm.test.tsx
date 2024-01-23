import { render, screen } from '@testing-library/react';
import ConversionForm from './ConversionForm';

describe('Tetsing ConversionForm component', () => {
  it('should be displayed', () => {
    render(<ConversionForm />);

    expect(screen.getByTestId('conversion-form')).toBeInTheDocument();
  });
});

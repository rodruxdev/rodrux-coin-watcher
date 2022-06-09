import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ExchangeSelector from '@components/ExchangeSelector';

describe('ExchangeSelector Tests', () => {
  const options = ['Binance', 'Bitso', 'Otro'];
  test('renders content', () => {
    const component = render(<ExchangeSelector options={options} />);
    component.getByLabelText('exchange selector');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

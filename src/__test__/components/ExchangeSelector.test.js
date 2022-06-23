import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ExchangeSelector from '@components/ExchangeSelector';
import { render } from '../mocks/test-utils';

describe('ExchangeSelector Tests', () => {
  const options = ['Binance', 'Bitso', 'Otro'];
  test('renders content', () => {
    const component = render(<ExchangeSelector options={options} />);
    component.getByLabelText('exchange selector');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

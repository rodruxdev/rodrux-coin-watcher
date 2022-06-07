import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinSelector from '@components/CoinSelector';

describe('CoinSelector Tests', () => {
  const options = ['BTC', 'ETH', 'BNB'];
  test('renders content', () => {
    const component = render(<CoinSelector options={options} />);
    component.getByLabelText('coin');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

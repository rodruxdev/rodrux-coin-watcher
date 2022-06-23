import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import CoinSelector from '@components/CoinSelector';
import { render } from '../mocks/test-utils';

describe('CoinSelector Tests', () => {
  const options = ['BTC', 'ETH', 'BNB'];
  test('renders content', () => {
    const component = render(<CoinSelector options={options} />);
    component.getByLabelText('coin');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

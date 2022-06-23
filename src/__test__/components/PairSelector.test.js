import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import PairSelector from '@components/PairSelector';
import { render } from '../mocks/test-utils';

describe('PairSelector Tests', () => {
  const options = ['BTC/USD', 'ETH/USD', 'BNB/USD'];
  test('renders content', () => {
    const component = render(<PairSelector options={options} />);
    component.getByLabelText('pair selector');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PairSelector from '@components/PairSelector';

describe('PairSelector Tests', () => {
  const options = ['BTC/USD', 'ETH/USD', 'BNB/USD'];
  test('renders content', () => {
    const component = render(<PairSelector options={options} />);
    component.getByLabelText('pair selector');
    expect(component.getAllByRole('option').length).toBe(options.length);
  });
});

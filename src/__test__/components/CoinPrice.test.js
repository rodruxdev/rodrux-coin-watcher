import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinPrice from '@components/CoinPrice';

describe('CoinPrice Tests', () => {
  test('renders content', () => {
    const component = render(<CoinPrice />);
    component.getByText('Bitcoin (BTC)');
    component.getByText('$0.00002452 USD');
  });
});

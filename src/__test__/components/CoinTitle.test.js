import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinTitle from '@components/CoinTitle';

describe('CoinTitle Tests', () => {
  test('renders content', () => {
    const component = render(<CoinTitle />);
    component.getByText('Bitcoin(BTC)');
  });
});

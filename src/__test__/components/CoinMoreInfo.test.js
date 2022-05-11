import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinMoreInfo from '../../components/CoinMoreInfo';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<CoinMoreInfo />);
    component.getByText('Market Cap');
    component.getByText('$772,504,060,812');
  });
});

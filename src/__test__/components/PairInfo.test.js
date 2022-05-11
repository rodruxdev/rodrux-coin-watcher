import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PairInfo from '../../components/PairInfo';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<PairInfo />);
    component.getByText('Price(USD)');
    component.getByText('$0.00002452');
  });
});

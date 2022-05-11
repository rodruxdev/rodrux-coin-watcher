import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TableHead from '../../components/TableHead';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<TableHead />);
    component.getByText('#');
    component.getByText('Coin');
    component.getByText('Price');
    component.getByText('1h');
    component.getByText('24h');
    component.getByText('7d');
    component.getByText('Mkt Cap');
    component.getByText('24h Volume');
  });
});

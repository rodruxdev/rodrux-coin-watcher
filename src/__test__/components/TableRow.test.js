import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import TableRow from '@components/TableRow';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<TableRow />);
    component.getByText('1');
    component.getByText('BTC');
    component.getByText('$0.00002452');
    component.getByText('1234.5%');
    component.getByText('-2.5%');
    component.getByText('1.7%');
    component.getByText('$772,504,060,812');
    component.getByText('$32,839,886,478');
  });
});

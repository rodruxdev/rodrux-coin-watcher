import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinsTable from '@containers/CoinsTable';
import TableRow from '@components/TableRow';

describe('CoinsTable Tests', () => {
  test('renders content', () => {
    const container = render(
      <CoinsTable>
        <TableRow />
      </CoinsTable>
    );
    container.getByText('#');
    container.getByText('Coin');
    container.getByText('Price');
    container.getByText('1h');
    container.getByText('24h');
    container.getByText('7d');
    container.getByText('Mkt Cap');
    container.getByText('24h Volume');
    container.getByText('1');
    container.getByText('BTC');
    container.getByText('$0.00002452');
    container.getByText('1234.5%');
    container.getByText('-2.5%');
    container.getByText('1.7%');
    container.getByText('$772,504,060,812');
    container.getByText('$32,839,886,478');
  });
});

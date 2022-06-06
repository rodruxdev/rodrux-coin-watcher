import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinsTable from '@containers/CoinsTable';
import TableRow from '@components/TableRow';

describe('CoinsTable Tests', () => {
  const coin = {
    name: 'Bitcoin',
    ticker: 'BTC',
    price: 0.00002452,
    images: ['/', '/', '/'],
    percentageChanges: [1234.5, -2.5, 1.7],
    marketCap: '772,504,060,812',
    ath: '772,504',
    athPercentage: 1234.5,
    coinId: 1,
  };
  test('renders content', () => {
    const container = render(
      <CoinsTable>
        <TableRow
          coinId={coin.coinId}
          name={coin.name}
          ticker={coin.ticker}
          price={coin.price}
          marketCap={coin.marketCap}
          percentageChanges={coin.percentageChanges}
          ath={coin.ath}
          athPercentage={coin.athPercentage}
        />
      </CoinsTable>
    );
    container.getByText('#');
    container.getByText('Coin');
    container.getByText('Price');
    container.getByText('1h');
    container.getByText('24h');
    container.getByText('7d');
    container.getByText('Mkt Cap');
    container.getByText('ATH');
    container.getByText('ATH Change');
    container.getByText(coin.coinId);
    container.getByText(coin.name);
    container.getByText(`$${coin.price}`);
    container.getByText(`$${coin.ath}`);
  });
});

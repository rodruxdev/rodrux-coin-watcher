import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import CoinPrice from '@components/CoinPrice';

describe('CoinPrice Tests', () => {
  const props = {
    name: 'Ethereum',
    ticker: 'ETH',
    imageURL: '/',
    price: '12345.67',
  };
  test('renders content', () => {
    const component = render(
      <CoinPrice
        name={props.name}
        ticker={props.ticker}
        image={props.imageURL}
        price={props.price}
      />
    );
    const image = component.getByAltText(`${props.name} logo`);
    fireEvent.load(image);
    component.getByText(`${props.name} (${props.ticker})`);
    component.getByText(`$${props.price} USD`);
  });
});

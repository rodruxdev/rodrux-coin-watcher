import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import CoinTitle from '@components/CoinTitle';

describe('CoinTitle Tests', () => {
  test('renders content', () => {
    const props = {
      coinName: 'Ethereum',
      ticker: 'ETH',
      imageURL: '/',
    };
    const component = render(
      <CoinTitle
        name={props.coinName}
        ticker={props.ticker}
        image={props.imageURL}
      />
    );
    const image = component.getByAltText(`${props.coinName} logo`);
    fireEvent.load(image);
  });
});

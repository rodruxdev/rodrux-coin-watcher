import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import CoinPrice from '@components/CoinPrice';

describe('CoinPrice Tests', () => {
  test('renders content', () => {
    const props = {
      title: 'Ethereum(ETH)',
      imageURL: '/',
      price: '$12345.67 USD',
    };
    const component = render(
      <CoinPrice title={props.title} image={props.imageURL}>
        {props.price}
      </CoinPrice>
    );
    const image = component.getByAltText(`${props.title} logo`);
    fireEvent.load(image);
    component.getByText(props.title);
    component.getByText(props.price);
  });
});

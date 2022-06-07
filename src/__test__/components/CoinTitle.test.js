import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import CoinTitle from '@components/CoinTitle';

describe('CoinTitle Tests', () => {
  test('renders content', () => {
    const props = {
      title: 'Ethereum(ETH)',
      imageURL: '/',
    };
    const component = render(
      <CoinTitle title={props.title} image={props.imageURL} />
    );
    component.getByText(props.title);
    const image = component.getByAltText(`${props.title} logo`);
    fireEvent.load(image);
  });
});

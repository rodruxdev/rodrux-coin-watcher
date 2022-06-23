import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import ExchangePair from '@containers/ExchangePair';

describe('ExchangePair Tests', () => {
  const exchangeName = 'Binance';
  const imageURL = '/';
  test('renders content', () => {
    const component = render(
      <ExchangePair image={imageURL} exchange={exchangeName} />
    );
    const image = component.getByAltText(`${exchangeName} logo`);
    fireEvent.load(image);
  });
});

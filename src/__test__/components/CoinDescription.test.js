import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinDescription from '@components/CoinDescription';

describe('CoinDescription Tests', () => {
  const description = 'Lorem';
  test('renders content', () => {
    const component = render(<CoinDescription>${description}</CoinDescription>);
    component.getByText('Description');
    component.getByText(description);
  });
});

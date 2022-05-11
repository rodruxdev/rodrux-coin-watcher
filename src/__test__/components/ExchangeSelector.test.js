import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import ExchangeSelector from '@components/ExchangeSelector';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<ExchangeSelector />);
    component.getByLabelText('exchange selector');
  });
});

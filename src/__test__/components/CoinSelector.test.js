import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinSelector from '@components/CoinSelector';

describe('CoinSelector Tests', () => {
  test('renders content', () => {
    const component = render(<CoinSelector />);
    component.getByLabelText('coin');
  });
});

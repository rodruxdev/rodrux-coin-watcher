import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PairSelector from '@components/PairSelector';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<PairSelector />);
    component.getByLabelText('pair selector');
  });
});

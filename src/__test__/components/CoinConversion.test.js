import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import CoinConversion from '@components/CoinConversion';
import { render } from '../mocks/test-utils';

describe('CoinConversion Tests', () => {
  test('renders content', () => {
    const component = render(<CoinConversion />);
    component.getByLabelText('coin convertor');
  });
});

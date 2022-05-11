import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoinConversion from '../../components/CoinConversion';

describe('CoinConversion Tests', () => {
  test('renders content', () => {
    const component = render(<CoinConversion />);
    component.getByLabelText('coin convertor');
  });
});

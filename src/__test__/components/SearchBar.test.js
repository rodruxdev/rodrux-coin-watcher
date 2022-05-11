import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SearchBar from '@components/SearchBar';

describe('CoinMoreInfo Tests', () => {
  test('renders content', () => {
    const component = render(<SearchBar />);
    component.getByLabelText('search');
  });
});

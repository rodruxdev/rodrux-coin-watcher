import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CoingeckoMention from '@components/CoingeckoMention';

describe('CoingeckoMention Tests', () => {
  test('renders content', () => {
    const component = render(<CoingeckoMention />);
    component.getByText('Powered by');
    const coingeckoLink = component.getByRole('link');
    expect(coingeckoLink).toHaveAttribute('href', 'https://www.coingecko.com/');
  });
});

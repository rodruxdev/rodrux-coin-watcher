import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import HeroText from '@components/HeroText';

describe('HeroText Tests', () => {
  test('renders content', () => {
    const component = render(<HeroText />);
    component.getByText('RODRUX COIN WATCHER');
    component.getByText(
      'Search your favorite cryptocoin and get its basic info.'
    );
  });
});
